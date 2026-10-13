/* =====================================================
   SEVANAVIGATOR - tools.js
   Four helpful tools:
   1. "Is this website real?" link checker
   2. Personal document checklist (questions)
   3. Send the checklist on WhatsApp, copy it, or print it
   4. Calendar reminder for passport / licence renewal
   This file must load AFTER script.js, services-more.js
   and language.js. It needs no changes to the HTML or CSS.
   Nothing typed here is sent anywhere or saved.
   ===================================================== */

(function () {
  'use strict';

  /* ---------- Hindi labels (other languages show English) ---------- */
  var HI = {
    'Check a website': 'वेबसाइट जाँचें',
    'FAKE WEBSITE CHECK': 'नकली वेबसाइट की जाँच',
    'Is this website real?': 'क्या यह वेबसाइट असली है?',
    'Paste a website address you received in a message or found online. We compare it with our list of official addresses.': 'मैसेज में मिला या ऑनलाइन दिखा वेबसाइट का पता यहाँ डालें। हम उसे आधिकारिक पतों की अपनी सूची से मिलाते हैं।',
    'For example: passportindia.gov.in': 'उदाहरण: passportindia.gov.in',
    'Website address': 'वेबसाइट का पता',
    'Check address': 'पता जाँचें',
    'Please type a website address to check.': 'कृपया जाँचने के लिए वेबसाइट का पता लिखें।',
    'That does not look like a website address. Try something like passportindia.gov.in': 'यह वेबसाइट का पता नहीं लगता। passportindia.gov.in जैसा कुछ लिखकर देखें।',
    'Matches an official address': 'आधिकारिक पते से मेल खाता है',
    'Looks like an imitation. Do not use it': 'नकली जैसा दिखता है। इसका उपयोग न करें',
    'Probably a government address, but not in our list': 'सरकारी पता लगता है, पर हमारी सूची में नहीं',
    'A known service provider, but check it first': 'जानी-पहचानी सेवा प्रदाता, पर पहले जाँच लें',
    'Be careful: this is not a government address': 'सावधान: यह सरकारी पता नहीं है',
    'This is only a quick check, not a guarantee. If you are unsure, do not enter any details and do not make any payment. Type the official address yourself instead of clicking links in messages.': 'यह केवल एक त्वरित जाँच है, गारंटी नहीं। अगर आप निश्चित नहीं हैं तो कोई जानकारी न डालें और भुगतान न करें। संदेशों के लिंक पर क्लिक करने के बजाय आधिकारिक पता खुद टाइप करें।',
    'Your personal checklist': 'आपकी निजी चेकलिस्ट',
    'Share or print this checklist': 'यह चेकलिस्ट साझा करें या प्रिंट करें',
    'Answer a few quick questions to see the documents for your case.': 'अपने मामले के दस्तावेज़ देखने के लिए कुछ सवालों के जवाब दें।',
    'Answer all the questions above to see your list.': 'अपनी सूची देखने के लिए ऊपर के सभी सवालों के जवाब दें।',
    'Documents to carry': 'साथ ले जाने वाले दस्तावेज़',
    'Good to know': 'ध्यान रखें',
    'Send on WhatsApp': 'व्हाट्सऐप पर भेजें',
    'Copy checklist': 'चेकलिस्ट कॉपी करें',
    'Print or save as PDF': 'प्रिंट करें या PDF सहेजें',
    'Your answers stay on your device. The WhatsApp button only opens WhatsApp with the text ready for you to send.': 'आपके जवाब आपके डिवाइस पर ही रहते हैं। व्हाट्सऐप बटन केवल भेजने के लिए तैयार टेक्स्ट के साथ व्हाट्सऐप खोलता है।',
    'Checklist copied.': 'चेकलिस्ट कॉपी हो गई।',
    'Could not copy. Please select the text and copy it yourself.': 'कॉपी नहीं हो सकी। कृपया टेक्स्ट चुनकर खुद कॉपी करें।',
    'Please allow pop-ups to print.': 'प्रिंट करने के लिए कृपया पॉप-अप की अनुमति दें।',
    'Never miss a renewal': 'नवीनीकरण कभी न भूलें',
    'My expiry date': 'मेरी समाप्ति तिथि',
    'Remind me this many months before': 'इतने महीने पहले याद दिलाएँ',
    'Add to my calendar': 'कैलेंडर में जोड़ें',
    'Please choose your expiry date.': 'कृपया अपनी समाप्ति तिथि चुनें।',
    'That date has already passed. Please check your expiry date.': 'वह तारीख बीत चुकी है। कृपया अपनी समाप्ति तिथि जाँच लें।',
    'Your date stays on your device. It is only used to make the calendar file.': 'आपकी तारीख आपके डिवाइस पर ही रहती है। इसका उपयोग केवल कैलेंडर फ़ाइल बनाने में होता है।',
    'What do you need?': 'आपको क्या चाहिए?',
    'Which service do you want?': 'आप कौन सी सेवा चाहते हैं?',
    'A new passport (first time)': 'नया पासपोर्ट (पहली बार)',
    'Renew or re-issue my passport': 'पासपोर्ट नवीनीकरण या पुनः जारी',
    'A passport for a child under 18': '18 वर्ष से कम उम्र के बच्चे का पासपोर्ट',
    'Normal': 'सामान्य',
    'Tatkal (faster, with extra rules)': 'तत्काल (तेज़, अतिरिक्त नियम के साथ)',
    'A passport for a child under 18': '18 वर्ष से कम उम्र के बच्चे का पासपोर्ट',
    'A learner licence': 'लर्नर लाइसेंस',
    'A permanent licence': 'स्थायी लाइसेंस',
    'Renew my licence': 'मेरा लाइसेंस नवीनीकरण',
    'Are you over 40, or applying for a commercial licence?': 'क्या आपकी उम्र 40 से अधिक है, या आप वाणिज्यिक लाइसेंस के लिए आवेदन कर रहे हैं?',
    'Yes': 'हाँ',
    'No': 'नहीं',
    'A new PAN': 'नया पैन',
    'Correct details on my PAN': 'मेरे पैन पर विवरण सुधारें',
    'Is your Aadhaar linked to your mobile number?': 'क्या आपका आधार आपके मोबाइल नंबर से जुड़ा है?',
    'No or not sure': 'नहीं या निश्चित नहीं',

    'A learner licence': 'लर्नर लाइसेंस',
    'A permanent licence': 'स्थायी लाइसेंस',
    'Renew my licence': 'मेरा लाइसेंस नवीनीकरण',
    'Are you over 40, or applying for a commercial licence?': 'क्या आपकी उम्र 40 से अधिक है, या आप वाणिज्यिक लाइसेंस के लिए आवेदन कर रहे हैं?',
    'Yes': 'हाँ',
    'No': 'नहीं',
    'A new PAN': 'नया पैन',
    'Correct details on my PAN': 'मेरे पैन पर विवरण सुधारें',
    'Is your Aadhaar linked to your mobile number?': 'क्या आपका आधार आपके मोबाइल नंबर से जुड़ा है?',
    'No or not sure': 'नहीं या निश्चित नहीं'
  };

  function t(key) {
    return document.documentElement.lang === 'hi' && HI[key] ? HI[key] : key;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text !== undefined) {
      node.textContent = text;
    }
    return node;
  }

  function toast(message) {
    if (typeof showToast === 'function') {
      showToast(message);
    }
  }

  /* ---------- Styles (added automatically) ---------- */
  function addStyles() {
    var style = document.createElement('style');
    style.id = 'sn-tools-style';
    style.textContent =
      '.sn-checker{padding:56px 0;scroll-margin-top:90px;}' +
      '.sn-checker-form{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0;}' +
      '.sn-input{flex:1;min-width:220px;min-height:48px;padding:12px 14px;border:1px solid var(--border,#d6dde1);border-radius:var(--radius-small,8px);background:#fff;font-size:15px;}' +
      '.sn-result{margin-top:6px;padding:18px;border-radius:var(--radius-medium,12px);border-left:6px solid #999;background:#f5f5f5;}' +
      '.sn-result h3{margin:0 0 8px;font-size:17px;}' +
      '.sn-result p{margin:0 0 8px;}' +
      '.sn-result ul{margin:8px 0 0;padding-left:20px;}' +
      '.sn-result li{margin-bottom:4px;}' +
      '.sn-verified{background:#e8f5ee;border-color:#1f7a4a;}' +
      '.sn-info{background:#eaf2fb;border-color:#2b6cb0;}' +
      '.sn-caution{background:#fff4e0;border-color:#c77d12;}' +
      '.sn-danger{background:#fdeaea;border-color:#b3261e;}' +
      '.sn-card{margin-top:20px;padding:24px;border:1px solid var(--border,#d6dde1);border-radius:var(--radius-medium,12px);background:#fff;}' +
      '.sn-card h3{margin:0 0 8px;}' +
      '.sn-card h4{margin:16px 0 6px;font-size:14px;}' +
      '.sn-q{margin:14px 0;padding:0;border:0;}' +
      '.sn-q legend{margin-bottom:6px;font-weight:700;}' +
      '.sn-option{display:flex;align-items:center;gap:10px;min-height:44px;padding:8px 12px;margin-bottom:6px;border:1px solid var(--border,#d6dde1);border-radius:var(--radius-small,8px);cursor:pointer;}' +
      '.sn-option input{width:18px;height:18px;}' +
      '.sn-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;}' +
      '.sn-fine{margin:12px 0 0;font-size:12px;color:var(--text-muted,#5b6b73);}' +
      '.sn-plan-list{margin:6px 0 0;padding-left:0;list-style:none;}' +
      '.sn-plan-list li{margin-bottom:6px;}' +
      '.sn-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:10px;}';
    document.head.appendChild(style);
  }

  /* =====================================================
     1. LINK CHECKER
     ===================================================== */

  var SHORTENERS = ['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'cutt.ly', 'is.gd',
    'rb.gy', 'ow.ly', 'shorturl.at', 'tiny.cc', 'rebrand.ly'];

  var RISKY_ENDINGS = ['xyz', 'top', 'click', 'shop', 'site', 'live', 'icu', 'vip',
    'buzz', 'cfd', 'sbs', 'work', 'online'];

  /* Known authorised partners that do not use gov.in. */
  var PARTNERS = {
    'utiitsl.com': 'UTIITSL (authorised PAN service provider)',
    'protean-tinpan.com': 'Protean (authorised PAN service provider)'
  };

  /* Names that fake sites copy: [word, official address, service name] */
  var BRANDS = [
    ['passport', 'passportindia.gov.in', 'Passport Seva'],
    ['irctc', 'irctc.co.in', 'IRCTC'],
    ['incometax', 'incometax.gov.in', 'Income Tax e-filing'],
    ['income-tax', 'incometax.gov.in', 'Income Tax e-filing'],
    ['digilocker', 'digilocker.gov.in', 'DigiLocker'],
    ['uidai', 'uidai.gov.in', 'Aadhaar (UIDAI)'],
    ['aadhaar', 'uidai.gov.in', 'Aadhaar (UIDAI)'],
    ['aadhar', 'uidai.gov.in', 'Aadhaar (UIDAI)'],
    ['epfo', 'epfindia.gov.in', 'EPFO'],
    ['epfindia', 'epfindia.gov.in', 'EPFO'],
    ['pmkisan', 'pmkisan.gov.in', 'PM-KISAN'],
    ['pm-kisan', 'pmkisan.gov.in', 'PM-KISAN'],
    ['ayushman', 'pmjay.gov.in', 'Ayushman Bharat PM-JAY'],
    ['pmjay', 'pmjay.gov.in', 'Ayushman Bharat PM-JAY'],
    ['eshram', 'eshram.gov.in', 'e-Shram'],
    ['e-shram', 'eshram.gov.in', 'e-Shram'],
    ['udyam', 'udyamregistration.gov.in', 'Udyam registration'],
    ['gst', 'gst.gov.in', 'GST portal'],
    ['voter', 'voters.eci.gov.in', 'Voter services'],
    ['parivahan', 'parivahan.gov.in', 'Parivahan (driving licence)'],
    ['sarathi', 'parivahan.gov.in', 'Parivahan (driving licence)'],
    ['scholarship', 'scholarships.gov.in', 'National Scholarship Portal'],
    ['umang', 'web.umang.gov.in', 'UMANG'],
    ['indiapost', 'indiapost.gov.in', 'India Post'],
    ['speedpost', 'indiapost.gov.in', 'India Post'],
    ['pancard', 'incometax.gov.in', 'PAN (Income Tax)'],
    ['pan', 'incometax.gov.in', 'PAN (Income Tax)']
  ];

  var EXTRA_OFFICIAL = {
    'india.gov.in': 'National Portal of India',
    'mygov.in': 'MyGov'
  };

  function stripWww(host) {
    return host.replace(/^www\./, '');
  }

  function registrable(host) {
    var labels = host.split('.');
    var last2 = labels.slice(-2).join('.');
    if (last2 === 'gov.in' || last2 === 'co.in' || last2 === 'nic.in') {
      return labels.slice(-3).join('.');
    }
    return last2;
  }

  function officialList() {
    var list = {};
    Object.keys(EXTRA_OFFICIAL).forEach(function (host) {
      list[host] = EXTRA_OFFICIAL[host];
    });
    SERVICES.forEach(function (service) {
      try {
        var host = stripWww(new URL(service.url).hostname);
        list[host] = service.name;
        list[registrable(host)] = service.name;
      } catch (error) {
        /* skip a bad address */
      }
    });
    return list;
  }

  function matchesDomain(host, domain) {
    return host === domain || host.slice(-(domain.length + 1)) === '.' + domain;
  }

  function findIn(table, host) {
    var found = null;
    Object.keys(table).forEach(function (domain) {
      if (!found && matchesDomain(host, domain)) {
        found = { domain: domain, name: table[domain] };
      }
    });
    return found;
  }

  function findBrand(host) {
    var tokens = host.split(/[.-]/);
    var found = null;
    BRANDS.forEach(function (brand) {
      if (found) {
        return;
      }
      var word = brand[0];
      var hit = word.length >= 5 ? host.indexOf(word) !== -1 : tokens.indexOf(word) !== -1;
      if (hit) {
        found = { host: brand[1], name: brand[2] };
      }
    });
    return found;
  }

  function parseAddress(raw) {
    var text = String(raw || '').trim();
    if (!text) {
      return { error: 'Please type a website address to check.' };
    }
    if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(text)) {
      text = 'https://' + text;
    }
    try {
      var url = new URL(text);
      if ((url.protocol !== 'http:' && url.protocol !== 'https:') ||
          url.hostname.indexOf('.') === -1) {
        return { error: 'That does not look like a website address. Try something like passportindia.gov.in' };
      }
      return { url: url };
    } catch (error) {
      return { error: 'That does not look like a website address. Try something like passportindia.gov.in' };
    }
  }

  function checkAddress(raw) {
    var parsed = parseAddress(raw);
    if (parsed.error) {
      return { error: parsed.error };
    }
    var url = parsed.url;
    var host = stripWww(url.hostname.toLowerCase());
    var points = [];
    var warnings = 0;

    if (url.username || url.password) {
      points.push('The address contains an @ sign. Scammers use this trick to hide the real website.');
      warnings += 2;
    }
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.indexOf(':') !== -1) {
      points.push('It uses numbers instead of a name. Real services do not do this.');
      warnings += 2;
    }
    if (host.indexOf('xn--') !== -1) {
      points.push('It uses special look-alike letters. Scammers use these to copy real names.');
      warnings += 2;
    }
    if (url.protocol === 'http:') {
      points.push('It does not use https, so the connection is not secure.');
      warnings += 1;
    }
    var ending = host.split('.').pop();
    if (RISKY_ENDINGS.indexOf(ending) !== -1) {
      points.push('The ending ".' + ending + '" is common on scam websites. Government sites normally end in gov.in or nic.in.');
      warnings += 1;
    }
    var scamWords = /(official|apply|online|registration|verify|kyc|login|portal|helpline|services)/;
    if ((host.split('-').length > 2 || scamWords.test(host)) && !/\.(gov|nic)\.in$/.test(host)) {
      points.push('Words like "apply", "official" or "verify" joined with hyphens are common in fake addresses.');
      warnings += 1;
    }

    var official = findIn(officialList(), host);
    if (official && warnings < 2) {
      points.push('Still type the address yourself instead of clicking links in messages.');
      return {
        level: 'verified',
        title: 'Matches an official address',
        summary: 'This address belongs to ' + official.name + ', which is in SevaNavigator\'s list of official addresses (' + official.domain + ').',
        points: points,
        link: null
      };
    }
    if (official) {
      return {
        level: 'danger',
        title: 'Looks like an imitation. Do not use it',
        summary: 'It seems to contain an official name (' + official.domain + '), but other things about this address are wrong.',
        points: points,
        link: null
      };
    }

    var partner = findIn(PARTNERS, host);
    if (partner && warnings < 2) {
      return {
        level: 'info',
        title: 'A known service provider, but check it first',
        summary: partner.name + '. Confirm on the Income Tax Department\'s official site that it is still an authorised provider.',
        points: points,
        link: null
      };
    }

    var brand = findBrand(host);
    if (brand) {
      points.unshift('This address uses the name of an official service (' + brand.name + ') but is NOT its official address.');
      return {
        level: 'danger',
        title: 'Looks like an imitation. Do not use it',
        summary: 'Do not enter any details or make any payment on this website.',
        points: points,
        link: { host: brand.host, name: brand.name }
      };
    }

    if (/\.(gov|nic)\.in$/.test(host) && warnings < 2) {
      return {
        level: 'info',
        title: 'Probably a government address, but not in our list',
        summary: 'Addresses ending in gov.in or nic.in are reserved for government bodies, but we have not checked this one. Confirm it on the department\'s own page.',
        points: points,
        link: null
      };
    }

    if (shortenerCheck(host)) {
      points.unshift('This is a shortened link, so we cannot tell where it leads. Do not open it.');
      warnings += 1;
    }
    points.push('Some real services use other endings (for example irctc.co.in), so compare it with the address published on the department\'s official page.');
    return {
      level: warnings >= 2 ? 'danger' : 'caution',
      title: warnings >= 2 ? 'Looks like an imitation. Do not use it' : 'Be careful: this is not a government address',
      summary: warnings >= 2
        ? 'Several warning signs. Do not enter any details or make any payment.'
        : 'It is not in our list and does not end in gov.in or nic.in.',
      points: points,
      link: null
    };
  }

  function shortenerCheck(host) {
    return SHORTENERS.some(function (domain) {
      return matchesDomain(host, domain);
    });
  }

  var checkerRefs = {};

  function renderCheckerResult(result) {
    var box = checkerRefs.result;
    box.textContent = '';
    box.className = 'sn-result';
    if (result.error) {
      box.classList.add('sn-caution');
      box.appendChild(el('p', '', t(result.error)));
      return;
    }
    box.classList.add('sn-' + result.level);
    box.appendChild(el('h3', '', t(result.title)));
    box.appendChild(el('p', '', result.summary));
    if (result.link) {
      box.appendChild(el('p', '', 'The real address for ' + result.link.name + ' is: ' + result.link.host));
    }
    if (result.points.length) {
      var list = el('ul');
      result.points.forEach(function (point) {
        list.appendChild(el('li', '', point));
      });
      box.appendChild(list);
    }
    box.appendChild(el('p', 'sn-fine', t('This is only a quick check, not a guarantee. If you are unsure, do not enter any details and do not make any payment. Type the official address yourself instead of clicking links in messages.')));
  }

  function labelChecker() {
    checkerRefs.eyebrow.textContent = t('FAKE WEBSITE CHECK');
    checkerRefs.title.textContent = t('Is this website real?');
    checkerRefs.intro.textContent = t('Paste a website address you received in a message or found online. We compare it with our list of official addresses.');
    checkerRefs.label.textContent = t('Website address');
    checkerRefs.input.placeholder = t('For example: passportindia.gov.in');
    checkerRefs.button.textContent = t('Check address');
    if (checkerRefs.navLink) {
      checkerRefs.navLink.textContent = t('Check a website');
    }
    if (checkerRefs.lastRaw !== undefined && checkerRefs.input.value) {
      renderCheckerResult(checkAddress(checkerRefs.lastRaw));
    }
  }

  function buildChecker() {
    var main = document.getElementById('main-content');
    if (!main) {
      return;
    }
    var anchor = document.getElementById('home-search') || main.firstElementChild;
    var section = el('section', 'sn-checker');
    section.id = 'link-checker';
    section.setAttribute('aria-labelledby', 'sn-checker-title');
    var inner = el('div', 'section-container');

    checkerRefs.eyebrow = el('p', 'eyebrow');
    checkerRefs.title = el('h2');
    checkerRefs.title.id = 'sn-checker-title';
    checkerRefs.intro = el('p', 'section-description');

    var form = el('form', 'sn-checker-form');
    form.setAttribute('role', 'search');
    checkerRefs.label = el('label', 'visually-hidden');
    checkerRefs.label.setAttribute('for', 'sn-checker-input');
    checkerRefs.input = el('input', 'sn-input');
    checkerRefs.input.id = 'sn-checker-input';
    checkerRefs.input.type = 'text';
    checkerRefs.input.setAttribute('inputmode', 'url');
    checkerRefs.input.setAttribute('autocomplete', 'off');
    checkerRefs.input.setAttribute('autocapitalize', 'none');
    checkerRefs.input.spellcheck = false;
    checkerRefs.button = el('button', 'button button-primary');
    checkerRefs.button.type = 'submit';
    form.appendChild(checkerRefs.label);
    form.appendChild(checkerRefs.input);
    form.appendChild(checkerRefs.button);

    checkerRefs.result = el('div', 'sn-result');
    checkerRefs.result.id = 'sn-checker-result';
    checkerRefs.result.setAttribute('role', 'status');
    checkerRefs.result.setAttribute('aria-live', 'polite');
    checkerRefs.result.hidden = true;

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      checkerRefs.lastRaw = checkerRefs.input.value;
      checkerRefs.result.hidden = false;
      renderCheckerResult(checkAddress(checkerRefs.lastRaw));
      checkerRefs.result.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });

    inner.appendChild(checkerRefs.eyebrow);
    inner.appendChild(checkerRefs.title);
    inner.appendChild(checkerRefs.intro);
    inner.appendChild(form);
    inner.appendChild(checkerRefs.result);
    section.appendChild(inner);
    anchor.insertAdjacentElement('afterend', section);

    var nav = document.getElementById('primary-navigation');
    if (nav) {
      checkerRefs.navLink = el('a', 'navigation-link');
      checkerRefs.navLink.href = '#link-checker';
      nav.appendChild(checkerRefs.navLink);
    }
    labelChecker();
  }

  /* =====================================================
     2. PERSONAL CHECKLIST QUESTIONS
     Each service has questions and a function that builds
     the list of documents for the answers given.
     To add one, copy a block and change the text.
     ===================================================== */

  var WIZARDS = {
    'passport': {
      questions: [
        { id: 'type', text: 'What do you need?', options: [
          ['fresh', 'A new passport (first time)'],
          ['renew', 'Renew or re-issue my passport'],
          ['minor', 'A passport for a child under 18']
        ] },
        { id: 'speed', text: 'Which service do you want?', options: [
          ['normal', 'Normal'],
          ['tatkal', 'Tatkal (faster, with extra rules)']
        ] }
      ],
      build: function (a) {
        var docs = [
          'Appointment confirmation printout (with your Application Reference Number)',
          'Originals of every document below, plus self-attested photocopies if your appointment letter asks for them'
        ];
        var notes = [
          'Carry the originals. Copies alone are not accepted.',
          'Confirm the exact list of accepted documents on the official passport site before you go.'
        ];
        if (a.type === 'fresh') {
          docs.push('Proof of address (see the accepted list on the official site)');
          docs.push('Proof of date of birth, for example a birth certificate or school leaving certificate (see the accepted list)');
        } else if (a.type === 'renew') {
          docs.push('Your current passport (original)');
          docs.push('Photocopies of its first two and last two pages, and any pages with notes or endorsements');
          docs.push('Proof of address, only if your address has changed');
        } else {
          docs.push('The child\'s birth certificate');
          docs.push('Both parents\' passports (originals and copies)');
          docs.push('Parents\' proof of address');
          notes.push('For a child, both parents usually need to be present, or the official consent forms must be completed. Check the official rules.');
        }
        if (a.speed === 'tatkal') {
          notes.push('Tatkal has extra requirements. Read the official Tatkal rules before you book.');
        }
        return { docs: docs, notes: notes };
      }
    },
    'driving-licence': {
      questions: [
        { id: 'type', text: 'What do you need?', options: [
          ['learner', 'A learner licence'],
          ['permanent', 'A permanent licence'],
          ['renew', 'Renew my licence']
        ] },
        { id: 'medical', text: 'Are you over 40, or applying for a commercial licence?', options: [
          ['yes', 'Yes'],
          ['no', 'No']
        ] }
      ],
      build: function (a) {
        var docs = [];
        var notes = [
          'Rules, forms and fees vary by state. Confirm on your state transport page.',
          'Form names can change, so use the forms shown on the official portal.'
        ];
        if (a.type === 'learner') {
          docs.push('Proof of age');
          docs.push('Proof of address');
          docs.push('Passport-size photographs, if the portal asks for them');
          docs.push('Application form and fee receipt from the portal');
        } else if (a.type === 'permanent') {
          docs.push('Your learner licence (original)');
          docs.push('Proof of age and proof of address');
          docs.push('Passport-size photographs, if the portal asks for them');
          docs.push('Fee receipt and your driving test slot confirmation');
        } else {
          docs.push('Your existing driving licence (original)');
          docs.push('Proof of address, if your address has changed');
          docs.push('Passport-size photographs, if the portal asks for them');
          docs.push('Fee receipt');
          notes.push('Renew before the licence expires. Late renewal can mean extra fees or a new test, depending on the state.');
        }
        if (a.medical === 'yes') {
          docs.push('A medical certificate from a doctor (usually needed for older applicants and commercial licences)');
        } else {
          docs.push('A self-declaration of medical fitness (as per the form on the portal)');
        }
        return { docs: docs, notes: notes };
      }
    },
    'pan-card': {
      questions: [
        { id: 'type', text: 'What do you need?', options: [
          ['new', 'A new PAN'],
          ['correction', 'Correct details on my PAN']
        ] },
        { id: 'aadhaar', text: 'Is your Aadhaar linked to your mobile number?', options: [
          ['yes', 'Yes'],
          ['no', 'No or not sure']
        ] }
      ],
      build: function (a) {
        var docs = [];
        var notes = ['Enter Aadhaar details and OTPs only on the official site.'];
        if (a.type === 'new' && a.aadhaar === 'yes') {
          docs.push('Your Aadhaar number (enter it only on the official site)');
          docs.push('The mobile number linked to your Aadhaar, to receive the OTP');
          notes.push('The instant e-PAN route is meant for people who do not already have a PAN.');
        } else if (a.type === 'new') {
          docs.push('Proof of identity');
          docs.push('Proof of address');
          docs.push('Proof of date of birth (see the official list for all three)');
          docs.push('Passport-size photograph and signature, as the form asks');
          notes.push('Linking your mobile number to Aadhaar first can give you a quicker route.');
        } else {
          docs.push('Your PAN number or a copy of your PAN card');
          docs.push('Proof for each detail you want to change (name, date of birth or address)');
          docs.push('Photograph and signature, if the form asks for them');
          if (a.aadhaar === 'yes') {
            docs.push('The mobile number linked to your Aadhaar, to receive the OTP');
          }
        }
        return { docs: docs, notes: notes };
      }
    },
    'voter-id': {
      questions: [
        { id: 'type', text: 'What do you need?', options: [
          ['new', 'Register as a new voter'],
          ['correction', 'Correct details on my voter card'],
          ['shift', 'Change my address']
        ] }
      ],
      build: function (a) {
        var docs = [];
        var notes = [
          'Giving your Aadhaar for voter registration is voluntary. Check the portal.',
          'Confirm the accepted documents on the official voter services site.'
        ];
        if (a.type === 'new') {
          docs.push('Proof of age');
          docs.push('Proof of address');
          docs.push('A recent passport-size photograph');
        } else if (a.type === 'correction') {
          docs.push('Your voter ID (EPIC) number');
          docs.push('Proof for the detail you want to correct');
        } else {
          docs.push('Your voter ID (EPIC) number');
          docs.push('Proof of your new address');
        }
        return { docs: docs, notes: notes };
      }
    },
    'birth-certificate': {
      questions: [
        { id: 'where', text: 'Where was the baby born?', options: [
          ['hospital', 'In a hospital'],
          ['home', 'At home']
        ] },
        { id: 'when', text: 'How long ago was the birth?', options: [
          ['within', 'Within 21 days'],
          ['mid', 'Between 21 and 30 days'],
          ['late', 'More than 30 days']
        ] }
      ],
      build: function (a) {
        var docs = [];
        var notes = [
          'Rules differ by state. Confirm with your local registrar before you go.'
        ];
        if (a.where === 'hospital') {
          docs.push('Hospital birth report or discharge papers');
        } else {
          docs.push('A written declaration from the parents, with details of who attended the birth');
          docs.push('A local verification (for example from a ward member or health worker) if the registrar asks');
        }
        docs.push('Parents\' ID proof');
        docs.push('Parents\' address proof');
        if (a.when === 'mid') {
          notes.push('Registration after 21 days can need a late fee.');
        } else if (a.when === 'late') {
          notes.push('Late registration usually needs an affidavit and written permission from the authority, and after one year an order from a magistrate. Ask your local registrar.');
        }
        return { docs: docs, notes: notes };
      }
    }
  };

  var REMINDERS = {
    'passport': {
      label: 'passport',
      defaultMonths: 9,
      options: [3, 6, 9, 12],
      why: 'Many countries ask for a passport that is valid for at least 6 months, and renewals take time, so it helps to start early.'
    },
    'driving-licence': {
      label: 'driving licence',
      defaultMonths: 1,
      options: [1, 2, 3],
      why: 'Renew before the licence expires. Late renewal can mean extra fees or a new test, depending on the state.'
    }
  };

  var planAnswers = {};
  var openServiceId = null;

  function allAnswered(wizard, answers) {
    return wizard.questions.every(function (q) {
      return Boolean(answers[q.id]);
    });
  }

  function answerSummary(wizard, answers) {
    var parts = [];
    wizard.questions.forEach(function (q) {
      q.options.forEach(function (option) {
        if (answers[q.id] === option[0]) {
          parts.push(option[1]);
        }
      });
    });
    return parts.join('; ');
  }

  function currentPlan(service) {
    var wizard = WIZARDS[service.id];
    if (!wizard) {
      return null;
    }
    var answers = planAnswers[service.id] || {};
    if (!allAnswered(wizard, answers)) {
      return null;
    }
    var plan = wizard.build(answers);
    plan.summary = answerSummary(wizard, answers);
    return plan;
  }

  /* =====================================================
     3. SHARE, COPY AND PRINT
     ===================================================== */

  function shareText(service) {
    var plan = currentPlan(service);
    var docs = plan ? plan.docs : service.documents;
    var lines = ['SevaNavigator checklist: ' + service.name];
    if (plan && plan.summary) {
      lines.push('(' + plan.summary + ')');
    }
    lines.push('');
    lines.push('Documents to carry:');
    docs.forEach(function (doc, index) {
      lines.push((index + 1) + '. ' + doc);
    });
    if (plan && plan.notes.length) {
      lines.push('');
      lines.push('Good to know:');
      plan.notes.forEach(function (note) {
        lines.push('- ' + note);
      });
    }
    lines.push('');
    lines.push('Official website: ' + service.url);
    lines.push('');
    lines.push('General guidance from SevaNavigator, an independent guide that is NOT a government website. Confirm everything on the official site before you go.');
    return lines.join('\n');
  }

  function sendWhatsApp(service) {
    var url = 'https://wa.me/?text=' + encodeURIComponent(shareText(service));
    var opened = window.open(url, '_blank', 'noopener');
    if (!opened) {
      window.location.href = url;
    }
  }

  function copyText(service) {
    var text = shareText(service);
    function fallback() {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try {
        ok = document.execCommand('copy');
      } catch (error) {
        ok = false;
      }
      document.body.removeChild(area);
      toast(t(ok ? 'Checklist copied.' : 'Could not copy. Please select the text and copy it yourself.'));
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        toast(t('Checklist copied.'));
      }, fallback);
    } else {
      fallback();
    }
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function printChecklist(service) {
    var w = window.open('', '_blank');
    if (!w) {
      toast(t('Please allow pop-ups to print.'));
      return;
    }
    var body = escapeHtml(shareText(service)).replace(/\n/g, '<br>');
    w.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' +
      escapeHtml(service.name) + ' checklist</title></head>' +
      '<body style="font-family:Arial,sans-serif;font-size:16px;line-height:1.6;padding:24px;max-width:700px;">' +
      body + '</body></html>');
    w.document.close();
    w.focus();
    setTimeout(function () {
      w.print();
    }, 300);
  }

  /* ---------- The checklist card on each guide ---------- */

  function renderPlan(service) {
    var old = document.getElementById('sn-plan-card');
    if (old) {
      old.remove();
    }
    var list = document.getElementById('document-checklist');
    if (!list) {
      return null;
    }
    var anchor = list.closest('section') || list.parentNode;
    var wizard = WIZARDS[service.id];
    var answers = planAnswers[service.id] || (planAnswers[service.id] = {});

    var card = el('section', 'sn-card');
    card.id = 'sn-plan-card';
    card.appendChild(el('h3', '', t(wizard ? 'Your personal checklist' : 'Share or print this checklist')));

    var resultBox = el('div');
    resultBox.setAttribute('aria-live', 'polite');

    function showResult() {
      resultBox.textContent = '';
      if (!wizard) {
        return;
      }
      var plan = currentPlan(service);
      if (!plan) {
        resultBox.appendChild(el('p', 'sn-fine', t('Answer all the questions above to see your list.')));
        return;
      }
      resultBox.appendChild(el('h4', '', t('Documents to carry')));
      var ul = el('ul', 'sn-plan-list');
      plan.docs.forEach(function (doc) {
        ul.appendChild(el('li', '', '☐ ' + doc));
      });
      resultBox.appendChild(ul);
      if (plan.notes.length) {
        resultBox.appendChild(el('h4', '', t('Good to know')));
        var notes = el('ul');
        plan.notes.forEach(function (note) {
          notes.appendChild(el('li', '', note));
        });
        resultBox.appendChild(notes);
      }
    }

    if (wizard) {
      card.appendChild(el('p', 'sn-fine', t('Answer a few quick questions to see the documents for your case.')));
      wizard.questions.forEach(function (q) {
        var fieldset = el('fieldset', 'sn-q');
        fieldset.appendChild(el('legend', '', t(q.text)));
        q.options.forEach(function (option) {
          var label = el('label', 'sn-option');
          var input = document.createElement('input');
          input.type = 'radio';
          input.name = 'sn-q-' + service.id + '-' + q.id;
          input.value = option[0];
          input.checked = answers[q.id] === option[0];
          input.addEventListener('change', function () {
            answers[q.id] = option[0];
            showResult();
          });
          label.appendChild(input);
          label.appendChild(el('span', '', t(option[1])));
          fieldset.appendChild(label);
        });
        card.appendChild(fieldset);
      });
    }
    card.appendChild(resultBox);
    showResult();

    var actions = el('div', 'sn-actions');
    var whatsapp = el('button', 'button button-primary', t('Send on WhatsApp'));
    whatsapp.type = 'button';
    whatsapp.addEventListener('click', function () { sendWhatsApp(service); });
    var copy = el('button', 'button button-secondary', t('Copy checklist'));
    copy.type = 'button';
    copy.addEventListener('click', function () { copyText(service); });
    var print = el('button', 'button button-secondary', t('Print or save as PDF'));
    print.type = 'button';
    print.addEventListener('click', function () { printChecklist(service); });
    actions.appendChild(whatsapp);
    actions.appendChild(copy);
    actions.appendChild(print);
    card.appendChild(actions);
    card.appendChild(el('p', 'sn-fine', t('Your answers stay on your device. The WhatsApp button only opens WhatsApp with the text ready for you to send.')));

    anchor.insertAdjacentElement('beforebegin', card);
    return card;
  }

  /* =====================================================
     4. CALENDAR REMINDER
     ===================================================== */

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function dayString(date) {
    return date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate());
  }

  function stampString(date) {
    return date.getUTCFullYear() + pad(date.getUTCMonth() + 1) + pad(date.getUTCDate()) +
      'T' + pad(date.getUTCHours()) + pad(date.getUTCMinutes()) + pad(date.getUTCSeconds()) + 'Z';
  }

  function monthsBefore(year, month, day, months) {
    var total = year * 12 + month - months;
    var y = Math.floor(total / 12);
    var m = total - y * 12;
    var lastDay = new Date(y, m + 1, 0).getDate();
    return new Date(y, m, Math.min(day, lastDay));
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

  function eventLines(date, title, description, stamp) {
    var next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    return [
      'BEGIN:VEVENT',
      'UID:' + Date.now() + Math.floor(Math.random() * 100000) + '@sevanavigator',
      'DTSTAMP:' + stamp,
      'DTSTART;VALUE=DATE:' + dayString(date),
      'DTEND;VALUE=DATE:' + dayString(next),
      'SUMMARY:' + icsEscape(title),
      'DESCRIPTION:' + icsEscape(description),
      'BEGIN:VALARM',
      'TRIGGER:PT9H',
      'ACTION:DISPLAY',
      'DESCRIPTION:' + icsEscape(title),
      'END:VALARM',
      'END:VEVENT'
    ];
  }

  function downloadCalendar(text) {
    var blob = new Blob([text], { type: 'text/calendar;charset=utf-8' });
    var link = document.createElement('a');
    var url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'SevaNavigator-reminder.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 2000);
  }

  function makeReminder(service, config, dateValue, months) {
    var match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateValue);
    if (!match) {
      return { error: 'Please choose your expiry date.' };
    }
    var year = Number(match[1]);
    var month = Number(match[2]) - 1;
    var day = Number(match[3]);
    var expiry = new Date(year, month, day);
    var today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (expiry <= today) {
      return { error: 'That date has already passed. Please check your expiry date.' };
    }
    var first = monthsBefore(year, month, day, months);
    var pastNote = '';
    if (first <= today) {
      first = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
      pastNote = ' The best time to start has already passed, so the reminder is set for tomorrow. Do not wait.';
    }
    var stamp = stampString(new Date());
    var description = 'Your ' + config.label + ' expires on ' + expiry.toDateString() +
      '. Open the guide on SevaNavigator and the official website: ' + service.url;
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//SevaNavigator//Reminder//EN', 'CALSCALE:GREGORIAN'];
    lines = lines.concat(eventLines(first, 'Time to renew your ' + config.label, description, stamp));
    var last = monthsBefore(year, month, day, 1);
    if (months > 1 && last > first && last > today) {
      lines = lines.concat(eventLines(last, 'Last call: your ' + config.label + ' expires within a month', description, stamp));
    }
    lines.push('END:VCALENDAR');
    return {
      ics: lines.map(fold).join('\r\n') + '\r\n',
      message: 'Reminder file created for ' +
        first.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) +
        ' (' + months + ' month' + (months > 1 ? 's' : '') + ' before expiry). Open the downloaded file to add it to your calendar.' + pastNote
    };
  }

  function renderReminder(service) {
    var old = document.getElementById('sn-reminder-card');
    if (old) {
      old.remove();
    }
    var config = REMINDERS[service.id];
    var plan = document.getElementById('sn-plan-card');
    if (!config || !plan) {
      return;
    }
    var card = el('section', 'sn-card');
    card.id = 'sn-reminder-card';
    card.appendChild(el('h3', '', t('Never miss a renewal')));
    card.appendChild(el('p', 'sn-fine', config.why));

    var row = el('div', 'sn-row');
    var dateLabel = el('label', '', t('My expiry date'));
    dateLabel.setAttribute('for', 'sn-expiry-date');
    var dateInput = el('input', 'sn-input');
    dateInput.type = 'date';
    dateInput.id = 'sn-expiry-date';
    dateInput.style.flex = '0 1 200px';
    dateInput.style.minWidth = '160px';
    row.appendChild(dateLabel);
    row.appendChild(dateInput);
    card.appendChild(row);

    var row2 = el('div', 'sn-row');
    var monthLabel = el('label', '', t('Remind me this many months before'));
    monthLabel.setAttribute('for', 'sn-remind-months');
    var select = el('select', 'sn-input');
    select.id = 'sn-remind-months';
    select.style.flex = '0 1 120px';
    select.style.minWidth = '100px';
    config.options.forEach(function (n) {
      var option = el('option', '', String(n));
      option.value = String(n);
      option.selected = n === config.defaultMonths;
      select.appendChild(option);
    });
    row2.appendChild(monthLabel);
    row2.appendChild(select);
    card.appendChild(row2);

    var message = el('p', 'sn-fine');
    message.setAttribute('role', 'status');
    message.setAttribute('aria-live', 'polite');
    var button = el('button', 'button button-primary', t('Add to my calendar'));
    button.type = 'button';
    button.style.marginTop = '14px';
    button.addEventListener('click', function () {
      var result = makeReminder(service, config, dateInput.value, Number(select.value));
      if (result.error) {
        message.textContent = t(result.error);
        return;
      }
      message.textContent = result.message;
      downloadCalendar(result.ics);
    });
    card.appendChild(button);
    card.appendChild(message);
    card.appendChild(el('p', 'sn-fine', t('Your date stays on your device. It is only used to make the calendar file.')));
    plan.insertAdjacentElement('afterend', card);
  }

  /* =====================================================
     START-UP
     ===================================================== */

  function drawGuideTools(service) {
    openServiceId = service.id;
    renderPlan(service);
    renderReminder(service);
  }

  var previousRenderDetail = window.renderDetail;
  window.renderDetail = function (service) {
    previousRenderDetail(service);
    drawGuideTools(service);
  };

  addStyles();
  buildChecker();

  /* Redraw the labels when the language menu changes. */
  new MutationObserver(function () {
    labelChecker();
    if (state.openId && openServiceId === state.openId) {
      var service = findService(state.openId);
      if (service) {
        drawGuideTools(service);
      }
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  /* If a guide was already open (a shared link), draw its tools now. */
  if (state.openId) {
    var openNow = findService(state.openId);
    if (openNow) {
      renderDetail(openNow);
    }
  }
}());
