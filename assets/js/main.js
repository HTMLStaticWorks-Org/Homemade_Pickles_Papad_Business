/**
 * RIVAYA — ROOTED IN TRADITION. MADE WITH LOVE.
 * Core JavaScript Application (ES6 Vanilla)
 * Manages Theme, RTL, Cart, Product Catalog, Modals, Forms & Interactions
 */

// -----------------------------------------------------------------------------
// 01. PRODUCT DATABASE (20 Realistic Handcrafted Products)
// -----------------------------------------------------------------------------
const RIVAYA_PRODUCTS = [
  {
    id: "traditional-mango-pickle",
    name: "Traditional Mango Pickle",
    category: "Mango Pickles",
    filterCat: "mango-pickles",
    price: 240,
    pricePerWeight: { "300g": 240, "500g": 380, "1kg": 720 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Spicy & Tangy",
    tasteProfile: "Sharp, Sun-Cured, Aromatic",
    image: "assets/images/mango-pickle.webp",
    description: "Farm-fresh raw green mango chunks steeped in cold-pressed gingelly oil, stone-ground mustard, roasted fenugreek, and sun-dried Guntur chillies.",
    ingredients: "Raw Mango, Cold-Pressed Sesame Oil, Mustard, Fenugreek, Red Chilli Powder, Rock Salt, Turmeric, Asafoetida.",
    storage: "Store in a cool dry place. Always use a clean dry wooden spoon. Keep oil layer intact."
  },
  {
    id: "andhra-avakaya",
    name: "Authentic Andhra Avakaya",
    category: "Mango Pickles",
    filterCat: "mango-pickles",
    price: 260,
    pricePerWeight: { "300g": 260, "500g": 410, "1kg": 780 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Fiery Traditional",
    tasteProfile: "Intense, Robust Mustard Pungency",
    image: "assets/images/andhra-avakaya.webp",
    description: "The crown jewel of South Indian pickles. Firm raw mango chunks with their hard shell rind, marinated in fiery ground red chillies and raw mustard meal.",
    ingredients: "Hard Green Mango, Mustard Powder, Guntur Red Chilli, Cold-Pressed Gingelly Oil, Sea Salt, Garlic, Fenugreek.",
    storage: "Store in a ceramic martaban or airtight glass jar away from direct moisture."
  },
  {
    id: "lemon-pickle",
    name: "Sun-Cured Lemon Pickle",
    category: "Lemon Pickles",
    filterCat: "lemon-pickles",
    price: 210,
    pricePerWeight: { "300g": 210, "500g": 340, "1kg": 640 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Tangy & Zesty",
    tasteProfile: "Citrusy, Sharp, Digesting",
    image: "assets/images/lemon-pickle.webp",
    description: "Tender kagzi lemons solar-matured in rock salt until the peel softens, then tempered with roasted fenugreek and Kashmiri chilli oil.",
    ingredients: "Ripe Juicy Lemons, Rock Salt, Cold-Pressed Sesame Oil, Fenugreek, Kashmiri Chilli, Turmeric, Hing.",
    storage: "Ages naturally over time. Keep away from water droplets."
  },
  {
    id: "citrus-chilli-pickle",
    name: "Lemon & Green Chilli Pickle",
    category: "Lemon Pickles",
    filterCat: "lemon-pickles",
    price: 220,
    pricePerWeight: { "300g": 220, "500g": 350, "1kg": 660 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Medium Spicy",
    tasteProfile: "Crisp Heat, Citrus Burst",
    image: "assets/images/citrus-chilli-pickle.webp",
    description: "A country-kitchen staple combining quartered lemons and hand-slit green chillies, bathed in aromatic mustard seeds and sun-warmed oil.",
    ingredients: "Quartered Lemons, Fresh Green Chillies, Crushed Mustard, Turmeric, Salt, Pure Gingelly Oil.",
    storage: "Keep in a dark pantry cupboard. Do not refrigerate."
  },
  {
    id: "garlic-pickle",
    name: "Slow-Braised Garlic Pickle",
    category: "Garlic & Special Pickles",
    filterCat: "garlic-special-pickles",
    price: 280,
    pricePerWeight: { "300g": 280, "500g": 440, "1kg": 840 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Aromatic & Rich",
    tasteProfile: "Nutty, Pungent, Deep Savoury",
    image: "assets/images/garlic-pickle.webp",
    description: "Whole peeled native garlic pearls gently simmered in gingelly oil, tossed with tamarind extract, roasted cumin, and pungent red chilli gravy.",
    ingredients: "Peeled Garlic Cloves, Sesame Oil, Tamarind Pulp, Red Chilli Powder, Cumin, Mustard, Sea Salt, Hing.",
    storage: "Shelf-stable when kept immersed in seasoned oil."
  },
  {
    id: "mixed-pickle",
    name: "Farm Harvest Mixed Pickle",
    category: "Vegetable Pickles",
    filterCat: "vegetable-pickles",
    price: 230,
    pricePerWeight: { "300g": 230, "500g": 360, "1kg": 680 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Balanced & Tangy",
    tasteProfile: "Crisp Vegetable Crunch, Tangy Finish",
    image: "assets/images/mixed-pickle.webp",
    description: "A colorful harmony of hand-diced farm carrots, cauliflower florets, raw green mango, and fresh ginger steeped in spicy mustard oil.",
    ingredients: "Carrots, Cauliflower, Raw Mango, Green Chilli, Ginger, Mustard Oil, Mustard Powder, Salt, Spices.",
    storage: "Maintain top oil layer. Seal lid tightly after each serving."
  },
  {
    id: "amla-pickle",
    name: "Wild Amla (Gooseberry) Pickle",
    category: "Garlic & Special Pickles",
    filterCat: "garlic-special-pickles",
    price: 250,
    pricePerWeight: { "300g": 250, "500g": 390, "1kg": 740 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Earthy & Tangy",
    tasteProfile: "Tannic, Vitamin-Rich, Warming",
    image: "assets/images/amla-pickle.webp",
    description: "Whole native hill gooseberries steamed tender and marinated in an heirloom blend of roasted fenugreek, rock salt, and cold-pressed oil.",
    ingredients: "Whole Wild Amla, Gingelly Oil, Fenugreek Powder, Red Chilli, Rock Salt, Turmeric, Asafoetida.",
    storage: "Preserve in clean dry conditions. Keep submerged in oil."
  },
  {
    id: "green-chilli-pickle",
    name: "Country Green Chilli Pickle",
    category: "Vegetable Pickles",
    filterCat: "vegetable-pickles",
    price: 210,
    pricePerWeight: { "300g": 210, "500g": 330, "1kg": 630 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Spicy & Pungent",
    tasteProfile: "Sharp Bite, Grassy, Warm Mustard",
    image: "assets/images/chilli-pickle.webp",
    description: "Slit tender green farm chillies stuffed with coarsely cracked yellow mustard, lemon juice reduction, and stone-pressed gingelly oil.",
    ingredients: "Green Chillies, Yellow Mustard, Lemon Juice, Fenugreek, Salt, Pure Sesame Oil.",
    storage: "Use dry spoons only. Keep in a dry cupboard."
  },
  {
    id: "gongura-pickle",
    name: "Andhra Gongura Pachadi",
    category: "Garlic & Special Pickles",
    filterCat: "garlic-special-pickles",
    price: 270,
    pricePerWeight: { "300g": 270, "500g": 420, "1kg": 800 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Tangy & Robust",
    tasteProfile: "Deep Sour Sorrel, Roasted Garlic",
    image: "assets/images/gongura-pickle.webp",
    description: "Heirloom Andhra recipe of red-stem sorrel leaves slow-roasted and stone-ground with garlic pearls, dry red chillies, and aromatic spices.",
    ingredients: "Fresh Red Gongura Leaves, Garlic, Dry Red Chillies, Sesame Oil, Mustard, Salt, Fenugreek.",
    storage: "Keep in a cool dry space. Consume with hot rice and ghee."
  },
  {
    id: "ginger-pickle",
    name: "Traditional Inji Puli (Ginger Pickle)",
    category: "Garlic & Special Pickles",
    filterCat: "garlic-special-pickles",
    price: 250,
    pricePerWeight: { "300g": 250, "500g": 390, "1kg": 740 },
    weights: ["300g", "500g", "1kg"],
    spiceLevel: "Sweet, Sour & Tangy",
    tasteProfile: "Warm Ginger Heat, Tamarind Tang, Jaggery Mellow",
    image: "assets/images/ginger-pickle.webp",
    description: "Finely chopped organic ginger slow-braised with thick natural tamarind pulp, dark country jaggery, and roasted spices for a classic feast companion.",
    ingredients: "Scraped Ginger, Tamarind Pulp, Organic Country Jaggery, Sesame Oil, Green Chilli, Fenugreek, Salt.",
    storage: "Natural jaggery thickens over time. Store in a dry pantry."
  },
  {
    id: "rice-papad",
    name: "Sun-Dried Rice Papad (Vadam)",
    category: "Traditional Papad",
    filterCat: "traditional-papad",
    price: 140,
    pricePerWeight: { "Pack of 20": 140, "Pack of 50": 320 },
    weights: ["Pack of 20", "Pack of 50"],
    spiceLevel: "Mild & Crunchy",
    tasteProfile: "Delicate, Airy, Cumin Fragrance",
    image: "assets/images/rice-papad.webp",
    description: "Hand-spread raw rice batter scented with crushed cumin and green chillies, steamed on platters and sun-baked on crisp white cotton sheets.",
    ingredients: "Parboiled Rice Flour, Cumin Seeds, Green Chilli, Salt, Water.",
    storage: "Keep airtight. Deep fry or roast in hot oil for 4 seconds."
  },
  {
    id: "appalam",
    name: "Traditional South Indian Appalam",
    category: "Appalam",
    filterCat: "appalam",
    price: 130,
    pricePerWeight: { "Pack of 25": 130, "Pack of 50": 240 },
    weights: ["Pack of 25", "Pack of 50"],
    spiceLevel: "Crisp & Light",
    tasteProfile: "Authentic Meal Crunch, Hint of Hing",
    image: "assets/images/appalam.webp",
    description: "The quintessential accompaniment for sambar and rasam meals. Kneaded from premium urad dal flour and sun-dried to golden perfection.",
    ingredients: "Urad Dal Flour, Salt, Rice Flour, Edible Vegetable Oil, Asafoetida (Hing).",
    storage: "Keep sealed in airtight tins. Fry in hot oil until fully puffed."
  },
  {
    id: "urad-dal-appalam",
    name: "Heritage Urad Dal Appalam",
    category: "Appalam",
    filterCat: "appalam",
    price: 150,
    pricePerWeight: { "Pack of 25": 150, "Pack of 50": 280 },
    weights: ["Pack of 25", "Pack of 50"],
    spiceLevel: "Traditional Savoury",
    tasteProfile: "Hearty, Nutty, Delicate Cracker Finish",
    image: "assets/images/urad-dal-appalam.webp",
    description: "Crafted with stone-ground unpolished black gram flour, balanced salt, and traditional sun curing for maximum lightness and authentic taste.",
    ingredients: "Pure Urad Dal Flour, Rock Salt, Hing, Cold-Pressed Coconut Oil.",
    storage: "Store away from humidity. Fry fresh before dining."
  },
  {
    id: "pepper-papad",
    name: "Crushed Black Pepper Papad",
    category: "Traditional Papad",
    filterCat: "traditional-papad",
    price: 160,
    pricePerWeight: { "Pack of 20": 160, "Pack of 50": 360 },
    weights: ["Pack of 20", "Pack of 50"],
    spiceLevel: "Warm Pepper Kick",
    tasteProfile: "Peppery, Savory, Crispy",
    image: "assets/images/pepper-papad.webp",
    description: "Traditional lentil dough generously studded with coarse cracked Malabar black peppercorns that burst with warmth when roasted or fried.",
    ingredients: "Urad Dal Flour, Coarse Black Peppercorns, Cumin, Salt, Hing.",
    storage: "Keep in a dry container. Suitable for direct flame roasting."
  },
  {
    id: "masala-papad",
    name: "Traditional Masala Papad",
    category: "Masala Papad",
    filterCat: "masala-papad",
    price: 160,
    pricePerWeight: { "Pack of 20": 160, "Pack of 50": 360 },
    weights: ["Pack of 20", "Pack of 50"],
    spiceLevel: "Zesty Herb Spice",
    tasteProfile: "Spiced, Crisp Base for Toppings",
    image: "assets/images/masala-papad.webp",
    description: "Spiced lentil papad formulated to remain ultra-crisp under fresh chopped onions, ripe tomatoes, fresh coriander, and chaat spices.",
    ingredients: "Urad Dal, Moong Dal, Red Chilli Flakes, Cumin, Hing, Salt.",
    storage: "Roast over open flame or skillet. Top right before serving."
  },
  {
    id: "garlic-papad",
    name: "Roasted Garlic Papad",
    category: "Traditional Papad",
    filterCat: "traditional-papad",
    price: 170,
    pricePerWeight: { "Pack of 20": 170, "Pack of 50": 380 },
    weights: ["Pack of 20", "Pack of 50"],
    spiceLevel: "Pungent & Savoury",
    tasteProfile: "Rich Roasted Garlic, Golden Crisp",
    image: "assets/images/garlic-papad.webp",
    description: "Hand-kneaded urad dal dough infused with crushed fresh garlic cloves and chilli shreds, imparting a tantalizing aroma upon frying.",
    ingredients: "Urad Dal Flour, Fresh Garlic Paste, Red Chilli Flakes, Cumin, Salt, Hing.",
    storage: "Keep tightly sealed in moisture-proof container."
  },
  {
    id: "mini-papad",
    name: "Jeera & Ajwain Mini Papad",
    category: "Traditional Papad",
    filterCat: "traditional-papad",
    price: 130,
    pricePerWeight: { "Pack of 40": 130, "Pack of 80": 240 },
    weights: ["Pack of 40", "Pack of 80"],
    spiceLevel: "Digestive & Aromatic",
    tasteProfile: "Crispy Tea Companion, Caraway & Cumin",
    image: "assets/images/mini-papad.webp",
    description: "Cute coin-sized crispy rounds blended with roasted cumin seeds and digestive ajwain, perfect as evening snack or meal crunch garnish.",
    ingredients: "Lentil Flour, Cumin Seeds, Carom Seeds (Ajwain), Salt, Oil.",
    storage: "Keep in a cookie jar or airtight tin."
  },
  {
    id: "homemade-special-papad",
    name: "Special Multi-Lentil Papad",
    category: "Traditional Papad",
    filterCat: "traditional-papad",
    price: 180,
    pricePerWeight: { "Pack of 20": 180, "Pack of 50": 400 },
    weights: ["Pack of 20", "Pack of 50"],
    spiceLevel: "Nutty & Crisp",
    tasteProfile: "Complex Lentil Depth, Gentle Spice",
    image: "assets/images/homemade-special-papad.webp",
    description: "A cherished family recipe combining urad, moong, and chana dal flours, sun-dried on open terraces for an extraordinarily crisp and wholesome texture.",
    ingredients: "Urad Dal, Moong Dal, Chana Dal, Cumin, Black Pepper, Rock Salt, Hing.",
    storage: "Store dry. Best enjoyed with sambar rice or evening chai."
  },
  {
    id: "rice-vadam-leaf",
    name: "Steamed Banana-Leaf Rice Vadam",
    category: "Traditional Papad",
    filterCat: "traditional-papad",
    price: 150,
    pricePerWeight: { "Pack of 30": 150, "Pack of 60": 280 },
    weights: ["Pack of 30", "Pack of 60"],
    spiceLevel: "Airy & Delicate",
    tasteProfile: "Sun-Dried Rice Crisp, Hint of Cumin & Green Chilli",
    image: "assets/images/rice-vadam-leaf.webp",
    description: "Traditional South Indian Elai Vadam delicately steamed on fresh banana leaves before rooftop sun-drying. Puffs into a feather-light, melt-in-the-mouth crunch when roasted or fried.",
    ingredients: "Raw Rice Flour, Cumin Seeds, Green Chilli Paste, Asafoetida (Hing), Rock Salt.",
    storage: "Keep in an airtight jar in a moisture-free area. Shelf life: 12 months."
  },
  {
    id: "papad-collection",
    name: "Heritage Papad & Vadam Assortment",
    category: "Traditional Papad",
    filterCat: "traditional-papad",
    price: 260,
    pricePerWeight: { "Tasting Box (40 pcs)": 260, "Family Box (80 pcs)": 490 },
    weights: ["Tasting Box (40 pcs)", "Family Box (80 pcs)"],
    spiceLevel: "Assorted Crunch",
    tasteProfile: "Artisan Sampler of Appalam, Vadam, Garlic & Pepper",
    image: "assets/images/papad-collection.webp",
    description: "The ultimate celebration crunch platter. Handcrafted assortment featuring traditional Urad Appalam, sun-steamed Rice Vadam, Black Pepper Papad, and Roasted Garlic Papad.",
    ingredients: "Urad Dal, Raw Rice, Whole Black Pepper, Fresh Garlic, Cumin, Red Chilli, Salt, Cold-Pressed Sesame Oil.",
    storage: "Store in a cool, dry place. Reseal inner freshness pouches after opening."
  }
];

// -----------------------------------------------------------------------------
// 02. APPLICATION STATE & PERSISTENCE
// -----------------------------------------------------------------------------
const RIVAYA_STATE = {
  theme: localStorage.getItem("rivaya_theme") || "light",
  dir: localStorage.getItem("rivaya_dir") || "ltr",
  cart: JSON.parse(localStorage.getItem("rivaya_cart") || "[]"),
  favorites: JSON.parse(localStorage.getItem("rivaya_favorites") || "[]")
};

// -----------------------------------------------------------------------------
// 03. INITIALIZATION
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initThemeAndDirection();
  initStickyHeader();
  initNavigation();
  initCart();
  initProductCatalog();
  initProductModal();
  initForms();
  initFavorites();
  initBackToTop();
  initFaqAccordion();
});

// -----------------------------------------------------------------------------
// 04. THEME & DIRECTION TOGGLES
// -----------------------------------------------------------------------------
function initThemeAndDirection() {
  applyTheme(RIVAYA_STATE.theme);
  applyDirection(RIVAYA_STATE.dir);

  // Desktop Toggles
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const nextTheme = RIVAYA_STATE.theme === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      showToast(`Switched to ${nextTheme} mode`);
    });
  });

  document.querySelectorAll(".rtl-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const nextDir = RIVAYA_STATE.dir === "ltr" ? "rtl" : "ltr";
      applyDirection(nextDir);
      showToast(`Switched layout to ${nextDir.toUpperCase()}`);
    });
  });
}

