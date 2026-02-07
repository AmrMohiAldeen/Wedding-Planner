"use client";
import { useState, useRef, useEffect, JSX } from "react";

// ============================================================
// FARAH (فرح) — Emirati Wedding Marketplace
// Hero video landing + Airbnb-style vendor browsing
// ============================================================

const IMG: Record<string, string> = {
  hall1: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
  hall2: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
  hall3: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&h=400&fit=crop",
  hotel1: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
  hotel2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  villa1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  villa2: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  garden1: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop",
  beach1: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=600&h=400&fit=crop",
  buffet1: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
  buffet2: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
  arabic_food: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=600&h=400&fit=crop",
  flower1: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop",
  flower2: "https://images.unsplash.com/photo-1561128290-006dc4827214?w=600&h=400&fit=crop",
  flower3: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&h=400&fit=crop",
  bouquet1: "https://images.unsplash.com/photo-1522057306606-8d84b4cd8ba3?w=600&h=400&fit=crop",
  stage1: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop",
  stage2: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop",
  photo1: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=600&h=400&fit=crop",
  photo2: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop",
  photo3: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
  henna1: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=600&h=400&fit=crop",
  henna2: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&h=400&fit=crop",
  cake1: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop",
  cake2: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&h=400&fit=crop",
  cake3: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=400&fit=crop",
  music1: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
  dj1: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600&h=400&fit=crop",
  lights1: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
  lights2: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&h=400&fit=crop",
  chandelier: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&h=400&fit=crop",
  car1: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop",
  car2: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop",
  dress1: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=400&fit=crop",
  dress2: "https://images.unsplash.com/photo-1585241920473-b472eb9ffbae?w=600&h=400&fit=crop",
  jewelry: "https://images.unsplash.com/photo-1515562141589-67f0d569b6e5?w=600&h=400&fit=crop",
  decor2: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
  table1: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  decor1: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop",
  coffee1: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=400&fit=crop",
  incense: "https://images.unsplash.com/photo-1602178506153-0c30de1f0b43?w=600&h=400&fit=crop",
  invite1: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&h=400&fit=crop",
  invite2: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
  planner1: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=400&fit=crop",
  planner2: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop",
  makeup1: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
};

// Hero video — free stock wedding ambiance
const HERO_VIDEO = "https://videos.pexels.com/video-files/3327310/3327310-uhd_2560_1440_30fps.mp4";

// ===== TYPES =====
interface SubCategory {
  key: string;
  label: string;
  labelAr: string;
  icon: string;
}

interface Group {
  key: string;
  label: string;
  labelAr: string;
  icon: string;
  desc: string;
  subs: SubCategory[];
}

interface Listing {
  id: number;
  sub: string;
  title: string;
  titleAr: string;
  location: string;
  price: string;
  priceUnit: string;
  rating: number;
  reviews: number;
  images: string[];
  tags: string[];
  superhost: boolean;
  trustScore: number;
  headcount: number;
  languages: string[];
}

// ===== 3 MAIN GROUPS =====
const GROUPS: Group[] = [
  {
    key: "venues", label: "Venues & Halls", labelAr: "القاعات والأماكن", icon: "🏛️",
    desc: "Halls, hotels, villas, gardens & beach venues",
    subs: [
      { key: "hall", label: "Wedding Halls", labelAr: "قاعات الأعراس", icon: "🏛️" },
      { key: "hotel", label: "Hotels & Resorts", labelAr: "الفنادق", icon: "🏨" },
      { key: "villa", label: "Private Villas", labelAr: "فلل خاصة", icon: "🏡" },
      { key: "garden", label: "Gardens & Outdoor", labelAr: "الحدائق", icon: "🌿" },
      { key: "beach", label: "Beach Venues", labelAr: "أماكن على البحر", icon: "🏖️" },
    ],
  },
  {
    key: "services", label: "People & Services", labelAr: "الخدمات والأشخاص", icon: "👥",
    desc: "Planners, photographers, artists & performers",
    subs: [
      { key: "planner", label: "Wedding Planners", labelAr: "منظمي الأعراس", icon: "📋" },
      { key: "photography", label: "Photo & Video", labelAr: "التصوير", icon: "📸" },
      { key: "henna", label: "Henna Artists", labelAr: "فنانات الحناء", icon: "🤲" },
      { key: "entertainment", label: "Zaffe, DJ & Music", labelAr: "الزفة والموسيقى", icon: "🎵" },
      { key: "bridal", label: "Bridal Fashion & Makeup", labelAr: "أزياء وتجميل العروس", icon: "👗" },
      { key: "oud", label: "Oud & Gahwa Service", labelAr: "خدمة العود والقهوة", icon: "☕" },
    ],
  },
  {
    key: "products", label: "Products & Essentials", labelAr: "المنتجات والأساسيات", icon: "✨",
    desc: "Food, flowers, cakes, décor, lighting & more",
    subs: [
      { key: "catering", label: "Catering & Food", labelAr: "الضيافة والطعام", icon: "🍽️" },
      { key: "florist", label: "Flowers & Bouquets", labelAr: "الورود والباقات", icon: "🌸" },
      { key: "kosha", label: "Kosha & Stage", labelAr: "الكوشة والمسرح", icon: "👑" },
      { key: "cake", label: "Cakes & Sweets", labelAr: "الكيك والحلويات", icon: "🎂" },
      { key: "lighting", label: "Lighting & Effects", labelAr: "الإضاءة", icon: "💡" },
      { key: "decor", label: "Décor & Styling", labelAr: "الديكور", icon: "🎨" },
      { key: "transport", label: "Luxury Cars & Convoy", labelAr: "السيارات والموكب", icon: "🚗" },
      { key: "invitations", label: "Invitations", labelAr: "بطاقات الدعوة", icon: "💌" },
    ],
  },
];

