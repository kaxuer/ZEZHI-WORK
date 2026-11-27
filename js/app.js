/* Aether Jewels - Main Application Script */

// ==================== i18n ====================
const translations = {
  en: {
    // Nav
    nav_home: "Home",
    nav_collection: "Collection",
    nav_about: "About",
    nav_contact: "Contact",
    // Hero
    hero_subtitle: "Exceptional Collectibles",
    hero_title: "Timeless Luxury,<br>Eternal Beauty",
    hero_desc: "Discover rare jewelry pieces of exceptional craftsmanship. Each item is carefully curated for the discerning collector.",
    hero_cta: "Explore Collection",
    // Featured
    featured_label: "Curated Selection",
    featured_title: "Featured Pieces",
    featured_desc: "A selection of our most exceptional collectibles, chosen for their rarity and beauty.",
    // About
    about_label: "Our Story",
    about_title: "A Legacy Gathered Along the Way",
    about_p1: "Our family's collecting story began with the journeys of earlier generations. My forebears traveled between nearby towns and counties, making their living through trade. Their travels brought them into contact with the character of different places; when an object spoke to them, they chose to keep it. In time, those early keepsakes became the first traces of our family's collecting story.",
    about_p2: "My father carried this life on the road into a new generation, traveling between provinces for business. Along the way, he too took an interest in the objects he encountered, gradually adding pieces of his own to the collection. Each one recalls something of his journeys, observations, and years spent far from home.",
    about_p3: "In the mid-to-late 1990s, I set out on my own collecting journey. What began with the experiences of those before me became a personal pursuit that continues to this day. The journeys of my forebears, my father's encounters, and my own searching now meet in a family collection shaped over time. I hope to honor that inheritance by continuing to seek, cherish, and share these objects—and the memories they carry.",
    about_commitment_title: "The Family Story Behind the Collection",
    about_value_legacy: "Journeys Through Generations",
    about_value_legacy_desc: "From nearby county towns to provinces farther afield, journeys for trade brought our family into contact with objects worth keeping.",
    about_value_journey: "Treasured Across Generations",
    about_value_journey_desc: "From my forebears and father to me, the collection holds not only objects, but memories of the lives and journeys behind them.",
    about_value_sharing: "Kept with Care, Shared with Meaning",
    about_value_sharing_desc: "We value each object's place in our family's story and are glad to share the memories it carries.",
    about_cta: "Learn More",
    // Collection
    collection_label: "The Collection",
    collection_title: "All Pieces",
    filter_all: "All",
    filter_rings: "Rings",
    filter_necklaces: "Necklaces",
    filter_earrings: "Earrings",
    filter_bracelets: "Bracelets",
    filter_other: "Other",
    // Product
    add_to_inquiry: "Inquire About This Piece",
    view_details: "View Details",
    price_on_request: "Price upon request",
    material: "Material",
    origin: "Origin",
    year: "Period",
    condition: "Condition",
    // Contact
    contact_label: "Get in Touch",
    contact_title: "Inquire or Visit",
    contact_desc: "Interested in a particular piece? We welcome private appointments and worldwide shipping inquiries.",
    form_name: "Full Name",
    form_email: "Email Address",
    form_message: "Your Message",
    form_submit: "Send Inquiry",
    contact_email_label: "Email",
    contact_location_label: "Location",
    contact_hours_label: "By Appointment",
    contact_pay_label: "Payment",
    contact_pay_text: "USDT accepted<br>Details provided after inquiry",
    pay_note: "<strong>USDT accepted.</strong> After your inquiry we will confirm the order and send the wallet address and network details privately by email.",
    // Footer
    footer_tagline: "Curating exceptional jewelry collectibles for connoisseurs worldwide.",
    footer_explore: "Explore",
    footer_info: "Information",
    footer_legal: "Legal",
    footer_appointments: "Private Appointments",
    footer_shipping: "Worldwide Shipping",
    footer_authentication: "Authentication",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_languages: "EN / 中文",
    footer_rights: `© ${new Date().getFullYear()} Aether Jewels. All rights reserved.`,
    // Cart
    cart_title: "Inquiry List",
    cart_empty: "Your inquiry list is empty.",
    cart_total: "Items",
    cart_checkout: "Request Private Viewing",
    // Admin
    admin_login: "Admin Access",
    admin_pass: "Password",
    admin_enter: "Enter",
    admin_title: "Manage Collection",
    admin_add: "Add New Piece",
    admin_name_en: "Name (English)",
    admin_name_zh: "Name (Chinese)",
    admin_cat: "Category",
    admin_price: "Price (USD)",
    admin_desc_en: "Description (English)",
    admin_desc_zh: "Description (Chinese)",
    admin_material: "Material",
    admin_origin: "Origin",
    admin_year: "Period / Year",
    admin_condition: "Condition",
    admin_image: "Product Image",
    admin_save: "Save Piece",
    admin_logout: "Logout",
    admin_list: "Current Collection",
    admin_delete: "Remove",
    // Misc
    sold: "Sold",
    available: "Available",
    loading: "Loading...",
    no_products: "No pieces in this category yet."
  },
  zh: {
    nav_home: "首页",
    nav_collection: "收藏",
    nav_about: "关于",
    nav_contact: "联系",
    hero_subtitle: "非凡收藏",
    hero_title: "永恒奢华<br>至美传承",
    hero_desc: "探索精湛工艺的稀世珠宝。每一件作品皆精心甄选，只为懂鉴赏的收藏家。",
    hero_cta: "浏览收藏",
    featured_label: "精选之作",
    featured_title: "典藏精品",
    featured_desc: "我们精选的稀世珍品，以其罕见与美丽而脱颖而出。",
    about_label: "我们的故事",
    about_title: "行旅之间，收藏成家",
    about_p1: "家族的收藏故事，始于祖辈走南闯北的岁月。我的祖辈常年穿梭于周边省城之间，以买卖为生。一路奔波，让他们见识各地风物；遇见心有所爱、值得珍藏的物件，便将其留存。那些最初的收藏，随着时光沉淀，成为家族记忆的开端。",
    about_p2: "父亲延续了这份行走四方的生活，常年往来于不同省份做买卖。旅途中，他也将目光投向各地物件，陆续将一些心仪之物收入收藏。每一件藏品，都连着一段行程、一份见闻，也留存着父亲在外奔波的岁月。",
    about_p3: "上世纪90年代中后期，我也踏上收藏之路。从那时起，收藏从长辈的经历，逐渐成为我亲身投入、持续至今的热爱。祖辈的行旅、父亲的见闻与我的寻访，在一件件物品间交汇，汇成跨越岁月的家族珍藏。如今，我愿以敬意承接这份情缘，继续寻访、珍爱并分享，让藏品背后的家族记忆得以被看见、被讲述。",
    about_commitment_title: "藏品背后的家族记忆",
    about_value_legacy: "行旅相续",
    about_value_legacy_desc: "从周边县城到不同省份，行商的足迹让家族与各地相遇，也带回一件件值得珍藏的物品。",
    about_value_journey: "代代留存",
    about_value_journey_desc: "从祖辈、父亲到我，收藏承载的不只是物件本身，也有家人一路走来的经历与记忆。",
    about_value_sharing: "珍而分享",
    about_value_sharing_desc: "我们珍视每件藏品的来处与意义，也愿意将其中承载的家族故事分享给更多人。",
    about_cta: "了解更多",
    collection_label: "全部收藏",
    collection_title: "所有作品",
    filter_all: "全部",
    filter_rings: "戒指",
    filter_necklaces: "项链",
    filter_earrings: "耳饰",
    filter_bracelets: "手镯",
    filter_other: "其他",
    add_to_inquiry: "咨询此作品",
    view_details: "查看详情",
    price_on_request: "价格面议",
    material: "材质",
    origin: "产地",
    year: "年代",
    condition: "成色",
    contact_label: "联系我们",
    contact_title: "预约与咨询",
    contact_desc: "对某件作品感兴趣？我们欢迎私人预约与全球配送咨询。",
    form_name: "姓名",
    form_email: "电子邮箱",
    form_message: "留言内容",
    form_submit: "发送咨询",
    contact_email_label: "邮箱",
    contact_location_label: "位置",
    contact_hours_label: "需预约",
    contact_pay_label: "付款方式",
    contact_pay_text: "支持 USDT 付款<br>咨询后提供收款详情",
    pay_note: "<strong>支持 USDT 付款。</strong>您咨询后，我们会确认订单，并通过邮件私下发送收款地址与网络信息。",
    footer_tagline: "为全球鉴赏家甄选非凡珠宝收藏品。",
    footer_explore: "探索",
    footer_info: "信息",
    footer_legal: "法律",
    footer_appointments: "私人预约",
    footer_shipping: "全球配送",
    footer_authentication: "藏品鉴定",
    footer_privacy: "隐私政策",
    footer_terms: "服务条款",
    footer_languages: "英文 / 中文",
    footer_rights: `© ${new Date().getFullYear()} Aether Jewels. 版权所有。`,
    cart_title: "咨询清单",
    cart_empty: "咨询清单为空。",
    cart_total: "件数",
    cart_checkout: "申请私人鉴赏",
    admin_login: "管理后台",
    admin_pass: "密码",
    admin_enter: "进入",
    admin_title: "管理收藏",
    admin_add: "添加新作品",
    admin_name_en: "名称（英文）",
    admin_name_zh: "名称（中文）",
    admin_cat: "分类",
    admin_price: "价格（美元）",
    admin_desc_en: "描述（英文）",
    admin_desc_zh: "描述（中文）",
    admin_material: "材质",
    admin_origin: "产地",
    admin_year: "年代",
    admin_condition: "成色",
    admin_image: "产品图片",
    admin_save: "保存作品",
    admin_logout: "退出",
    admin_list: "当前收藏",
    admin_delete: "删除",
    sold: "已售",
    available: "在售",
    loading: "加载中...",
    no_products: "该分类暂无作品。"
  }
};

