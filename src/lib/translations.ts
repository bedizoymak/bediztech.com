export type Language = "en" | "tr";

export const translations = {
  en: {
    // Nav
    nav: {
      services: "Services",
      howIWork: "How I Work",
      projects: "Projects",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      getQuote: "Get a Quote",
    },
    
    // Hero
    hero: {
      badge: "Istanbul-Based Tech Services",
      headline: "Network, CCTV, Wi-Fi, IT Service &",
      headlineHighlight: "Full-Stack Websites",
      headlineSuffix: "— built with an engineer's discipline.",
      subheadline: "Serving Istanbul with fast response times, quality installations, and systematic project delivery. No shortcuts. No guesswork.",
      whatsapp: "WhatsApp Me",
      call: "Call Now",
      explore: "Explore",
      trustBullets: [
        "Clean installation",
        "Documented delivery",
        "Post-support included",
      ],
    },
    
    // Services
    services: {
      badge: "Services",
      title: "What I Can Do For You",
      subtitle: "From network infrastructure to full-stack websites — systematic solutions with documented delivery.",
      whatYouGet: "What you get:",
      requestThis: "Request this →",
      items: [
        {
          title: "Network Infrastructure Setup",
          description: "Structured cabling and network architecture for homes and small businesses.",
          bullets: [
            "Cat6 cabling planning & installation",
            "Router, switch & firewall configuration",
            "VLAN segmentation if needed",
            "Remote access setup",
          ],
        },
        {
          title: "Security Camera Projects",
          description: "Professional IP CCTV systems with proper planning and clean installations.",
          bullets: [
            "Weatherproof IP camera selection",
            "PoE topology design",
            "NVR/NAS storage planning",
            "Bandwidth & retention calculation",
          ],
        },
        {
          title: "Wi-Fi Coverage Improvement",
          description: "Eliminate dead zones with properly planned access point deployments.",
          bullets: [
            "Site survey & AP placement",
            "Roaming optimization",
            "Mesh vs wired backhaul advice",
            "Channel & power tuning",
          ],
        },
        {
          title: "PC/Mac Services",
          description: "System maintenance, optimization, and health restoration.",
          bullets: [
            "OS installation & data migration",
            "Format & fresh install",
            "Performance health checks",
            "Software configuration",
          ],
        },
        {
          title: "Thermal Paste & Fan Cleaning",
          description: "Restore cooling performance and reduce noise on any computer.",
          bullets: [
            "Thermal paste replacement",
            "Fan cleaning & dust removal",
            "Temperature monitoring",
            "Desktop, laptop & Mac",
          ],
        },
        {
          title: "Shopping & Procurement",
          description: "Expert guidance for choosing the right tech within your budget.",
          bullets: [
            "Laptop & desktop selection",
            "Network gear recommendations",
            "Price-performance optimization",
            "Vendor-neutral advice",
          ],
        },
        {
          title: "Website Development",
          description: "Professional full-stack websites built with modern standards.",
          bullets: [
            "Modern frontend & backend",
            "SEO-ready architecture",
            "Fast loading & clean UI",
            "Analytics integration",
          ],
        },
        {
          title: "Google Business Profile",
          description: "Get found on Google Maps with an optimized business listing.",
          bullets: [
            "Profile setup & verification",
            "Category & keyword optimization",
            "Photo & post strategy",
            "Review management guidance",
          ],
        },
        {
          title: "SEO & Local Visibility",
          description: "Improve your online visibility with technical SEO fundamentals.",
          bullets: [
            "On-page SEO optimization",
            "Technical SEO checklist",
            "Performance improvements",
            "Schema markup implementation",
          ],
        },
        {
          title: "Ads Management",
          description: "Strategic ad campaigns on Google and Meta platforms.",
          bullets: [
            "Campaign setup & goals",
            "Conversion tracking",
            "Budget optimization",
            "Monthly reporting",
          ],
        },
        {
          title: "Engineering Consulting",
          description: "Industrial engineering expertise for process improvement.",
          bullets: [
            "Workflow optimization",
            "Simple KPI dashboards",
            "Process documentation",
            "Efficiency analysis",
          ],
        },
      ],
    },
    
    // Process
    process: {
      badge: "Process",
      title: "How I Work",
      subtitle: "Structured approach with checklists, testing, and handover notes. No surprise costs. Clear scope.",
      steps: [
        {
          title: "Discovery",
          description: "We discuss your needs, constraints, and goals. I ask questions and take notes.",
        },
        {
          title: "Plan",
          description: "I create a clear scope document with timeline, materials list, and transparent pricing.",
        },
        {
          title: "Install / Build",
          description: "Systematic execution with clean work, proper labeling, and no shortcuts.",
        },
        {
          title: "Validate & Support",
          description: "Testing, handover documentation, and ongoing support when you need it.",
        },
      ],
    },
    
    // Projects
    projects: {
      badge: "Projects",
      title: "Case Highlights",
      subtitle: "Real problems, systematic solutions, measurable outcomes.",
      challenge: "Challenge",
      solution: "Solution",
      outcome: "Outcome",
      items: [
        {
          title: "3-Floor PoE CCTV Deployment",
          challenge: "Coverage gaps and unreliable wireless cameras across multiple floors.",
          solution: "Designed a wired PoE topology with centralized NVR and proper cable management.",
          outcome: "100% coverage, 30-day retention, remote viewing enabled.",
          image: "cctv",
        },
        {
          title: "Wi-Fi Dead Zone Elimination",
          challenge: "Home office with inconsistent Wi-Fi in the work area and garden.",
          solution: "Installed wired access points with proper channel separation and roaming optimization.",
          outcome: "Consistent 200+ Mbps throughout, seamless device roaming.",
          image: "wifi",
        },
        {
          title: "Small Business Digital Presence",
          challenge: "Local business with no online visibility and outdated contact methods.",
          solution: "Built a fast, SEO-optimized website with Google Business Profile setup.",
          outcome: "First page Google ranking for local keywords within 3 months.",
          image: "website",
        },
        {
          title: "Home Network Overhaul",
          challenge: "Messy cables, slow speeds, and no network segmentation.",
          solution: "Complete re-cabling with Cat6, managed switch, and guest network isolation.",
          outcome: "Clean rack installation, documented topology, 10x improvement in reliability.",
          image: "network",
        },
      ],
    },
    
    // Pricing
    pricing: {
      badge: "Pricing",
      title: "Transparent Pricing",
      subtitle: "Ranges based on scope. Final quote after a short discovery call.",
      mostPopular: "Most Popular",
      getQuote: "Get a Quote",
      note: "Website, SEO, and consulting services quoted separately based on requirements.",
      packages: [
        {
          name: "Quick Fix",
          price: "₺500–1,500",
          description: "Basic IT issues, cleanup, and quick wins.",
          features: [
            "OS reinstall or cleanup",
            "Driver updates",
            "Basic troubleshooting",
            "Thermal paste refresh",
            "Same-day availability",
          ],
        },
        {
          name: "Home / Small Office Network",
          price: "₺2,000–5,000",
          description: "Complete network setup with proper planning.",
          features: [
            "Router & AP configuration",
            "Basic network segmentation",
            "Cable management",
            "Speed optimization",
            "Topology documentation",
          ],
          featured: true,
        },
        {
          name: "CCTV Deployment",
          price: "₺3,000–10,000+",
          description: "Professional security camera installation.",
          features: [
            "Site survey & planning",
            "PoE infrastructure",
            "NVR/storage setup",
            "Remote access config",
            "Maintenance guidance",
          ],
        },
      ],
    },
    
    // FAQ
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Quick answers to common questions. Still curious? Just reach out.",
      items: [
        {
          question: "Do you work weekends?",
          answer: "Yes. I understand that many installations and visits need to happen outside business hours. Weekend availability is part of my service — just let me know your preferred time during the discovery call.",
        },
        {
          question: "Do you provide hardware?",
          answer: "I can either procure equipment on your behalf (with transparent pricing) or guide you on what to purchase. I work with major vendors and can help you find the best price-performance options for your budget.",
        },
        {
          question: "Can you do outdoor cameras?",
          answer: "Absolutely. I use weatherproof IP cameras rated for outdoor conditions. PoE (Power over Ethernet) simplifies installation and reduces failure points. I'll plan proper cable runs and weatherproofing.",
        },
        {
          question: "Do you support remote troubleshooting?",
          answer: "Yes. For many issues, I can diagnose and resolve problems remotely via secure screen sharing. This saves time and often means faster resolution. If on-site work is needed, I'll let you know.",
        },
        {
          question: "How fast can you start?",
          answer: "For urgent issues, I can often respond same-day or next-day. For larger projects, I typically schedule within a week after the discovery call and scope agreement. Rush jobs are possible with prior arrangement.",
        },
        {
          question: "Do you offer maintenance contracts?",
          answer: "Yes. For businesses that want ongoing support, I offer monthly retainer packages that include priority response, regular check-ups, and discounted rates on additional work. Details depend on your setup size.",
        },
      ],
    },
    
    // Contact
    contact: {
      badge: "Contact",
      title: "Let's Talk",
      subtitle: "Describe your needs. I'll get back to you within 24 hours.",
      quickContact: "Quick Contact",
      whatsapp: "WhatsApp",
      fastestResponse: "Fastest response",
      phone: "Phone",
      email: "Email",
      serviceArea: "Service Area",
      serviceAreaText: "Istanbul (Asian & European side) and nearby areas",
      availability: "Availability",
      availabilityText: "Weekdays: 10:00 – 20:00\nWeekends: By appointment\nUrgent: Same-day possible",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        phone: "Phone",
        phonePlaceholder: "+90 5XX XXX XX XX",
        email: "Email",
        emailPlaceholder: "your@email.com",
        service: "Service Needed",
        servicePlaceholder: "Select service",
        location: "Location (District)",
        locationPlaceholder: "Select district",
        message: "Brief Description",
        messagePlaceholder: "Tell me about your project or issue...",
        submit: "Send Inquiry",
        submitting: "Sending...",
        privacy: "Your information is kept private. I'll respond within 24 hours.",
      },
      services: [
        "Network Infrastructure",
        "Security Cameras (CCTV)",
        "Wi-Fi Improvement",
        "PC/Mac Services",
        "Thermal Paste & Cleaning",
        "Hardware Consulting",
        "Website Development",
        "Google Business Profile",
        "SEO Services",
        "Ads Management",
        "Engineering Consulting",
        "Other",
      ],
    },
    
    // Footer
    footer: {
      tagline: "Network • CCTV • IT Services • Web Development",
      rights: "All rights reserved.",
      location: "Istanbul, Türkiye",
    },
    
    // Meta
    meta: {
      title: "Bediz Teknik | Network, CCTV, IT Services & Web Development in Istanbul",
      description: "Professional IT services in Istanbul: Network infrastructure, CCTV installation, Wi-Fi optimization, PC/Mac services, and full-stack website development. Engineer-led, documented delivery.",
      ogTitle: "Bediz Teknik | Network, CCTV, IT Services & Web Development",
      ogDescription: "Professional IT services in Istanbul with an engineer's discipline. Network, CCTV, Wi-Fi, and full-stack web development.",
    },
  },
  
  tr: {
    // Nav
    nav: {
      services: "Hizmetler",
      howIWork: "Nasıl Çalışırım",
      projects: "Projeler",
      pricing: "Fiyatlandırma",
      faq: "SSS",
      contact: "İletişim",
      getQuote: "Teklif Al",
    },
    
    // Hero
    hero: {
      badge: "İstanbul Merkezli Teknik Hizmetler",
      headline: "Network, Kamera, Wi-Fi, IT Servis ve",
      headlineHighlight: "Full-Stack Web Siteleri",
      headlineSuffix: "— mühendis disipliniyle.",
      subheadline: "İstanbul'a hızlı yanıt süresi, kaliteli kurulum ve sistematik proje teslimatı ile hizmet veriyorum. Kestirme yol yok. Tahminin yeri yok.",
      whatsapp: "WhatsApp'tan Yaz",
      call: "Hemen Ara",
      explore: "Keşfet",
      trustBullets: [
        "Temiz kurulum",
        "Dokümante teslim",
        "Sonrası destek dahil",
      ],
    },
    
    // Services
    services: {
      badge: "Hizmetler",
      title: "Sizin İçin Neler Yapabilirim",
      subtitle: "Network altyapısından full-stack web sitelerine — dokümante teslimat ile sistematik çözümler.",
      whatYouGet: "Ne alırsınız:",
      requestThis: "Bunu iste →",
      items: [
        {
          title: "Network Altyapı Kurulumu",
          description: "Ev ve küçük işletmeler için yapısal kablolama ve network mimarisi.",
          bullets: [
            "Cat6 kablolama planlaması ve kurulumu",
            "Router, switch ve firewall konfigürasyonu",
            "Gerekirse VLAN segmentasyonu",
            "Uzaktan erişim kurulumu",
          ],
        },
        {
          title: "Güvenlik Kamerası Projeleri",
          description: "Profesyonel IP CCTV sistemleri, düzgün planlama ve temiz kurulum.",
          bullets: [
            "Dış mekan IP kamera seçimi",
            "PoE topoloji tasarımı",
            "NVR/NAS depolama planlaması",
            "Bant genişliği ve kayıt hesabı",
          ],
        },
        {
          title: "Wi-Fi Kapsama İyileştirme",
          description: "Düzgün planlanmış access point kurulumlarıyla kör noktaları ortadan kaldırın.",
          bullets: [
            "Saha araştırması ve AP yerleşimi",
            "Roaming optimizasyonu",
            "Mesh vs kablolu backhaul tavsiyesi",
            "Kanal ve güç ayarı",
          ],
        },
        {
          title: "PC/Mac Servisi",
          description: "Sistem bakımı, optimizasyonu ve performans restorasyonu.",
          bullets: [
            "İşletim sistemi kurulumu ve veri aktarımı",
            "Format ve temiz kurulum",
            "Performans sağlık kontrolleri",
            "Yazılım konfigürasyonu",
          ],
        },
        {
          title: "Termal Macun & Fan Temizliği",
          description: "Her bilgisayarda soğutma performansını geri kazanın ve gürültüyü azaltın.",
          bullets: [
            "Termal macun yenileme",
            "Fan temizliği ve toz alma",
            "Sıcaklık takibi",
            "Masaüstü, dizüstü ve Mac",
          ],
        },
        {
          title: "Alışveriş & Tedarik Danışmanlığı",
          description: "Bütçeniz dahilinde doğru teknolojiyi seçmeniz için uzman rehberliği.",
          bullets: [
            "Dizüstü ve masaüstü seçimi",
            "Network ekipman tavsiyeleri",
            "Fiyat-performans optimizasyonu",
            "Marka bağımsız tavsiye",
          ],
        },
        {
          title: "Web Sitesi Geliştirme",
          description: "Modern standartlarla inşa edilmiş profesyonel full-stack web siteleri.",
          bullets: [
            "Modern frontend ve backend",
            "SEO-hazır mimari",
            "Hızlı yükleme ve temiz arayüz",
            "Analytics entegrasyonu",
          ],
        },
        {
          title: "Google İşletme Profili",
          description: "Optimize edilmiş işletme kaydı ile Google Haritalar'da bulunun.",
          bullets: [
            "Profil kurulumu ve doğrulama",
            "Kategori ve anahtar kelime optimizasyonu",
            "Fotoğraf ve gönderi stratejisi",
            "Yorum yönetimi rehberliği",
          ],
        },
        {
          title: "SEO & Yerel Görünürlük",
          description: "Teknik SEO temelleriyle online görünürlüğünüzü artırın.",
          bullets: [
            "Sayfa içi SEO optimizasyonu",
            "Teknik SEO kontrol listesi",
            "Performans iyileştirmeleri",
            "Schema markup uygulaması",
          ],
        },
        {
          title: "Reklam Yönetimi",
          description: "Google ve Meta platformlarında stratejik reklam kampanyaları.",
          bullets: [
            "Kampanya kurulumu ve hedefler",
            "Dönüşüm takibi",
            "Bütçe optimizasyonu",
            "Aylık raporlama",
          ],
        },
        {
          title: "Mühendislik Danışmanlığı",
          description: "Süreç iyileştirme için Endüstri Mühendisliği uzmanlığı.",
          bullets: [
            "İş akışı optimizasyonu",
            "Basit KPI panoları",
            "Süreç dokümantasyonu",
            "Verimlilik analizi",
          ],
        },
      ],
    },
    
    // Process
    process: {
      badge: "Süreç",
      title: "Nasıl Çalışırım",
      subtitle: "Kontrol listeleri, testler ve teslim notlarıyla yapılandırılmış yaklaşım. Sürpriz maliyet yok. Net kapsam.",
      steps: [
        {
          title: "Keşif",
          description: "İhtiyaçlarınızı, kısıtlamalarınızı ve hedeflerinizi konuşuyoruz. Sorular soruyorum ve notlar alıyorum.",
        },
        {
          title: "Plan",
          description: "Zaman çizelgesi, malzeme listesi ve şeffaf fiyatlandırma ile net bir kapsam belgesi oluşturuyorum.",
        },
        {
          title: "Kurulum / Yapım",
          description: "Temiz iş, düzgün etiketleme ve kestirme olmadan sistematik uygulama.",
        },
        {
          title: "Doğrulama & Destek",
          description: "Test, teslim dokümantasyonu ve ihtiyaç duyduğunuzda sürekli destek.",
        },
      ],
    },
    
    // Projects
    projects: {
      badge: "Projeler",
      title: "Proje Örnekleri",
      subtitle: "Gerçek problemler, sistematik çözümler, ölçülebilir sonuçlar.",
      challenge: "Problem",
      solution: "Çözüm",
      outcome: "Sonuç",
      items: [
        {
          title: "3 Katlı PoE CCTV Kurulumu",
          challenge: "Birden fazla katta kapsama boşlukları ve güvenilmez kablosuz kameralar.",
          solution: "Merkezi NVR ve düzgün kablo yönetimi ile kablolu PoE topoloji tasarlandı.",
          outcome: "%100 kapsama, 30 günlük kayıt, uzaktan izleme aktif.",
          image: "cctv",
        },
        {
          title: "Wi-Fi Kör Nokta Giderme",
          challenge: "Çalışma alanı ve bahçede tutarsız Wi-Fi olan ev ofis.",
          solution: "Düzgün kanal ayrımı ve roaming optimizasyonu ile kablolu access point kuruldu.",
          outcome: "Her yerde tutarlı 200+ Mbps, kesintisiz cihaz geçişi.",
          image: "wifi",
        },
        {
          title: "Küçük İşletme Dijital Varlığı",
          challenge: "Online görünürlüğü ve güncel iletişim yöntemi olmayan yerel işletme.",
          solution: "Google İşletme Profili kurulumu ile hızlı, SEO-optimize web sitesi yapıldı.",
          outcome: "3 ay içinde yerel anahtar kelimelerde Google ilk sayfa sıralaması.",
          image: "website",
        },
        {
          title: "Ev Network Yenileme",
          challenge: "Dağınık kablolar, yavaş hızlar ve network segmentasyonu yok.",
          solution: "Cat6 ile komple yeniden kablolama, yönetilebilir switch ve misafir ağı izolasyonu.",
          outcome: "Temiz rack kurulumu, dokümante topoloji, güvenilirlikte 10 kat iyileşme.",
          image: "network",
        },
      ],
    },
    
    // Pricing
    pricing: {
      badge: "Fiyatlandırma",
      title: "Şeffaf Fiyatlandırma",
      subtitle: "Kapsama göre fiyat aralıkları. Kısa keşif görüşmesinden sonra kesin teklif.",
      mostPopular: "En Popüler",
      getQuote: "Teklif Al",
      note: "Web sitesi, SEO ve danışmanlık hizmetleri gereksinimlere göre ayrıca fiyatlandırılır.",
      packages: [
        {
          name: "Hızlı Çözüm",
          price: "₺500–1.500",
          description: "Temel IT sorunları, temizlik ve hızlı düzeltmeler.",
          features: [
            "İşletim sistemi yeniden kurulum veya temizlik",
            "Sürücü güncellemeleri",
            "Temel sorun giderme",
            "Termal macun yenileme",
            "Aynı gün hizmet",
          ],
        },
        {
          name: "Ev / Küçük Ofis Network",
          price: "₺2.000–5.000",
          description: "Düzgün planlamayla komple network kurulumu.",
          features: [
            "Router ve AP konfigürasyonu",
            "Temel network segmentasyonu",
            "Kablo yönetimi",
            "Hız optimizasyonu",
            "Topoloji dokümantasyonu",
          ],
          featured: true,
        },
        {
          name: "Kamera Kurulumu",
          price: "₺3.000–10.000+",
          description: "Profesyonel güvenlik kamerası kurulumu.",
          features: [
            "Saha araştırması ve planlama",
            "PoE altyapısı",
            "NVR/depolama kurulumu",
            "Uzaktan erişim yapılandırması",
            "Bakım rehberliği",
          ],
        },
      ],
    },
    
    // FAQ
    faq: {
      badge: "SSS",
      title: "Sık Sorulan Sorular",
      subtitle: "Yaygın sorulara hızlı cevaplar. Hâlâ merak ediyor musunuz? Ulaşın.",
      items: [
        {
          question: "Hafta sonu çalışıyor musunuz?",
          answer: "Evet. Birçok kurulum ve ziyaretin mesai saatleri dışında olması gerektiğini anlıyorum. Hafta sonu uygunluğu hizmetimin bir parçası — keşif görüşmesinde tercih ettiğiniz zamanı belirtin.",
        },
        {
          question: "Donanımı siz mi sağlıyorsunuz?",
          answer: "Ekipmanı sizin adınıza tedarik edebilirim (şeffaf fiyatlandırmayla) veya ne alacağınız konusunda rehberlik edebilirim. Büyük satıcılarla çalışıyorum ve bütçenize uygun en iyi fiyat-performans seçeneklerini bulmanıza yardımcı olabilirim.",
        },
        {
          question: "Dış mekan kameraları olur mu?",
          answer: "Kesinlikle. Dış mekan koşullarına uygun su geçirmez IP kameralar kullanıyorum. PoE (Power over Ethernet) kurulumu basitleştirir ve arıza noktalarını azaltır. Uygun kablo geçişleri ve su yalıtımı planlayacağım.",
        },
        {
          question: "Uzaktan destek var mı?",
          answer: "Evet. Birçok sorunu güvenli ekran paylaşımı ile uzaktan teşhis edip çözebilirim. Bu zaman kazandırır ve çoğu zaman daha hızlı çözüm demektir. Yerinde çalışma gerekirse size bildireceğim.",
        },
        {
          question: "Ne kadar hızlı başlayabilirsiniz?",
          answer: "Acil sorunlar için genellikle aynı gün veya ertesi gün yanıt verebilirim. Daha büyük projeler için, keşif görüşmesi ve kapsam anlaşmasından sonra genellikle bir hafta içinde planlama yaparım. Acil işler önceden düzenleme ile mümkündür.",
        },
        {
          question: "Bakım anlaşması var mı?",
          answer: "Evet. Sürekli destek isteyen işletmeler için, öncelikli yanıt, düzenli kontroller ve ek işlerde indirimli ücretler içeren aylık anlaşma paketleri sunuyorum. Detaylar kurulum büyüklüğüne göre değişir.",
        },
      ],
    },
    
    // Contact
    contact: {
      badge: "İletişim",
      title: "Konuşalım",
      subtitle: "İhtiyaçlarınızı anlatın. 24 saat içinde yanıt vereceğim.",
      quickContact: "Hızlı İletişim",
      whatsapp: "WhatsApp",
      fastestResponse: "En hızlı yanıt",
      phone: "Telefon",
      email: "E-posta",
      serviceArea: "Hizmet Alanı",
      serviceAreaText: "İstanbul (Anadolu ve Avrupa Yakası) ve yakın bölgeler",
      availability: "Uygunluk",
      availabilityText: "Hafta içi: 10:00 – 20:00\nHafta sonu: Randevuyla\nAcil: Aynı gün mümkün",
      form: {
        name: "Ad Soyad",
        namePlaceholder: "Adınız",
        phone: "Telefon",
        phonePlaceholder: "+90 5XX XXX XX XX",
        email: "E-posta",
        emailPlaceholder: "eposta@adresiniz.com",
        service: "İstenen Hizmet",
        servicePlaceholder: "Hizmet seçin",
        location: "Konum (İlçe)",
        locationPlaceholder: "İlçe seçin",
        message: "Kısa Açıklama",
        messagePlaceholder: "Projenizi veya sorununuzu anlatın...",
        submit: "Talep Gönder",
        submitting: "Gönderiliyor...",
        privacy: "Bilgileriniz gizli tutulur. 24 saat içinde yanıt vereceğim.",
      },
      services: [
        "Network Altyapısı",
        "Güvenlik Kameraları (CCTV)",
        "Wi-Fi İyileştirme",
        "PC/Mac Servisi",
        "Termal Macun & Temizlik",
        "Donanım Danışmanlığı",
        "Web Sitesi Geliştirme",
        "Google İşletme Profili",
        "SEO Hizmetleri",
        "Reklam Yönetimi",
        "Mühendislik Danışmanlığı",
        "Diğer",
      ],
    },
    
    // Footer
    footer: {
      tagline: "Network • Kamera • IT Servis • Web Geliştirme",
      rights: "Tüm hakları saklıdır.",
      location: "İstanbul, Türkiye",
    },
    
    // Meta
    meta: {
      title: "Bediz Teknik | İstanbul Network, Kamera, IT Servis ve Web Geliştirme",
      description: "İstanbul'da profesyonel IT hizmetleri: Network altyapısı, kamera kurulumu, Wi-Fi optimizasyonu, PC/Mac servisi ve full-stack web geliştirme. Mühendis yaklaşımı, dokümante teslimat.",
      ogTitle: "Bediz Teknik | Network, Kamera, IT Servis ve Web Geliştirme",
      ogDescription: "İstanbul'da mühendis disipliniyle profesyonel IT hizmetleri. Network, kamera, Wi-Fi ve full-stack web geliştirme.",
    },
  },
};

export type Translations = typeof translations.en;
