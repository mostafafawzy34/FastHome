import { useState } from "react";
import { galleryImages } from "./galleryData";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const featuredImages = galleryImages.filter((image) => image.featured);
  const otherImages = galleryImages.filter((image) => !image.featured);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPreviousImage = () => {
    if (!selectedImage) return;

    const currentIndex = galleryImages.findIndex(
      (image) => image.src === selectedImage.src
    );

    const previousIndex =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;

    setSelectedImage(galleryImages[previousIndex]);
  };

  const showNextImage = () => {
    if (!selectedImage) return;

    const currentIndex = galleryImages.findIndex(
      (image) => image.src === selectedImage.src
    );

    const nextIndex =
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;

    setSelectedImage(galleryImages[nextIndex]);
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

            <a href="#gallery" onClick={closeMenu}>
              أعمالنا
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


      <main>

        {/* ================= HERO ================= */}

        <section className="hero" id="home">

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


        {/* ================= GALLERY ================= */}

        <section className="gallery-section" id="gallery">

          <style>{`
            .gallery-section {
              position: relative;
              padding: 110px 0;
              overflow: hidden;
              background: #f8f8f6;
            }

            .gallery-section::before {
              content: "";
              position: absolute;
              width: 420px;
              height: 420px;
              border-radius: 50%;
              background: rgba(255, 210, 28, 0.10);
              top: -180px;
              left: -140px;
              filter: blur(5px);
              pointer-events: none;
            }

            .gallery-section::after {
              content: "";
              position: absolute;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: rgba(0, 0, 0, 0.035);
              bottom: -140px;
              right: -100px;
              pointer-events: none;
            }

            .gallery-heading {
              position: relative;
              z-index: 2;
              text-align: center;
              max-width: 720px;
              margin: 0 auto 55px;
            }

            .gallery-label {
              display: inline-flex;
              align-items: center;
              gap: 9px;
              padding: 9px 16px;
              border-radius: 999px;
              background: rgba(255, 210, 28, 0.14);
              color: #111;
              font-size: 14px;
              font-weight: 800;
              margin-bottom: 18px;
            }

            .gallery-label::before {
              content: "";
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #ffd21c;
              box-shadow: 0 0 0 5px rgba(255, 210, 28, 0.16);
            }

            .gallery-heading h2 {
              margin: 0 0 18px;
              font-size: clamp(34px, 5vw, 58px);
              line-height: 1.1;
              font-weight: 900;
              color: #111;
            }

            .gallery-heading h2 span {
              position: relative;
              display: inline-block;
              z-index: 1;
            }

            .gallery-heading h2 span::after {
              content: "";
              position: absolute;
              height: 12px;
              left: 0;
              right: 0;
              bottom: 1px;
              background: #ffd21c;
              z-index: -1;
              transform: skewX(-18deg);
              opacity: 0.9;
            }

            .gallery-heading p {
              margin: 0;
              color: #666;
              font-size: 17px;
              line-height: 1.9;
            }

            .gallery-featured {
              position: relative;
              z-index: 2;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 18px;
            }

            .gallery-card {
              position: relative;
              overflow: hidden;
              border-radius: 24px;
              background: #ddd;
              aspect-ratio: 4 / 3;
              cursor: pointer;
              box-shadow: 0 18px 45px rgba(0, 0, 0, 0.10);
              transform: translateY(0);
              transition:
                transform 0.35s ease,
                box-shadow 0.35s ease;
            }

            .gallery-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 28px 60px rgba(0, 0, 0, 0.17);
            }

            .gallery-card img {
              width: 100%;
              height: 100%;
              display: block;
              object-fit: cover;
              transition: transform 0.7s ease;
            }

            .gallery-card:hover img {
              transform: scale(1.08);
            }

            .gallery-overlay {
              position: absolute;
              inset: 0;
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              padding: 20px;
              background:
                linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.65),
                  rgba(0, 0, 0, 0.02) 60%
                );
              opacity: 0;
              transition: opacity 0.35s ease;
            }

            .gallery-card:hover .gallery-overlay {
              opacity: 1;
            }

            .gallery-overlay span {
              color: white;
              font-size: 14px;
              font-weight: 800;
            }

            .gallery-view-icon {
              width: 44px;
              height: 44px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              background: #ffd21c;
              color: #111;
              font-size: 20px;
              font-weight: 900;
            }

            .gallery-more {
              position: relative;
              z-index: 2;
              display: flex;
              justify-content: center;
              margin-top: 35px;
            }

            .gallery-more-button {
              border: 0;
              cursor: pointer;
              padding: 15px 28px;
              border-radius: 999px;
              background: #111;
              color: white;
              font-family: inherit;
              font-size: 15px;
              font-weight: 800;
              display: inline-flex;
              align-items: center;
              gap: 12px;
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.16);
              transition:
                transform 0.3s ease,
                background 0.3s ease;
            }

            .gallery-more-button:hover {
              transform: translateY(-4px);
              background: #222;
            }

            .gallery-more-button span {
              font-size: 18px;
            }

            .gallery-all {
              position: relative;
              z-index: 2;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 18px;
              margin-top: 24px;
              animation: galleryAppear 0.5s ease both;
            }

            @keyframes galleryAppear {
              from {
                opacity: 0;
                transform: translateY(20px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .gallery-all .gallery-card {
              aspect-ratio: 4 / 3;
            }

            .gallery-count {
              margin-top: 18px;
              color: #777;
              font-size: 13px;
              text-align: center;
            }

            .gallery-lightbox {
              position: fixed;
              inset: 0;
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 30px;
              background: rgba(0, 0, 0, 0.94);
              animation: lightboxFade 0.25s ease both;
            }

            @keyframes lightboxFade {
              from {
                opacity: 0;
              }

              to {
                opacity: 1;
              }
            }

            .gallery-lightbox-image {
              max-width: min(1100px, 90vw);
              max-height: 82vh;
              width: auto;
              height: auto;
              object-fit: contain;
              border-radius: 12px;
              box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
              animation: imageZoom 0.3s ease both;
            }

            @keyframes imageZoom {
              from {
                opacity: 0;
                transform: scale(0.94);
              }

              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            .gallery-close {
              position: fixed;
              top: 22px;
              left: 22px;
              width: 48px;
              height: 48px;
              border: 0;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.12);
              color: white;
              cursor: pointer;
              font-size: 28px;
              line-height: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background 0.25s ease;
              z-index: 10001;
            }

            .gallery-close:hover {
              background: rgba(255, 255, 255, 0.24);
            }

            .gallery-nav {
              position: fixed;
              top: 50%;
              transform: translateY(-50%);
              width: 52px;
              height: 52px;
              border: 0;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.12);
              color: white;
              cursor: pointer;
              font-size: 28px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition:
                background 0.25s ease,
                transform 0.25s ease;
              z-index: 10001;
            }

            .gallery-nav:hover {
              background: rgba(255, 255, 255, 0.24);
            }

            .gallery-prev {
              left: 22px;
            }

            .gallery-next {
              right: 22px;
            }

            .gallery-counter {
              position: fixed;
              bottom: 25px;
              left: 50%;
              transform: translateX(-50%);
              color: rgba(255, 255, 255, 0.85);
              font-size: 14px;
              font-weight: 700;
              background: rgba(255, 255, 255, 0.1);
              padding: 8px 15px;
              border-radius: 999px;
              z-index: 10001;
            }

            @media (max-width: 1000px) {
              .gallery-featured,
              .gallery-all {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (max-width: 600px) {
              .gallery-section {
                padding: 75px 0;
              }

              .gallery-heading {
                margin-bottom: 35px;
              }

              .gallery-heading p {
                font-size: 15px;
              }

              .gallery-featured,
              .gallery-all {
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
              }

              .gallery-card {
                border-radius: 15px;
              }

              .gallery-overlay {
                opacity: 1;
                padding: 10px;
              }

              .gallery-overlay span {
                font-size: 11px;
              }

              .gallery-view-icon {
                width: 34px;
                height: 34px;
                font-size: 15px;
              }

              .gallery-lightbox {
                padding: 15px;
              }

              .gallery-lightbox-image {
                max-width: 94vw;
                max-height: 75vh;
                border-radius: 8px;
              }

              .gallery-close {
                top: 14px;
                left: 14px;
                width: 42px;
                height: 42px;
                font-size: 23px;
              }

              .gallery-nav {
                width: 42px;
                height: 42px;
                font-size: 22px;
              }

              .gallery-prev {
                left: 10px;
              }

              .gallery-next {
                right: 10px;
              }
            }
          `}</style>


          <div className="container">

            <div className="gallery-heading">

              <div className="gallery-label">
                من أعمالنا
              </div>

              <h2>
                شغل اتعمل
                <span> على أرض الواقع</span>
              </h2>

              <p>
                شوف بعض من أعمال Fast Home Fix والمشاريع اللي نفذناها
                في خدمات الصيانة والتركيب والتجهيز.
              </p>

            </div>


            {/* FEATURED PHOTOS */}

            {featuredImages.length > 0 && (
              <div className="gallery-featured">

                {featuredImages.map((image, index) => (
                  <div
                    className="gallery-card"
                    key={image.src}
                    onClick={() => openImage(image)}
                  >

                    <img
                      src={image.src}
                      alt={`من أعمال Fast Home Fix ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />

                    <div className="gallery-overlay">
                      <span>من أعمالنا</span>

                      <div className="gallery-view-icon">
                        ↗
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            )}


            {/* ALL OTHER PHOTOS */}

            {showAllGallery && otherImages.length > 0 && (
              <div className="gallery-all">

                {otherImages.map((image, index) => (
                  <div
                    className="gallery-card"
                    key={image.src}
                    onClick={() => openImage(image)}
                  >

                    <img
                      src={image.src}
                      alt={`من أعمال Fast Home Fix ${index + 5}`}
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="gallery-overlay">
                      <span>من أعمالنا</span>

                      <div className="gallery-view-icon">
                        ↗
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            )}


            {otherImages.length > 0 && (
              <div className="gallery-more">

                <button
                  type="button"
                  className="gallery-more-button"
                  onClick={() => setShowAllGallery(!showAllGallery)}
                >

                  {showAllGallery
                    ? "إخفاء باقي الأعمال"
                    : "عرض جميع الأعمال"}

                  <span>
                    {showAllGallery ? "↑" : "↓"}
                  </span>

                </button>

              </div>
            )}


            <div className="gallery-count">
              {galleryImages.length > 0
                ? `عرض ${galleryImages.length} صورة من أعمال Fast Home Fix`
                : "أضف صور أعمالك إلى مجلد gallery"}
            </div>

          </div>


          {/* ================= FULLSCREEN IMAGE VIEWER ================= */}

          {selectedImage && (

            <div
              className="gallery-lightbox"
              onClick={closeImage}
            >

              <button
                type="button"
                className="gallery-close"
                onClick={(event) => {
                  event.stopPropagation();
                  closeImage();
                }}
                aria-label="إغلاق الصورة"
              >
                ×
              </button>


              <button
                type="button"
                className="gallery-nav gallery-prev"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                aria-label="الصورة السابقة"
              >
                ‹
              </button>


              <img
                src={selectedImage.src}
                alt="Fast Home Fix"
                className="gallery-lightbox-image"
                onClick={(event) => event.stopPropagation()}
              />


              <button
                type="button"
                className="gallery-nav gallery-next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                aria-label="الصورة التالية"
              >
                ›
              </button>


              <div className="gallery-counter">
                {galleryImages.findIndex(
                  (image) => image.src === selectedImage.src
                ) + 1}
                {" / "}
                {galleryImages.length}
              </div>

            </div>

          )}

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

            <a href="#gallery">
              أعمالنا
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

  {/* QR Code Container */}
  <div style={{ marginTop: "15px", background: "#ffffff", padding: "10px", borderRadius: "8px", display: "inline-block" }}>
    <QRCodeSVG 
      value="https://fast-home.vercel.app/" 
      size={140}
      level="H"
      includeMargin={false}
    />
  </div>

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