interface Translations {
  [key: string]: {
    [languageCode: string]: string;
  };
}

export class I18n {
  private translations: Translations = {
    // Welcome screen
    'welcome.title1': {
      en: 'Welcome to TenaTech',
      am: 'ወደ ቴናቴክ እንኳን ደህና መጡ',
      om: 'Baga gara TenaTech dhuftan',
      so: 'Ku soo dhawoow TenaTech',
      ar: 'مرحبًا بكم في تيناتيك',
      fr: 'Bienvenue à TenaTech',
      ti: 'ናብ ቴናቴክ እንቋዕ ብደሓን መጻእኩም'
    },
    'welcome.description1': {
      en: 'Your personal health assistant that provides AI-powered diagnosis based on your symptoms, diet, and location.',
      am: 'በህመም ምልክቶችዎ፣ በምግብዎ እና በአካባቢዎ ላይ በመመስረት በአይ የሚሰራ ምርመራ የሚሰጥ የግል የጤና ረዳትዎ።',
      om: 'Gargaaraa fayyaa dhuunfaa keessan kan AI irratti hundaa\'ee malaammalta keessan, nyaata keessan, fi iddoo keessan irratti hundaa\'ee mirkaneessa.',
      so: 'Kaaliyahaaga caafimaadka ee gaarka ah ee bixiya baaritaanka ku salaysan AI ee ku salaysan calaamadahaaga, cuntooyinka, iyo goobta.',
      ar: 'مساعدك الصحي الشخصي الذي يوفر تشخيصًا مدعومًا بالذكاء الاصطناعي بناءً على أعراضك ونظامك الغذائي وموقعك.',
      fr: 'Votre assistant santé personnel qui fournit un diagnostic alimenté par l\'IA basé sur vos symptômes, votre alimentation et votre localisation.',
      ti: 'ኣብ ምልክታት ሕማምካ፡ መግብኻን ቦታኻን ተመርኲሱ ብኣርቲፊሻል ኢንተለጀንስ ዝሰርሕ መርመራ ዝህብ ናይ ውልቅኻ ሓገዝ ጥዕና።'
    },
    'welcome.title2': {
      en: 'Multilingual Support',
      am: 'በብዙ ቋንቋዎች ድጋፍ',
      om: 'Deeggarsa Afaan Hedduu',
      so: 'Taageerada Luuqadaha Badan',
      ar: 'دعم متعدد اللغات',
      fr: 'Support Multilingue',
      ti: 'ብዙሕ ቋንቋታት ዝድግፍ'
    },
    'welcome.description2': {
      en: 'Access our services in 7 languages: English, Amharic, Afaan Oromo, Somali, Arabic, French, and Tigrinya.',
      am: 'አገልግሎቶቻችንን በ7 ቋንቋዎች ይጠቀሙ፡ እንግሊዝኛ፣ አማርኛ፣ ኦሮምኛ፣ ሱማሊኛ፣ ዓረብኛ፣ ፈረንሳይኛ እና ትግርኛ።',
      om: 'Tajaajilawwan keenya afaan 7 keessatti argadhu: Ingilizii, Amaariffaa, Afaan Oromoo, Somaalee, Arabiffaa, Faransaayiffaa, fi Tigiree.',
      so: 'Hel adeegyadeenna 7 luqadood: Ingiriisi, Amxaari, Afaan Oromo, Soomaali, Carabi, Faransiis, iyo Tigrinya.',
      ar: 'الوصول إلى خدماتنا بـ 7 لغات: الإنجليزية والأمهرية والأورومو والصومالية والعربية والفرنسية والتيغرينية.',
      fr: 'Accédez à nos services en 7 langues: anglais, amharique, afaan oromo, somali, arabe, français et tigrinya.',
      ti: 'ኣገልግሎታትና ብ7 ቋንቋታት ተጠቐም፡ እንግሊዝኛ፡ ኣምሓርኛ፡ ኦሮምኛ፡ ሶማልኛ፡ ዓረብኛ፡ ፈረንሳይኛን ትግርኛን።'
    },
    'welcome.title3': {
      en: 'Personal Health Insights',
      am: 'የግል የጤና ግንዛቤዎች',
      om: 'Hubannoo Fayyaa Dhuunfaa',
      so: 'Aragtiyo Caafimaad oo Shaqsiyeed',
      ar: 'رؤى صحية شخصية',
      fr: 'Aperçus de Santé Personnels',
      ti: 'ናይ ውልቂ ጥዕና ርድኢታት'
    },
    'welcome.description3': {
      en: 'Get personalized health recommendations and keep track of your diagnosis history.',
      am: 'የተለየ የጤና ምክሮችን ያግኙ እና የምርመራ ታሪክዎን ይከታተሉ።',
      om: 'Gorsa fayyaa dhuunfaa argadhu fi seenaa mirkaneessa kee hordofi.',
      so: 'Hel talooyinka caafimaadka ee gaarka ah oo raad ku hay taariikhda baaritaankaaga.',
      ar: 'احصل على توصيات صحية مخصصة وتتبع تاريخ التشخيص الخاص بك.',
      fr: 'Obtenez des recommandations de santé personnalisées et suivez l\'historique de vos diagnostics.',
      ti: 'ናይ ውልቂ ምኽሪ ጥዕና ክትረክብን ታሪኽ መርመራኻ ክትከታተልን ትኽእል።'
    },
    'welcome.skip': {
      en: 'Skip',
      am: 'ዝለል',
      om: 'Darbi',
      so: 'Ka bood',
      ar: 'تخطى',
      fr: 'Passer',
      ti: 'ዘሎ'
    },
    'welcome.next': {
      en: 'Next',
      am: 'ቀጣይ',
      om: 'Itti Aanee',
      so: 'Xiga',
      ar: 'التالي',
      fr: 'Suivant',
      ti: 'ቀጺሉ'
    },
    'welcome.getStarted': {
      en: 'Get Started',
      am: 'ጀምር',
      om: 'Jalqabi',
      so: 'Bilow',
      ar: 'ابدأ',
      fr: 'Commencer',
      ti: 'ጀምር'
    },
    
    // Tabs
    'tabs.home': {
      en: 'Home',
      am: 'መነሻ',
      om: 'Mana',
      so: 'Guriga',
      ar: 'الرئيسية',
      fr: 'Accueil',
      ti: 'መበገሲ'
    },
    'tabs.diagnosis': {
      en: 'Diagnosis',
      am: 'ምርመራ',
      om: 'Mirkaneessa',
      so: 'Baaritaan',
      ar: 'التشخيص',
      fr: 'Diagnostic',
      ti: 'መርመራ'
    },
    'tabs.profile': {
      en: 'Profile',
      am: 'መገለጫ',
      om: 'Profaayilii',
      so: 'Profile',
      ar: 'الملف الشخصي',
      fr: 'Profil',
      ti: 'መለለዪ'
    },
    'tabs.settings': {
      en: 'Settings',
      am: 'ቅንብሮች',
      om: 'Qindaa\'inoota',
      so: 'Goobaha',
      ar: 'الإعدادات',
      fr: 'Paramètres',
      ti: 'ቅጥዕታት'
    },
    
    // Home Screen
    'home.welcome': {
      en: 'Hello, how are you feeling today?',
      am: 'ሰላም፣ ዛሬ እንዴት ይሰማዎታል?',
      om: 'Akkam, har\'a akkam yaadda?',
      so: 'Haye, sidee dareemaysaa maanta?',
      ar: 'مرحبًا، كيف تشعر اليوم؟',
      fr: 'Bonjour, comment vous sentez-vous aujourd\'hui ?',
      ti: 'ሰላም፡ ሎሚ ከመይ ይስማዓካ ኣሎ?'
    },
    'home.headerSubtitle': {
      en: 'Your Health Assistant',
      am: 'የእርስዎ የጤና ረዳት',
      om: 'Gargaaraa Fayyaa Kee',
      so: 'Caawiyahaaga Caafimaadka',
      ar: 'مساعدك الصحي',
      fr: 'Votre Assistant Santé',
      ti: 'ናትካ ሓጋዚ ጥዕና'
    },
    'home.quickActions': {
      en: 'Quick Actions',
      am: 'ፈጣን እርምጃዎች',
      om: 'Tarkaanfiilee Ariifachiisaa',
      so: 'Ficilada Degdega ah',
      ar: 'إجراءات سريعة',
      fr: 'Actions Rapides',
      ti: 'ቅልጡፍ ስጉምትታት'
    },
    'home.newDiagnosis': {
      en: 'New Diagnosis',
      am: 'አዲስ ምርመራ',
      om: 'Mirkaneessa Haaraa',
      so: 'Baaritaan Cusub',
      ar: 'تشخيص جديد',
      fr: 'Nouveau Diagnostic',
      ti: 'ሓድሽ መርመራ'
    },
    'home.healthTips': {
      en: 'Health Tips',
      am: 'የጤና ምክሮች',
      om: 'Gorsa Fayyaa',
      so: 'Talooyinka Caafimaadka',
      ar: 'نصائح صحية',
      fr: 'Conseils Santé',
      ti: 'ምኽሪ ጥዕና'
    },
    'home.recentDiagnoses': {
      en: 'Recent Diagnoses',
      am: 'የቅርብ ጊዜ ምርመራዎች',
      om: 'Mirkaneessawwan Dhiyeenya',
      so: 'Baaritaannada Dhowaan',
      ar: 'التشخيصات الأخيرة',
      fr: 'Diagnostics Récents',
      ti: 'ናይ ቀረባ እዋን መርመራታት'
    },
    'home.viewAll': {
      en: 'View All',
      am: 'ሁሉንም ይመልከቱ',
      om: 'Hunda Ilaali',
      so: 'Dhamaan Fiiri',
      ar: 'عرض الكل',
      fr: 'Voir Tout',
      ti: 'ኩሉ ርአ'
    },
    'home.noDiagnoses': {
      en: 'No diagnoses yet. Start your first health check now.',
      am: 'እስካሁን ምንም ምርመራዎች የሉም። የመጀመሪያ የጤና ምርመራዎን አሁን ይጀምሩ።',
      om: 'Mirkaneessi hanga ammaatti hin jiru. Ilaalcha fayyaa jalqabaa kee amma jalqabi.',
      so: 'Ma jiro weli baaritaano. Bilow baaritaankaaga caafimaadka ee ugu horeeya hadda.',
      ar: 'لا توجد تشخيصات حتى الآن. ابدأ فحصك الصحي الأول الآن.',
      fr: 'Pas encore de diagnostics. Commencez votre premier bilan de santé maintenant.',
      ti: 'ክሳብ ሕጂ ዝኾነ መርመራ የለን። ናይ መጀመርታ መርመራ ጥዕናኻ ሕጂ ጀምር።'
    },
    'home.startDiagnosis': {
      en: 'Start Diagnosis',
      am: 'ምርመራ ጀምር',
      om: 'Mirkaneessa Jalqabi',
      so: 'Bilow Baaritaanka',
      ar: 'ابدأ التشخيص',
      fr: 'Commencer le Diagnostic',
      ti: 'መርመራ ጀምር'
    },
    'home.healthArticle': {
      en: 'Health Article',
      am: 'የጤና ጽሑፍ',
      om: 'Barruulee Fayyaa',
      so: 'Maqaalka Caafimaadka',
      ar: 'مقالة صحية',
      fr: 'Article Santé',
      ti: 'ጽሑፍ ጥዕና'
    },
    'home.articleTitle': {
      en: 'Healthy Eating Habits',
      am: 'ጤናማ የመመገብ ልምዶች',
      om: 'Amaloota Nyaata Fayyaalessa',
      so: 'Caadooyinka Cunitaanka Caafimaadka',
      ar: 'عادات الأكل الصحية',
      fr: 'Habitudes Alimentaires Saines',
      ti: 'ጥዑይ ልምድታት ምግቢ'
    },
    'home.articleSummary': {
      en: 'Learn about the importance of balanced nutrition and how it affects your overall health.',
      am: 'ስለ ተመጣጣኝ ምግብ አስፈላጊነት እና እንዴት በጠቅላላ ጤናዎ ላይ ተጽዕኖ እንደሚያሳድር ይወቁ።',
      om: 'Barbaachisummaa nyaata madaalamaa fi akkamitti fayyaa waliigalaa kee irratti dhiibbaa akka qabu bari.',
      so: 'Baro muhiimadda nafaqada dheelitirka leh iyo sida ay u saameeyso caafimaadkaaga guud.',
      ar: 'تعرف على أهمية التغذية المتوازنة وكيف تؤثر على صحتك العامة.',
      fr: 'Découvrez l\'importance d\'une nutrition équilibrée et comment elle affecte votre santé générale.',
      ti: 'ብዛዕባ ኣገዳስነት ሚዛናዊ ኣመጋግባን ኣብ ጥዕናኻ ዘለዎ ጽልዋን ፍለጥ።'
    },
    'home.readMore': {
      en: 'Read more',
      am: 'ተጨማሪ ያንብቡ',
      om: 'Dabalataan dubbisi',
      so: 'Wax badan ka aqri',
      ar: 'اقرأ المزيد',
      fr: 'Lire plus',
      ti: 'ተወሳኺ ኣንብብ'
    },
    
    // Status Card
    'statusCard.title': {
      en: 'Daily Health Check',
      am: 'የዕለት ጤና ምርመራ',
      om: 'Ilaalcha Fayyaa Guyyaa',
      so: 'Baaritaanka Caafimaadka Maalinlaha',
      ar: 'فحص الصحة اليومي',
      fr: 'Bilan Santé Quotidien',
      ti: 'ዕለታዊ መርመራ ጥዕና'
    },
    'statusCard.description': {
      en: 'Track your symptoms and get personalized health advice.',
      am: 'የበሽታ ምልክቶችዎን ይከታተሉ እና የግል የጤና ምክር ያግኙ።',
      om: 'Mallattoolee kee hordofii gorsa fayyaa dhuunfaa argadhu.',
      so: 'Raad ku hay calaamadahaaga oo hel talo caafimaad oo gaar ah.',
      ar: 'تتبع أعراضك واحصل على نصائح صحية مخصصة.',
      fr: 'Suivez vos symptômes et obtenez des conseils de santé personnalisés.',
      ti: 'ምልክታት ሕማምካ ተኸታተልን ውልቃዊ ምኽሪ ጥዕና ረኽብን።'
    },
    'statusCard.button': {
      en: 'Check Now',
      am: 'አሁን ይፈትሹ',
      om: 'Amma Ilaali',
      so: 'Hadda Hubi',
      ar: 'تحقق الآن',
      fr: 'Vérifier Maintenant',
      ti: 'ሕጂ ምርመራ ግበር'
    },
    
    // Diagnosis
    'diagnosis.title': {
      en: 'Health Diagnosis',
      am: 'የጤና ምርመራ',
      om: 'Mirkaneessa Fayyaa',
      so: 'Baaritaanka Caafimaadka',
      ar: 'تشخيص الصحة',
      fr: 'Diagnostic de Santé',
      ti: 'መርመራ ጥዕና'
    },
    'diagnosis.subtitle': {
      en: 'Please provide your symptoms and any other relevant information for a more accurate diagnosis.',
      am: 'እባክዎ ለትክክለኛ ምርመራ የበሽታ ምልክቶችዎን እና ሌሎች አግባብነት ያላቸውን መረጃዎች ያቅርቡ።',
      om: 'Mee mallattoolee fi odeeffannoo biroo barbaachisaa ta\'e mirkaneessa cimaa argachuuf kenni.',
      so: 'Fadlan bixi calaamadahaaga iyo macluumaad kasta oo kale oo khuseeya si aad u hesho baaritaan ka sax ah.',
      ar: 'يرجى تقديم الأعراض وأي معلومات أخرى ذات صلة للحصول على تشخيص أكثر دقة.',
      fr: 'Veuillez fournir vos symptômes et toute autre information pertinente pour un diagnostic plus précis.',
      ti: 'ብኽብረትካ ንዝያዳ ልክዕ ዝኾነ መርመራ ምልክታት ሕማምካን ካልእ ኣግባብነት ዘለዎ ሓበሬታን ኣቕርብ።'
    },
    'diagnosis.language': {
      en: 'Select Language',
      am: 'ቋንቋ ይምረጡ',
      om: 'Afaan Filadhu',
      so: 'Dooro Luqadda',
      ar: 'اختر اللغة',
      fr: 'Sélectionner la Langue',
      ti: 'ቋንቋ ምረጽ'
    },
    'diagnosis.symptoms': {
      en: 'Your Symptoms',
      am: 'የእርስዎ የበሽታ ምልክቶች',
      om: 'Mallattoolee Kee',
      so: 'Calaamadahaaga',
      ar: 'أعراضك',
      fr: 'Vos Symptômes',
      ti: 'ምልክታት ሕማምካ'
    },
    'diagnosis.symptomsPlaceholder': {
      en: 'Describe your symptoms in detail...',
      am: 'የበሽታ ምልክቶችዎን በዝርዝር ይግለጹ...',
      om: 'Mallattoolee kee haala bal\'inaan ibsi...',
      so: 'Sharax calaamadahaaga si faahfaahsan...',
      ar: 'صف أعراضك بالتفصيل...',
      fr: 'Décrivez vos symptômes en détail...',
      ti: 'ምልክታት ሕማምካ ብዝርዝር ግለጽ...'
    },
    'diagnosis.diet': {
      en: 'Your Diet',
      am: 'የእርስዎ ምግብ',
      om: 'Nyaata Kee',
      so: 'Cuntadaada',
      ar: 'نظامك الغذائي',
      fr: 'Votre Alimentation',
      ti: 'ናትካ ምግቢ'
    },
    'diagnosis.dietPlaceholder': {
      en: 'Describe your eating habits and recent meals...',
      am: 'የምግብ ልማዶችዎን እና የቅርብ ጊዜ ምግቦችዎን ይግለጹ...',
      om: 'Amalota nyaataa keetii fi nyaata dhiyeenya kee ibsi...',
      so: 'Sharax caadooyinka cuntadaada iyo cuntooyin dhowaan...',
      ar: 'صف عاداتك الغذائية والوجبات الأخيرة...',
      fr: 'Décrivez vos habitudes alimentaires et repas récents...',
      ti: 'ልምድታት ምግቢኻን ናይ ቀረባ እዋን ምግብታትካን ግለጽ...'
    },
    'diagnosis.location': {
      en: 'Your Location',
      am: 'የእርስዎ አካባቢ',
      om: 'Iddoo Kee',
      so: 'Goobta',
      ar: 'موقعك',
      fr: 'Votre Localisation',
      ti: 'ቦታኻ'
    },
    'diagnosis.locationPlaceholder': {
      en: 'Enter your city or region...',
      am: 'ከተማዎን ወይም ክልልዎን ያስገቡ...',
      om: 'Magaala ykn naannoo kee galchi...',
      so: 'Geli magaaladaada ama gobolkaaga...',
      ar: 'أدخل مدينتك أو منطقتك...',
      fr: 'Entrez votre ville ou région...',
      ti: 'ከተማኻ ወይ ዞንካ ኣእቱ...'
    },
    'diagnosis.analyzeButton': {
      en: 'Analyze Symptoms',
      am: 'የበሽታ ምልክቶችን ይተንትኑ',
      om: 'Mallattoolee Xiinxali',
      so: 'Falanqee Calaamadaha',
      ar: 'تحليل الأعراض',
      fr: 'Analyser les Symptômes',
      ti: 'ምልክታት ሕማም ተንትን'
    },
    'diagnosis.addApiKey': {
      en: 'Add API Key',
      am: 'የኤፒአይ ቁልፍ ያክሉ',
      om: 'Qubeessa API Dabaluu',
      so: 'Ku dar API Key',
      ar: 'إضافة مفتاح API',
      fr: 'Ajouter une Clé API',
      ti: 'ናይ API መፍትሕ ወስኽ'
    },
    'diagnosis.changeApiKey': {
      en: 'Change API Key',
      am: 'የኤፒአይ ቁልፍ ይቀይሩ',
      om: 'Qubeessa API Jijjiiruu',
      so: 'Beddel API Key',
      ar: 'تغيير مفتاح API',
      fr: 'Changer la Clé API',
      ti: 'ናይ API መፍትሕ ቀይር'
    },
    'diagnosis.errorSymptoms': {
      en: 'Please describe your symptoms',
      am: 'እባክዎ የበሽታ ምልክቶችዎን ይግለጹ',
      om: 'Mee mallattoolee kee ibsi',
      so: 'Fadlan sharax calaamadahaaga',
      ar: 'يرجى وصف الأعراض الخاصة بك',
      fr: 'Veuillez décrire vos symptômes',
      ti: 'ብኽብረትካ ምልክታት ሕማምካ ግለጽ'
    },
    'diagnosis.errorApiKey': {
      en: 'Please add an API key',
      am: 'እባክዎ የኤፒአይ ቁልፍ ያክሉ',
      om: 'Mee qubeessa API dabaluu',
      so: 'Fadlan ku dar API Key',
      ar: 'يرجى إضافة مفتاح API',
      fr: 'Veuillez ajouter une clé API',
      ti: 'ብኽብረትካ ናይ API መፍትሕ ወስኽ'
    },
    'diagnosis.errorGeneric': {
      en: 'An error occurred. Please try again',
      am: 'ስህተት ተከስቷል። እባክዎ እንደገና ይሞክሩ',
      om: 'Dogoggora uumameera. Mee irra deebi\'ii yaali',
      so: 'Khalad ayaa dhacay. Fadlan mar kale isku day',
      ar: 'حدث خطأ. يرجى المحاولة مرة أخرى',
      fr: 'Une erreur s\'est produite. Veuillez réessayer',
      ti: 'ጌጋ ተፈጢሩ። ብኽብረትካ እንደገና ፈትን'
    },
    
    // Profile
    'profile.title': {
      en: 'My Profile',
      am: 'የእኔ መገለጫ',
      om: 'Profaayilii Koo',
      so: 'Profile-kayga',
      ar: 'ملفي الشخصي',
      fr: 'Mon Profil',
      ti: 'ናተይ መለለዪ'
    },
    'profile.userName': {
  en: 'TenaTech User',
  am: 'ተናቴክ ተጠቃሚ',
  om: 'Fayyadamaa TenaTech',
  so: 'Isticmaalaha TenaTech',
  ar: 'مستخدم تينا تك',
  fr: 'Utilisateur TenaTech',
  ti: 'ተጠቃሚ ተናቴክ'
},

    'profile.diagnoses': {
      en: 'Diagnoses',
      am: 'ምርመራዎች',
      om: 'Mirkaneessawwan',
      so: 'Baaritaano',
      ar: 'التشخيصات',
      fr: 'Diagnostics',
      ti: 'መርመራታት'
    },
    'profile.lastCheck': {
      en: 'Last Check',
      am: 'የመጨረሻ ምርመራ',
      om: 'Ilaalcha Dhumaa',
      so: 'Hubinta Ugu Dambaysay',
      ar: 'آخر فحص',
      fr: 'Dernier Contrôle',
      ti: 'ናይ መወዳእታ መርመራ'
    },
    'profile.diagnosisHistory': {
      en: 'Diagnosis History',
      am: 'የምርመራ ታሪክ',
      om: 'Seenaa Mirkaneessaa',
      so: 'Taariikhda Baaritaanka',
      ar: 'تاريخ التشخيص',
      fr: 'Historique des Diagnostics',
      ti: 'ታሪኽ መርመራ'
    },
    'profile.shareResults': {
      en: 'Share Results',
      am: 'ውጤቶችን ያጋሩ',
      om: 'Bu\'aawwan Qoodi',
      so: 'La Wadaag Natiijooyinka',
      ar: 'مشاركة النتائج',
      fr: 'Partager les Résultats',
      ti: 'ውጽኢታት ኣካፍል'
    },
    'profile.settings': {
      en: 'Settings',
      am: 'ቅንብሮች',
      om: 'Qindaa\'inoota',
      so: 'Goobaha',
      ar: 'الإعدادات',
      fr: 'Paramètres',
      ti: 'ቅጥዕታት'
    },
    'profile.disclaimer': {
      en: 'This application does not provide medical advice. Always consult with a qualified healthcare provider for medical concerns.',
      am: 'ይህ መተግበሪያ የህክምና ምክር አይሰጥም። ሁልጊዜ ለህክምና ስጋቶች ከብቁ የጤና እንክብካቤ አቅራቢ ጋር ይመካከሩ።',
      om: 'Applikeeshan kun gorsa yaalaa hin kennu. Yeroo hundaa yaaddoo yaalaa qabdu gargaaraa fayyaa ga\'umsa qabu mariyadhu.',
      so: 'Ablikeeshanigan ma bixiyo talo caafimaad. Had iyo jeer la tasho bixiye daryeel caafimaad oo xirfad leh welwelada caafimaadka.',
      ar: 'هذا التطبيق لا يقدم نصائح طبية. استشر دائمًا مقدم رعاية صحية مؤهل للمخاوف الطبية.',
      fr: 'Cette application ne fournit pas de conseils médicaux. Consultez toujours un professionnel de la santé qualifié pour les préoccupations médicales.',
      ti: 'እዚ መተግበሪ ሕክምናዊ ምኽሪ ኣይህብን እዩ። ንሕክምናዊ ሻቅሎታት ዘለኩም ኩሉ ግዜ ምስ ብቑዕ ሰብ ሞያ ክንክን ጥዕና ተዘራረቡ።'
    },
    
    // Settings
    'settings.title': {
      en: 'Settings',
      am: 'ቅንብሮች',
      om: 'Qindaa\'inoota',
      so: 'Goobaha',
      ar: 'الإعدادات',
      fr: 'Paramètres',
      ti: 'ቅጥዕታት'
    },
    'settings.appearance': {
      en: 'Appearance',
      am: 'መልክ',
      om: 'Mul\'ata',
      so: 'Muuqaalka',
      ar: 'المظهر',
      fr: 'Apparence',
      ti: 'ትርኢት'
    },
    'settings.lightTheme': {
      en: 'Light Theme',
      am: 'ነጭ ገጽታ',
      om: 'Teemaa Ifaa',
      so: 'Muuqaalka Iftiinka',
      ar: 'مظهر فاتح',
      fr: 'Thème Clair',
      ti: 'ብርሃን ዓይነት'
    },
    'settings.darkTheme': {
      en: 'Dark Theme',
      am: 'ጨለማ ገጽታ',
      om: 'Teemaa Dukkana',
      so: 'Muuqaalka Madow',
      ar: 'مظهر داكن',
      fr: 'Thème Sombre',
      ti: 'ጸልማት ዓይነት'
    },
    'settings.systemTheme': {
      en: 'System Theme',
      am: 'የስርዓት ገጽታ',
      om: 'Teemaa Sirna',
      so: 'Muuqaalka Sistamka',
      ar: 'مظهر النظام',
      fr: 'Thème Système',
      ti: 'ናይ ስርዓት ዓይነት'
    },
    'settings.language': {
      en: 'Language',
      am: 'ቋንቋ',
      om: 'Afaan',
      so: 'Luqadda',
      ar: 'اللغة',
      fr: 'Langue',
      ti: 'ቋንቋ'
    },
    'settings.selectLanguage': {
      en: 'Select Language',
      am: 'ቋንቋ ይምረጡ',
      om: 'Afaan Filadhu',
      so: 'Dooro Luqadda',
      ar: 'اختر اللغة',
      fr: 'Sélectionner la Langue',
      ti: 'ቋንቋ ምረጽ'
    },
    'settings.apiSettings': {
      en: 'API Settings',
      am: 'የኤፒአይ ቅንብሮች',
      om: 'Qindaa\'inoota API',
      so: 'Goobaha API',
      ar: 'إعدادات API',
      fr: 'Paramètres API',
      ti: 'ናይ API ቅጥዕታት'
    },
    'settings.apiKey': {
      en: 'API Key',
      am: 'የኤፒአይ ቁልፍ',
      om: 'Qubeessa API',
      so: 'API Key',
      ar: 'مفتاح API',
      fr: 'Clé API',
      ti: 'ናይ API መፍትሕ'
    },
    'settings.apiKeyConfigured': {
      en: 'Configured',
      am: 'ተዋቅሯል',
      om: 'Qindaa\'eera',
      so: 'La habeeyay',
      ar: 'تم التكوين',
      fr: 'Configuré',
      ti: 'ተቀሪጹ'
    },
    'settings.apiKeyMissing': {
      en: 'Not configured',
      am: 'አልተዋቀረም',
      om: 'Hin qindaa\'amne',
      so: 'Lama habeyn',
      ar: 'لم يتم التكوين',
      fr: 'Non configuré',
      ti: 'ኣይተቀረጸን'
    },
    'settings.about': {
      en: 'About',
      am: 'ስለ',
      om: 'Waa\'ee',
      so: 'Ku saabsan',
      ar: 'حول',
      fr: 'À propos',
      ti: 'ብዛዕባ'
    },
    'settings.aboutApp': {
      en: 'About TenaTech',
      am: 'ስለ ቴናቴክ',
      om: 'Waa\'ee TenaTech',
      so: 'Ku saabsan TenaTech',
      ar: 'حول تيناتيك',
      fr: 'À propos de TenaTech',
      ti: 'ብዛዕባ ቴናቴክ'
    },
    'settings.help': {
      en: 'Help & Support',
      am: 'እገዛ እና ድጋፍ',
      om: 'Gargaarsaa fi Deeggarsa',
      so: 'Caawimaad & Taageerada',
      ar: 'المساعدة والدعم',
      fr: 'Aide et Support',
      ti: 'ሓገዝን ደገፍን'
    },
    'settings.version': {
      en: 'Version {version}',
      am: 'ቅጂ {version}',
      om: 'Fooyya\'aa {version}',
      so: 'Nooca {version}',
      ar: 'الإصدار {version}',
      fr: 'Version {version}',
      ti: 'ዝርገት {version}'
    },
    
    // Language selector
    'languageSelector.title': {
      en: 'Select Language',
      am: 'ቋንቋ ይምረጡ',
      om: 'Afaan Filadhu',
      so: 'Dooro Luqadda',
      ar: 'اختر اللغة',
      fr: 'Sélectionner la Langue',
      ti: 'ቋንቋ ምረጽ'
    },
    'languages.en': {
      en: 'English',
      am: 'እንግሊዘኛ',
      om: 'Ingilizii',
      so: 'Ingiriisi',
      ar: 'الإنجليزية',
      fr: 'Anglais',
      ti: 'እንግሊዝኛ'
    },
    'languages.am': {
      en: 'Amharic',
      am: 'አማርኛ',
      om: 'Amaariffaa',
      so: 'Amxaari',
      ar: 'الأمهرية',
      fr: 'Amharique',
      ti: 'ኣምሓርኛ'
    },
    'languages.om': {
      en: 'Afaan Oromo',
      am: 'ኦሮምኛ',
      om: 'Afaan Oromoo',
      so: 'Afaan Oromo',
      ar: 'الأورومو',
      fr: 'Afaan Oromo',
      ti: 'ኦሮምኛ'
    },
    'languages.so': {
      en: 'Somali',
      am: 'ሱማሊኛ',
      om: 'Somaalee',
      so: 'Soomaali',
      ar: 'الصومالية',
      fr: 'Somali',
      ti: 'ሶማልኛ'
    },
    'languages.ar': {
      en: 'Arabic',
      am: 'ዓረብኛ',
      om: 'Arabiffaa',
      so: 'Carabi',
      ar: 'العربية',
      fr: 'Arabe',
      ti: 'ዓረብኛ'
    },
    'languages.fr': {
      en: 'French',
      am: 'ፈረንሳይኛ',
      om: 'Faransaayiffaa',
      so: 'Faransiis',
      ar: 'الفرنسية',
      fr: 'Français',
      ti: 'ፈረንሳይኛ'
    },
    'languages.ti': {
      en: 'Tigrinya',
      am: 'ትግርኛ',
      om: 'Tigiree',
      so: 'Tigrinya',
      ar: 'التيغرينية',
      fr: 'Tigrinya',
      ti: 'ትግርኛ'
    },
   'healthArticle.title': {
  en: 'Health Article',
  am: 'የጤና መጣጥፎች',
  om: 'Barruu Fayyaa',
  so: 'Qoraallada Caafimaadka',
  ar: 'مقالة صحية',
  fr: 'Article de Santé',
  ti: 'ጽሑፍ ጥዕና'
},
'healthArticle.date': {
  en: 'Date',
  am: 'ቀን',
  om: 'Guyyaa',
  so: 'Taariikhda',
  ar: 'التاريخ',
  fr: 'Date',
  ti: 'ዕለት'
},
'healthArticle.intro': {
  en: 'Introduction',
  am: 'መግቢያ',
  om: 'Seensa',
  so: 'Hordhac',
  ar: 'مقدمة',
  fr: 'Introduction',
  ti: 'መግቢ'
},
'healthArticle.section1Title': {
  en: 'Section 1',
  am: 'ክፍል 1',
  om: 'Kutaa 1',
  so: 'Qaybta 1aad',
  ar: 'القسم 1',
  fr: 'Section 1',
  ti: 'ክፍሊ 1'
},
'healthArticle.section1Content': {
  en: 'A balanced diet provides the nutrients your body needs to work effectively. Without balanced nutrition, your body is more prone to disease, infection, fatigue, and low performance.',
  am: 'ሚዛናዊ መመገብ ለአካልዎ አስፈላጊ የሆኑ ንጥረ ነገሮችን ያቅርባል። ሚዛናዊ እንቅስቃሴ ያለው ምግብ ባይኖር ሰው ከበሽታ፣ ከበካልነት፣ ከድካም እና ከዝቅተኛ አፈፃፀም ጋር ይጋጨናል።',
  om: 'Soorata madaalawaa ta’e qaama namaaf soorata barbaachisu ni laataa. Yoo nyaata madaalawaa hin nyaanne, qaamni keenya dhukkuba, dadhabina fi hanqina hojiitiif saaxilama.',
  so: 'Cunto isku dheeli tiran waxay bixisaa nafaqooyinka jirkaaga u baahan yahay si uu si hufan u shaqeeyo. Haddii nafaqadaas la waayo, jidhkaaga wuxuu u nugul yahay cudurro, caajis, iyo hoos u dhac ku yimaada waxqabadka.',
  ar: 'يوفر النظام الغذائي المتوازن العناصر الغذائية التي يحتاجها جسمك ليعمل بشكل فعال. بدون تغذية متوازنة، يكون جسمك أكثر عرضة للإصابة بالأمراض والعدوى والتعب وضعف الأداء.',
  fr: 'Une alimentation équilibrée fournit les nutriments nécessaires au bon fonctionnement de votre corps. Sans une nutrition adéquate, le corps est plus vulnérable aux maladies, infections, fatigue et faibles performances.',
  ti: 'መሳን ዘለዎ መመገቢ ኣብ ነቲ ናይ ኣካልካ ስራሕ ንዝያዳ ዝግበር ንተፈላለዩ ንጥረ ነገራት ይሃብ። መሳን ዘይምነት ምግቢ ኣካልካ ሕማም፣ ድኻም፣ ዝተቐነሰ ምርካብ ኣብ ዕድል ይኣክል።'
},
  'healthArticle.section2Title': {
    en: 'Section 2',
    am: 'ክፍል 2',
    om: 'Kutaa 2',
    so: 'Qaybta 2aad',
    ar: 'القسم 2',
    fr: 'Section 2',
    ti: 'ክፍሊ 2'
  },    
  'healthArticle.section2Content': {
  en: 'A balanced diet includes carbohydrates for energy, proteins for growth and repair, fats for cell function, vitamins and minerals for immunity and development, and water for hydration and digestion.',
  am: 'ሚዛናዊ መመገብ ለኃይል ካርቦሃይድሬቶችን፣ ለእድገትና ለመጠገን ፕሮቲኖችን፣ ለሴል ስራ ስርዓት ስለሚሆኑ ስብን፣ ለኢምዩኒቲ እና ለአካል እድገት ቫይታሚኖችንና ማይነራሎችን፣ እና ለመሙላትና ለመፈወስ ውሃን ያካትታል።',
  om: 'Soorata madaalawaa keessatti kaarboohayidireetii humnaaf, pirootiinii guddina fi suphaa qaamaa, dhingata hojii seelii fi nyaata biroo, vitaminoota fi miniraalota ittisa dhukkubaa fi guddina qaamaaf, akkasumas bishaan dhugaatii fi bulluquu barbaachisaa ta’e ni argama.',
  so: 'Cunto dheeli tiran waxa ku jira karbohaydraytyo si ay tamar u siiyaan, borotiinno korriin iyo dayactir, dufan shaqada unugyada, fiitamiino iyo macdan nafaqo leh si jirku u kobco, iyo biyo si uu jidhku u ahaado mid fayo qabo.',
  ar: 'يشمل النظام الغذائي المتوازن الكربوهيدرات للطاقة، البروتينات للنمو والإصلاح، الدهون لوظيفة الخلايا، الفيتامينات والمعادن للمناعة والنمو، والماء للترطيب والهضم.',
  fr: 'Une alimentation équilibrée comprend des glucides pour l’énergie, des protéines pour la croissance et la réparation, des graisses pour la fonction cellulaire, des vitamines et minéraux pour l’immunité et le développement, ainsi que de l’eau pour l’hydratation et la digestion.',
  ti: 'መሳን ዘለዎ መመገቢ ካርቦሃይድሬት ንናይ ኃይል ትሕዝቶ፣ ፕሮቲን ንእድገትን ምጠጋጋን፣ ስብ ንንተደላይ ዕላማ፣ ቫይታሚንን ማይነራልን ንተቐዳውነትን እድገትን፣ እንታይ ውሃ ንምሙላትን ምሕካምን ይካተት።'
},
'healthArticle.section3Title': {
  en: 'Tips for Maintaining a Balanced Diet',
  am: 'ሚዛናዊ መመገብ ለመጠበቅ ምክሮች',
  om: 'Gorsa Soorata Madaalawaa Eeguu',
  so: 'Talooyin ku Saabsan Cunto Dheeli Tirran',
  ar: 'نصائح للحفاظ على نظام غذائي متوازن',
  fr: 'Conseils pour Maintenir une Alimentation Équilibrée',
  ti: 'መሳን ዘለዎ መመገቢ ንምጠባብ'
},
'healthArticle.section3Content': {
  en: 'Plan your meals ahead of time, include a variety of foods in your diet, control portion sizes, avoid excessive sugar and salt, and stay hydrated by drinking enough water every day.',
  am: 'ምግብዎን በቅድሚያ ያዘጋጁ፣ በተለያዩ እንደ ሆኑ የምግብ አይነቶች ያካትቱ፣ መጠኑን ይቆጥቡ፣ በስፋት ስኳርና ጨው ከመጠቀም ይቆጡ፣ በየቀኑ ውሃ በበቂ መጠን በመጠጣት ራሳችሁን ያጠጉ።',
  om: 'Soorata kee dura qopheessi, nyaata gosa garaagaraa fayyadami, akaakuu nyaataa madaali, zayitii fi shukaraa baayʼisuu irraa of qusadhu, akkasumas guyyaa guyyaan bishaan gahaa dhugi.',
  so: 'Cuntooyinkaaga sii qorshee, ku dar noocyo kala duwan, xakamee qadarka aad cunayso, iska ilaali sokorta iyo cusbada xad-dhaafka ah, una biyo bax si joogto ah adiga oo cabaya biyo ku filan maalin kasta.',
  ar: 'خطط لوجباتك مسبقًا، وأدرج مجموعة متنوعة من الأطعمة، وتحكم في حجم الحصص، وتجنب السكر والملح الزائدين، وابقَ رطبًا بشرب كمية كافية من الماء يوميًا.',
  fr: 'Planifiez vos repas à l’avance, intégrez une variété d’aliments, contrôlez les portions, évitez l’excès de sucre et de sel, et restez hydraté en buvant suffisamment d’eau chaque jour.',
  ti: 'መመገቢ ኣብ ቅድመ ንትዕዝብ፣ ናይ ተፈላለዩ ዓይነት ምግቢ ኣካትተ፣ መጠን ኣትውሕዝ፣ ስኳርን ጨውን ብምትሕትሓት ትሕልፉ፣ ከምኡውን ዕለታዊ ውሃ ብበቂ መጠን ንምጠጣት ትርጉ።'
},
'healthArticle.conclusion': {
  en: 'Adopting a balanced diet is essential for maintaining good health and preventing diseases. Start making small changes today for a healthier tomorrow.',
  am: 'ሚዛናዊ መመገብ ጤና መጠበቅና በሽታዎችን መከላከል ለማድረግ አስፈላጊ ነው። ከዛሬ ጀምሮ እንደገና አነስተኛ ለውጦችን አድርጉ ለጤናማ ነገ ይዘው።',
  om: 'Soorata madaalawaa fudhachuun fayyaa gaarii eeguu fi dhukkuboota ittisuuf murteessaadha. Har’a jijjiirama xiqqoo jalqabi, boru fayyaa ta’uuf.',
  so: 'Qaadashada cunto dheeli tiran waa muhiim si loo ilaaliyo caafimaadka wanaagsan loona hortago cudurada. Bilow isbeddel yar maanta si aad u hesho berri caafimaad qaba.',
  ar: 'اعتماد نظام غذائي متوازن ضروري للحفاظ على صحة جيدة والوقاية من الأمراض. ابدأ بإجراء تغييرات صغيرة اليوم من أجل غد أكثر صحة.',
  fr: 'Adopter une alimentation équilibrée est essentiel pour maintenir une bonne santé et prévenir les maladies. Commencez à faire de petits changements dès aujourd’hui pour un avenir plus sain.',
  ti: 'መሳን ዘለዎ መመገቢ ንጤና ጥራይን ሕማማት ንምክላስ ኣስፈላጊ እዩ። ካብ ሎሚ ጀምሮ ኣነስተኛ ለውጢ ኣድርግ ንጤናማ ነገ ተጻወት።'
},
 'about.title': {
      en: "About Us",
      am: "ስለ እኛ",
      om: "Nuti Waa'ee Keenya",
      so: "Nagu Saabsan",
      ar: "معلومات عنا",
      fr: "À propos de nous",
      ti: "ንእኛ ዘለና"
    },
    "about.intro": {
      en: "BrightMindGuide is committed to supporting students worldwide with quality educational content.",
      am: "BrightMindGuide ተማሪዎችን በአለም አቀፍ ደረጃ በጥራት ያለው ትምህርት ይደግፋል።",
      om: "BrightMindGuide barattoota addunyaa maraaf deeggarsa barnootaa qulqullina qabu kennuuf jira.",
      so: "BrightMindGuide wuxuu u heellan yahay inuu taageero ardayda adduunka oo dhan leh waxbarasho tayo leh.",
      ar: "BrightMindGuide ملتزم بدعم الطلاب حول العالم بمحتوى تعليمي عالي الجودة.",
      fr: "BrightMindGuide s'engage à soutenir les étudiants du monde entier avec un contenu éducatif de qualité.",
      ti: "BrightMindGuide ተማሪን ብጥራት ትምህርቲ ኣብ ዓለም አቀፍ እንተገዳለዉ ይደግፋል።"
    },
    "about.featuresTitle": {
      en: "Our Features",
      am: "የእኛ ባህሪያት",
      om: "Amala Keenya",
      so: "Astaamaha Waxaan Leenahay",
      ar: "مميزاتنا",
      fr: "Nos fonctionnalités",
      ti: "ባህሪናታትና"
    },
    "about.featuresContent": {
      en: "Interactive lessons, extensive study guides, multilingual support, and personalized learning paths.",
      am: "እንቅስቃሴ ትምህርቶች፣ አሰፋላሊ የትምህርት መምሪያዎች፣ በብዙ ቋንቋዎች ድጋፍ፣ እና የግል ትምህርት መንገዶች።",
      om: "Barnoota wal-qunnamtii, qajeelfama barnootaa bal’aa, deeggarsa afaan hedduu, fi kallattii barnoota dhuunfaa.",
      so: "Casharro is dhexgal ah, hagayaal waxbarasho oo ballaaran, taageero luqado badan, iyo waddooyin waxbarasho oo shaqsiyeed.",
      ar: "دروس تفاعلية، أدلة دراسية شاملة، دعم متعدد اللغات، ومسارات تعلم مخصصة.",
      fr: "Leçons interactives, guides d'étude étendus, support multilingue et parcours d'apprentissage personnalisés.",
      ti: "ተዋህዶ ትምህርቲ፣ ሰፊ መመሪያ ምሕዳርታት፣ ብቋንቋ ዝተሰማማዕ ድጋፍን፣ ሓላፍነት ዝተመርጸ መምህርቲ መንገዶታት።"
    },
    "about.languageSupportTitle": {
      en: "Language Support",
      am: "የቋንቋ ድጋፍ",
      om: "Deeggarsa Afaanii",
      so: "Taageerada Luqadda",
      ar: "دعم اللغات",
      fr: "Support linguistique",
      ti: "ድጋፍ ቋንቋ"
    },
    "about.languageSupportContent": {
      en: "Our platform supports multiple languages including English, Amharic, Oromo, Somali, Arabic, French, and Tigrinya.",
      am: "መድረካችን በእንግሊዝኛ፣ አማርኛ፣ ኦሮምኛ፣ ሶማልኛ፣ ዓረብኛ፣ ፈረንሳይኛ እና ትግርኛ ቋንቋዎች ይደግፋል።",
      om: "Bakka keenya afaan Ingilizii, Amaariffaa, Oromiffaa, Somaaliiffaa, Arabiffaa, Faransaayiffaa fi Tigrinya dabalatee afaan hedduu deeggara.",
      so: "Madalkayagu wuxuu taageeraa luqado badan oo ay ku jiraan Ingiriisi, Amxaari, Oromo, Soomaali, Carabi, Faransiis, iyo Tigrinya.",
      ar: "منصتنا تدعم عدة لغات تشمل الإنجليزية، الأمهرية، الأورومية، الصومالية، العربية، الفرنسية، والتيغرينية.",
      fr: "Notre plateforme prend en charge plusieurs langues dont l'anglais, l'amharique, l'oromo, le somali, l'arabe, le français et le tigrigna.",
      ti: "መድረኻታችን ብቋንቋታት ሓደሽቲ እንተኾይኑ እንግሊዝኛ፣ አማርኛ፣ ኦሮሞ፣ ሶማሊ፣ ዓረብኛ፣ ፈረንሳይኛን ትግርኛን ይደግፋል።"
    },
    "about.contactTitle": {
      en: "Contact Us",
      am: "ያግኙን",
      om: "Nu Qunnami",
      so: "Nagala Soo Xiriir",
      ar: "اتصل بنا",
      fr: "Contactez-nous",
      ti: "ንናይተኛ ኣድራሻ"
    },
    "about.contactContent": {
      en: "For inquiries and support, email us at support@brightmindguide.com or call +123-456-7890.",
      am: "ለጥያቄዎችና ድጋፍ በኢሜል support@brightmindguide.com ወይም +123-456-7890 ይደውሉን።",
      om: "Gaaffii fi deeggarsaaf, emailiin nu qunnamaa: support@brightmindguide.com ykn bilbilaa +123-456-7890.",
      so: "Su’aalo iyo taageero, noo soo dir email support@brightmindguide.com ama wac +123-456-7890.",
      ar: "للاستفسارات والدعم، راسلنا عبر البريد الإلكتروني support@brightmindguide.com أو اتصل على +123-456-7890.",
      fr: "Pour toute question et support, envoyez-nous un email à support@brightmindguide.com ou appelez le +123-456-7890.",
      ti: "ንምጥያቕን ሓገዝን ኢሜይል support@brightmindguide.com ኣወይ በለ +123-456-7890 ይደውሉ።"
    },
    "about.teamTitle": {
      en: "Meet Our Team",
      am: "ቡድናችንን ያውቁ",
      om: "Hojjettoota Keenya",
      so: "Kooxdayada Kula Kulmay",
      ar: "تعرف على فريقنا",
      fr: "Rencontrez notre équipe",
      ti: "ቡድናታትና ተገናኙ"
    },
    "about.teamDescription": {
      en: "A dedicated group of educators and developers passionate about delivering quality education.",
      am: "በጥራት ትምህርት ለማቅረብ የተሰጠ ቡድን ተማሪና አሰራር አባላት ነን።",
      om: "Garee barsiisota fi misoomtoota qulqullina barnootaa dhiyeessuuf hawwii qaban.",
      so: "Kooxda macalimiinta iyo horumariyeyaasha oo ka go'an inay bixiyaan waxbarasho tayo leh.",
      ar: "فريق مكرس من المعلمين والمطورين المتحمسين لتقديم تعليم عالي الجودة.",
      fr: "Une équipe dévouée d'éducateurs et de développeurs passionnés par la qualité de l'éducation.",
      ti: "ቡድን ተምህራንን ኣባላት ኣሰራር ዝተፈላለየ ምስ ጥራት ትምህርቲ ምምጻእ እዩ።"
    },
    "about.missionTitle": {
      en: "Our Mission",
      am: "ተልዕኮታችን",
      om: "Miseensa Keenya",
      so: "Himiladeena",
      ar: "مهمتنا",
      fr: "Notre mission",
      ti: "ተልዕኮታችን"
    },
    "about.description": {
      en: "BrightMindGuide aims to empower learners by providing accessible, engaging, and comprehensive educational resources.",
      am: "BrightMindGuide ተማሪዎችን በቀላሉ የሚያገኙ ፣ እንቅስቃሴ ያለው እና ሰፊ ትምህርት ምንጮች በመስጠት ለማድረግ ይተጋል።",
      om: "BrightMindGuide barattootaaf madda barnootaa salphaa, hawwataa fi bal’inaa kennuuf karoorfate.",
      so: "BrightMindGuide waxay ujeeddadeedu tahay inay awood siiso ardayda iyadoo bixisa ilo waxbarasho oo la heli karo, xiiso leh, oo dhameystiran.",
      ar: "يهدف BrightMindGuide إلى تمكين المتعلمين من خلال توفير موارد تعليمية سهلة الوصول وجذابة وشاملة.",
      fr: "BrightMindGuide vise à autonomiser les apprenants en fournissant des ressources éducatives accessibles, engageantes et complètes.",
      ti: "BrightMindGuide ተምህራንን ቀሊሉ ዝተሰማምዐ ፣ ሓላፍነት ዝተሞላእ ትምህርቲ ምንጮታት ምስ ምሕጻም እዩ።"
    },
    "diagnosisDetails.title": {
    en: "Diagnosis Details",
    am: "የምርመራ ዝርዝሮች",
    om: "Faayidaalee Qorannoo",
    so: "Faahfaahinta Baaritaanka",
    ar: "تفاصيل التشخيص",
    fr: "Détails du diagnostic",
    ti: "ዝርዝር ምርመራ"
  },
  "diagnosisDetails.confidence": {
    en: "Diagnosis Confidence Level",
    am: "የምርመራ እምነት ደረጃ",
    om: "Sadarkaa Amantaa Qorannoo",
    so: "Heerka Kalsoonida Baaritaanka",
    ar: "مستوى ثقة التشخيص",
    fr: "Niveau de confiance du diagnostic",
    ti: "ደረጃ እምነት ምርመራ"
  },
  "diagnosisDetails.symptoms": {
    en: "Reported Symptoms",
    am: "የተገለጹ ምልክቶች",
    om: "Mallattoo mul’atan",
    so: "Astaamaha la soo sheegay",
    ar: "الأعراض المبلغ عنها",
    fr: "Symptômes signalés",
    ti: "ምልክታት ዝተኣመሰሉ"
  },
  "diagnosisDetails.diet": {
    en: "Recommended Diet",
    am: "የሚመከረው መመገቢያ",
    om: "Soorata Gorsaa",
    so: "Cuntada La Taliyay",
    ar: "النظام الغذائي الموصى به",
    fr: "Régime alimentaire recommandé",
    ti: "መመገቢ ዝምክር ተተወ"
  },
  "diagnosisDetails.location": {
    en: "Nearest Health Facility",
    am: "ቅርብ ያለ የጤና ተቋም",
    om: "Bakki Fayyaa Si Dhiyoo",
    so: "Xarunta Caafimaad ee Kuugu Dhow",
    ar: "أقرب مرفق صحي",
    fr: "Établissement de santé le plus proche",
    ti: "ቅሩብ ዝርከብ የጤና ተቋም"
  },
  "diagnosisDetails.recommendations": {
    en: "Health Recommendations",
    am: "የጤና ምክሮች",
    om: "Gorsa Fayyaa",
    so: "Talooyin Caafimaad",
    ar: "توصيات صحية",
    fr: "Recommandations de santé",
    ti: "ምክራት ጤና"
  },
  "diagnosisDetails.disclaimer": {
    en: "This diagnosis is generated by AI and should not replace professional medical advice.",
    am: "ይህ ምርመራ በአርቲፊሻል ኢንተሊጀንስ ተመስርቶ ሲሆን የሐኪም ሙያዊ ምክርን መተካት አይችልም።",
    om: "Qorannoon kun AI’n qophaa’e malee gorsa ogeessa fayyaa bakka bu’uu hin danda’u.",
    so: "Baaritaankan waxaa abuuray AI waana in uusan beddelin talada caafimaad ee dhabta ah.",
    ar: "هذا التشخيص تم بواسطة الذكاء الاصطناعي ولا يجب أن يحل محل الاستشارة الطبية المتخصصة.",
    fr: "Ce diagnostic est généré par une IA et ne doit pas remplacer un avis médical professionnel.",
    ti: "እዚ ምርመራ ብሓላፊ ኤአይ ተፈጢሩ እዩ፣ ንናይ ሕክምና ባህላዊ ምኽሪ መተካት ኣይክእልን።"
  },
  "diagnosisHistory.title": {
    en: "Diagnosis History",
    am: "የምርመራ ታሪክ",
    om: "Seenaa Qorannoo",
    so: "Taariikhda Baaritaanka",
    ar: "سجل التشخيصات",
    fr: "Historique des diagnostics",
    ti: "ታሪኽ ምርመራ"
  },
  "diagnosisHistory.clearHistory": {
    en: "Clear History",
    am: "ታሪኩን ማጥፋት",
    om: "Seenaa Haquu",
    so: "Tirtir Taariikhda",
    ar: "مسح السجل",
    fr: "Effacer l'historique",
    ti: "ታሪኻ ምድምድ"
  },
  "diagnosisHistory.empty":{
    en: "No diagnosis history available.",
    am: "የተደረገ የበሽታ መለያየት ታሪክ የለም።",
    om: "Seenaa qorannoo dhukkubaa hin jiru.",
    so: "Taariikh baaritaan cudur kama jiro.",
    ar: "لا يوجد سجل للتشخيص.",
    fr: "Aucun historique de diagnostic disponible.",
    ti: "ታሪኽ ዝተፈጸመ ምርመራ የለን።"
  },
  "diagnosisHistory.startDiagnosis":{
     en: "Start a new diagnosis",
    am: "አዲስ የበሽታ መለያየት ይጀምሩ",
    om: "Qorannoo dhukkubaa haaraa eegali",
    so: "Bilaab baaritaan cudur cusub",
    ar: "ابدأ تشخيصًا جديدًا",
    fr: "Commencer un nouveau diagnostic",
    ti: "ሓድሽ ምርመራ ጀምር"
  },
  "languageSettings.title": {
  en: "Language Settings",
  am: "የቋንቋ ቅንብሮች",
  om: "Sajoo Afaanii",
  so: "Dejinta Luqadda",
  ar: "إعدادات اللغة",
  fr: "Paramètres de langue",
  ti: "ቅንታት ቋንቋ"
},

  "support.title": {
  en: "Support & Help",
  am: "ድጋፍ እና እርዳታ",
  om: "Deeggarsa fi Gargaarsa",
  so: "Taageero & Caawin",
  ar: "الدعم والمساعدة",
  fr: "Assistance et Aide",
  ti: "ድገምን ሓገዝን"
},
"support.intro":{
  en: "If you need assistance or have any questions, our support team is here to help you promptly and effectively.",
  am: "እርዳታ ካስፈለግዎ ወይም ጥያቄ ካለዎት ድጋፋችን ቡድን በፍጥነት እና በተፈጥሮ እንርዳዎታለን።",
  om: "Deeggarsa barbaadde ykn gaaffii qabaatte, gareen deeggarsaa keenya siif yeroo fi bu’aa qabeessa ta’een jira.",
  so: "Haddii aad caawimaad u baahan tahay ama su’aalo qabtid, kooxdayada taageerada ayaa diyaar kuu ah inay si degdeg ah oo waxtar leh kuu caawiyaan.",
  ar: "إذا كنت بحاجة إلى مساعدة أو لديك أي أسئلة، فإن فريق الدعم لدينا هنا لمساعدتك بسرعة وفعالية.",
  fr: "Si vous avez besoin d’aide ou avez des questions, notre équipe de support est là pour vous aider rapidement et efficacement.",
  ti: "ኣብ እትዕግስት ወይ ጥያቄ እንተሎም ቡድን ድገምና ብፍጥነትን ብተፈጥሮን እንረዳዎ።"
},
"support.faqTitle":{
  en: "Frequently Asked Questions",
  am: "ብዙ ጥያቄዎች",
  om: "Gaaffilee Yeroo Baay’ee Gaafataman",
  so: "Su'aalaha Badanaa La Isweydiiyo",
  ar: "الأسئلة المتكررة",
  fr: "Questions Fréquemment Posées",
  ti: "ብዙ ጥያቄ ዝተለጠፉ"
},
"support.faqContent":{
  en: "Find answers to common questions about using our app, troubleshooting, and getting support.",
  am: "የመተግበሪያችን አጠቃቀም፣ መችግኝ መፍትሄና ድጋፍ ላይ ብዙ ጥያቄዎች መልሶችን ያግኙ።",
  om: "Gaaffilee waliigalaa fi deebiiwwan rakkoo hiikuu, fi deegarsa argachuuf barbaachisan argadhu.",
  so: "Ka hel jawaabo ku saabsan su'aalaha guud ee isticmaalka barnaamijkeena, hagaajinta dhibaatooyinka, iyo helitaanka taageero.",
  ar: "اعثر على إجابات للأسئلة الشائعة حول استخدام تطبيقنا، واستكشاف الأخطاء وإصلاحها، والحصول على الدعم.",
  fr: "Trouvez des réponses aux questions courantes sur l'utilisation de notre application, le dépannage et l'obtention de support.",
  ti: "መተግበሪያና ዝተረኸበ ጥያቄታትን መልሶታትን ኣብ ዝተለቀ ጥያቄታት ምርመራ ኣገናእሉ።"
 
},
"support.contactTitle":{
  en: "Contact Support",
  am: "ድጋፍን ያግኙ",
  om: "Deeggarsa Nu Qunnami",
  so: "La Xiriir Taageerada",
  ar: "اتصل بالدعم",
  fr: "Contacter le support",
  ti: "ንድገምና ኣድራሻ"
},
"support.contactContent":{
    en: "If you need assistance, please contact our support team at support@example.com or call +123-456-7890. We're here to help!",
  am: "እርዳታ ከፈለጉ ድጋፍ ቡድናችንን በsupport@example.com ኢሜል ወይም +123-456-7890 በስልክ ይደውሉ። እኛ እዚህ ነን እንረዳዎታለን!",
  om: "Deeggarsa yoo barbaadde, garee deeggarsa keenya 'support@example.com' irratti ykn bilbila +123-456-7890 irratti qunnami. Si gargaaruuf jirra!",
  so: "Haddii aad caawimaad u baahan tahay, fadlan la xiriir kooxdayada taageerada email ahaan support@example.com ama wac +123-456-7890. Waxaan halkan u joognaa inaan ku caawino!",
  ar: "إذا كنت بحاجة إلى مساعدة، يرجى الاتصال بفريق الدعم لدينا على support@example.com أو الاتصال بالرقم +123-456-7890. نحن هنا لمساعدتك!",
  fr: "Si vous avez besoin d’aide, veuillez contacter notre équipe de support à support@example.com ou appeler le +123-456-7890. Nous sommes là pour vous aider !",
  ti: "ኣብ እተደሊ ኣገዳሲ ከም ኣሎካ፣ እቲ ቡድን ድጋፍና ብsupport@example.com ኢሜይል ወይ ብ +123-456-7890 ተዓጋጣሚ ይነግሩና። ንሓግዚ ኣሎና።"
},
"healthTips.cardio.title":{
  en: "Cardiovascular Health",
  am: "የልብ ጤና",
  om: "Fayya Onnee",
  so: "Caafimaadka Wadnaha",
  ar: "صحة القلب والأوعية الدموية",
  fr: "Santé cardiovasculaire",
  ti: "ጤና ልቢ ንዋይን"
},
"healthTips.cardio.description":{
  en: "Cardiovascular health refers to the health of your heart and blood vessels. It is crucial for overall well-being and can be maintained through regular exercise, a balanced diet, and avoiding smoking.",
  am: "የልብ ጤና ማለት የልብዎን እና የደም አውራጃዎን ጤና ማለት ነው። ይህ ሁሉንም ጤና መጠን ያለው ነው፣ በመደበኛ ስፖርት፣ መጠነኛ መመገብ፣ እና መጠጣት መቆጣጠር ይችላል።",
  om: "Fayya onnee jechuun fayyaa onnee fi daandii dhiigaa kee jechuu dha. Kun fayyaa guutuu fi tasgabbaa’aa ta’uuf murteessaadha, akkasumas sochiiwwan yeroo yerootti, nyaata madaalawaa, fi dhugaatii dhiisuu dabalata.",
  so: "Caafimaadka wadnaha waxa uu loola jeedaa caafimaadka wadnahaaga iyo xididdada dhiigga. Tani waa mid muhiim u ah caafimaadka guud waxaana lagu ilaalin karaa jimicsi joogto ah, cunto dheellitiran, iyo ka fogaanshaha sigaarka.",
  ar: "صحة القلب والأوعية الدموية تشير إلى صحة قلبك وأوعيتك الدموية. إنها ضرورية للصحة العامة ويمكن الحفاظ عليها من خلال ممارسة الرياضة بانتظام، واتباع نظام غذائي متوازن، وتجنب التدخين.",
  fr: "La santé cardiovasculaire fait référence à la santé de votre cœur et de vos vaisseaux sanguins. Elle est cruciale pour le bien-être général et peut être maintenue par une activité physique régulière, une alimentation équilibrée et l'évitement du tabac.",
  ti: "ጤና ልቢ ንዋይን ይገልጻል ልቢን ደም ኣውራጃትን ጤና። እዚ ሁሉንም ጤና መጠን ያለው ነው፣ በመደበኛ ስፖርት፣ መጠነኛ መመገብ፣ እና መጠጣት መቆጣጠር ይችላል።"

},
"healthTips.mental.title": {
  en: "Mental Health",
  am: "የአእምሮ ጤና",
  om: "Fayya Sammuu",
  so: "Caafimaadka Maskaxda",
  ar: "الصحة النفسية",
  fr: "Santé mentale",
  ti: "ጤና ኣእምሮ"
},
"healthTips.mental.description": {
  en:" Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act, and how we handle stress and make choices.",
  am: "የአእምሮ ጤና ስሜታዊ፣ የአእምሮ እና ማህበራዊ ደህንነትን በመካተት ያቀፋል። እንዴት እንደምንሰማ፣ እንዴት እንደምንኖር እና እንዴት ግፊትን እንደምንያዝ ይገልጻል።",
  om: "Fayyaan sammuu miira, yaada, fi haala hawaasummaa keenya of keessaa qaba. Inni akkamitti yaadnu, akkamitti of ilaallu, akkamitti gidiraa dandamannu fi murteessu keenya irratti dhiibbaa qaba.",
  so: "Caafimaadka maskaxda waxa uu ka kooban yahay dareenka, maskaxda, iyo wanaagga bulshada. Waxa uu saameeyaa sida aan u fikirno, u dareento, iyo sida aan u maareyno cadaadiska iyo go'aan qaadashada.",
  ar:" الصحة النفسية تشمل الرفاهية العاطفية والعقلية والاجتماعية. تؤثر على طريقة تفكيرنا وشعورنا وتصرفنا، وكيفية تعاملنا مع التوتر واتخاذ القرارات.",
  fr:" La santé mentale comprend le bien-être émotionnel, psychologique et social. Elle influence notre façon de penser, de ressentir, d’agir et de gérer le stress et les décisions.",
  ti: "ጤና ኣእምሮ ናይ ስሜታዊ፣ ናይ ኣእምሮን ማህበራዊን ደህንነት ይካተት። እቲ እንተኽስተፍንዲ፣ እንተኽስተስማዕ፣ እንተኽስተሰርሕንን እና ግፊት እንተኽእልና ንምቁማር እንታይ ዝኾነ ኣብ ምምሓዝ ይገልጽ።"
},

"healthTips.vitamin.title": {
  en: "Vitamins & Minerals",
  am: "ቫይታሚኖች እና ማይነራሎች",
  om: "Vitaminoota fi Miineralota",
  so: "Fiitamiinada & Macdanta",
  ar: "الفيتامينات والمعادن",
  fr: "Vitamines et minéraux",
  ti: "ቫይታሚኖችን እና ማይነራሎች"
},
"healthTips.vitamin.description": {
  en: "Vitamins and minerals are essential nutrients that your body needs to function properly. They play a crucial role in various bodily functions, including immune support, energy production, and bone health.",
  am: "ቫይታሚኖች እና ማይነራሎች የሰውነትዎ በተመጣጣኝ መሥሪያ ላይ የሚሰሩ አስፈላጊ ንጥረ ነገሮች ናቸው። እነሱ በተለያዩ የአካል ስርዓቶች መሥሪያ፣ መንገድ መፍጠር፣ እና የጎንጎሎች ጤና መጠበቅ ውስጥ አስፈላጊ ተግባር አገለጻል።",
  om: "Vitaminoonni fi miineraloonni nyaata barbaachisaa ta’an yoo ta’u, qaamni keenya sirnaan hojjechuu fi hojiirra ooluu barbaadu. Isaan kunis deeggarsa of eeggannoo, oomisha humnaa, fi fayyaa lafee keessatti gahee guddaa qabu.",
  so: "Fiitamiinada iyo macdanta waa nafaqooyin lagama maarmaan u ah jirkaaga si uu si habboon u shaqeeyo. Waxay door muhiim ah ka ciyaaraan hawlo kala duwan oo jirka ah, oo ay ku jiraan taageerada difaaca jirka, soo saarista tamarta, iyo caafimaadka lafaha.",
  ar: "الفيتامينات والمعادن هي مغذيات أساسية يحتاجها جسمك ليعمل بشكل صحيح. تلعب دورًا حيويًا في وظائف الجسم المختلفة، بما في ذلك دعم المناعة، وإنتاج الطاقة، وصحة العظام.",
  fr: "Les vitamines et les minéraux sont des nutriments essentiels dont votre corps a besoin pour fonctionner correctement. Ils jouent un rôle crucial dans diverses fonctions corporelles, y compris le soutien immunitaire, la production d'énergie et la santé osseuse.",
  ti: "ቫይታሚኖችን እና ማይነራሎች ኣብ ሰውነት መሥሪያ ምስ ተመጣጣኝ መሥሪያ ዝኾነ ኣስፈላጊ ንጥረ ነገሮች እዩ። እነሱ በተለያዩ የአካል ስርዓቶች መሥሪያ፣ መንገድ መፍጠር፣ እና የጎንጎሎች ጤና መጠበቅ ውስጥ አስፈላጊ ተግባር አገለጻል።"

},
"healthTips.sleep.title": {
    en: "Healthy Sleep",
    am: "ጤናማ እንቅልፍ",
    om: "Hirri Saalaa",
    so: "Hurdada Caafimaadka leh",
    ar: "النوم الصحي",
    fr: "Sommeil sain",
    ti: "ጥዑም እንቅልፍ"
  },
  "healthTips.sleep.description": {
    en: "Getting enough quality sleep is essential for physical and mental health. It helps improve concentration, mood, and overall well-being.",
    am: "በቂና ጥሩ እንቅልፍ ማግኘት ለአካላዊ እና ለአእምሮ ጤና አስፈላጊ ነው። ትኩረት፣ አመለካከት እና አጠቃላይ ደህንነትን ያሻሻላል።",
    om: "Hirriba gahaa fi qulqulluu argachuun fayyaa qaamaa fi sammuu tiksuuf murteessaadha. Dandeetti xiyyeeffannoo, miira, fi fayyaa waliigalaa fooyyessa.",
    so: "Helitaanka hurdo tayo leh oo kugu filan waa muhiim si aad u hayso caafimaadka jirka iyo maskaxda. Waxay ka caawisaa feejignaanta, niyadda, iyo badqabka guud.",
    ar: "الحصول على قسط كافٍ من النوم الجيد أمر ضروري للصحة الجسدية والعقلية. يساعد على تحسين التركيز والمزاج والصحة العامة.",
    fr: "Un sommeil de qualité en quantité suffisante est essentiel pour la santé physique et mentale. Il aide à améliorer la concentration, l'humeur et le bien-être général.",
    ti: "ብዙሕነትን ጥሩነትን ዝቐምጠሉ እንቅልፍ ንጤና ሰብኣዊ እና ንኣእምሮ ዋጋ ኣሎ። ትኩረት፣ ስሜት እና ኣጠቃላይ ደህንነት ይዕበል።"
  },
  "healthTips.nutrition.title": {
    en: "Balanced Nutrition",
    am: "ሚዛናዊ ምግብ",
    om: "Nyaata Wal-qixxee",
    so: "Cunto Isu dheellitiran",
    ar: "تغذية متوازنة",
    fr: "Nutrition équilibrée",
    ti: "ሚዛናዊ መመገቢ"
  },
  "healthTips.nutrition.description": {
    en: "A balanced diet provides the nutrients your body needs to function effectively. Include fruits, vegetables, whole grains, and lean proteins in your meals.",
    am: "ሚዛናዊ ምግብ ለአካልዎ የአስፈላጊ ንዋይ በመስጠት እንዲሰራ ያደርገዋል። ፍራፍሬ፣ አትክልት፣ የተሟሟ እህሎችን እና የተለቀ ፕሮቲኖችን ያካትቱ።",
    om: "Nyaanni wal-qixxee qaama keenyaaf nyaata barbaachisu kenna. Muka midhaanii, kuduraafi muduraa, qamadii guutuu fi pirootiinii qulqulluu of keessatti hammachuu qaba.",
    so: "Cunto isu dheelitiran waxay jirka siisaa nafaqo uu si fiican ugu shaqeeyo. Cun khudaar, miraha, badarka dhan iyo borotiinka aan dufanka lahayn.",
    ar: "النظام الغذائي المتوازن يوفر العناصر الغذائية التي يحتاجها جسمك ليعمل بكفاءة. احرص على تناول الفواكه، الخضروات، الحبوب الكاملة، والبروتينات الخالية من الدهون.",
    fr: "Une alimentation équilibrée fournit les nutriments dont votre corps a besoin pour bien fonctionner. Incluez des fruits, légumes, grains entiers et protéines maigres.",
    ti: "መመገቢ ሚዛናዊ ንደሓንነትካ ዝድለ ንዋይ ይሃብ። ፍራፍሬ፣ አትክልቲ፣ እምሃር እና ትሑት ፕሮቲን ትጨብጨብ።"
  },
  "healthTips.exercise.title": {
    en: "Regular Exercise",
    am: "ተደጋጋሚ እንቅስቃሴ",
    om: "Ispoortii Yeroo Yeroo",
    so: "Jimicsi Joogto ah",
    ar: "التمرين المنتظم",
    fr: "Exercice régulier",
    ti: "ነቶሕ እንቅስቃሴ"
  },
  "healthTips.exercise.description": {
    en: "Staying physically active through regular exercise improves heart health, strengthens muscles, and boosts mood and energy.",
    am: "በተደጋጋሚ እንቅስቃሴ አካላዊ ንቁነትን መጠበቅ የልብ ጤናን ያሻሻላል፣ ጡንቻን ያደንግጣል እና አመለካከትን እና ኃይልን ይጨምራል።",
    om: "Ispoortii yeroo yeroon dalaguu fayyaa onnee foyyeessa, muruqqota cimsaa, akkasumas haala miiraa fi humna dabalata.",
    so: "Jimicsiga joogtada ah wuxuu hagaajiyaa caafimaadka wadnaha, wuxuu adkeeyaa murqaha, wuxuuna kordhiyaa tamarta iyo niyadda.",
    ar: "ممارسة التمارين الرياضية بانتظام تعزز صحة القلب، وتقوي العضلات، وتزيد من الطاقة وتحسن المزاج.",
    fr: "Faire de l'exercice régulièrement améliore la santé cardiaque, renforce les muscles et augmente l'énergie et le moral.",
    ti: "ነቶሕ እንቅስቃሴ ጤና ልቢ ይሕብር፣ ጡንቓት ይንብርእን፣ ስሜትን ኃይልን ይዕበል።"
  },
  "healthTips.title": {
    en: "Health Tips",
    am: "የጤና ምክሮች",
    om: "Gorsa Fayyaa",
    so: "Talooyin Caafimaad",
    ar: "نصائح صحية",
    fr: "Conseils de santé",
    ti: "ጥንካሬ ጤና"
  },
  "healthTips.subtitle": {
    en: "Simple and effective ways to improve your well-being.",
    am: "ደህንነትዎን ለማሻሻል ቀላልና ውጤታማ መንገዶች።",
    om: "Jireenya kee fooyyessuuf mala salphaa fi bu’a qabeessa.",
    so: "Hababka fudud oo wax ku ool ah si aad u wanaajiso caafimaadkaaga.",
    ar: "طرق بسيطة وفعالة لتحسين صحتك العامة.",
    fr: "Des moyens simples et efficaces pour améliorer votre bien-être.",
    ti: "ጥራይ ደህንነትካ ንምትሕብብ ቀሊልን ውጽኢታማን መንገዲ ኣሉ።"
  },
  "healthTips.disclaimer": {
    en: "These tips are for informational purposes only and not a substitute for professional medical advice.",
    am: "እነዚህ ምክሮች የመረጃ አገልግሎት ብቻ ናቸው፣ የሐኪም ምክርን ማብሪያ አይደሉም።",
    om: "Gorsoonni kun odeeffannoo kennuuf qofa kan oolan yoo ta’u gorsa ogeessa fayyaa bakka bu’uu hin danda’an.",
    so: "Talooyinkan waxaa loogu talagalay oo keliya in lagu bixiyo macluumaad, mana beddeli karaan talada caafimaad ee xirfadlayaasha ah.",
    ar: "هذه النصائح هي لأغراض إعلامية فقط ولا تُعتبر بديلاً عن الاستشارة الطبية المتخصصة.",
    fr: "Ces conseils sont fournis à titre informatif uniquement et ne remplacent pas un avis médical professionnel.",
    ti: "እዚ ምክሮታት ንመረጃ ዝተሰገሩ እዩ፣ እቲ ሙያዊ ምክር ሕክምና ኣይተቃልስን።"
  },
  "notifications.general.title": {
  en: "General Notifications",
  am: "አጠቃላይ ማስታወቂያዎች",
  om: "Beekamtii Waliigalaa",
  so: "Ogeysiisyada Guud",
  ar: "الإشعارات العامة",
  fr: "Notifications générales",
  ti: "ኣጠቓላሊ ሓበሬታታት"
},
"notifications.title": {
  en: "Notifications",
  am: "ማስታወቂያዎች",
  om: "Beekamtiiwwan",
  so: "Ogeysiisyo",
  ar: "الإشعارات",
  fr: "Notifications",
  ti: "ሓበሬታታት"
},
"notifications.subtitle": {
  en: "Stay updated with important health alerts.",
  am: "ከአስፈላጊ የጤና ማስጠንቀቂያዎች ጋር ይቀጥሉ።",
  om: "Beekamtii fayyaa barbaachisaa ta’an itti fufee argachuuf.",
  so: "La soco digniinaha caafimaad ee muhiimka ah.",
  ar: "ابق على اطلاع بآخر تنبيهات الصحة الهامة.",
  fr: "Restez informé des alertes de santé importantes.",
  ti: "ናይ ጤና ኣገዳሲ ማስጠንቀቂ ሓበሬታታት ንምርካብ ቀጽሊ።"
},
"notifications.general.description": {
  en: "Receive important updates and tips related to your health and lifestyle.",
  am: "ከጤናዎ እና የዕውቀት ሕይወት ጋር የተያያዘ አስፈላጊ አዳዲስ መረጃዎችና ምክሮችን ይቀበሉ።",
  om: "Odeeffannoo fi gorsa fayyaa fi jireenya kee waliin wal qabatu barbaachisaa ta’e ni argatta.",
  so: "Hel xog muhiim ah iyo talooyin ku saabsan caafimaadkaaga iyo qaab nololeedkaaga.",
  ar: "احصل على تحديثات ونصائح مهمة تتعلق بصحتك ونمط حياتك.",
  fr: "Recevez des mises à jour et des conseils importants concernant votre santé et votre mode de vie.",
  ti: "ሓበሬታን መመኻእታትን ናይ ጤናኻን መኣርሓ ሕይወትኻን ንምርካብ ተቐቢሉ።"
},
"notifications.reminders.title": {
  en: "Reminders",
  am: "አስታዋሽዎች",
  om: "Yaadachiisa",
  so: "Xasuusino",
  ar: "التذكيرات",
  fr: "Rappels",
  ti: "ምስኣታታት"
},
"notifications.reminders.description": {
  en: "Get reminded about medications, appointments, and other health-related tasks.",
  am: "የመድሀኒት መውሰድ፣ ቀጠሮዎች እና ሌሎች ከጤና ጋር የተያያዙ ሥራዎችን ያስታውሱ።",
  om: "Yaadachiisa qorichaa, walgahii fi hojiiwwan fayyaa biroo ni argatta.",
  so: "Hel xasuusin ku saabsan daawooyinka, ballamaha, iyo hawlaha kale ee la xiriira caafimaadka.",
  ar: "احصل على تذكيرات بشأن الأدوية، المواعيد، والمهام الصحية الأخرى.",
  fr: "Recevez des rappels pour vos médicaments, rendez-vous, et autres tâches liées à la santé.",
  ti: "ናይ መድሀኒት መውሰዲ፣ ቀጠሮንን ዝተጠሓሐሱ ዕላማታት ንምምሓዝ ምስኣት ይቐበሉ።"
},
"notifications.checkups.title": {
  en: "Checkups",
  am: "የጤና ምርመራዎች",
  om: "Barnoota Fayyaa",
  so: "Baadhitaanno Caafimaad",
  ar: "الفحوصات الدورية",
  fr: "Examens médicaux",
  ti: "ምርመራታት ጤና"
},
"notifications.checkups.description": {
  en: "Stay on top of your health by getting regular checkup notifications.",
  am: "በተደጋጋሚ የጤና ምርመራ ማስታወቂያዎችን በመቀበል የጤናዎን አቅጣጫ ያውቁ።",
  om: "Beekamtii barnoota fayyaa yeroo yeroon argachuudhaan fayyaa kee to’achuu dandeessa.",
  so: "La soco caafimaadkaaga adigoo helaya ogeysiisyo joogto ah oo baadhitaan caafimaad ah.",
  ar: "ابقَ على اطلاع دائم على صحتك من خلال إشعارات الفحوصات المنتظمة.",
  fr: "Suivez votre santé grâce aux notifications de bilans réguliers.",
  ti: "ናይ ጤና ምርመራ ብደቀና ሓበሬታታት ንምቅላዕ ጤናኻ ቀጽሊ።"
},
"notifications.updates.title": {
  en: "Health Updates",
  am: "የጤና አዳዲስ መረጃዎች",
  om: "Odeeffannoo Haaraa Fayyaa",
  so: "Cusbooneysiinta Caafimaadka",
  ar: "تحديثات الصحة",
  fr: "Mises à jour de santé",
  ti: "ዝሓሸ መረጋገጺ ጤና"
},
"notifications.updates.description": {
  en: "Get the latest news and updates on health and wellness.",
  am: "ስለ ጤናና ደህንነት የቅርብ ጊዜ ዜናዎችን እና አዳዲስ መረጃዎችን ይቀበሉ።",
  om: "Odeeffannoo fi oduu haaraa fayyaa fi nageenya qaamaa irratti argadhu.",
  so: "Hel wararka ugu dambeeyay iyo cusbooneysiinta caafimaadka iyo fayo-qabka.",
  ar: "احصل على آخر الأخبار والتحديثات حول الصحة والعافية.",
  fr: "Recevez les dernières nouvelles et mises à jour sur la santé et le bien-être.",
  ti: "ናይ ጤናን ውሕደን ዝበለጸ መረጋገጺን ዜናታትን ተቐቢሉ።"
},
"notifications.note": {
  en: "Note: Always consult a health professional for any medical concerns.",
  am: "ማስታወሻ፡ ማንኛውንም የሕክምና ጉዳይ ለማስተናገድ የጤና ባለሙያን ያማኩ።",
  om: "Hubachiisa: Rakkoo fayyaa kamiyyuu yoo qabaatte ogeessa fayyaa waliin mari’adhu.",
  so: "Ogeysiis: La tasho xirfadle caafimaad haddii aad qabto wax walba oo la xiriira caafimaadka.",
  ar: "ملاحظة: استشر دائمًا مختصًا صحيًا لأي قلق طبي.",
  fr: "Remarque : Consultez toujours un professionnel de santé pour toute préoccupation médicale.",
  ti: "መግለጺ፡ ሕክምናዊ ጉዳይ እንተሎኻ ዘድሊ መምህር ጤና ምኽር ውሑድ።"
},
"apiKey.title": {
  en: "API Key",
  am: "የAPI ቁልፍ",
  om: "Furdaa API",
  so: "Furaha API",
  ar: "مفتاح API",
  fr: "Clé API",
  ti: "መእተዊ API ቁልፍ"
},
"apiKey.save": {
  en: "Save API Key",
  am: "የAPI ቁልፍ አስቀምጥ",
  om: "Furdaa API olkaa'i",
  so: "Kaydi Furaha API",
  ar: "احفظ مفتاح API",
  fr: "Enregistrer la clé API",
  ti: "መእተዊ API ቁልፍ ኣኣትዉ"
},
"apiKey.description": {
  en: "Your API key allows access to our services securely. Keep it confidential.",
  am: "የAPI ቁልፍዎ ወደ አገልግሎቻችን በደህና መዳረሻ ይሰጣል። እባክዎን ይሰርዝዎት።",
  om: "Furdaan API tajaajilawwan keenya ittiin itti fayyadamtan siif eegamaa dha. Eeggannoo godhi.",
  so: "Furahaaga API wuxuu kuu ogolaanayaa inaad si ammaan ah u gasho adeegyadayada. Ilaali sirtaada.",
  ar: "مفتاح API الخاص بك يسمح بالوصول إلى خدماتنا بأمان. احتفظ به بسرية.",
  fr: "Votre clé API permet un accès sécurisé à nos services. Gardez-la confidentielle.",
  ti: "መእተዊ API ቁልፍካ ናይ አገልግሎታትና ደህንነት መዳረሻ እዩ። ናብ እንተዘይብሉ ኣርእዩ።"
},
'apiKey.placeholder': {
  en: 'Enter your API key',
  am: 'የኤፒአይ ቁልፍዎን ያስገቡ',
  om: 'Furtuu API kee galchi',
  so: 'Geli furahaaga API',
  ar: 'أدخل مفتاح API الخاص بك',
  fr: 'Entrez votre clé API',
  ti: 'ቁልፊ API ካ ኣእቱ'
} 
  };
  
  // Adds a translation entry or updates it if it exists
  public addTranslation(key: string, language: string, text: string): void {
    if (!this.translations[key]) {
      this.translations[key] = {};
    }
    this.translations[key][language] = text;
  }
  
  // Gets a translated string for a given key and language
  public translate(key: string, language: string, params?: Record<string, string | number>): string {
    if (!this.translations[key] || !this.translations[key][language]) {
      // Fallback to English if translation doesn't exist
      return this.translations[key]?.['en'] || key;
    }
    
    let translatedText = this.translations[key][language];
    
    // Replace parameters if provided
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translatedText = translatedText.replace(`{${paramKey}}`, String(paramValue));
      });
    }
    
    return translatedText;
  }
}