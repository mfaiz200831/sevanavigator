'use strict';

/* =====================================================
   SEVANAVIGATOR - script.js
   PART 1 OF 7: settings and the first three services
   NOTE: All service details are general guidance and
   are NOT verified. Check every link and rule yourself
   before publishing.
   ===================================================== */

const BASE_TITLE = document.title;
const SERVICES = [];

/* Language helper for service content */
function isHindi() {
  return document.documentElement.lang === 'hi';
}
function pick(service, field) {
  if (isHindi() && service.hi && service.hi[field] !== undefined) {
    return service.hi[field];
  }
  return service[field];
}


SERVICES.push({
  id: 'passport',
  name: 'Passport: apply or renew',
  category: 'Travel & Transport',
  department: 'Passport Seva',
  summary: 'Apply for a new Indian passport or renew an existing one, and book an appointment at a passport office.',
  keywords: ['passport', 'travel document', 'renew', 'abroad', 'visa', 'passport seva'],
  url: 'https://www.passportindia.gov.in',
  eligibility: [
    'Indian citizens can generally apply for a passport.',
    'Minors can apply with a parent or guardian.',
    'Fresh, renewal and lost or damaged passport cases have different rules.'
  ],
  documents: [
    'Proof of address (check the accepted list on the official portal)',
    'Proof of date of birth (check the accepted list)',
    'Existing passport, if you are renewing',
    'Appointment confirmation after you book',
    'Original documents for verification at the centre'
  ],
  steps: [
    ['Register or log in', 'Create an account on the official passport portal.'],
    ['Fill in the form', 'Complete the online application for your case (fresh or renewal).'],
    ['Pay and book', 'Pay the fee online and choose an appointment slot.'],
    ['Visit the centre', 'Take your originals to the appointment.'],
    ['Track your status', 'Use the application reference number on the portal.']
  ],
  fees: 'Fees depend on the type of application, number of pages and normal or fast-track processing. Use the fee details on the official portal.',
  hi: {
    name: 'पासपोर्ट: आवेदन या नवीनीकरण',
    summary: 'नया भारतीय पासपोर्ट बनाएँ या मौजूदा पासपोर्ट का नवीनीकरण करें, और पासपोर्ट कार्यालय में अपॉइंटमेंट बुक करें।',
    eligibility: [
      'भारतीय नागरिक आम तौर पर पासपोर्ट के लिए आवेदन कर सकते हैं।',
      'नाबालिग माता-पिता या अभिभावक के साथ आवेदन कर सकते हैं।',
      'नया, नवीनीकरण और खोया/क्षतिग्रस्त पासपोर्ट के मामलों के नियम अलग होते हैं।'
    ],
    documents: [
      'पते का प्रमाण (आधिकारिक पोर्टल पर स्वीकृत सूची जाँचें)',
      'जन्म तिथि का प्रमाण (स्वीकृत सूची जाँचें)',
      'मौजूदा पासपोर्ट, यदि आप नवीनीकरण कर रहे हैं',
      'बुकिंग के बाद अपॉइंटमेंट की पुष्टि',
      'केंद्र पर सत्यापन के लिए मूल दस्तावेज़'
    ],
    steps: [
      ['रजिस्टर या लॉग इन करें', 'आधिकारिक पासपोर्ट पोर्टल पर खाता बनाएँ।'],
      ['फॉर्म भरें', 'अपने मामले (नया या नवीनीकरण) के लिए ऑनलाइन आवेदन पूरा करें।'],
      ['भुगतान करें और बुक करें', 'ऑनलाइन शुल्क दें और अपॉइंटमेंट स्लॉट चुनें।'],
      ['केंद्र जाएँ', 'अपने मूल दस्तावेज़ अपॉइंटमेंट पर ले जाएँ।'],
      ['स्थिति ट्रैक करें', 'पोर्टल पर आवेदन संदर्भ संख्या का उपयोग करें।']
    ],
    fees: 'शुल्क आवेदन के प्रकार, पेजों की संख्या और सामान्य या फास्ट-ट्रैक प्रोसेसिंग पर निर्भर करता है। आधिकारिक पोर्टल पर शुल्क विवरण देखें।'
  }
});

SERVICES.push({
  id: 'train-tickets',
  name: 'Train tickets (IRCTC)',
  category: 'Travel & Transport',
  department: 'Indian Railways / IRCTC',
  summary: 'Search trains, check seats and book e-tickets for Indian Railways journeys.',
  keywords: ['train', 'railway', 'irctc', 'ticket', 'pnr', 'tatkal', 'rail', 'travel'],
  url: 'https://www.irctc.co.in',
  eligibility: [
    'Anyone can search trains and fares.',
    'An account is generally needed to book e-tickets.',
    'Rules for ID while travelling can vary. Check the railway rules.'
  ],
  documents: [
    'Mobile number and email for your account',
    'Passenger names and ages, as on their ID',
    'A valid photo ID to carry while travelling (check current rules)',
    'A payment method, used only on the official site'
  ],
  steps: [
    ['Open the official site or app', 'Check the web address carefully before you log in.'],
    ['Log in or register', 'Use your own account details.'],
    ['Enter your journey', 'Choose stations, date and class.'],
    ['Pick a train', 'Compare timings, seat availability and fares.'],
    ['Pay and save', 'Pay on the official site and keep your PNR safe.']
  ],
  fees: 'Fares and charges depend on train, class and quota. Cancellation and refund rules apply. Check them on the official site.',
  hi: {
    name: "ट्रेन टिकट (IRCTC)",
    summary: "ट्रेन खोजें, सीट जाँचें और भारतीय रेल यात्रा के लिए ई-टिकट बुक करें।",
    eligibility: [
      "कोई भी ट्रेन और किराया खोज सकता है।",
      "ई-टिकट बुक करने के लिए आम तौर पर खाता चाहिए।",
      "यात्रा के दौरान ID के नियम बदल सकते हैं। रेलवे नियम जाँचें।",
    ],
    documents: [
      "अपने खाते के लिए मोबाइल नंबर और ईमेल",
      "यात्रियों के नाम और आयु, जैसा उनके ID पर है",
      "यात्रा के दौरान ले जाने के लिए वैध फोटो ID (वर्तमान नियम जाँचें)",
      "भुगतान का तरीका, केवल आधिकारिक साइट पर उपयोग करें",
    ],
    steps: [
      ["आधिकारिक साइट या ऐप खोलें", "लॉग इन करने से पहले वेब पता ध्यान से जाँचें।"],
      ["लॉग इन या रजिस्टर करें", "अपने खाते का विवरण उपयोग करें।"],
      ["यात्रा दर्ज करें", "स्टेशन, तारीख और क्लास चुनें।"],
      ["ट्रेन चुनें", "समय, सीट उपलब्धता और किराया मिलाएँ।"],
      ["भुगतान करें और सहेजें", "आधिकारिक साइट पर भुगतान करें और PNR सुरक्षित रखें।"],
    ],
    fees: "किराया और शुल्क ट्रेन, क्लास और कोटा पर निर्भर करते हैं। रद्दीकरण और रिफंड नियम लागू होते हैं। आधिकारिक साइट पर जाँचें।"
  }
});

