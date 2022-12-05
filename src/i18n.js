import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      personal: "Personal",
      business: "Business",
      corporate: "Corporate",
      join: "Join now!",
      save_money: "Save money and pay seamlessly with Goubba Super-Wallet",
      join_over_5: "Join over 5 million Goubbists & Start winning",
      in_saving: "Saved so far",
      in_rewards: "Rewarded",
      exclusive_promo_cards: "Exclusive Deals",
      international_gitf: "International Gift Cards",
      list_of: "Brands that love Goubba",
      explore_partner: "Explore more",
      share_our_exclusive_gift:
        "Share our exclusive deals with your loved ones",
      start_now: "Start now",
      pay_seamlessly: "Pay seamlessly",
      "top-up_and_transfer":
        "Top-up & Transfer Goubba Credits Instantly and Win!",
      topup: "Top-Up",
      we_accept: "We accept",
      unlock_goubba_pro:
        "Unlock Goubba PRO; Tons of exclusive Discounts and offers.",
      become_pro: "Become Goubba PRO",
      your_success: "Your success is our success",
      boost_your_sales: "Boost your sales and visibility",
      increase_customer_loyalty: "Increase customer loyalty",
      try_it: "Try it!",
      brands_trust: "Brands that trust Goubba",
      join_boost: "Boost your brand visibility & sales",
      total_active_users: "Monthly Visits",
      total_codes: "Codes and Gift Cards used",
      higher_conversion_rate: "Higher conversion rate",
      average_time_rate: "Average session time",
      creacte_gift_cards: "Create Gift Cards",
      new_card: "New card",
      publish_deals_offers: "Publish your Deals & Offers",
      appropriate_integration:
        "The appropriate Integration for your online store",
      integrate_goubba: "Integrate Goubba checkout",
      join_as_partner: "Join us as a partner!",
      soon: "Soon",
      login: "Login",
      book_a_demo: "Book a Demo",
      start_today: "Start Today!",
      star_now: "Start Now",
      employee_happiness: "Employee Happiness Simplified",
      reward_employees:
        "Rewarding & Engaging your employees has never been easier",
      access_exclusive:
        "An exclusive selection of local & international Gift Cards",
      explore: "Explore",
      explore_possibilities: "Explore Limitless Possibilities",
      explore_possibilities_txt:
        "We bring together everything that's required to set up rewards, incentives and payouts, for your employees, partners, and customers",
      employees: "Employees",
      emplyees_txt:
        "We help create tailored engagement programs that deliver rewards across all Algeria",
      customers: "Customers",
      customers_txt:
        "We help distribute omni-channel campaigns using out of the box integrations",
      partners: "Partners",
      partners_txt:
        "Our platform helps keep the channels flexible to meet the requirements of an evolving ecosystem",
      huge_flexibility:
        "Unlock Goubba PRO, Tons of exclusive Discounts and offers.",
      fullstack_solution: "Goubba is a full-stack embedded solution",
      fullstack_solution_txt:
        "Build your solution piece by piece with a modular API that lets you integrate new features as you scale",
      incentives: "Incentives",
      incentives_txt:
        "Everything you need to build a program that can send rewards and incentives globally",
      benefits: "Benefits",
      benefits_txt:
        "Offer a tailored benefit plan for your employees with one stand-alone solution",
      catalogue: "Catalogue",
      catalogue_txt:
        "Integrate direct real-time connectivity to every major branded Gift Card across Algeria",
      payouts: "Payouts",
      payouts_txt:
        "Pay instantly your employees, customers, and partners with Goubba Gift Cards",
      send_track: "Send and Track your Corporate Rewards",
      send_now: "Send now",
      coming_soon: "Coming soon",
      schedue_send: "Never miss important events",
      unused_rewards: "Unused rewards are recredited to your account",
      refund_question: "Do I get refunded for unused rewards?",
      refund_question_txt:
        "Yes, all your money will be refunded on your company's wallet if the cards are not used by your emplyees, partners or customers. The refunding process might take 24 to 72 hours.",
      expiration_question:
        "Can I use the Gift Cards after the expiration date?",
      expiration_question_txt:
        "No, vouchers cannot be used after the validity date.",
      digitalized_question: "Is Goubba Rewards fully digitized?",
      digitalized_question_txt:
        "Yes, Goubba Rewards is a fully digitalized solution for your company.",
      your_favorite_superwallet:
        "Your favorite Super-Wallet for all : Gift Cards, Deals, Cashback, and Promo codes !",
      goubba: "Goubba",
      about: "About us",
      careers: "Careers",
      shop: "Shop",
      gift_cards: "Gift Cards",
      promo_codes: "Promo codes & Deals",
      cachback: "Cashback",
      b2b_solutions: "B2B Solutions",
      goubba_partner: "Goubba Partner",
      support: "Support",
      contact_supoort: "Contact support",
      how_to: "How to' videos",
      qanda: "Q&A",
      legal: "Legal",
      terms_conditions: "Terms & Conditions",
      privacy_policy: "Privacy Policy",
      get_app: "Get the app",
    },
  },
  ar: {
    translation: {
      personal: "الخاص",
      business: "الشركاء",
      corporate: "المؤسسات",
      join: "انضم الآن!",
      save_money: "وفر أموالك وادفع بكل سهولة مع محفظة ڨوبّا",
      join_over_5: "انضم إلى أكثر من 5 ملايين ڨوبّيست وابدأ بالربح",
      in_saving: "تم حفظها حتى الآن",
      in_rewards: "تم مكافأتها",
      exclusive_promo_cards: "عروض حصرية",
      international_gitf: "بطاقات هدايا دولية",
      list_of: "العلامات التي اختارت ڨوبّا",
      explore_partner: "استكشف المزيد",
      share_our_exclusive_gift: "شارك صفقاتنا الحصرية مع أحبائك",
      start_now: "ابـدأ الآن",
      pay_seamlessly: "ادفع بكل سلاسة",
      "top-up_and_transfer": "اشحن رصيدك وقم بتحويله فوريا واربح مكافآت !",
      topup: "اشحن الآن",
      we_accept: "نقبل",
      unlock_goubba_pro:
        "اكتشف Goubba PRO ، العديد من الخصومات والعروض الحصرية.",
      become_pro: "كن PRO الآن",
      your_success: "نجاحك هو نجاحنا",
      boost_your_sales: "حفز مبيعاتك و زد من حضورك",
      increase_customer_loyalty: "عزز من ولاء عملائك",
      try_it: "قم بالتجربة الآن !",
      brands_trust: "العلامات التي تثق بنا",
      join_boost: "زد من حضورعلامتك وحفز مبيعاتك",
      total_active_users: "زيارات شهرية",
      total_codes: "رمز وبطاقة هدايا مستخدمة",
      higher_conversion_rate: "معدل تحويل أعلى",
      average_time_rate: "متوسط ​​وقت التصفح",
      creacte_gift_cards: "إنشىء بطاقات هدايا",
      new_card: "بطاقة جديدة",
      publish_deals_offers: "انشر عروضك",
      appropriate_integration: "الإدماج المناسب لمتجرك الإلكتروني",
      integrate_goubba: "إدمج ڨوبّا كطريقة دفع",
      join_as_partner: "انضم إلينا كشريك !",
      soon: "قريبا",
      login: "تسجيل الدخول",
      book_a_demo: "حجز عرض تجريبي",
      start_today: "ابدأ اليوم !",
      star_now: "ابدأ الآن",
      employee_happiness: "إسعاد الموظفين الآن أبسط",
      reward_employees: "لن تكون مكافأة موظفيك أسهل من هذا",
      access_exclusive:
        "احصل على مجموعة حصرية من بطاقات الهدايا المحلية و الدولية",
      explore: "استكشفها",
      explore_possibilities: "اكتشف إمكانيات غير محدودة",
      explore_possibilities_txt:
        "نجمع كل ما تحتاجه لإعداد المكافآت والحوافز لموظفيك وشركائك وعملائك",
      employees: "الموظفين",
      emplyees_txt:
        "نساعدك في إنشاء برامج تحفيز مخصصة لتقديم مكافآت عبر أكثر من 100 دولة",
      customers: "العملاء",
      customers_txt:
        "نحن نساعد في توزيع حملات متعددة القنوات باستخدام عمليات تكامل خارج الصندوق",
      partners: "الشركاء",
      partners_txt:
        "تساعد منصتنا في الحفاظ على مرونة القنوات لتلبية متطلبات نظام ايكولوجي في تطور",
      huge_flexibility:
        "مرونة هائلة و العديد من الخصومات من خلال عضوية PRO لموظفيك.",
      fullstack_solution: "ڨوبّا - حل متكامل",
      fullstack_solution_txt:
        "قم ببناء الحل الخاص بك باستخدام واجهة برمجة تطبيقات معيارية تتيح لك دمج الميزات الجديدة مع زيادة حجم شركتك",
      incentives: "تحفيزات",
      incentives_txt:
        "كل ما تحتاجه لبناء برنامج يمكنه إرسال مكافآت وحوافز على مستوى العالم",
      benefits: "فوائد",
      benefits_txt: "قدم خطة مزايا مخصصة لموظفيك من خلال حل واحد قائم",
      catalogue: "",
      catalogue_txt:
        "ادمج اتصالا مباشرا ، في الوقت الفعلي بأي علامة تجارية لبطاقات الهدايا في الجزائر",
      payouts: "المدفوعات",
      payouts_txt:
        "ادفع على الفور لموظفيك وعملائك وشركائك باستخدام بطاقات هدايا ڨوبّا",
      send_track: "أرسل وتتبع مكافآت شركتك",
      send_now: "أرسلها الآن",
      coming_soon: "قريبا",
      schedue_send: "لا تفوت الأحداث المهمة بعد الآن",
      unused_rewards: "تعاد كل مكافآة غير مستخدمة إلى حسابك",
      refund_question: "",
      refund_question_txt: "",
      expiration_question: "",
      expiration_question_txt: "",
      digitalized_question: "",
      digitalized_question_txt: "",
      your_favorite_superwallet:
        "المحفظة المفضلة لديك : بطاقات الهدايا ، الصفقات ، الكاش-باك والرموز الترويجية !",
      goubba: "Goubba - ڨوبّا",
      about: "من نحن",
      careers: "وظائف",
      shop: "متجر",
      gift_cards: "بطاقات الهدايا",
      promo_codes: "الرموز الترويجية والصفقات",
      cachback: "الكاش-باك",
      b2b_solutions: "برامج B2B",
      goubba_partner: "شركاء ڨوبّا",
      support: "الدعم",
      contact_supoort: "تواصل مع الدعم",
      how_to: "فيديوهات 'كيف'",
      qanda: "الأسئلة المتكررة",
      legal: "القانون",
      terms_conditions: "أحكام وشروط",
      privacy_policy: "سياسة الخصوصية",
      get_app: "احصل على التطبيق",
    },
  },
  fr: {
    translation: {
      personal: "Particulier",
      business: "Buisness",
      corporate: "Corporate",
      join: "S'inscrire",
      save_money:
        "Économisez & Payez en toute simplicité avec le Goubba Super-Wallet",
      join_over_5: "Rejoignez plus de 5 millions de Goubbistes",
      in_saving: "Économisés jusqu'à présent",
      in_rewards: "Offerts en récompenses",
      exclusive_promo_cards: "Offres exclusives",
      international_gitf: "Cartes-Cadeaux internationales",
      list_of: "Ces marques aiment Goubba",
      explore_partner: "Explorez plus",
      share_our_exclusive_gift:
        "Partagez nos offres exclusives avec vos proches",
      start_now: "Commencez maintenant",
      pay_seamlessly: "Payez en toute simplicité",
      "top-up_and_transfer":
        "Rechargez et Transférez des Goubba Credits instantanément !",
      topup: "Rechargez vos GC",
      we_accept: "On accepte",
      unlock_goubba_pro:
        "Découvrez Goubba PRO; des tonnes de remises et d'offres exclusives.",
      become_pro: "Passer à PRO maintenant",
      your_success: "Votre réussite est la notre",
      boost_your_sales: "Boostez vos ventes et votre visibilité",
      increase_customer_loyalty: "Augmentez la fidélité de vos clients",
      try_it: "Essayez maintenant !",
      brands_trust: "Marques qui nous font confiance",
      join_boost: "Augmentez vos ventes & la visibilité de votre marque",
      total_active_users: "Visites Mensuelles",
      total_codes: "Codes et Cartes-Cadeaux utilisés",
      higher_conversion_rate: "Taux de conversion de plus",
      average_time_rate: "Temps moyen d'une session",
      creacte_gift_cards: "Créez vos cartes-cadeaux",
      new_card: "Nouvelle carte",
      publish_deals_offers: "Publiez vos Offres",
      appropriate_integration:
        "L'intégration la plus adaptée à votre boutique en ligne",
      integrate_goubba: "Intégrez Goubba checkout",
      join_as_partner: "Devenez notre Partenaire !",
      soon: "Bientôt",
      login: "Se connecter",
      book_a_demo: "Réserver une Démo",
      start_today: "Commencer",
      star_now: "Commencer Maintenant",
      employee_happiness: "Le bien-être des employés simplifié",
      reward_employees:
        "Récompenser et Encourager vos employés n'aura jamais été aussi facile",
      access_exclusive: "Votre catalogue exclusif de cartes-cadeaux",
      explore: "Explorer-les",
      explore_possibilities: "Explorez une infinité de possibilités",
      explore_possibilities_txt:
        "Nous réunissons tout le nécessaire pour mettre en place des récompenses et des incitations pour vos employés, vos partenaires et vos clients",
      employees: "Employés",
      emplyees_txt:
        "Nous vous aidons à créer des programmes de motivation sur mesure qui permettent d'offrir des récompenses à travers toute l'Algérie.",
      customers: "Clients",
      customers_txt:
        "Nous aidons à diffuser des campagnes omnicanales en utilisant des intégrations originales",
      partners: "Partenaires",
      partners_txt:
        "Notre plateforme permet de maintenir la flexibilité des canaux pour répondre aux exigences d'un écosystème en constante évolution.",
      huge_flexibility:
        "Découvrez Goubba PRO, des tonnes de remises et d'offres exclusives.",
      fullstack_solution: "Goubba est une solution entièrement intégrée.",
      fullstack_solution_txt:
        "Construisez votre solution grâce à une API modulaire qui vous permet d'intégrer de nouvelles fonctionnalités à mesure que vous évoluez",
      incentives: "Récompenses",
      incentives_txt:
        "Tout ce dont vous avez besoin pour créer un programme permettant d'envoyer des récompenses et des incitations à l'échelle mondiale",
      benefits: "Avantages",
      benefits_txt:
        "Offrez un régime d'avantages sur mesure à vos employés avec une seule solution autonome",
      catalogue: "Catalogue",
      catalogue_txt:
        "Intégrer une connectivité directe en temps réel à toute marque de cartes-cadeaux en Algérie",
      payouts: "Paiement",
      payouts_txt:
        "Payez instantanément vos employés, clients et partenaires avec les cartes-cadeaux Goubba",
      send_track:
        "Un suivi complet des récompenses pour une maitrise totale des coûts",
      send_now: "Envoyez-les maintenant",
      coming_soon: "Bientôt disponible",
      schedue_send: "Ne manquez jamais les événements importants",
      unused_rewards:
        "Nous vous remboursons instantanément votre argent inutilisé sur votre compte.",
      refund_question:
        "Les récompenses non utilisées me sont-elles remboursées ?",
      refund_question_txt:
        "Oui, votre argent vous sera remboursé sur le portefeuille de votre entreprise si les cartes ne sont pas utilisées par vos employés, partenaires ou clients. Le processus de remboursement peut prendre de 24 à 72 heures.",
      expiration_question:
        "Est-ce que je peux utiliser les cartes-cadeaux après le délai de validité ?",
      expiration_question_txt:
        "Non, les bons d'achat ne peuvent pas être utilisés après la date de validité.",
      digitalized_question:
        "La Goubba Rewards est-elle entièrement digitalisée ?",
      digitalized_question_txt:
        "Oui, Goubba Rewards est une solution entièrement digitalisée pour votre entreprise.",
      your_favorite_superwallet:
        "Votre Super-Wallet préféré : Cartes-Cadeaux, Offres, Cashback et Codes Promo !",
      goubba: "Goubba",
      about: "À propos de nous",
      careers: "Carrières",
      shop: "Magasin",
      gift_cards: "Cartes-Cadeaux",
      promo_codes: "Codes promo & deals",
      cachback: "Cashback",
      b2b_solutions: "Solutions B2B",
      goubba_partner: "Goubba Partner",
      support: "Support",
      contact_supoort: "Contacter le support",
      how_to: "Videos 'How to'",
      qanda: "FAQ",
      legal: "Legal",
      terms_conditions: "Conditions Générales",
      privacy_policy: "Politique de Confidentialité",
      get_app: "Télécharger l'appli",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