let currentLang = localStorage.getItem('aether_lang') || 'en';

function t(key) {
  return translations[currentLang][key] || key;
}

function formatPrice(price) {
  if (typeof price === 'number' && Number.isFinite(price)) {
    return `$${price.toLocaleString()}`;
  }
  if (typeof price === 'string' && price.trim()) {
    const value = price.trim();
    if (/^(negotiated price|price upon request)$/i.test(value)) {
      return t('price_on_request');
    }
    return value;
  }
  return t('price_on_request');
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('aether_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  updateAllTexts();
  renderProducts();
  if (typeof renderProductDetail === 'function') renderProductDetail();
  if (typeof renderAdminList === 'function') renderAdminList();
  updateCartUI();
}

function updateAllTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
  // Update lang buttons
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// ==================== Products Data ====================
const defaultProducts = [
  {
    id: 'p1',
    name_en: 'Celestial Diamond Ring',
    name_zh: '星辰钻石戒指',
    category: 'rings',
    price: 28500,
    desc_en: 'An exceptional 3.2ct oval diamond set in platinum, surrounded by a halo of brilliant-cut diamonds. Provenance from a private European collection.',
    desc_zh: '一枚非凡的3.2克拉椭圆形钻石铂金戒指，周围环绕明亮式切割钻石光环。来自欧洲私人收藏。',
    material: 'Platinum, Diamond',
    origin: 'Switzerland',
    year: '1960s',
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    featured: true
  },
  {
    id: 'p2',
    name_en: 'Emerald Cascade Necklace',
    name_zh: '翡翠瀑布项链',
    category: 'necklaces',
    price: 42000,
    desc_en: 'A breathtaking Art Deco necklace featuring Colombian emeralds totaling 18ct, set with old European-cut diamonds in 18k yellow gold.',
    desc_zh: '令人叹为观止的装饰艺术风格项链，哥伦比亚祖母绿总重18克拉，配以古欧式切割钻石，18K黄金镶嵌。',
    material: '18k Gold, Emerald, Diamond',
    origin: 'France',
    year: '1925',
    condition: 'Very Good',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    featured: true
  },
  {
    id: 'p3',
    name_en: 'Pearl & Sapphire Earrings',
    name_zh: '珍珠蓝宝石耳坠',
    category: 'earrings',
    price: 8600,
    desc_en: 'Elegant drop earrings with South Sea pearls and Burmese sapphires, suspended from diamond-set hooks. Perfect evening elegance.',
    desc_zh: '优雅的吊坠耳饰，搭配南洋珍珠与缅甸蓝宝石，钻石镶嵌挂钩。完美的晚间优雅之选。',
    material: '18k White Gold, Pearl, Sapphire',
    origin: 'Italy',
    year: '1980s',
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    featured: true
  },
  {
    id: 'p4',
    name_en: 'Vintage Gold Cuff',
    name_zh: '复古黄金手镯',
    category: 'bracelets',
    price: 12500,
    desc_en: 'A bold mid-century solid gold cuff bracelet with subtle geometric engraving. Weight 68g. A statement of quiet power.',
    desc_zh: '大胆的中世纪实心黄金手镯，带有微妙的几何雕刻。重量68克。静谧力量的象征。',
    material: '18k Yellow Gold',
    origin: 'United States',
    year: '1950s',
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    featured: false
  },
  {
    id: 'p5',
    name_en: 'Ruby Cluster Ring',
    name_zh: '红宝石群镶戒指',
    category: 'rings',
    price: 19800,
    desc_en: 'A vivid Burmese ruby of 2.1ct surrounded by a cluster of natural diamonds. Classic romantic design from the 1940s.',
    desc_zh: '一颗鲜艳的2.1克拉缅甸红宝石，周围环绕天然钻石群。1940年代的经典浪漫设计。',
    material: 'Platinum, Ruby, Diamond',
    origin: 'United Kingdom',
    year: '1940s',
    condition: 'Very Good',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    featured: false
  },
  {
    id: 'p6',
    name_en: 'Jadeite Dragon Brooch',
    name_zh: '翡翠龙形胸针',
    category: 'other',
    price: 65000,
    desc_en: 'An imperial jadeite dragon brooch of exceptional translucency, accented with diamonds and gold. A museum-quality Chinese masterpiece.',
    desc_zh: '一件通透度极高的帝王绿翡翠龙形胸针，点缀钻石与黄金。博物馆级中式杰作。',
    material: 'Jadeite, 18k Gold, Diamond',
    origin: 'China / Hong Kong',
    year: 'Early 20th Century',
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    featured: true
  }
];

let siteProducts = null; // loaded from data/products.json
function getProducts() {
  if (siteProducts && siteProducts.length) return siteProducts;
  const stored = localStorage.getItem('aether_products');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return defaultProducts;
    }
  }
  // Initialize with defaults
  localStorage.setItem('aether_products', JSON.stringify(defaultProducts));
  return defaultProducts;
}