const SUB_MAP: Record<string, SubCategory & { group: string }> = {};
GROUPS.forEach(g => g.subs.forEach(s => { SUB_MAP[s.key] = { ...s, group: g.key }; }));

const LANG_FLAGS: Record<string, string> = { ar: "🇦🇪", en: "🇬🇧", hi: "🇮🇳", ur: "🇵🇰", tl: "🇵🇭", bn: "🇧🇩" };

// ===== LISTINGS =====
const LISTINGS: Listing[] = [
  // Venues — Halls
  { id: 1, sub: "hall", title: "Al Jawhara Grand Hall", titleAr: "قاعة الجوهرة الكبرى", location: "Jumeirah, Dubai", price: "150,000", priceUnit: "AED / event", rating: 4.9, reviews: 234, images: [IMG.hall1, IMG.hall2, IMG.hall3], tags: ["800 guests", "Ladies + Men halls", "Valet parking"], superhost: true, trustScore: 96, headcount: 210, languages: ["ar","en","hi"] },
  { id: 2, sub: "hall", title: "Royal Zabeel Ballroom", titleAr: "قاعة زعبيل الملكية", location: "Zabeel, Dubai", price: "200,000", priceUnit: "AED / event", rating: 4.7, reviews: 156, images: [IMG.hall3, IMG.hall1, IMG.hotel1], tags: ["600 guests", "Gold interior", "Private entrance"], superhost: false, trustScore: 88, headcount: 120, languages: ["ar","en"] },
  { id: 3, sub: "hall", title: "Sharjah Expo Wedding Hall", titleAr: "قاعة إكسبو الشارقة", location: "Al Taawun, Sharjah", price: "90,000", priceUnit: "AED / event", rating: 4.5, reviews: 112, images: [IMG.hall2, IMG.hall3, IMG.hall1], tags: ["1000 guests", "Budget-friendly", "Modern design"], superhost: false, trustScore: 80, headcount: 80, languages: ["ar","en","ur"] },
  // Venues — Hotels
  { id: 4, sub: "hotel", title: "Palace Hotel Ballroom", titleAr: "قاعة فندق القصر", location: "Downtown Dubai", price: "280,000", priceUnit: "AED / event", rating: 4.8, reviews: 189, images: [IMG.hotel1, IMG.hotel2, IMG.hall1], tags: ["5-star", "All-inclusive", "Burj Khalifa view"], superhost: true, trustScore: 98, headcount: 450, languages: ["ar","en","hi","tl"] },
  { id: 5, sub: "hotel", title: "Ritz-Carlton Wedding Suite", titleAr: "ريتز كارلتون", location: "JBR, Dubai", price: "350,000", priceUnit: "AED / event", rating: 4.9, reviews: 201, images: [IMG.hotel2, IMG.hotel1, IMG.beach1], tags: ["Beachfront ballroom", "Royal suite", "Premium catering"], superhost: true, trustScore: 99, headcount: 600, languages: ["ar","en","hi","tl"] },
  // Venues — Villas
  { id: 6, sub: "villa", title: "Pearl Villa Private Estate", titleAr: "فيلا اللؤلؤة", location: "Emirates Hills, Dubai", price: "180,000", priceUnit: "AED / event", rating: 4.8, reviews: 67, images: [IMG.villa1, IMG.garden1, IMG.villa2], tags: ["Private pool", "Garden ceremony", "300 guests"], superhost: true, trustScore: 85, headcount: 35, languages: ["ar","en"] },
  { id: 7, sub: "villa", title: "Saadiyat Island Villa", titleAr: "فيلا جزيرة السعديات", location: "Saadiyat, Abu Dhabi", price: "220,000", priceUnit: "AED / event", rating: 4.7, reviews: 43, images: [IMG.villa2, IMG.villa1, IMG.beach1], tags: ["Ocean view", "Luxury interior", "250 guests"], superhost: false, trustScore: 82, headcount: 15, languages: ["ar","en"] },
  // Venues — Gardens
  { id: 8, sub: "garden", title: "Al Barari Garden Venue", titleAr: "حديقة البراري", location: "Al Barari, Dubai", price: "120,000", priceUnit: "AED / event", rating: 4.7, reviews: 45, images: [IMG.garden1, IMG.villa2, IMG.villa1], tags: ["Tropical garden", "Intimate setting", "200 guests"], superhost: false, trustScore: 78, headcount: 20, languages: ["ar","en","tl"] },
  // Venues — Beach
  { id: 9, sub: "beach", title: "Bab Al Qasr Beach", titleAr: "باب القصر — البحر", location: "Corniche, Abu Dhabi", price: "320,000", priceUnit: "AED / event", rating: 4.9, reviews: 98, images: [IMG.beach1, IMG.hotel2, IMG.garden1], tags: ["Beachfront", "Sunset ceremony", "500 guests"], superhost: true, trustScore: 94, headcount: 300, languages: ["ar","en","ur"] },
  // Services — Planners
  { id: 10, sub: "planner", title: "Afrah Events — Full Service", titleAr: "أفراح للتنظيم الشامل", location: "Dubai & Abu Dhabi", price: "50,000", priceUnit: "AED starting", rating: 4.9, reviews: 312, images: [IMG.planner1, IMG.planner2, IMG.decor2], tags: ["Full coordination", "15+ years experience", "Emirati specialist"], superhost: true, trustScore: 94, headcount: 45, languages: ["ar","en","hi","ur"] },
  { id: 11, sub: "planner", title: "Laylat Al Omer", titleAr: "ليلة العمر للتنظيم", location: "Sharjah & Dubai", price: "30,000", priceUnit: "AED starting", rating: 4.7, reviews: 178, images: [IMG.planner2, IMG.stage1, IMG.planner1], tags: ["Budget-friendly", "Day-of coordination", "Vendor management"], superhost: false, trustScore: 82, headcount: 12, languages: ["ar","en"] },
  { id: 12, sub: "planner", title: "Nurah Weddings", titleAr: "نوره للأعراس", location: "Abu Dhabi", price: "40,000", priceUnit: "AED starting", rating: 4.8, reviews: 145, images: [IMG.planner1, IMG.decor2, IMG.planner2], tags: ["Ladies-only events", "Traditional Emirati", "Family weddings"], superhost: true, trustScore: 88, headcount: 22, languages: ["ar","en"] },
  // Services — Photography
  { id: 13, sub: "photography", title: "Farah Lens Studio", titleAr: "عدسة الفرح", location: "Abu Dhabi", price: "15,000", priceUnit: "AED / event", rating: 4.9, reviews: 245, images: [IMG.photo1, IMG.photo2, IMG.photo3], tags: ["Female team", "Ladies events", "Drone coverage"], superhost: true, trustScore: 70, headcount: 12, languages: ["ar","en","ur"] },
  { id: 14, sub: "photography", title: "Noor Al Hayat Photography", titleAr: "نور الحياة للتصوير", location: "Dubai Marina", price: "20,000", priceUnit: "AED / event", rating: 4.8, reviews: 167, images: [IMG.photo3, IMG.photo1, IMG.photo2], tags: ["Cinematic video", "Same-day edit", "Photo booth"], superhost: true, trustScore: 80, headcount: 18, languages: ["ar","en","hi"] },
  { id: 15, sub: "photography", title: "Khaleeji Moments", titleAr: "لحظات خليجية", location: "Sharjah", price: "10,000", priceUnit: "AED / event", rating: 4.6, reviews: 89, images: [IMG.photo2, IMG.photo3, IMG.photo1], tags: ["Budget-friendly", "Men's events", "Album included"], superhost: false, trustScore: 65, headcount: 6, languages: ["ar","en"] },
  // Services — Henna
  { id: 16, sub: "henna", title: "Golden Henna Artists", titleAr: "الحناء الذهبية", location: "Deira, Dubai", price: "5,000", priceUnit: "AED starting", rating: 4.7, reviews: 312, images: [IMG.henna1, IMG.henna2, IMG.henna1], tags: ["Khaleeji style", "Indian style", "Bridal packages"], superhost: false, trustScore: 62, headcount: 8, languages: ["ar","hi","bn"] },
  { id: 17, sub: "henna", title: "Henna by Maryam", titleAr: "حناء مريم", location: "Al Ain", price: "3,000", priceUnit: "AED starting", rating: 4.8, reviews: 198, images: [IMG.henna2, IMG.henna1, IMG.henna2], tags: ["Moroccan style", "Home service", "Group bookings"], superhost: true, trustScore: 72, headcount: 4, languages: ["ar","en"] },
  // Services — Entertainment
  { id: 18, sub: "entertainment", title: "Zaffe Sound — Bridal Procession", titleAr: "صوت الزفة", location: "Sharjah", price: "12,000", priceUnit: "AED / event", rating: 4.5, reviews: 198, images: [IMG.music1, IMG.dj1, IMG.lights1], tags: ["Zaffe band", "Traditional drums", "Bridal entrance"], superhost: true, trustScore: 76, headcount: 18, languages: ["ar","en"] },
  { id: 19, sub: "entertainment", title: "Dubai DJ Collective", titleAr: "دي جي دبي", location: "JLT, Dubai", price: "8,000", priceUnit: "AED / event", rating: 4.6, reviews: 134, images: [IMG.dj1, IMG.music1, IMG.lights2], tags: ["DJ set", "Sound system", "Arabic & Western mix"], superhost: false, trustScore: 70, headcount: 10, languages: ["ar","en","hi"] },
  // Services — Bridal
  { id: 20, sub: "bridal", title: "Bridal Couture Emirates", titleAr: "أزياء العروس الإماراتية", location: "City Walk, Dubai", price: "30,000", priceUnit: "AED starting", rating: 4.8, reviews: 201, images: [IMG.dress1, IMG.dress2, IMG.jewelry], tags: ["Custom gowns", "Jalabiya collection", "3-4 outfit changes"], superhost: true, trustScore: 85, headcount: 20, languages: ["ar","en","tl"] },
  { id: 21, sub: "bridal", title: "Glamour Makeup Studio", titleAr: "ستوديو غلامور", location: "JBR, Dubai", price: "5,000", priceUnit: "AED / look", rating: 4.9, reviews: 278, images: [IMG.makeup1, IMG.dress1, IMG.dress2], tags: ["Bridal makeup", "Hair styling", "Trial session"], superhost: true, trustScore: 88, headcount: 14, languages: ["ar","en","hi"] },
  // Services — Oud
  { id: 22, sub: "oud", title: "Oud & Gahwa House", titleAr: "بيت العود والقهوة", location: "Al Fahidi, Dubai", price: "10,000", priceUnit: "AED / event", rating: 4.7, reviews: 87, images: [IMG.coffee1, IMG.incense, IMG.coffee1], tags: ["Arabic coffee", "Bakhoor", "Oud incense"], superhost: false, trustScore: 72, headcount: 11, languages: ["ar","en"] },
  { id: 23, sub: "oud", title: "Dallat Al Emarat", titleAr: "دلة الإمارات", location: "Al Ain", price: "6,000", priceUnit: "AED / event", rating: 4.6, reviews: 65, images: [IMG.incense, IMG.coffee1, IMG.incense], tags: ["Traditional dallah", "Dates platter", "Bakhoor ceremony"], superhost: false, trustScore: 66, headcount: 6, languages: ["ar"] },
  // Products — Catering
  { id: 24, sub: "catering", title: "Royal Hospitality House", titleAr: "دار الضيافة الملكية", location: "Al Quoz, Dubai", price: "80,000", priceUnit: "AED / 300 guests", rating: 4.8, reviews: 267, images: [IMG.buffet1, IMG.arabic_food, IMG.buffet2], tags: ["Emirati cuisine", "Machboos & Harees", "Live cooking stations"], superhost: true, trustScore: 92, headcount: 87, languages: ["ar","hi","en"] },
  { id: 25, sub: "catering", title: "Beit Al Mandi", titleAr: "بيت المندي", location: "Deira, Dubai", price: "45,000", priceUnit: "AED / 300 guests", rating: 4.6, reviews: 145, images: [IMG.arabic_food, IMG.buffet1, IMG.buffet2], tags: ["Yemeni & Emirati", "Mandi specialist", "Budget-friendly"], superhost: false, trustScore: 76, headcount: 40, languages: ["ar","hi","bn"] },
  { id: 26, sub: "catering", title: "Al Nafoora International", titleAr: "النافورة الدولية", location: "Sheikh Zayed Rd", price: "120,000", priceUnit: "AED / 300 guests", rating: 4.9, reviews: 189, images: [IMG.buffet2, IMG.buffet1, IMG.arabic_food], tags: ["International cuisine", "Premium buffet", "Chef's table"], superhost: true, trustScore: 90, headcount: 110, languages: ["ar","en","hi","tl"] },
  // Products — Flowers
  { id: 27, sub: "florist", title: "Jannah Flowers", titleAr: "ورود الجنة", location: "Jumeirah, Dubai", price: "25,000", priceUnit: "AED starting", rating: 4.9, reviews: 198, images: [IMG.flower1, IMG.flower2, IMG.bouquet1], tags: ["Luxury arrangements", "Jasmine & roses", "Stage florals"], superhost: true, trustScore: 78, headcount: 23, languages: ["ar","tl","en"] },
  { id: 28, sub: "florist", title: "Wardeh Floral Design", titleAr: "وردة للتصميم", location: "Abu Dhabi", price: "15,000", priceUnit: "AED starting", rating: 4.7, reviews: 89, images: [IMG.flower3, IMG.bouquet1, IMG.flower1], tags: ["Orchids & tulips", "Table centerpieces", "Bridal bouquet"], superhost: false, trustScore: 70, headcount: 10, languages: ["ar","en","tl"] },
  // Products — Kosha
  { id: 29, sub: "kosha", title: "Princess Kosha Design", titleAr: "كوشة الأميرات", location: "Al Barsha, Dubai", price: "35,000", priceUnit: "AED starting", rating: 4.9, reviews: 156, images: [IMG.stage1, IMG.stage2, IMG.decor1], tags: ["Crystal throne", "LED backdrop", "Royal stage"], superhost: true, trustScore: 82, headcount: 15, languages: ["ar","en"] },
  { id: 30, sub: "kosha", title: "Rawan Stage Design", titleAr: "روان لتصميم المسرح", location: "Sharjah", price: "20,000", priceUnit: "AED starting", rating: 4.6, reviews: 78, images: [IMG.stage2, IMG.stage1, IMG.lights2], tags: ["Modern designs", "Floral kosha", "Minimalist"], superhost: false, trustScore: 68, headcount: 8, languages: ["ar","en","ur"] },
  // Products — Cakes
  { id: 31, sub: "cake", title: "Sultan Sweets & Cakes", titleAr: "حلويات السلطان", location: "Al Nahda, Sharjah", price: "8,000", priceUnit: "AED starting", rating: 4.6, reviews: 134, images: [IMG.cake1, IMG.cake2, IMG.cake3], tags: ["Multi-tier cakes", "Arabic sweets", "Chocolate fountain"], superhost: true, trustScore: 80, headcount: 30, languages: ["ar","hi","en"] },
  { id: 32, sub: "cake", title: "Le Petit Gâteau", titleAr: "لو بيتي غاتو", location: "DIFC, Dubai", price: "15,000", priceUnit: "AED starting", rating: 4.9, reviews: 89, images: [IMG.cake3, IMG.cake1, IMG.cake2], tags: ["French pastry", "Custom fondant", "Luxury design"], superhost: true, trustScore: 86, headcount: 15, languages: ["ar","en"] },
  // Products — Lighting
  { id: 33, sub: "lighting", title: "Stars Lighting Events", titleAr: "نجوم الإضاءة", location: "Al Satwa, Dubai", price: "30,000", priceUnit: "AED starting", rating: 4.6, reviews: 123, images: [IMG.lights1, IMG.chandelier, IMG.lights2], tags: ["LED stages", "Chandeliers", "Laser shows"], superhost: true, trustScore: 84, headcount: 34, languages: ["ar","ur","en"] },
  { id: 34, sub: "lighting", title: "Luminaire Events", titleAr: "لوميناير", location: "Abu Dhabi", price: "18,000", priceUnit: "AED starting", rating: 4.5, reviews: 67, images: [IMG.lights2, IMG.chandelier, IMG.lights1], tags: ["Fairy lights", "Candle setups", "Outdoor lighting"], superhost: false, trustScore: 72, headcount: 12, languages: ["ar","en"] },
  // Products — Décor
  { id: 35, sub: "decor", title: "Lamasat Décor & Styling", titleAr: "لمسات الديكور", location: "Al Qusais, Dubai", price: "25,000", priceUnit: "AED starting", rating: 4.6, reviews: 145, images: [IMG.decor2, IMG.table1, IMG.decor1], tags: ["Table settings", "Ceiling draping", "Aisle design"], superhost: true, trustScore: 81, headcount: 28, languages: ["ar","tl","hi"] },
  // Products — Transport
  { id: 36, sub: "transport", title: "Royal Convoy Fleet", titleAr: "موكب الفخامة", location: "Business Bay, Dubai", price: "12,000", priceUnit: "AED starting", rating: 4.7, reviews: 98, images: [IMG.car1, IMG.car2, IMG.car1], tags: ["Rolls Royce", "Bentley", "Decorated convoy"], superhost: true, trustScore: 74, headcount: 14, languages: ["ar","en","ur"] },
  // Products — Invitations
  { id: 37, sub: "invitations", title: "Elite Invitations", titleAr: "بطاقات النخبة", location: "Al Karama, Dubai", price: "3,000", priceUnit: "AED starting", rating: 4.4, reviews: 56, images: [IMG.invite1, IMG.invite2, IMG.invite1], tags: ["Gold-foil cards", "Digital invites", "WhatsApp video"], superhost: false, trustScore: 55, headcount: 6, languages: ["ar","en"] },
  { id: 38, sub: "invitations", title: "Basma Cards & Design", titleAr: "بسمة للبطاقات", location: "Ajman", price: "5,000", priceUnit: "AED starting", rating: 4.6, reviews: 78, images: [IMG.invite2, IMG.invite1, IMG.invite2], tags: ["Luxury box invites", "Custom calligraphy", "Bilingual design"], superhost: true, trustScore: 70, headcount: 10, languages: ["ar","en"] },
];


