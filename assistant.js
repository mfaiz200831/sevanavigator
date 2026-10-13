/* =====================================================
   SEVANAVIGATOR - assistant.js
   A small floating "Ask SevaNavigator" helper.
   It does NOT use AI. It only builds an ordinary Google
   Search link from the service you are viewing plus the
   question you type, and opens it in a new tab.

   - Works on its own: no other website file is changed.
   - Starts once. No timers, no polling, no MutationObserver.
   - It only READS the page (current service, current
     language). It never rewrites existing page content.
   ===================================================== */

(function () {
  'use strict';

  /* Never start twice. */
  if (document.getElementById('sn-assistant')) {
    return;
  }

  /* -----------------------------------------------------
     1. SETTINGS - edit this part to change suggestions.
     Keys are the service ids already used by the website.
       topic   : words put in front of every search
       site    : official website (used only if the person
                 ticks "official site only"); leave '' if
                 the right one depends on the state
       about   : words used in the greeting
       chips   : [button text, words added to the search]
     ----------------------------------------------------- */
  var CONFIG = {
    'train-tickets': {
      topic: 'IRCTC train ticket', site: 'irctc.co.in',
      about: 'train-ticket services',
      mention: 'IRCTC, booking, cancellations, refunds, or railway rules',
      chips: [
        ['Cancellation and refunds', 'cancellation refund rules'],
        ['Booking rules', 'booking rules advance reservation period'],
        ['Tatkal booking', 'tatkal booking timing rules'],
        ['Official IRCTC website', 'official website']
      ]
    },
    'income-tax-return': {
      topic: 'income tax return ITR filing', site: 'incometax.gov.in',
      about: 'income-tax return filing',
      mention: 'documents, deadlines, the e-filing portal, or common errors',
      chips: [
        ['Documents required', 'documents required'],
        ['Filing deadlines', 'due date last date'],
        ['Official filing portal', 'e-filing portal official website'],
        ['Common filing errors', 'common errors notices how to fix']
      ]
    },
    'aadhaar-services': {
      topic: 'Aadhaar UIDAI', site: 'uidai.gov.in',
      about: 'Aadhaar services',
      mention: 'updating details, downloading e-Aadhaar, or linking',
      chips: [
        ['Update address', 'update address online'],
        ['Download e-Aadhaar', 'download e-Aadhaar'],
        ['Update mobile number', 'update mobile number'],
        ['Official UIDAI website', 'official website']
      ]
    },
    'passport': {
      topic: 'India passport', site: 'passportindia.gov.in',
      about: 'passport services',
      mention: 'applying, renewal, fees, or police verification',
      chips: [
        ['Apply for a new passport', 'apply new passport documents'],
        ['Renewal', 'renewal reissue process'],
        ['Fees', 'application fees'],
        ['Track application', 'track application status']
      ]
    },
    'digilocker': {
      topic: 'DigiLocker', site: 'digilocker.gov.in',
      about: 'DigiLocker',
      mention: 'signing up, linking documents, or fetching certificates',
      chips: [
        ['Create an account', 'sign up create account'],
        ['Add documents', 'fetch documents issued'],
        ['Is a DigiLocker copy valid?', 'legal validity of documents'],
        ['Official website', 'official website']
      ]
    },
    'driving-licence': {
      topic: 'driving licence India', site: 'parivahan.gov.in',
      about: 'driving-licence services',
      mention: 'learner licence, tests, renewal, or fees',
      chips: [
        ['Learner licence', 'learner licence apply'],
        ['Driving test', 'driving test slot booking'],
        ['Renewal', 'renewal process'],
        ['Official Parivahan website', 'official website']
      ]
    },
    'voter-id': {
      topic: 'voter ID EPIC', site: 'eci.gov.in',
      about: 'voter-ID services',
      mention: 'registering, corrections, or downloading your voter card',
      chips: [
        ['Register as a voter', 'register new voter Form 6'],
        ['Correct details', 'correction in voter ID Form 8'],
        ['Download e-EPIC', 'download e-EPIC'],
        ['Check name in voter list', 'search name in electoral roll']
      ]
    },
    'national-scholarship': {
      topic: 'National Scholarship Portal', site: 'scholarships.gov.in',
      about: 'scholarships',
      mention: 'eligibility, documents, deadlines, or application status',
      chips: [
        ['Eligibility', 'eligibility'],
        ['Documents required', 'documents required'],
        ['Last date', 'last date apply'],
        ['Official portal', 'official website']
      ]
    },
    'pan-card': {
      topic: 'PAN card', site: '',
      about: 'PAN card services',
      mention: 'applying, e-PAN, corrections, or linking with Aadhaar',
      chips: [
        ['Apply for a new PAN', 'apply new PAN'],
        ['Instant e-PAN', 'instant e-PAN Aadhaar'],
        ['Correction in PAN', 'correction update details'],
        ['Link PAN with Aadhaar', 'link PAN Aadhaar']
      ]
    },
    'epfo': {
      topic: 'EPFO provident fund', site: 'epfindia.gov.in',
      about: 'EPFO and provident fund services',
      mention: 'UAN, balance, withdrawals, or transfers',
      chips: [
        ['Activate UAN', 'activate UAN'],
        ['Check PF balance', 'check PF balance'],
        ['Withdraw PF', 'PF withdrawal claim'],
        ['Transfer PF', 'transfer PF account']
      ]
    },
    'pm-kisan': {
      topic: 'PM-KISAN', site: 'pmkisan.gov.in',
      about: 'PM-KISAN',
      mention: 'eligibility, registration, e-KYC, or payment status',
      chips: [
        ['Eligibility', 'eligibility'],
        ['e-KYC', 'e-KYC how to do'],
        ['Beneficiary status', 'beneficiary status'],
        ['Official website', 'official website']
      ]
    },
    'ayushman-bharat': {
      topic: 'Ayushman Bharat PM-JAY', site: 'pmjay.gov.in',
      about: 'Ayushman Bharat',
      mention: 'eligibility, the card, or covered hospitals',
      chips: [
        ['Am I eligible?', 'eligibility check'],
        ['Get the Ayushman card', 'Ayushman card apply'],
        ['Find a hospital', 'empanelled hospital list'],
        ['Official website', 'official website']
      ]
    },
    'e-shram': {
      topic: 'e-Shram card', site: 'eshram.gov.in',
      about: 'e-Shram',
      mention: 'registration, benefits, or the UAN card',
      chips: [
        ['Register', 'registration how to'],
        ['Benefits', 'benefits'],
        ['Eligibility', 'eligibility'],
        ['Official website', 'official website']
      ]
    },
    'udyam-registration': {
      topic: 'Udyam registration', site: 'udyamregistration.gov.in',
      about: 'Udyam registration',
      mention: 'registering, the certificate, or updating details',
      chips: [
        ['Register', 'registration process'],
        ['Documents required', 'documents required'],
        ['Update details', 'update details'],
        ['Print certificate', 'print certificate']
      ]
    },
    'gst-registration': {
      topic: 'GST registration', site: 'gst.gov.in',
      about: 'GST registration',
      mention: 'who needs it, documents, or the application steps',
      chips: [
        ['Who needs GST?', 'threshold who must register'],
        ['Documents required', 'documents required'],
        ['Application steps', 'new registration steps'],
        ['Official GST portal', 'official portal']
      ]
    },
    'birth-certificate': {
      topic: 'birth certificate India', site: '',
      about: 'birth certificates',
      mention: 'applying, late registration, or corrections',
      chips: [
        ['Apply online', 'apply online'],
        ['Late registration', 'late registration'],
        ['Correction', 'correction in birth certificate'],
        ['Documents required', 'documents required']
      ]
    },
    'india-post': {
      topic: 'India Post', site: 'indiapost.gov.in',
      about: 'India Post services',
      mention: 'tracking, savings schemes, or speed post',
      chips: [
        ['Track a parcel', 'track consignment'],
        ['Savings schemes', 'post office savings schemes'],
        ['Speed Post rates', 'speed post tariff'],
        ['Official website', 'official website']
      ]
    },
    'umang': {
      topic: 'UMANG app', site: 'umang.gov.in',
      about: 'the UMANG app',
      mention: 'what services it offers or how to register',
      chips: [
        ['What is UMANG?', 'what services available'],
        ['Register', 'register login'],
        ['Official website', 'official website'],
        ['Download the app', 'official app download']
      ]
    }
  };

  /* Homepage suggestions: [button text, full search] */
  var HOME_CHIPS = [
    ['Scholarships', 'India government scholarships official portal'],
    ['Aadhaar', 'Aadhaar services UIDAI official website'],
    ['PAN card', 'PAN card apply official'],
    ['Passport', 'India passport apply official website'],
    ['Train tickets', 'IRCTC train ticket booking official website'],
    ['Income tax return', 'income tax return filing official portal'],
    ['Driving licence', 'driving licence apply Parivahan official'],
    ['Check a suspicious website', 'how to check if a government website is genuine .gov.in']
  ];

  /* Generic suggestions for a service that has no entry above. */
  var GENERIC_CHIPS = [
    ['Documents required', 'documents required'],
    ['Official website', 'official website'],
    ['Fees', 'fees'],
    ['Step-by-step process', 'how to apply step by step']
  ];

  /* Words people start questions with; removed so the Google
     search stays short. Example: "How do I get a refund?"
     becomes "get a refund". */
  var FILLER = /^(please\s+)?(how\s+(do|can|should|to)\s+(i|we|you)?|how\s+to|what\s+is\s+the|what\s+is|what\s+are\s+the|what\s+are|where\s+(do|can)\s+i|can\s+i|do\s+i\s+need|i\s+want\s+to|i\s+need\s+to|tell\s+me\s+about)\s*/i;

  var TEXT = {
    en: {
      title: 'Ask SevaNavigator',
      open: 'Open the Ask SevaNavigator search helper',
      close: 'Close the search helper',
      tooltip: 'Ask SevaNavigator',
      homeGreeting: 'Hi! What government service do you need help finding?',
      pageGreeting: function (about, mention) {
        return 'You’re exploring ' + about + '. What would you like to search for about ' + mention + '?';
      },
      suggest: 'Suggested searches',
      placeholder: 'Type your question',
      inputLabel: 'Your question',
      search: 'Search Google',
      official: 'Search the official website only',
      willSearch: 'Google search that will open: ',
      note: 'This only opens a normal Google Search in a new tab. Results come from Google. SevaNavigator does not read or check them. Never type Aadhaar or PAN numbers, OTPs or passwords here. SevaNavigator is an independent, unofficial website and is not run or endorsed by the government.',
      sensitive: 'Please remove personal numbers (Aadhaar, PAN, OTP or passwords) from your question. Do not share them with any website except the official service.'
    },
    hi: {
      title: 'SevaNavigator से पूछें',
      open: 'SevaNavigator खोज सहायक खोलें',
      close: 'खोज सहायक बंद करें',
      tooltip: 'SevaNavigator से पूछें',
      homeGreeting: 'नमस्ते! आपको कौन-सी सरकारी सेवा खोजने में मदद चाहिए?',
      pageGreeting: function (about) {
        return 'आप इस विषय को देख रहे हैं: ' + about + '। आप इसके बारे में क्या खोजना चाहेंगे?';
      },
      suggest: 'सुझाई गई खोजें',
      placeholder: 'अपना प्रश्न लिखें',
      inputLabel: 'आपका प्रश्न',
      search: 'Google पर खोजें',
      official: 'केवल आधिकारिक वेबसाइट पर खोजें',
      willSearch: 'जो Google खोज खुलेगी: ',
      note: 'यह केवल एक सामान्य Google खोज नए टैब में खोलता है। परिणाम Google से आते हैं; SevaNavigator उन्हें न पढ़ता है, न जाँचता है। यहाँ आधार या पैन नंबर, OTP या पासवर्ड कभी न लिखें। SevaNavigator एक स्वतंत्र, अनौपचारिक वेबसाइट है और सरकार द्वारा संचालित या समर्थित नहीं है।',
      sensitive: 'कृपया अपने प्रश्न से निजी नंबर (आधार, पैन, OTP या पासवर्ड) हटा दें। इन्हें आधिकारिक सेवा के अलावा किसी वेबसाइट पर साझा न करें।'
    }
  };

  /* -----------------------------------------------------
     2. READING THE PAGE (read-only, only when needed)
     ----------------------------------------------------- */

  function lang() {
    return document.documentElement.lang === 'hi' ? 'hi' : 'en';
  }

  /* Which service guide is open right now? '' = homepage. */
  function currentServiceId() {
    var details = document.getElementById('service-details');
    if (details && !details.hidden) {
      var button = document.getElementById('detail-save-button');
      if (button && button.dataset && button.dataset.id) {
        return button.dataset.id;
      }
    }
    var hash = window.location.hash || '';
    if (details && !details.hidden && hash.indexOf('#service-') === 0) {
      return hash.slice('#service-'.length);
    }
    return '';
  }

  /* The website keeps its services in a list called SERVICES. */
  function findSiteService(id) {
    try {
      if (typeof SERVICES !== 'undefined' && Array.isArray(SERVICES)) {
        for (var i = 0; i < SERVICES.length; i++) {
          if (SERVICES[i].id === id) {
            return SERVICES[i];
          }
        }
      }
    } catch (error) {
      /* ignore: we simply use the fallback */
    }
    return null;
  }

  /* Everything the assistant needs to know about the current page. */
  function getContext() {
    var id = currentServiceId();
    if (!id) {
      return { id: '', home: true, chips: HOME_CHIPS, homeChips: true };
    }
    var cfg = CONFIG[id];
    var site = findSiteService(id);
    var name = (site && site.name) || id.replace(/-/g, ' ');
    var hindiName = (site && site.hi && site.hi.name) || name;
    return {
      id: id,
      home: false,
      topic: cfg ? cfg.topic : name,
      site: cfg ? cfg.site : '',
      about: cfg ? cfg.about : name,
      aboutHi: hindiName,
      mention: cfg ? cfg.mention : 'documents, fees, or the official website',
      chips: cfg ? cfg.chips : GENERIC_CHIPS,
      homeChips: false
    };
  }

  /* -----------------------------------------------------
     3. BUILDING THE GOOGLE SEARCH
     ----------------------------------------------------- */

  function cleanQuestion(text) {
    var q = String(text || '').replace(/\s+/g, ' ').trim();
    q = q.replace(/[?!.]+$/, '').trim();
    var shorter = q.replace(FILLER, '').trim();
    return shorter.length >= 3 ? shorter : q;
  }

  /* Looks like a personal number? (Aadhaar, PAN, OTP) */
  function looksSensitive(text) {
    var t = String(text || '');
    return /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/.test(t) ||
      /\b[A-Za-z]{5}\d{4}[A-Za-z]\b/.test(t) ||
      /\b(otp|password|passcode|pin)\b[^0-9]{0,12}\d{3,}/i.test(t);
  }

  function buildQuery(ctx, question, officialOnly) {
    var q = cleanQuestion(question);
    var parts = [];
    if (ctx.home) {
      parts.push('India government service');
      if (q) { parts.push(q); }
      parts.push('official website');
    } else {
      parts.push(ctx.topic);
      if (q) { parts.push(q); }
      if (!/official/i.test(q)) { parts.push('official'); }
    }
    var query = parts.join(' ').replace(/\s+/g, ' ').trim();
    if (officialOnly && ctx.site) {
      query = 'site:' + ctx.site + ' ' + query;
    }
    return query;
  }

  function googleUrl(query) {
    return 'https://www.google.com/search?q=' + encodeURIComponent(query);
  }

  /* -----------------------------------------------------
     4. BUILDING THE PANEL (once)
     ----------------------------------------------------- */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== undefined) { node.textContent = text; }
    return node;
  }

  var root = el('div');
  root.id = 'sn-assistant';

  var fab = el('button', 'sn-as-fab', '🤖');
  fab.type = 'button';
  fab.setAttribute('aria-expanded', 'false');
  fab.setAttribute('aria-controls', 'sn-as-panel');

  var panel = el('div', 'sn-as-panel');
  panel.id = 'sn-as-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-labelledby', 'sn-as-title');

  var head = el('div', 'sn-as-head');
  var title = el('h2', 'sn-as-title');
  title.id = 'sn-as-title';
  var closeButton = el('button', 'sn-as-close', '×');
  closeButton.type = 'button';
  head.appendChild(title);
  head.appendChild(closeButton);

  var body = el('div', 'sn-as-body');
  var greeting = el('p', 'sn-as-greeting');
  greeting.setAttribute('aria-live', 'polite');
  var suggestLabel = el('p', 'sn-as-label');
  var chipBox = el('div', 'sn-as-chips');

  var form = el('form', 'sn-as-form');
  form.setAttribute('autocomplete', 'off');
  var input = el('input', 'sn-as-input');
  input.type = 'text';
  input.maxLength = 200;
  var goButton = el('button', 'sn-as-go');
  goButton.type = 'submit';
  form.appendChild(input);
  form.appendChild(goButton);

  var officialRow = el('label', 'sn-as-preview');
  var officialBox = el('input');
  officialBox.type = 'checkbox';
  var officialText = el('span');
  officialText.style.marginLeft = '6px';
  officialRow.appendChild(officialBox);
  officialRow.appendChild(officialText);

  var preview = el('p', 'sn-as-preview');
  preview.setAttribute('aria-live', 'polite');
  var note = el('p', 'sn-as-note');

  body.appendChild(greeting);
  body.appendChild(suggestLabel);
  body.appendChild(chipBox);
  body.appendChild(form);
  body.appendChild(officialRow);
  body.appendChild(preview);
  body.appendChild(note);
  panel.appendChild(head);
  panel.appendChild(body);
  root.appendChild(panel);
  root.appendChild(fab);

  /* -----------------------------------------------------
     5. SHOWING THE RIGHT TEXT (only when something changed)
     ----------------------------------------------------- */

  var shown = { id: null, lang: null };
  var activeContext = getContext();

  function setText(node, value) {
    if (node.textContent !== value) {
      node.textContent = value;
    }
  }

  function setAttr(node, name, value) {
    if (node.getAttribute(name) !== value) {
      node.setAttribute(name, value);
    }
  }

  function render() {
    var ctx = getContext();
    var l = lang();
    if (shown.id === ctx.id && shown.lang === l) {
      activeContext = ctx;
      return;
    }
    shown.id = ctx.id;
    shown.lang = l;
    activeContext = ctx;
    var t = TEXT[l];

    setText(title, t.title);
    setAttr(fab, 'aria-label', t.open);
    setAttr(fab, 'title', t.tooltip);
    setAttr(closeButton, 'aria-label', t.close);
    setAttr(input, 'placeholder', t.placeholder);
    setAttr(input, 'aria-label', t.inputLabel);
    setText(goButton, t.search);
    setText(suggestLabel, t.suggest);
    setText(officialText, t.official);
    setText(note, t.note);
    setText(greeting, ctx.home ? t.homeGreeting :
      (l === 'hi' ? t.pageGreeting(ctx.aboutHi) : t.pageGreeting(ctx.about, ctx.mention)));
    officialRow.hidden = ctx.home || !ctx.site;
    if (officialRow.hidden) { officialBox.checked = false; }
    setText(preview, '');

    /* Rebuild the suggestion buttons only now. */
    while (chipBox.firstChild) {
      chipBox.removeChild(chipBox.firstChild);
    }
    ctx.chips.forEach(function (chip) {
      var button = el('button', 'sn-as-chip', chip[0]);
      button.type = 'button';
      /* The search words are kept in code (not read back from the
         page), so translation can never change them. */
      button.addEventListener('click', function () {
        runChip(chip[1]);
      });
      chipBox.appendChild(button);
    });
  }

  /* -----------------------------------------------------
     6. OPENING GOOGLE
     ----------------------------------------------------- */

  function openGoogle(query) {
    window.open(googleUrl(query), '_blank', 'noopener,noreferrer');
  }

  function runChip(words) {
    render();
    var ctx = activeContext;
    var query = ctx.homeChips ? words : buildQuery(ctx, words, officialBox.checked);
    setText(preview, TEXT[lang()].willSearch + query);
    openGoogle(query);
  }

  function runTyped() {
    render();
    var text = input.value;
    var t = TEXT[lang()];
    if (!text.replace(/\s+/g, '')) {
      input.focus();
      return;
    }
    if (looksSensitive(text)) {
      setText(preview, t.sensitive);
      return;
    }
    var query = buildQuery(activeContext, text, officialBox.checked);
    setText(preview, t.willSearch + query);
    openGoogle(query);
  }

  /* -----------------------------------------------------
     7. OPEN / CLOSE and EVENTS (each added exactly once)
     ----------------------------------------------------- */

  function isOpen() {
    return root.classList.contains('sn-as-open');
  }

  function openPanel() {
    render();
    root.classList.add('sn-as-open');
    fab.setAttribute('aria-expanded', 'true');
    input.focus({ preventScroll: true });
  }

  function closePanel() {
    root.classList.remove('sn-as-open');
    fab.setAttribute('aria-expanded', 'false');
    fab.focus({ preventScroll: true });
  }

  fab.addEventListener('click', function () {
    if (isOpen()) { closePanel(); } else { openPanel(); }
  });
  closeButton.addEventListener('click', closePanel);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    runTyped();
  });

  /* Typing live preview of the search that will open. */
  input.addEventListener('input', function () {
    var text = input.value;
    var t = TEXT[lang()];
    if (!text.replace(/\s+/g, '')) {
      setText(preview, '');
    } else if (looksSensitive(text)) {
      setText(preview, t.sensitive);
    } else {
      setText(preview, t.willSearch + buildQuery(activeContext, text, officialBox.checked));
    }
  });

  root.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      closePanel();
    }
  });

  /* Keep the greeting right if the person moves to another guide
     or changes language while the panel is open. These run only
     when the person does something (no timers, no observers), and
     render() changes nothing unless the guide or language differs. */
  function refreshIfOpen() {
    if (isOpen()) {
      render();
    }
  }
  window.addEventListener('popstate', refreshIfOpen);
  window.addEventListener('hashchange', refreshIfOpen);
  document.addEventListener('click', refreshIfOpen);
  document.addEventListener('change', refreshIfOpen);

  /* -----------------------------------------------------
     8. START (once)
     ----------------------------------------------------- */
  render();
  document.body.appendChild(root);
}());
