import { useState, useEffect, useRef } from "react";

// ============================================================
// FARAH (فرح) — Airbnb-style Emirati Wedding Marketplace
// Light theme, image-heavy, search-driven
// ============================================================

// High quality wedding images via Unsplash
const IMG = {
  // Venues
  hall1: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
  hall2: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
  hall3: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&h=400&fit=crop",
  hotel1: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
  hotel2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  villa1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  villa2: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  garden1: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop",
  beach1: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=600&h=400&fit=crop",
  // Catering
  buffet1: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
  buffet2: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
  arabic_food: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=600&h=400&fit=crop",
  // Flowers
  flower1: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop",
  flower2: "https://images.unsplash.com/photo-1561128290-006dc4827214?w=600&h=400&fit=crop",
  flower3: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&h=400&fit=crop",
  bouquet1: "https://images.unsplash.com/photo-1522057306606-8d84b4cd8ba3?w=600&h=400&fit=crop",
  // Kosha / Stage
  stage1: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop",
  stage2: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop",
  // Photography
  photo1: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=600&h=400&fit=crop",
  photo2: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop",
  photo3: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
  // Henna
  henna1: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=600&h=400&fit=crop",
  henna2: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&h=400&fit=crop",
  // Cake
  cake1: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop",
  cake2: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&h=400&fit=crop",
  cake3: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=400&fit=crop",
  // Entertainment
  music1: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
  dj1: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600&h=400&fit=crop",
  // Lighting
  lights1: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
  lights2: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&h=400&fit=crop",
  chandelier: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&h=400&fit=crop",
  // Cars
  car1: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop",
  car2: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop",
  // Bridal
  dress1: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=400&fit=crop",
  dress2: "https://images.unsplash.com/photo-1585241920473-b472eb9ffbae?w=600&h=400&fit=crop",
  jewelry: "https://images.unsplash.com/photo-1515562141589-67f0d569b6e5?w=600&h=400&fit=crop",
  // Decor
  decor1: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop",
  decor2: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
  table1: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  // Oud
  coffee1: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=400&fit=crop",
  incense: "https://images.unsplash.com/photo-1602178506153-0c30de1f0b43?w=600&h=400&fit=crop",
  // Invitations
  invite1: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&h=400&fit=crop",
  invite2: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
  // Wedding planner
  planner1: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=400&fit=crop",
  planner2: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop",
};

const CATEGORIES = [
  { key: "all", label: "All", labelAr: "الكل", icon: "🔍" },
  { key: "venue", label: "Venues & Halls", labelAr: "القاعات", icon: "🏛️" },
  { key: "villa", label: "Villas & Gardens", labelAr: "الفلل والحدائق", icon: "🌿" },
  { key: "planner", label: "Wedding Planners", labelAr: "منظمي الأعراس", icon: "📋" },
  { key: "catering", label: "Catering", labelAr: "الطعام", icon: "🍽️" },
  { key: "florist", label: "Flowers", labelAr: "الورود", icon: "🌸" },
  { key: "kosha", label: "Kosha & Stage", labelAr: "الكوشة", icon: "👑" },
  { key: "photography", label: "Photo & Video", labelAr: "التصوير", icon: "📸" },
  { key: "henna", label: "Henna Artists", labelAr: "الحناء", icon: "🤲" },
  { key: "cake", label: "Cakes & Sweets", labelAr: "الكيك", icon: "🎂" },
  { key: "entertainment", label: "Zaffe & DJ", labelAr: "الزفة", icon: "🎵" },
  { key: "lighting", label: "Lighting", labelAr: "الإضاءة", icon: "✨" },
  { key: "bridal", label: "Bridal Fashion", labelAr: "العروس", icon: "👗" },
  { key: "decor", label: "Décor & Styling", labelAr: "الديكور", icon: "🎨" },
  { key: "oud", label: "Oud & Gahwa", labelAr: "العود والقهوة", icon: "☕" },
  { key: "transport", label: "Luxury Cars", labelAr: "الموكب", icon: "🚗" },
  { key: "invitations", label: "Invitations", labelAr: "البطاقات", icon: "💌" },
];

