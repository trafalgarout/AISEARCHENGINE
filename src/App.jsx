import React, { useState, useEffect } from 'react';

export default function App() {
  const [language, setLanguage] = useState('ar');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });

  // Language content
  const lang = {
    ar: {
      title: "ابحث في مجال الذكاء الاصطناعي",
      description: "اكتشف أدوات، تقنيات، وأبحاثًا مبتكرة في عالم الذكاء الاصطناعي.",
      searchPlaceholder: "اكتب كلمة مفتاحية...",
      searchButton: "بحث",
      privacyPolicy: "سياسة الخصوصية",
      termsOfUse: "شروط الاستخدام",
      contactUs: "اتصل بنا",
      footerRights: "جميع الحقوق محفوظة"
    },
    en: {
      title: "Search in Artificial Intelligence",
      description: "Discover tools, technologies, and innovative research in the world of AI.",
      searchPlaceholder: "Enter a keyword...",
      searchButton: "Search",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      contactUs: "Contact Us",
      footerRights: "All rights reserved"
    }
  };

  // Categories with keywords
  const categories = {
    ar: {
      "الذكاء الاصطناعي في العلاقات والتعارف": [
        "تطبيقات تعارف ذكية باستخدام الذكاء الاصطناعي", "روبوتات الدردشة لتطبيقات المواعدة",
        "تطابق الشخصيات باستخدام الذكاء الاصطناعي", "تحليل المحادثات في تطبيقات التعارف عبر AI",
        "الذكاء الاصطناعي لتحسين تجربة المستخدم في المواعدة", "أنظمة اقتراح الشركاء بناءً على الذكاء الاصطناعي",
        "الذكاء الاصطناعي في حماية خصوصية المستخدمين في التطبيقات الاجتماعية",
        "الذكاء الاصطناعي لمنع المضايقة في تطبيقات التعارف",
        "أدوات الذكاء الاصطناعي لإنشاء ملفات تعريف جذابة", "الذكاء الاصطناعي في تحليل توافق العلاقات"
      ],
      "الذكاء الاصطناعي في التعليم": [
        "أدوات الذكاء الاصطناعي للتعليم الشخصي", "منصات تعليمية ذكية باستخدام AI",
        "الذكاء الاصطناعي في اختبارات التقييم التلقائية", "مساعدات تعليمية آلية بالذكاء الاصطناعي",
        "الذكاء الاصطناعي في تحليل أداء الطلاب", "الذكاء الاصطناعي لتطوير المناهج التعليمية",
        "الذكاء الاصطناعي في إعداد الدروس التفاعلية", "الذكاء الاصطناعي في التعلم التكيفي",
        "الذكاء الاصطناعي في تطوير الكورسات التعليمية", "الذكاء الاصطناعي في دعم اللغة والترجمة التعليمية"
      ],
      "الذكاء الاصطناعي في التصميم الجرافيكي": [
        "أدوات تصميم شعارات بالذكاء الاصطناعي", "الذكاء الاصطناعي في تصميم الهوية البصرية",
        "تصميم مواقع الويب باستخدام الذكاء الاصطناعي", "أدوات تحرير الصور باستخدام الذكاء الاصطناعي",
        "الذكاء الاصطناعي في إنشاء الملصقات والإعلانات", "الذكاء الاصطناعي في تحسين تجربة المستخدم UX",
        "الذكاء الاصطناعي في تصميم المواد الإبداعية", "الذكاء الاصطناعي في تحويل الأفكار إلى تصاميم",
        "الذكاء الاصطناعي في تصميم الفيديوهات الإبداعية", "الذكاء الاصطناعي في تصميم المنتجات الرقمية"
      ],
      "الذكاء الاصطناعي في التجارة الإلكترونية": [
        "أدوات الذكاء الاصطناعي لتحسين تجربة المستخدم في المتاجر", "الذكاء الاصطناعي في تحليل سلوك المشترين",
        "الذكاء الاصطناعي في اقتراح المنتجات", "الذكاء الاصطناعي في إدارة المخزون الذكية",
        "الذكاء الاصطناعي في تحسين عمليات البيع", "الذكاء الاصطناعي في تحليل بيانات العملاء",
        "الذكاء الاصطناعي في الإعلانات المستهدفة للمتاجر", "الذكاء الاصطناعي في تحسين تصنيف المنتجات",
        "الذكاء الاصطناعي في تطوير بوابات الدفع الذكية", "الذكاء الاصطناعي في تقليل عربة التسوق المهجورة"
      ],
      "الذكاء الاصطناعي في كتابة المحتوى": [
        "أدوات كتابة المقالات تلقائيًا بالذكاء الاصطناعي", "الذكاء الاصطناعي في كتابة المحتوى الإعلاني",
        "الذكاء الاصطناعي في كتابة المحتوى التعليمي", "الذكاء الاصطناعي في كتابة المحتوى الإبداعي",
        "الذكاء الاصطناعي في كتابة المحتوى باللغة العربية", "الذكاء الاصطناعي في كتابة المواصفات الفنية للمنتجات",
        "الذكاء الاصطناعي في تحسين SEO للمحتوى", "الذكاء الاصطناعي في كتابة المراجعات والمقارنات",
        "الذكاء الاصطناعي في كتابة النصوص الحوارية", "الذكاء الاصطناعي في كتابة المحتوى لمواقع الويب"
      ],
      "الذكاء الاصطناعي في الأمن السيبراني": [
        "أدوات الذكاء الاصطناعي لكشف الاختراقات", "الذكاء الاصطناعي في تحليل التهديدات السيبرانية",
        "الذكاء الاصطناعي في منع هجمات الفيروسات", "الذكاء الاصطناعي في تحليل سلوك المستخدم للأمان",
        "الذكاء الاصطناعي في حماية البيانات الحساسة", "الذكاء الاصطناعي في الكشف عن الاحتيال الإلكتروني",
        "الذكاء الاصطناعي في تحسين أنظمة الأمان", "الذكاء الاصطناعي في إدارة كلمات المرور الذكية",
        "الذكاء الاصطناعي في تتبع البرامج الضارة", "الذكاء الاصطناعي في حماية البنية التحتية الرقمية"
      ],
      "الذكاء الاصطناعي في الطب والصحة": [
        "أدوات الذكاء الاصطناعي في التشخيص الطبي", "روبوتات جراحية مدعومة بالذكاء الاصطناعي",
        "تحليل صور الأشعة باستخدام الذكاء الاصطناعي", "أنظمة مراقبة المرضى بالذكاء الاصطناعي",
        "الذكاء الاصطناعي في تطوير الأدوية", "الذكاء الاصطناعي في الطب الشخصي",
        "الذكاء الاصطناعي في أبحاث السرطان", "تحليل الجينوم البشري باستخدام الذكاء الاصطناعي",
        "الذكاء الاصطناعي في تحليل البيانات الصحية الضخمة", "منصات صحية ذكية تعتمد على الذكاء الاصطناعي"
      ],
      "الذكاء الاصطناعي في التسويق الرقمي": [
        "أدوات تسويق محتوى بالذكاء الاصطناعي", "روبوتات الدردشة الآلية للشركات",
        "أدوات تخصيص الحملات الإعلانية", "تحليل سلوك المستخدم باستخدام الذكاء الاصطناعي",
        "الذكاء الاصطناعي في تحسين محركات البحث", "أدوات إنشاء إعلانات فيسبوك بالذكاء الاصطناعي",
        "الذكاء الاصطناعي في تحليل حملات Google Ads", "أدوات توليد محتوى تسويقي بالذكاء الاصطناعي",
        "الذكاء الاصطناعي في إدارة العلامات التجارية", "الذكاء الاصطناعي لتحديد الجمهور المستهدف"
      ],
      "الذكاء الاصطناعي في الإبداع الفني": [
        "أدوات Midjourney مدفوعة للصور الاحترافية", "DALL·E API للشركات", "Stable Diffusion مع لوحة تحكم",
        "تعديل الصور بالذكاء الاصطناعي بدون فوتوشوب", "أدوات تحويل الرسومات إلى صور واقعية",
        "منصات تصميم شعارات بالذكاء الاصطناعي", "أدوات توليد صور ثلاثية الأبعاد بالذكاء الاصطناعي",
        "توليد الصور النصية باستخدام الذكاء الاصطناعي", "توليد صور نمطية للاستخدام التجاري", "أدوات توليد صور لأغراض الإعلانات"
      ],
      "الذكاء الاصطناعي في تحليل البيانات": [
        "أدوات الذكاء الاصطناعي لتحليل البيانات الضخمة", "نظام تحليل سلوك العملاء بالذكاء الاصطناعي",
        "منصات تحليل البيانات التنبؤية", "أدوات تنظيف البيانات باستخدام الذكاء الاصطناعي",
        "حلول BI مبنية على الذكاء الاصطناعي", "الذكاء الاصطناعي في استخراج البيانات من PDF",
        "أدوات تحليل السوق باستخدام الذكاء الاصطناعي", "الذكاء الاصطناعي في تحليل بيانات المستهلك",
        "الذكاء الاصطناعي لتحسين قرارات الأعمال", "أدوات تحليل البيانات غير المنظمة"
      ],
      "الذكاء الاصطناعي في الربح": [
        "التدوين باستخدام AI", "تصميم صور بالذكاء الاصطناعي", "منتجات رقمية AI", "بيع محتوى AI",
        "مشاريع أوتوماتيكية", "التجارة الإلكترونية AI", "الذكاء الاصطناعي للمستقلين", "كتابة المقالات تلقائيًا",
        "التسويق بالذكاء الاصطناعي", "الذكاء الاصطناعي في المبيعات"
      ]
    },
    en: {
      "AI in Dating & Relationships": [
        "Smart dating apps using AI", "Chatbots for dating apps", "Personality matching with AI",
        "Analyzing conversations in dating apps", "AI to enhance user experience in dating",
        "Partner suggestion systems using AI", "Protecting user privacy in social apps",
        "Preventing harassment in dating apps", "AI-powered profile creation tools", "AI relationship compatibility analysis"
      ],
      "AI in Education": [
        "Personalized learning with AI", "AI-powered educational platforms", "Automated testing with AI",
        "AI tutors for students", "Student performance analysis", "Curriculum development with AI",
        "Interactive lesson creation", "Adaptive learning systems", "Course development with AI", "AI language translation"
      ],
      "AI in Graphic Design": [
        "Logo design tools with AI", "Visual identity design with AI", "AI web design tools",
        "Image editing with AI", "Poster and ad generation", "Improving UX with AI",
        "Creative material design", "Idea-to-design conversion", "AI video creation", "Digital product design with AI"
      ],
      "AI in E-commerce": [
        "AI for user experience in stores", "Customer behavior analysis", "Product recommendation systems",
        "AI inventory management", "Sales process optimization", "Customer data analysis",
        "Targeted advertising", "Product ranking improvements", "Smart payment gateways", "Reducing cart abandonment"
      ],
      "AI in Content Writing": [
        "AI article writing tools", "Marketing content with AI", "Educational content creation",
        "Creative writing with AI", "Arabic content generation", "Technical specs writing",
        "SEO content optimization", "Review and comparison writing", "Scriptwriting with AI", "Website content automation"
      ],
      "AI in Cybersecurity": [
        "AI for breach detection", "Cyber threat analysis", "Virus attack prevention",
        "User behavior analysis for security", "Protecting sensitive data", "Fraud detection with AI",
        "Security system enhancement", "Smart password management", "Malware tracking with AI", "Infrastructure protection"
      ],
      "AI in Healthcare": [
        "AI medical diagnosis", "Surgical robots", "X-ray image analysis", "Patient monitoring systems",
        "Drug discovery with AI", "Personalized medicine", "Cancer research with AI",
        "Genome analysis using AI", "Big health data analysis", "Smart healthcare platforms"
      ],
      "AI in Digital Marketing": [
        "AI content marketing tools", "Chatbots for business", "Personalized ad campaigns",
        "User behavior analysis", "AI SEO tools", "Facebook ads with AI", "Google Ads analytics",
        "Marketing copywriting with AI", "Brand management with AI", "Audience targeting"
      ],
      "AI in Creative Art": [
        "Midjourney professional image tools", "DALL·E API for companies", "Stable Diffusion dashboard",
        "3D image generation", "Photoshop alternatives with AI", "Convert sketches to realistic images",
        "Logo design with AI", "Text-based image generation", "Commercial style image generation", "AI advertisement generation"
      ],
      "AI in Data Analytics": [
        "Big data analysis with AI", "Customer behavior analysis", "Predictive analytics platforms",
        "Data cleaning with AI", "Business intelligence with AI", "PDF data extraction",
        "Market analysis with AI", "Consumer data insights", "Business decision optimization", "Unstructured data analysis"
      ]
    }
  };

  // Load Google CSE Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=b542fb5a835b6980a';
    script.async = true;
    script.onload = () => {
      window.__gcse = {
        callback: function () {
          google.search.cse.element.render({
            div: "searchresults-only0",
            tag: "searchresults-only"
          });
        }
      };
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // SEO Meta Tags
  useEffect(() => {
    document.title = lang[language].title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = lang[language].description;

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "ذكاء اصطناعي, أدوات الذكاء الاصطناعي, البحث في الذكاء الاصطناعي, الذكاء الاصطناعي في الصحة, الذكاء الاصطناعي في التسويق, الذكاء الاصطناعي في الإبداع";

    // Open Graph
    const setOGTag = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    };

    setOGTag('og:title', lang[language].title);
    setOGTag('og:description', lang[language].description);
    setOGTag('og:type', 'website');
    setOGTag('og:url', window.location.href);
    setOGTag('og:image', 'https://example.com/ai-preview.jpg'); // استبدل بصورتك
  }, [language]);

  // Reload Ads after rendering
  useEffect(() => {
    if (window.adsbygoogle && window.adsbygoogle.push) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {}
    }
  }, [language]);

  const handleSearch = () => {
    const query = document.getElementById("search-input").value.trim();
    if (!query) return alert(language === 'ar' ? "من فضلك اكتب كلمة للبحث" : "Please enter a search term");
    const element = window.google?.search?.cse?.element?.getElement("searchresults-only0");
    if (element) {
      element.execute(query);
    } else {
      alert(language === 'ar' ? "جاري تحميل محرك البحث..." : "Loading search engine...");
    }
  };

  const searchKeyword = (keyword) => {
    document.getElementById("search-input").value = keyword;
    handleSearch();
  };

  const openModal = (type) => {
    const modalLang = {
      ar: {
        privacy: {
          title: "سياسة الخصوصية",
          body: (
            <div className="space-y-4 text-sm md:text-base">
              <p>نحن في AI World Search نلتزم بحماية خصوصيتك. يتم جمع البيانات فقط لتحسين تجربة البحث وتوفير نتائج دقيقة.</p>
              <p>لا يتم تخزين معلومات شخصية دون موافقة صريحة، ويتم استخدام ملفات تعريف الارتباط لتحسين الأداء فقط.</p>
              <p>للمزيد من المعلومات حول كيفية استخدام بياناتك، يمكنك التواصل معنا عبر صفحة "اتصل بنا".</p>
            </div>
          )
        },
        terms: {
          title: "شروط الاستخدام",
          body: (
            <div className="space-y-4 text-sm md:text-base">
              <p>استخدامك لهذا الموقع يعني موافقتك على الشروط التالية:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>لا يُسمح باستخدام المحتوى لأغراض غير قانونية.</li>
                <li>النتائج المعروضة هي من Google CSE ولا تمثل آراء الموقع.</li>
                <li>يُمنع إعادة استغلال الموقع أو أدواته لأغراض تجارية دون إذن.</li>
                <li>الموقع لا يتحمل مسؤولية أي أخطاء في نتائج البحث.</li>
              </ul>
            </div>
          )
        },
        contact: {
          title: "اتصل بنا",
          body: (
            <div className="space-y-4 text-sm md:text-base">
              <p>support@aiworldsearch.com</p>
            </div>
          )
        }
      },
      en: {
        privacy: {
          title: "Privacy Policy",
          body: (
            <div className="space-y-4 text-sm md:text-base">
              <p>At AI World Search, we are committed to protecting your privacy...</p>
            </div>
          )
        },
        terms: {
          title: "Terms of Use",
          body: (
            <div className="space-y-4 text-sm md:text-base">
              <p>Please read our terms before use...</p>
            </div>
          )
        },
        contact: {
          title: "Contact Us",
          body: (
            <div className="space-y-4 text-sm md:text-base">
              <p>Reach us via support@aiworldsearch.com</p>
            </div>
          )
        }
      }
    };

    setModalContent(modalLang[language][type]);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="bg-gradient-to-br from-gray-900 via-blue-950 to-cyan-900 min-h-screen text-white font-sans p-6">
      <div className="max-w-4xl mx-auto text-center space-y-10">

        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{lang[language].title}</h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">{lang[language].description}</p>
        </header>

        {/* Language Switcher */}
        <div className="flex justify-center">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full transition"
          >
            {language === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <input
            id="search-input"
            type="text"
            placeholder={lang[language].searchPlaceholder}
            className="w-full sm:w-3/5 p-3 rounded-l-full outline-none bg-black/30 border border-cyan-500/30 text-white shadow-lg"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-r-full shadow-lg"
          >
            🔍 {lang[language].searchButton}
          </button>
        </div>

        {/* Categories */}
        <main className="space-y-10 text-right">
          {Object.entries(categories[language]).map(([category, keywords], index) => (
            <React.Fragment key={index}>
              <section className="space-y-4">
                <h2 className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20 mb-4">
                  {category}
                </h2>
                <div className="flex flex-wrap gap-2 justify-center">
                  {keywords.map((word, i) => (
                    <span
                      key={i}
                      onClick={() => searchKeyword(word)}
                      className="bg-gray-800/50 border border-cyan-500/30 px-4 py-2 rounded-full cursor-pointer hover:bg-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 transition duration-300"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </section>

              {/* Insert AD after each category except last */}
              {index === 0 && (
                <div className="adsense mt-8 w-full">
                  <ins className="adsbygoogle"
                      style={{ display: 'block' }}
                      data-ad-client="ca-pub-6865939387108271"
                      data-ad-slot="7352451765"
                      data-ad-format="auto"
                      data-full-width-responsive="true"></ins>
                </div>
              )}

              {index === 1 && (
                <div className="adsense mt-8 w-full">
                  <ins className="adsbygoogle"
                      style={{ display: 'block' }}
                      data-ad-client="ca-pub-6865939387108271"
                      data-ad-slot="8056009400"
                      data-ad-format="auto"
                      data-full-width-responsive="true"></ins>
                </div>
              )}

              {index === 2 && (
                <div className="adsense mt-8 w-full">
                  <ins className="adsbygoogle"
                      style={{ display: 'block' }}
                      data-ad-client="ca-pub-6865939387108271"
                      data-ad-slot="3281344818"
                      data-ad-format="auto"
                      data-full-width-responsive="true"></ins>
                </div>
              )}

              {index === 3 && (
                <div className="adsense mt-8 w-full">
                  <ins className="adsbygoogle"
                      style={{ display: 'block' }}
                      data-ad-client="ca-pub-6865939387108271"
                      data-ad-slot="4240646223"
                      data-ad-format="auto"
                      data-full-width-responsive="true"></ins>
                </div>
              )}

              {index === 4 && (
                <div className="adsense mt-8 w-full">
                  <ins className="adsbygoogle"
                      style={{ display: 'block' }}
                      data-ad-client="ca-pub-6865939387108271"
                      data-ad-slot="2927564558"
                      data-ad-format="auto"
                      data-full-width-responsive="true"></ins>
                </div>
              )}

              {index === 5 && (
                <div className="adsense mt-8 w-full">
                  <ins className="adsbygoogle"
                      style={{ display: 'block' }}
                      data-ad-client="ca-pub-6865939387108271"
                      data-ad-slot="8342099801"
                      data-ad-format="auto"
                      data-full-width-responsive="true"></ins>
                </div>
              )}
            </React.Fragment>
          ))}
        </main>

        {/* Google Search Results */}
        <div id="searchresults-only0" className="mt-6 bg-gray-800/50 rounded-xl p-4 border border-gray-700"></div>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm mt-12">
          <div className="flex justify-center items-center flex-wrap gap-6 text-sm underline">
            <button onClick={() => openModal('privacy')} className="hover:text-cyan-400 transition">سياسة الخصوصية</button>
            <button onClick={() => openModal('terms')} className="hover:text-cyan-400 transition">شروط الاستخدام</button>
            <button onClick={() => openModal('contact')} className="hover:text-cyan-400 transition">اتصل بنا</button>
          </div>
          <p className="mt-4">© 2025 AI World Search — {lang[language].footerRights}</p>
        </footer>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-gray-900 rounded-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 relative border border-cyan-500/30">
              <button onClick={closeModal} className="absolute top-4 left-4 text-2xl">×</button>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">{modalContent.title}</h2>
              <div>{modalContent.body}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