SERVICES.push({
  id: 'digilocker',
  name: 'DigiLocker (digital documents)',
  category: 'Identity & Documents',
  department: 'Government of India digital platform',
  summary: 'A government platform to keep and share digital copies of documents issued by participating organisations.',
  keywords: ['digilocker', 'documents', 'digital documents', 'certificates', 'marksheet', 'e-documents', 'locker'],
  url: 'https://www.digilocker.gov.in',
  eligibility: [
    'Residents of India can generally create an account.',
    'Only documents issued by participating organisations are available.',
    'Sign-up requirements can change. Check the official site.'
  ],
  documents: [
    'A mobile number you can access',
    'The details the official sign-up asks for (enter them only on the official site)',
    'The name of the issuer of the document you want to fetch'
  ],
  steps: [
    ['Open the official site or app', 'Confirm the address before signing up.'],
    ['Create your account', 'Follow the official sign-up steps.'],
    ['Search for the issuer', 'Pick the organisation that issued your document.'],
    ['Fetch your document', 'Add the document to your locker.'],
    ['Share carefully', 'Share only with organisations you trust.']
  ],
  fees: 'Check the official site for the current fee position. Never pay anyone to open or use an account.',
  hi: {
    name: "डिजिलॉकर (डिजिटल दस्तावेज़)",
    summary: "सरकारी प्लेटफ़ॉर्म जहाँ भाग लेने वाले संगठनों द्वारा जारी डिजिटल दस्तावेज़ रखे और साझा किए जा सकते हैं।",
    eligibility: [
      "भारत के निवासी आम तौर पर खाता बना सकते हैं।",
      "केवल भाग लेने वाले संगठनों द्वारा जारी दस्तावेज़ उपलब्ध होते हैं।",
      "साइन-अप आवश्यकताएँ बदल सकती हैं। आधिकारिक साइट जाँचें।",
    ],
    documents: [
      "एक मोबाइल नंबर जिस तक आपकी पहुँच हो",
      "आधिकारिक साइन-अप में माँगे गए विवरण (केवल आधिकारिक साइट पर दर्ज करें)",
      "जिस दस्तावेज़ को लाना है, उसके जारीकर्ता का नाम",
    ],
    steps: [
      ["आधिकारिक साइट या ऐप खोलें", "साइन-अप से पहले पता की पुष्टि करें।"],
      ["खाता बनाएँ", "आधिकारिक साइन-अप चरणों का पालन करें।"],
      ["जारीकर्ता खोजें", "जिस संगठन ने दस्तावेज़ जारी किया, उसे चुनें।"],
      ["दस्तावेज़ लाएँ", "दस्तावेज़ को अपने लॉकर में जोड़ें।"],
      ["सावधानी से साझा करें", "केवल विश्वसनीय संगठनों के साथ साझा करें।"],
    ],
    fees: "वर्तमान शुल्क स्थिति के लिए आधिकारिक साइट जाँचें। खाता खोलने या उपयोग करने के लिए कभी किसी को भुगतान न करें।"
  }
});
/* =====================================================
   PART 2 OF 7: more services
   To add your own service later, copy one block, change
   the text, and keep a comma after every item.
   ===================================================== */

SERVICES.push({
  id: 'driving-licence',
  name: 'Driving licence',
  category: 'Travel & Transport',
  department: 'Parivahan / State transport departments',
  summary: 'Learner and permanent driving licence services. Rules and slots vary by state.',
  keywords: ['driving licence', 'driving license', 'learner', 'rto', 'parivahan', 'sarathi', 'vehicle', 'dl'],
  url: 'https://parivahan.gov.in',
  eligibility: [
    'Minimum age depends on the type of vehicle.',
    'A learner licence usually comes before a permanent licence.',
    'Rules differ by state. Check your state transport department.'
  ],
  documents: [
    'Proof of age',
    'Proof of address',
    'Photograph and signature, if the portal asks for them',
    'Medical certificate or declaration, if required for your case',
    'Learner licence, when applying for a permanent licence'
  ],
  steps: [
    ['Choose your state', 'Open the official portal and select your state.'],
    ['Apply for a learner licence', 'Fill in the online form and book a test slot.'],
    ['Take the test', 'Follow the instructions for your test centre.'],
    ['Apply for the licence', 'Apply for a permanent licence when you are eligible.'],
    ['Track your application', 'Use your application number on the portal.']
  ],
  fees: 'Fees depend on the state and the type of licence. Use the fee details on the official portal.',
  hi: {
    name: "ड्राइविंग लाइसेंस",
    summary: "लर्नर और स्थायी ड्राइविंग लाइसेंस सेवाएँ। नियम और स्लॉट राज्य के अनुसार अलग होते हैं।",
    eligibility: [
      "आयु और अन्य नियम राज्य और लाइसेंस प्रकार पर निर्भर करते हैं।",
      "लर्नर लाइसेंस आमतौर पर स्थायी लाइसेंस से पहले चाहिए।",
      "नियम राज्य के अनुसार अलग होते हैं। अपने राज्य परिवहन विभाग की जाँच करें।",
    ],
    documents: [
      "आयु का प्रमाण",
      "पते का प्रमाण",
      "पासपोर्ट साइज़ फोटो (यदि पोर्टल माँगे)",
      "मौजूदा लाइसेंस (यदि नवीनीकरण)",
      "मेडिकल प्रमाण पत्र (यदि राज्य या प्रकार के लिए आवश्यक)",
    ],
    steps: [
      ["अपना राज्य चुनें", "आधिकारिक पोर्टल खोलें और अपना राज्य चुनें।"],
      ["आवेदन प्रकार चुनें", "लर्नर, स्थायी या नवीनीकरण।"],
      ["फॉर्म भरें और दस्तावेज़ अपलोड करें", "केवल आधिकारिक पोर्टल पर।"],
      ["शुल्क दें और स्लॉट बुक करें", "यदि टेस्ट या विज़िट की जरूरत हो।"],
      ["आगे के निर्देशों का पालन करें", "RTO या पोर्टल पर दिखाए अनुसार।"],
    ],
    fees: "शुल्क राज्य और लाइसेंस प्रकार पर निर्भर करता है। आधिकारिक पोर्टल पर शुल्क विवरण देखें।"
  }
});

