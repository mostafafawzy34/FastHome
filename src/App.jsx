import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app" dir="rtl">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>

            <div className="logo-mark">
              <span>F</span>
            </div>

            <div className="logo-text">
              <strong>Fast Home Fix</strong>
              <small>للأعمال المنزلية</small>
            </div>

          </a>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>

            <a href="#home" onClick={closeMenu}>
              الرئيسية
            </a>

            <a href="#services" onClick={closeMenu}>
              خدماتنا
            </a>

            <a href="#about" onClick={closeMenu}>
              من نحن
            </a>

            <a href="#areas" onClick={closeMenu}>
              مناطق الخدمة
            </a>

            <a href="#contact" onClick={closeMenu}>
              تواصل معنا
            </a>

          </nav>

          <a
            href="tel:+201068916168"
            className="nav-call"
          >
            اتصل الآن
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="فتح القائمة"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">

          {/* Animated background shapes */}

          <div className="hero-orb orb-one"></div>
          <div className="hero-orb orb-two"></div>
          <div className="hero-orb orb-three"></div>

          <div className="hero-line line-one"></div>
          <div className="hero-line line-two"></div>

          <div className="container hero-container">

            <div className="hero-content">

              <div className="hero-badge">
                <span className="badge-dot"></span>
                خدمة منزلية موثوقة في منطقتك
              </div>

              <h1>
                كل حاجة في البيت
                <br />
                <span>محتاجة تتصلح؟</span>
                <br />
                إحنا موجودين.
              </h1>

              <p className="hero-description">
                Fast Home Fix يوفر لك خدمات الصيانة المنزلية
                في مكان واحد — سباكة، كهرباء، نجارة، دش ورسيفر
                وتشطيبات وصيانة منزلية.
              </p>

              <div className="hero-buttons">

                <a
                  href="tel:+201068916168"
                  className="btn btn-primary"
                >
                  <span className="btn-icon">☎</span>
                  اتصل بنا
                </a>

                <a
                  href="https://wa.me/201068916168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <span className="whatsapp-symbol">●</span>
                  راسلنا على واتساب
                </a>

              </div>


              <div className="hero-trust">

                <div className="trust-item">
                  <strong>✓</strong>
                  <span>أمانة</span>
                </div>

                <div className="trust-item">
                  <strong>✓</strong>
                  <span>جودة</span>
                </div>

                <div className="trust-item">
                  <strong>✓</strong>
                  <span>التزام</span>
                </div>

                <div className="trust-item">
                  <strong>✓</strong>
                  <span>سعر مناسب</span>
                </div>

              </div>

            </div>


            {/* HERO VISUAL */}

            <div className="hero-visual">

              <div className="visual-ring ring-one"></div>
              <div className="visual-ring ring-two"></div>

              <div className="visual-glow"></div>

              <div className="card-wrapper">

                <div className="card-decoration decoration-one"></div>
                <div className="card-decoration decoration-two"></div>
                <div className="card-decoration decoration-three"></div>

                <img
                  src="/card.jpg"
                  alt="Fast Home Fix"
                  className="business-card"
                />

              </div>


              <div className="floating-box floating-top">

                <div className="floating-icon">
                  🔧
                </div>

                <div>
                  <strong>صيانة منزلية</strong>
                  <span>حلول سريعة</span>
                </div>

              </div>


              <div className="floating-box floating-bottom">

                <div className="floating-icon yellow-icon">
                  ✓
                </div>

                <div>
                  <strong>Fast Home Fix</strong>
                  <span>خدمة موثوقة</span>
                </div>

              </div>


              <div className="floating-location">

                <span>●</span>

                <div>
                  <strong>نخدم منطقتك</strong>
                  <small>الرحاب • التجمع • مدينتي</small>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= MOVING SERVICE STRIP ================= */}

        <div className="service-strip">

          <div className="service-strip-track">

            <span>🚰 سباكة</span>
            <span>⚡ كهرباء</span>
            <span>🪚 نجارة</span>
            <span>📡 دش ورسيفر</span>
            <span>🏠 تشطيبات</span>

            <span>🚰 سباكة</span>
            <span>⚡ كهرباء</span>
            <span>🪚 نجارة</span>
            <span>📡 دش ورسيفر</span>
            <span>🏠 تشطيبات</span>

            <span>🚰 سباكة</span>
            <span>⚡ كهرباء</span>
            <span>🪚 نجارة</span>
            <span>📡 دش ورسيفر</span>
            <span>🏠 تشطيبات</span>

          </div>

        </div>


        {/* ================= SERVICES ================= */}

        <section className="services section" id="services">

          <div className="container">

            <div className="section-heading">

              <div className="section-label">
                خدماتنا
              </div>

              <h2>
                كل خدمات الصيانة
                <span> في مكان واحد</span>
              </h2>

              <p>
                مهما كانت المشكلة في منزلك، نوفر لك مجموعة من
                خدمات الصيانة والتركيب والتشطيب لتلبية احتياجاتك.
              </p>

            </div>


            <div className="services-grid">


              {/* Plumbing */}

              <div className="service-card service-plumbing">

                <div className="service-top">

                  <div className="service-icon">
                    🚰
                  </div>

                  <span className="service-number">
                    01
                  </span>

                </div>

                <h3>
                  سباكة
                </h3>

                <p>
                  إصلاح الأعطال والتسريبات والتركيبات
                  وأعمال السباكة المنزلية المختلفة.
                </p>

                <div className="service-link">
                  اطلب الخدمة
                  <span>←</span>
                </div>

              </div>


              {/* Electricity */}

              <div className="service-card service-electric">

                <div className="service-top">

                  <div className="service-icon">
                    ⚡
                  </div>

                  <span className="service-number">
                    02
                  </span>

                </div>

                <h3>
                  كهرباء
                </h3>

                <p>
                  صيانة وإصلاح الأعطال الكهربائية
                  والتركيبات المنزلية.
                </p>

                <div className="service-link">
                  اطلب الخدمة
                  <span>←</span>
                </div>

              </div>


              {/* Carpentry */}

              <div className="service-card service-wood">

                <div className="service-top">

                  <div className="service-icon">
                    🪚
                  </div>

                  <span className="service-number">
                    03
                  </span>

                </div>

                <h3>
                  نجارة
                </h3>

                <p>
                  إصلاح وتركيب الأبواب والأثاث
                  والأعمال الخشبية المنزلية.
                </p>

                <div className="service-link">
                  اطلب الخدمة
                  <span>←</span>
                </div>

              </div>


              {/* Satellite */}

              <div className="service-card service-satellite">

                <div className="service-top">

                  <div className="service-icon">
                    📡
                  </div>

                  <span className="service-number">
                    04
                  </span>

                </div>

                <h3>
                  دش ورسيفر
                </h3>

                <p>
                  تركيب وضبط وصيانة الدش والرسيفرات
                  وحل مشاكل الإشارة والاستقبال.
                </p>

                <div className="service-link">
                  اطلب الخدمة
                  <span>←</span>
                </div>

              </div>


              {/* Home finishing */}

              <div className="service-card service-finishing">

                <div className="service-top">

                  <div className="service-icon">
                    🏠
                  </div>

                  <span className="service-number">
                    05
                  </span>

                </div>

                <h3>
                  تشطيبات وصيانة منزلية
                </h3>

                <p>
                  أعمال منزلية متنوعة حسب احتياجك
                  وتجهيز وصيانة المساحات المختلفة.
                </p>

                <div className="service-link">
                  اطلب الخدمة
                  <span>←</span>
                </div>

              </div>


              {/* CTA card */}

              <div className="service-cta-card">

                <div className="service-cta-pattern"></div>

                <div className="service-cta-content">

                  <span className="service-cta-small">
                    عندك مشكلة؟
                  </span>

                  <h3>
                    خلينا نساعدك
                  </h3>

                  <p>
                    تواصل معنا لمعرفة الخدمة المناسبة
                    لاحتياجك.
                  </p>

                  <a
                    href="tel:+201068916168"
                    className="service-cta-button"
                  >
                    اتصل الآن
                    <span>←</span>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section className="about section" id="about">

          <div className="container about-container">


            <div className="about-image">

              <div className="about-image-background"></div>

              <div className="about-circle-one"></div>
              <div className="about-circle-two"></div>

              <img
                src="/card.jpg"
                alt="Fast Home Fix"
              />

              <div className="about-stamp">

                <strong>FAST</strong>
                <span>HOME FIX</span>

              </div>

            </div>


            <div className="about-content">

              <div className="section-label">
                من نحن
              </div>

              <h2>
                خدمة محترمة،
                <span> شغل نضيف،</span>
                وسعر مناسب.
              </h2>

              <p>
                Fast Home Fix هو حل عملي لخدمات الصيانة المنزلية،
                بحيث تقدر تلاقي الخدمات الأساسية التي يحتاجها
                منزلك في مكان واحد.
              </p>

              <p>
                من إصلاح التسريبات والأعطال الكهربائية،
                إلى النجارة والدش والتشطيبات والصيانة المنزلية.
              </p>


              <div className="about-list">

                <div>
                  <span>✓</span>
                  <strong>أمانة في التعامل</strong>
                </div>

                <div>
                  <span>✓</span>
                  <strong>جودة في التنفيذ</strong>
                </div>

                <div>
                  <span>✓</span>
                  <strong>التزام بالمواعيد</strong>
                </div>

                <div>
                  <span>✓</span>
                  <strong>أسعار مناسبة</strong>
                </div>

              </div>


              <a
                href="#contact"
                className="btn btn-dark"
              >
                تواصل معنا
                <span>←</span>
              </a>

            </div>

          </div>

        </section>


        {/* ================= AREAS ================= */}

        <section className="areas section" id="areas">

          <div className="container">

            <div className="section-heading">

              <div className="section-label">
                مناطق الخدمة
              </div>

              <h2>
                بنوصلك في
                <span> منطقتك</span>
              </h2>

              <p>
                نقدم خدماتنا في مجموعة من المناطق داخل القاهرة
                والمناطق المحيطة.
              </p>

            </div>


            <div className="areas-grid">

              <div className="area-card">
                <span>●</span>
                الرحاب
              </div>

              <div className="area-card">
                <span>●</span>
                التجمع
              </div>

              <div className="area-card">
                <span>●</span>
                مدينتي
              </div>

              <div className="area-card">
                <span>●</span>
                الشروق
              </div>

              <div className="area-card">
                <span>●</span>
                العبور
              </div>

              <div className="area-card">
                <span>●</span>
                مدينة نصر
              </div>

              <div className="area-card">
                <span>●</span>
                العاصمة
              </div>

            </div>


           

          </div>

        </section>


        {/* ================= WHY US ================= */}

        <section className="why-us section">

          <div className="container">

            <div className="section-heading">

              <div className="section-label">
                لماذا Fast Home Fix؟
              </div>

              <h2>
                لأن الخدمة
                <span> تفرق</span>
              </h2>

              <p>
                هدفنا إنك تلاقي خدمة محترمة، شغل نضيف،
                وسعر مناسب.
              </p>

            </div>


            <div className="advantages">

              <div className="advantage">

                <div className="advantage-icon">
                  01
                </div>

                <h3>
                  أمانة
                </h3>

                <p>
                  التعامل الواضح والاهتمام باحتياج العميل.
                </p>

              </div>


              <div className="advantage">

                <div className="advantage-icon">
                  02
                </div>

                <h3>
                  جودة
                </h3>

                <p>
                  الاهتمام بالتفاصيل وجودة تنفيذ الأعمال.
                </p>

              </div>


              <div className="advantage">

                <div className="advantage-icon">
                  03
                </div>

                <h3>
                  التزام
                </h3>

                <p>
                  نحرص على تنظيم الخدمة والتواصل مع العميل.
                </p>

              </div>


              <div className="advantage">

                <div className="advantage-icon">
                  04
                </div>

                <h3>
                  سعر مناسب
                </h3>

                <p>
                  حلول مناسبة لاحتياجات المنزل وميزانية العميل.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROCESS ================= */}

        <section className="process section">

          <div className="container">

            <div className="process-wrapper">

              <div className="process-title">

                <div className="section-label">
                  طريقة العمل
                </div>

                <h2>
                  من المشكلة
                  <br />
                  <span>للحل.</span>
                </h2>

                <p>
                  خطوات بسيطة عشان تحصل على الخدمة
                  اللي محتاجها بدون تعقيد.
                </p>

              </div>


              <div className="process-steps">

                <div className="process-step">

                  <span>01</span>

                  <div>
                    <h3>
                      تواصل معنا
                    </h3>

                    <p>
                      اتصل بنا أو راسلنا على واتساب.
                    </p>
                  </div>

                </div>


                <div className="process-step">

                  <span>02</span>

                  <div>
                    <h3>
                      احكيلنا المشكلة
                    </h3>

                    <p>
                      وضح لنا نوع العطل أو الخدمة المطلوبة.
                    </p>
                  </div>

                </div>


                <div className="process-step">

                  <span>03</span>

                  <div>
                    <h3>
                      نحدد المطلوب
                    </h3>

                    <p>
                      نتعرف على احتياجك ونحدد طريقة الخدمة.
                    </p>
                  </div>

                </div>


                <div className="process-step">

                  <span>04</span>

                  <div>
                    <h3>
                      نبدأ الشغل
                    </h3>

                    <p>
                      يتم تنفيذ الخدمة حسب الاتفاق.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="cta" id="contact">

          <div className="cta-pattern pattern-one"></div>
          <div className="cta-pattern pattern-two"></div>

          <div className="container cta-container">

            <div className="cta-content">

              <div className="cta-label">
                Fast Home Fix
              </div>

              <h2>
                أي حاجة في البيت
                <br />
                <span>محتاجة تتصلح؟</span>
              </h2>

              <p>
                سباكة • كهرباء • نجارة • دش • تشطيبات
              </p>

            </div>


            <div className="cta-actions">

              <a
                href="tel:+201068916168"
                className="cta-phone"
              >

                <span>
                  ☎
                </span>

                <div>

                  <small>
                    اتصل بنا
                  </small>

                  <strong>
                    010 6891 6168
                  </strong>

                </div>

              </a>


              <a
                href="https://wa.me/201068916168"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp"
              >
                راسلنا على واتساب
                <span>↗</span>
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-container">

          <div className="footer-brand">

            <div className="footer-logo">

              <div className="logo-mark">
                <span>F</span>
              </div>

              <div className="logo-text">

                <strong>
                  Fast Home Fix
                </strong>

                <small>
                  للأعمال المنزلية
                </small>

              </div>

            </div>

            <p>
              أمانة • جودة • التزام • سعر مناسب
            </p>

          </div>


          <div className="footer-links">

            <a href="#home">
              الرئيسية
            </a>

            <a href="#services">
              خدماتنا
            </a>

            <a href="#about">
              من نحن
            </a>

            <a href="#areas">
              مناطق الخدمة
            </a>

            <a href="#contact">
              تواصل معنا
            </a>

          </div>


          <div className="footer-contact">

            <a href="tel:+201068916168">
              010 6891 6168
            </a>

            <a href="tel:+201146625801">
              011 4662 5801
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <div className="container">

            <p>
              © {new Date().getFullYear()} Fast Home Fix. جميع الحقوق محفوظة.
            </p>

          </div>

        </div>

      </footer>


      {/* ================= FLOATING WHATSAPP ================= */}

      <a
        href="https://wa.me/201068916168"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="واتساب"
      >
        <span>●</span>
      </a>

    </div>
  );
}

export default App;