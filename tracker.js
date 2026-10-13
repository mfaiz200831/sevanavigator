/* =====================================================
   SEVANAVIGATOR - tracker.js
   Application Timeline & Follow-up Tracker
   -----------------------------------------------------
   Lets the user record a submission date, add manual
   status notes, see elapsed time, and create a simple
   calendar reminder for follow-up. Everything stays on
   the device. SevaNavigator never claims to know live
   application status.

   Load AFTER script.js, tools.js and readiness.js.
   ===================================================== */

(function () {
  'use strict';

  /* ---------- translation ---------- */
  var HI = {
    'Application tracker': 'आवेदन ट्रैकर',
    'Record your submission and plan follow-ups. This is your personal notebook only. SevaNavigator cannot see live application status.': 'अपना आवेदन दर्ज करें और फॉलो-अप की योजना बनाएँ। यह केवल आपकी निजी नोटबुक है। SevaNavigator लाइव आवेदन स्थिति नहीं देख सकता।',
    'Submission date': 'आवेदन जमा करने की तारीख',
    'I have submitted / applied': 'मैंने आवेदन जमा कर दिया है',
    'Expected processing (optional)': 'अपेक्षित प्रक्रिया समय (वैकल्पिक)',
    'Days since submission': 'आवेदन के बाद के दिन',
    'Current status note': 'वर्तमान स्थिति नोट',
    'Add a short note (what the portal or office told you)': 'एक छोटा नोट लिखें (पोर्टल या कार्यालय ने क्या बताया)',
    'Save note': 'नोट सहेजें',
    'Status history': 'स्थिति इतिहास',
    'No notes yet. Add one after you check the official portal.': 'अभी कोई नोट नहीं। आधिकारिक पोर्टल जाँचने के बाद एक जोड़ें।',
    'Suggested next step': 'सुझाया गया अगला कदम',
    'Create follow-up reminder': 'फॉलो-अप रिमाइंडर बनाएँ',
    'Clear tracker for this service': 'इस सेवा का ट्रैकर साफ़ करें',
    'How to check status or raise a grievance': 'स्थिति कैसे जाँचें या शिकायत कैसे दर्ज करें',
    'Open official status / portal': 'आधिकारिक स्थिति / पोर्टल खोलें',
    'Centralised Public Grievance (CPGRAMS)': 'केंद्रीय लोक शिकायत (CPGRAMS)',
    'Use the official portal first. If there is no reply after the published time, many services accept a grievance through CPGRAMS or the department’s own grievance page.': 'पहले आधिकारिक पोर्टल का उपयोग करें। प्रकाशित समय के बाद भी कोई जवाब न मिले तो कई सेवाएँ CPGRAMS या विभाग के अपने शिकायत पृष्ठ के माध्यम से शिकायत स्वीकार करती हैं।',
    'Reminder file ready. Open the downloaded .ics file to add it to your calendar.': 'रिमाइंडर फ़ाइल तैयार। डाउनलोड की गई .ics फ़ाइल खोलकर अपने कैलेंडर में जोड़ें।',
    'Please choose a submission date first.': 'पहले आवेदन जमा करने की तारीख चुनें।',
    'Saved': 'सहेजा गया',
    'days ago': 'दिन पहले',
    'today': 'आज',
    '1 day ago': '1 दिन पहले',
    'Still within a typical waiting period for many services. Check the official portal for any update.': 'अभी कई सेवाओं के लिए सामान्य प्रतीक्षा अवधि के अंदर। कोई अपडेट के लिए आधिकारिक पोर्टल जाँचें।',
    'It has been a while. Check the official status page. If the published processing time has passed and there is no update, consider a polite enquiry or a grievance through the official channel.': 'काफी समय हो गया है। आधिकारिक स्थिति पृष्ठ जाँचें। यदि प्रकाशित प्रक्रिया समय बीत चुका है और कोई अपडेट नहीं है, तो विनम्र पूछताछ या आधिकारिक माध्यम से शिकायत पर विचार करें।',
    'You marked the application as submitted. Keep the acknowledgement / reference number safe.': 'आपने आवेदन जमा किया हुआ चिह्नित किया है। पावती / संदर्भ संख्या सुरक्षित रखें।',
    'Typical published times (unofficial summary)': 'सामान्य प्रकाशित समय (अनौपचारिक सारांश)',
    'Always confirm current times on the official website. These are only rough guides from publicly mentioned ranges.': 'वर्तमान समय हमेशा आधिकारिक वेबसाइट पर पुष्टि करें। ये केवल सार्वजनिक रूप से बताई गई सीमाओं के मोटे गाइड हैं।',
    'No typical time recorded here. Check the official portal.': 'यहाँ कोई सामान्य समय दर्ज नहीं है। आधिकारिक पोर्टल जाँचें।',
    'Delete this note': 'यह नोट हटाएँ',
    'Follow up on my': 'मेरे आवेदन का फॉलो-अप',
    'application': 'आवेदन',
    'submitted on': 'जमा किया गया',
    'Check status on the official website and keep your reference number ready.': 'आधिकारिक वेबसाइट पर स्थिति जाँचें और अपनी संदर्भ संख्या तैयार रखें।'
  };

  function t(key) {
    return document.documentElement.lang === 'hi' && HI[key] ? HI[key] : key;
  }

  /* ---------- rough published-range hints (very conservative) ---------- */
  var TYPICAL = {
    'passport': 'Often a few days to a few weeks depending on police verification and queue. Check the passport portal for current estimates.',
    'driving-licence': 'Learner and permanent licence timelines vary by state RTO. Many states show expected dates on the Parivahan portal.',
    'aadhaar-services': 'Update and download requests are often processed in days; enrolment can take longer. Check UIDAI status tools.',
    'pan-card': 'New PAN or correction is frequently completed in a couple of weeks when documents are clear. Track on the NSDL / UTIITSL site.',
    'voter-id': 'Registration and correction timelines are published by the Election Commission and can vary by roll revision cycle.',
    'national-scholarship': 'Scholarship portals publish scheme-wise timelines. Keep checking the National Scholarship Portal status.',
    'income-tax-return': 'Processing of returns and refunds follows Income Tax Department timelines shown on the e-filing portal.',
    'birth-certificate': 'Municipal / local registrar timelines vary. Many cities offer online tracking after application.'
  };

  /* ---------- storage ---------- */
  var STORAGE_KEY = 'sevanavigator-tracker';

  function loadAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveAll(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function getState(serviceId) {
    var all = loadAll();
    return all[serviceId] || {
      submitted: false,
      submissionDate: '',
      notes: []
    };
  }

  function setState(serviceId, state) {
    var all = loadAll();
    all[serviceId] = state;
    saveAll(all);
  }

  /* ---------- helpers ---------- */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function clear(node) {
    while (node && node.firstChild) node.removeChild(node.firstChild);
  }

  function daysBetween(fromStr, toDate) {
    var parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(fromStr);
    if (!parts) return null;
    var from = new Date(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3]));
    var to = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
    var diff = Math.round((to - from) / 86400000);
    return diff;
  }

  function formatElapsed(days) {
    if (days === null || days < 0) return '—';
    if (days === 0) return t('today');
    if (days === 1) return t('1 day ago');
    return days + ' ' + t('days ago');
  }

  /* ---------- ICS reminder (same style as tools.js) ---------- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function dayString(date) {
    return date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate());
  }

  function stampString(date) {
    return date.getUTCFullYear() + pad(date.getUTCMonth() + 1) + pad(date.getUTCDate()) +
      'T' + pad(date.getUTCHours()) + pad(date.getUTCMinutes()) + pad(date.getUTCSeconds()) + 'Z';
  }

  function icsEscape(text) {
    return String(text).replace(/\\/g, '\\\\').replace(/;/g, '\\;')
      .replace(/,/g, '\\,').replace(/\n/g, '\\n');
  }

  function fold(line) {
    var out = [];
    while (line.length > 70) {
      out.push(line.slice(0, 70));
      line = ' ' + line.slice(70);
    }
    out.push(line);
    return out.join('\r\n');
  }

  function makeFollowUpIcs(service, submissionDateStr, daysFromNow) {
    var today = new Date();
    var target = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysFromNow);
    var stamp = stampString(new Date());
    var title = t('Follow up on my') + ' ' + service.name + ' ' + t('application');
    var desc = t('submitted on') + ' ' + submissionDateStr + '. ' +
      t('Check status on the official website and keep your reference number ready.') +
      ' Official site: ' + (service.url || '');

    var next = new Date(target.getFullYear(), target.getMonth(), target.getDate() + 1);
    var lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//SevaNavigator//FollowUp//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'UID:' + Date.now() + Math.floor(Math.random() * 100000) + '@sevanavigator',
      'DTSTAMP:' + stamp,
      'DTSTART;VALUE=DATE:' + dayString(target),
      'DTEND;VALUE=DATE:' + dayString(next),
      'SUMMARY:' + icsEscape(title),
      'DESCRIPTION:' + icsEscape(desc),
      'BEGIN:VALARM',
      'TRIGGER:PT9H',
      'ACTION:DISPLAY',
      'DESCRIPTION:' + icsEscape(title),
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ];
    return lines.map(fold).join('\r\n') + '\r\n';
  }

  function downloadIcs(text) {
    var blob = new Blob([text], { type: 'text/calendar;charset=utf-8' });
    var link = document.createElement('a');
    var url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'SevaNavigator-followup.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }

  /* ---------- render ---------- */
  function renderTracker(service) {
    var old = document.getElementById('sn-tracker-card');
    if (old) old.remove();

    var anchor = document.getElementById('sn-readiness-card') ||
                 document.getElementById('sn-reminder-card') ||
                 document.getElementById('sn-plan-card') ||
                 document.querySelector('.detail-content-card');

    if (!anchor) return;

    var state = getState(service.id);
    var card = el('section', 'sn-card sn-tracker-card');
    card.id = 'sn-tracker-card';
    card.setAttribute('aria-labelledby', 'sn-tracker-title');

    card.appendChild(el('h3', '', t('Application tracker')));
    var intro = el('p', 'sn-fine', t('Record your submission and plan follow-ups. This is your personal notebook only. SevaNavigator cannot see live application status.'));
    intro.id = 'sn-tracker-title';
    card.appendChild(intro);

    /* --- submission toggle + date --- */
    var subRow = el('div', 'sn-row');
    var checkLabel = el('label');
    var submittedCb = document.createElement('input');
    submittedCb.type = 'checkbox';
    submittedCb.id = 'sn-tracker-submitted';
    submittedCb.checked = Boolean(state.submitted);
    checkLabel.appendChild(submittedCb);
    checkLabel.appendChild(document.createTextNode(' ' + t('I have submitted / applied')));
    subRow.appendChild(checkLabel);
    card.appendChild(subRow);

    var dateRow = el('div', 'sn-row');
    var dateLabel = el('label', '', t('Submission date'));
    dateLabel.setAttribute('for', 'sn-tracker-date');
    var dateInput = el('input', 'sn-input');
    dateInput.type = 'date';
    dateInput.id = 'sn-tracker-date';
    dateInput.value = state.submissionDate || '';
    dateInput.style.flex = '0 1 200px';
    dateInput.style.minWidth = '160px';
    dateRow.appendChild(dateLabel);
    dateRow.appendChild(dateInput);
    card.appendChild(dateRow);

    /* --- elapsed --- */
    var elapsedBox = el('p', 'sn-tracker-elapsed sn-fine');
    card.appendChild(elapsedBox);

    /* --- typical time hint --- */
    var typicalBox = el('div', 'sn-tracker-typical');
    card.appendChild(typicalBox);

    /* --- suggested next step --- */
    var suggestBox = el('div', 'sn-tracker-suggest');
    card.appendChild(suggestBox);

    /* --- status notes --- */
    card.appendChild(el('h4', '', t('Current status note')));
    var noteInput = el('textarea', 'sn-input sn-tracker-note');
    noteInput.rows = 2;
    noteInput.placeholder = t('Add a short note (what the portal or office told you)');
    noteInput.setAttribute('aria-label', t('Current status note'));
    card.appendChild(noteInput);

    var noteBtn = el('button', 'button button-secondary', t('Save note'));
    noteBtn.type = 'button';
    noteBtn.style.marginTop = '8px';
    card.appendChild(noteBtn);

    var historyTitle = el('h4', '', t('Status history'));
    card.appendChild(historyTitle);
    var historyBox = el('div', 'sn-tracker-history');
    card.appendChild(historyBox);

    /* --- reminder + clear --- */
    var actionRow = el('div', 'sn-row sn-tracker-actions');
    var remindBtn = el('button', 'button button-primary', t('Create follow-up reminder'));
    remindBtn.type = 'button';
    var clearBtn = el('button', 'button button-secondary', t('Clear tracker for this service'));
    clearBtn.type = 'button';
    actionRow.appendChild(remindBtn);
    actionRow.appendChild(clearBtn);
    card.appendChild(actionRow);

    var msg = el('p', 'sn-fine');
    msg.setAttribute('role', 'status');
    msg.setAttribute('aria-live', 'polite');
    card.appendChild(msg);

    /* --- grievance / status links --- */
    var help = el('div', 'sn-tracker-help');
    help.appendChild(el('h4', '', t('How to check status or raise a grievance')));
    help.appendChild(el('p', 'sn-fine', t('Use the official portal first. If there is no reply after the published time, many services accept a grievance through CPGRAMS or the department’s own grievance page.')));

    var links = el('div', 'sn-row');
    if (service.url) {
      var official = el('a', 'button button-secondary');
      official.href = service.url;
      official.target = '_blank';
      official.rel = 'noopener noreferrer';
      official.textContent = t('Open official status / portal');
      links.appendChild(official);
    }
    var cpg = el('a', 'button button-secondary');
    cpg.href = 'https://pgportal.gov.in';
    cpg.target = '_blank';
    cpg.rel = 'noopener noreferrer';
    cpg.textContent = t('Centralised Public Grievance (CPGRAMS)');
    links.appendChild(cpg);
    help.appendChild(links);
    card.appendChild(help);

    // Place the card
    anchor.insertAdjacentElement('afterend', card);

    function refreshUI() {
      // elapsed
      if (state.submitted && state.submissionDate) {
        var days = daysBetween(state.submissionDate, new Date());
        elapsedBox.textContent = t('Days since submission') + ': ' + formatElapsed(days);
      } else {
        elapsedBox.textContent = '';
      }

      // typical
      clear(typicalBox);
      var tip = TYPICAL[service.id];
      if (tip) {
        typicalBox.appendChild(el('h4', '', t('Typical published times (unofficial summary)')));
        typicalBox.appendChild(el('p', 'sn-fine', tip));
        typicalBox.appendChild(el('p', 'sn-fine', t('Always confirm current times on the official website. These are only rough guides from publicly mentioned ranges.')));
      }

      // suggestion
      clear(suggestBox);
      if (state.submitted && state.submissionDate) {
        var d = daysBetween(state.submissionDate, new Date());
        var p = el('p', 'sn-fine');
        if (d !== null && d <= 14) {
          p.textContent = t('Still within a typical waiting period for many services. Check the official portal for any update.');
        } else if (d !== null && d > 14) {
          p.textContent = t('It has been a while. Check the official status page. If the published processing time has passed and there is no update, consider a polite enquiry or a grievance through the official channel.');
        } else {
          p.textContent = t('You marked the application as submitted. Keep the acknowledgement / reference number safe.');
        }
        suggestBox.appendChild(el('h4', '', t('Suggested next step')));
        suggestBox.appendChild(p);
      }

      // history
      clear(historyBox);
      if (!state.notes || state.notes.length === 0) {
        historyBox.appendChild(el('p', 'sn-fine', t('No notes yet. Add one after you check the official portal.')));
      } else {
        var ul = el('ul', 'sn-tracker-notes');
        state.notes.slice().reverse().forEach(function (note, revIdx) {
          var realIdx = state.notes.length - 1 - revIdx;
          var li = el('li');
          var meta = el('span', 'sn-fine');
          meta.textContent = (note.date || '') + ' · ';
          li.appendChild(meta);
          li.appendChild(document.createTextNode(note.text));
          var del = el('button', 'sn-link-btn', t('Delete this note'));
          del.type = 'button';
          del.dataset.idx = String(realIdx);
          li.appendChild(document.createTextNode(' '));
          li.appendChild(del);
          ul.appendChild(li);
        });
        historyBox.appendChild(ul);
      }
    }

    function persist() {
      state.submitted = submittedCb.checked;
      state.submissionDate = dateInput.value || '';
      setState(service.id, state);
      refreshUI();
    }

    submittedCb.addEventListener('change', persist);
    dateInput.addEventListener('change', persist);

    noteBtn.addEventListener('click', function () {
      var text = (noteInput.value || '').trim();
      if (!text) return;
      if (!state.notes) state.notes = [];
      state.notes.push({
        text: text,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      });
      // keep last 20 notes
      if (state.notes.length > 20) state.notes = state.notes.slice(-20);
      setState(service.id, state);
      noteInput.value = '';
      msg.textContent = t('Saved');
      setTimeout(function () { msg.textContent = ''; }, 1500);
      refreshUI();
    });

    historyBox.addEventListener('click', function (e) {
      if (e.target && e.target.matches('.sn-link-btn')) {
        var idx = Number(e.target.dataset.idx);
        if (!isNaN(idx) && state.notes && state.notes[idx]) {
          state.notes.splice(idx, 1);
          setState(service.id, state);
          refreshUI();
        }
      }
    });

    remindBtn.addEventListener('click', function () {
      if (!state.submissionDate) {
        msg.textContent = t('Please choose a submission date first.');
        return;
      }
      // default: remind in 7 days, or 3 days if already > 14 days elapsed
      var days = daysBetween(state.submissionDate, new Date());
      var offset = (days !== null && days > 14) ? 3 : 7;
      var ics = makeFollowUpIcs(service, state.submissionDate, offset);
      downloadIcs(ics);
      msg.textContent = t('Reminder file ready. Open the downloaded .ics file to add it to your calendar.');
    });

    clearBtn.addEventListener('click', function () {
      state = { submitted: false, submissionDate: '', notes: [] };
      setState(service.id, state);
      submittedCb.checked = false;
      dateInput.value = '';
      noteInput.value = '';
      msg.textContent = '';
      refreshUI();
    });

    refreshUI();
  }

  /* ---------- styles ---------- */
  function addStyles() {
    if (document.getElementById('sn-tracker-styles')) return;
    var css = '' +
      '.sn-tracker-card{margin-top:20px;}' +
      '.sn-tracker-elapsed{font-weight:600;margin:8px 0;}' +
      '.sn-tracker-typical,.sn-tracker-suggest,.sn-tracker-help{margin-top:12px;}' +
      '.sn-tracker-note{width:100%;max-width:100%;resize:vertical;min-height:60px;}' +
      '.sn-tracker-history ul{list-style:none;padding:0;margin:8px 0;}' +
      '.sn-tracker-history li{padding:8px 0;border-bottom:1px solid var(--border,#e5e7eb);font-size:14px;}' +
      '.sn-tracker-actions{margin-top:16px;gap:10px;flex-wrap:wrap;}' +
      '.sn-link-btn{background:none;border:none;color:var(--link,#0b57d0);cursor:pointer;font-size:12px;padding:0 0 0 8px;text-decoration:underline;}' +
      '.sn-tracker-help .sn-row{margin-top:8px;gap:8px;flex-wrap:wrap;}' +
      '.sn-tracker-help a.button{text-decoration:none;}';
    var style = document.createElement('style');
    style.id = 'sn-tracker-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ---------- hook ---------- */
  function draw(service) {
    renderTracker(service);
  }

  var previousRenderDetail = window.renderDetail;
  window.renderDetail = function (service) {
    previousRenderDetail(service);
    // small delay so readiness / tools cards exist for ordering
    setTimeout(function () { draw(service); }, 10);
  };

  new MutationObserver(function () {
    if (typeof state !== 'undefined' && state.openId) {
      var service = findService(state.openId);
      if (service) draw(service);
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  if (typeof state !== 'undefined' && state.openId) {
    var openNow = findService(state.openId);
    if (openNow) {
      setTimeout(function () { draw(openNow); }, 20);
    }
  }

  addStyles();
}());