function applyTheme(theme) {
  RIVAYA_STATE.theme = theme;
  localStorage.setItem("rivaya_theme", theme);
  document.documentElement.setAttribute("data-theme", theme);

  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    const icon = btn.querySelector("i");
    const label = btn.querySelector(".btn-label");
    if (theme === "dark") {
      if (icon) icon.className = "bi bi-sun-fill";
      if (label) label.textContent = "Light";
      btn.setAttribute("aria-label", "Switch to light theme");
    } else {
      if (icon) icon.className = "bi bi-moon-stars-fill";
      if (label) label.textContent = "Dark";
      btn.setAttribute("aria-label", "Switch to dark theme");
    }
  });
}

function applyDirection(dir) {
  // Suppress transitions temporarily so sliding drawers and direction-flipped elements do not fly across screen
  document.documentElement.classList.add("no-direction-transition");

  RIVAYA_STATE.dir = dir;
  localStorage.setItem("rivaya_dir", dir);
  document.documentElement.setAttribute("dir", dir);

  document.querySelectorAll(".rtl-toggle-btn").forEach(btn => {
    const label = btn.querySelector(".btn-label");
    if (label) label.textContent = dir === "ltr" ? "RTL" : "LTR";
    btn.setAttribute("aria-label", `Switch to ${dir === "ltr" ? "RTL" : "LTR"} layout`);
  });

  // Force reflow so browser applies the dir switch without transitions
  void document.documentElement.offsetWidth;

  // Restore transitions cleanly on next frame
  requestAnimationFrame(() => {
    document.documentElement.classList.remove("no-direction-transition");
  });
}

