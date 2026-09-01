/**
 * Larica's Pastel - Caxias do Sul - RS
 * Cardápio Digital & Sistema de Pedidos Direto no WhatsApp
 * Powered by Onira Labs - Design System Master v2
 */

const WHATSAPP_PHONE = '5554992523774';
const CATALOG_STORAGE_KEY = 'laricas_catalog_v20260901_master';

// Taxas de Entrega por Bairro em Caxias do Sul
const DELIVERY_ZONES = [
    { neighborhood: 'Bairro Cruzeiro (Bairro da Casa)', fee: 7.00, time: '25-40 min' },
    { neighborhood: 'Bela Vista / Panazzolo', fee: 8.00, time: '25-40 min' },
    { neighborhood: 'Lourdes / Exposição', fee: 9.00, time: '30-45 min' },
    { neighborhood: 'Centro / Cristo Redentor', fee: 10.00, time: '30-45 min' },
    { neighborhood: 'São Pelegrino / Pio X', fee: 11.00, time: '35-50 min' },
    { neighborhood: 'Sanvitto / Villagio Caxias', fee: 12.00, time: '35-50 min' },
    { neighborhood: 'Santa Catarina / Universitário', fee: 12.00, time: '35-50 min' },
    { neighborhood: 'Cinquentenário / Marechal Floriano', fee: 12.00, time: '35-50 min' },
    { neighborhood: 'Ana Rech / Forqueta', fee: 20.00, time: '50-70 min' },
    { neighborhood: 'Outro Bairro (Caxias do Sul)', fee: 14.00, time: '40-60 min' }
];

