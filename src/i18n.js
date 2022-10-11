import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "personal": "Personal",
      "business": "Business",
      "corporate": "Corporate",
      "join": "Join now!",
      "save_money": "Save money and pay seamlessly with Goubba Super-Wallet",
      "join_over_5": "Join over 5 million Goubbits & Start winning",
      "in_saving": "Saved so far",
      "in_rewards": "Rewarded",
      "exclusive_promo_cards": "Exclusive Deals",
      "international_gitf": "International Gift Cards",
      "list_of": "Brands that love Goubba",
      "explore_partner": "Explore more",
      "share_our_exclusive_gift": "Share our exclusive deals with your loved ones",
      "start_now": "Start now",
      "pay_seamlessly": "Pay seamlessly",
      "try_it": "Try it!",
      "top-up_and_transfer": "Top-up & Transfer Credits Instantly and Win!",
      "join_as_partner": "Join us as a Partner!",
      "book_a_demo": "Book a demo",
      "your_success": "Your success is our success",
      "boost_your_sales": "Boost your sales and visibility",
      "increase_customer_loyalty": "Increase customer loyalty",
      "brands_trust": "Brands that trust Goubba",
      "join_boost": "Boost your brand visibility & sales",
      "total_active_users": "Monthly Visits",
      "total_codes": "Codes and Gift Cards used",
      "higher_conversion_rate": "Higher conversion rate",
      "30min": "12Min",
      "average_time_rate": "Average session time",
      "creacte_gift_cards": "Create Gift Cards",
      "new_card": "New card",
      "publidh_deals_offers": "Publish your deals",
      "integrate_goubba": "Integrate Goubba checkout",
      "start_today": "Start Today!",
      "employee_happiness": "Employee Happiness Simplified",
      "reward_employees": "Rewarding & Engaging your employees has never been easier",
      "access_exclusive": "An exclusive selection of local & international Gift Cards",
      "explore": "Explore",
      "send_track": "Send and Track your Corporate Rewards",
      "send_now": "Send now",
      "coming_soon": "Coming soon",
      "schedue_send": "Never miss important events",
      "unsend_rewadrs": "Unused rewards are recredited to your account",
      "your_favorite_superwallet": "Your favorite Super-Wallet for all : Gift Cards, deals, cashback, and promo codes !",
      "goubba": "Goubba",
      "about": "About us",
      "careers": "Careers",
      "shop": "Shop",
      "gift_cards": "Gift Cards",
      "promo_codes": "Promo codes & deals",
      "cachback": "Cashback",
      "b2b_solutions": "B2B Solutions",
      "goubba_partner": "Goubba Partner",
      "support": "Support",
      "contact_supoort": "Contact support",
      "how_to": "How to' videos",
      "qanda": "Q&A",
      "legal": "Legal",
      "terms_conditions": "Terms & Conditions",
      "privacy_policy": "Privacy Policy",
      "get_app": "Get the app",
      "login":"Login",
      "topup":"Top-Up",
      "soon":"soon"
    }
  },
  ar:{
    translation:{
      "personal": "الخاص",
      "business": "الشركاء",
      "corporate": "المؤسسات",
      "join": "انضم الآن!",
      "save_money": "وفر أموالك وادفع بكل سهولة مع محفظة ڨوبّا",
      "join_over_5": "انضم إلى أكثر من 5 ملايين ڨوبّيست وابدأ بالربح",
      "in_saving": "تم حفظها حتى الآن",
      "in_rewards": "تم مكافأتها",
      "exclusive_promo_cards": "عروض حصرية",
      "international_gitf": "بطاقات هدايا دولية",
      "list_of": "العلامات التي اختارت ڨوبّا",
      "explore_partner": "استكشف المزيد",
      "share_our_exclusive_gift": "شارك صفقاتنا الحصرية مع أحبائك",
      "start_now": "ابـدأ الآن",
      "pay_seamlessly": "ادفع بكل سلاسة",
      "try_it": "قم بالتجربة الآن !",
      "top-up_and_transfer": "اشحن رصيدك وقم بتحويله فوريا واربح مكافآت !",
      "join_as_partner": "انضم إلينا كشريك !",
      "book_a_demo": "احجز نسخة تجريبية",
      "your_success": "نجاحك هو نجاحنا",
      "boost_your_sales": "حفز مبيعاتك و زد من حضورك",
      "increase_customer_loyalty": "عزز من ولاء عملائك",
      "brands_trust": "العلامات التي تثق بنا",
      "join_boost": "زد من حضورعلامتك وحفز مبيعاتك",
      "total_active_users": "زيارات شهرية",
      "total_codes": "رمز وبطاقة هدايا مستخدمة",
      "higher_conversion_rate": "معدل تحويل أعلى",
      "30min": "12Min",
      "average_time_rate": "متوسط ​​وقت التصفح",
      "creacte_gift_cards": "إنشىء بطاقات هدايا",
      "new_card": "بطاقة جديدة",
      "publidh_deals_offers": "انشر عروضك",
      "integrate_goubba": "إدمج ڨوبّا كطريقة دفع",
      "start_today": "ابدأ اليوم !",
      "employee_happiness": "إسعاد الموظفين الآن أبسط",
      "reward_employees": "لن تكون مكافأة موظفيك أسهل من هذا",
      "access_exclusive": "احصل على مجموعة حصرية من بطاقات الهدايا المحلية و الدولية",
      "explore": "استكشفها",
      "send_track": "أرسل وتتبع مكافآت شركتك",
      "send_now": "أرسلها الآن",
      "coming_soon": "قريبا",
      "schedue_send": "لا تفوت الأحداث المهمة بعد الآن",
      "unsend_rewadrs": "تعاد كل مكافآة غير مستخدمة إلى حسابك",
      "your_favorite_superwallet": "المحفظة المفضلة لديك لجميع الأشياء : بطاقات الهدايا ، الصفقات ، استرداد النقود والرموز الترويجية !",
      "goubba": "Goubba - ڨوبّا",
      "about": "من نحن",
      "careers": "وظائف",
      "shop": "متجر",
      "gift_cards": "بطاقات الهدايا",
      "promo_codes": "الرموز الترويجية والصفقات",
      "cachback": "الكاش-باك",
      "b2b_solutions": "برامج B2B",
      "goubba_partner": "شركاء ڨوبّا",
      "support": "الدعم",
      "contact_supoort": "تواصل مع الدعم",
      "how_to": "فيديوهات 'كيف'",
      "qanda": "الأسئلة المتكررة",
      "legal": "القانون",
      "terms_conditions": "أحكام وشروط",
      "privacy_policy": "سياسة الخصوصية",
      "get_app": "احصل على التطبيق",
      "login":"تسجيل الدخول",
      "topup":"اشحن الآن",
      "soon":"قريبا"
    }
  },
  fr: {
    translation: {
      "personal": "Particulier",
      "business": "Buisness",
      "corporate": "Corporate",
      "join": "S'inscrire",
      "save_money": "Économisez & Payez en toute simplicité avec le Goubba Super-Wallet",
      "join_over_5": "Rejoignez plus de 5 millions Goubbites & Commencez à gagner",
      "in_saving": "Economisé jusqu'à présent",
      "in_rewards": "Récompensés",
      "exclusive_promo_cards": "Offres exclusives",
      "international_gitf": "Cartes-Cadeaux internationales",
      "list_of": "Marques qui aiment Goubba",
      "explore_partner": "Explorez plus",
      "share_our_exclusive_gift": "Partagez nos offres exclusives avec vos bien aimés",
      "start_now": "Commencez maintenant",
      "pay_seamlessly": "Payez en toute simplicité",
      "try_it": "Essayez maintenant !",
      "top-up_and_transfer": "Rechargez et Transférez des crédits instantanément et Gagnez !",
      "join_as_partner": "Devenez notre Partenaire !",
      "book_a_demo": "Réserver une démo",
      "your_success": "Votre réussite est la notre",
      "boost_your_sales": "Boostez vos ventes et votre visibilité",
      "increase_customer_loyalty": "Augmentez la fidélité de vos clients",
      "brands_trust": "Marques qui nous font confiance",
      "join_boost": "Augmentez vos ventes & la visibilité de votre marque",
      "total_active_users": "Visites Mensuelles",
      "total_codes": "Codes et Cartes-Cadeaux utilisés",
      "higher_conversion_rate": "Taux de conversion de plus",
      "30min": "12Min",
      "average_time_rate": "Temps moyen d'une session",
      "creacte_gift_cards": "Créez vos cartes-cadeaux",
      "new_card": "Nouvelle carte",
      "publidh_deals_offers": "Publiez vos offres",
      "integrate_goubba": "Intégrez Goubba checkout",
      "start_today": "Commencez dès Aujourd'hui !",
      "employee_happiness": "Le bien-être des employés simplifié",
      "reward_employees": "Récompenser et Engager vos employés n'a jamais été aussi facile",
      "access_exclusive": "Une sélection exclusive de cartes-cadeaux locales et internationales",
      "explore": "Explorez-les",
      "send_track": "Envoyez et Suivez vos récompenses Corporate",
      "send_now": "Envoyez-les maintenant",
      "coming_soon": "Bientôt disponible",
      "schedue_send": "Ne manquez jamais les événements importants",
      "unsend_rewadrs": "Les récompenses non utilisées sont recréditées sur votre compte",
      "your_favorite_superwallet": "Votre Super-Wallet préféré : Cartes-Cadeaux, offres, cashback et codes promo !",
      "goubba": "Goubba",
      "about": "À propos de nous",
      "careers": "Carrières",
      "shop": "Magasin",
      "gift_cards": "Cartes-Cadeaux",
      "promo_codes": "Codes promo & deals",
      "cachback": "Cashback",
      "b2b_solutions": "Solutions B2B",
      "goubba_partner": "Goubba Partner",
      "support": "Support",
      "contact_supoort": "Contacter le support",
      "how_to": "Videos 'How to'",
      "qanda": "FAQ",
      "legal": "Legal",
      "terms_conditions": "Conditions Générales",
      "privacy_policy": "Politique de Confidentialité",
      "get_app": "Télécharger l'app",
      "login":"Se connecter",
      "topup":"Rechargez GC",
      "soon":"bientôt"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;