// -----------------------------------------------------------------------------
// 05. NAVIGATION & MOBILE DRAWER
// -----------------------------------------------------------------------------
function initNavigation() {
  const menuTrigger = document.querySelector(".menu-trigger");
  const drawer = document.querySelector(".mobile-drawer");
  const overlay = document.querySelector(".mobile-drawer-overlay");
  const closeBtn = document.querySelector(".mobile-drawer-close");

  if (!drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (menuTrigger) menuTrigger.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  // Close drawer on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("active")) {
      closeDrawer();
    }
  });

  // Close drawer when a nav link is clicked
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // Highlight active page link
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

// -----------------------------------------------------------------------------
// 06. SHOPPING CART FUNCTIONALITY (CRUD + LocalStorage)
// -----------------------------------------------------------------------------
function initCart() {
  const cartTriggers = document.querySelectorAll(".cart-trigger");
  const cartDrawer = document.querySelector(".cart-drawer");
  const cartOverlay = document.querySelector(".cart-overlay");
  const cartClose = document.querySelector(".cart-drawer-close");
  const cartItemsContainer = document.querySelector(".cart-items-container");
  const orderNowBtns = document.querySelectorAll(".order-now-btn");

  function openCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add("active");
      cartOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      renderCart();
    }
  }

  function closeCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.remove("active");
      cartOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  cartTriggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const mobileDrawer = document.querySelector(".mobile-drawer");
      const mobileOverlay = document.querySelector(".mobile-drawer-overlay");
      if (mobileDrawer && mobileDrawer.classList.contains("active")) {
        mobileDrawer.classList.remove("active");
        if (mobileOverlay) mobileOverlay.classList.remove("active");
      }
      openCart();
    });
  });
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  orderNowBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // If on products page, could scroll to collection or open cart
      if (RIVAYA_STATE.cart.length > 0) {
        openCart();
      } else {
        window.location.href = "products.html";
      }
    });
  });

  // Global checkout enquiry summary button
  const checkoutBtn = document.querySelector(".cart-checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (RIVAYA_STATE.cart.length === 0) {
        showToast("Your basket is empty. Please add items first.");
        return;
      }
      triggerOrderSummaryEnquiry();
    });
  }

  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-badge");
  const countDisplay = document.querySelector(".cart-drawer-count");
  const totalCount = RIVAYA_STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

  badges.forEach(badge => {
    badge.textContent = totalCount;
    badge.classList.remove("bump");
    void badge.offsetWidth; // trigger reflow
    badge.classList.add("bump");
  });

  if (countDisplay) {
    countDisplay.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
  }
}

