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
            navLanguages: "Languages",
            navCertificates: "Certifications",
            navContact: "Contact",
            heroSub: "Software Engineer &nbsp;&bull;&nbsp; JLPT N3 Certified",
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
            skillsProgramming: "Programming",
            skillsAnalytics: "Analytics",
            skillsVisualization: "Visualization",
            skillsML: "Machine Learning",
            skillsDatabases: "Databases",
            skillsCloud: "Cloud",
            skillsTools: "Tools",
            skillsConcepts: "Concepts",
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
            langSectionTitle: "Language & Localization",
            langSectionDesc: "Bilingual capability plays a pivotal role in bridging engineering expectations between Japanese development environments and global teams. Holding a Japanese Language Proficiency Test (JLPT) N3 competency allows me to interpret technical requirements, localized documentation, and collaborate on system architecture specifications across cultures.",
            langCertsTitle: "Language Credentials",
            langGermanSub: "Basic Competency (A1.1 Certified)",
            langGermanCertTitle: "German A1.1 Certificate",
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
            navLanguages: "言語能力",
            navCertificates: "認定資格",
            navContact: "お問い合わせ",
            heroSub: "ソフトウェアエンジニア &nbsp;&bull;&nbsp; 日本語能力試験N3合格",
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
            skillsProgramming: "プログラミング",
            skillsAnalytics: "分析・アナリティクス",
            skillsVisualization: "データ可視化",
            skillsML: "機械学習",
            skillsDatabases: "データベース",
            skillsCloud: "クラウド",
            skillsTools: "ツール",
            skillsConcepts: "主要概念",
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
            langSectionTitle: "言語能力とローカライズ",
            langSectionDesc: "バイリンガル能力は、日本語のシステム開発現場と海外開発チーム間の認識や仕様書の橋渡しをする上で極めて重要な役割を果たします。日本語能力試験（JLPT）N3レベルを保有しており、技術仕様やローカライズされた設計書の解釈、異文化間の要件定義調整が円滑に実行できます。",
            langCertsTitle: "語学資格証明",
            langGermanSub: "基礎レベル（A1.1 合格）",
            langGermanCertTitle: "ドイツ語 A1.1 認定書",
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
        }
    ];

    // ==========================================================================
    // 3. Language & Theme Management
    // ==========================================================================
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    let currentLang = localStorage.getItem('portfolio-lang') || 'en';

    function setLanguageAndTheme(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);
        
        const body = document.body;
        
        if (lang === 'ja') {
            body.classList.remove('theme-monochrome');
            body.classList.add('theme-sakura');
            startSakuraAnimation();
        } else {
            body.classList.remove('theme-sakura');
            body.classList.add('theme-monochrome');
            stopSakuraAnimation();
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
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = currentLang === 'en' ? 'ja' : 'en';
            setLanguageAndTheme(targetLang);
        });
    });

    // ==========================================================================
    // 4. Sakura Blossom Particle Engine (Canvas-based)
    // ==========================================================================
    const canvas = document.getElementById('sakura-canvas');
    let ctx = null;
    let petals = [];
    let animationFrameId = null;

    if (canvas) {
        ctx = canvas.getContext('2d');
    }

    function initSakura() {
        if (!canvas || !ctx) return;
        resizeCanvas();
        petals = [];
        const petalCount = Math.min(25, Math.floor(window.innerWidth / 50));
        for (let i = 0; i < petalCount; i++) {
            petals.push(createPetal());
        }
    }

    function resizeCanvas() {
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    function createPetal() {
        return {
            x: Math.random() * (canvas ? canvas.width : window.innerWidth),
            y: Math.random() * -(canvas ? canvas.height : window.innerHeight) - 20,
            r: Math.random() * 5 + 3,
            speedX: Math.random() * 1.0 - 0.2,
            speedY: Math.random() * 0.8 + 0.4,
            angle: Math.random() * 360,
            spin: Math.random() * 0.8 - 0.4
        };
    }

    function drawPetals() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        petals.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle * Math.PI / 180);
            
            // Draw a subtle petal outline shape
            ctx.beginPath();
            ctx.ellipse(0, 0, p.r, p.r * 0.65, 0, 0, Math.PI * 2);
            // Draw transparent terracotta/peach petal color
            ctx.fillStyle = 'rgba(255, 127, 80, 0.15)'; 
            ctx.fill();
            ctx.restore();
            
            // Update positions
            p.x += p.speedX + Math.sin(p.angle / 40) * 0.15;
            p.y += p.speedY;
            p.angle += p.spin;
            
            // Wrap dimensions
            if (p.y > canvas.height + 20) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
            if (p.x > canvas.width + 20) {
                p.x = -20;
            } else if (p.x < -20) {
                p.x = canvas.width + 20;
            }
        });
        
        animationFrameId = requestAnimationFrame(drawPetals);
    }

    function startSakuraAnimation() {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        initSakura();
        drawPetals();
    }

    function stopSakuraAnimation() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    window.addEventListener('resize', () => {
        if (currentLang === 'ja') {
            resizeCanvas();
        }
    });

    // ==========================================================================
    // 5. Scroll Active Link Highlighting Navigation
    // ==========================================================================
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        let currentSectionId = '';
        sections.forEach(section => {
            const top = section.offsetTop - 150;
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
    // 6. Scroll Reveal Observer
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
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==========================================================================
    // 7. Mobile Navigation Drawer Toggle
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
    // 8. Snapping Slider Carousel
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
    
    function renderCarouselItems() {
        if (!track) return;
        track.innerHTML = '';
        
        // Duplicate the data to ensure seamless infinite looping scroll
        const doubleData = [...certificateData, ...certificateData];
        
        doubleData.forEach((cert, idx) => {
            const originalIdx = idx % certificateData.length;
            const name = cert[currentLang].name;
            const issuer = cert[currentLang].issuer;
            const clickText = currentLang === 'en' ? 'Click to inspect' : 'クリックして表示';
            
            const itemHTML = `
                <div class="carousel-item" data-index="${originalIdx}">
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

        // Add modal trigger events to duplicated items
        document.querySelectorAll('.carousel-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const idx = parseInt(item.getAttribute('data-index'));
                openLightbox(idx);
            });
        });

        // Activate CSS infinite scrolling animation
        track.classList.add('marquee-active');
    }

    // Snapping Carousel variables and touch actions removed in favor of CSS infinite marquee ticker

    // ==========================================================================
    // 9. Lightbox Modal Controller
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
        
        modalPrev.style.display = currentCertificateIndex === 0 ? 'none' : 'flex';
        modalNext.style.display = currentCertificateIndex === certificateData.length - 1 ? 'none' : 'flex';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeLightbox);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeLightbox();
        });
        
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

    // Mouse Spotlight Position Tracker (For CSS spotlights)
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.documentElement.style.setProperty('--mx', x);
        document.documentElement.style.setProperty('--my', y);
    });

    // Initialize Language & Theme on startup
    setLanguageAndTheme(currentLang);
});
