/* =====================================================
   SEVANAVIGATOR - readiness.js
   Application Readiness Checker (full Hindi support)
   ===================================================== */

(function () {
  'use strict';

  var HI = {
    'Application readiness': 'आवेदन की तैयारी',
    'Tick the documents you already have. This is only a personal helper — it does not check any official system.': 'जिन दस्तावेज़ों के पास हैं, उन्हें चुनें। यह केवल व्यक्तिगत सहायक है — यह किसी आधिकारिक सिस्टम की जाँच नहीं करता।',
    'Documents you already have': 'आपके पास पहले से मौजूद दस्तावेज़',
    'You still need': 'अभी भी ज़रूरत है',
    'Everything on the list is ticked. Still confirm the exact list on the official website before you apply.': 'सूची की हर चीज़ चुनी गई है। फिर भी आवेदन से पहले आधिकारिक वेबसाइट पर सटीक सूची की पुष्टि करें।',
    'Personal action plan': 'व्यक्तिगत कार्य योजना',
    'How to get missing documents': 'गुम दस्तावेज़ कैसे प्राप्त करें',
    'Copy action plan': 'कार्य योजना कॉपी करें',
    'Reset readiness': 'तैयारी रीसेट करें',
    'Ready': 'तैयार',
    'Almost ready': 'लगभग तैयार',
    'Not ready yet': 'अभी तैयार नहीं',
    'of': 'में से',
    'items ready': 'आइटम तैयार',
    'Copied to clipboard': 'क्लिपबोर्ड पर कॉपी हो गया',
    'Could not copy. Select the text and copy it yourself.': 'कॉपी नहीं हो सका। टेक्स्ट चुनकर खुद कॉपी करें।',
    'Confirm every requirement on the official portal. Rules change.': 'हर आवश्यकता की पुष्टि आधिकारिक पोर्टल पर करें। नियम बदलते हैं।',
    'Tip: keep both original and a clear photocopy / scan of every document.': 'सुझाव: हर दस्तावेज़ का मूल और साफ़ फोटोकॉपी / स्कैन रखें।',
    'This tool never asks for or stores your actual documents or identity numbers.': 'यह टूल कभी भी आपके असली दस्तावेज़ या पहचान संख्या नहीं माँगता और न ही संग्रहीत करता है।',
    'Get it from': 'यहाँ से प्राप्त करें',
    'Check the official accepted list': 'आधिकारिक स्वीकृत सूची जाँचें'
  };

  function t(key) {
    return document.documentElement.lang === 'hi' && HI[key] ? HI[key] : key;
  }

  /* Full document translations */
  var DOC_HI = {
    'Proof of address (check the accepted list on the official portal)': 'पते का प्रमाण (आधिकारिक पोर्टल पर स्वीकृत सूची जाँचें)',
    'Proof of date of birth (check the accepted list)': 'जन्म तिथि का प्रमाण (स्वीकृत सूची जाँचें)',
    'Existing passport, if you are renewing': 'मौजूदा पासपोर्ट, यदि आप नवीनीकरण कर रहे हैं',
    'Appointment confirmation after you book': 'बुकिंग के बाद अपॉइंटमेंट की पुष्टि',
    'Original documents for verification at the centre': 'केंद्र पर सत्यापन के लिए मूल दस्तावेज़',
    'Supporting proof for the detail you want to update (see the official list)': 'जिस विवरण को अपडेट करना है उसका सहायक प्रमाण (आधिकारिक सूची देखें)',
    'Mobile number linked to your Aadhaar, if the service needs it': 'आपके आधार से जुड़ा मोबाइल नंबर, यदि सेवा को इसकी ज़रूरत हो',
    'Never share your OTP with anyone, including this website': 'अपना OTP किसी के साथ साझा न करें, इस वेबसाइट सहित',
    'A mobile number you can access': 'एक मोबाइल नंबर जिस तक आपकी पहुँच हो',
    'The details the official sign-up asks for (enter them only on the official site)': 'आधिकारिक साइन-अप में माँगे गए विवरण (केवल आधिकारिक साइट पर दर्ज करें)',
    'The name of the issuer of the document you want to fetch': 'जिस दस्तावेज़ को लाना है, उसके जारीकर्ता का नाम',
    'Mobile number and email for your account': 'अपने खाते के लिए मोबाइल नंबर और ईमेल',
    'Passenger names and ages, as on their ID': 'यात्रियों के नाम और आयु, जैसा उनके ID पर है',
    'A valid photo ID to carry while travelling (check current rules)': 'यात्रा के दौरान ले जाने के लिए वैध फोटो ID (वर्तमान नियम जाँचें)',
    'A payment method, used only on the official site': 'भुगतान का तरीका, केवल आधिकारिक साइट पर उपयोग करें',
    'Proof of identity': 'पहचान का प्रमाण',
    'Proof of address': 'पते का प्रमाण',
    'Proof of date of birth': 'जन्म तिथि का प्रमाण',
    'Recent passport-size photographs': 'हाल की पासपोर्ट साइज़ फोटो',
    'Existing driving licence (if any)': 'मौजूदा ड्राइविंग लाइसेंस (यदि हो)',
    'Medical certificate (if required by your state)': 'मेडिकल सर्टिफिकेट (यदि आपके राज्य में आवश्यक हो)',
    'Learner licence (for permanent licence)': 'लर्नर लाइसेंस (स्थायी लाइसेंस के लिए)',
    'Aadhaar number or enrolment ID': 'आधार नंबर या नामांकन ID',
    'Mobile number linked to your Aadhaar': 'आपके आधार से जुड़ा मोबाइल नंबर',
    'A valid photo ID': 'एक वैध फोटो ID',
    'Address proof': 'पते का प्रमाण',
    'Age proof / date of birth proof': 'आयु प्रमाण / जन्म तिथि प्रमाण',
    'Passport-size photograph': 'पासपोर्ट साइज़ फोटो',
    'Bank account details (for some schemes)': 'बैंक खाता विवरण (कुछ योजनाओं के लिए)',
    'Income certificate (if required by the scheme)': 'आय प्रमाण पत्र (यदि योजना में आवश्यक हो)',
    'Caste certificate (if required by the scheme)': 'जाति प्रमाण पत्र (यदि योजना में आवश्यक हो)',
    'Previous year marksheets / certificates': 'पिछले वर्ष की मार्कशीट / प्रमाण पत्र',
    'Bonafide certificate from the institution': 'संस्थान से बोनाफाइड प्रमाण पत्र',
    'PAN card or Form 49A details': 'पैन कार्ड या फॉर्म 49A विवरण',
    'Photograph as per specifications': 'निर्धारित विनिर्देशों के अनुसार फोटो',
    'Aadhaar or other accepted ID': 'आधार या अन्य स्वीकृत ID',
    'Mobile number for OTP': 'OTP के लिए मोबाइल नंबर',
    'Bank account / IFSC details (where required)': 'बैंक खाता / IFSC विवरण (जहाँ आवश्यक हो)',
    'Land / farmer related documents (as asked by the portal)': 'भूमि / किसान संबंधी दस्तावेज़ (जैसा पोर्टल माँगे)',
    'Family ID / ration card (if asked)': 'परिवार ID / राशन कार्ड (यदि माँगा जाए)',
    'Existing health card or previous registration (if any)': 'मौजूदा स्वास्थ्य कार्ड या पिछला पंजीकरण (यदि हो)',
    'Identity and address proof': 'पहचान और पते का प्रमाण',
    'Business details and address proof': 'व्यवसाय विवरण और पते का प्रमाण',
    'PAN of the business / proprietor': 'व्यवसाय / मालिक का पैन',
    'Bank account details': 'बैंक खाता विवरण',
    'Photograph of the premises (if asked)': 'परिसर की फोटो (यदि माँगी जाए)',
    'GSTIN related documents (if already registered)': 'GSTIN संबंधी दस्तावेज़ (यदि पहले से पंजीकृत हो)',
    'Birth proof of the child': 'बच्चे का जन्म प्रमाण',
    'Parents’ identity and address proof': 'माता-पिता की पहचान और पते का प्रमाण',
    'Hospital / institutional birth record (if available)': 'अस्पताल / संस्थागत जन्म रिकॉर्ड (यदि उपलब्ध हो)',
    'Application form as required by the local authority': 'स्थानीय प्राधिकरण द्वारा आवश्यक आवेदन फॉर्म',
    'Previous year marksheets': 'पिछले वर्ष की मार्कशीट',
    'Income certificate, if the scheme needs it': 'आय प्रमाण पत्र, यदि योजना को इसकी ज़रूरत हो',
    'Category certificate, if applicable': 'श्रेणी प्रमाण पत्र, यदि लागू हो',
    'Institute details and student ID': 'संस्थान विवरण और छात्र ID',
    'Bank details, entered only on the official portal': 'बैंक विवरण, केवल आधिकारिक पोर्टल पर दर्ज करें',
    'Previous year marksheets / certificates': 'पिछले वर्ष की मार्कशीट / प्रमाण पत्र',
    'Bonafide certificate from the institution': 'संस्थान से बोनाफाइड प्रमाण पत्र',
    'Aadhaar details, for the instant e-PAN route (enter them only on the official site)': 'आधार विवरण, तुरंत ई-पैन मार्ग के लिए (केवल आधिकारिक साइट पर दर्ज करें)',
    'Mobile number linked to your Aadhaar': 'आपके आधार से जुड़ा मोबाइल नंबर',
    'Proof of identity, address and date of birth, if you use the paper route (see the official list)': 'पहचान, पता और जन्म तिथि का प्रमाण, यदि पेपर मार्ग उपयोग कर रहे हों (आधिकारिक सूची देखें)',
    'Photograph and signature, if you use the paper route': 'फोटो और हस्ताक्षर, यदि पेपर मार्ग उपयोग कर रहे हों',
    'Your UAN (Universal Account Number)': 'आपका UAN (यूनिवर्सल अकाउंट नंबर)',
    'Mobile number linked to your UAN': 'आपके UAN से जुड़ा मोबाइल नंबर',
    'KYC details the portal asks for, such as Aadhaar and bank account': 'पोर्टल द्वारा माँगे गए KYC विवरण, जैसे आधार और बैंक खाता',
    'Previous employer details, if you are transferring your account': 'पिछले नियोक्ता का विवरण, यदि खाता ट्रांसफर कर रहे हों',
    'Aadhaar details, as requested on the official portal': 'आधार विवरण, जैसा आधिकारिक पोर्टल पर माँगा जाए',
    'Land ownership records': 'भूमि स्वामित्व रिकॉर्ड',
    'Bank account details, entered only on the official portal': 'बैंक खाता विवरण, केवल आधिकारिक पोर्टल पर दर्ज करें',
    'Mobile number': 'मोबाइल नंबर',
    'Aadhaar or other accepted ID': 'आधार या अन्य स्वीकृत ID',
    'Family ID / ration card (if asked)': 'परिवार ID / राशन कार्ड (यदि माँगा जाए)',
    'Aadhaar': 'आधार',
    'Mobile number (Aadhaar linked)': 'मोबाइल नंबर (आधार से जुड़ा)',
    'Bank account details': 'बैंक खाता विवरण',
    'Occupation / skill details': 'पेशा / कौशल विवरण',
    'PAN (business / proprietor)': 'पैन (व्यवसाय / मालिक)',
    'Business address and activity details': 'व्यवसाय पता और गतिविधि विवरण',
    'PAN': 'पैन',
    'Business address proof': 'व्यवसाय पता प्रमाण',
    'Photo and authorisation documents (if applicable)': 'फोटो और प्राधिकरण दस्तावेज़ (यदि लागू)',
    'Child birth proof (hospital record)': 'बच्चे का जन्म प्रमाण (अस्पताल रिकॉर्ड)',
    'Parents identity and address proof': 'माता-पिता की पहचान और पते का प्रमाण',
    'Application form (as per local authority)': 'आवेदन फॉर्म (स्थानीय प्राधिकरण के अनुसार)',
    'Identity and address proof (for opening account)': 'पहचान और पते का प्रमाण (खाता खोलने के लिए)',
    'Tracking number (to track parcel)': 'ट्रैकिंग नंबर (पार्सल ट्रैक करने के लिए)',
    'Other documents as per the service': 'सेवा के अनुसार अन्य दस्तावेज़',

  };

  function translateDoc(text) {
    if (document.documentElement.lang === 'hi' && DOC_HI[text]) {
      return DOC_HI[text];
    }
    return text;
  }

  var GET_HINTS = [
    { match: /aadhaar|aadhar|uidai|otp/i, en: 'UIDAI / Aadhaar centres or the official UIDAI website (uidai.gov.in).', hi: 'UIDAI / आधार केंद्र या आधिकारिक UIDAI वेबसाइट (uidai.gov.in)।' },
    { match: /passport/i, en: 'Passport Seva Kendra or the official Passport Seva website.', hi: 'पासपोर्ट सेवा केंद्र या आधिकारिक पासपोर्ट सेवा वेबसाइट।' },
    { match: /pan/i, en: 'NSDL / UTIITSL portals or authorised PAN centres.', hi: 'NSDL / UTIITSL पोर्टल या अधिकृत पैन केंद्र।' },
    { match: /driving|licence|license|dl/i, en: 'Your State Transport Department / Parivahan portal.', hi: 'आपके राज्य परिवहन विभाग / परिवहन पोर्टल।' },
    { match: /mobile number linked/i, en: 'Keep the number active and linked to Aadhaar if the service requires it.', hi: 'नंबर सक्रिय रखें और यदि सेवा को ज़रूरत हो तो आधार से लिंक करें।' },
    { match: /never share your otp/i, en: 'This is a safety reminder. Never share OTP with anyone.', hi: 'यह सुरक्षा याद दिलाने वाला संदेश है। OTP कभी किसी के साथ साझा न करें।' },
    { match: /supporting proof|update/i, en: 'Use only the proof types listed for the specific update on the official UIDAI site.', hi: 'आधिकारिक UIDAI साइट पर विशिष्ट अपडेट के लिए सूचीबद्ध प्रमाण प्रकारों का ही उपयोग करें।' },
    { match: /address proof|proof of address/i, en: 'Utility bill, bank statement, or any document named on the official accepted list.', hi: 'बिजली/पानी बिल, बैंक स्टेटमेंट, या आधिकारिक स्वीकृत सूची में नामित कोई दस्तावेज़।' },
    { match: /date of birth|dob|birth proof/i, en: 'Birth certificate, school leaving certificate, or any document named on the official list.', hi: 'जन्म प्रमाण पत्र, स्कूल लीविंग सर्टिफिकेट, या आधिकारिक सूची में नामित कोई दस्तावेज़।' },
    { match: /appointment/i, en: 'Generated on the official portal after you complete booking and payment.', hi: 'बुकिंग और भुगतान पूरा करने के बाद आधिकारिक पोर्टल पर बनता है।' },
    { match: /original documents/i, en: 'Carry the physical originals of every document you uploaded or listed.', hi: 'आपके द्वारा अपलोड या सूचीबद्ध हर दस्तावेज़ के मूल भौतिक रूप ले जाएँ।' }
  ];

  function getHint(docText) {
    var isHi = document.documentElement.lang === 'hi';
    for (var i = 0; i < GET_HINTS.length; i++) {
      if (GET_HINTS[i].match.test(docText)) {
        return isHi ? GET_HINTS[i].hi : GET_HINTS[i].en;
      }
    }
    return t('Check the official accepted list');
  }

  var STORAGE_KEY = 'sevanavigator-readiness';

  function loadAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function saveAll(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }

  function getState(serviceId) {
    var all = loadAll();
    return all[serviceId] || { checked: {} };
  }

  function setState(serviceId, state) {
    var all = loadAll();
    all[serviceId] = state;
    saveAll(all);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function clear(node) {
    while (node && node.firstChild) node.removeChild(node.firstChild);
  }

  function renderReadiness(service) {
    var old = document.getElementById('sn-readiness-card');
    if (old) old.remove();

    var docs = Array.isArray(service.documents) ? service.documents : [];
    if (docs.length === 0) return;

    var anchor = document.getElementById('sn-plan-card') ||
                 document.getElementById('document-checklist') ||
                 document.querySelector('.detail-content-card');
    if (!anchor) return;

    var state = getState(service.id);
    var card = el('section', 'sn-card sn-readiness-card');
    card.id = 'sn-readiness-card';

    card.appendChild(el('h3', '', t('Application readiness')));
    card.appendChild(el('p', 'sn-fine', t('Tick the documents you already have. This is only a personal helper — it does not check any official system.')));

    var statusRow = el('div', 'sn-readiness-status');
    var badge = el('span', 'sn-badge');
    var countText = el('span', 'sn-fine');
    statusRow.appendChild(badge);
    statusRow.appendChild(countText);
    card.appendChild(statusRow);

    card.appendChild(el('h4', '', t('Documents you already have')));

    var list = el('ul', 'sn-readiness-list');
    docs.forEach(function (doc, index) {
      var id = 'sn-ready-' + service.id + '-' + index;
      var li = el('li');
      var label = el('label');
      label.setAttribute('for', id);
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.id = id;
      cb.checked = Boolean(state.checked[index]);
      cb.dataset.index = String(index);
      label.appendChild(cb);
      label.appendChild(document.createTextNode(' ' + translateDoc(doc)));
      li.appendChild(label);
      list.appendChild(li);
    });
    card.appendChild(list);

    var missingBox = el('div', 'sn-readiness-missing');
    card.appendChild(missingBox);
    var planBox = el('div', 'sn-readiness-plan');
    card.appendChild(planBox);

    var btnRow = el('div', 'sn-row sn-readiness-actions');
    var copyBtn = el('button', 'button button-secondary', t('Copy action plan'));
    copyBtn.type = 'button';
    var resetBtn = el('button', 'button button-secondary', t('Reset readiness'));
    resetBtn.type = 'button';
    btnRow.appendChild(copyBtn);
    btnRow.appendChild(resetBtn);
    card.appendChild(btnRow);

    card.appendChild(el('p', 'sn-fine', t('This tool never asks for or stores your actual documents or identity numbers.')));
    card.appendChild(el('p', 'sn-fine', t('Confirm every requirement on the official portal. Rules change.')));

    if (anchor.id === 'sn-plan-card') {
      anchor.insertAdjacentElement('afterend', card);
    } else {
      var parentSection = anchor.closest('.detail-content-card') || anchor;
      parentSection.insertAdjacentElement('afterend', card);
    }

    function refresh() {
      var checkedCount = 0;
      var missing = [];
      list.querySelectorAll('input[type="checkbox"]').forEach(function (box) {
        var idx = Number(box.dataset.index);
        if (box.checked) {
          checkedCount++;
          state.checked[idx] = true;
        } else {
          state.checked[idx] = false;
          missing.push({ index: idx, text: docs[idx] });
        }
      });
      setState(service.id, state);

      var total = docs.length;
      var pct = total ? Math.round((checkedCount / total) * 100) : 0;
      badge.className = 'sn-badge';
      if (pct === 100) {
        badge.textContent = t('Ready');
        badge.classList.add('sn-badge-ok');
      } else if (pct >= 60) {
        badge.textContent = t('Almost ready');
        badge.classList.add('sn-badge-warn');
      } else {
        badge.textContent = t('Not ready yet');
        badge.classList.add('sn-badge-bad');
      }
      countText.textContent = ' ' + checkedCount + ' ' + t('of') + ' ' + total + ' ' + t('items ready');

      clear(missingBox);
      if (missing.length === 0) {
        missingBox.appendChild(el('p', 'sn-fine sn-ok-text', t('Everything on the list is ticked. Still confirm the exact list on the official website before you apply.')));
      } else {
        missingBox.appendChild(el('h4', '', t('You still need') + ' (' + missing.length + ')'));
        var ul = el('ul', 'sn-plan-list');
        missing.forEach(function (m) {
          var li = el('li');
          li.appendChild(el('strong', '', translateDoc(m.text)));
          ul.appendChild(li);
        });
        missingBox.appendChild(ul);
      }

      clear(planBox);
      planBox.appendChild(el('h4', '', t('Personal action plan')));
      if (missing.length === 0) {
        planBox.appendChild(el('p', 'sn-fine', t('Tip: keep both original and a clear photocopy / scan of every document.')));
      } else {
        planBox.appendChild(el('p', 'sn-fine', t('How to get missing documents')));
        var ol = el('ol', 'sn-plan-list');
        missing.forEach(function (m, i) {
          var li = el('li');
          li.appendChild(el('strong', '', (i + 1) + '. ' + translateDoc(m.text)));
          li.appendChild(document.createElement('br'));
          li.appendChild(el('span', 'sn-fine', t('Get it from') + ': ' + getHint(m.text)));
          ol.appendChild(li);
        });
        planBox.appendChild(ol);
        planBox.appendChild(el('p', 'sn-fine', t('Tip: keep both original and a clear photocopy / scan of every document.')));
      }
    }

    list.addEventListener('change', function (e) {
      if (e.target && e.target.matches('input[type="checkbox"]')) refresh();
    });

    copyBtn.addEventListener('click', function () {
      var lines = ['SevaNavigator — Action plan for ' + service.name, 'Generated: ' + new Date().toLocaleString('en-IN'), ''];
      var missing = [];
      list.querySelectorAll('input[type="checkbox"]').forEach(function (box, idx) {
        if (!box.checked) missing.push(docs[idx]);
      });
      if (missing.length === 0) {
        lines.push('All listed documents are marked as available.');
      } else {
        lines.push('Still needed:');
        missing.forEach(function (d, i) {
          lines.push((i + 1) + '. ' + d);
          lines.push('   → ' + getHint(d));
        });
      }
      lines.push('', 'Official website: ' + (service.url || ''), 'This is a personal helper only.');
      var text = lines.join('\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          copyBtn.textContent = t('Copied to clipboard');
          setTimeout(function () { copyBtn.textContent = t('Copy action plan'); }, 2000);
        });
      }
    });

    resetBtn.addEventListener('click', function () {
      state.checked = {};
      setState(service.id, state);
      list.querySelectorAll('input[type="checkbox"]').forEach(function (box) { box.checked = false; });
      refresh();
    });

    refresh();
  }

  function addStyles() {
    if (document.getElementById('sn-readiness-styles')) return;
    var style = document.createElement('style');
    style.id = 'sn-readiness-styles';
    style.textContent = '.sn-readiness-card{margin-top:20px;}.sn-readiness-status{display:flex;align-items:center;gap:10px;margin:12px 0 16px;flex-wrap:wrap;}.sn-badge{display:inline-block;padding:4px 12px;border-radius:999px;font-size:13px;font-weight:600;}.sn-badge-ok{background:#d1fae5;color:#065f46;}.sn-badge-warn{background:#fef3c7;color:#92400e;}.sn-badge-bad{background:#fee2e2;color:#991b1b;}.sn-readiness-list{list-style:none;padding:0;margin:8px 0 16px;}.sn-readiness-list li{margin:0 0 8px;}.sn-readiness-list label{display:flex;align-items:flex-start;gap:10px;cursor:pointer;line-height:1.4;}.sn-readiness-list input[type="checkbox"]{margin-top:3px;flex-shrink:0;width:18px;height:18px;}.sn-readiness-missing h4,.sn-readiness-plan h4{margin:16px 0 8px;font-size:15px;}.sn-ok-text{color:#065f46;}.sn-readiness-actions{margin-top:16px;gap:10px;flex-wrap:wrap;}';
    document.head.appendChild(style);
  }

  var previousRenderDetail = window.renderDetail;
  window.renderDetail = function (service) {
    previousRenderDetail(service);
    renderReadiness(service);
  };

  new MutationObserver(function () {
    if (typeof state !== 'undefined' && state.openId) {
      var service = findService(state.openId);
      if (service) renderReadiness(service);
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  if (typeof state !== 'undefined' && state.openId) {
    var openNow = findService(state.openId);
    if (openNow) setTimeout(function () { renderReadiness(openNow); }, 0);
  }

  addStyles();
}());