SERVICES.push({
  id: 'income-tax-return',
  name: 'Income tax return (e-filing)',
  category: 'Tax & Money',
  department: 'Income Tax Department',
  summary: 'File an income tax return online, check tax information and track a refund.',
  keywords: ['income tax', 'itr', 'tax return', 'pan', 'e-filing', 'refund', 'tax', 'form 16'],
  url: 'https://www.incometax.gov.in',
  eligibility: [
    'Who must file depends on income and other conditions.',
    'Some people file even when not required, for example to claim a refund.',
    'Check the current rules or ask a qualified tax professional.'
  ],
  documents: [
    'PAN',
    'Form 16 from your employer, if you are salaried',
    'Bank interest certificates and statements',
    'Investment and deduction proofs',
    'Tax statements shown on the official portal'
  ],
  steps: [
    ['Log in', 'Use the official e-filing portal.'],
    ['Choose the year and form', 'Pick the assessment year and the correct return form.'],
    ['Check pre-filled details', 'Compare them with your own records.'],
    ['Submit the return', 'Review everything, then submit.'],
    ['Verify and track', 'Complete e-verification and track any refund.']
  ],
  fees: 'Filing a return on the official portal is generally free. Tax payable, interest and penalties depend on the law.',
  hi: {
    name: "आयकर रिटर्न (ई-फाइलिंग)",
    summary: "आधिकारिक आयकर ई-फाइलिंग पोर्टल पर आयकर रिटर्न दाखिल करें।",
    eligibility: [
      "जिनकी आय निर्धारित सीमा से अधिक है, उन्हें आम तौर पर रिटर्न दाखिल करना होता है।",
      "कुछ मामलों में स्वैच्छिक फाइलिंग भी संभव है।",
      "वर्तमान नियमों के लिए आधिकारिक पोर्टल जाँचें।",
    ],
    documents: [
      "पैन",
      "फॉर्म 16 / वेतन स्लिप (यदि लागू)",
      "बैंक खाता विवरण",
      "निवेश और कटौती के प्रमाण (यदि दावा कर रहे हों)",
      "आधार (यदि पोर्टल माँगे)",
    ],
    steps: [
      ["आधिकारिक ई-फाइलिंग साइट खोलें", "पता ध्यान से जाँचें।"],
      ["लॉग इन या रजिस्टर करें", "अपने क्रेडेंशियल उपयोग करें।"],
      ["सही ITR फॉर्म चुनें", "अपनी स्थिति के अनुसार।"],
      ["विवरण भरें और जाँचें", "AIS / फॉर्म 26AS से मिलाएँ।"],
      ["जमा करें और ई-सत्यापित करें", "अनुमत समय के अंदर।"],
    ],
    fees: "आधिकारिक पोर्टल पर रिटर्न दाखिल करना आम तौर पर मुफ़्त है। देय कर, ब्याज और जुर्माना कानून पर निर्भर करते हैं।"
  }
});

SERVICES.push({
  id: 'aadhaar-services',
  name: 'Aadhaar services (UIDAI)',
  category: 'Identity & Documents',
  department: 'UIDAI',
  summary: 'Download Aadhaar, update details or find an enrolment centre through the official UIDAI website.',
  keywords: ['aadhaar', 'aadhar', 'uidai', 'update address', 'download aadhaar', 'enrolment', 'documents'],
  url: 'https://uidai.gov.in',
  eligibility: [
    'Residents of India can generally enrol.',
    'Different update types need different proof.',
    'Check the official site for the current list.'
  ],
  documents: [
    'Supporting proof for the detail you want to update (see the official list)',
    'Mobile number linked to your Aadhaar, if the service needs it',
    'Never share your OTP with anyone, including this website'
  ],
  steps: [
    ['Open the official site', 'Check the address carefully.'],
    ['Choose a service', 'For example download, update or locate a centre.'],
    ['Follow the official steps', 'Enter sensitive details only on the official site.'],
    ['Keep your reference number', 'Use it to track the request.']
  ],
  fees: 'Some services are free and some are charged. Check the official site for current fees.',
  hi: {
    name: 'आधार सेवाएँ (UIDAI)',
    summary: 'आधार डाउनलोड करें, विवरण अपडेट करें या आधिकारिक UIDAI वेबसाइट के माध्यम से नामांकन केंद्र खोजें।',
    eligibility: [
      'भारत के निवासी आम तौर पर नामांकन कर सकते हैं।',
      'अलग-अलग अपडेट प्रकारों के लिए अलग प्रमाण चाहिए।',
      'वर्तमान सूची के लिए आधिकारिक साइट जाँचें।'
    ],
    documents: [
      'जिस विवरण को अपडेट करना है उसका सहायक प्रमाण (आधिकारिक सूची देखें)',
      'आपके आधार से जुड़ा मोबाइल नंबर, यदि सेवा को इसकी ज़रूरत हो',
      'अपना OTP किसी के साथ साझा न करें, इस वेबसाइट सहित'
    ],
    steps: [
      ['आधिकारिक साइट खोलें', 'पता ध्यान से जाँचें।'],
      ['सेवा चुनें', 'उदाहरण के लिए डाउनलोड, अपडेट या केंद्र खोजें।'],
      ['आधिकारिक चरणों का पालन करें', 'संवेदनशील विवरण केवल आधिकारिक साइट पर ही दर्ज करें।'],
      ['अपनी संदर्भ संख्या सुरक्षित रखें', 'अनुरोध ट्रैक करने के लिए इसका उपयोग करें।']
    ],
    fees: 'कुछ सेवाएँ मुफ़्त हैं और कुछ शुल्क वाली। वर्तमान शुल्क के लिए आधिकारिक साइट जाँचें।'
  }
});

