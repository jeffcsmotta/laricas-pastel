/**
 * Larica's Pastel - Caxias do Sul - RS
 * Cardápio Digital & Sistema de Pedidos Direto no WhatsApp
 * Powered by Onira Labs - Design System Master v2
 */

const WHATSAPP_PHONE = '5554996490510';
const CATALOG_STORAGE_KEY = 'laricas_catalog_v20260908_jamaica';

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
    {
        "id": "laricas-combo-01",
        "name": "Combo Dupla 17cm (Frango Cheddar + Carne Catupiry)",
        "category": "promocoes",
        "group": "Combos da Noite",
        "desc": "1 Pastel de Frango com Cheddar M + 1 Pastel de Carne com Catupiry M (17cm cada). Massa artesanal dourada e crocante.",
        "price": 22.5,
        "badge": "Mais Pedido 🔥",
        "img": "assets/combo_dupla_m.jpg"
    },
    {
        "id": "laricas-combo-02",
        "name": "Combo Família: 4 Pastéis Médios + Fruki Guaraná 600ml",
        "category": "promocoes",
        "group": "Combos da Noite",
        "desc": "4 pastéis de 17cm (Carne c/ Catupiry, Carne c/ Cheddar, Frango c/ Catupiry e Frango c/ Cheddar) + 1 Fruki Guaraná 600ml geladinho.",
        "price": 45.0,
        "badge": "Super Combo 🥤",
        "img": "assets/combo_4pasteis_guarana.jpg"
    },
    {
        "id": "laricas-combo-03",
        "name": "Combo Mini: 4 Pastéis Mini de 10cm",
        "category": "promocoes",
        "group": "Combos da Noite",
        "desc": "4 pastéis mini de 10cm sequinhos e bem recheados. O petisco ideal para começar a noite.",
        "price": 29.9,
        "badge": "Petisco 🥟",
        "img": "assets/combo_mini_4.jpg"
    },
    {
        "id": "laricas-combo-04",
        "name": "Combo Mix Total: 6 Pastéis Médios + Fruki 600ml",
        "category": "promocoes",
        "group": "Combos da Noite",
        "desc": "1 Carne Catupiry, 1 Carne Cheddar, 1 Frango Catupiry, 1 Frango Cheddar, 1 Carne 3 Queijos, 1 Frango 3 Queijos + Fruki 600ml.",
        "price": 90.0,
        "badge": "Para a Galera 👑",
        "img": "assets/combo_mix_total.jpg"
    },
    {
        "id": "laricas-combo-05",
        "name": "Combo Frango Duplo 17cm + Guaraná 200ml",
        "category": "promocoes",
        "group": "Combos da Noite",
        "desc": "1 Pastel de Frango com Catupiry + 1 Pastel de Frango com Cheddar + 1 Guaraná 200ml bem gelado.",
        "price": 27.5,
        "badge": "Duo Frango 🍗",
        "img": "assets/combo_frango_duplo.jpg"
    },
    {
        "id": "laricas-salgado-m-01",
        "name": "01 - Pastel de Carne com Catupiry M (17cm)",
        "category": "salgados",
        "group": "Salgados 17cm",
        "desc": "Carne bovina de primeira refogada artesanalmente com Catupiry cremoso e massa crocante.",
        "price": 16.0,
        "badge": "Clássico ⭐",
        "img": "assets/pastel_salgado_m.jpg"
    },
    {
        "id": "laricas-salgado-m-02",
        "name": "02 - Pastel de Carne com Mussarela M (17cm)",
        "category": "salgados",
        "group": "Salgados 17cm",
        "desc": "Carne moída suculenta com mussarela derretida puxando fio na massa crocante.",
        "price": 17.0,
        "badge": "Top 1 🧀",
        "img": "assets/pastel_salgado_m.jpg"
    },
    {
        "id": "laricas-salgado-m-05",
        "name": "05 - Pastel de Carne com Cheddar M (17cm)",
        "category": "salgados",
        "group": "Salgados 17cm",
        "desc": "Carne moída temperada na medida certa com queijo cheddar cremoso.",
        "price": 16.0,
        "badge": "",
        "img": "assets/pastel_salgado_m.jpg"
    },
    {
        "id": "laricas-salgado-m-08",
        "name": "08 - Pastel de Carne, Bacon e Mussarela M (17cm)",
        "category": "salgados",
        "group": "Salgados 17cm",
        "desc": "Carne moída, cubos crocantes de bacon e queijo mussarela derretido.",
        "price": 20.0,
        "badge": "Farto 🥓",
        "img": "assets/pastel_salgado_m.jpg"
    },
    {
        "id": "laricas-salgado-m-22",
        "name": "22 - Pastel de Frango com Catupiry M (17cm)",
        "category": "salgados",
        "group": "Salgados 17cm",
        "desc": "Peito de frango desfiado suculento com Catupiry original cremoso.",
        "price": 16.0,
        "badge": "Favorito 🍗",
        "img": "assets/pastel_salgado_m.jpg"
    },
    {
        "id": "laricas-salgado-m-24",
        "name": "24 - Pastel de Frango, Bacon e Cheddar M (17cm)",
        "category": "salgados",
        "group": "Salgados 17cm",
        "desc": "Frango desfiado bem temperado, bacon defumado crocante e cheddar farto.",
        "price": 20.0,
        "badge": "",
        "img": "assets/pastel_salgado_m.jpg"
    },
    {
        "id": "laricas-salgado-m-30",
        "name": "30 - Pastel 3 Queijos M (17cm)",
        "category": "salgados",
        "group": "Salgados 17cm",
        "desc": "Combinação irresistível de Queijo Mussarela, Cheddar e Catupiry.",
        "price": 17.0,
        "badge": "Vegetariano 🧀",
        "img": "assets/pastel_salgado_m.jpg"
    },
    {
        "id": "laricas-salgado-m-36",
        "name": "36 - Pastel Pizza Especial M (17cm)",
        "category": "salgados",
        "group": "Salgados 17cm",
        "desc": "Presunto selecionado, queijo mussarela farto, tomate fatiado e orégano chileno.",
        "price": 19.0,
        "badge": "",
        "img": "assets/pastel_salgado_m.jpg"
    },
    {
        "id": "laricas-salgado-m-47",
        "name": "47 - Pastel BBQ Carne Especial M (17cm)",
        "category": "salgados",
        "group": "Salgados 17cm",
        "desc": "Carne moída de primeira, bacon defumado, queijo cheddar farto e cebola roxa marinada.",
        "price": 25.0,
        "badge": "Gourmet 🥩",
        "img": "assets/pastel_salgado_m.jpg"
    },
    {
        "id": "laricas-salgado-g",
        "name": "Pastel Salgado G (22cm Fartos)",
        "category": "salgados",
        "group": "Tamanho Grande (22cm)",
        "desc": "Pastel grande de 22cm no seu sabor favorito (Carne, Frango, Queijos ou Especiais).",
        "price": 18.5,
        "badge": "22cm 📏",
        "img": "assets/pastel_salgado_g.jpg"
    },
    {
        "id": "laricas-salgado-big",
        "name": "Pastel Salgado BIG Gigante (30cm)",
        "category": "salgados",
        "group": "Gigantes (30cm)",
        "desc": "O lendário pastel gigante de 30cm do Larica's! Farto do começo ao fim, recheio pesado para matar qualquer fome.",
        "price": 31.5,
        "badge": "Monstro 30cm 👑",
        "img": "assets/pastel_salgado_big.jpg"
    },
    {
        "id": "laricas-doce-51",
        "name": "51 - Pastel de Banana com Canela M (17cm)",
        "category": "doces",
        "group": "Doces Especiais",
        "desc": "Fatias de banana fresca, leite condensado farto e canela aromática.",
        "price": 17.0,
        "badge": "Clássico 🍌",
        "img": "assets/pastel_doce_m.jpg"
    },
    {
        "id": "laricas-doce-54",
        "name": "54 - Pastel de Chocolate Preto Tradicional M (17cm)",
        "category": "doces",
        "group": "Doces Especiais",
        "desc": "Muito chocolate preto cremoso derretido na massa sequinha e polvilhado de açúcar.",
        "price": 16.0,
        "badge": "Mais Pedido 🍫",
        "img": "assets/pastel_doce_m.jpg"
    },
    {
        "id": "laricas-doce-56",
        "name": "56 - Pastel Nega Maluca M (17cm)",
        "category": "doces",
        "group": "Doces Gourmet",
        "desc": "Deliciosa combinação de chocolate preto cremoso com queijo mussarela derretido.",
        "price": 19.0,
        "badge": "Gourmet ✨",
        "img": "assets/pastel_doce_m.jpg"
    },
    {
        "id": "laricas-doce-58",
        "name": "58 - Pastel Prestígio M (17cm)",
        "category": "doces",
        "group": "Doces Gourmet",
        "desc": "Coco ralado úmido misturado com chocolate preto derretido abundante.",
        "price": 20.0,
        "badge": "Prestígio 🥥",
        "img": "assets/pastel_doce_m.jpg"
    },
    {
        "id": "laricas-doce-60",
        "name": "60 - Pastel de MM's com Chocolate M (17cm)",
        "category": "doces",
        "group": "Doces Gourmet",
        "desc": "Confeitos crocantes de MM's coloridos afundados no chocolate preto cremoso.",
        "price": 20.0,
        "badge": "Kids & Fun 🍬",
        "img": "assets/pastel_doce_m.jpg"
    },
    {
        "id": "laricas-doce-62",
        "name": "62 - Pastel Ouro Branco M (17cm)",
        "category": "doces",
        "group": "Doces Gourmet",
        "desc": "Bombom Ouro Branco original picado com chocolate branco cremoso.",
        "price": 20.0,
        "badge": "Top Doce 🏆",
        "img": "assets/pastel_doce_m.jpg"
    },
    {
        "id": "laricas-doce-66",
        "name": "66 - Pastel Oreo com Chocolate Preto M (17cm)",
        "category": "doces",
        "group": "Doces Gourmet",
        "desc": "Biscoito Oreo em pedaços com muito chocolate preto cremoso.",
        "price": 20.0,
        "badge": "",
        "img": "assets/pastel_doce_m.jpg"
    },
    {
        "id": "laricas-doce-72",
        "name": "72 - Pastel Morango Moreno M (17cm)",
        "category": "doces",
        "group": "Doces Gourmet",
        "desc": "Morangos frescos em pedaços com calda rica de chocolate preto derretido.",
        "price": 20.0,
        "badge": "Sensação 🍓",
        "img": "assets/pastel_doce_m.jpg"
    },
    {
        "id": "laricas-doce-mini",
        "name": "Pastel Doce Mini (10cm)",
        "category": "doces",
        "group": "Doces Mini",
        "desc": "Mini pastel doce de 10cm nos sabores tradicionais. A sobremesa perfeita.",
        "price": 8.0,
        "badge": "Sobremesa 🧁",
        "img": "assets/pastel_doce_mini.jpg"
    },
    {
        "id": "laricas-bebida-01",
        "name": "Fruki Guaraná 600ml",
        "category": "bebidas",
        "group": "Refrigerantes Gelados",
        "desc": "O guaraná mais tradicional do Rio Grande do Sul, geladíssimo na garrafa de 600ml.",
        "price": 7.0,
        "badge": "Gaúcho 💚",
        "img": "assets/refrigerantes.jpg"
    },
    {
        "id": "laricas-bebida-02",
        "name": "Coca-Cola 200ml",
        "category": "bebidas",
        "group": "Refrigerantes Gelados",
        "desc": "Garrafinha pet individual 200ml estupidamente gelada.",
        "price": 4.0,
        "badge": "",
        "img": "assets/refrigerantes.jpg"
    },
    {
        "id": "laricas-bebida-03",
        "name": "Coca-Cola 2 Litros",
        "category": "bebidas",
        "group": "Refrigerantes Família",
        "desc": "Garrafa de 2 litros perfeita para acompanhar combos e pedidos em família.",
        "price": 16.0,
        "badge": "Família 🥤",
        "img": "assets/refrigerantes.jpg"
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
let selectedPaymentMethod = 'pix';

document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderCatalog();
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

    if (subtotalEl) subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (feeEl) {
        feeEl.innerText = selectedDeliveryType === 'delivery' 
            ? 'A confirmar com atendente' 
            : 'Grátis (Retirada no Balcão)';
    }
    if (totalEl) totalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}

