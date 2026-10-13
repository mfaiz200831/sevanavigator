/* =====================================================
   SEVANAVIGATOR - language.js
   Adds a language menu (English and Hindi only).
   This file must load AFTER script.js and services-more.js.
   Hindi is translated for menus, headings and guide names.
   Guide details (eligibility, steps, documents, fees) currently stay in English.
   ===================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'sevanavigator-language';

  var LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' }
  ];

  var NOTICE = 'Guide details are currently available in English only. Menus and headings are translated.';

  var TRANSLATIONS = {};
  var TEMPLATES = {};

  /* ---------- HINDI ---------- */
  TRANSLATIONS.hi = {
    'Skip to main content': 'मुख्य सामग्री पर जाएँ',
    'INDIA · PUBLIC SERVICE GUIDE': 'भारत · सार्वजनिक सेवा मार्गदर्शिका',
    'Home': 'होम',
    'Explore services': 'सेवाएँ देखें',
    'How it works': 'यह कैसे काम करता है',
    'About': 'हमारे बारे में',
    'Find a service': 'सेवा खोजें',
    'Language': 'भाषा',
    'YOUR GUIDE TO INDIAN PUBLIC SERVICES': 'भारतीय सार्वजनिक सेवाओं के लिए आपकी मार्गदर्शिका',
    'Government services.': 'सरकारी सेवाएँ।',
    'Without the guesswork.': 'बिना किसी अंदाज़े के।',
    'Find the right service, understand the process, prepare the documents you may need, and continue to the relevant official website with confidence.': 'सही सेवा खोजें, प्रक्रिया समझें, ज़रूरी दस्तावेज़ तैयार करें, और भरोसे के साथ संबंधित आधिकारिक वेबसाइट पर जाएँ।',
    'Independent guidance. Official destinations. No document uploads.': 'स्वतंत्र मार्गदर्शन। आधिकारिक गंतव्य। कोई दस्तावेज़ अपलोड नहीं।',
    'Find your service': 'अपनी सेवा खोजें',
    'Start with what you need': 'अपनी ज़रूरत से शुरू करें',
    'SEVA': 'सेवा',
    'KNOW · PREPARE · PROCEED': 'जानें · तैयारी करें · आगे बढ़ें',
    'Prepare with clarity': 'स्पष्टता से तैयारी करें',
    'Know what to check first': 'पहले क्या जाँचना है, जानें',
    '01 — DISCOVER': '01 — खोजें',
    '02 — UNDERSTAND': '02 — समझें',
    '03 — PREPARE': '03 — तैयारी करें',
    '04 — CONTINUE TO OFFICIAL SOURCES': '04 — आधिकारिक स्रोत पर जाएँ',
    'Understand the process': 'प्रक्रिया समझें',
    'Straightforward explanations of public services.': 'सार्वजनिक सेवाओं की सरल व्याख्या।',
    'Prepare before applying': 'आवेदन से पहले तैयारी करें',
    'Practical checklists and steps to review.': 'व्यावहारिक चेकलिस्ट और जाँचने योग्य चरण।',
    'Find the official source': 'आधिकारिक स्रोत खोजें',
    'Links to relevant official service portals.': 'संबंधित आधिकारिक सेवा पोर्टल के लिंक।',
    'START WITH A QUESTION': 'एक सवाल से शुरू करें',
    'What do you need help with?': 'आपको किस काम में मदद चाहिए?',
    'Search for a service, document, application, certificate, benefit, or government department.': 'किसी सेवा, दस्तावेज़, आवेदन, प्रमाणपत्र, लाभ या सरकारी विभाग को खोजें।',
    'Search Indian public services': 'भारतीय सार्वजनिक सेवाएँ खोजें',
    'Try passport, train tickets, pension...': 'पासपोर्ट, ट्रेन टिकट, पेंशन आज़माएँ...',
    'Search': 'खोजें',
    'Search results will be shown in the service directory below.': 'खोज परिणाम नीचे सेवा निर्देशिका में दिखाए जाएँगे।',
    'POPULAR SEARCHES': 'लोकप्रिय खोजें',
    'Passport': 'पासपोर्ट',
    'Train travel': 'ट्रेन यात्रा',
    'Digital documents': 'डिजिटल दस्तावेज़',
    'THE SERVICE DIRECTORY': 'सेवा निर्देशिका',
    'Find your next step.': 'अपना अगला कदम खोजें।',
    'Explore public service guides, understand the process, and find the relevant official website.': 'सार्वजनिक सेवा गाइड देखें, प्रक्रिया समझें और संबंधित आधिकारिक वेबसाइट खोजें।',
    'All services': 'सभी सेवाएँ',
    'Search services': 'सेवाएँ खोजें',
    'Search services...': 'सेवाएँ खोजें...',
    'Sort by': 'क्रमबद्ध करें',
    'Recommended': 'अनुशंसित',
    'Name: A to Z': 'नाम: A से Z',
    'Name: Z to A': 'नाम: Z से A',
    'Preparing service directory...': 'सेवा निर्देशिका तैयार हो रही है...',
    'No matching services found': 'कोई मिलती-जुलती सेवा नहीं मिली',
    'Try another search term or choose a different category.': 'कोई दूसरा शब्द खोजें या अलग श्रेणी चुनें।',
    'Clear search': 'खोज साफ़ करें',
    'View guide →': 'गाइड देखें →',
    '← Back to all services': '← सभी सेवाओं पर वापस',
    'SERVICE GUIDE': 'सेवा गाइड',
    'Before you begin': 'शुरू करने से पहले',
    'This guide is general information that has NOT been verified against the official source. Requirements, fees and processing times change. Always confirm on the official website before you apply.': 'यह गाइड सामान्य जानकारी है, जिसे आधिकारिक स्रोत से सत्यापित नहीं किया गया है। आवश्यकताएँ, शुल्क और प्रक्रिया का समय बदल सकते हैं। आवेदन से पहले हमेशा आधिकारिक वेबसाइट पर पुष्टि करें।',
    'Eligibility': 'पात्रता',
    'Unverified general guidance. Confirm on the official portal.': 'असत्यापित सामान्य मार्गदर्शन। आधिकारिक पोर्टल पर पुष्टि करें।',
    'Document checklist': 'दस्तावेज़ चेकलिस्ट',
    'Use this checklist to organise your preparation. Confirm the exact requirements through the official service portal.': 'अपनी तैयारी व्यवस्थित करने के लिए इस चेकलिस्ट का उपयोग करें। सटीक आवश्यकताओं की पुष्टि आधिकारिक सेवा पोर्टल पर करें।',
    'Reset checklist': 'चेकलिस्ट रीसेट करें',
    'Application steps': 'आवेदन के चरण',
    'Fees and processing time': 'शुल्क और प्रक्रिया का समय',
    'Continue to the official website': 'आधिकारिक वेबसाइट पर जाएँ',
    'Use the relevant official portal to confirm details and complete your application.': 'विवरण की पुष्टि करने और आवेदन पूरा करने के लिए संबंधित आधिकारिक पोर्टल का उपयोग करें।',
    'Verify the website address before sharing information or making a payment.': 'जानकारी साझा करने या भुगतान करने से पहले वेबसाइट का पता जाँच लें।',
    'Check if this site is down ↗': 'जाँचें कि यह साइट बंद तो नहीं ↗',
    'Not yet reviewed against official pages.': 'आधिकारिक पेजों से अभी तक समीक्षा नहीं की गई।',
    '♡ Save this guide': '♡ यह गाइड सहेजें',
    '♥ Saved': '♥ सहेजी गई',
    'YOUR SHORTLIST': 'आपकी शॉर्टलिस्ट',
    'Your saved guides': 'आपकी सहेजी गई गाइड',
    'Keep useful service guides together for quick access.': 'काम की सेवा गाइड एक जगह रखें ताकि जल्दी मिल सकें।',
    'No saved guides yet': 'अभी कोई गाइड सहेजी नहीं गई',
    'Open a service guide and save it to your shortlist.': 'कोई सेवा गाइड खोलें और उसे अपनी शॉर्टलिस्ट में सहेजें।',
    'Explore services →': 'सेवाएँ देखें →',
    'Save service references only. Never enter personal identification numbers, passwords, or banking details.': 'केवल सेवाओं के संदर्भ सहेजें। यहाँ कभी भी पहचान संख्या, पासवर्ड या बैंक विवरण दर्ज न करें।',
    'OUR PURPOSE': 'हमारा उद्देश्य',
    'Public services should be easier to understand.': 'सार्वजनिक सेवाएँ समझना आसान होना चाहिए।',
    'SevaNavigator aims to make public-service information easier to navigate by explaining processes, highlighting documents to check, and directing people towards appropriate official sources.': 'सेवा नेविगेटर का लक्ष्य प्रक्रियाएँ समझाकर, जाँचने योग्य दस्तावेज़ बताकर और लोगों को सही आधिकारिक स्रोतों तक पहुँचाकर सार्वजनिक सेवाओं की जानकारी खोजना आसान बनाना है।',
    'Clarity first': 'स्पष्टता सबसे पहले',
    'Explain the process in straightforward language so people know what to check before applying.': 'प्रक्रिया को सरल भाषा में समझाया जाता है ताकि आवेदन से पहले लोग जान सकें कि क्या जाँचना है।',
    'Official sources': 'आधिकारिक स्रोत',
    'Help users find the responsible authority rather than pretending to process applications ourselves.': 'हम खुद आवेदन प्रोसेस करने का दिखावा नहीं करते; उपयोगकर्ताओं को सही प्राधिकरण तक पहुँचने में मदद करते हैं।',
    'Privacy by design': 'डिज़ाइन से ही गोपनीयता',
    'Never ask users to submit identity documents, passwords, OTPs, or banking information here.': 'यहाँ उपयोगकर्ताओं से कभी पहचान दस्तावेज़, पासवर्ड, OTP या बैंकिंग जानकारी नहीं माँगी जाती।',
    'HELP US IMPROVE': 'हमें बेहतर बनाने में मदद करें',
    'Which service should we explain next?': 'हमें आगे कौन-सी सेवा समझानी चाहिए?',
    'Suggest a public service that you would like to see explained in SevaNavigator.': 'कोई ऐसी सार्वजनिक सेवा सुझाएँ जिसे आप सेवा नेविगेटर में समझाई हुई देखना चाहते हैं।',
    'Service name': 'सेवा का नाम',
    'For example, a birth certificate': 'उदाहरण: जन्म प्रमाणपत्र',
    'Department or category (optional)': 'विभाग या श्रेणी (वैकल्पिक)',
    'For example, municipal services': 'उदाहरण: नगरपालिका सेवाएँ',
    'What would you like explained? (optional)': 'आप क्या समझना चाहेंगे? (वैकल्पिक)',
    'For example, eligibility, documents, or application steps': 'उदाहरण: पात्रता, दस्तावेज़ या आवेदन के चरण',
    'Do not include Aadhaar numbers, personal documents, passwords, OTPs, or other sensitive information.': 'आधार संख्या, निजी दस्तावेज़, पासवर्ड, OTP या अन्य संवेदनशील जानकारी न लिखें।',
    'Submit suggestion': 'सुझाव भेजें',
    'Suggestions are sent to the SevaNavigator team. Please do not include personal or sensitive information.': 'सुझाव सेवा नेविगेटर टीम को भेजे जाते हैं। कृपया निजी या संवेदनशील जानकारी न लिखें।',
    'Please enter the name of a service.': 'कृपया किसी सेवा का नाम लिखें।',
    'Sending your suggestion...': 'आपका सुझाव भेजा जा रहा है...',
    'Sorry, your suggestion could not be sent. Please try again later.': 'क्षमा करें, आपका सुझाव नहीं भेजा जा सका। कृपया बाद में पुनः प्रयास करें।',
    'Please remove numbers, passwords or OTPs. Do not share sensitive information here.': 'कृपया संख्याएँ, पासवर्ड या OTP हटाएँ। यहाँ संवेदनशील जानकारी साझा न करें।',
    'Thank you! Your suggestion has been sent to the SevaNavigator team.': 'धन्यवाद! आपका सुझाव सेवा नेविगेटर टीम को भेज दिया गया है।',
    'IMPORTANT INFORMATION': 'ज़रूरी जानकारी',
    'Know what this website does—and doesn\'t do.': 'जानें कि यह वेबसाइट क्या करती है—और क्या नहीं।',
    'SevaNavigator is not a government website.': 'सेवा नेविगेटर कोई सरकारी वेबसाइट नहीं है।',
    'It is an independent informational guide. It is not affiliated with, endorsed by, or operated by any Indian government department unless a specific relationship is explicitly established.': 'यह एक स्वतंत्र सूचना-मार्गदर्शिका है। जब तक कोई विशेष संबंध स्पष्ट रूप से स्थापित न किया जाए, यह किसी भी भारतीय सरकारी विभाग से जुड़ी, उसके द्वारा समर्थित या संचालित नहीं है।',
    'Verify requirements:': 'आवश्यकताएँ जाँचें:',
    'official rules, eligibility, fees, and document requirements can change.': 'आधिकारिक नियम, पात्रता, शुल्क और दस्तावेज़ की आवश्यकताएँ बदल सकती हैं।',
    'Check website addresses:': 'वेबसाइट का पता जाँचें:',
    'follow links carefully and confirm that you are visiting the intended official service.': 'लिंक सावधानी से खोलें और पुष्टि करें कि आप सही आधिकारिक सेवा पर जा रहे हैं।',
    'Protect your information:': 'अपनी जानकारी सुरक्षित रखें:',
    'never provide passwords, OTPs, or banking details to this guide.': 'इस गाइड को कभी पासवर्ड, OTP या बैंक विवरण न दें।',
    'No application processing:': 'कोई आवेदन प्रोसेसिंग नहीं:',
    'SevaNavigator does not issue certificates, approve applications, collect government fees, or guarantee a service outcome.': 'सेवा नेविगेटर प्रमाणपत्र जारी नहीं करता, आवेदन स्वीकृत नहीं करता, सरकारी शुल्क नहीं लेता और किसी परिणाम की गारंटी नहीं देता।',
    'Understand the process. Prepare with confidence. Find the right official source.': 'प्रक्रिया समझें। भरोसे के साथ तैयारी करें। सही आधिकारिक स्रोत खोजें।',
    'Explore': 'देखें',
    'Saved guides': 'सहेजी गई गाइड',
    'Suggest a service': 'सेवा सुझाएँ',
    'Our purpose': 'हमारा उद्देश्य',
    'Trust and safety': 'भरोसा और सुरक्षा',
    'Independent informational guide': 'स्वतंत्र सूचना-मार्गदर्शिका',
    'SevaNavigator is not an official government website. Information is provided for general guidance and should be verified through the relevant official authority before you act.': 'सेवा नेविगेटर कोई आधिकारिक सरकारी वेबसाइट नहीं है। जानकारी केवल सामान्य मार्गदर्शन के लिए है; कोई भी कदम उठाने से पहले संबंधित आधिकारिक प्राधिकरण से इसकी पुष्टि करें।',
    'SevaNavigator. Independent public-service guide.': 'सेवा नेविगेटर। स्वतंत्र सार्वजनिक सेवा मार्गदर्शिका।',
    'Back to top ↑': 'ऊपर जाएँ ↑',
    'Saved to your shortlist.': 'आपकी शॉर्टलिस्ट में सहेज लिया गया।',
    'Removed from your saved guides.': 'सहेजी गई गाइड से हटा दिया गया।',
    'Checklist reset.': 'चेकलिस्ट रीसेट हो गई।',
    'Search cleared. Showing all guides.': 'खोज साफ़ हो गई। सभी गाइड दिख रही हैं।',
    'Suggestion sent. Thank you!': 'सुझाव भेज दिया गया। धन्यवाद!',
    'Sorry, that guide could not be found.': 'क्षमा करें, वह गाइड नहीं मिली।',
    'Travel & Transport': 'यात्रा और परिवहन',
    'Identity & Documents': 'पहचान और दस्तावेज़',
    'Tax & Money': 'कर और धन',
    'Education': 'शिक्षा',
    'Civic & Voting': 'नागरिक और मतदान',
    'Work & Pension': 'काम और पेंशन',
    'Business & Farming': 'व्यापार और खेती',
    'Health': 'स्वास्थ्य',
    'Government Portals': 'सरकारी पोर्टल',
    'Passport: apply or renew': 'पासपोर्ट: आवेदन या नवीनीकरण',
    'Apply for a new Indian passport or renew an existing one, and book an appointment at a passport office.': 'नया भारतीय पासपोर्ट बनवाएँ या मौजूदा पासपोर्ट का नवीनीकरण करें, और पासपोर्ट कार्यालय में अपॉइंटमेंट बुक करें।',
    'Train tickets (IRCTC)': 'ट्रेन टिकट (IRCTC)',
    'Search trains, check seats and book e-tickets for Indian Railways journeys.': 'भारतीय रेल यात्रा के लिए ट्रेन खोजें, सीटें देखें और ई-टिकट बुक करें।',
    'DigiLocker (digital documents)': 'डिजिलॉकर (डिजिटल दस्तावेज़)',
    'A government platform to keep and share digital copies of documents issued by participating organisations.': 'भाग लेने वाले संगठनों द्वारा जारी दस्तावेज़ों की डिजिटल प्रतियाँ रखने और साझा करने का सरकारी प्लेटफ़ॉर्म।',
    'Driving licence': 'ड्राइविंग लाइसेंस',
    'Learner and permanent driving licence services. Rules and slots vary by state.': 'लर्नर और स्थायी ड्राइविंग लाइसेंस सेवाएँ। नियम और स्लॉट राज्य के अनुसार अलग होते हैं।',
    'Income tax return (e-filing)': 'आयकर रिटर्न (ई-फाइलिंग)',
    'File an income tax return online, check tax information and track a refund.': 'ऑनलाइन आयकर रिटर्न भरें, कर संबंधी जानकारी देखें और रिफंड की स्थिति ट्रैक करें।',
    'Aadhaar services (UIDAI)': 'आधार सेवाएँ (UIDAI)',
    'Download Aadhaar, update details or find an enrolment centre through the official UIDAI website.': 'आधिकारिक UIDAI वेबसाइट से आधार डाउनलोड करें, विवरण अपडेट करें या नामांकन केंद्र खोजें।',
    'Voter ID registration': 'मतदाता पहचान पत्र पंजीकरण',
    'Register as a voter, correct details or check your name on the electoral roll.': 'मतदाता के रूप में पंजीकरण करें, विवरण सुधारें या मतदाता सूची में अपना नाम जाँचें।',
    'National Scholarship Portal': 'राष्ट्रीय छात्रवृत्ति पोर्टल',
    'Find central and state scholarship schemes and apply through one portal.': 'केंद्र और राज्य की छात्रवृत्ति योजनाएँ खोजें और एक ही पोर्टल से आवेदन करें।',
    'PAN card (new or correction)': 'पैन कार्ड (नया या सुधार)',
    'Apply for a new PAN, get an instant e-PAN with Aadhaar, or correct details on an existing PAN.': 'नया पैन बनवाएँ, आधार से तुरंत ई-पैन पाएँ, या मौजूदा पैन में विवरण सुधारें।',
    'EPFO (Provident Fund and UAN)': 'EPFO (भविष्य निधि और UAN)',
    'Activate your UAN, check your PF passbook, transfer your account or file a claim through the EPFO member portal.': 'EPFO सदस्य पोर्टल से अपना UAN सक्रिय करें, PF पासबुक देखें, खाता ट्रांसफर करें या दावा करें।',
    'PM-KISAN (farmer income support)': 'पीएम-किसान (किसान आय सहायता)',
    'Register as a farmer, check your beneficiary status and follow your instalments for the PM-KISAN scheme.': 'किसान के रूप में पंजीकरण करें, अपने लाभार्थी की स्थिति देखें और पीएम-किसान की किस्तों पर नज़र रखें।',
    'Ayushman Bharat PM-JAY (health cover)': 'आयुष्मान भारत पीएम-जेएवाई (स्वास्थ्य कवर)',
    'Check if your family is eligible for government health cover and learn how to get an Ayushman card.': 'जाँचें कि आपका परिवार सरकारी स्वास्थ्य कवर के लिए पात्र है या नहीं, और आयुष्मान कार्ड पाने का तरीका जानें।',
    'e-Shram (unorganised workers)': 'ई-श्रम (असंगठित श्रमिक)',
    'Register as an unorganised worker and receive an e-Shram card.': 'असंगठित श्रमिक के रूप में पंजीकरण करें और ई-श्रम कार्ड पाएँ।',
    'Udyam registration (small business)': 'उद्यम पंजीकरण (छोटा व्यवसाय)',
    'Register your micro, small or medium business online for an Udyam certificate.': 'अपने सूक्ष्म, लघु या मध्यम व्यवसाय का उद्यम प्रमाणपत्र के लिए ऑनलाइन पंजीकरण करें।',
    'GST registration': 'जीएसटी पंजीकरण',
    'Understand who needs GST registration and how to apply on the official GST portal.': 'जानें कि किसे जीएसटी पंजीकरण चाहिए और आधिकारिक जीएसटी पोर्टल पर आवेदन कैसे करें।',
    'Birth certificate': 'जन्म प्रमाणपत्र',
    'Register a birth and get a birth certificate through the local registrar or your state\'s online portal.': 'स्थानीय रजिस्ट्रार या अपने राज्य के ऑनलाइन पोर्टल से जन्म पंजीकृत करें और जन्म प्रमाणपत्र पाएँ।',
    'India Post (savings, parcels, tracking)': 'इंडिया पोस्ट (बचत, पार्सल, ट्रैकिंग)',
    'Track a consignment, find a post office and learn about post office services and savings schemes.': 'कंसाइनमेंट ट्रैक करें, डाकघर खोजें और डाकघर सेवाओं व बचत योजनाओं के बारे में जानें।',
    'UMANG (many services in one app)': 'उमंग (एक ऐप में कई सेवाएँ)',
    'Use one official app and website to reach many central and state government services.': 'कई केंद्र और राज्य सरकार की सेवाओं तक पहुँचने के लिए एक आधिकारिक ऐप और वेबसाइट।'
  };
  TRANSLATIONS.hi[NOTICE] = 'गाइड का विवरण फ़िलहाल केवल अंग्रेज़ी में उपलब्ध है। मेनू और शीर्षक हिंदी में हैं।';

  TEMPLATES.hi = {
    showingAll: 'सभी {n} गाइड दिखाई जा रही हैं।',
    found: '{n} गाइड मिली',
    forQuery: ' “{q}” के लिए',
    inCat: ' {c} में',
    end: '।',
    saved: '{n} गाइड सहेजी गईं',
    progress: '{t} में से {d} आइटम चेक किए गए',
    progressDone: ' आपके पास इस सूची की सब चीज़ें हैं।',
    visit: 'आधिकारिक वेबसाइट खोलें ({h}) ↗',
    verify: 'लिंक की स्थिति: सेवा नेविगेटर ने अभी इसे सत्यापित नहीं किया है। जाँच लें कि आपके ब्राउज़र का पता {h} से मेल खाता है। “साइट बंद है” बटन एक बाहरी जाँच सेवा खोलता है। सेवा नेविगेटर खुद वेबसाइट की लाइव स्थिति नहीं दिखा सकता।',
    review: 'अंतिम समीक्षा: {d}। केवल प्रक्रिया-स्तर का अवलोकन। हर विवरण की पुष्टि आधिकारिक वेबसाइट पर करें।'
  };

  /* ---------- BENGALI, MARATHI, TAMIL, TELUGU ---------- */
  var SHORT_KEYS = [
    'Skip to main content', 'Home', 'Explore services', 'How it works', 'About',
    'Find a service', 'Language', 'Government services.', 'Without the guesswork.',
    'What do you need help with?', 'Search', 'POPULAR SEARCHES', 'Passport',
    'Train travel', 'Digital documents', 'THE SERVICE DIRECTORY', 'Find your next step.',
    'All services', 'Search services', 'Search services...', 'Sort by', 'Recommended',
    'Name: A to Z', 'Name: Z to A', 'No matching services found', 'Clear search',
    'View guide →', '← Back to all services', 'Before you begin', 'Eligibility',
    'Document checklist', 'Reset checklist', 'Application steps',
    'Fees and processing time', 'Continue to the official website',
    'Check if this site is down ↗', '♡ Save this guide', '♥ Saved',
    'Your saved guides', 'No saved guides yet', 'Explore services →',
    'Which service should we explain next?', 'Service name', 'Submit suggestion',
    'Back to top ↑', 'SevaNavigator is not a government website.',
    'Travel & Transport', 'Identity & Documents', 'Tax & Money', 'Education',
    'Civic & Voting', 'Work & Pension', 'Business & Farming', 'Health',
    'Government Portals', NOTICE
  ];

  var SHORT_VALUES = {
    bn: [
      'মূল বিষয়বস্তুতে যান', 'হোম', 'পরিষেবা দেখুন', 'কীভাবে কাজ করে', 'আমাদের সম্পর্কে',
      'পরিষেবা খুঁজুন', 'ভাষা', 'সরকারি পরিষেবা।', 'আন্দাজ ছাড়াই।',
      'আপনার কীসে সাহায্য দরকার?', 'খুঁজুন', 'জনপ্রিয় অনুসন্ধান', 'পাসপোর্ট',
      'ট্রেন ভ্রমণ', 'ডিজিটাল নথি', 'পরিষেবা তালিকা', 'আপনার পরের ধাপ খুঁজুন।',
      'সব পরিষেবা', 'পরিষেবা খুঁজুন', 'পরিষেবা খুঁজুন...', 'সাজান', 'প্রস্তাবিত',
      'নাম: A থেকে Z', 'নাম: Z থেকে A', 'কোনো মিল পাওয়া পরিষেবা নেই', 'অনুসন্ধান মুছুন',
      'গাইড দেখুন →', '← সব পরিষেবায় ফিরুন', 'শুরু করার আগে', 'যোগ্যতা',
      'নথির তালিকা', 'তালিকা রিসেট করুন', 'আবেদনের ধাপ',
      'ফি ও প্রক্রিয়ার সময়', 'অফিসিয়াল ওয়েবসাইটে যান',
      'সাইটটি বন্ধ কি না দেখুন ↗', '♡ গাইডটি সংরক্ষণ করুন', '♥ সংরক্ষিত',
      'আপনার সংরক্ষিত গাইড', 'এখনও কোনো গাইড সংরক্ষিত নেই', 'পরিষেবা দেখুন →',
      'পরের কোন পরিষেবাটি আমরা ব্যাখ্যা করব?', 'পরিষেবার নাম', 'পরামর্শ জমা দিন',
      'উপরে যান ↑', 'সেবা নেভিগেটর কোনো সরকারি ওয়েবসাইট নয়।',
      'ভ্রমণ ও পরিবহন', 'পরিচয় ও নথি', 'কর ও অর্থ', 'শিক্ষা',
      'নাগরিক ও ভোটদান', 'কাজ ও পেনশন', 'ব্যবসা ও কৃষি', 'স্বাস্থ্য',
      'সরকারি পোর্টাল', 'গাইডের বিবরণ এখন শুধু ইংরেজিতে পাওয়া যায়। মেনু ও শিরোনাম অনুবাদ করা হয়েছে।'
    ],
    mr: [
      'मुख्य मजकुराकडे जा', 'मुख्यपृष्ठ', 'सेवा पहा', 'हे कसे काम करते', 'आमच्याबद्दल',
      'सेवा शोधा', 'भाषा', 'सरकारी सेवा.', 'अंदाजाशिवाय.',
      'तुम्हाला कशात मदत हवी आहे?', 'शोधा', 'लोकप्रिय शोध', 'पासपोर्ट',
      'रेल्वे प्रवास', 'डिजिटल कागदपत्रे', 'सेवा निर्देशिका', 'तुमचे पुढचे पाऊल शोधा.',
      'सर्व सेवा', 'सेवा शोधा', 'सेवा शोधा...', 'क्रमवारी', 'शिफारस केलेले',
      'नाव: A ते Z', 'नाव: Z ते A', 'जुळणारी सेवा सापडली नाही', 'शोध पुसा',
      'मार्गदर्शक पहा →', '← सर्व सेवांकडे परत', 'सुरू करण्यापूर्वी', 'पात्रता',
      'कागदपत्र यादी', 'यादी रीसेट करा', 'अर्जाचे टप्पे',
      'शुल्क आणि प्रक्रिया वेळ', 'अधिकृत संकेतस्थळावर जा',
      'ही साइट बंद आहे का ते तपासा ↗', '♡ हे मार्गदर्शक जतन करा', '♥ जतन केले',
      'तुमचे जतन केलेले मार्गदर्शक', 'अजून कोणतेही मार्गदर्शक जतन केलेले नाही', 'सेवा पहा →',
      'आम्ही पुढे कोणती सेवा समजावून सांगावी?', 'सेवेचे नाव', 'सूचना सादर करा',
      'वर जा ↑', 'सेवा नेव्हिगेटर हे सरकारी संकेतस्थळ नाही.',
      'प्रवास आणि वाहतूक', 'ओळख आणि कागदपत्रे', 'कर आणि पैसा', 'शिक्षण',
      'नागरिक आणि मतदान', 'काम आणि निवृत्तीवेतन', 'व्यवसाय आणि शेती', 'आरोग्य',
      'सरकारी पोर्टल', 'मार्गदर्शकातील तपशील सध्या फक्त इंग्रजीत उपलब्ध आहेत. मेनू आणि शीर्षके भाषांतरित आहेत.'
    ],
    ta: [
      'முக்கிய உள்ளடக்கத்திற்குச் செல்', 'முகப்பு', 'சேவைகளைப் பார்க்க', 'இது எப்படி செயல்படுகிறது', 'எங்களைப் பற்றி',
      'சேவையைத் தேடு', 'மொழி', 'அரசு சேவைகள்.', 'ஊகம் இல்லாமல்.',
      'உங்களுக்கு என்ன உதவி தேவை?', 'தேடு', 'பிரபலமான தேடல்கள்', 'கடவுச்சீட்டு',
      'ரயில் பயணம்', 'டிஜிட்டல் ஆவணங்கள்', 'சேவை அடைவு', 'உங்கள் அடுத்த படியைக் கண்டறியுங்கள்.',
      'அனைத்து சேவைகள்', 'சேவைகளைத் தேடு', 'சேவைகளைத் தேடு...', 'வரிசைப்படுத்து', 'பரிந்துரைக்கப்பட்டவை',
      'பெயர்: A முதல் Z', 'பெயர்: Z முதல் A', 'பொருந்தும் சேவைகள் இல்லை', 'தேடலை அழி',
      'வழிகாட்டியைப் பார் →', '← அனைத்து சேவைகளுக்கும் திரும்பு', 'தொடங்கும் முன்', 'தகுதி',
      'ஆவணப் பட்டியல்', 'பட்டியலை மீட்டமை', 'விண்ணப்ப படிகள்',
      'கட்டணமும் செயலாக்க நேரமும்', 'அதிகாரப்பூர்வ இணையதளத்திற்குச் செல்',
      'இந்தத் தளம் செயலிழந்ததா எனப் பார் ↗', '♡ இந்த வழிகாட்டியைச் சேமி', '♥ சேமிக்கப்பட்டது',
      'நீங்கள் சேமித்த வழிகாட்டிகள்', 'இன்னும் வழிகாட்டிகள் சேமிக்கப்படவில்லை', 'சேவைகளைப் பார்க்க →',
      'அடுத்து எந்த சேவையை விளக்க வேண்டும்?', 'சேவையின் பெயர்', 'பரிந்துரையைச் சமர்ப்பி',
      'மேலே செல் ↑', 'சேவா நேவிகேட்டர் அரசு இணையதளம் அல்ல.',
      'பயணம் & போக்குவரத்து', 'அடையாளம் & ஆவணங்கள்', 'வரி & பணம்', 'கல்வி',
      'குடிமை & வாக்களிப்பு', 'வேலை & ஓய்வூதியம்', 'வணிகம் & விவசாயம்', 'சுகாதாரம்',
      'அரசு தளங்கள்', 'வழிகாட்டி விவரங்கள் தற்போது ஆங்கிலத்தில் மட்டுமே உள்ளன. மெனுக்களும் தலைப்புகளும் மொழிபெயர்க்கப்பட்டுள்ளன.'
    ],
    te: [
      'ప్రధాన కంటెంట్‌కు వెళ్లండి', 'హోమ్', 'సేవలను చూడండి', 'ఇది ఎలా పనిచేస్తుంది', 'మా గురించి',
      'సేవను కనుగొనండి', 'భాష', 'ప్రభుత్వ సేవలు.', 'అంచనాలు లేకుండా.',
      'మీకు ఏ విషయంలో సహాయం కావాలి?', 'వెతకండి', 'ప్రసిద్ధ శోధనలు', 'పాస్‌పోర్ట్',
      'రైలు ప్రయాణం', 'డిజిటల్ పత్రాలు', 'సేవల డైరెక్టరీ', 'మీ తదుపరి అడుగును కనుగొనండి.',
      'అన్ని సేవలు', 'సేవలను వెతకండి', 'సేవలను వెతకండి...', 'క్రమబద్ధీకరించు', 'సిఫార్సు చేసినవి',
      'పేరు: A నుండి Z', 'పేరు: Z నుండి A', 'సరిపోలే సేవలు లేవు', 'శోధనను తొలగించు',
      'గైడ్ చూడండి →', '← అన్ని సేవలకు తిరిగి', 'ప్రారంభించే ముందు', 'అర్హత',
      'పత్రాల జాబితా', 'జాబితాను రీసెట్ చేయి', 'దరఖాస్తు దశలు',
      'రుసుములు, ప్రాసెసింగ్ సమయం', 'అధికారిక వెబ్‌సైట్‌కు వెళ్లండి',
      'ఈ సైట్ పనిచేయడం లేదా చూడండి ↗', '♡ ఈ గైడ్‌ను సేవ్ చేయండి', '♥ సేవ్ అయింది',
      'మీరు సేవ్ చేసిన గైడ్‌లు', 'ఇంకా గైడ్‌లు సేవ్ చేయలేదు', 'సేవలను చూడండి →',
      'మేము తదుపరి ఏ సేవను వివరించాలి?', 'సేవ పేరు', 'సూచనను సమర్పించండి',
      'పైకి వెళ్లండి ↑', 'సేవా నావిగేటర్ ప్రభుత్వ వెబ్‌సైట్ కాదు.',
      'ప్రయాణం & రవాణా', 'గుర్తింపు & పత్రాలు', 'పన్ను & డబ్బు', 'విద్య',
      'పౌర & ఓటింగ్', 'పని & పెన్షన్', 'వ్యాపారం & వ్యవసాయం', 'ఆరోగ్యం',
      'ప్రభుత్వ పోర్టళ్లు', 'గైడ్ వివరాలు ప్రస్తుతం ఆంగ్లంలో మాత్రమే ఉన్నాయి. మెనూలు, శీర్షికలు అనువదించబడ్డాయి.'
    ]
  };

  ['bn', 'mr', 'ta', 'te'].forEach(function (code) {
    TRANSLATIONS[code] = {};
    SHORT_KEYS.forEach(function (key, index) {
      TRANSLATIONS[code][key] = SHORT_VALUES[code][index];
    });
  });

  TEMPLATES.bn = {
    showingAll: 'সব {n}টি গাইড দেখানো হচ্ছে।', found: '{n}টি গাইড পাওয়া গেছে',
    forQuery: ' “{q}” এর জন্য', inCat: ' {c} বিভাগে', end: '।',
    saved: '{n}টি গাইড সংরক্ষিত', progress: '{t}টির মধ্যে {d}টি চিহ্নিত'
  };
  TEMPLATES.mr = {
    showingAll: 'सर्व {n} मार्गदर्शक दाखवले आहेत.', found: '{n} मार्गदर्शक सापडले',
    forQuery: ' “{q}” साठी', inCat: ' {c} मध्ये', end: '.',
    saved: '{n} मार्गदर्शक जतन केले', progress: '{t} पैकी {d} निवडले'
  };
  TEMPLATES.ta = {
    showingAll: 'அனைத்து {n} வழிகாட்டிகளும் காட்டப்படுகின்றன.', found: '{n} வழிகாட்டிகள் கிடைத்தன',
    forQuery: ' “{q}” க்கு', inCat: ' {c} பிரிவில்', end: '.',
    saved: '{n} வழிகாட்டிகள் சேமிக்கப்பட்டன', progress: '{t} இல் {d} தேர்வு செய்யப்பட்டன'
  };
  TEMPLATES.te = {
    showingAll: 'మొత్తం {n} గైడ్‌లు చూపబడుతున్నాయి.', found: '{n} గైడ్‌లు దొరికాయి',
    forQuery: ' “{q}” కోసం', inCat: ' {c} లో', end: '.',
    saved: '{n} గైడ్‌లు సేవ్ అయ్యాయి', progress: '{t}లో {d} ఎంచుకోబడ్డాయి'
  };

  /* ---------- Translation engine ---------- */
  var current = 'en';
  var textRecords = new WeakMap();
  var attrRecords = new WeakMap();
  var scheduled = false;
  var ATTRIBUTES = ['placeholder', 'aria-label', 'title'];

  function normalizeText(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
  }

  function fill(template, values) {
    return template.replace(/\{(\w+)\}/g, function (all, name) {
      return values[name] === undefined ? all : values[name];
    });
  }

  function lookup(key, lang) {
    var table = TRANSLATIONS[lang];
    if (!table) {
      return null;
    }
    if (Object.prototype.hasOwnProperty.call(table, key)) {
      return table[key];
    }
    var t = TEMPLATES[lang];
    var m;
    if (!t) {
      return null;
    }
    m = key.match(/^(.+) \((\d+)\)$/);
    if (m && table[m[1]]) {
      return table[m[1]] + ' (' + m[2] + ')';
    }
    m = key.match(/^Showing all (\d+) guides?\.$/);
    if (m) {
      return fill(t.showingAll, { n: m[1] });
    }
    m = key.match(/^(\d+) guides? found(?: for “(.*?)”)?(?: in (.*?))?\.$/);
    if (m) {
      var text = fill(t.found, { n: m[1] });
      if (m[2]) {
        text += fill(t.forQuery, { q: m[2] });
      }
      if (m[3]) {
        text += fill(t.inCat, { c: table[m[3]] || m[3] });
      }
      return text + t.end;
    }
    m = key.match(/^(\d+) saved guides?$/);
    if (m) {
      return fill(t.saved, { n: m[1] });
    }
    m = key.match(/^(\d+) of (\d+) items checked(\. You have everything on this list\.)?$/);
    if (m) {
      return fill(t.progress, { d: m[1], t: m[2] }) + (m[3] && t.progressDone ? '।' + t.progressDone : '');
    }
    m = key.match(/^Visit official website \((.*)\) ↗$/);
    if (m && t.visit) {
      return fill(t.visit, { h: m[1] });
    }
    m = key.match(/^Link status: not yet verified by SevaNavigator\. Check that the address in your browser matches (.*)\. The "site is down" button opens a third-party checker\. SevaNavigator cannot show live website status itself\.$/);
    if (m && t.verify) {
      return fill(t.verify, { h: m[1] });
    }
    m = key.match(/^Last reviewed: (.*?)\. Process-level overview only\. Confirm every detail on the official website\.$/);
    if (m && t.review) {
      return fill(t.review, { d: m[1] });
    }
    return null;
  }

  function translateText(text, lang) {
    var key = normalizeText(text);
    if (!key) {
      return text;
    }
    var result = lookup(key, lang);
    if (result === null) {
      return text;
    }
    return (/^\s/.test(text) ? ' ' : '') + result + (/\s$/.test(text) ? ' ' : '');
  }

  function processTextNode(node, lang) {
    var record = textRecords.get(node);
    if (!record || node.nodeValue !== record.shown) {
      record = { english: node.nodeValue, shown: node.nodeValue };
    }
    var wanted = lang === 'en' ? record.english : translateText(record.english, lang);
    if (wanted !== node.nodeValue) {
      node.nodeValue = wanted;
    }
    record.shown = node.nodeValue;
    textRecords.set(node, record);
  }

  function processAttributes(element, lang) {
    var records = attrRecords.get(element) || {};
    ATTRIBUTES.forEach(function (name) {
      if (!element.hasAttribute(name)) {
        return;
      }
      var value = element.getAttribute(name);
      var record = records[name];
      if (!record || value !== record.shown) {
        record = { english: value, shown: value };
      }
      var wanted = lang === 'en' ? record.english : translateText(record.english, lang);
      if (wanted !== value) {
        element.setAttribute(name, wanted);
      }
      record.shown = element.getAttribute(name);
      records[name] = record;
    });
    attrRecords.set(element, records);
  }

  var observer = new MutationObserver(function () {
    if (current === 'en' || scheduled) {
      return;
    }
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      applyLanguage(current);
    });
  });

  function observe() {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRIBUTES
    });
  }

  function updateNotice(lang) {
    var notice = document.getElementById('sn-lang-notice');
    if (!notice) {
      var anchor = document.getElementById('detail-category');
      if (!anchor) {
        return;
      }
      notice = document.createElement('p');
      notice.id = 'sn-lang-notice';
      notice.textContent = NOTICE;
      notice.style.cssText = 'margin:0 0 14px;padding:10px 14px;border-left:4px solid #c68b48;background:#fff7eb;font-size:13px;';
      anchor.insertAdjacentElement('beforebegin', notice);
    }
    notice.hidden = lang === 'en';
  }

  function applyLanguage(lang) {
    observer.disconnect();
    updateNotice(lang);
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) {
      var parent = walker.currentNode.parentNode;
      var tag = parent && parent.nodeName;
      if (tag !== 'SCRIPT' && tag !== 'STYLE' && tag !== 'TEXTAREA' &&
          !(parent.closest && parent.closest('#language-select'))) {
        nodes.push(walker.currentNode);
      }
    }
    nodes.forEach(function (node) {
      processTextNode(node, lang);
    });
    document.querySelectorAll('[placeholder], [aria-label], [title]').forEach(function (element) {
      processAttributes(element, lang);
    });
    /* Only touch <html lang> when it really changes. Writing the same value
       still fires the lang observers in every other script, which re-draw the
       guide cards and trigger this function again: an endless loop = flicker. */
    var targetLang = lang === 'en' ? 'en-IN' : lang;
    if (document.documentElement.lang !== targetLang) {
      document.documentElement.lang = targetLang;
    }
    observe();
  }

  function setLanguage(lang) {
    current = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* storage blocked: the choice lasts until the page is closed */
    }
    applyLanguage(lang);
    var select = document.getElementById('language-select');
    if (select && select.value !== lang) {
      select.value = lang;
    }
  }

  function buildSwitcher() {
    var style = document.createElement('style');
    style.textContent =
      '#language-switcher{order:1;display:flex;align-items:center;gap:6px;}' +
      '#language-select{min-height:38px;padding:6px 10px;border:1px solid var(--border);border-radius:var(--radius-small);background:#fff;color:var(--navy);font-size:13px;}' +
      '@media (max-width:720px){#language-switcher{order:0;margin-left:auto;}}';
    document.head.appendChild(style);

    var box = document.createElement('div');
    box.id = 'language-switcher';

    var icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '🌐';

    var select = document.createElement('select');
    select.id = 'language-select';
    select.setAttribute('aria-label', 'Language');
    LANGUAGES.forEach(function (language) {
      var option = document.createElement('option');
      option.value = language.code;
      option.textContent = language.label;
      select.appendChild(option);
    });
    select.addEventListener('change', function () {
      setLanguage(select.value);
    });

    box.appendChild(icon);
    box.appendChild(select);

    var inner = document.querySelector('.header-inner');
    var toggle = document.getElementById('mobile-menu-toggle');
    if (inner) {
      inner.insertBefore(box, toggle && toggle.parentNode === inner ? toggle : inner.firstChild);
    }
  }

  function start() {
    buildSwitcher();
    var saved = 'en';
    try {
      saved = window.localStorage.getItem(STORAGE_KEY) || 'en';
    } catch (error) {
      saved = 'en';
    }
    var known = LANGUAGES.some(function (language) {
      return language.code === saved;
    });
    setLanguage(known ? saved : 'en');
  }

  start();
}());
