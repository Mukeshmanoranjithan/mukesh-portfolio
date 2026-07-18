/* ==========================================================================
   Mukesh Manoranjithan Portfolio - Interactive Controller (JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. Bilingual Translation Data
    // ==========================================================================
    const translationData = {
        en: {
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navPatents: "Patents",
            navCertificates: "Certifications",
            navContact: "Contact",
            heroSub: "Software Engineer",
            heroTitle: "Mukesh Manoranjithan",
            heroIntro: "Software Engineer and AI & Data Science undergraduate with expertise in Python, Java, SQL, PHP, and backend development. Experienced in building full-stack applications, machine learning solutions, and IoT systems.",
            heroContactBtn: "Get In Touch",
            aboutTitle: "About Me",
            aboutSummary: "Professional Summary",
            aboutText: "I engineer backend services and machine learning systems that turn complex data streams into structured, actionable insights. With a focus on performance, security, and data integrity, I design systems that leverage predictive algorithms, secure redaction pipelines, and real-time sensor fusion. JLPT N3 certified, enabling seamless translation of complex technical requirements between English and Japanese development teams.",
            eduTitle: "Education",
            eduCollege: "M. Kumarasamy College of Engineering, Karur",
            eduCollegeSub: "B.Tech in Artificial Intelligence and Data Science",
            eduCollegeYear: "2023 — 2027",
            eduSchool: "Kongu Higher Secondary School",
            eduSchoolSub: "Higher Secondary Course",
            eduSchoolGrade: "Grade: 89%",
            skillsTitle: "Technical Expertise",
            skillsLang: "Languages",
            skillsBackend: "Backend / Database",
            skillsFrontend: "Frontend",
            skillsML: "AI / ML / Data Science",
            skillsTools: "Developer Tools",
            skillsConcepts: "Core Concepts",
            skillsSpoken: "Spoken Languages",
            langEnglish: "English (Professional)",
            langTamil: "Tamil (Native)",
            langJapanese: "Japanese (JLPT N3)",
            langGerman: "German (Competence)",
            projectsTitle: "Featured Projects",
            projectsViewGithub: "View Repository",
            projectExpenseTitle: "Personal Expense Tracker",
            projectExpenseDesc: "Designed an MVC financial logging system utilizing secure session handlers, query optimizations, and normalizations (3NF) to track and analyze personal transaction telemetry. Features a dynamic PHP analytics engine.",
            projectTourismTitle: "Insightful Indian Tourism Explorer",
            projectTourismDesc: "Engineered an ETL pipeline parsing geographic tourism datasets, resolving anomalies using Python/Pandas. Modeled statistical demand patterns and compiled key regional performance indexes in Power BI.",
            projectChurnTitle: "Customer Churn Prediction",
            projectChurnDesc: "Constructed a binary classification engine comparing XGBoost, Random Forests, and SVMs. Integrated Optuna for hyperparameter optimization and deployed SHAP values for model explainability and feature importance analysis.",
            patentsTitle: "Published Patents",
            patentBlurDTitle: "BlurD – AI-Based Document Redaction System",
            patentBlurDDesc: "Co-invented an automated compliance pipeline detecting and redacting sensitive PII in scanned document structures. Integrates LayoutLMv3 for layout analysis, Named Entity Recognition (NER), custom OCR error-corrections, and RAG validation.",
            patentHelmetTitle: "Smart Helmet for Rider Safety",
            patentHelmetDesc: "Developed a real-time hardware-software telemetry module. Implemented Kalman filtering for sensor fusion on raw accelerometer data, ESP32 FreeRTOS multitasking, and automatic GPS/GSM emergency broadcast protocols.",
            patentAttachment: "Patent Grant Certificate",
            certTitle: "Certifications",
            certSub: "Verified professional accomplishments and educational milestones",
            contactTitle: "Get In Touch",
            contactSub: "Feel free to reach out for collaborations, job opportunities, or inquiries.",
            contactBtn: "Send Message",
            footerText: "© 2026 Mukesh Manoranjithan. All rights reserved.",
        },
        ja: {
            navHome: "ホーム",
            navAbout: "自己紹介",
            navSkills: "スキル",
            navProjects: "実績",
            navPatents: "公開特許",
            navCertificates: "認定資格",
            navContact: "お問い合わせ",
            heroSub: "ソフトウェアエンジニア",
            heroTitle: "ムケシュ・マノランジザン",
            heroIntro: "Python、Java、SQL、PHP、およびバックエンド開発を専門とするソフトウェアエンジニアであり、AI・データサイエンス分野の学部生。フルスタックアプリ、機械学習ソリューション、およびIoTシステムの開発経験があります。",
            heroContactBtn: "お問い合わせ",
            aboutTitle: "自己紹介",
            aboutSummary: "プロフィール概要",
            aboutText: "複雑なデータストリームを構造化され実用的な洞察に変換するバックエンドサービスと機械学習システムを構築しています。パフォーマンス、セキュリティ、およびデータの整合性に焦点を当て、予測アルゴリズム、安全な黒塗り（マスキング）パイプライン、リアルタイムのセンサーフュージョンを活用したシステムを設計しています。JLPT N3を保有し、英語と日本語の開発チーム間で複雑な技術要件をシームレスに翻訳できます。",
            eduTitle: "学歴",
            eduCollege: "M. クマラスアミ工科大学 (カルール)",
            eduCollegeSub: "人工知能＆データサイエンス専攻 工学士（B.Tech）",
            eduCollegeYear: "2023年 — 2027年",
            eduSchool: "コング高等中等学校",
            eduSchoolSub: "高等中等教育課程",
            eduSchoolGrade: "評定: 89%",
            skillsTitle: "技術スキル",
            skillsLang: "プログラミング言語",
            skillsBackend: "バックエンド / DB",
            skillsFrontend: "フロントエンド",
            skillsML: "AI / 機械学習 / データ分析",
            skillsTools: "開発ツール",
            skillsConcepts: "基本概念",
            skillsSpoken: "語学能力",
            langEnglish: "英語（実務レベル）",
            langTamil: "タミル語（母国語）",
            langJapanese: "日本語（JLPT N3）",
            langGerman: "ドイツ語（基礎レベル）",
            projectsTitle: "主なプロジェクト",
            projectsViewGithub: "リポジトリを見る",
            projectExpenseTitle: "個人用経費トラッカー",
            projectExpenseDesc: "セキュアなセッションハンドラ、クエリ最適化、および関係データベースの正規化（3NF）を利用したMVC財務ログシステムを設計。動的なPHP分析エンジンを搭載。",
            projectTourismTitle: "インド観光エクスプローラー",
            projectTourismDesc: "地理的観光データセットを解析するETLパイプラインを構築し、Python/Pandasを使用してデータ異常値を解決。統計的需要パターンをモデル化し、Power BIで主要な地域パフォーマンス指標をコンパイル。",
            projectChurnTitle: "顧客離脱予測モデル",
            projectChurnDesc: "XGBoost、ランダムフォレスト、SVMを比較する二値分類予測エンジンを構築。ハイパーパラメータ調整のためにOptunaを統合し、モデルの説明可能性と特徴量重要度分析のためにSHAP値を適用。",
            patentsTitle: "公開特許",
            patentBlurDTitle: "BlurD – AIベース文書黒塗りシステム",
            patentBlurDDesc: "スキャン文書内の機密性の高いPII（個人情報）を自動的に検出してマスキングするコンプライアンスパイプラインを共同発明。レイアウト解析用のLayoutLMv3、固有表現抽出（NER）、OCRエラー補正、およびRAG検証を統合。",
            patentHelmetTitle: "ライダー用スマートヘルメット",
            patentHelmetDesc: "リアルタイムのハードウェア・ソフトウェア遠隔測定（テレメトリ）モジュールを開発。加速度センサーデータのノイズ削減用カルマンフィルタ、ESP32 FreeRTOSマルチタスク処理、およびGPS/GSM自動緊急放送プロトコルを実装。",
            patentAttachment: "特許付与証明書",
            certTitle: "認定資格",
            certSub: "これまでに取得した専門的な技術認定と教育的成果",
            contactTitle: "お問い合わせ",
            contactSub: "コラボレーション、お仕事のご依頼、その他ご質問などお気軽にご連絡ください。",
            contactBtn: "メッセージ送信",
            footerText: "© 2026 ムケシュ・マノランジザン. All rights reserved.",
        }
    };

    // ==========================================================================
    // 2. Certificate Database
    // ==========================================================================
    const certificateData = [
        {
            file: "certificates/converted/Deep Learning Fundamentals.png",
            en: { name: "Deep Learning Fundamentals", issuer: "IBM / Cognitive Class" },
            ja: { name: "ディープラーニング基礎", issuer: "IBM / Cognitive Class" }
        },
        {
            file: "certificates/converted/Introduction to Cognitive Psychology.png",
            en: { name: "Introduction to Cognitive Psychology", issuer: "NPTEL (Elite Certification)" },
            ja: { name: "認知心理学入門", issuer: "NPTEL (エリート優秀認定)" }
        },
        {
            file: "certificates/converted/Introduction To Industry 4.0 And Industrial.png",
            en: { name: "Industry 4.0 & Industrial IoT", issuer: "NPTEL Certification" },
            ja: { name: "インダストリー4.0＆産業用IoT", issuer: "NPTEL認定" }
        },
        {
            file: "certificates/converted/Predictive Modeling Fundamentals I.png",
            en: { name: "Predictive Modeling Fundamentals I", issuer: "IBM / Cognitive Class" },
            ja: { name: "予測モデリングの基礎 I", issuer: "IBM / Cognitive Class" }
        },
        {
            file: "certificates/converted/Python 101 for Data Science.png",
            en: { name: "Python 101 for Data Science", issuer: "IBM / Cognitive Class" },
            ja: { name: "データサイエンスのためのPython 101", issuer: "IBM / Cognitive Class" }
        },
        {
            file: "certificates/converted/SQL and Relational Databases 101.png",
            en: { name: "SQL and Relational Databases 101", issuer: "IBM / Cognitive Class" },
            ja: { name: "SQLおよびリレーショナルデータベース 101", issuer: "IBM / Cognitive Class" }
        },
        {
            file: "certificates/converted/Scala 101.png",
            en: { name: "Scala 101", issuer: "IBM / Cognitive Class" },
            ja: { name: "Scala 101", issuer: "IBM / Cognitive Class" }
        },
        {
            file: "certificates/converted/Spark Fundamentals 1.png",
            en: { name: "Spark Fundamentals I", issuer: "IBM / Cognitive Class" },
            ja: { name: "Spark基礎 I", issuer: "IBM / Cognitive Class" }
        },
        {
            file: "certificates/converted/The Joy of Computing using Python.png",
            en: { name: "The Joy of Computing using Python", issuer: "NPTEL Certification" },
            ja: { name: "Pythonによるコンピューティングの楽しさ", issuer: "NPTEL認定" }
        },
        {
            file: "certificates/converted/japanese-N4.jpeg",
            en: { name: "Japanese Language Proficiency Test (JLPT N4)", issuer: "JEES / Japan Foundation" },
            ja: { name: "日本語能力試験 (JLPT N4)", issuer: "日本国際教育支援協会 / 国際交流基金" }
        },
        {
            file: "certificates/converted/japanese_N5.png",
            en: { name: "Japanese Language Proficiency Test (JLPT N5)", issuer: "JEES / Japan Foundation" },
            ja: { name: "日本語能力試験 (JLPT N5)", issuer: "日本国際教育支援協会 / 国際交流基金" }
        },
        {
            file: "certificates/converted/german-lang-cert.png",
            en: { name: "German Language Certification", issuer: "Language Competence Certificate" },
            ja: { name: "ドイツ語語学認定書", issuer: "語学能力判定書" }
        }
    ];

    // ==========================================================================
    // 3. Language & Theme Management
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    let currentLang = localStorage.getItem('portfolio-lang') || 'en';

    function setLanguageAndTheme(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);
        
        const body = document.body;
        
        if (lang === 'ja') {
            body.classList.remove('theme-monochrome');
            body.classList.add('theme-sakura');
        } else {
            body.classList.remove('theme-sakura');
            body.classList.add('theme-monochrome');
        }

        // Apply translations with a smooth fade effect
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            const translation = translationData[lang][key];
            
            if (translation) {
                el.style.opacity = 0;
                setTimeout(() => {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = translation;
                    } else {
                        el.innerHTML = translation;
                    }
                    el.style.opacity = 1;
                    el.style.transition = 'opacity 0.3s ease';
                }, 150);
            }
        });

        // Re-generate carousel items to update their text labels based on theme
        renderCarouselItems();
    }

    // Toggle event listener
    themeToggleBtn.addEventListener('click', () => {
        const targetLang = currentLang === 'en' ? 'ja' : 'en';
        setLanguageAndTheme(targetLang);
    });

    // Initialization call moved to the bottom of the script to prevent temporal dead zone ReferenceErrors


    // Section 4 removed to replace flashy sakura canvas with professional clean design.


    // Mouse Move Parallax removed per user request.


    // ==========================================================================
    // 6. Scroll Parallax & Nav Active Link Switcher
    // ==========================================================================
    const scrollWatermark = document.querySelector('.hero-bg-text');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // 1. Shift hero watermark downward as we scroll
        if (scrollWatermark) {
            const speed = parseFloat(scrollWatermark.getAttribute('data-speed')) || 0.5;
            scrollWatermark.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
        }

        // 2. Navigation Link Highlighting on Scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            if (scrolled >= top && scrolled < top + height) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            // Desktop links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
            // Mobile links
            mobileLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });


    // ==========================================================================
    // 7. Scroll Reveal Observer
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // ==========================================================================
    // 8. Mobile Menu Toggle
    // ==========================================================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile nav when link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }


    // ==========================================================================
    // 9. Premium Drag-Snapping Carousel
    // ==========================================================================
    const track = document.getElementById('carousel-track');
    const nextBtn = document.getElementById('carousel-next');
    const prevBtn = document.getElementById('carousel-prev');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    
    let activeIndex = 0;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let isDragging = false;
    let animationID = 0;
    
    // Dynamic cards rendering
    function renderCarouselItems() {
        if (!track) return;
        track.innerHTML = '';
        
        certificateData.forEach((cert, idx) => {
            const name = cert[currentLang].name;
            const issuer = cert[currentLang].issuer;
            const clickText = currentLang === 'en' ? 'Click to view' : 'クリックして表示';
            
            const itemHTML = `
                <div class="carousel-item" data-index="${idx}">
                    <img src="${cert.file}" alt="${name}" loading="lazy">
                    <div class="carousel-overlay">
                        <h4>${name}</h4>
                        <p>${issuer}</p>
                        <span class="carousel-click-indicator">
                            <i class="fa-solid fa-expand"></i> ${clickText}
                        </span>
                    </div>
                </div>
            `;
            track.insertAdjacentHTML('beforeend', itemHTML);
        });

        // Add modal trigger events to new elements
        document.querySelectorAll('.carousel-item').forEach(item => {
            item.addEventListener('click', (e) => {
                // If dragged, avoid trigger modal
                if (Math.abs(currentTranslate - prevTranslate) > 5) return;
                const idx = parseInt(item.getAttribute('data-index'));
                openLightbox(idx);
            });
        });

        // Render indicators
        renderIndicators();
        
        // Reset slide snaps to zero
        snapToSlide(0);
    }

    function renderIndicators() {
        if (!indicatorsContainer) return;
        indicatorsContainer.innerHTML = '';
        const slidesCount = getSlidesCount();
        
        for (let i = 0; i < slidesCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('indicator-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                snapToSlide(i);
            });
            indicatorsContainer.appendChild(dot);
        }
    }

    function updateIndicators() {
        const dots = document.querySelectorAll('.indicator-dot');
        dots.forEach((dot, idx) => {
            dot.classList.remove('active');
            if (idx === activeIndex) dot.classList.add('active');
        });
    }

    function getSlidesCount() {
        const itemsPerView = getItemsPerView();
        return Math.max(1, certificateData.length - itemsPerView + 1);
    }

    function getItemsPerView() {
        if (window.innerWidth > 1024) return 3;
        if (window.innerWidth > 768) return 2;
        return 1;
    }

    function snapToSlide(index) {
        const maxIndex = getSlidesCount() - 1;
        activeIndex = Math.max(0, Math.min(index, maxIndex));
        
        const cardWidth = track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width : 340;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 30;
        
        currentTranslate = -activeIndex * (cardWidth + gap);
        prevTranslate = currentTranslate;
        
        track.style.transform = `translateX(${currentTranslate}px)`;
        updateIndicators();
        
        // Control disable arrow classes
        if (prevBtn) prevBtn.style.opacity = activeIndex === 0 ? '0.3' : '1';
        if (nextBtn) nextBtn.style.opacity = activeIndex === maxIndex ? '0.3' : '1';
    }

    // Carousel buttons listeners
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            snapToSlide(activeIndex + 1);
        });
        prevBtn.addEventListener('click', () => {
            snapToSlide(activeIndex - 1);
        });
    }

    // Touch & Mouse Drag actions
    if (track) {
        track.addEventListener('mousedown', dragStart);
        track.addEventListener('touchstart', dragStart);
        track.addEventListener('mouseup', dragEnd);
        track.addEventListener('touchend', dragEnd);
        track.addEventListener('mousemove', dragMove);
        track.addEventListener('touchmove', dragMove);
        track.addEventListener('mouseleave', dragEnd);
    }

    function dragStart(e) {
        isDragging = true;
        startX = getPositionX(e);
        track.style.transition = 'none'; // Disable animations during active drags
        animationID = requestAnimationFrame(dragAnimation);
    }

    function dragMove(e) {
        if (!isDragging) return;
        const currentPosition = getPositionX(e);
        const diff = currentPosition - startX;
        currentTranslate = prevTranslate + diff;
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        track.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        
        const cardWidth = track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width : 340;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 30;
        const step = cardWidth + gap;
        
        // Calculate nearest index
        const indexToSnap = Math.round(-currentTranslate / step);
        snapToSlide(indexToSnap);
    }

    function getPositionX(e) {
        return e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    }

    function dragAnimation() {
        if (isDragging) {
            track.style.transform = `translateX(${currentTranslate}px)`;
            requestAnimationFrame(dragAnimation);
        }
    }

    window.addEventListener('resize', () => {
        // Redraw indicator quantity and update translates appropriately
        renderIndicators();
        snapToSlide(activeIndex);
    });


    // ==========================================================================
    // 10. Certificate Lightbox Modal Controller
    // ==========================================================================
    const modal = document.getElementById('lightbox-modal');
    const modalImage = document.getElementById('lightbox-image');
    const modalCaption = document.getElementById('lightbox-caption');
    const modalDownload = document.getElementById('lightbox-download');
    const modalClose = document.getElementById('lightbox-close');
    const modalPrev = document.getElementById('lightbox-prev');
    const modalNext = document.getElementById('lightbox-next');
    
    let currentCertificateIndex = 0;

    function openLightbox(index) {
        currentCertificateIndex = index;
        updateLightboxContent();
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }

    // Direct standalone lightbox trigger for specific images (used by Patents cert link)
    window.openLightboxByFile = function(file, name, issuer) {
        modalImage.src = file;
        modalImage.alt = name;
        modalCaption.textContent = `${name} — ${issuer}`;
        modalDownload.href = file;
        modalPrev.style.display = 'none';
        modalNext.style.display = 'none';
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    };

    function closeLightbox() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    function updateLightboxContent() {
        const cert = certificateData[currentCertificateIndex];
        if (!cert) return;
        
        modalImage.src = cert.file;
        modalImage.alt = cert[currentLang].name;
        modalCaption.textContent = `${cert[currentLang].name} — ${cert[currentLang].issuer}`;
        modalDownload.href = cert.file;
        
        // Custom check to ensure button bounds
        modalPrev.style.display = currentCertificateIndex === 0 ? 'none' : 'flex';
        modalNext.style.display = currentCertificateIndex === certificateData.length - 1 ? 'none' : 'flex';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeLightbox);
        
        // Clicking backdrop closes modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeLightbox();
        });
        
        // Navigation arrows
        modalPrev.addEventListener('click', () => {
            if (currentCertificateIndex > 0) {
                currentCertificateIndex--;
                updateLightboxContent();
            }
        });
        
        modalNext.addEventListener('click', () => {
            if (currentCertificateIndex < certificateData.length - 1) {
                currentCertificateIndex++;
                updateLightboxContent();
            }
        });

        // Keybindings support
        window.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft' && currentCertificateIndex > 0) {
                currentCertificateIndex--;
                updateLightboxContent();
            }
            if (e.key === 'ArrowRight' && currentCertificateIndex < certificateData.length - 1) {
                currentCertificateIndex++;
                updateLightboxContent();
            }
        });
    }

    // Initialize on load (called at the bottom to ensure all variables, elements, and functions are fully initialized)
    setLanguageAndTheme(currentLang);
});
