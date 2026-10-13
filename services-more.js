/* =====================================================
   SEVANAVIGATOR - services-more.js
   Adds 10 more services and the "last reviewed" note.
   This file must load AFTER script.js.
   To add a service later, copy one block, change the
   text, and keep a comma after every item.
   ===================================================== */

(function () {
  'use strict';

  var REVIEWED = '12 October 2026';

  var MORE_SERVICES = [
    {
      id: 'pan-card',
      name: 'PAN card (new or correction)',
      category: 'Tax & Money',
      department: 'Income Tax Department',
      summary: 'Apply for a new PAN, get an instant e-PAN with Aadhaar, or correct details on an existing PAN.',
      keywords: ['pan', 'pan card', 'e-pan', 'permanent account number', 'tax', 'correction', 'nsdl', 'protean', 'utiitsl'],
      url: 'https://www.incometax.gov.in',
      eligibility: [
        'Indian citizens who need a PAN under tax rules can apply.',
        'The instant e-PAN route generally needs an Aadhaar number linked to an active mobile number.',
        'Minors can have a PAN through a parent or guardian.'
      ],
      documents: [
        'Aadhaar details, for the instant e-PAN route (enter them only on the official site)',
        'Mobile number linked to your Aadhaar',
        'Proof of identity, address and date of birth, if you use the paper route (see the official list)',
        'Photograph and signature, if you use the paper route'
      ],
      steps: [
        ['Open the official site', 'Check the web address carefully before you enter anything.'],
        ['Choose a route', 'Use the instant e-PAN option on the Income Tax portal, or the authorised PAN service providers (Protean and UTIITSL).'],
        ['Fill in the form', 'Enter your details exactly as in your documents.'],
        ['Verify with OTP', 'Enter OTPs only on the official site.'],
        ['Get your PAN', 'Download the e-PAN or wait for the card to be posted.']
      ],
      fees: 'Instant e-PAN through the Income Tax portal has been free of charge. Other routes charge a fee. Check the current fee on the official site.',
      hi: {
        name: "पैन कार्ड (नया या सुधार)",
        summary: "नया पैन आवेदन करें, आधार से तुरंत ई-पैन प्राप्त करें, या मौजूदा पैन पर विवरण सुधारें।",
        eligibility: [
          "भारतीय नागरिक जिन्हें कर नियमों के तहत पैन चाहिए, आवेदन कर सकते हैं।",
          "तुरंत ई-पैन मार्ग के लिए आमतौर पर सक्रिय मोबाइल से जुड़ा आधार नंबर चाहिए।",
          "नाबालिग माता-पिता या अभिभावक के माध्यम से पैन रख सकते हैं।",
        ],
        documents: [
          "आधार विवरण, तुरंत ई-पैन मार्ग के लिए (केवल आधिकारिक साइट पर दर्ज करें)",
          "आपके आधार से जुड़ा मोबाइल नंबर",
          "पहचान, पता और जन्म तिथि का प्रमाण, यदि पेपर मार्ग उपयोग कर रहे हों (आधिकारिक सूची देखें)",
          "फोटो और हस्ताक्षर, यदि पेपर मार्ग उपयोग कर रहे हों",
        ],
        steps: [
          ["आधिकारिक साइट खोलें", "कुछ भी दर्ज करने से पहले वेब पता ध्यान से जाँचें।"],
          ["मार्ग चुनें", "इनकम टैक्स पोर्टल पर तुरंत ई-पैन विकल्प, या अधिकृत पैन सेवा प्रदाता (Protean और UTIITSL)।"],
          ["फॉर्म भरें", "विवरण बिल्कुल दस्तावेज़ों जैसा दर्ज करें।"],
          ["OTP से सत्यापित करें", "OTP केवल आधिकारिक साइट पर दर्ज करें।"],
          ["अपना पैन प्राप्त करें", "ई-पैन डाउनलोड करें या कार्ड आने का इंतज़ार करें।"],
        ],
        fees: "इनकम टैक्स पोर्टल के माध्यम से तुरंत ई-पैन मुफ़्त रहा है। अन्य मार्गों पर शुल्क लगता है। आधिकारिक साइट पर वर्तमान शुल्क जाँचें।"
      }
    },
    {
      id: 'epfo',
      name: 'EPFO (Provident Fund and UAN)',
      category: 'Work & Pension',
      department: 'Employees\' Provident Fund Organisation',
      summary: 'Activate your UAN, check your PF passbook, transfer your account or file a claim through the EPFO member portal.',
      keywords: ['epfo', 'pf', 'provident fund', 'uan', 'passbook', 'withdraw', 'pension', 'claim', 'employee'],
      url: 'https://www.epfindia.gov.in',
      eligibility: [
        'Employees of covered establishments have a PF account and a UAN.',
        'Your UAN must be activated before you can use online services.',
        'Online claims generally need your KYC details to be up to date. Check the portal.'
      ],
      documents: [
        'Your UAN (Universal Account Number)',
        'Mobile number linked to your UAN',
        'KYC details the portal asks for, such as Aadhaar and bank account',
        'Previous employer details, if you are transferring your account'
      ],
      steps: [
        ['Open the official site', 'Go to the member services section for employees.'],
        ['Activate your UAN', 'Do this once, using the official activation page.'],
        ['Log in', 'Use your UAN and password on the member portal.'],
        ['Check your passbook', 'View your contributions and balance.'],
        ['File a claim or transfer', 'Use the Online Services menu, then track the claim status.']
      ],
      fees: 'Using the portal is free. Never pay an agent to file your claim. Withdrawal and tax rules change, so check the official site.',
      hi: {
        name: "EPFO (भविष्य निधि और UAN)",
        summary: "अपना UAN सक्रिय करें, PF पासबुक जाँचें, खाता ट्रांसफर करें या EPFO सदस्य पोर्टल के माध्यम से दावा दायर करें।",
        eligibility: [
          "UAN वाले कर्मचारी आमतौर पर ऑनलाइन सेवाओं का उपयोग कर सकते हैं।",
          "ऑनलाइन दावों के लिए आमतौर पर KYC विवरण अद्यतन होना चाहिए। पोर्टल जाँचें।",
        ],
        documents: [
          "आपका UAN (यूनिवर्सल अकाउंट नंबर)",
          "आपके UAN से जुड़ा मोबाइल नंबर",
          "पोर्टल द्वारा माँगे गए KYC विवरण, जैसे आधार और बैंक खाता",
          "पिछले नियोक्ता का विवरण, यदि खाता ट्रांसफर कर रहे हों",
        ],
        steps: [
          ["आधिकारिक साइट खोलें", "कर्मचारियों के लिए सदस्य सेवा अनुभाग पर जाएँ।"],
          ["अपना UAN सक्रिय करें", "आधिकारिक सक्रियण पेज पर एक बार करें।"],
          ["लॉग इन करें", "सदस्य पोर्टल पर UAN और पासवर्ड उपयोग करें।"],
          ["पासबुक जाँचें", "अपने योगदान और शेष राशि देखें।"],
          ["दावा या ट्रांसफर दायर करें", "ऑनलाइन सेवा मेनू उपयोग करें, फिर स्थिति ट्रैक करें।"],
        ],
        fees: "पोर्टल का उपयोग मुफ़्त है। अपना दावा दायर करने के लिए कभी एजेंट को भुगतान न करें। निकासी और कर नियम बदलते हैं, आधिकारिक साइट जाँचें।"
      }
    },
    {
      id: 'pm-kisan',
      name: 'PM-KISAN (farmer income support)',
      category: 'Business & Farming',
      department: 'Ministry of Agriculture and Farmers Welfare',
      summary: 'Register as a farmer, check your beneficiary status and follow your instalments for the PM-KISAN scheme.',
      keywords: ['pm kisan', 'pm-kisan', 'kisan', 'farmer', 'agriculture', 'farming', 'instalment', 'subsidy'],
      url: 'https://pmkisan.gov.in',
      eligibility: [
        'Farmer families who own cultivable land can generally apply.',
        'Some categories are excluded. Read the scheme rules.',
        'Land records and bank details must match your registration.'
      ],
      documents: [
        'Aadhaar details, as requested on the official portal',
        'Land ownership records',
        'Bank account details, entered only on the official portal',
        'Mobile number'
      ],
      steps: [
        ['Open the official site', 'Look for the Farmers Corner section.'],
        ['Register as a new farmer', 'You can also register through a Common Service Centre.'],
        ['Complete e-KYC', 'Follow the official steps on the portal.'],
        ['Check beneficiary status', 'Use the status option on the portal.'],
        ['Follow your payments', 'Check your bank account and the portal.']
      ],
      fees: 'Registration on the official portal is free. Benefit amounts and instalments are set by the scheme. Check the official site.',
      hi: {
        name: "पीएम-किसान (किसान आय सहायता)",
        summary: "किसान के रूप में पंजीकरण करें, लाभार्थी स्थिति जाँचें और पीएम-किसान योजना की किस्तों का पालन करें।",
        eligibility: [
          "खेती योग्य भूमि वाले किसान परिवार आम तौर पर आवेदन कर सकते हैं।",
          "कुछ श्रेणियाँ बाहर रखी गई हैं। योजना नियम पढ़ें।",
          "भूमि रिकॉर्ड और बैंक विवरण आपके पंजीकरण से मेल खाने चाहिए।",
        ],
        documents: [
          "आधार विवरण, जैसा आधिकारिक पोर्टल पर माँगा जाए",
          "भूमि स्वामित्व रिकॉर्ड",
          "बैंक खाता विवरण, केवल आधिकारिक पोर्टल पर दर्ज करें",
          "मोबाइल नंबर",
        ],
        steps: [
          ["आधिकारिक साइट खोलें", "किसान कॉर्नर अनुभाग देखें।"],
          ["नए किसान के रूप में पंजीकरण करें", "कॉमन सर्विस सेंटर के माध्यम से भी पंजीकरण कर सकते हैं।"],
          ["ई-KYC पूरा करें", "पोर्टल पर आधिकारिक चरणों का पालन करें।"],
          ["लाभार्थी स्थिति जाँचें", "पोर्टल पर स्थिति विकल्प उपयोग करें।"],
          ["भुगतान का पालन करें", "अपना बैंक खाता और पोर्टल जाँचें।"],
        ],
        fees: "आधिकारिक पोर्टल पर पंजीकरण मुफ़्त है। लाभ राशि और किस्तें योजना द्वारा निर्धारित होती हैं। आधिकारिक साइट जाँचें।"
      }
    },
    {
      id: 'ayushman-bharat',
      name: 'Ayushman Bharat PM-JAY (health cover)',
      category: 'Health',
      department: 'National Health Authority',
      summary: 'Check if your family is eligible for government health cover and learn how to get an Ayushman card.',
      keywords: ['ayushman', 'ayushman bharat', 'pmjay', 'pm-jay', 'health', 'insurance', 'hospital', 'treatment', 'card'],
      url: 'https://pmjay.gov.in',
      eligibility: [
        'Eligibility depends on the scheme criteria for families.',
        'Separate rules apply to some groups, such as senior citizens. Check the portal.',
        'Use the eligibility check on the official site.'
      ],
      documents: [
        'Aadhaar and other ID the portal or help desk asks for',
        'Ration card or family details, if requested',
        'Mobile number'
      ],
      steps: [
        ['Open the official site', 'Check the web address carefully.'],
        ['Check eligibility', 'Use the eligibility option on the portal.'],
        ['Visit a help desk', 'Go to an empanelled hospital help desk or a Common Service Centre.'],
        ['Verify your identity', 'Follow the official verification steps.'],
        ['Get your card', 'Use it only at empanelled hospitals. You can find them on the portal.']
      ],
      fees: 'Getting the card should not cost you anything. Treatment cover is limited by scheme rules. Check the official site.',
      hi: {
        name: "आयुष्मान भारत PM-JAY (स्वास्थ्य कवर)",
        summary: "पात्रता जाँचें, ई-कार्ड डाउनलोड करें और आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना के बारे में जानें।",
        eligibility: [
          "पात्रता सामाजिक-आर्थिक जाति जनगणना और अन्य सरकारी सूचियों पर आधारित है।",
          "सभी परिवार कवर नहीं होते। आधिकारिक पोर्टल पर पात्रता जाँचें।",
        ],
        documents: [
          "आधार या अन्य स्वीकृत ID",
          "परिवार ID / राशन कार्ड (यदि माँगा जाए)",
          "मोबाइल नंबर",
        ],
        steps: [
          ["आधिकारिक पोर्टल खोलें", "पता जाँचें।"],
          ["पात्रता जाँचें", "नाम, मोबाइल या राशन कार्ड से खोजें।"],
          ["ई-कार्ड डाउनलोड करें", "यदि पात्र हों।"],
          ["सूचीबद्ध अस्पताल में उपचार लें", "आधिकारिक सूची से अस्पताल चुनें।"],
        ],
        fees: "योजना के तहत पात्र उपचार के लिए लाभार्थी से शुल्क नहीं लिया जाता। आधिकारिक साइट जाँचें।"
      }
    },
    {
      id: 'e-shram',
      name: 'e-Shram (unorganised workers)',
      category: 'Work & Pension',
      department: 'Ministry of Labour and Employment',
      summary: 'Register as an unorganised worker and receive an e-Shram card.',
      keywords: ['e-shram', 'eshram', 'shram', 'labour', 'worker', 'unorganised', 'unorganized', 'labourer', 'card'],
      url: 'https://eshram.gov.in',
      eligibility: [
        'Unorganised workers can generally register.',
        'There are age and other conditions. Check the portal.',
        'Members of some other schemes may not be eligible.'
      ],
      documents: [
        'Aadhaar number',
        'Mobile number linked to your Aadhaar',
        'Bank account details, entered only on the official portal'
      ],
      steps: [
        ['Open the official site', 'Check the web address carefully.'],
        ['Start registration', 'Use the self-registration option.'],
        ['Verify with OTP', 'Enter OTPs only on the official site.'],
        ['Fill in your details', 'Add your work and bank details.'],
        ['Download your card', 'Keep a copy of your registration.']
      ],
      fees: 'Registration is free. Do not pay anyone to register you.',
      hi: {
        name: "ई-श्रम (असंगठित कर्मचारी)",
        summary: "असंगठित क्षेत्र के कर्मचारियों के लिए राष्ट्रीय डेटाबेस पर पंजीकरण करें और ई-श्रम कार्ड प्राप्त करें।",
        eligibility: [
          "असंगठित क्षेत्र के कर्मचारी आम तौर पर पंजीकरण कर सकते हैं।",
          "आयु और अन्य शर्तें आधिकारिक पोर्टल पर प्रकाशित हैं।",
        ],
        documents: [
          "आधार",
          "मोबाइल नंबर (आधार से जुड़ा)",
          "बैंक खाता विवरण",
          "पेशा / कौशल विवरण",
        ],
        steps: [
          ["आधिकारिक ई-श्रम पोर्टल खोलें", "पता जाँचें।"],
          ["स्व-पंजीकरण चुनें", "आधार और OTP से आगे बढ़ें।"],
          ["विवरण भरें", "केवल आधिकारिक पोर्टल पर।"],
          ["ई-श्रम कार्ड डाउनलोड करें", "पंजीकरण के बाद।"],
        ],
        fees: "पंजीकरण मुफ़्त है। आधिकारिक साइट जाँचें।"
      }
    },
    {
      id: 'udyam-registration',
      name: 'Udyam registration (small business)',
      category: 'Business & Farming',
      department: 'Ministry of MSME',
      summary: 'Register your micro, small or medium business online for an Udyam certificate.',
      keywords: ['udyam', 'msme', 'small business', 'business', 'enterprise', 'startup', 'registration', 'shop'],
      url: 'https://udyamregistration.gov.in',
      eligibility: [
        'Micro, small and medium enterprises can register.',
        'Registration is based on the details you declare. Check the current rules.',
        'One Aadhaar number is generally used per enterprise owner.'
      ],
      documents: [
        'Aadhaar of the owner or proprietor',
        'PAN, and GSTIN if applicable',
        'Business name, address and activity details',
        'Bank account details'
      ],
      steps: [
        ['Open the official site', 'Check the web address carefully. Many fake sites charge fees.'],
        ['Start new registration', 'Verify the owner with Aadhaar and OTP.'],
        ['Verify PAN', 'Enter the business PAN details.'],
        ['Fill in business details', 'Add activity, address and bank details.'],
        ['Submit and download', 'Download your Udyam certificate.']
      ],
      fees: 'Registration on the official portal is free. Do not pay agents or other websites.',
      hi: {
        name: "उद्यम पंजीकरण (छोटा व्यवसाय)",
        summary: "सूक्ष्म, लघु और मध्यम उद्यमों के लिए उद्यम पंजीकरण प्रमाण पत्र प्राप्त करें।",
        eligibility: [
          "सूक्ष्म, लघु या मध्यम उद्यम की परिभाषा में आने वाले व्यवसाय आवेदन कर सकते हैं।",
          "निवेश और टर्नओवर सीमा आधिकारिक पोर्टल पर प्रकाशित हैं।",
        ],
        documents: [
          "आधार",
          "पैन (व्यवसाय / मालिक)",
          "बैंक खाता विवरण",
          "व्यवसाय पता और गतिविधि विवरण",
        ],
        steps: [
          ["आधिकारिक उद्यम पोर्टल खोलें", "पता जाँचें।"],
          ["आधार से पंजीकरण शुरू करें", "OTP केवल आधिकारिक साइट पर दर्ज करें।"],
          ["व्यवसाय विवरण भरें", "सटीक जानकारी दें।"],
          ["प्रमाण पत्र डाउनलोड करें", "जमा करने के बाद।"],
        ],
        fees: "उद्यम पंजीकरण मुफ़्त है। आधिकारिक साइट जाँचें।"
      }
    },
    {
      id: 'gst-registration',
      name: 'GST registration',
      category: 'Business & Farming',
      department: 'GST Council / GSTN',
      summary: 'Understand who needs GST registration and how to apply on the official GST portal.',
      keywords: ['gst', 'gstin', 'tax', 'business', 'registration', 'invoice', 'goods and services tax'],
      url: 'https://www.gst.gov.in',
      eligibility: [
        'Registration depends on turnover limits, the type of business and other conditions.',
        'Some businesses can register voluntarily.',
        'Limits differ by state and activity. Check the current rules or ask a tax professional.'
      ],
      documents: [
        'PAN of the business or owner',
        'Aadhaar of the owner or authorised person',
        'Proof of the business place, such as rent agreement or ownership record',
        'Bank account proof',
        'Photographs and business constitution documents'
      ],
      steps: [
        ['Open the official GST portal', 'Check the web address carefully.'],
        ['Start new registration', 'Enter PAN, mobile number and email, then verify with OTP.'],
        ['Note your reference number', 'You will receive a temporary reference number.'],
        ['Fill in the business details', 'Upload the documents the portal asks for.'],
        ['Submit and track', 'Use your application reference number.']
      ],
      fees: 'Registration on the official portal is free. Penalties and taxes depend on the law.',
      hi: {
        name: "GST पंजीकरण",
        summary: "वस्तु एवं सेवा कर (GST) के लिए पंजीकरण करें और GSTIN प्राप्त करें।",
        eligibility: [
          "निर्धारित सीमा से अधिक टर्नओवर वाले व्यवसायों को आमतौर पर पंजीकरण करना होता है।",
          "कुछ मामलों में स्वैच्छिक पंजीकरण भी संभव है।",
          "वर्तमान नियमों के लिए आधिकारिक पोर्टल जाँचें।",
        ],
        documents: [
          "पैन",
          "आधार",
          "व्यवसाय पता प्रमाण",
          "बैंक खाता विवरण",
          "फोटो और प्राधिकरण दस्तावेज़ (यदि लागू)",
        ],
        steps: [
          ["आधिकारिक GST पोर्टल खोलें", "पता जाँचें।"],
          ["नया पंजीकरण शुरू करें", "पैन और मोबाइल/ईमेल से।"],
          ["फॉर्म भरें और दस्तावेज़ अपलोड करें", "केवल आधिकारिक पोर्टल पर।"],
          ["सत्यापन पूरा करें", "OTP और अन्य चरण।"],
          ["GSTIN प्राप्त करें", "अनुमोदन के बाद।"],
        ],
        fees: "GST पंजीकरण आम तौर पर मुफ़्त है। आधिकारिक पोर्टल जाँचें।"
      }
    },
    {
      id: 'birth-certificate',
      name: 'Birth certificate',
      category: 'Identity & Documents',
      department: 'Registrar of Births and Deaths (local)',
      summary: 'Register a birth and get a birth certificate through the local registrar or your state\'s online portal.',
      keywords: ['birth', 'birth certificate', 'registration', 'child', 'newborn', 'municipal', 'registrar', 'crs'],
      url: 'https://crsorgi.gov.in',
      eligibility: [
        'Births must be registered with the local registrar within the legal time limit. Check your state\'s rule.',
        'Late registration needs extra steps.',
        'Procedures differ by state and by city.'
      ],
      documents: [
        'Hospital birth report or intimation, if the birth was in a hospital',
        'Parents\' ID proof',
        'Address proof',
        'Any extra papers your local office asks for'
      ],
      steps: [
        ['Report the birth', 'The hospital often helps. Otherwise contact the local registrar.'],
        ['Find your local portal', 'Use your state or municipal portal, or the office in person.'],
        ['Fill in the form', 'Enter the details exactly as in the hospital papers.'],
        ['Submit documents', 'Follow the local office instructions.'],
        ['Collect your certificate', 'Download it or collect it from the office.']
      ],
      fees: 'Fees vary by state and by how late the registration is. Check with the local office.',
      hi: {
        name: "जन्म प्रमाण पत्र",
        summary: "जन्म प्रमाण पत्र के लिए आवेदन करें या ऑनलाइन आवेदन की स्थिति जाँचें।",
        eligibility: [
          "माता-पिता या अभिभावक आमतौर पर बच्चे के लिए आवेदन करते हैं।",
          "नियम और समय सीमा राज्य / नगर निगम के अनुसार अलग होती हैं।",
        ],
        documents: [
          "बच्चे का जन्म प्रमाण (अस्पताल रिकॉर्ड)",
          "माता-पिता की पहचान और पते का प्रमाण",
          "आवेदन फॉर्म (स्थानीय प्राधिकरण के अनुसार)",
        ],
        steps: [
          ["स्थानीय / राज्य पोर्टल खोलें", "अपने क्षेत्र का सही पोर्टल चुनें।"],
          ["जन्म पंजीकरण चुनें", "ऑनलाइन या निर्धारित कार्यालय में।"],
          ["फॉर्म भरें और दस्तावेज़ जमा करें", "केवल आधिकारिक चैनल पर।"],
          ["स्थिति ट्रैक करें", "संदर्भ संख्या से।"],
          ["प्रमाण पत्र प्राप्त करें", "ऑनलाइन या कार्यालय से।"],
        ],
        fees: "शुल्क राज्य / नगर निगम के अनुसार अलग हो सकता है। आधिकारिक स्रोत जाँचें।"
      }
    },
    {
      id: 'india-post',
      name: 'India Post (savings, parcels, tracking)',
      category: 'Tax & Money',
      department: 'Department of Posts',
      summary: 'Track a consignment, find a post office and learn about post office services and savings schemes.',
      keywords: ['india post', 'post office', 'speed post', 'parcel', 'track', 'tracking', 'savings', 'postal', 'courier'],
      url: 'https://www.indiapost.gov.in',
      eligibility: [
        'Anyone can use postal services and track consignments.',
        'Savings schemes have their own eligibility rules.',
        'Account opening needs a visit to a post office.'
      ],
      documents: [
        'Consignment or tracking number, to track an item',
        'ID and address proof, to open an account',
        'Photographs, if the post office asks for them'
      ],
      steps: [
        ['Open the official site', 'Check the web address carefully.'],
        ['Choose what you need', 'For example tracking, finding a post office or reading about schemes.'],
        ['Enter your details', 'Use the tracking number for a consignment.'],
        ['Visit the post office', 'Needed for account opening and some services.']
      ],
      fees: 'Postal charges and scheme rules vary. Check the official site or ask at the post office.',
      hi: {
        name: "इंडिया पोस्ट (बचत, पार्सल, ट्रैकिंग)",
        summary: "डाक बचत योजनाएँ, पार्सल भेजना और डाक वस्तुओं को ट्रैक करना।",
        eligibility: [
          "अधिकांश सेवाएँ आम जनता के लिए खुली हैं।",
          "बचत खातों की अपनी पात्रता शर्तें होती हैं।",
        ],
        documents: [
          "पहचान और पते का प्रमाण (खाता खोलने के लिए)",
          "ट्रैकिंग नंबर (पार्सल ट्रैक करने के लिए)",
          "मोबाइल नंबर",
        ],
        steps: [
          ["आधिकारिक इंडिया पोस्ट साइट खोलें", "पता जाँचें।"],
          ["सेवा चुनें", "बचत, पार्सल या ट्रैकिंग।"],
          ["निर्देशों का पालन करें", "केवल आधिकारिक चैनल पर।"],
          ["रसीद / संदर्भ सुरक्षित रखें", "बाद में उपयोग के लिए।"],
        ],
        fees: "शुल्क सेवा के प्रकार पर निर्भर करता है। आधिकारिक साइट जाँचें।"
      }
    },
    {
      id: 'umang',
      name: 'UMANG (many services in one app)',
      category: 'Government Portals',
      department: 'Ministry of Electronics and IT',
      summary: 'Use one official app and website to reach many central and state government services.',
      keywords: ['umang', 'app', 'services', 'portal', 'all services', 'government app', 'digital'],
      url: 'https://web.umang.gov.in',
      eligibility: [
        'Anyone with a mobile number can usually register.',
        'Each service inside has its own eligibility rules.',
        'Not every service is available in every state.'
      ],
      documents: [
        'A mobile number you can access',
        'The details the individual service asks for'
      ],
      steps: [
        ['Open the official site or app', 'Install the app only from your phone\'s official store.'],
        ['Register', 'Use your mobile number.'],
        ['Search for a service', 'Type the service name.'],
        ['Follow the service steps', 'Each service shows its own steps.'],
        ['Check your application status', 'Use the status option inside the app.']
      ],
      fees: 'The app is free. Individual services may charge their own fees.',
      hi: {
        name: "UMANG (एक ऐप में कई सेवाएँ)",
        summary: "UMANG ऐप के माध्यम से कई सरकारी सेवाओं तक पहुँचें।",
        eligibility: [
          "भारत के निवासी आम तौर पर ऐप का उपयोग कर सकते हैं।",
          "प्रत्येक सेवा की अपनी पात्रता हो सकती है।",
        ],
        documents: [
          "मोबाइल नंबर",
          "आधार (कई सेवाओं के लिए)",
          "सेवा के अनुसार अन्य दस्तावेज़",
        ],
        steps: [
          ["UMANG ऐप या साइट खोलें", "आधिकारिक स्रोत से डाउनलोड करें।"],
          ["रजिस्टर / लॉग इन करें", "मोबाइल और OTP से।"],
          ["सेवा खोजें", "सूची या खोज से।"],
          ["आधिकारिक चरणों का पालन करें", "संवेदनशील विवरण केवल ऐप/साइट पर दर्ज करें।"],
        ],
        fees: "ऐप का उपयोग आम तौर पर मुफ़्त है। व्यक्तिगत सेवाओं के शुल्क अलग हो सकते हैं।"
      }
    }
  ];

  MORE_SERVICES.forEach(function (service) {
    service.reviewed = REVIEWED;
    SERVICES.push(service);
  });

  /* Show a "last reviewed" note on every guide page. */
  var baseRenderDetail = window.renderDetail;
  window.renderDetail = function (service) {
    baseRenderDetail(service);
    var verify = document.getElementById('detail-verify-note');
    if (!verify) {
      return;
    }
    var note = document.getElementById('detail-review-note');
    if (!note) {
      note = document.createElement('p');
      note.id = 'detail-review-note';
      note.className = 'small-print';
      verify.insertAdjacentElement('afterend', note);
    }
    note.textContent = service.reviewed
      ? 'Last reviewed: ' + service.reviewed + '. Process-level overview only. Confirm every detail on the official website.'
      : 'Not yet reviewed against official pages.';
  };

  /* Refresh the page so the new services appear. */
  prepareServices();
  renderCategoryFilters();
  renderAll();
  renderSaved();
  openFromHash();
}());