SERVICES.push({
  id: 'voter-id',
  name: 'Voter ID registration',
  category: 'Civic & Voting',
  department: 'Election Commission of India',
  summary: 'Register as a voter, correct details or check your name on the electoral roll.',
  keywords: ['voter', 'voter id', 'epic', 'election', 'electoral roll', 'voting', 'form 6'],
  url: 'https://voters.eci.gov.in',
  eligibility: [
    'Indian citizens who are 18 or older on the qualifying date can generally register.',
    'You usually register where you ordinarily live.',
    'Check the official site for the current qualifying dates.'
  ],
  documents: [
    'Proof of age',
    'Proof of address',
    'Recent photograph',
    'Details of any existing voter registration'
  ],
  steps: [
    ['Open the official portal', 'Check the address carefully.'],
    ['Select new registration', 'Pick the right form for your case.'],
    ['Fill in the details', 'Enter your information and upload documents.'],
    ['Submit and note the reference', 'Keep it safely.'],
    ['Track the application', 'Use the reference on the portal.']
  ],
  fees: 'Check the official portal. Registration is generally not charged.',
  hi: {
    name: "वोटर ID पंजीकरण",
    summary: "मतदाता के रूप में पंजीकरण करें, विवरण सुधारें या मतदाता सूची में अपना नाम जाँचें।",
    eligibility: [
      "भारतीय नागरिक जो योग्यता तिथि पर 18 वर्ष या उससे अधिक हैं, आम तौर पर पंजीकरण कर सकते हैं।",
      "आमतौर पर जहाँ आप सामान्य रूप से रहते हैं, वहाँ पंजीकरण करते हैं।",
      "वर्तमान योग्यता तिथियों के लिए आधिकारिक साइट जाँचें।",
    ],
    documents: [
      "आयु का प्रमाण",
      "पते का प्रमाण",
      "हाल की फोटो",
      "किसी मौजूदा मतदाता पंजीकरण का विवरण",
    ],
    steps: [
      ["आधिकारिक पोर्टल खोलें", "पता ध्यान से जाँचें।"],
      ["नया पंजीकरण चुनें", "अपने मामले के लिए सही फॉर्म चुनें।"],
      ["विवरण भरें", "जानकारी दर्ज करें और दस्तावेज़ अपलोड करें।"],
      ["जमा करें और संदर्भ नोट करें", "इसे सुरक्षित रखें।"],
      ["आवेदन ट्रैक करें", "पोर्टल पर संदर्भ का उपयोग करें।"],
    ],
    fees: "आधिकारिक पोर्टल जाँचें। पंजीकरण आम तौर पर शुल्क-मुक्त है।"
  }
});

SERVICES.push({
  id: 'national-scholarship',
  name: 'National Scholarship Portal',
  category: 'Education',
  department: 'National Scholarship Portal',
  summary: 'Find central and state scholarship schemes and apply through one portal.',
  keywords: ['scholarship', 'nsp', 'student', 'education', 'fellowship', 'college', 'school'],
  url: 'https://scholarships.gov.in',
  eligibility: [
    'Eligibility depends on the scheme (income, category, course and marks).',
    'Each scheme has its own deadline.',
    'Check the scheme guidelines before applying.'
  ],
  documents: [
    'Previous year marksheets',
    'Income certificate, if the scheme needs it',
    'Category certificate, if applicable',
    'Institute details and student ID',
    'Bank details, entered only on the official portal'
  ],
  steps: [
    ['Check the schemes', 'Read the eligibility of each scheme.'],
    ['Register', 'Complete the one-time registration.'],
    ['Fill in the application', 'Enter the details and upload documents.'],
    ['Submit', 'Keep your application ID safe.'],
    ['Follow verification', 'Your institute may need to verify the form.']
  ],
  fees: 'Applying is generally free. Confirm on the official portal.',
  hi: {
    name: "राष्ट्रीय छात्रवृत्ति पोर्टल",
    summary: "केंद्र और राज्य छात्रवृत्ति योजनाओं के लिए आधिकारिक राष्ट्रीय छात्रवृत्ति पोर्टल पर आवेदन करें।",
    eligibility: [
      "प्रत्येक योजना की अपनी पात्रता शर्तें होती हैं।",
      "आमतौर पर संस्थान सत्यापन आवश्यक होता है।",
      "आवेदन से पहले योजना दिशानिर्देश पढ़ें।",
    ],
    documents: [
      "आधार",
      "बैंक खाता विवरण (छात्र के नाम)",
      "पिछली मार्कशीट / प्रमाण पत्र",
      "आय प्रमाण पत्र (यदि योजना माँगे)",
      "जाति प्रमाण पत्र (यदि योजना माँगे)",
      "संस्थान बोनाफाइड (यदि माँगा जाए)",
    ],
    steps: [
      ["आधिकारिक छात्रवृत्ति पोर्टल खोलें", "पता जाँचें।"],
      ["रजिस्टर / लॉग इन करें", "छात्र खाता बनाएँ।"],
      ["योजना चुनें", "पात्रता ध्यान से पढ़ें।"],
      ["आवेदन भरें और दस्तावेज़ अपलोड करें", "केवल आधिकारिक पोर्टल पर।"],
      ["संस्थान सत्यापन का इंतज़ार करें", "स्थिति ट्रैक करते रहें।"],
    ],
    fees: "आवेदन आम तौर पर मुफ़्त है। आधिकारिक पोर्टल पर पुष्टि करें।"
  }
});
/* =====================================================
   PART 3 OF 7: helpers, storage, messages, scrolling
   ===================================================== */

const STORAGE_KEYS = {
  saved: 'sevanavigator-saved',
  checks: 'sevanavigator-checks',
  suggestions: 'sevanavigator-suggestions'
};

const state = {
  category: 'all',
  query: '',
  sort: 'recommended',
  openId: null,
  lastScrollY: 0
};

let savedIds = [];
let toastTimer = null;

function byId(id) {
  return document.getElementById(id);
}

