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
    about_title: "A Passion for the Extraordinary",
    about_p1: "Aether Jewels is a private atelier dedicated to the finest jewelry collectibles. We source rare pieces from across the world, each with its own history and exceptional craftsmanship.",
    about_p2: "Our collection focuses on high jewelry, vintage masterpieces, and unique contemporary works that transcend trends. Every piece is authenticated and presented with complete provenance.",
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
    // Footer
    footer_tagline: "Curating exceptional jewelry collectibles for connoisseurs worldwide.",
    footer_explore: "Explore",
    footer_info: "Information",
    footer_legal: "Legal",
    footer_rights: "© 2025 Aether Jewels. All rights reserved.",
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
    about_title: "对非凡之美的热爱",
    about_p1: "Aether Jewels 是一家专注于顶级珠宝收藏的私人工坊。我们从世界各地搜罗稀有珍品，每一件都拥有独特历史与非凡工艺。",
    about_p2: "我们的收藏聚焦高级珠宝、古董杰作与超越潮流的当代作品。每件作品均经过严格鉴定，并附完整来源证明。",
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
    footer_tagline: "为全球鉴赏家甄选非凡珠宝收藏品。",
    footer_explore: "探索",
    footer_info: "信息",
    footer_legal: "法律",
    footer_rights: "© 2025 Aether Jewels. 版权所有。",
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

function getProducts() {
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
          <div class="price">$${p.price.toLocaleString()}</div>
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
          <img src="${p.image}" alt="${name}" loading="lazy">
          ${p.featured ? `<span class="product-badge">${currentLang === 'zh' ? '精选' : 'Featured'}</span>` : ''}
        </div>
        <div class="product-info">
          <div class="product-category">${t('filter_' + p.category) || p.category}</div>
          <h3 class="product-name">${name}</h3>
          <div class="product-price">$${p.price.toLocaleString()}</div>
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
  
  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-gallery">
        <div class="main-image">
          <img src="${p.image}" alt="${name}" id="mainProductImg">
        </div>
      </div>
      <div class="product-detail-info">
        <div class="product-category">${t('filter_' + p.category) || p.category}</div>
        <h1 class="product-name">${name}</h1>
        <div class="product-price">$${p.price.toLocaleString()}</div>
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
      </div>
    </div>
  `;
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
          <span>$${p.price.toLocaleString()} · ${p.category} · ${p.origin}</span>
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
document.addEventListener('DOMContentLoaded', () => {
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