function saveProducts(products) {
  localStorage.setItem('aether_products', JSON.stringify(products));
}

// ==================== Cart / Inquiry List ====================
function getCart() {
  return JSON.parse(localStorage.getItem('aether_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('aether_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const cart = getCart();
  if (!cart.includes(productId)) {
    cart.push(productId);
    saveCart(cart);
  }
  openCart();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(id => id !== productId);
  saveCart(cart);
  renderCartItems();
}

function updateCartUI() {
  const cart = getCart();
  const countEl = document.querySelector('.cart-count');
  if (countEl) {
    countEl.textContent = cart.length;
    countEl.style.display = cart.length > 0 ? 'flex' : 'none';
  }
}

function openCart() {
  document.querySelector('.cart-sidebar')?.classList.add('open');
  document.querySelector('.cart-overlay')?.classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.querySelector('.cart-sidebar')?.classList.remove('open');
  document.querySelector('.cart-overlay')?.classList.remove('open');
}

function renderCartItems() {
  const container = document.querySelector('.cart-items');
  if (!container) return;
  const cart = getCart();
  const products = getProducts();
  
  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-state"><p>${t('cart_empty')}</p></div>`;
    return;
  }
  
  container.innerHTML = cart.map(id => {
    const p = products.find(x => x.id === id);
    if (!p) return '';
    const name = currentLang === 'zh' ? p.name_zh : p.name_en;
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${name}">
        <div class="cart-item-info">
          <h4>${name}</h4>
          <div class="price">${formatPrice(p.price)}</div>
        </div>
        <button class="btn btn-danger" style="padding:6px 12px;font-size:10px;" onclick="removeFromCart('${p.id}')">×</button>
      </div>
    `;
  }).join('');
  
  const totalEl = document.querySelector('.cart-total span:last-child');
  if (totalEl) totalEl.textContent = cart.length;
}

// ==================== Render Products ====================
function renderProducts(filter = 'all') {
  const grid = document.querySelector('.product-grid');
  if (!grid) return;
  
  let products = getProducts();
  if (filter !== 'all') {
    products = products.filter(p => p.category === filter);
  }
  
  // For homepage featured only
  if (grid.dataset.featured === 'true') {
    products = products.filter(p => p.featured);
  }
  
  if (products.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><h3>${t('no_products')}</h3></div>`;
    return;
  }
  
  grid.innerHTML = products.map(p => {
    const name = currentLang === 'zh' ? p.name_zh : p.name_en;
    return `
      <div class="product-card" onclick="location.href='product.html?id=${p.id}'">
        <div class="product-image">
          ${cardMedia(p, name)}
          ${p.featured ? `<span class="product-badge">${currentLang === 'zh' ? '精选' : 'Featured'}</span>` : ''}
          ${(p.videos && p.videos.length) ? '<span class="play-badge">▶</span>' : ''}
        </div>
        <div class="product-info">
          <div class="product-category">${t('filter_' + p.category) || p.category}</div>
          <h3 class="product-name">${name}</h3>
          <div class="product-price">${formatPrice(p.price)}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ==================== Product Detail ====================
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;
  
  const products = getProducts();
  const p = products.find(x => x.id === id);
  if (!p) {
    document.querySelector('.product-detail')?.insertAdjacentHTML('beforeend', 
      `<div class="container"><div class="empty-state"><h3>Product not found</h3></div></div>`);
    return;
  }
  
  const name = currentLang === 'zh' ? p.name_zh : p.name_en;
  const desc = currentLang === 'zh' ? p.desc_zh : p.desc_en;
  
  const container = document.querySelector('.product-detail-content');
  if (!container) return;

  // Media: photos + videos (videos may be "file.mp4" or {src, poster})
  const images = ((p.images && p.images.length) ? p.images : [p.image]).filter(Boolean);
  const videos = (p.videos || []).map(v => typeof v === 'string' ? { src: v } : v);
  window.__media = { images, videos, name };
  const thumbsHTML = (images.length + videos.length > 1) ? `<div class="thumbnails">
    ${images.map((src, i) => `<div class="thumb ${i === 0 && images.length ? 'active' : ''}" onclick="showMedia('image',${i},this)"><img src="${src}" alt="" loading="lazy"></div>`).join('')}
    ${videos.map((v, i) => `<div class="thumb thumb-video" onclick="showMedia('video',${i},this)">${(v.poster || images[0]) ? `<img src="${v.poster || images[0]}" alt="">` : `<video src="${v.src}#t=0.1" muted playsinline preload="metadata"></video>`}<span>▶</span></div>`).join('')}
  </div>` : '';

  const mainHTML = images.length
    ? `<img src="${images[0]}" alt="${name}" id="mainProductImg">`
    : (videos.length ? `<video class="product-video" controls playsinline preload="metadata" ${videos[0].poster ? `poster="${videos[0].poster}"` : ''} src="${videos[0].src}#t=0.1"></video>` : '');

  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-gallery">
        <div class="main-image" id="mainMedia">${mainHTML}</div>
        ${thumbsHTML}
      </div>
      <div class="product-detail-info">
        <div class="product-category">${t('filter_' + p.category) || p.category}</div>
        <h1 class="product-name">${name}</h1>
        <div class="product-price">${formatPrice(p.price)}</div>
        <div class="product-meta">
          <div class="meta-row"><span>${t('material')}</span><span>${p.material}</span></div>
          <div class="meta-row"><span>${t('origin')}</span><span>${p.origin}</span></div>
          <div class="meta-row"><span>${t('year')}</span><span>${p.year}</span></div>
          <div class="meta-row"><span>${t('condition')}</span><span>${p.condition}</span></div>
        </div>
        <p class="product-desc">${desc}</p>
        <div class="product-actions">
          <button class="btn btn-filled" onclick="addToCart('${p.id}')">${t('add_to_inquiry')}</button>
          <a href="contact.html" class="btn">${t('nav_contact')}</a>
        </div>
        <p class="pay-note" data-i18n="pay_note">${t('pay_note')}</p>
      </div>
    </div>
  `;
}

const vsrc = v => (typeof v === 'string' ? v : v.src);
function cardMedia(p, name) {
  if (p.image) return `<img src="${p.image}" alt="${name}" loading="lazy">`;
  if (p.videos && p.videos.length) return `<video src="${vsrc(p.videos[0])}#t=0.1" muted playsinline preload="metadata"></video>`;
  return '';
}

function showMedia(type, i, el) {
  const m = window.__media; if (!m) return;
  const box = document.getElementById('mainMedia');
  if (type === 'video') {
    const v = m.videos[i];
    box.innerHTML = `<video class="product-video" controls playsinline autoplay preload="metadata" ${v.poster ? `poster="${v.poster}"` : ''} src="${v.src}"></video>`;
  } else {
    box.innerHTML = `<img src="${m.images[i]}" alt="${m.name}" id="mainProductImg">`;
  }
  document.querySelectorAll('.thumbnails .thumb').forEach(t => t.classList.remove('active'));
  el?.classList.add('active');
}

// ==================== Admin ====================
const ADMIN_PASSWORD = 'KAXUER99589k.'; // Change this!

function checkAdminAuth() {
  return sessionStorage.getItem('aether_admin') === 'true';
}

function adminLogin(password) {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem('aether_admin', 'true');
    return true;
  }
  return false;
}

function adminLogout() {
  sessionStorage.removeItem('aether_admin');
  location.href = 'admin.html';
}

function renderAdminList() {
  const list = document.querySelector('.admin-products');
  if (!list) return;
  const products = getProducts();
  
  list.innerHTML = products.map(p => {
    const name = currentLang === 'zh' ? p.name_zh : p.name_en;
    return `
      <div class="admin-product-item">
        <img src="${p.image}" alt="${name}">
        <div class="info">
          <h4>${name}</h4>
          <span>${formatPrice(p.price)} · ${p.category} · ${p.origin}</span>
        </div>
        <button class="btn btn-danger" style="padding:8px 16px;font-size:11px;" onclick="deleteProduct('${p.id}')">${t('admin_delete')}</button>
      </div>
    `;
  }).join('');
}

function deleteProduct(id) {
  if (!confirm('Delete this piece?')) return;
  let products = getProducts();
  products = products.filter(p => p.id !== id);
  saveProducts(products);
  renderAdminList();
}

function handleImageUpload(input, previewId) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const preview = document.getElementById(previewId);
    if (preview) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
      preview.dataset.src = e.target.result;
    }
  };
  reader.readAsDataURL(file);
}