function on(id, eventName, handler) {
  const node = byId(id);
  if (node) {
    node.addEventListener(eventName, handler);
  }
}

function makeElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text !== undefined) {
    node.textContent = text;
  }
  return node;
}

function clearNode(node) {
  while (node && node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function readStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function findService(id) {
  return SERVICES.find(function (service) {
    return service.id === id;
  });
}

function showToast(message) {
  let toast = byId('sn-toast');
  if (!toast) {
    toast = makeElement('div');
    toast.id = 'sn-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    Object.assign(toast.style, {
      position: 'fixed',
      left: '50%',
      bottom: '24px',
      transform: 'translateX(-50%)',
      maxWidth: '90%',
      padding: '12px 18px',
      borderRadius: '10px',
      background: '#142b3b',
      color: '#ffffff',
      fontSize: '14px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
      zIndex: '1000',
      opacity: '0',
      transition: 'opacity 200ms ease',
      pointerEvents: 'none'
    });
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.style.opacity = '0';
  }, 2800);
}

function prefersReducedMotion() {
  return window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function headerHeight() {
  const header = byId('site-header');
  return header ? header.offsetHeight : 0;
}

function scrollToElement(target, extra) {
  if (!target) {
    return;
  }
  const gap = extra === undefined ? 12 : extra;
  const top = target.getBoundingClientRect().top +
    window.pageYOffset - headerHeight() - gap;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  });
}

function jumpTo(y) {
  const root = document.documentElement;
  root.style.scrollBehavior = 'auto';
  void window.getComputedStyle(root).scrollBehavior;
  window.scrollTo({ top: y, left: 0, behavior: 'instant' });
  root.style.scrollBehavior = '';
}

/* The CSS file uses some different class names from the
   HTML file. This list adds the matching CSS classes. */
const CLASS_BRIDGE = [
  ['#explore-services', 'directory-section'],
  ['#service-details', 'service-details-section'],
  ['#back-to-directory', 'back-to-directory'],
  ['#results-status', 'results-status'],
  ['#detail-category', 'detail-category'],
  ['#detail-title', 'detail-title'],
  ['#detail-summary', 'detail-summary'],
  ['.information-notice', 'detail-notice'],
  ['.detail-content-card', 'detail-panel'],
  ['#detail-fees', 'detail-fees'],
  ['#official-service-link', 'official-service-link'],
  ['#checklist-progress', 'checklist-progress'],
  ['#saved-count', 'saved-count'],
  ['#saved-empty-state', 'saved-empty-state'],
  ['#service-sort', 'service-sort'],
  ['.about-principles', 'about-principles-grid'],
  ['.principle-card', 'about-principle-card'],
  ['.suggest-service-section', 'suggestion-section'],
  ['.suggest-service-form', 'suggestion-form'],
  ['#suggestion-form-status', 'suggestion-form-status'],
  ['#reset-checklist-button', 'button button-secondary'],
  ['#clear-search-button', 'button button-secondary']
];

function applyClassBridge() {
  CLASS_BRIDGE.forEach(function (pair) {
    document.querySelectorAll(pair[0]).forEach(function (node) {
      node.classList.add.apply(node.classList, pair[1].split(' '));
    });
  });
}
/* =====================================================
   PART 4 OF 7: search, filters, service cards, saved
   ===================================================== */

function normalize(text) {
  return String(text || '').toLowerCase().trim();
}

function getTokens(query) {
  return normalize(query).split(/\s+/).filter(Boolean).map(function (word) {
    return word.length > 3 && word.endsWith('s') ? word.slice(0, -1) : word;
  });
}

function prepareServices() {
  SERVICES.forEach(function (service) {
    service.searchText = normalize([
      service.name,
      service.category,
      service.department,
      service.summary,
      service.keywords.join(' ')
    ].join(' '));
  });
}

function scoreService(service, tokens) {
  const name = normalize(service.name);
  const keywords = normalize(service.keywords.join(' '));
  let score = 0;
  tokens.forEach(function (token) {
    if (name.includes(token)) {
      score += 5;
    }
    if (keywords.includes(token)) {
      score += 3;
    }
    score += 1;
  });
  return score;
}

function getVisibleServices() {
  const tokens = getTokens(state.query);
  const list = SERVICES.filter(function (service) {
    const inCategory = state.category === 'all' ||
      service.category === state.category;
    const matches = tokens.every(function (token) {
      return service.searchText.includes(token);
    });
    return inCategory && matches;
  });
  if (state.sort === 'az') {
    list.sort(function (a, b) { return a.name.localeCompare(b.name); });
  } else if (state.sort === 'za') {
    list.sort(function (a, b) { return b.name.localeCompare(a.name); });
  } else if (tokens.length) {
    list.sort(function (a, b) {
      return scoreService(b, tokens) - scoreService(a, tokens);
    });
  }
  return list;
}

function updateSaveButton(button, isSaved, name) {
  button.textContent = isSaved ? '♥' : '♡';
  button.classList.toggle('is-saved', isSaved);
  button.setAttribute('aria-pressed', String(isSaved));
  button.setAttribute(
    'aria-label',
    (isSaved ? 'Remove from saved guides: ' : 'Save guide: ') + name
  );
}

function createServiceCard(service) {
  const card = makeElement('article', 'service-card');
  card.dataset.serviceId = service.id;

  const top = makeElement('div', 'service-card-top');
  top.appendChild(makeElement('span', 'service-category-label', service.category));
  card.appendChild(top);

  card.appendChild(makeElement('h3', '', pick(service, 'name')));
  card.appendChild(makeElement('p', '', pick(service, 'summary')));

  const footer = makeElement('div', 'service-card-footer');

  const open = makeElement('button', 'button button-secondary', 'View guide →');
  open.type = 'button';
  open.dataset.action = 'open';
  open.dataset.id = service.id;
  open.setAttribute('aria-label', 'View guide: ' + service.name);

  const save = makeElement('button', 'service-save-button');
  save.type = 'button';
  save.dataset.action = 'save';
  save.dataset.id = service.id;
  updateSaveButton(save, savedIds.includes(service.id), service.name);

  footer.appendChild(open);
  footer.appendChild(save);
  card.appendChild(footer);
  return card;
}