// ============================================================
// MAIN APP
// ============================================================
export  function FarahApp(): JSX.Element {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [savedIds, setSavedIds] = useState<Set<number>>(new Set());
  const [scrolled, setScrolled] = useState(false);
  const vendorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentGroup = GROUPS.find(g => g.key === activeGroup) || null;
  const groupSubKeys = currentGroup ? currentGroup.subs.map(s => s.key) : [];

  const filtered = LISTINGS.filter(l => {
    const inGroup = !activeGroup || groupSubKeys.includes(l.sub);
    const inSub = !activeSub || l.sub === activeSub;
    const inSearch = !searchQuery ||
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.titleAr.includes(searchQuery) ||
      l.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      l.location.toLowerCase().includes(searchQuery.toLowerCase());
    return inGroup && inSub && inSearch;
  });

  const sections: { sub: SubCategory; items: Listing[] }[] = [];
  if (activeGroup && !activeSub && !searchQuery && currentGroup) {
    currentGroup.subs.forEach(s => {
      const items = filtered.filter(l => l.sub === s.key);
      if (items.length > 0) sections.push({ sub: s, items });
    });
  }

  const toggleSave = (id: number) => setSavedIds(prev => {
    const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n;
  });

  const scrollToVendors = () => vendorRef.current?.scrollIntoView({ behavior: "smooth" });
  const reset = () => { setActiveGroup(null); setActiveSub(null); setSearchQuery(""); setSearchOpen(false); };

  if (selectedListing) return (
    <DetailPage listing={selectedListing} onBack={() => setSelectedListing(null)}
      saved={savedIds.has(selectedListing.id)} onToggleSave={() => toggleSave(selectedListing.id)} />
  );

  return (
    <div style={{ minHeight: "100vh", background: "#FFF", fontFamily: "'DM Sans','Noto Kufi Arabic',-apple-system,sans-serif", color: "#222" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ===== STICKY NAV ===== */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #EBEBEB" : "1px solid transparent",
        transition: "all 0.35s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 28px", maxWidth: 1440, margin: "0 auto" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", flexShrink: 0 }} onClick={reset}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg,#B8860B,#DAA520)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 800, color: "#FFF" }}>ف</div>
            <span style={{ fontSize: 19, fontWeight: 700, color: scrolled ? "#B8860B" : "#FFF", letterSpacing: -0.5, transition: "color 0.35s" }}>farah</span>
          </div>

          {/* Search */}
          {!searchOpen ? (
            <button onClick={() => setSearchOpen(true)} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "9px 16px",
              background: scrolled ? "#FFF" : "rgba(255,255,255,0.15)",
              border: scrolled ? "1px solid #DDD" : "1px solid rgba(255,255,255,0.3)",
              borderRadius: 40, cursor: "pointer",
              boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "0 2px 12px rgba(0,0,0,0.15)",
              transition: "all 0.35s", backdropFilter: "blur(8px)", fontFamily: "inherit",
            }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: scrolled ? "#222" : "#FFF" }}>Anywhere in UAE</span>
              <span style={{ color: scrolled ? "#DDD" : "rgba(255,255,255,0.4)" }}>|</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: scrolled ? "#222" : "#FFF" }}>Wedding date</span>
              <span style={{ color: scrolled ? "#DDD" : "rgba(255,255,255,0.4)" }}>|</span>
              <span style={{ fontSize: 13, color: scrolled ? "#888" : "rgba(255,255,255,0.7)" }}>Search vendors</span>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#B8860B,#DAA520)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="13" height="13" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round"><circle cx="5.5" cy="5.5" r="4.5"/><line x1="9" y1="9" x2="12" y2="12"/></svg>
              </div>
            </button>
          ) : (
            <div style={{ flex: 1, maxWidth: 560, margin: "0 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFF", borderRadius: 40, padding: "4px 6px 4px 18px", border: "1px solid #DDD", boxShadow: "0 2px 12px rgba(0,0,0,0.12)" }}>
                <svg width="16" height="16" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"><circle cx="7" cy="7" r="5.5"/><line x1="11" y1="11" x2="15" y2="15"/></svg>
                <input autoFocus value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search venues, caterers, flowers, photographers..."
                  style={{ flex: 1, background: "none", border: "none", outline: "none", fontSize: 14, padding: "10px 0", color: "#222", fontFamily: "inherit" }} />
                {searchQuery && <button onClick={() => setSearchQuery("")} style={{ width: 26, height: 26, borderRadius: "50%", background: "#E0E0E0", border: "none", cursor: "pointer", fontSize: 13, color: "#666", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>}
                <button onClick={() => { if (!searchQuery) setSearchOpen(false); }} style={{ padding: "9px 18px", borderRadius: 28, background: "linear-gradient(135deg,#B8860B,#DAA520)", border: "none", color: "#FFF", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>Search</button>
              </div>
            </div>
          )}

          {/* Profile */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <span style={{ fontSize: 10, color: scrolled ? "#aaa" : "rgba(255,255,255,0.6)", fontWeight: 500, transition: "color 0.35s" }}>
              <span style={{ color: scrolled ? "#B8860B" : "#DAA520", fontWeight: 600 }}>Crustdata</span> · <span style={{ color: scrolled ? "#B8860B" : "#DAA520", fontWeight: 600 }}>Lingo.dev</span>
            </span>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: scrolled ? "#F7F7F7" : "rgba(255,255,255,0.15)", border: scrolled ? "1px solid #DDD" : "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, cursor: "pointer", transition: "all 0.35s" }}>👤</div>
          </div>
        </div>
      </nav>

      {/* ===== HERO VIDEO SECTION ===== */}
      <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        {/* Video */}
        <video autoPlay muted loop playsInline style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          objectFit: "cover", filter: "blur(3px) brightness(0.55)",
          transform: "scale(1.05)",
        }}>
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Overlay gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.7) 100%)" }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2, height: "100%",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 24px",
        }}>
          {/* Arabic calligraphy mark */}
          <div style={{
            width: 72, height: 72, borderRadius: 18, marginBottom: 24,
            background: "linear-gradient(135deg, #B8860B, #DAA520)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 36, fontWeight: 800, color: "#FFF",
            boxShadow: "0 8px 32px rgba(184,134,11,0.4)",
          }}>ف</div>

          {/* Tagline */}
          <h1 style={{
            fontSize: 52, fontWeight: 700, color: "#FFF", lineHeight: 1.15,
            maxWidth: 700, letterSpacing: -1,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}>
            Your perfect wedding,{" "}
            <span style={{ color: "#DAA520" }}>all in one place</span>
          </h1>

          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.8)", marginTop: 14,
            maxWidth: 500, lineHeight: 1.5, fontWeight: 400,
          }}>
            Discover 200+ verified vendors across the UAE — venues, planners, caterers, and everything in between.
          </p>

          {/* CTA */}
          <button onClick={scrollToVendors} style={{
            marginTop: 36, padding: "16px 40px", borderRadius: 40,
            background: "linear-gradient(135deg, #B8860B, #DAA520)",
            border: "none", color: "#FFF", fontSize: 16, fontWeight: 700,
            cursor: "pointer", boxShadow: "0 4px 20px rgba(184,134,11,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
            display: "flex", alignItems: "center", gap: 8,
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(184,134,11,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(184,134,11,0.4)"; }}
          >
            Explore vendors
            <span style={{ fontSize: 20 }}>↓</span>
          </button>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 48, opacity: 0.7 }}>
            {[["200+", "Vendors"], ["6", "Languages"], ["15+", "Categories"]].map(([n, l], i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#DAA520" }}>{n}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", animation: "bounce 2s infinite" }}>
          <div style={{ width: 28, height: 44, borderRadius: 14, border: "2px solid rgba(255,255,255,0.3)", display: "flex", justifyContent: "center", paddingTop: 8 }}>
            <div style={{ width: 4, height: 10, borderRadius: 2, background: "rgba(255,255,255,0.5)", animation: "scrollDot 2s infinite" }} />
          </div>
        </div>
      </section>

      {/* ===== VENDOR SECTION ===== */}
      <div ref={vendorRef}>
        {/* Group tabs bar */}
        <div style={{ position: "sticky", top: 60, zIndex: 40, background: "#FFF", borderBottom: "1px solid #EBEBEB" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 0, maxWidth: 1440, margin: "0 auto" }}>
            <GTab label="All" icon="🔍" active={!activeGroup} onClick={() => { setActiveGroup(null); setActiveSub(null); }} />
            {GROUPS.map(g => (
              <GTab key={g.key} label={g.label} icon={g.icon} active={activeGroup === g.key}
                onClick={() => { setActiveGroup(g.key); setActiveSub(null); }} />
            ))}
          </div>

          {/* Sub chips */}
          {activeGroup && currentGroup && (
            <div style={{ display: "flex", gap: 8, padding: "10px 24px 12px", maxWidth: 1440, margin: "0 auto", overflowX: "auto", scrollbarWidth: "none", borderTop: "1px solid #F5F5F5", animation: "fadeSlide 0.22s ease" }}>
              <Chip label={`All ${currentGroup.label.split(" ")[0]}`} active={!activeSub} onClick={() => setActiveSub(null)} />
              {currentGroup.subs.map(s => (
                <Chip key={s.key} label={s.label} icon={s.icon} active={activeSub === s.key} onClick={() => setActiveSub(s.key)} />
              ))}
            </div>
          )}
        </div>

        {/* Listings */}
        <main style={{ maxWidth: 1440, margin: "0 auto", padding: "28px 28px 80px" }}>
          {searchQuery && (
            <p style={{ fontSize: 14, color: "#888", marginBottom: 16 }}>
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "<strong>{searchQuery}</strong>"
            </p>
          )}

          {sections.length > 0 ? (
            <div>
              {sections.map(({ sub, items }, si) => (
                <div key={sub.key} style={{ marginBottom: si < sections.length - 1 ? 56 : 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 28 }}>{sub.icon}</span>
                      <div>
                        <h2 style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.2 }}>{sub.label}</h2>
                        <span style={{ fontSize: 13, color: "#999" }}>{items.length} vendor{items.length !== 1 ? "s" : ""}</span>
                      </div>
                    </div>
                    <button onClick={() => setActiveSub(sub.key)} style={{
                      padding: "7px 16px", borderRadius: 8, background: "#FFF", border: "1px solid #222",
                      cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "inherit", transition: "all 0.15s",
                    }}
                      onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = "#222"; (e.target as HTMLButtonElement).style.color = "#FFF"; }}
                      onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = "#FFF"; (e.target as HTMLButtonElement).style.color = "#222"; }}
                    >Show all →</button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
                    {items.map(l => <Card key={l.id} listing={l} saved={savedIds.has(l.id)} onSave={() => toggleSave(l.id)} onOpen={() => setSelectedListing(l)} />)}
                  </div>
                  {si < sections.length - 1 && <div style={{ borderBottom: "1px solid #F0F0F0", marginTop: 40 }} />}
                </div>
              ))}
            </div>
          ) : (
            <div>
              {activeSub && SUB_MAP[activeSub] && (
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontSize: 30 }}>{SUB_MAP[activeSub].icon}</span>
                  <div>
                    <h2 style={{ fontSize: 24, fontWeight: 700 }}>{SUB_MAP[activeSub].label}</h2>
                    <p style={{ fontSize: 13, color: "#888" }}>{filtered.length} vendor{filtered.length !== 1 ? "s" : ""}</p>
                  </div>
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
                {filtered.map(l => <Card key={l.id} listing={l} saved={savedIds.has(l.id)} onSave={() => toggleSave(l.id)} onOpen={() => setSelectedListing(l)} />)}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 20px", color: "#999" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              <p style={{ fontSize: 17, fontWeight: 600, color: "#555" }}>No vendors found</p>
              <p style={{ fontSize: 14 }}>Try a different search or category</p>
            </div>
          )}
        </main>
      </div>

      <style>{`
        @keyframes fadeSlide { from { opacity:0; transform:translateY(-5px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bounce { 0%,100% { transform:translateX(-50%) translateY(0); } 50% { transform:translateX(-50%) translateY(8px); } }
        @keyframes scrollDot { 0% { opacity:1; transform:translateY(0); } 100% { opacity:0; transform:translateY(12px); } }
        * { box-sizing: border-box; margin: 0; }
        ::-webkit-scrollbar { display: none; }
        img { display: block; }
      `}</style>
    </div>
  );
}