function saveNewProduct(formData) {
  const products = getProducts();
  const newProduct = {
    id: 'p' + Date.now(),
    name_en: formData.name_en,
    name_zh: formData.name_zh,
    category: formData.category,
    price: parseFloat(formData.price) || 0,
    desc_en: formData.desc_en,
    desc_zh: formData.desc_zh,
    material: formData.material,
    origin: formData.origin,
    year: formData.year,
    condition: formData.condition,
    image: formData.image || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    featured: formData.featured || false
  };
  products.unshift(newProduct);
  saveProducts(products);
  return newProduct;
}

// ==================== Init ====================
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const r = await fetch('data/products.json', { cache: 'no-cache' });
    if (r.ok) siteProducts = await r.json();
  } catch (e) { /* fall back to built-in data */ }
  // Language
  updateAllTexts();
  
  // Language switchers
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  
  // Header scroll
  window.addEventListener('scroll', () => {
    document.querySelector('.header')?.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Mobile menu
  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('mobile-open');
  });
  
  // Cart
  document.querySelector('.cart-icon')?.addEventListener('click', openCart);
  document.querySelector('.cart-close')?.addEventListener('click', closeCart);
  document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
  updateCartUI();
  
  // Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });
  
  // Render products if on relevant page
  renderProducts();
  
  // Product detail
  if (document.querySelector('.product-detail-content')) {
    renderProductDetail();
  }
});