window.selectDeliveryType = function(type) {
    selectedDeliveryType = type;
    const btnTele = document.getElementById('btn-type-delivery');
    const btnRetirada = document.getElementById('btn-type-retirada');
    const addressBox = document.getElementById('delivery-address-group');

    if (type === 'delivery') {
        if (btnTele) btnTele.classList.add('active');
        if (btnRetirada) btnRetirada.classList.remove('active');
        if (addressBox) addressBox.style.display = 'block';
    } else {
        if (btnTele) btnTele.classList.remove('active');
        if (btnRetirada) btnRetirada.classList.add('active');
        if (addressBox) addressBox.style.display = 'none';
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
        showToast('Seu pedido está vazio. Escolha um item no cardápio!');
        return;
    }

    const nameInput = document.getElementById('client-name');
    const addressInput = document.getElementById('client-address');
    const cashChangeInput = document.getElementById('cash-change-value');

    const clientName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Cliente';

    let clientAddress = '';
    if (selectedDeliveryType === 'delivery') {
        clientAddress = (addressInput && addressInput.value.trim()) ? addressInput.value.trim() : 'Endereço: A combinar no WhatsApp';
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);

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

    text += `*Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n`;
    if (selectedDeliveryType === 'delivery') {
        text += `*Taxa de Tele:* Custo a confirmar com atendente\n`;
    } else {
        text += `*Entrega:* Retirada no Balcão (Grátis)\n`;
    }
    text += `*Total dos Itens: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n\n`;

    text += `*Cliente:* ${clientName}\n`;
    if (selectedDeliveryType === 'delivery') {
        text += `*Endereço:* ${clientAddress}\n`;
    }

    if (selectedPaymentMethod === 'pix') {
        text += `*Pagamento:* Pix — combinamos a chave por aqui\n`;
    } else if (selectedPaymentMethod === 'cartao') {
        text += `*Pagamento:* Cartão — favor trazer a maquininha\n`;
    } else if (selectedPaymentMethod === 'dinheiro') {
        const change = cashChangeInput ? cashChangeInput.value.trim() : '';
        text += change ? `*Pagamento:* Dinheiro — troco para R$ ${change}\n` : `*Pagamento:* Dinheiro — sem necessidade de troco\n`;
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