// Catálogo Oficial do Larica's Pastel
const DEFAULT_PRODUCTS = [
    // --- MAIS PEDIDOS / PROMOÇÕES ---
    {
        id: "laricas-001",
        name: "Pastel Larica's Monstro (30cm)",
        category: "promocoes",
        group: "Mais Vendidos",
        desc: "Carne bovina refogada de primeira, bacon crocante em cubos, queijo mussarela farto, ovos cozidos, milho verde e azeitonas pretas fatiadas.",
        badge: "O Mais Famoso ⭐",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 26.00,
        hasAdicionais: true,
        options: {
            sizes: [
                { name: "Médio (20cm)", extra: 0 },
                { name: "Gigante Monstro (30cm)", extra: 8.00 }
            ],
            addons: [
                { name: "Catupiry Original", price: 5.00 },
                { name: "Cheddar Cremoso", price: 4.50 },
                { name: "Bacon Extra", price: 4.50 }
            ]
        }
    },
    {
        id: "laricas-002",
        name: "Combo Casal da Larica",
        category: "combos",
        group: "Mais Vendidos",
        desc: "2 Pastéis Salgados de 20cm (Carne c/ Queijo ou Frango c/ Catupiry) + 1 Pastel Doce de Chocolate + 1 Refrigerante 2L.",
        badge: "Melhor Custo-Benefício ⚡",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
        price: 58.00,
        hasAdicionais: true,
        options: {
            doneness: ["Refrigerante: Guaraná 2L", "Refrigerante: Coca-Cola 2L (+R$ 3,00)"]
        }
    },
    {
        id: "laricas-003",
        name: "Pastel de Costela Gaúcha Desfiada & Mussarela",
        category: "salgados",
        group: "Mais Vendidos",
        desc: "Costela de ripa desfiada e temperada na cerveja preta com generosa camada de queijo mussarela derretido.",
        badge: "Costela Gaúcha 🍖",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 24.00,
        hasAdicionais: true,
        options: {
            sizes: [
                { name: "Médio (20cm)", extra: 0 },
                { name: "Gigante (30cm)", extra: 8.00 }
            ]
        }
    },

    // --- PASTÉIS SALGADOS ---
    {
        id: "laricas-004",
        name: "Pastel de Carne com Queijo",
        category: "salgados",
        group: "Salgados",
        desc: "Carne bovina temperada e refogada com queijo mussarela.",
        badge: "Clássico 🥩",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 18.00,
        hasAdicionais: true,
        options: {
            sizes: [
                { name: "Médio (20cm)", extra: 0 },
                { name: "Gigante (30cm)", extra: 7.00 }
            ]
        }
    },
    {
        id: "laricas-005",
        name: "Pastel de Frango com Catupiry",
        category: "salgados",
        group: "Salgados",
        desc: "Frango desfiado suculento com Catupiry legítimo e orégano.",
        badge: "Cremoso 🍗",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 19.00,
        hasAdicionais: true,
        options: {
            sizes: [
                { name: "Médio (20cm)", extra: 0 },
                { name: "Gigante (30cm)", extra: 7.00 }
            ]
        }
    },
    {
        id: "laricas-006",
        name: "Pastel Quatro Queijos Especial",
        category: "salgados",
        group: "Salgados",
        desc: "Mussarela, Provolone defumado, Parmesão ralado e Catupiry cremoso.",
        badge: "Queijo Farto 🧀",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 21.00,
        hasAdicionais: true,
        options: {
            sizes: [
                { name: "Médio (20cm)", extra: 0 },
                { name: "Gigante (30cm)", extra: 8.00 }
            ]
        }
    },
    {
        id: "laricas-007",
        name: "Pastel de Coração de Frango na Chapa c/ Queijo",
        category: "salgados",
        group: "Salgados",
        desc: "Coraçõezinhos de frango chapeados no alho e azeite com queijo mussarela derretido.",
        badge: "Tradição Gaúcha ❤️",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 23.00,
        hasAdicionais: true,
        options: {
            sizes: [
                { name: "Médio (20cm)", extra: 0 },
                { name: "Gigante (30cm)", extra: 8.00 }
            ]
        }
    },

    // --- DOCES GOURMET ---
    {
        id: "laricas-008",
        name: "Pastel de Nutella Pura com Morango",
        category: "doces",
        group: "Doces",
        desc: "Nutella cremosa e morangos frescos fatiados dentro da massa crocante açucarada com canela.",
        badge: "Doce Mais Pedido 🍓",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=700&q=80",
        price: 22.00,
        hasAdicionais: true,
        options: {
            sizes: [
                { name: "Médio (20cm)", extra: 0 },
                { name: "Gigante (30cm)", extra: 8.00 }
            ]
        }
    },
    {
        id: "laricas-009",
        name: "Pastel Romeu e Julieta (Goiabada Cascão & Queijo)",
        category: "doces",
        group: "Doces",
        desc: "Goiabada cascão cremosa com farta camada de queijo mussarela derretido.",
        badge: "Clássico Doce 🍯",
        rating: "4.8",
        img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=700&q=80",
        price: 18.00,
        hasAdicionais: false
    },

    // --- PASTELINA CROCANTE ---
    {
        id: "laricas-010",
        name: "Pacote de Pastelina Crocante (Açúcar e Canela)",
        category: "pastelina",
        group: "Pastelina",
        desc: "Tirinhas crocantes e douradas de massa de pastel frita, salpicadas com açúcar refinado e canela.",
        badge: "Snack Crocante 🌟",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=700&q=80",
        price: 10.00,
        hasAdicionais: false
    },
    {
        id: "laricas-011",
        name: "Pacote de Pastelina Salgada com Ervas Finas",
        category: "pastelina",
        group: "Pastelina",
        desc: "Tirinhas crocantes de massa de pastel frita sequinha temperadas com sal e mix de ervas finas.",
        badge: "Aperitivo Perfeito 🥨",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=700&q=80",
        price: 10.00,
        hasAdicionais: false
    },

    // --- BEBIDAS ---
    {
        id: "laricas-012",
        name: "Coca-Cola 2L Gelada",
        category: "bebidas",
        group: "Bebidas",
        desc: "Garrafa 2 Litros gelada.",
        badge: "Família 🥤",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
        price: 14.00,
        hasAdicionais: false
    },
    {
        id: "laricas-013",
        name: "Guaraná Antarctica 2L Gelado",
        category: "bebidas",
        group: "Bebidas",
        desc: "Garrafa 2 Litros gelada.",
        badge: "Geladão 🍃",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=700&q=80",
        price: 12.00,
        hasAdicionais: false
    },
    {
        id: "laricas-014",
        name: "Coca-Cola Lata 350ml",
        category: "bebidas",
        group: "Bebidas",
        desc: "Lata 350ml bem gelada.",
        badge: "Gelada 🥤",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
        price: 6.00,
        hasAdicionais: false
    }
];