// ===== GROUP TAB =====
function GTab({ label, icon, active, onClick }: { label: string; icon: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      padding: "13px 22px", border: "none", cursor: "pointer", background: "transparent",
      borderBottom: active ? "3px solid #B8860B" : "3px solid transparent",
      color: active ? "#222" : "#888", fontWeight: active ? 700 : 500,
      fontSize: 14, transition: "all 0.15s", fontFamily: "inherit",
      display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
    }}>{icon && <span style={{ fontSize: 17 }}>{icon}</span>}{label}</button>
  );
}

// ===== CHIP =====
function Chip({ label, icon, active, onClick }: { label: string; icon?: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      padding: "7px 16px", borderRadius: 24, cursor: "pointer", whiteSpace: "nowrap",
      background: active ? "#222" : "#FFF", color: active ? "#FFF" : "#555",
      border: active ? "1px solid #222" : "1px solid #DDD",
      fontSize: 13, fontWeight: active ? 600 : 500, fontFamily: "inherit",
      transition: "all 0.15s", display: "flex", alignItems: "center", gap: 5,
    }}>{icon && <span>{icon}</span>}{label}</button>
  );
}

// ===== CARD =====
function Card({ listing, saved, onSave, onOpen }: { listing: Listing; saved: boolean; onSave: () => void; onOpen: () => void }) {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ cursor: "pointer" }} onClick={onOpen}>
      <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", aspectRatio: "4/3", background: "#F0ECE3" }}>
        <img src={listing.images[idx]} alt="" onLoad={() => setLoaded(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.3s" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent,rgba(0,0,0,0.12))", pointerEvents: "none" }} />
        <button onClick={e => { e.stopPropagation(); onSave(); }} style={{ position: "absolute", top: 10, right: 10, width: 30, height: 30, borderRadius: "50%", background: saved ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.2)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>{saved ? "❤️" : "🤍"}</button>
        {listing.superhost && <div style={{ position: "absolute", top: 10, left: 10, background: "#FFF", borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#222", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>⭐ Top Rated</div>}
        <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(255,255,255,0.92)", borderRadius: 7, padding: "3px 7px", fontSize: 10, fontWeight: 600, color: "#555", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", gap: 3 }}>
          <span style={{ color: listing.trustScore >= 80 ? "#16a34a" : listing.trustScore >= 60 ? "#B8860B" : "#dc2626" }}>●</span>
          Trust {listing.trustScore}%
          <span style={{ color: "#bbb", fontWeight: 400 }}>· Crustdata</span>
        </div>
        <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4 }}>
          {listing.images.map((_, i) => (
            <button key={i} onClick={e => { e.stopPropagation(); setIdx(i); setLoaded(false); }}
              style={{ width: i === idx ? 7 : 5, height: i === idx ? 7 : 5, borderRadius: "50%", background: i === idx ? "#FFF" : "rgba(255,255,255,0.5)", border: "none", cursor: "pointer", padding: 0 }} />
          ))}
        </div>
        {idx > 0 && <button onClick={e => { e.stopPropagation(); setIdx(i => i-1); setLoaded(false); }} style={{ position: "absolute", left: 7, top: "50%", transform: "translateY(-50%)", width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.12)" }}>‹</button>}
        {idx < listing.images.length - 1 && <button onClick={e => { e.stopPropagation(); setIdx(i => i+1); setLoaded(false); }} style={{ position: "absolute", right: 7, top: "50%", transform: "translateY(-50%)", width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.12)" }}>›</button>}
      </div>
      <div style={{ padding: "10px 2px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#222", lineHeight: 1.3 }}>{listing.title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0, marginLeft: 8 }}>
            <span style={{ fontSize: 12 }}>★</span><span style={{ fontSize: 13, fontWeight: 500 }}>{listing.rating}</span>
            <span style={{ fontSize: 11, color: "#888" }}>({listing.reviews})</span>
          </div>
        </div>
        <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{listing.location}</div>
        <div style={{ display: "flex", gap: 4, marginTop: 5, flexWrap: "wrap" }}>
          {listing.tags.slice(0, 2).map((t, i) => <span key={i} style={{ fontSize: 11, color: "#666", background: "#F5F5F5", padding: "2px 7px", borderRadius: 4 }}>{t}</span>)}
        </div>
        <div style={{ marginTop: 7 }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>{listing.price} </span>
          <span style={{ fontSize: 13, color: "#888" }}>{listing.priceUnit}</span>
        </div>
      </div>
    </div>
  );
}


// ===== DETAIL PAGE =====
function DetailPage({ listing, onBack, saved, onToggleSave }: { listing: Listing; onBack: () => void; saved: boolean; onToggleSave: () => void }) {
  const [showContact, setShowContact] = useState(false);
  const sub = SUB_MAP[listing.sub] || { icon: "🏛️", label: "Vendor" };

  return (
    <div style={{ minHeight: "100vh", background: "#FFF", fontFamily: "'DM Sans','Noto Kufi Arabic',-apple-system,sans-serif", color: "#222" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#FFF", borderBottom: "1px solid #F0F0F0", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "#222", fontFamily: "inherit" }}>← Back</button>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onToggleSave} style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "1px solid #DDD", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "inherit" }}>{saved ? "❤️ Saved" : "🤍 Save"}</button>
          <button style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "1px solid #DDD", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "inherit" }}>↗ Share</button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: "20px 0 4px" }}>{listing.title}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#555", marginBottom: 16, flexWrap: "wrap" }}>
          <span>★ {listing.rating} · {listing.reviews} reviews</span><span>·</span>
          {listing.superhost && <><span style={{ fontWeight: 600 }}>⭐ Top Rated</span><span>·</span></>}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>{listing.location}</span><span>·</span>
          <span style={{ color: "#B8860B" }}>{sub.icon} {sub.label}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 8, borderRadius: 16, overflow: "hidden", height: 400 }}>
          <div style={{ gridRow: "1/3" }}><img src={listing.images[0]} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div><img src={listing.images[1]} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div><img src={listing.images[2]} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 370px", gap: 48, marginTop: 32, paddingBottom: 60 }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 24, borderBottom: "1px solid #EBEBEB" }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 600 }}>{listing.titleAr}</h2>
                <p style={{ fontSize: 14, color: "#888", marginTop: 4 }}>{listing.headcount} team members · {listing.languages.map(l => LANG_FLAGS[l] || l).join(" ")} languages</p>
              </div>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#F0ECE3,#E8E0D0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, border: "2px solid #B8860B" }}>{sub.icon}</div>
            </div>
            <div style={{ padding: "24px 0", borderBottom: "1px solid #EBEBEB" }}>
              {[
                { i: "🛡️", t: "Crustdata Verified", d: `Trust Score: ${listing.trustScore}% — verified via Crustdata API` },
                { i: "🌐", t: "Multilingual Support", d: `Speaks ${listing.languages.map(l => LANG_FLAGS[l] || l).join(" ")} — auto-translated by Lingo.dev` },
                { i: "📅", t: "Instant Booking", d: "Book directly through Farah — powered by Trace workflow" },
              ].map((x, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: i < 2 ? 18 : 0 }}>
                  <span style={{ fontSize: 22 }}>{x.i}</span>
                  <div><div style={{ fontSize: 15, fontWeight: 600 }}>{x.t}</div><div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{x.d}</div></div>
                </div>
              ))}
            </div>
            <div style={{ padding: "24px 0", borderBottom: "1px solid #EBEBEB" }}>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#444" }}>
                {listing.tags.join(" · ")}. Located in {listing.location}, serving the UAE wedding market with premium quality and cultural sensitivity. All communication is auto-translated via Lingo.dev.
              </p>
            </div>
            <div style={{ padding: "24px 0" }}>
              <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 14 }}>What's included</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[...listing.tags, "Free consultation via Lyra", "Auto-translated contracts"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, color: "#444" }}><span style={{ color: "#B8860B" }}>✓</span> {t}</div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div style={{ position: "sticky", top: 80, border: "1px solid #DDD", borderRadius: 16, padding: 24, boxShadow: "0 6px 16px rgba(0,0,0,0.08)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 18 }}>
                <span style={{ fontSize: 24, fontWeight: 700 }}>{listing.price}</span>
                <span style={{ fontSize: 14, color: "#888" }}>{listing.priceUnit}</span>
              </div>
              <div style={{ border: "1px solid #DDD", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{ padding: "10px 12px", borderRight: "1px solid #DDD", borderBottom: "1px solid #DDD" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const }}>Wedding Date</div>
                    <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Apr 5, 2026</div>
                  </div>
                  <div style={{ padding: "10px 12px", borderBottom: "1px solid #DDD" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const }}>Guests</div>
                    <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>300</div>
                  </div>
                </div>
                <div style={{ padding: "10px 12px" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const }}>Language</div>
                  <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>🇦🇪 Arabic — vendor speaks 🇮🇳 Hindi</div>
                </div>
              </div>
              <button onClick={() => setShowContact(true)} style={{ width: "100%", padding: 14, background: "linear-gradient(135deg,#B8860B,#DAA520)", border: "none", borderRadius: 10, color: "#FFF", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>{showContact ? "✓ Request Sent!" : "Contact Vendor"}</button>
              <button style={{ width: "100%", padding: 14, marginTop: 10, background: "#FFF", border: "1px solid #222", borderRadius: 10, color: "#222", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>📞 Book Consultation via Lyra</button>
              <p style={{ textAlign: "center", fontSize: 12, color: "#888", marginTop: 12 }}>Messages auto-translated by Lingo.dev</p>
              {showContact && (
                <div style={{ marginTop: 14, padding: 12, background: "#F0FFF0", borderRadius: 10, border: "1px solid #C6F0C6", fontSize: 13, color: "#2D7A2D", animation: "fadeSlide 0.3s ease" }}>
                  ✅ Inquiry translated and sent to {listing.titleAr}. Reply within 24h.
                  <div style={{ marginTop: 5, fontSize: 11, color: "#888" }}>Workflow by Trace · Voice via Uplift AI</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
        * { box-sizing: border-box; margin: 0; }
      `}</style>
    </div>
  );
}