function updateStatusText(count) {
  const status = byId('results-status');
  if (!status) {
    return;
  }
  const noun = count === 1 ? 'guide' : 'guides';
  let text = 'Showing all ' + count + ' ' + noun + '.';
  if (state.query || state.category !== 'all') {
    text = count + ' ' + noun + ' found';
    if (state.query) {
      text += ' for “' + state.query.trim() + '”';
    }
    if (state.category !== 'all') {
      text += ' in ' + state.category;
    }
    text += '.';
  }
  status.textContent = text;
}

function renderServices() {
  const grid = byId('service-grid');
  const empty = byId('empty-state');
  const list = getVisibleServices();
  clearNode(grid);
  list.forEach(function (service) {
    grid.appendChild(createServiceCard(service));
  });
  if (empty) {
    empty.hidden = list.length > 0;
  }
  grid.hidden = list.length === 0;
  updateStatusText(list.length);
}

function syncSearchInputs() {
  ['service-search-input', 'directory-search-input'].forEach(function (id) {
    const input = byId(id);
    if (input && input.value !== state.query) {
      input.value = state.query;
    }
  });
}

/* Which category button should look selected?
   - If the person picked a category button, that one.
   - Otherwise, if there is a search and ALL the results belong to one
     category (e.g. "passport" -> Travel & Transport), that category.
   - Otherwise, "All services". */
function getHighlightedCategory() {
  if (state.category !== 'all') {
    return state.category;
  }
  if (normalize(state.query)) {
    const results = getVisibleServices();
    if (results.length > 0) {
      const first = results[0].category;
      const sameCategory = results.every(function (service) {
        return service.category === first;
      });
      if (sameCategory) {
        return first;
      }
    }
  }
  return 'all';
}

function updateFilterButtons() {
  const highlighted = getHighlightedCategory();
  document.querySelectorAll('.category-filter').forEach(function (button) {
    const active = button.dataset.category === highlighted;
    button.classList.toggle('is-active', active);
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function renderCategoryFilters() {
  const box = byId('category-filters');
  if (!box) {
    return;
  }
  const counts = {};
  SERVICES.forEach(function (service) {
    counts[service.category] = (counts[service.category] || 0) + 1;
  });
  const first = box.querySelector('.category-filter');
  clearNode(box);
  if (first) {
    box.appendChild(first);
  }
  Object.keys(counts).forEach(function (category) {
    const button = makeElement(
      'button',
      'category-filter',
      category + ' (' + counts[category] + ')'
    );
    button.type = 'button';
    button.dataset.category = category;
    button.setAttribute('aria-pressed', 'false');
    box.appendChild(button);
  });
  updateFilterButtons();
}

function renderAll() {
  syncSearchInputs();
  updateFilterButtons();
  renderServices();
}

function restoreSearchText(event) {
  event.target.style.color = '';
}

function runSearch(query) {
  if (state.openId) {
    closeService(false);
  }
  state.query = query.trim();
  state.category = 'all';
  renderAll();
  ['service-search-input', 'directory-search-input'].forEach(function (id) {
    const input = byId(id);
    if (input) {
      input.style.color = '';
      input.blur();
    }
  });
  scrollToElement(byId('explore-services'), 0);
  const status = byId('results-status');
  if (status) {
    status.setAttribute('tabindex', '-1');
    status.focus({ preventScroll: true });
  }
}

function clearSearch() {
  state.query = '';
  state.category = 'all';
  renderAll();
  const input = byId('directory-search-input');
  if (input) {
    input.style.color = '';
    input.focus({ preventScroll: true });
  }
  showToast('Search cleared. Showing all guides.');
}

/* ---------- Saved guides ---------- */

function renderSaved() {
  const grid = byId('saved-services-grid');
  const empty = byId('saved-empty-state');
  const count = byId('saved-count');
  if (!grid) {
    return;
  }
  grid.querySelectorAll('[data-saved-card]').forEach(function (node) {
    node.remove();
  });
  savedIds.forEach(function (id) {
    const service = findService(id);
    if (service) {
      const card = createServiceCard(service);
      card.dataset.savedCard = 'true';
      grid.appendChild(card);
    }
  });
  if (empty) {
    empty.hidden = savedIds.length > 0;
  }
  if (count) {
    count.textContent = savedIds.length + (savedIds.length === 1 ? ' saved guide' : ' saved guides');
  }
}

function refreshSaveButtons() {
  document.querySelectorAll('[data-action="save"]').forEach(function (button) {
    const service = findService(button.dataset.id);
    if (service) {
      updateSaveButton(button, savedIds.includes(service.id), service.name);
      if (button.dataset.label) {
        button.textContent = savedIds.includes(service.id)
          ? '♥ Saved' : '♡ Save this guide';
      }
    }
  });
}

function toggleSaved(id) {
  const service = findService(id);
  if (!service) {
    return;
  }
  if (savedIds.includes(id)) {
    savedIds = savedIds.filter(function (item) { return item !== id; });
    showToast('Removed from your saved guides.');
  } else {
    savedIds.push(id);
    showToast('Saved to your shortlist.');
  }
  if (!writeStorage(STORAGE_KEYS.saved, savedIds)) {
    showToast('Saved for this visit only. Your browser blocked storage.');
  }
  renderSaved();
  refreshSaveButtons();
}

function handleCardClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) {
    return;
  }
  if (button.dataset.action === 'open') {
    openService(button.dataset.id, true);
  } else if (button.dataset.action === 'save') {
    toggleSaved(button.dataset.id);
  }
}
/* =====================================================
   PART 5 OF 7: detail page helpers and checklist
   ===================================================== */

const DETAIL_HIDE = 'main > section:not(#service-details)';

function setDetailMode(isOn) {
  document.querySelectorAll(DETAIL_HIDE).forEach(function (section) {
    section.hidden = isOn;
  });
  const details = byId('service-details');
  if (details) {
    details.hidden = !isOn;
  }
}

function safeUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' ? parsed : null;
  } catch (error) {
    return null;
  }
}