function getProducts() {
    const saved = localStorage.getItem(CATALOG_STORAGE_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao ler catálogo:', e);
        }
    }
    localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
}

let PRODUCTS = getProducts();

let cart = [];
let currentCategory = 'todos';
let searchQuery = '';
let activeModalProduct = null;
let modalQuantity = 1;
let selectedDoneness = '';
let selectedSizeExtra = 0;
let selectedSizeName = '';
let selectedAddons = [];
let selectedDeliveryType = 'delivery';
let selectedDeliveryZone = DELIVERY_ZONES[0];
let selectedPaymentMethod = 'pix';

document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderCatalog();
    renderDeliveryZones();
    checkBusinessStatus();
    setupScrollBehavior();
    lucide.createIcons();
});

function getFilteredProducts() {
    return PRODUCTS.filter(p => {
        if (p.isPaused) return false;
        
        const matchCategory = (currentCategory === 'todos') ||
            (currentCategory === 'promocoes' && p.group === 'Mais Vendidos') ||
            (p.category === currentCategory);

        if (!matchCategory) return false;

        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase();
            const nameMatch = p.name.toLowerCase().includes(q);
            const descMatch = (p.desc || '').toLowerCase().includes(q);
            const badgeMatch = (p.badge || '').toLowerCase().includes(q);
            return nameMatch || descMatch || badgeMatch;
        }

        return true;
    });
}

function renderCatalog() {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    const items = getFilteredProducts();

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="empty-catalog-state">
                <i data-lucide="search-x" style="width:48px;height:48px;color:#DC2626;margin-bottom:12px;"></i>
                <h3>Nenhum item encontrado</h3>
                <p>Tente buscar por outro sabor ou selecione outra categoria.</p>
                <button type="button" class="btn-reset-filters" onclick="window.resetFilters()">Ver todo o cardápio</button>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    grid.innerHTML = items.map(p => `
        <article class="product-card" data-id="${p.id}">
            <div class="card-img-wrapper" onclick="window.openProductModal('${p.id}')">
                <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
                ${p.badge ? `<span class="badge-tag">${p.badge}</span>` : ''}
                <div class="rating-pill">
                    <i data-lucide="star" style="width:12px;height:12px;fill:#F59E0B;stroke:none;"></i>
                    <span>${p.rating || '5.0'}</span>
                </div>
            </div>

            <div class="card-info">
                <div class="card-header-row" onclick="window.openProductModal('${p.id}')">
                    <h3 class="product-title">${p.name}</h3>
                </div>
                <p class="product-desc" onclick="window.openProductModal('${p.id}')">${p.desc}</p>

                <div class="card-footer-row">
                    <div class="price-container">
                        <span class="price-prefix">Valor:</span>
                        <span class="price-num">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                    </div>

                    ${p.hasAdicionais ? `
                        <button type="button" class="btn-add-action btn-options" onclick="window.openProductModal('${p.id}')" aria-label="Escolher tamanho e adicionais para ${p.name}">
                            <i data-lucide="sliders" style="width:15px;height:15px;"></i>
                            <span>Escolher Opções</span>
                        </button>
                    ` : `
                        <button type="button" class="btn-add-action" onclick="window.quickAddToCart('${p.id}')" aria-label="Adicionar ${p.name} ao pedido">
                            <i data-lucide="plus" style="width:15px;height:15px;"></i>
                            <span>+ Adicionar ao Pedido</span>
                        </button>
                    `}
                </div>
            </div>
        </article>
    `).join('');

    lucide.createIcons();
}

window.filterCategory = function(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === cat);
    });
    renderCatalog();
};

window.handleSearch = function(e) {
    searchQuery = e.target.value;
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) {
        clearBtn.style.display = searchQuery.length > 0 ? 'flex' : 'none';
    }
    renderCatalog();
};

window.clearSearch = function() {
    searchQuery = '';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) clearBtn.style.display = 'none';
    renderCatalog();
};

window.resetFilters = function() {
    searchQuery = '';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    window.filterCategory('todos');
};