function saveCart() {
  localStorage.setItem("rivaya_cart", JSON.stringify(RIVAYA_STATE.cart));
  updateCartBadge();
}

function addToCart(productId, weight, quantity = 1) {
  const product = RIVAYA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const unitPrice = product.pricePerWeight[weight] || product.price;
  const existingIndex = RIVAYA_STATE.cart.findIndex(
    item => item.id === productId && item.weight === weight
  );

  if (existingIndex > -1) {
    RIVAYA_STATE.cart[existingIndex].quantity += quantity;
  } else {
    RIVAYA_STATE.cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      image: product.image,
      weight: weight,
      unitPrice: unitPrice,
      quantity: quantity
    });
  }

  saveCart();
  renderCart();
  showToast(`Added ${product.name} (${weight}) to your basket`);
}

function updateCartQuantity(index, delta) {
  if (!RIVAYA_STATE.cart[index]) return;
  RIVAYA_STATE.cart[index].quantity += delta;
  if (RIVAYA_STATE.cart[index].quantity <= 0) {
    RIVAYA_STATE.cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}

function removeFromCart(index) {
  if (!RIVAYA_STATE.cart[index]) return;
  const removedName = RIVAYA_STATE.cart[index].name;
  RIVAYA_STATE.cart.splice(index, 1);
  saveCart();
  renderCart();
  showToast(`Removed ${removedName} from basket`);
}

function renderCart() {
  const container = document.querySelector(".cart-items-container");
  const subtotalEl = document.querySelector(".cart-subtotal-val");
  const totalEl = document.querySelector(".cart-total-val");
  const footer = document.querySelector(".cart-drawer-footer");

  if (!container) return;

  if (RIVAYA_STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="bi bi-basket cart-empty-icon"></i>
        <h3 style="font-family: var(--font-heading); font-size: 1.35rem;">Your Basket is Empty</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); max-width: 28ch;">
          Discover authentic homemade pickles and crispy sun-dried papads crafted with traditional care.
        </p>
        <a href="products.html" class="btn btn-primary btn-sm" style="margin-top: 0.5rem;">
          Explore Products <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    `;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "flex";

  let subtotal = 0;
  container.innerHTML = RIVAYA_STATE.cart.map((item, index) => {
    const itemTotal = item.unitPrice * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-size">Pack Size: ${item.weight}</span>
          <span class="cart-item-price">₹${item.unitPrice} each</span>
          <div class="cart-qty-control">
            <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, -1)" aria-label="Decrease quantity">
              <i class="bi bi-dash"></i>
            </button>
            <span class="qty-display">${item.quantity}</span>
            <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, 1)" aria-label="Increase quantity">
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
          <span style="font-weight: 700; font-family: var(--font-heading); color: var(--color-primary); font-size: 1.05rem;">
            ₹${itemTotal}
          </span>
          <button type="button" class="cart-item-remove" onclick="removeFromCart(${index})" aria-label="Remove item">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (totalEl) totalEl.textContent = `₹${subtotal}`;
}

function triggerOrderSummaryEnquiry() {
  const summaryText = RIVAYA_STATE.cart
    .map(item => `• ${item.name} (${item.weight}) × ${item.quantity} = ₹${item.unitPrice * item.quantity}`)
    .join("\n");
  const total = RIVAYA_STATE.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

  const message = `Hello Rivaya Team! I would like to place an order enquiry:\n\n${summaryText}\n\nEstimated Total: ₹${total}\n\n(Frontend Demo Order Enquiry)`;

  // Show friendly confirmation modal
  alert(`ORDER ENQUIRY SUMMARY (Demo Retail Prototype)\n\n${message}\n\nIn live production, this connects directly to WhatsApp or your fulfillment desk!`);
}

// -----------------------------------------------------------------------------
// 07. PRODUCT CATALOGUE & FILTERING (For products.html)
// -----------------------------------------------------------------------------
function initProductCatalog() {
  const catalogGrid = document.querySelector(".products-catalogue-grid");
  const filterPills = document.querySelectorAll(".filter-pill");

  if (!catalogGrid) return;

  // Check URL query parameters (e.g. ?category=papad)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedCategory = urlParams.get("category");

  let activeFilter = "all";
  if (requestedCategory) {
    if (requestedCategory === "papad") activeFilter = "traditional-papad";
    else activeFilter = requestedCategory;
  }

  // Set active button
  filterPills.forEach(pill => {
    if (pill.getAttribute("data-filter") === activeFilter) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }

    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.getAttribute("data-filter");
      renderFilteredProducts(filter);
    });
  });

  renderFilteredProducts(activeFilter);
}

function renderFilteredProducts(filter) {
  const catalogGrid = document.querySelector(".products-catalogue-grid");
  if (!catalogGrid) return;

  const filtered = filter === "all" 
    ? RIVAYA_PRODUCTS 
    : RIVAYA_PRODUCTS.filter(p => p.filterCat === filter || (filter === "papad" && p.category.includes("Papad")));

  catalogGrid.innerHTML = filtered.map(product => {
    const isFav = RIVAYA_STATE.favorites.includes(product.id);
  setTimeout(initCardScrollAnimations, 50);
    const defaultWeight = product.weights[0];
    const defaultPrice = product.pricePerWeight[defaultWeight] || product.price;

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-card-img-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-card-tag">${product.spiceLevel}</span>
          <button type="button" class="card-favorite-btn ${isFav ? 'favorited' : ''}" 
                  onclick="toggleFavorite('${product.id}', this)" 
                  aria-label="Add ${product.name} to favorites">
            <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
          </button>
        </div>
        <div class="product-card-body">
          <div class="product-card-header">
            <span class="product-card-cat">${product.category}</span>
          </div>
          <h3 class="product-card-title">${product.name}</h3>
          <p class="product-card-desc">${product.description}</p>
          <div class="product-card-sizes">
            <i class="bi bi-box-seam"></i> Available in: ${product.weights.join(", ")}
          </div>
          <div class="product-card-footer">
            <span class="product-card-price">₹${defaultPrice}</span>
            <div style="display: flex; gap: 0.5rem;">
              <button type="button" class="btn btn-outline btn-sm" onclick="openProductModal('${product.id}')">
                Details
              </button>
              <button type="button" class="btn btn-primary btn-sm" onclick="addToCart('${product.id}', '${defaultWeight}', 1)">
                <i class="bi bi-cart-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// -----------------------------------------------------------------------------
// 08. PRODUCT DETAIL MODAL
// -----------------------------------------------------------------------------
let selectedModalWeight = null;
let currentModalProductId = null;

function initProductModal() {
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close-btn");

  if (!modalOverlay) return;

  if (modalClose) {
    modalClose.addEventListener("click", closeProductModal);
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeProductModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeProductModal();
    }
  });
}

function openProductModal(productId) {
  const product = RIVAYA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentModalProductId = productId;
  selectedModalWeight = product.weights[0];

  const modalOverlay = document.querySelector(".modal-overlay");
  const modalImage = document.querySelector(".modal-media-img");
  const modalCat = document.querySelector(".modal-category-badge");
  const modalTitle = document.querySelector(".modal-title");
  const modalDesc = document.querySelector(".modal-description");
  const modalIngredients = document.querySelector(".modal-ingredients-val");
  const modalSpice = document.querySelector(".modal-spice-tag");
  const modalTaste = document.querySelector(".modal-taste-tag");
  const modalStorage = document.querySelector(".modal-storage-val");
  const modalWeightContainer = document.querySelector(".modal-weight-buttons");
  const modalPrice = document.querySelector(".modal-price");

  if (modalImage) modalImage.src = product.image;
  if (modalCat) modalCat.textContent = product.category;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalIngredients) modalIngredients.textContent = product.ingredients;
  if (modalSpice) modalSpice.textContent = `Spice Level: ${product.spiceLevel}`;
  if (modalTaste) modalTaste.textContent = `Taste: ${product.tasteProfile}`;
  if (modalStorage) modalStorage.textContent = product.storage;

  // Render Weight Buttons
  if (modalWeightContainer) {
    modalWeightContainer.innerHTML = product.weights.map(w => {
      const isSelected = w === selectedModalWeight;
      return `
        <button type="button" class="weight-option-btn ${isSelected ? 'selected' : ''}" 
                onclick="setModalWeight('${w}')">
          ${w}
        </button>
      `;
    }).join("");
  }

  updateModalPrice();

  if (modalOverlay) {
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function setModalWeight(weight) {
  selectedModalWeight = weight;
  document.querySelectorAll(".weight-option-btn").forEach(btn => {
    if (btn.textContent.trim() === weight) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
  updateModalPrice();
}

function updateModalPrice() {
  const product = RIVAYA_PRODUCTS.find(p => p.id === currentModalProductId);
  const modalPrice = document.querySelector(".modal-price");
  if (product && modalPrice && selectedModalWeight) {
    const price = product.pricePerWeight[selectedModalWeight] || product.price;
    modalPrice.textContent = `₹${price}`;
  }
}

function addModalItemToCart() {
  if (currentModalProductId && selectedModalWeight) {
    addToCart(currentModalProductId, selectedModalWeight, 1);
    closeProductModal();
  }
}

function closeProductModal() {
  const modalOverlay = document.querySelector(".modal-overlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// -----------------------------------------------------------------------------
// 09. FAVORITES / WISHLIST
// -----------------------------------------------------------------------------
function initFavorites() {
  // Handled dynamically through toggleFavorite
}

function toggleFavorite(productId, button) {
  const idx = RIVAYA_STATE.favorites.indexOf(productId);
  if (idx > -1) {
    RIVAYA_STATE.favorites.splice(idx, 1);
    if (button) {
      button.classList.remove("favorited");
      button.querySelector("i").className = "bi bi-heart";
    }
    showToast("Removed from favorites");
  } else {
    RIVAYA_STATE.favorites.push(productId);
    if (button) {
      button.classList.add("favorited");
      button.querySelector("i").className = "bi bi-heart-fill";
    }
    showToast("Saved to your favorites");
  }
  localStorage.setItem("rivaya_favorites", JSON.stringify(RIVAYA_STATE.favorites));
}

// -----------------------------------------------------------------------------
// 10. FORM VALIDATION & HANDLING (Bulk Gifting & Contact Forms)
// -----------------------------------------------------------------------------
function initForms() {
  // Contact Form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        contactForm.reset();
        const successBanner = contactForm.querySelector(".form-success-banner");
        if (successBanner) {
          successBanner.style.display = "block";
          setTimeout(() => { successBanner.style.display = "none"; }, 8000);
        }
        showToast("Thank you! Your enquiry has been received. Our team will contact you soon.");
      }
    });
  }

  // Bulk Enquiry Form
  const bulkForm = document.getElementById("bulkEnquiryForm");
  if (bulkForm) {
    bulkForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateForm(bulkForm)) {
        bulkForm.reset();
        const successBanner = bulkForm.querySelector(".form-success-banner");
        if (successBanner) {
          successBanner.style.display = "block";
          setTimeout(() => { successBanner.style.display = "none"; }, 8000);
        }
        showToast("Bulk order enquiry submitted! We will share customised pricing shortly.");
      }
    });
  }
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll("[required]");

  inputs.forEach(input => {
    input.classList.remove("error");
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;
    } else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      input.classList.add("error");
      isValid = false;
    } else if (input.type === "tel" && input.value.trim().length < 8) {
      input.classList.add("error");
      isValid = false;
    }
  });

  return isValid;
}

// -----------------------------------------------------------------------------
// 11. TOAST NOTIFICATION SYSTEM
// -----------------------------------------------------------------------------
function showToast(message, type = "primary") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type === "secondary" ? "toast-secondary" : ""}`;
  toast.innerHTML = `
    <i class="bi bi-check-circle-fill"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}



// -----------------------------------------------------------------------------
// 12. COUPON CODE CLIPBOARD FUNCTIONALITY
// -----------------------------------------------------------------------------
function copyCouponCode(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`Coupon code ${code} copied! Flat 15% OFF applied at enquiry.`);
    }).catch(() => {
      showToast(`Coupon code: ${code} (15% OFF)`);
    });
  } else {
    showToast(`Coupon code: ${code} (15% OFF)`);
  }
}


// -----------------------------------------------------------------------------
// 13. MASTER CARD SCROLL REVEAL & STAGGERED ENTRANCE ANIMATIONS
// -----------------------------------------------------------------------------
function initCardScrollAnimations() {
  const cardSelectors = [
    ".product-card",
    ".editorial-product-card",
    ".papad-showcase-card",
    ".occasion-mini-card",
    ".testimonial-story-card",
    ".palette-card",
    ".crunch-card",
    ".thali-pairing-card",
    ".quality-feature-block",
    ".value-card-editorial",
    ".storage-matrix-card",
    ".gift-pack-card",
    ".bulk-step-card",
    ".contact-channel-card",
    ".contact-social-connect-card",
    ".form-support-card",
    ".about-endnote-card",
    ".h2-voucher-card",
    ".documentary-card"
  ];

  const cards = document.querySelectorAll(cardSelectors.join(", "));
  if (!cards.length) return;

  const parentGrids = new Set();
  cards.forEach(card => {
    if (!card.classList.contains("card-revealed")) {
      card.classList.add("card-reveal-init");
    }
    if (card.parentElement) {
      parentGrids.add(card.parentElement);
    }
  });

  parentGrids.forEach(parent => {
    const children = parent.querySelectorAll(cardSelectors.join(", "));
    children.forEach((child, idx) => {
      child.style.setProperty("--stagger-delay", `${(idx % 4) * 0.08}s`);
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px"
    });

    cards.forEach(card => {
      if (!card.classList.contains("card-revealed")) {
        observer.observe(card);
      }
    });
  } else {
    cards.forEach(card => card.classList.add("card-revealed"));
  }
}

// Hook into DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initCardScrollAnimations();
});


// -----------------------------------------------------------------------------
// STICKY HEADER SCROLL SHADOW
// -----------------------------------------------------------------------------
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 15) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// -----------------------------------------------------------------------------
// BACK TO TOP BUTTON
// -----------------------------------------------------------------------------
function initBackToTop() {
  let btn = document.getElementById("backToTop");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "backToTop";
    btn.className = "back-to-top";
    btn.type = "button";
    btn.setAttribute("aria-label", "Back to top");
    btn.title = "Back to top";
    btn.innerHTML = '<i class="bi bi-chevron-up"></i>';
    document.body.appendChild(btn);
  }

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  function toggleBackToTop() {
    if (window.scrollY > 350) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
}

// -----------------------------------------------------------------------------
// FAQ ACCORDION DROPDOWN METHOD
// -----------------------------------------------------------------------------
function initFaqAccordion() {
  const accordions = document.querySelectorAll(".faq-accordion");
  if (!accordions.length) return;

  accordions.forEach(accordion => {
    const items = accordion.querySelectorAll(".faq-item");

    items.forEach(item => {
      const trigger = item.querySelector(".faq-trigger");
      if (!trigger) return;

      // Sync initial ARIA state
      if (item.classList.contains("active")) {
        trigger.setAttribute("aria-expanded", "true");
      } else {
        trigger.setAttribute("aria-expanded", "false");
      }

      trigger.addEventListener("click", () => {
        const isCurrentlyActive = item.classList.contains("active");

        // Close other items in the same accordion group
        items.forEach(sibling => {
          if (sibling !== item && sibling.classList.contains("active")) {
            sibling.classList.remove("active");
            const sibTrigger = sibling.querySelector(".faq-trigger");
            if (sibTrigger) sibTrigger.setAttribute("aria-expanded", "false");
          }
        });

        // Toggle current item
        if (isCurrentlyActive) {
          item.classList.remove("active");
          trigger.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("active");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  });
}