const LISTINGS = [
  // VENUES
  { id: 1, category: "venue", title: "Al Jawhara Grand Hall", titleAr: "قاعة الجوهرة الكبرى", location: "Jumeirah, Dubai", price: "150,000", priceUnit: "AED / event", rating: 4.9, reviews: 234, images: [IMG.hall1, IMG.hall2, IMG.hall3], tags: ["800 guests", "Ladies + Men halls", "Valet parking"], superhost: true, trustScore: 96, headcount: 210, languages: ["ar","en","hi"] },
  { id: 2, category: "venue", title: "Palace Hotel Ballroom", titleAr: "فندق القصر", location: "Downtown Dubai", price: "280,000", priceUnit: "AED / event", rating: 4.8, reviews: 189, images: [IMG.hotel1, IMG.hotel2, IMG.hall1], tags: ["5-star", "All-inclusive packages", "Burj view"], superhost: true, trustScore: 98, headcount: 450, languages: ["ar","en","hi","tl"] },
  { id: 3, category: "venue", title: "Royal Zabeel Ballroom", titleAr: "قاعة زعبيل الملكية", location: "Zabeel, Dubai", price: "200,000", priceUnit: "AED / event", rating: 4.7, reviews: 156, images: [IMG.hall3, IMG.hall1, IMG.hotel1], tags: ["600 guests", "Gold interior", "Private entrance"], superhost: false, trustScore: 88, headcount: 120, languages: ["ar","en"] },
  { id: 4, category: "venue", title: "Bab Al Qasr Beach Venue", titleAr: "باب القصر — البحر", location: "Corniche, Abu Dhabi", price: "320,000", priceUnit: "AED / event", rating: 4.9, reviews: 98, images: [IMG.beach1, IMG.hotel2, IMG.garden1], tags: ["Beachfront", "Sunset ceremony", "500 guests"], superhost: true, trustScore: 94, headcount: 300, languages: ["ar","en","ur"] },
  // VILLAS & GARDENS
  { id: 5, category: "villa", title: "Pearl Villa Private Estate", titleAr: "فيلا اللؤلؤة", location: "Emirates Hills, Dubai", price: "180,000", priceUnit: "AED / event", rating: 4.8, reviews: 67, images: [IMG.villa1, IMG.garden1, IMG.villa2], tags: ["Private pool", "Garden ceremony", "300 guests"], superhost: true, trustScore: 85, headcount: 35, languages: ["ar","en"] },
  { id: 6, category: "villa", title: "Al Barari Garden Venue", titleAr: "حديقة البراري", location: "Al Barari, Dubai", price: "120,000", priceUnit: "AED / event", rating: 4.7, reviews: 45, images: [IMG.garden1, IMG.villa2, IMG.villa1], tags: ["Tropical garden", "Intimate", "200 guests"], superhost: false, trustScore: 78, headcount: 20, languages: ["ar","en","tl"] },
  // WEDDING PLANNERS
  { id: 7, category: "planner", title: "Afrah Events — Full Service", titleAr: "أفراح للتنظيم الشامل", location: "Dubai & Abu Dhabi", price: "50,000", priceUnit: "AED starting", rating: 4.9, reviews: 312, images: [IMG.planner1, IMG.planner2, IMG.decor2], tags: ["Full coordination", "15+ years", "Emirati specialist"], superhost: true, trustScore: 94, headcount: 45, languages: ["ar","en","hi","ur"] },
  { id: 8, category: "planner", title: "Laylat Al Omer", titleAr: "ليلة العمر للتنظيم", location: "Sharjah & Dubai", price: "30,000", priceUnit: "AED starting", rating: 4.7, reviews: 178, images: [IMG.planner2, IMG.stage1, IMG.planner1], tags: ["Budget-friendly", "Day-of coordination", "Vendor management"], superhost: false, trustScore: 82, headcount: 12, languages: ["ar","en"] },
  // CATERING
  { id: 9, category: "catering", title: "Royal Hospitality House", titleAr: "دار الضيافة الملكية", location: "Al Quoz, Dubai", price: "80,000", priceUnit: "AED / 300 guests", rating: 4.8, reviews: 267, images: [IMG.buffet1, IMG.arabic_food, IMG.buffet2], tags: ["Emirati cuisine", "Machboos & Harees", "Live cooking stations"], superhost: true, trustScore: 92, headcount: 87, languages: ["ar","hi","en"] },
  { id: 10, category: "catering", title: "Beit Al Mandi", titleAr: "بيت المندي", location: "Deira, Dubai", price: "45,000", priceUnit: "AED / 300 guests", rating: 4.6, reviews: 145, images: [IMG.arabic_food, IMG.buffet1, IMG.buffet2], tags: ["Yemeni & Emirati", "Mandi specialist", "Budget-friendly"], superhost: false, trustScore: 76, headcount: 40, languages: ["ar","hi","bn"] },
  // FLOWERS
  { id: 11, category: "florist", title: "Jannah Flowers", titleAr: "ورود الجنة", location: "Jumeirah, Dubai", price: "25,000", priceUnit: "AED starting", rating: 4.9, reviews: 198, images: [IMG.flower1, IMG.flower2, IMG.bouquet1], tags: ["Luxury arrangements", "Jasmine & roses", "Stage florals"], superhost: true, trustScore: 78, headcount: 23, languages: ["ar","tl","en"] },
  { id: 12, category: "florist", title: "Wardeh Floral Design", titleAr: "وردة للتصميم", location: "Abu Dhabi", price: "15,000", priceUnit: "AED starting", rating: 4.7, reviews: 89, images: [IMG.flower3, IMG.bouquet1, IMG.flower1], tags: ["Orchids", "Table centerpieces", "Bridal bouquet"], superhost: false, trustScore: 70, headcount: 10, languages: ["ar","en","tl"] },
  // KOSHA
  { id: 13, category: "kosha", title: "Princess Kosha Design", titleAr: "كوشة الأميرات", location: "Al Barsha, Dubai", price: "35,000", priceUnit: "AED starting", rating: 4.9, reviews: 156, images: [IMG.stage1, IMG.stage2, IMG.decor1], tags: ["Crystal throne", "LED backdrop", "Royal stage"], superhost: true, trustScore: 82, headcount: 15, languages: ["ar","en"] },
  { id: 14, category: "kosha", title: "Rawan Stage Design", titleAr: "روان لتصميم المسرح", location: "Sharjah", price: "20,000", priceUnit: "AED starting", rating: 4.6, reviews: 78, images: [IMG.stage2, IMG.stage1, IMG.lights2], tags: ["Modern designs", "Floral kosha", "Minimalist options"], superhost: false, trustScore: 68, headcount: 8, languages: ["ar","en","ur"] },
  // PHOTOGRAPHY
  { id: 15, category: "photography", title: "Farah Lens Studio", titleAr: "عدسة الفرح", location: "Abu Dhabi", price: "15,000", priceUnit: "AED / event", rating: 4.9, reviews: 245, images: [IMG.photo1, IMG.photo2, IMG.photo3], tags: ["Female team", "Ladies events", "Drone coverage"], superhost: true, trustScore: 70, headcount: 12, languages: ["ar","en","ur"] },
  { id: 16, category: "photography", title: "Noor Al Hayat Photography", titleAr: "نور الحياة للتصوير", location: "Dubai Marina", price: "20,000", priceUnit: "AED / event", rating: 4.8, reviews: 167, images: [IMG.photo3, IMG.photo1, IMG.photo2], tags: ["Cinematic video", "Same-day edit", "Photo booth"], superhost: true, trustScore: 80, headcount: 18, languages: ["ar","en","hi"] },
  // HENNA
  { id: 17, category: "henna", title: "Golden Henna Artists", titleAr: "الحناء الذهبية", location: "Deira, Dubai", price: "5,000", priceUnit: "AED starting", rating: 4.7, reviews: 312, images: [IMG.henna1, IMG.henna2, IMG.henna1], tags: ["Khaleeji style", "Indian style", "Bridal packages"], superhost: false, trustScore: 62, headcount: 8, languages: ["ar","hi","bn"] },
  // CAKE
  { id: 18, category: "cake", title: "Sultan Sweets & Cakes", titleAr: "حلويات السلطان", location: "Al Nahda, Sharjah", price: "8,000", priceUnit: "AED starting", rating: 4.6, reviews: 134, images: [IMG.cake1, IMG.cake2, IMG.cake3], tags: ["Multi-tier cakes", "Arabic sweets", "Chocolate fountain"], superhost: true, trustScore: 80, headcount: 30, languages: ["ar","hi","en"] },
  { id: 19, category: "cake", title: "Le Petit Gâteau", titleAr: "لو بيتي غاتو", location: "DIFC, Dubai", price: "15,000", priceUnit: "AED starting", rating: 4.9, reviews: 89, images: [IMG.cake3, IMG.cake1, IMG.cake2], tags: ["French pastry", "Custom fondant", "Luxury design"], superhost: true, trustScore: 86, headcount: 15, languages: ["ar","en"] },
  // ENTERTAINMENT
  { id: 20, category: "entertainment", title: "Zaffe Sound — Bridal Procession", titleAr: "صوت الزفة", location: "Sharjah", price: "12,000", priceUnit: "AED / event", rating: 4.5, reviews: 198, images: [IMG.music1, IMG.dj1, IMG.lights1], tags: ["Zaffe band", "Traditional drums", "Bridal entrance"], superhost: true, trustScore: 76, headcount: 18, languages: ["ar","en"] },
  // LIGHTING
  { id: 21, category: "lighting", title: "Stars Lighting Events", titleAr: "نجوم الإضاءة", location: "Al Satwa, Dubai", price: "30,000", priceUnit: "AED starting", rating: 4.6, reviews: 123, images: [IMG.lights1, IMG.chandelier, IMG.lights2], tags: ["LED stages", "Chandeliers", "Laser shows"], superhost: true, trustScore: 84, headcount: 34, languages: ["ar","ur","en"] },
  // BRIDAL
  { id: 22, category: "bridal", title: "Bridal Couture Emirates", titleAr: "أزياء العروس الإماراتية", location: "City Walk, Dubai", price: "30,000", priceUnit: "AED starting", rating: 4.8, reviews: 201, images: [IMG.dress1, IMG.dress2, IMG.jewelry], tags: ["Custom gowns", "Jalabiya", "3-4 outfit changes"], superhost: true, trustScore: 85, headcount: 20, languages: ["ar","en","tl"] },
  // DECOR
  { id: 23, category: "decor", title: "Lamasat Décor & Styling", titleAr: "لمسات الديكور", location: "Al Qusais, Dubai", price: "25,000", priceUnit: "AED starting", rating: 4.6, reviews: 145, images: [IMG.decor2, IMG.table1, IMG.decor1], tags: ["Table settings", "Ceiling draping", "Aisle design"], superhost: true, trustScore: 81, headcount: 28, languages: ["ar","tl","hi"] },
  // OUD
  { id: 24, category: "oud", title: "Oud & Gahwa House", titleAr: "بيت العود والقهوة", location: "Al Fahidi, Dubai", price: "10,000", priceUnit: "AED / event", rating: 4.7, reviews: 87, images: [IMG.coffee1, IMG.incense, IMG.coffee1], tags: ["Arabic coffee", "Bakhoor", "Oud service"], superhost: false, trustScore: 72, headcount: 11, languages: ["ar","en"] },
  // TRANSPORT
  { id: 25, category: "transport", title: "Royal Convoy Fleet", titleAr: "موكب الفخامة", location: "Business Bay, Dubai", price: "12,000", priceUnit: "AED starting", rating: 4.7, reviews: 98, images: [IMG.car1, IMG.car2, IMG.car1], tags: ["Rolls Royce", "Bentley", "Decorated convoy"], superhost: true, trustScore: 74, headcount: 14, languages: ["ar","en","ur"] },
  // INVITATIONS
  { id: 26, category: "invitations", title: "Elite Invitations", titleAr: "بطاقات النخبة", location: "Al Karama, Dubai", price: "3,000", priceUnit: "AED starting", rating: 4.4, reviews: 56, images: [IMG.invite1, IMG.invite2, IMG.invite1], tags: ["Gold-foil cards", "Digital invites", "WhatsApp video"], superhost: false, trustScore: 55, headcount: 6, languages: ["ar","en"] },
];