window.openProductModal = function(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    activeModalProduct = product;
    modalQuantity = 1;
    selectedDoneness = (product.options && product.options.doneness) ? product.options.doneness[0] : '';
    selectedSizeExtra = 0;
    selectedSizeName = (product.options && product.options.sizes) ? product.options.sizes[0].name : '';
    selectedAddons = [];

    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalOptionsWrap = document.getElementById('modal-options-wrap');
    const modalObs = document.getElementById('modal-obs');
    const qtyNum = document.getElementById('modal-qty-num');

    if (modalImg) modalImg.src = product.img;
    if (modalBadge) {
        if (product.badge) {
            modalBadge.innerText = product.badge;
            modalBadge.style.display = 'inline-block';
        } else {
            modalBadge.style.display = 'none';
        }
    }
    if (modalTitle) modalTitle.innerText = product.name;
    if (modalDesc) modalDesc.innerText = product.desc;
    if (modalObs) modalObs.value = '';
    if (qtyNum) qtyNum.innerText = '1';

    if (modalOptionsWrap) {
        let html = '';

        if (product.options && product.options.sizes && product.options.sizes.length > 0) {
            html += `
                <div class="modal-opt-group">
                    <div class="opt-group-header">
                        <h4>Escolha o Tamanho</h4>
                        <span class="opt-required-tag">Obrigatório</span>
                    </div>
                    <div class="opt-list-radios">
                        ${product.options.sizes.map((s, idx) => `
                            <label class="opt-radio-row">
                                <div class="opt-radio-left">
                                    <input type="radio" name="modal-size" value="${s.extra}" data-name="${s.name}" ${idx === 0 ? 'checked' : ''} onchange="window.handleModalSizeChange(this)">
                                    <span class="opt-radio-label">${s.name}</span>
                                </div>
                                ${s.extra > 0 ? `<span class="opt-price-add">+ R$ ${s.extra.toFixed(2).replace('.', ',')}</span>` : '<span class="opt-price-included">Incluso</span>'}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (product.options && product.options.doneness && product.options.doneness.length > 0) {
            html += `
                <div class="modal-opt-group">
                    <div class="opt-group-header">
                        <h4>Preferência</h4>
                        <span class="opt-required-tag">Obrigatório</span>
                    </div>
                    <div class="opt-list-radios">
                        ${product.options.doneness.map((d, idx) => `
                            <label class="opt-radio-row">
                                <div class="opt-radio-left">
                                    <input type="radio" name="modal-doneness" value="${d}" ${idx === 0 ? 'checked' : ''} onchange="window.handleModalDonenessChange('${d}')">
                                    <span class="opt-radio-label">${d}</span>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (product.options && product.options.addons && product.options.addons.length > 0) {
            html += `
                <div class="modal-opt-group">
                    <div class="opt-group-header">
                        <h4>Adicionais no Recheio</h4>
                        <span class="opt-optional-tag">Opcional</span>
                    </div>
                    <div class="opt-list-checks">
                        ${product.options.addons.map((a, idx) => `
                            <label class="opt-check-row">
                                <div class="opt-check-left">
                                    <input type="checkbox" value="${a.name}" data-price="${a.price}" onchange="window.handleModalAddonToggle(this)">
                                    <span class="opt-check-label">${a.name}</span>
                                </div>
                                <span class="opt-price-add">+ R$ ${a.price.toFixed(2).replace('.', ',')}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        modalOptionsWrap.innerHTML = html;
    }

    updateModalSubtotal();

    if (modal) {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }
};

window.closeProductModal = function() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    activeModalProduct = null;
};

window.handleModalSizeChange = function(input) {
    selectedSizeExtra = parseFloat(input.value) || 0;
    selectedSizeName = input.getAttribute('data-name') || '';
    updateModalSubtotal();
};

window.handleModalDonenessChange = function(doneness) {
    selectedDoneness = doneness;
};

window.handleModalAddonToggle = function(checkbox) {
    const name = checkbox.value;
    const price = parseFloat(checkbox.getAttribute('data-price')) || 0;

    if (checkbox.checked) {
        selectedAddons.push({ name, price });
    } else {
        selectedAddons = selectedAddons.filter(a => a.name !== name);
    }
    updateModalSubtotal();
};

window.modalQtyInc = function() {
    modalQuantity++;
    const qtyNum = document.getElementById('modal-qty-num');
    if (qtyNum) qtyNum.innerText = modalQuantity;
    updateModalSubtotal();
};

window.modalQtyDec = function() {
    if (modalQuantity > 1) {
        modalQuantity--;
        const qtyNum = document.getElementById('modal-qty-num');
        if (qtyNum) qtyNum.innerText = modalQuantity;
        updateModalSubtotal();
    }
};

function calculateModalItemUnitPrice() {
    if (!activeModalProduct) return 0;
    let base = activeModalProduct.price + selectedSizeExtra;
    const addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
    return base + addonsTotal;
}

function updateModalSubtotal() {
    const subtotalEl = document.getElementById('modal-subtotal-price');
    const unitPrice = calculateModalItemUnitPrice();
    const total = unitPrice * modalQuantity;
    if (subtotalEl) {
        subtotalEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

window.addToCartModal = function() {
    if (!activeModalProduct) return;

    const obsInput = document.getElementById('modal-obs');
    const obs = obsInput ? obsInput.value.trim() : '';
    const unitPrice = calculateModalItemUnitPrice();

    const cartItem = {
        id: activeModalProduct.id,
        name: activeModalProduct.name,
        img: activeModalProduct.img,
        basePrice: activeModalProduct.price,
        unitPrice: unitPrice,
        quantity: modalQuantity,
        size: selectedSizeName,
        doneness: selectedDoneness,
        addons: [...selectedAddons],
        obs: obs
    };

    cart.push(cartItem);
    saveCartToStorage();
    updateCartUI();
    window.closeProductModal();
    showToast(`✓ ${activeModalProduct.name} adicionado ao pedido!`);
};

window.quickAddToCart = function(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id && (!item.addons || item.addons.length === 0) && !item.obs && !item.size);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            img: product.img,
            basePrice: product.price,
            unitPrice: product.price,
            quantity: 1,
            size: '',
            doneness: '',
            addons: [],
            obs: ''
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`✓ ${product.name} adicionado!`);
};

window.cartQtyInc = function(index) {
    if (cart[index]) {
        cart[index].quantity += 1;
        saveCartToStorage();
        updateCartUI();
    }
};

window.cartQtyDec = function(index) {
    if (cart[index]) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        saveCartToStorage();
        updateCartUI();
    }
};

window.removeCartItem = function(index) {
    if (cart[index]) {
        cart.splice(index, 1);
        saveCartToStorage();
        updateCartUI();
        showToast(`Item removido.`);
    }
};

window.clearCart = function() {
    if (cart.length === 0) return;
    if (confirm('Deseja limpar todos os itens do seu pedido?')) {
        cart = [];
        saveCartToStorage();
        updateCartUI();
        showToast(`Pedido limpo.`);
    }
};

window.openCart = function() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('cart-open');
    }
};