function ensureDetailExtras() {
  if (byId('detail-actions')) {
    return;
  }
  const summary = byId('detail-summary');
  if (summary) {
    const actions = makeElement('div', 'detail-actions');
    actions.id = 'detail-actions';
    actions.style.margin = '16px 0';
    const save = makeElement('button', 'button button-secondary');
    save.type = 'button';
    save.id = 'detail-save-button';
    save.dataset.action = 'save';
    save.dataset.label = 'yes';
    actions.appendChild(save);
    summary.insertAdjacentElement('afterend', actions);
  }
  const link = byId('official-service-link');
  if (link) {
    const check = makeElement('a', 'button button-secondary', 'Check if this site is down ↗');
    check.id = 'status-check-link';
    check.target = '_blank';
    check.rel = 'noopener noreferrer';
    check.style.marginLeft = '10px';
    link.insertAdjacentElement('afterend', check);
    const note = makeElement('p', 'small-print');
    note.id = 'detail-verify-note';
    check.insertAdjacentElement('afterend', note);
  }
}

function fillList(box, introText, items) {
  clearNode(box);
  box.appendChild(makeElement('p', 'small-print', introText));
  const list = makeElement('ul');
  items.forEach(function (item) {
    list.appendChild(makeElement('li', '', item));
  });
  box.appendChild(list);
}

function updateChecklistProgress() {
  const box = byId('document-checklist');
  const progress = byId('checklist-progress');
  if (!box || !progress) {
    return;
  }
  const total = box.querySelectorAll('input').length;
  const done = box.querySelectorAll('input:checked').length;
  progress.textContent = done + ' of ' + total + ' items checked' +
    (total > 0 && done === total ? '. You have everything on this list.' : '');
}

function renderChecklist(service) {
  const box = byId('document-checklist');
  clearNode(box);
  const stored = readStorage(STORAGE_KEYS.checks, {});
  const checked = Array.isArray(stored[service.id]) ? stored[service.id] : [];
  const docs = pick(service, 'documents') || [];
  docs.forEach(function (text, index) {
    const label = makeElement('label', 'checklist-item');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.dataset.index = String(index);
    input.checked = checked.includes(index);
    label.appendChild(input);
    label.appendChild(makeElement('span', '', text));
    box.appendChild(label);
  });
  updateChecklistProgress();
}

function saveChecklist() {
  if (!state.openId) {
    return;
  }
  const stored = readStorage(STORAGE_KEYS.checks, {});
  const indexes = [];
  byId('document-checklist').querySelectorAll('input').forEach(function (input) {
    if (input.checked) {
      indexes.push(Number(input.dataset.index));
    }
  });
  stored[state.openId] = indexes;
  writeStorage(STORAGE_KEYS.checks, stored);
  updateChecklistProgress();
}

function resetChecklist() {
  byId('document-checklist').querySelectorAll('input').forEach(function (input) {
    input.checked = false;
  });
  saveChecklist();
  showToast('Checklist reset.');
}
/* =====================================================
   PART 6 OF 7: showing and closing a service guide
   ===================================================== */

function renderDetail(service) {
  ensureDetailExtras();
  byId('detail-category').textContent = service.category;
  byId('detail-title').textContent = pick(service, 'name');
  byId('detail-summary').textContent = pick(service, 'summary');
  byId('detail-notice-text').textContent = isHindi()
    ? 'यह गाइड सामान्य जानकारी है, जिसे आधिकारिक स्रोत से सत्यापित नहीं किया गया है। आवश्यकताएँ, शुल्क और प्रक्रिया का समय बदल सकते हैं। आवेदन से पहले हमेशा आधिकारिक वेबसाइट पर पुष्टि करें।'
    : 'This guide is general information that has NOT been verified against the official source. Requirements, fees and processing times change. Always confirm on the official website before you apply.';

  fillList(
    byId('detail-eligibility'),
    isHindi() ? 'असत्यापित सामान्य मार्गदर्शन। आधिकारिक पोर्टल पर पुष्टि करें।' : 'Unverified general guidance. Confirm on the official portal.',
    pick(service, 'eligibility')
  );
  renderChecklist(service);

  const steps = byId('application-steps');
  clearNode(steps);
  const list = makeElement('ol', 'application-steps');
  const stepList = pick(service, 'steps') || [];
  stepList.forEach(function (step) {
    const item = makeElement('li');
    item.appendChild(makeElement('strong', '', step[0]));
    item.appendChild(makeElement('span', '', step[1]));
    list.appendChild(item);
  });
  steps.appendChild(list);

  const fees = byId('detail-fees');
  clearNode(fees);
  fees.appendChild(makeElement('p', '', pick(service, 'fees')));

  const link = byId('official-service-link');
  const check = byId('status-check-link');
  const note = byId('detail-verify-note');
  const parsed = safeUrl(service.url);
  if (parsed) {
    link.href = parsed.href;
    link.textContent = 'Visit official website (' + parsed.hostname + ') ↗';
    link.hidden = false;
    check.href = 'https://downforeveryoneorjustme.com/' + parsed.hostname;
    check.hidden = false;
    note.textContent = 'Link status: not yet verified by SevaNavigator. ' +
      'Check that the address in your browser matches ' + parsed.hostname +
      '. The "site is down" button opens a third-party checker. ' +
      'SevaNavigator cannot show live website status itself.';
  } else {
    link.hidden = true;
    check.hidden = true;
    note.textContent = 'No official link has been added for this service yet.';
  }
  refreshSaveButtons();
  byId('detail-save-button').dataset.id = service.id;
  refreshSaveButtons();
}

function openService(id, pushHistory) {
  const service = findService(id);
  if (!service) {
    showToast('Sorry, that guide could not be found.');
    return;
  }
  if (!state.openId) {
    state.lastScrollY = window.pageYOffset;
  }
  state.openId = id;
  renderDetail(service);
  setDetailMode(true);
  document.title = service.name + ' - SevaNavigator';
  if (pushHistory) {
    history.pushState({ serviceId: id, internal: true }, '', '#service-' + id);
  }
  jumpTo(0);
  byId('detail-title').setAttribute('tabindex', '-1');
  byId('detail-title').focus({ preventScroll: true });
}

function closeService(restoreScroll) {
  if (!state.openId) {
    return;
  }
  state.openId = null;
  setDetailMode(false);
  document.title = BASE_TITLE;
  if (restoreScroll) {
    jumpTo(state.lastScrollY);
  }
}