const LANG_FLAGS = { ar: "🇦🇪", en: "🇬🇧", hi: "🇮🇳", ur: "🇵🇰", tl: "🇵🇭", bn: "🇧🇩" };

// ============================================================
// MAIN APP
// ============================================================

export default function FarahApp() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedListing, setSelectedListing] = useState(null);
  const [imageIdx, setImageIdx] = useState(0);
  const [savedIds, setSavedIds] = useState(new Set());
  const catScrollRef = useRef(null);

  const filtered = LISTINGS.filter((l) => {
    const matchCat = selectedCategory === "all" || l.category === selectedCategory;
    const matchSearch = !searchQuery ||
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.titleAr.includes(searchQuery) ||
      l.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      l.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleSave = (id) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  if (selectedListing) {
    return <ListingDetail
      listing={selectedListing}
      onBack={() => { setSelectedListing(null); setImageIdx(0); }}
      saved={savedIds.has(selectedListing.id)}
      onToggleSave={() => toggleSave(selectedListing.id)}
    />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF", fontFamily: "'DM Sans', 'Noto Kufi Arabic', -apple-system, sans-serif", color: "#222" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ===== HEADER ===== */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50, background: "#FFFFFF",
        borderBottom: "1px solid #F0F0F0",
      }}>
        {/* Top bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 24px", maxWidth: 1400, margin: "0 auto",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
            onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg, #B8860B, #DAA520)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 800, color: "#FFF",
            }}>ف</div>
            <div>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#B8860B", letterSpacing: -0.5 }}>farah</span>
              <span style={{ fontSize: 10, color: "#999", marginInlineStart: 6, fontWeight: 500 }}>فرح</span>
            </div>
          </div>

          {/* Center search pill */}
          {!searchOpen && (
            <button onClick={() => setSearchOpen(true)} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 20px", background: "#FFF",
              border: "1px solid #DDD", borderRadius: 40,
              cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              transition: "box-shadow 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.14)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)"}
            >
              <span style={{ fontSize: 13, fontWeight: 600 }}>Anywhere in UAE</span>
              <span style={{ color: "#DDD" }}>|</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Wedding date</span>
              <span style={{ color: "#DDD" }}>|</span>
              <span style={{ fontSize: 13, color: "#888" }}>Search vendors</span>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "linear-gradient(135deg, #B8860B, #DAA520)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round"><circle cx="6" cy="6" r="5"/><line x1="10" y1="10" x2="13" y2="13"/></svg>
              </div>
            </button>
          )}

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 11, color: "#888", fontWeight: 500 }}>
              Powered by <span style={{ color: "#B8860B", fontWeight: 600 }}>Crustdata</span> · <span style={{ color: "#B8860B", fontWeight: 600 }}>Lingo.dev</span>
            </span>
            <div style={{
              width: 36, height: 36, borderRadius: "50%", background: "#F7F7F7",
              border: "1px solid #DDD",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, cursor: "pointer",
            }}>👤</div>
          </div>
        </div>

        {/* Expanded search */}
        {searchOpen && (
          <div style={{
            padding: "0 24px 16px", maxWidth: 700, margin: "0 auto",
            animation: "slideDown 0.2s ease",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "#F7F7F7", borderRadius: 40,
              padding: "4px 6px 4px 20px",
              border: "1px solid #E0E0E0",
            }}>
              <svg width="18" height="18" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"><circle cx="8" cy="8" r="6"/><line x1="13" y1="13" x2="17" y2="17"/></svg>
              <input
                autoFocus
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search venues, caterers, flowers, photographers..."
                style={{
                  flex: 1, background: "none", border: "none", outline: "none",
                  fontSize: 15, padding: "12px 0", color: "#222",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} style={{
                  width: 28, height: 28, borderRadius: "50%", background: "#E0E0E0",
                  border: "none", cursor: "pointer", fontSize: 14, color: "#666",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>✕</button>
              )}
              <button onClick={() => setSearchOpen(false)} style={{
                padding: "10px 20px", borderRadius: 30,
                background: "linear-gradient(135deg, #B8860B, #DAA520)",
                border: "none", color: "#FFF", fontWeight: 600,
                cursor: "pointer", fontSize: 14,
              }}>Search</button>
            </div>
          </div>
        )}

        {/* Category pills */}
        <div ref={catScrollRef} style={{
          display: "flex", gap: 2, overflowX: "auto", padding: "0 24px 12px",
          maxWidth: 1400, margin: "0 auto",
          scrollbarWidth: "none",
        }}>
          {CATEGORIES.map(cat => (
            <button key={cat.key} onClick={() => setSelectedCategory(cat.key)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                padding: "8px 14px", border: "none", cursor: "pointer",
                background: "transparent", borderRadius: 0,
                borderBottom: selectedCategory === cat.key ? "2px solid #222" : "2px solid transparent",
                color: selectedCategory === cat.key ? "#222" : "#888",
                opacity: selectedCategory === cat.key ? 1 : 0.7,
                transition: "all 0.15s", whiteSpace: "nowrap", minWidth: "fit-content",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={e => { if (selectedCategory !== cat.key) e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={e => { if (selectedCategory !== cat.key) e.currentTarget.style.opacity = "0.7"; }}
            >
              <span style={{ fontSize: 20 }}>{cat.icon}</span>
              <span style={{ fontSize: 11, fontWeight: selectedCategory === cat.key ? 600 : 500 }}>{cat.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* ===== MAIN GRID ===== */}
      <main style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 24px 80px" }}>
        {searchQuery && (
          <p style={{ fontSize: 14, color: "#888", marginBottom: 16 }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "<strong>{searchQuery}</strong>"
          </p>
        )}

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {filtered.map(listing => (
            <ListingCard
              key={listing.id}
              listing={listing}
              saved={savedIds.has(listing.id)}
              onToggleSave={() => toggleSave(listing.id)}
              onClick={() => setSelectedListing(listing)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "#999" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#555" }}>No vendors found</p>
            <p style={{ fontSize: 14 }}>Try adjusting your search or category filters</p>
          </div>
        )}
      </main>

      <style>{`
        @keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        * { box-sizing: border-box; margin: 0; }
        ::-webkit-scrollbar { display: none; }
        img { display: block; }
      `}</style>
    </div>
  );
}

// ============================================================
// LISTING CARD (Airbnb style)
// ============================================================

function ListingCard({ listing, saved, onToggleSave, onClick }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      {/* Image carousel */}
      <div style={{
        position: "relative", borderRadius: 16, overflow: "hidden",
        aspectRatio: "4/3", background: "#F0ECE3",
      }}>
        <img
          src={listing.images[imgIdx]}
          alt={listing.title}
          onLoad={() => setImgLoaded(true)}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: imgLoaded ? 1 : 0, transition: "opacity 0.3s",
          }}
        />

        {/* Gradient overlay for dots */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 50,
          background: "linear-gradient(transparent, rgba(0,0,0,0.15))",
          pointerEvents: "none",
        }} />

        {/* Heart */}
        <button onClick={e => { e.stopPropagation(); onToggleSave(); }} style={{
          position: "absolute", top: 12, right: 12,
          width: 32, height: 32, borderRadius: "50%",
          background: saved ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.2)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, transition: "transform 0.15s",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          {saved ? "❤️" : "🤍"}
        </button>

        {/* Superhost badge */}
        {listing.superhost && (
          <div style={{
            position: "absolute", top: 12, left: 12,
            background: "#FFF", borderRadius: 20, padding: "4px 10px",
            fontSize: 11, fontWeight: 600, color: "#222",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}>⭐ Top Rated</div>
        )}

        {/* Trust Score */}
        <div style={{
          position: "absolute", bottom: 12, left: 12,
          background: "rgba(255,255,255,0.92)", borderRadius: 8, padding: "3px 8px",
          fontSize: 10, fontWeight: 600, color: "#555",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", gap: 4,
        }}>
          <span style={{ color: listing.trustScore >= 80 ? "#16a34a" : listing.trustScore >= 60 ? "#B8860B" : "#dc2626" }}>●</span>
          Trust {listing.trustScore}%
          <span style={{ color: "#aaa", fontWeight: 400 }}>· Crustdata</span>
        </div>

        {/* Carousel dots */}
        <div style={{
          position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 4,
        }}>
          {listing.images.map((_, i) => (
            <button key={i} onClick={e => { e.stopPropagation(); setImgIdx(i); setImgLoaded(false); }} style={{
              width: i === imgIdx ? 8 : 6, height: i === imgIdx ? 8 : 6,
              borderRadius: "50%",
              background: i === imgIdx ? "#FFF" : "rgba(255,255,255,0.5)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.2s",
            }} />
          ))}
        </div>

        {/* Arrow buttons */}
        {imgIdx > 0 && (
          <button onClick={e => { e.stopPropagation(); setImgIdx(i => i - 1); setImgLoaded(false); }} style={{
            position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
            width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.9)",
            border: "none", cursor: "pointer", fontSize: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          }}>‹</button>
        )}
        {imgIdx < listing.images.length - 1 && (
          <button onClick={e => { e.stopPropagation(); setImgIdx(i => i + 1); setImgLoaded(false); }} style={{
            position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
            width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.9)",
            border: "none", cursor: "pointer", fontSize: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          }}>›</button>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "12px 2px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#222", lineHeight: 1.3 }}>{listing.title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0, marginInlineStart: 8 }}>
            <span style={{ fontSize: 13 }}>★</span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>{listing.rating}</span>
            <span style={{ fontSize: 12, color: "#888" }}>({listing.reviews})</span>
          </div>
        </div>
        <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{listing.location}</div>
        <div style={{ display: "flex", gap: 4, marginTop: 6, flexWrap: "wrap" }}>
          {listing.tags.slice(0, 2).map((tag, i) => (
            <span key={i} style={{
              fontSize: 11, color: "#666", background: "#F5F5F5",
              padding: "2px 8px", borderRadius: 4,
            }}>{tag}</span>
          ))}
        </div>
        <div style={{ marginTop: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>{listing.price} </span>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 400 }}>{listing.priceUnit}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// LISTING DETAIL PAGE
// ============================================================

function ListingDetail({ listing, onBack, saved, onToggleSave }) {
  const [activeImg, setActiveImg] = useState(0);
  const [showContact, setShowContact] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#FFF", fontFamily: "'DM Sans', 'Noto Kufi Arabic', -apple-system, sans-serif", color: "#222" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Top bar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50, background: "#FFF",
        borderBottom: "1px solid #F0F0F0",
        padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button onClick={onBack} style={{
          display: "flex", alignItems: "center", gap: 6,
          background: "none", border: "none", cursor: "pointer",
          fontSize: 14, fontWeight: 500, color: "#222",
        }}>← Back</button>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={onToggleSave} style={{
            display: "flex", alignItems: "center", gap: 4,
            background: "none", border: "1px solid #DDD", borderRadius: 8,
            padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 500,
          }}>{saved ? "❤️ Saved" : "🤍 Save"}</button>
          <button style={{
            display: "flex", alignItems: "center", gap: 4,
            background: "none", border: "1px solid #DDD", borderRadius: 8,
            padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 500,
          }}>↗ Share</button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Title */}
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: "20px 0 4px" }}>{listing.title}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#555", marginBottom: 16 }}>
          <span>★ {listing.rating} · {listing.reviews} reviews</span>
          <span>·</span>
          {listing.superhost && <><span style={{ fontWeight: 600 }}>⭐ Top Rated</span><span>·</span></>}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>{listing.location}</span>
        </div>

        {/* Image gallery */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 8, borderRadius: 16, overflow: "hidden",
          height: 420,
        }}>
          <div style={{ gridRow: "1 / 3", cursor: "pointer" }} onClick={() => setActiveImg(0)}>
            <img src={listing.images[0]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => setActiveImg(1)}>
            <img src={listing.images[1]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => setActiveImg(2)}>
            <img src={listing.images[2]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        {/* Content + Booking sidebar */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, marginTop: 32, paddingBottom: 60 }}>
          {/* Left content */}
          <div>
            {/* Host info */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 24, borderBottom: "1px solid #EBEBEB" }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 600 }}>{listing.titleAr}</h2>
                <p style={{ fontSize: 14, color: "#888", marginTop: 4 }}>
                  {listing.headcount} team members · Est. {2026 - Math.floor(listing.headcount / 5)} · {listing.languages.map(l => LANG_FLAGS[l]).join(" ")} languages
                </p>
              </div>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "linear-gradient(135deg, #F0ECE3, #E8E0D0)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, border: "2px solid #B8860B",
              }}>
                {CATEGORIES.find(c => c.key === listing.category)?.icon || "🏛️"}
              </div>
            </div>

            {/* Key highlights */}
            <div style={{ padding: "24px 0", borderBottom: "1px solid #EBEBEB" }}>
              {[
                { icon: "🛡️", title: "Crustdata Verified", desc: `Trust Score: ${listing.trustScore}% — Company data verified via Crustdata API` },
                { icon: "🌐", title: "Multilingual Support", desc: `Communicates in ${listing.languages.map(l => LANG_FLAGS[l]).join(" ")} — auto-translated by Lingo.dev` },
                { icon: "📅", title: "Instant Booking", desc: "Confirm availability and book directly through Farah — powered by Trace workflow" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 2 ? 20 : 0 }}>
                  <span style={{ fontSize: 24 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ padding: "24px 0", borderBottom: "1px solid #EBEBEB" }}>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#444" }}>
                {listing.tags.join(" · ")}. Located in {listing.location}, serving the UAE wedding market with premium quality and cultural sensitivity. All communication is automatically translated between Arabic, English, Hindi, Urdu, and Filipino using Lingo.dev so you can focus on planning your perfect day.
              </p>
            </div>

            {/* What's included */}
            <div style={{ padding: "24px 0", borderBottom: "1px solid #EBEBEB" }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>What's included</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {listing.tags.map((tag, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#444" }}>
                    <span style={{ color: "#B8860B" }}>✓</span> {tag}
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#444" }}>
                  <span style={{ color: "#B8860B" }}>✓</span> Free consultation call via Lyra
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#444" }}>
                  <span style={{ color: "#B8860B" }}>✓</span> Auto-translated contracts
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar — booking card */}
          <div>
            <div style={{
              position: "sticky", top: 80,
              border: "1px solid #DDD", borderRadius: 16,
              padding: 24, boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 20 }}>
                <span style={{ fontSize: 24, fontWeight: 700 }}>{listing.price}</span>
                <span style={{ fontSize: 14, color: "#888" }}>{listing.priceUnit}</span>
              </div>

              {/* Fake booking form */}
              <div style={{ border: "1px solid #DDD", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{ padding: "10px 14px", borderRight: "1px solid #DDD", borderBottom: "1px solid #DDD" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "#222" }}>Wedding Date</div>
                    <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Apr 5, 2026</div>
                  </div>
                  <div style={{ padding: "10px 14px", borderBottom: "1px solid #DDD" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "#222" }}>Guests</div>
                    <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>300</div>
                  </div>
                </div>
                <div style={{ padding: "10px 14px" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "#222" }}>Your Language</div>
                  <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>🇦🇪 Arabic — vendor speaks 🇮🇳 Hindi</div>
                </div>
              </div>

              <button onClick={() => setShowContact(true)} style={{
                width: "100%", padding: "14px",
                background: "linear-gradient(135deg, #B8860B, #DAA520)",
                border: "none", borderRadius: 10, color: "#FFF",
                fontSize: 16, fontWeight: 700, cursor: "pointer",
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                {showContact ? "✓ Request Sent!" : "Contact Vendor"}
              </button>

              <button style={{
                width: "100%", padding: "14px", marginTop: 10,
                background: "#FFF",
                border: "1px solid #222", borderRadius: 10, color: "#222",
                fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}>📞 Book Consultation via Lyra</button>

              <p style={{ textAlign: "center", fontSize: 12, color: "#888", marginTop: 12 }}>
                Messages auto-translated by Lingo.dev
              </p>

              {showContact && (
                <div style={{
                  marginTop: 16, padding: 14, background: "#F0FFF0",
                  borderRadius: 10, border: "1px solid #C6F0C6",
                  fontSize: 13, color: "#2D7A2D",
                  animation: "slideDown 0.3s ease",
                }}>
                  ✅ Your inquiry has been translated to Hindi and sent to {listing.titleAr}. You'll hear back within 24 hours.
                  <div style={{ marginTop: 6, fontSize: 11, color: "#888" }}>
                    Workflow managed by Trace · Voice follow-up via Uplift AI
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        * { box-sizing: border-box; margin: 0; }
      `}</style>
    </div>
  );
}