window.closeCart = function() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('cart-open');
    }
};

function saveCartToStorage() {
    localStorage.setItem('laricas_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('laricas_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const countBadges = document.querySelectorAll('#cart-count, .cart-count-badge');
    const totalHeaderEl = document.getElementById('cart-total-nav');
    const floatingBar = document.getElementById('cart-floating-bar');
    const floatingCount = document.getElementById('floating-bar-count');
    const floatingTotal = document.getElementById('floating-bar-total');

    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);

    countBadges.forEach(el => {
        if (el) el.innerText = totalQty;
    });

    const formattedSubtotal = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (totalHeaderEl) totalHeaderEl.innerText = formattedSubtotal;

    if (floatingBar) {
        if (totalQty > 0) {
            floatingBar.style.display = 'flex';
            if (floatingCount) floatingCount.innerText = `${totalQty} ${totalQty === 1 ? 'item' : 'itens'}`;
            if (floatingTotal) floatingTotal.innerText = formattedSubtotal;
        } else {
            floatingBar.style.display = 'none';
        }
    }

    renderCartItemsList(subtotal);
}

function renderCartItemsList(subtotal) {
    const listContainer = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const checkoutForm = document.getElementById('cart-checkout-section');
    const subtotalEl = document.getElementById('cart-summary-subtotal');
    const feeEl = document.getElementById('cart-summary-fee');
    const totalEl = document.getElementById('cart-summary-total');

    if (!listContainer) return;

    if (cart.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (checkoutForm) checkoutForm.style.display = 'none';
        listContainer.innerHTML = '';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (checkoutForm) checkoutForm.style.display = 'block';

    listContainer.innerHTML = cart.map((item, idx) => {
        const itemTotal = item.unitPrice * item.quantity;
        return `
            <div class="cart-item-card">
                <img src="${item.img}" alt="${item.name}" class="cart-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80';">
                
                <div class="cart-item-details">
                    <div class="cart-item-header">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <button type="button" class="btn-remove-item" onclick="window.removeCartItem(${idx})" title="Remover item" aria-label="Remover item">
                            <i data-lucide="trash-2" style="width:15px;height:15px;"></i>
                        </button>
                    </div>

                    ${item.size ? `<div class="cart-item-spec"><strong>Tamanho:</strong> ${item.size}</div>` : ''}
                    ${item.doneness ? `<div class="cart-item-spec"><strong>Opção:</strong> ${item.doneness}</div>` : ''}
                    
                    ${item.addons && item.addons.length > 0 ? `
                        <div class="cart-item-addons-list">
                            ${item.addons.map(a => `<span>+ ${a.name} (+R$ ${a.price.toFixed(2).replace('.', ',')})</span>`).join('')}
                        </div>
                    ` : ''}

                    ${item.obs ? `<div class="cart-item-obs"><em>Obs: ${item.obs}</em></div>` : ''}

                    <div class="cart-item-price-qty-row">
                        <div class="cart-qty-ctrl">
                            <button type="button" class="btn-qty-mini" onclick="window.cartQtyDec(${idx})" aria-label="Diminuir">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button type="button" class="btn-qty-mini" onclick="window.cartQtyInc(${idx})" aria-label="Aumentar">+</button>
                        </div>
                        <span class="cart-item-total-price">R$ ${itemTotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();

    const fee = selectedDeliveryType === 'delivery' ? selectedDeliveryZone.fee : 0;
    const finalTotal = subtotal + fee;

    if (subtotalEl) subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (feeEl) {
        feeEl.innerText = selectedDeliveryType === 'delivery' 
            ? `R$ ${fee.toFixed(2).replace('.', ',')}` 
            : 'Grátis (Retirada)';
    }
    if (totalEl) totalEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
}

function renderDeliveryZones() {
    const select = document.getElementById('delivery-neighborhood-select');
    if (!select) return;

    select.innerHTML = DELIVERY_ZONES.map((z, idx) => `
        <option value="${idx}">
            ${z.neighborhood} — R$ ${z.fee.toFixed(2).replace('.', ',')} (${z.time})
        </option>
    `).join('');
}

window.handleZoneChange = function(e) {
    const index = parseInt(e.target.value) || 0;
    selectedDeliveryZone = DELIVERY_ZONES[index];
    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
    renderCartItemsList(subtotal);
};

window.selectDeliveryType = function(type) {
    selectedDeliveryType = type;
    const btnTele = document.getElementById('btn-type-delivery');
    const btnRetirada = document.getElementById('btn-type-retirada');
    const addressBox = document.getElementById('delivery-address-group');
    const zoneGroup = document.getElementById('delivery-zone-group');

    if (type === 'delivery') {
        if (btnTele) btnTele.classList.add('active');
        if (btnRetirada) btnRetirada.classList.remove('active');
        if (addressBox) addressBox.style.display = 'block';
        if (zoneGroup) zoneGroup.style.display = 'block';
    } else {
        if (btnTele) btnTele.classList.remove('active');
        if (btnRetirada) btnRetirada.classList.add('active');
        if (addressBox) addressBox.style.display = 'none';
        if (zoneGroup) zoneGroup.style.display = 'none';
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
    renderCartItemsList(subtotal);
};

window.selectPayment = function(method) {
    selectedPaymentMethod = method;
    const btnPix = document.getElementById('btn-pay-pix');
    const btnCard = document.getElementById('btn-pay-cartao');
    const btnCash = document.getElementById('btn-pay-dinheiro');
    const cashBox = document.getElementById('cash-change-group');

    [btnPix, btnCard, btnCash].forEach(b => { if (b) b.classList.remove('active'); });

    if (method === 'pix' && btnPix) btnPix.classList.add('active');
    if (method === 'cartao' && btnCard) btnCard.classList.add('active');
    if (method === 'dinheiro' && btnCash) {
        btnCash.classList.add('active');
        if (cashBox) cashBox.style.display = 'block';
    } else {
        if (cashBox) cashBox.style.display = 'none';
    }
};

window.sendOrderWhatsApp = function() {
    if (cart.length === 0) {
        alert('Seu pedido está vazio. Escolha um pastel gigante no cardápio!');
        return;
    }

    const nameInput = document.getElementById('client-name');
    const addressInput = document.getElementById('client-address');
    const cashChangeInput = document.getElementById('cash-change-value');

    const clientName = nameInput ? nameInput.value.trim() : '';
    if (!clientName) {
        alert('Por favor, informe seu Nome para identificação na comanda.');
        if (nameInput) nameInput.focus();
        return;
    }

    let clientAddress = '';
    if (selectedDeliveryType === 'delivery') {
        clientAddress = addressInput ? addressInput.value.trim() : '';
        if (!clientAddress) {
            alert('Por favor, informe o Endereço Completo de entrega (Rua, Número, Apto/Bloco).');
            if (addressInput) addressInput.focus();
            return;
        }
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
    const fee = selectedDeliveryType === 'delivery' ? selectedDeliveryZone.fee : 0;
    const total = subtotal + fee;

    let text = `_pedido via site by Onira.fly_\n\n`;

    if (selectedDeliveryType === 'delivery') {
        text += `*Solicitação de Tele-Entrega*\n\n`;
    } else {
        text += `*Solicitação de Retirada no Balcão*\n\n`;
    }

    cart.forEach(item => {
        text += `*${item.quantity}x* ${item.name}`;
        if (item.size) text += ` · ${item.size}`;
        if (item.doneness) text += ` · ${item.doneness}`;
        text += `\n`;

        if (item.addons && item.addons.length > 0) {
            item.addons.forEach(a => {
                text += `+ ${a.name}\n`;
            });
        }

        if (item.obs) {
            text += `_Obs: ${item.obs}_\n`;
        }

        text += `*R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}*\n\n`;
    });

    text += `*Itens: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n`;
    if (selectedDeliveryType === 'delivery') {
        text += `Entrega (${selectedDeliveryZone.neighborhood}): R$ ${fee.toFixed(2).replace('.', ',')}\n`;
    } else {
        text += `Entrega: Retirada no Balcão (Grátis)\n`;
    }
    text += `*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;

    text += `*${clientName}*\n`;
    if (selectedDeliveryType === 'delivery') {
        text += `${clientAddress} — ${selectedDeliveryZone.neighborhood}\n`;
    }

    if (selectedPaymentMethod === 'pix') {
        text += `Pagamento em Pix — combinamos a chave por aqui\n`;
    } else if (selectedPaymentMethod === 'cartao') {
        text += `Pagamento no cartão — favor trazer a maquininha\n`;
    } else if (selectedPaymentMethod === 'dinheiro') {
        const change = cashChangeInput ? cashChangeInput.value.trim() : '';
        text += change ? `Pagamento em dinheiro — troco para R$ ${change}\n` : `Pagamento em dinheiro — sem necessidade de troco\n`;
    }

    text += `\n_Enviado pelo site do Larica's Pastel_`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
};

function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add('visible');

    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}

function checkBusinessStatus() {
    const statusTextHeader = document.getElementById('status-text-header');
    const statusDot = document.querySelector('.status-dot');
    
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeInMinutes = hour * 60 + minute;

    let isOpen = false;
    if (day !== 1) { // Ter a Dom 18h30 as 23h30
        if (timeInMinutes >= 1110 && timeInMinutes <= 1410) isOpen = true;
    }

    if (statusTextHeader) {
        if (isOpen) {
            statusTextHeader.innerText = 'Aberto Agora • 18:30 às 23:30';
            if (statusDot) statusDot.style.background = '#10B981';
        } else {
            statusTextHeader.innerText = 'Aberto Hoje às 18:30 • Faça seu Pedido';
            if (statusDot) statusDot.style.background = '#DC2626';
        }
    }
}

function setupScrollBehavior() {
    const cta = document.querySelector('.onira-cta');
    if (!cta) return;

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        cta.classList.add('scrolling');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            cta.classList.remove('scrolling');
        }, 350);
    });
}

window.toggleOniraCta = function() {
    const cta = document.querySelector('.onira-cta');
    if (cta) {
        cta.classList.toggle('collapsed');
    }
};