function backToDirectory() {
  if (history.state && history.state.internal) {
    history.back();
    return;
  }
  closeService(false);
  history.replaceState(null, '', window.location.pathname + window.location.search);
  scrollToElement(byId('explore-services'), 0);
}
/* =====================================================
   PART 7 OF 7: menu, suggestion form, events, start-up
   ===================================================== */

/* ---------- Mobile menu ---------- */

function setMenu(isOpen) {
  const nav = byId('primary-navigation');
  const toggle = byId('mobile-menu-toggle');
  if (!nav || !toggle) {
    return;
  }
  nav.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  const icon = toggle.querySelector('.menu-icon');
  if (icon) {
    icon.textContent = isOpen ? '✕' : '☰';
  }
}

function menuIsOpen() {
  const nav = byId('primary-navigation');
  return Boolean(nav && nav.classList.contains('is-open'));
}

/* ---------- Suggestion form ---------- */

function looksSensitive(text) {
  const lower = text.toLowerCase();
  return /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/.test(lower) ||
    /\d{8,}/.test(lower.replace(/[\s-]/g, '')) ||
    /\b(password|passcode|otp|cvv)\b/.test(lower);
}

function handleSuggestion(event) {
  event.preventDefault();
  const status = byId('suggestion-form-status');
  const name = byId('suggestion-service-name').value.trim();
  const department = byId('suggestion-department').value.trim();
  const reason = byId('suggestion-reason').value.trim();
  status.style.color = '#a63f3f';
  if (!name) {
    status.textContent = 'Please enter the name of a service.';
    byId('suggestion-service-name').focus();
    return;
  }
  if (looksSensitive(name + ' ' + department + ' ' + reason)) {
    status.textContent = 'Please remove numbers, passwords or OTPs. Do not share sensitive information here.';
    return;
  }
  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
  if (button) {
    button.disabled = true;
  }
  status.style.color = '';
  status.textContent = 'Sending your suggestion...';
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  }).then(function (response) {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    status.textContent = 'Thank you! Your suggestion has been sent to the SevaNavigator team.';
    form.reset();
    showToast('Suggestion sent. Thank you!');
  }).catch(function () {
    status.style.color = '#a63f3f';
    status.textContent = 'Sorry, your suggestion could not be sent. Please try again later.';
  }).then(function () {
    if (button) {
      button.disabled = false;
    }
  });
}

/* ---------- Links, events, start-up ---------- */

function handleAnchorClick(event) {
  const link = event.target.closest('a[href^="#"]');
  if (!link) {
    return;
  }
  const hash = link.getAttribute('href');
  if (hash === '#') {
    event.preventDefault();
    return;
  }
  const target = byId(hash.slice(1));
  if (!target) {
    return;
  }
  event.preventDefault();
  setMenu(false);
  if (state.openId) {
    closeService(false);
  }
  history.replaceState(null, '', hash);
  if (hash === '#home') {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  } else {
    scrollToElement(target, 0);
  }
  if (hash === '#main-content') {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}

function bindEvents() {
  document.addEventListener('click', handleAnchorClick);
  on('service-grid', 'click', handleCardClick);
  on('saved-services-grid', 'click', handleCardClick);
  on('service-details', 'click', handleCardClick);

  on('service-search-form', 'submit', function (event) {
    event.preventDefault();
    runSearch(byId('service-search-input').value);
  });

  document.querySelectorAll('.popular-search-button').forEach(function (button) {
    button.addEventListener('click', function () {
      byId('service-search-input').value = button.dataset.searchTerm;
      runSearch(button.dataset.searchTerm);
    });
  });

  on('directory-search-input', 'input', function (event) {
    state.query = event.target.value;
    if (normalize(state.query)) {
      state.category = 'all';
    }
    renderAll();
  });
  on('directory-search-input', 'keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      runSearch(event.target.value);
    }
  });
  on('service-search-input', 'input', restoreSearchText);
  on('service-search-input', 'focus', restoreSearchText);
  on('directory-search-input', 'input', restoreSearchText);
  on('directory-search-input', 'focus', restoreSearchText);

  on('service-sort', 'change', function (event) {
    state.sort = event.target.value;
    renderServices();
  });
  on('category-filters', 'click', function (event) {
    const button = event.target.closest('.category-filter');
    if (button) {
      /* Picking a category (or "All services") also clears any search,
         otherwise the old search text keeps filtering the list. */
      state.category = button.dataset.category;
      state.query = '';
      renderAll();
    }
  });
  on('clear-search-button', 'click', clearSearch);
  on('back-to-directory', 'click', backToDirectory);
  on('document-checklist', 'change', saveChecklist);
  on('reset-checklist-button', 'click', resetChecklist);
  on('suggest-service-form', 'submit', handleSuggestion);

  on('mobile-menu-toggle', 'click', function () {
    setMenu(!menuIsOpen());
  });
  document.addEventListener('click', function (event) {
    if (menuIsOpen() && !event.target.closest('.header-inner')) {
      setMenu(false);
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 720) {
      setMenu(false);
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') {
      return;
    }
    if (menuIsOpen()) {
      setMenu(false);
    } else if (state.openId) {
      backToDirectory();
    }
  });
  window.addEventListener('popstate', function (event) {
    const id = event.state && event.state.serviceId;
    if (id && findService(id)) {
      openService(id, false);
    } else if (state.openId) {
      closeService(true);
    }
  });
}

function openFromHash() {
  const hash = window.location.hash;
  if (hash.indexOf('#service-') === 0) {
    const id = hash.slice('#service-'.length);
    if (findService(id)) {
      history.replaceState({ serviceId: id, internal: false }, '', hash);
      openService(id, false);
    }
  }
}

function init() {
  prepareServices();
  applyClassBridge();
  const strip = document.querySelector('.benefits-strip');
  if (strip && !byId('how-it-works')) {
    strip.id = 'how-it-works';
  }
  const year = byId('current-year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
  const stored = readStorage(STORAGE_KEYS.saved, []);
  savedIds = Array.isArray(stored)
    ? stored.filter(function (id) { return Boolean(findService(id)); })
    : [];
  renderCategoryFilters();
  renderAll();
  renderSaved();
  bindEvents();
  openFromHash();
}


/* Re-render open service when language changes so eligibility/docs/steps switch */
new MutationObserver(function () {
  if (state.openId) {
    var service = findService(state.openId);
    if (service) {
      renderDetail(service);
    }
  }
}).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}