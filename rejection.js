/* =====================================================
   SEVANAVIGATOR - rejection.js
   Adds a "Top 3 reasons people get rejected" panel to
   every service guide.
   Load this file AFTER script.js (and after language.js).

   Fully bilingual (English + Hindi).
   ===================================================== */

(function () {
  'use strict';

  function lang() { return document.documentElement.lang === 'hi' ? 'hi' : 'en'; }
  function u(en, hi) { return lang() === 'hi' && hi ? hi : en; }

  // Each item: [enTitle, hiTitle, enAdvice, hiAdvice, kind]
  var NAME_MISMATCH = [
    'Your name or date of birth is spelled differently on two documents',
    'आपके नाम या जन्म तिथि दो दस्तावेज़ों पर अलग-अलग लिखी हुई है',
    'Compare the name and date of birth on every document you will use. If two differ, ask the office that issued the wrong one how to correct it, then apply. Ask the authority which document it treats as correct.',
    'हर दस्तावेज़ पर नाम और जन्म तिथि मिलाएँ। यदि दो अलग हैं, तो गलत दस्तावेज़ जारी करने वाले कार्यालय से सुधार करवाएँ, फिर आवेदन करें। प्राधिकरण से पूछें कि वह किस दस्तावेज़ को सही मानता है।',
    'general'
  ];

  var PHOTO = [
    'The photo or scan does not follow the portal\'s rules',
    'फोटो या स्कैन पोर्टल के नियमों के अनुसार नहीं है',
    'Follow the exact size, background and file rules shown on the portal. Avoid selfies, filters, shadows and coloured walls, and check that the scan is sharp and not cropped.',
    'पोर्टल पर दिखाए गए सही आकार, पृष्ठभूमि और फ़ाइल नियमों का पालन करें। सेल्फी, फ़िल्टर, छाया और रंगीन दीवारों से बचें, और सुनिश्चित करें कि स्कैन साफ़ और कटा हुआ न हो।',
    'general'
  ];

  var OFFICIAL_LIST = [
    'A document is not on the official accepted list',
    'कोई दस्तावेज़ आधिकारिक स्वीकृत सूची में नहीं है',
    'Use only documents named on the official list for your case. Compare your documents with that list before you apply.',
    'केवल आधिकारिक सूची में नामित दस्तावेज़ों का उपयोग करें। आवेदन से पहले अपनी दस्तावेज़ों को उस सूची से मिलाएँ।',
    'general'
  ];

  var OTP_PHONE = [
    'The mobile number is not the one linked to the service',
    'मोबाइल नंबर सेवा से जुड़े नंबर से अलग है',
    'Many services send an OTP to one registered number. Make sure that number is active and with you. Enter OTPs only on the official site.',
    'कई सेवाएँ एक पंजीकृत नंबर पर OTP भेजती हैं। सुनिश्चित करें कि वह नंबर सक्रिय है और आपके पास है। OTP केवल आधिकारिक साइट पर ही दर्ज करें।',
    'general'
  ];

  var CHECKS = {
    'passport': [
      NAME_MISMATCH,
      [
        'Proof of address or date of birth is not on the accepted list',
        'पते या जन्म तिथि का प्रमाण स्वीकृत सूची में नहीं है',
        'Check the official accepted-documents list before you book your appointment, and bring originals.',
        'अपॉइंटमेंट बुक करने से पहले आधिकारिक स्वीकृत-दस्तावेज़ सूची जाँचें, और मूल दस्तावेज़ साथ लाएँ।',
        'general'
      ],
      [
        'You arrive without originals or the appointment printout',
        'आप मूल दस्तावेज़ या अपॉइंटमेंट प्रिंटआउट के बिना पहुँचते हैं',
        'Carry the originals and the appointment confirmation. Copies alone are not accepted.',
        'मूल दस्तावेज़ और अपॉइंटमेंट की पुष्टि साथ रखें। केवल कॉपी स्वीकार नहीं की जाती।',
        'general'
      ]
    ],
    'train-tickets': [
      [
        'The passenger name does not match the ID you will carry',
        'यात्री का नाम आपके पास वाले ID से मेल नहीं खाता',
        'Enter names as they appear on the ID you will show on the train.',
        'नाम वैसे ही दर्ज करें जैसे ट्रेन पर दिखाने वाले ID पर लिखा है।',
        'general'
      ],
      [
        'Wrong date, station or class booked',
        'गलत तारीख, स्टेशन या क्लास बुक हो गई',
        'Check the date, stations and class on the review page before you pay.',
        'भुगतान से पहले समीक्षा पेज पर तारीख, स्टेशन और क्लास जाँचें।',
        'general'
      ],
      [
        'Paying again when no confirmation appears',
        'पुष्टि न दिखने पर दोबारा भुगतान करना',
        'Wait for the booking status. Do not pay again unless the official site says the previous payment failed.',
        'बुकिंग स्थिति का इंतज़ार करें। जब तक आधिकारिक साइट पिछले भुगतान को विफल न बताए, दोबारा भुगतान न करें।',
        'general'
      ]
    ],
    'digilocker': [
      OTP_PHONE,
      [
        'Wrong issuer selected while fetching a document',
        'दस्तावेज़ लाते समय गलत जारीकर्ता चुना गया',
        'Search for the exact organisation that issued the document.',
        'उस संगठन को खोजें जिसने वास्तव में दस्तावेज़ जारी किया है।',
        'general'
      ],
      [
        'Sharing documents with untrusted links or people',
        'अविश्वसनीय लिंक या लोगों के साथ दस्तावेज़ साझा करना',
        'Share only with organisations you trust and only through the official share options.',
        'केवल विश्वसनीय संगठनों के साथ और केवल आधिकारिक शेयर विकल्पों के माध्यम से साझा करें।',
        'general'
      ]
    ],
    'driving-licence': [
      NAME_MISMATCH,
      [
        'Medical or learning licence rules of your state are missed',
        'आपके राज्य के मेडिकल या लर्निंग लाइसेंस नियमों को नज़रअंदाज़ किया गया',
        'Rules differ by state. Check the state transport portal before you apply.',
        'नियम राज्य के अनुसार अलग होते हैं। आवेदन से पहले राज्य परिवहन पोर्टल जाँचें।',
        'general'
      ],
      [
        'You arrive without originals or the required forms',
        'आप मूल दस्तावेज़ या आवश्यक फॉर्म के बिना पहुँचते हैं',
        'Carry every original and any form the portal or RTO asks for.',
        'हर मूल दस्तावेज़ और पोर्टल या RTO द्वारा माँगे गए फॉर्म साथ रखें।',
        'general'
      ]
    ],
    'aadhaar-services': [
      OTP_PHONE,
      [
        'Supporting proof does not match the type of update',
        'सहायक प्रमाण अपडेट के प्रकार से मेल नहीं खाता',
        'Use only the proof types listed for the specific update you want.',
        'केवल उसी प्रकार के प्रमाण का उपयोग करें जो आपके अपडेट के लिए सूचीबद्ध हैं।',
        'general'
      ],
      [
        'Biometric update attempted without checking centre rules',
        'केंद्र के नियम जाँचे बिना बायोमेट्रिक अपडेट का प्रयास',
        'Some updates need a visit to an enrolment centre. Check the official process first.',
        'कुछ अपडेट के लिए नामांकन केंद्र जाना पड़ता है। पहले आधिकारिक प्रक्रिया जाँचें।',
        'general'
      ]
    ],
    'voter-id': [
      NAME_MISMATCH,
      [
        'Form or document type does not match your situation',
        'फॉर्म या दस्तावेज़ प्रकार आपकी स्थिति से मेल नहीं खाता',
        'Use the correct form for new registration, correction or migration.',
        'नए पंजीकरण, सुधार या माइग्रेशन के लिए सही फॉर्म का उपयोग करें।',
        'general'
      ],
      [
        'Address proof is not accepted in your state',
        'पते का प्रमाण आपके राज्य में स्वीकार नहीं होता',
        'Check the current list of accepted address proofs on the official voter portal.',
        'आधिकारिक वोटर पोर्टल पर स्वीकृत पते के प्रमाणों की वर्तमान सूची जाँचें।',
        'general'
      ]
    ],
    'national-scholarship': [
      [
        'Scheme eligibility rules are not checked carefully',
        'योजना की पात्रता नियमों को ध्यान से नहीं जाँचा गया',
        'Read the scheme guidelines on the National Scholarship Portal before you apply.',
        'आवेदन से पहले राष्ट्रीय छात्रवृत्ति पोर्टल पर योजना दिशानिर्देश पढ़ें।',
        'general'
      ],
      [
        'Institute verification is still pending',
        'संस्थान सत्यापन अभी लंबित है',
        'After you apply, your institute must verify the application. Follow up with them.',
        'आवेदन के बाद आपके संस्थान को आवेदन सत्यापित करना होता है। उनसे फॉलो-अप करें।',
        'general'
      ],
      [
        'Bank account details do not match the student name',
        'बैंक खाता विवरण छात्र के नाम से मेल नहीं खाता',
        'Use a bank account in the student’s name as required by the scheme.',
        'योजना के अनुसार छात्र के नाम का बैंक खाता उपयोग करें।',
        'general'
      ]
    ],
    'pan-card': [
      NAME_MISMATCH,
      [
        'Photo or signature does not meet the size rules',
        'फोटो या हस्ताक्षर आकार नियमों के अनुसार नहीं है',
        'Follow the exact photo and signature specifications shown on the portal.',
        'पोर्टल पर दिखाए गए फोटो और हस्ताक्षर के सटीक विनिर्देशों का पालन करें।',
        'general'
      ],
      [
        'Supporting documents are not from the accepted list',
        'सहायक दस्तावेज़ स्वीकृत सूची से नहीं हैं',
        'Use only the identity and address proofs listed for PAN applications.',
        'केवल पैन आवेदन के लिए सूचीबद्ध पहचान और पते के प्रमाणों का उपयोग करें।',
        'general'
      ]
    ],
    'income-tax-return': [
      [
        'Wrong assessment year or form selected',
        'गलत निर्धारण वर्ष या फॉर्म चुना गया',
        'Confirm the correct assessment year and ITR form on the official e-filing portal.',
        'आधिकारिक ई-फाइलिंग पोर्टल पर सही निर्धारण वर्ष और ITR फॉर्म की पुष्टि करें।',
        'general'
      ],
      [
        'Bank account or AIS details not verified',
        'बैंक खाता या AIS विवरण सत्यापित नहीं किए गए',
        'Match the information with your Form 26AS / AIS before submitting.',
        'जमा करने से पहले जानकारी को अपने फॉर्म 26AS / AIS से मिलाएँ।',
        'general'
      ],
      [
        'Digital signature or e-verification step skipped',
        'डिजिटल हस्ताक्षर या ई-सत्यापन चरण छोड़ दिया गया',
        'Complete e-verification within the time allowed after filing.',
        'फाइलिंग के बाद दिए गए समय के अंदर ई-सत्यापन पूरा करें।',
        'general'
      ]
    ]
  };

  // Fallback for any service not listed above
  var FALLBACK = [NAME_MISMATCH, PHOTO, OFFICIAL_LIST];

  function make(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== undefined) { node.textContent = text; }
    return node;
  }

  var style = document.createElement('style');
  style.textContent =
    '#rp-card{margin:18px 0;padding:20px;border:2px solid #c77d12;border-radius:12px;background:#fff8ec;}' +
    '#rp-card h3{margin:0 0 6px;font-size:19px;}' +
    '#rp-card ol{margin:12px 0;padding:0;list-style:none;counter-reset:rp;}' +
    '#rp-card li{counter-increment:rp;position:relative;margin:10px 0;padding:12px 12px 12px 52px;background:#fff;border:1px solid #e3c99a;border-radius:8px;}' +
    '#rp-card li::before{content:counter(rp);position:absolute;left:12px;top:12px;width:28px;height:28px;border-radius:50%;background:#c77d12;color:#fff;font-weight:700;text-align:center;line-height:28px;}' +
    '#rp-card li strong{display:block;margin-bottom:4px;}' +
    '#rp-card .rp-kind{display:inline-block;margin-top:6px;padding:2px 8px;border:1px solid #8a5200;border-radius:999px;font-size:12px;font-weight:700;color:#6b3f00;background:#fff;}' +
    '#rp-card .rp-note{margin:0;font-size:13px;color:#4a5a63;}';
  document.head.appendChild(style);

  function drawPanel(service) {
    var old = document.getElementById('rp-card');
    if (old) { old.remove(); }
    var eligibility = document.getElementById('detail-eligibility');
    var anchor = eligibility && (eligibility.closest('section') || eligibility.parentNode);
    if (!anchor) { return; }

    var items = CHECKS[service.id] || FALLBACK;
    var card = make('section');
    card.id = 'rp-card';
    card.setAttribute('aria-labelledby', 'rp-title');

    var title = make('h3', '', u('⚠ Top 3 reasons people get rejected', '⚠ आवेदन अस्वीकृत होने के 3 मुख्य कारण'));
    title.id = 'rp-title';
    card.appendChild(title);

    card.appendChild(make('p', 'rp-note', u(
      'Check these before you apply. This is a list of common checks, not an official list of rejection reasons.',
      'आवेदन से पहले इन्हें जाँचें। यह आम जाँचों की सूची है, अस्वीकृति के कारणों की आधिकारिक सूची नहीं।'
    )));

    var list = make('ol');
    items.forEach(function (item) {
      // New format: [enTitle, hiTitle, enAdvice, hiAdvice, kind]
      // Old format fallback: [enTitle, enAdvice, kind]
      var enTitle, hiTitle, enAdvice, hiAdvice, kind;

      if (item.length >= 5) {
        enTitle = item[0];
        hiTitle = item[1];
        enAdvice = item[2];
        hiAdvice = item[3];
        kind = item[4];
      } else {
        // old 3-item format (should not happen after this update)
        enTitle = item[0];
        hiTitle = item[0];
        enAdvice = item[1];
        hiAdvice = item[1];
        kind = item[2];
      }

      var li = make('li');
      li.appendChild(make('strong', '', u(enTitle, hiTitle)));
      li.appendChild(make('span', '', u(enAdvice, hiAdvice)));
      li.appendChild(document.createElement('br'));
      li.appendChild(make('span', 'rp-kind', kind === 'reported'
        ? u('Reported by published guides', 'प्रकाशित गाइड में बताया गया')
        : u('General check', 'सामान्य जाँच')));
      list.appendChild(li);
    });
    card.appendChild(list);

    card.appendChild(make('p', 'rp-note', u(
      'The authority decides whether an application is accepted. Confirm the exact rules on the official website.',
      'आवेदन स्वीकार होगा या नहीं, यह प्राधिकरण तय करता है। सटीक नियम आधिकारिक वेबसाइट पर जाँचें।'
    )));

    anchor.insertAdjacentElement('beforebegin', card);
  }

  var previousRenderDetail = window.renderDetail;
  window.renderDetail = function (service) {
    previousRenderDetail(service);
    drawPanel(service);
  };

  new MutationObserver(function () {
    if (typeof state !== 'undefined' && state.openId) {
      var service = findService(state.openId);
      if (service) { drawPanel(service); }
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  if (typeof state !== 'undefined' && state.openId) {
    var openNow = findService(state.openId);
    if (openNow) { renderDetail(openNow); }
  }
}());
