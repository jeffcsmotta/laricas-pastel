/**
 * Larica's Pastel - Caxias do Sul - RS
 * Cardápio Digital & Sistema de Pedidos Direto no WhatsApp
 * Powered by Onira Labs
 */

// WhatsApp Oficial da Larica's Pastel (Número Real Verificado)
const WHATSAPP_PHONE = '5554996490510';
const CHAVE_PIX_OFICIAL = '54996490510'; // Chave Pix Telefone

// Taxas de Entrega por Bairro em Caxias do Sul
const DELIVERY_ZONES = [
    { neighborhood: 'Cruzeiro (Bairro da Loja)', fee: 6.00, time: '30-45 min' },
    { neighborhood: 'Bela Vista', fee: 7.00, time: '35-50 min' },
    { neighborhood: 'Sagrada Família', fee: 7.00, time: '35-50 min' },
    { neighborhood: 'Lourdes', fee: 8.00, time: '40-55 min' },
    { neighborhood: 'Panazzolo', fee: 8.00, time: '40-55 min' },
    { neighborhood: 'Cristo Redentor', fee: 8.00, time: '40-55 min' },
    { neighborhood: 'São Leopoldo', fee: 8.00, time: '40-55 min' },
    { neighborhood: 'Petrópolis', fee: 8.00, time: '40-55 min' },
    { neighborhood: 'Centro', fee: 9.00, time: '40-55 min' },
    { neighborhood: 'Rio Branco', fee: 9.00, time: '40-55 min' },
    { neighborhood: 'Pio X', fee: 10.00, time: '45-60 min' },
    { neighborhood: 'Santa Catarina', fee: 11.00, time: '45-60 min' },
    { neighborhood: 'Villagio Iguatemi / Sanvitto', fee: 11.00, time: '45-60 min' },
    { neighborhood: 'Outro Bairro (Caxias do Sul)', fee: 10.00, time: '45-60 min' }
];

// Catálogo de Produtos da Larica's Pastel
const PRODUCTS = [
    // === PROMOÇÕES DO DIA ===
    {
        id: 'promo-1',
        name: 'Super Dupla M (17cm cada)',
        category: 'promocoes',
        desc: '1 Pastel de Frango com Cheddar M (17cm) + 1 Pastel de Carne com Catupiry M (17cm). Crocantes e muito recheados!',
        badge: 'Promoção do Dia',
        rating: '5.0',
        img: 'assets/pastel1.jpg',
        price: 22.50,
        sizes: [
            { name: 'Combo (2x Pastéis M 17cm)', price: 22.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'promo-2',
        name: 'Combo Família 4 Pastéis M + Guaraná 600ml',
        category: 'promocoes',
        desc: '4 Pastéis Médios de 17cm (Carne c/ Catupiry, Carne c/ Cheddar, Frango c/ Catupiry e Frango c/ Cheddar) + 1 Guaraná 600ml geladinho.',
        badge: 'Mais Pedido',
        rating: '5.0',
        img: 'assets/pastel2.jpg',
        price: 45.00,
        sizes: [
            { name: 'Combo 4x Pastéis + Guaraná 600ml', price: 45.00 }
        ],
        hasAdicionais: true
    },

    // === COMBOS ESPECIAIS ===
    {
        id: 'combo-1',
        name: 'Combo Mini: 4 Pastéis Mini (10cm)',
        category: 'combos',
        desc: 'Ideal para petiscar ou experimentar sabores! 4 pastéis minis de 10cm com massa artesanal super sequinha e crocante.',
        badge: 'Mix Degustação',
        rating: '4.9',
        img: 'assets/pastel3.jpg',
        price: 29.90,
        sizes: [
            { name: '4x Mini Pastéis 10cm', price: 29.90 }
        ],
        hasAdicionais: true
    },
    {
        id: 'combo-2',
        name: 'Combo Mix Total: 6 Pastéis + Fruki 600ml',
        category: 'combos',
        desc: '1 Carne Catupiry + 1 Carne Cheddar + 1 Frango Catupiry + 1 Frango Cheddar + 1 Carne 3 Queijos + 1 Frango 3 Queijos + 1 Fruki 600ml.',
        badge: 'Super Fome',
        rating: '5.0',
        img: 'assets/pastel_carne.png',
        price: 90.00,
        sizes: [
            { name: 'Combo 6x Pastéis M + Fruki 600ml', price: 90.00 }
        ],
        hasAdicionais: true
    },
    {
        id: 'combo-3',
        name: 'Combo Duplo Frango + Guaraná 200ml',
        category: 'combos',
        desc: '1 Pastel de Frango com Catupiry M (17cm) + 1 Pastel de Frango com Cheddar M (17cm) + 1 Guaraná 200ml.',
        badge: 'Especial',
        rating: '4.9',
        img: 'assets/pastel_queijo.png',
        price: 27.50,
        sizes: [
            { name: 'Combo 2x Pastéis + Refri 200ml', price: 27.50 }
        ],
        hasAdicionais: true
    },

    // === PASTÉIS SALGADOS ===
    {
        id: 'salg-1',
        name: 'Carne com Catupiry',
        category: 'salgados',
        desc: 'Carne moída bovina selecionada, refogada no tempero especial da casa com generosa camada de Catupiry cremoso original.',
        badge: 'Campeão de Vendas',
        rating: '5.0',
        img: 'assets/pastel_carne.png',
        sizes: [
            { name: 'Médio (17cm)', price: 15.50 },
            { name: 'Grande (22cm)', price: 18.50 },
            { name: 'BIG (30cm - Gigante)', price: 31.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-2',
        name: 'Frango com Catupiry',
        category: 'salgados',
        desc: 'Peito de frango desfiado suculento temperado com ervas finas e coberto com Catupiry cremoso legítimo.',
        badge: 'Clássico da Casa',
        rating: '4.9',
        img: 'assets/pastel_queijo.png',
        sizes: [
            { name: 'Médio (17cm)', price: 15.50 },
            { name: 'Grande (22cm)', price: 18.50 },
            { name: 'BIG (30cm - Gigante)', price: 31.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-3',
        name: 'Carne com Cheddar',
        category: 'salgados',
        desc: 'Carne bovina refogada e temperada com cheddar cremoso derretido de sabor marcante e irresistível.',
        badge: 'Favorito',
        rating: '4.9',
        img: 'assets/pastel1.jpg',
        sizes: [
            { name: 'Médio (17cm)', price: 15.50 },
            { name: 'Grande (22cm)', price: 18.50 },
            { name: 'BIG (30cm - Gigante)', price: 31.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-4',
        name: 'Frango com Cheddar e Bacon',
        category: 'salgados',
        desc: 'Frango desfiado com cheddar cremoso e cubos de bacon crocantes dourados na hora.',
        badge: 'Top Recheio',
        rating: '5.0',
        img: 'assets/pastel2.jpg',
        sizes: [
            { name: 'Médio (17cm)', price: 17.00 },
            { name: 'Grande (22cm)', price: 20.50 },
            { name: 'BIG (30cm - Gigante)', price: 33.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-5',
        name: 'Carne 3 Queijos Nobre',
        category: 'salgados',
        desc: 'Carne moída temperada, queijo muçarela derretido, provolone defumado e Catupiry legítimo.',
        badge: 'Especial',
        rating: '5.0',
        img: 'assets/pastel_carne.png',
        sizes: [
            { name: 'Médio (17cm)', price: 17.50 },
            { name: 'Grande (22cm)', price: 21.00 },
            { name: 'BIG (30cm - Gigante)', price: 34.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-6',
        name: 'Frango 3 Queijos Nobre',
        category: 'salgados',
        desc: 'Frango desfiado suculento com combinação nobre de muçarela, provolone e Catupiry.',
        badge: 'Muito Recheio',
        rating: '4.9',
        img: 'assets/pastel3.jpg',
        sizes: [
            { name: 'Médio (17cm)', price: 17.50 },
            { name: 'Grande (22cm)', price: 21.00 },
            { name: 'BIG (30cm - Gigante)', price: 34.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-7',
        name: 'Pizza Tradicional',
        category: 'salgados',
        desc: 'Muçarela farta, presunto de primeira, rodelas de tomate fresco e toque especial de orégano.',
        badge: 'Tradicional',
        rating: '4.8',
        img: 'assets/pastel_queijo.png',
        sizes: [
            { name: 'Médio (17cm)', price: 15.50 },
            { name: 'Grande (22cm)', price: 18.50 },
            { name: 'BIG (30cm - Gigante)', price: 31.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-8',
        name: 'Calabresa com Queijo & Cebola',
        category: 'salgados',
        desc: 'Calabresa especial fatiada e moída, muçarela derretida, cebola suave e orégano.',
        badge: 'Saboroso',
        rating: '4.8',
        img: 'assets/pastel1.jpg',
        sizes: [
            { name: 'Médio (17cm)', price: 15.50 },
            { name: 'Grande (22cm)', price: 18.50 },
            { name: 'BIG (30cm - Gigante)', price: 31.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-9',
        name: 'Quatro Queijos Supremo',
        category: 'salgados',
        desc: 'Explosão de queijos: Muçarela, Provolone defumado, Parmesão ralado e Catupiry cremoso.',
        badge: 'Cremoso',
        rating: '5.0',
        img: 'assets/pastel_queijo.png',
        sizes: [
            { name: 'Médio (17cm)', price: 17.50 },
            { name: 'Grande (22cm)', price: 21.00 },
            { name: 'BIG (30cm - Gigante)', price: 34.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-10',
        name: 'Palmito com Catupiry',
        category: 'salgados',
        desc: 'Palmito nobre picadinho, tempero suave com ervas, muçarela e Catupiry cremoso.',
        badge: 'Leve & Saboroso',
        rating: '4.8',
        img: 'assets/pastel2.jpg',
        sizes: [
            { name: 'Médio (17cm)', price: 17.00 },
            { name: 'Grande (22cm)', price: 20.50 },
            { name: 'BIG (30cm - Gigante)', price: 33.50 }
        ],
        hasAdicionais: true
    },
    {
        id: 'salg-11',
        name: 'Strogonoff de Carne Especial',
        category: 'salgados',
        desc: 'Iscas de carne bovina macia ao molho strogonoff cremoso com champignon e batata palha crocante.',
        badge: 'Gourmet',
        rating: '5.0',
        img: 'assets/pastel3.jpg',
        sizes: [
            { name: 'Médio (17cm)', price: 18.50 },
            { name: 'Grande (22cm)', price: 22.50 },
            { name: 'BIG (30cm - Gigante)', price: 36.00 }
        ],
        hasAdicionais: true
    },

    // === PASTÉIS DOCES ===
    {
        id: 'doce-1',
        name: 'Chocolate Preto com Morango',
        category: 'doces',
        desc: 'Chocolate preto cremoso de alta qualidade com morangos frescos fatiados na hora.',
        badge: 'Campeão Doce',
        rating: '5.0',
        img: 'assets/pastel_doce.png',
        sizes: [
            { name: 'Mini (10cm)', price: 8.00 },
            { name: 'Médio (17cm)', price: 16.00 },
            { name: 'Grande (22cm)', price: 19.00 }
        ],
        hasAdicionais: true
    },
    {
        id: 'doce-2',
        name: 'Chocolate Branco com Morango',
        category: 'doces',
        desc: 'Creme de chocolate branco aveludado com pedaços de morango natural fresco.',
        badge: 'Delicioso',
        rating: '4.9',
        img: 'assets/doce.jpg',
        sizes: [
            { name: 'Mini (10cm)', price: 8.00 },
            { name: 'Médio (17cm)', price: 16.00 },
            { name: 'Grande (22cm)', price: 19.00 }
        ],
        hasAdicionais: true
    },
    {
        id: 'doce-3',
        name: 'Nutella com Leite Ninho',
        category: 'doces',
        desc: 'A combinação perfeita de Nutella legítima com generosa camada de leite Ninho cremoso.',
        badge: 'Gourmet Doce',
        rating: '5.0',
        img: 'assets/pastel_doce.png',
        sizes: [
            { name: 'Mini (10cm)', price: 9.50 },
            { name: 'Médio (17cm)', price: 18.00 },
            { name: 'Grande (22cm)', price: 22.00 }
        ],
        hasAdicionais: true
    },
    {
        id: 'doce-4',
        name: 'Banana com Canela e Doce de Leite',
        category: 'doces',
        desc: 'Fatias de banana flambadas com canela aromática e doce de leite artesanal cremoso.',
        badge: 'Clássico',
        rating: '4.9',
        img: 'assets/doce.jpg',
        sizes: [
            { name: 'Mini (10cm)', price: 8.00 },
            { name: 'Médio (17cm)', price: 16.00 },
            { name: 'Grande (22cm)', price: 19.00 }
        ],
        hasAdicionais: true
    },
    {
        id: 'doce-5',
        name: 'Romeu e Julieta',
        category: 'doces',
        desc: 'Goiabada cascão cremosa derretida com queijo muçarela salgadinho na medida certa.',
        badge: 'Tradicional',
        rating: '4.8',
        img: 'assets/pastel_doce.png',
        sizes: [
            { name: 'Mini (10cm)', price: 8.00 },
            { name: 'Médio (17cm)', price: 16.00 },
            { name: 'Grande (22cm)', price: 19.00 }
        ],
        hasAdicionais: true
    },
    {
        id: 'doce-6',
        name: 'Sensação Especial',
        category: 'doces',
        desc: 'Chocolate preto derretido, creme de morango aveludado e pedaços de morango.',
        badge: 'Irresistível',
        rating: '5.0',
        img: 'assets/doce.jpg',
        sizes: [
            { name: 'Mini (10cm)', price: 8.50 },
            { name: 'Médio (17cm)', price: 17.00 },
            { name: 'Grande (22cm)', price: 20.00 }
        ],
        hasAdicionais: true
    },

    // === PASTELINA & PETISCOS ===
    {
        id: 'petisco-1',
        name: 'Pastelina Tradicional Crocante (150g)',
        category: 'pastelina',
        desc: 'Tiras sequinhas e super crocantes de massa de pastel frita temperada com sal especial e ervas da casa. Perfeito para petiscar!',
        badge: 'Petisco da Casa',
        rating: '4.9',
        img: 'assets/fritas.jpg',
        price: 12.00,
        sizes: [
            { name: 'Porção 150g', price: 12.00 }
        ],
        hasAdicionais: false
    },
    {
        id: 'petisco-2',
        name: 'Pastelina com Molho Cheddar & Bacon (200g)',
        category: 'pastelina',
        desc: 'Tiras de massa de pastel crocante servidas com pote de cheddar cremoso quente e farofa de bacon crocante.',
        badge: 'Com Molho',
        rating: '5.0',
        img: 'assets/fritas.jpg',
        price: 18.00,
        sizes: [
            { name: 'Porção 200g + Pote Cheddar/Bacon', price: 18.00 }
        ],
        hasAdicionais: false
    },

    // === BEBIDAS ===
    {
        id: 'beb-1',
        name: 'Refrigerante Lata 350ml',
        category: 'bebidas',
        desc: 'Coca-Cola Tradicional, Coca Zero, Guaraná Antarctica, Sprite ou Fanta Laranja geladíssima.',
        badge: 'Geladinho',
        rating: '4.9',
        img: 'assets/empanadas.jpeg',
        price: 6.00,
        sizes: [
            { name: 'Lata 350ml', price: 6.00 }
        ],
        hasAdicionais: false
    },
    {
        id: 'beb-2',
        name: 'Guaraná Fruki 600ml',
        category: 'bebidas',
        desc: 'O autêntico sabor gaúcho de Guaraná Fruki na garrafa de 600ml.',
        badge: 'Gaúcho',
        rating: '5.0',
        img: 'assets/empanadas.jpeg',
        price: 8.50,
        sizes: [
            { name: 'Garrafa 600ml', price: 8.50 }
        ],
        hasAdicionais: false
    },
    {
        id: 'beb-3',
        name: 'Guaraná Antarctica 600ml',
        category: 'bebidas',
        desc: 'Guaraná Antarctica gelado 600ml.',
        badge: 'Gelado',
        rating: '4.8',
        img: 'assets/empanadas.jpeg',
        price: 8.50,
        sizes: [
            { name: 'Garrafa 600ml', price: 8.50 }
        ],
        hasAdicionais: false
    },
    {
        id: 'beb-4',
        name: 'Coca-Cola 2 Litros',
        category: 'bebidas',
        desc: 'Garrafa de Coca-Cola 2L para dividir com a galera ou família.',
        badge: 'Família',
        rating: '5.0',
        img: 'assets/empanadas.jpeg',
        price: 14.00,
        sizes: [
            { name: 'Garrafa 2L', price: 14.00 }
        ],
        hasAdicionais: false
    },
    {
        id: 'beb-5',
        name: 'Guaraná Fruki 2 Litros',
        category: 'bebidas',
        desc: 'Garrafa de Fruki Guaraná 2L geladinha.',
        badge: 'Favorito RS',
        rating: '4.9',
        img: 'assets/empanadas.jpeg',
        price: 11.00,
        sizes: [
            { name: 'Garrafa 2L', price: 11.00 }
        ],
        hasAdicionais: false
    },
    {
        id: 'beb-6',
        name: 'Suco Del Valle Lata 290ml',
        category: 'bebidas',
        desc: 'Suco natural sabor Uva ou Pêssego.',
        badge: 'Suco',
        rating: '4.8',
        img: 'assets/empanadas.jpeg',
        price: 7.00,
        sizes: [
            { name: 'Lata 290ml', price: 7.00 }
        ],
        hasAdicionais: false
    },
    {
        id: 'beb-7',
        name: 'Água Mineral 500ml',
        category: 'bebidas',
        desc: 'Água mineral límpida com ou sem gás.',
        badge: 'Água',
        rating: '4.8',
        img: 'assets/empanadas.jpeg',
        price: 4.00,
        sizes: [
            { name: 'Garrafa 500ml', price: 4.00 }
        ],
        hasAdicionais: false
    },
    {
        id: 'beb-8',
        name: 'Cerveja Heineken Long Neck 330ml',
        category: 'bebidas',
        desc: 'Cerveja puro malte premium estupidamente gelada (Venda proibida para menores de 18 anos).',
        badge: 'Puro Malte',
        rating: '5.0',
        img: 'assets/empanadas.jpeg',
        price: 11.00,
        sizes: [
            { name: 'Long Neck 330ml', price: 11.00 }
        ],
        hasAdicionais: false
    }
];

// Opcionais / Adicionais para Pastéis
const ADICIONAIS_LIST = [
    { id: 'add-catupiry', name: 'Catupiry Original Extra', price: 3.50 },
    { id: 'add-cheddar', name: 'Cheddar Cremoso Extra', price: 3.50 },
    { id: 'add-bacon', name: 'Bacon Crocante em Cubos', price: 4.00 },
    { id: 'add-queijo', name: 'Queijo Muçarela Extra', price: 4.00 },
    { id: 'add-ovo', name: 'Ovo Frito na Chapa', price: 2.50 },
    { id: 'add-milho', name: 'Milho Verde Selecionado', price: 2.00 },
    { id: 'add-azeitona', name: 'Azeitona Fatiada', price: 2.00 },
    { id: 'add-pimenta', name: 'Pimenta Biquinho Suave', price: 2.00 }
];

// Estado Global da Aplicação
let cart = [];
let selectedCategory = 'todos';
let activeSearchQuery = '';
let currentCustomizingProduct = null;
let currentSelectedSizeIndex = 0;
let currentCustomAdicionais = [];
let currentCustomObs = '';
let orderType = 'delivery'; // 'delivery' | 'pickup'
let selectedDeliveryFee = 6.00;
let selectedDeliveryZoneName = 'Cruzeiro (Bairro da Loja)';
let paymentMethod = 'pix'; // 'pix' | 'card' | 'money'

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderCategories();
    renderDeliveryZonesSelect();
    renderProducts();
    updateCartUI();
    initScrollProposalWidget();
    checkStoreStatus();

    // Inicializar ícones Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Checar Status da Loja (18:30 às 23:00)
function checkStoreStatus() {
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.getElementById('store-status-text');
    if (!statusText) return;

    const now = new Date();
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const currentTimeInMin = currentHour * 60 + currentMin;
    const openTimeInMin = 18 * 60 + 30; // 18:30
    const closeTimeInMin = 23 * 60; // 23:00

    const isOpen = currentTimeInMin >= openTimeInMin && currentTimeInMin < closeTimeInMin;

    if (isOpen) {
        if (statusDot) statusDot.style.background = '#10B981';
        statusText.innerHTML = 'Aberto Agora • 18:30 às 23:00';
    } else {
        if (statusDot) statusDot.style.background = '#F59E0B';
        statusText.innerHTML = 'Recebendo Pedidos • Abre às 18:30';
    }
}

// Renderizar Categorias no Menu Superior
function renderCategories() {
    const navPills = document.querySelectorAll('.cat-pill');
    navPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            navPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            selectedCategory = pill.getAttribute('data-category');
            renderProducts();
        });
    });
}

// Filtro de Busca
function handleSearch(event) {
    activeSearchQuery = event.target.value.toLowerCase().trim();
    renderProducts();
}

// Renderizar Produtos no Grid
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    let filtered = PRODUCTS.filter(prod => {
        const matchesCategory = selectedCategory === 'todos' || prod.category === selectedCategory;
        const matchesSearch = prod.name.toLowerCase().includes(activeSearchQuery) || 
                              prod.desc.toLowerCase().includes(activeSearchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i data-lucide="search-x" style="width: 48px; height: 48px; color: #94A3B8; margin-bottom: 12px;"></i>
                <h3>Nenhum item encontrado</h3>
                <p>Tente buscar por outro sabor de pastel ou selecione outra categoria acima.</p>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    grid.innerHTML = filtered.map(prod => {
        const basePrice = prod.price || (prod.sizes && prod.sizes[0] ? prod.sizes[0].price : 0);
        const hasMultipleSizes = prod.sizes && prod.sizes.length > 1;
        const priceLabel = hasMultipleSizes ? `A partir de <strong>R$ ${basePrice.toFixed(2).replace('.', ',')}</strong>` : `<strong>R$ ${basePrice.toFixed(2).replace('.', ',')}</strong>`;

        return `
            <div class="menu-card" data-id="${prod.id}">
                <div class="card-img-box" onclick="openProductCustomizer('${prod.id}')">
                    <img src="${prod.img}" alt="${prod.name}" class="card-img" loading="lazy">
                    <span class="card-badge">${prod.badge}</span>
                    <div class="card-rating">
                        <i data-lucide="star" style="width: 13px; height: 13px; fill: #F59E0B; color: #F59E0B;"></i>
                        <span>${prod.rating}</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-top-info" onclick="openProductCustomizer('${prod.id}')">
                        <h3 class="card-title">${prod.name}</h3>
                        <p class="card-desc">${prod.desc}</p>
                    </div>
                    
                    <div class="card-bottom">
                        <div class="card-price">
                            <span class="price-val">${priceLabel}</span>
                            ${hasMultipleSizes ? `<span class="size-count-pill">${prod.sizes.length} tamanhos</span>` : ''}
                        </div>
                        <button class="add-btn" onclick="openProductCustomizer('${prod.id}')" aria-label="Adicionar ${prod.name}">
                            <i data-lucide="plus" style="width:16px; height:16px;"></i>
                            <span>Pedir</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Abrir Modal de Customização / Escolha de Tamanho e Adicionais
function openProductCustomizer(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    currentCustomizingProduct = product;
    currentSelectedSizeIndex = 0;
    currentCustomAdicionais = [];
    currentCustomObs = '';

    const modal = document.getElementById('product-modal');
    if (!modal) return;

    // Preencher dados do modal
    document.getElementById('modal-img').src = product.img;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-desc').textContent = product.desc;
    document.getElementById('modal-badge').textContent = product.badge;

    // Renderizar Tamanhos
    const sizeContainer = document.getElementById('modal-sizes-list');
    if (product.sizes && product.sizes.length > 0) {
        document.getElementById('modal-sizes-section').style.display = 'block';
        sizeContainer.innerHTML = product.sizes.map((s, idx) => `
            <label class="size-option-card ${idx === 0 ? 'selected' : ''}" onclick="selectCustomSize(${idx})">
                <input type="radio" name="product-size" value="${idx}" ${idx === 0 ? 'checked' : ''} style="display:none;">
                <div class="size-info">
                    <span class="size-name">${s.name}</span>
                    <span class="size-tag">${product.category === 'doces' ? 'Gourmet' : 'Artesanal Crocante'}</span>
                </div>
                <span class="size-price">R$ ${s.price.toFixed(2).replace('.', ',')}</span>
            </label>
        `).join('');
    } else {
        document.getElementById('modal-sizes-section').style.display = 'none';
    }

    // Renderizar Adicionais
    const addsSection = document.getElementById('modal-adicionais-section');
    const addsList = document.getElementById('modal-adicionais-list');
    if (product.hasAdicionais) {
        addsSection.style.display = 'block';
        addsList.innerHTML = ADICIONAIS_LIST.map(add => `
            <label class="add-option-row">
                <input type="checkbox" onchange="toggleCustomAdicional('${add.id}', ${add.price})" class="custom-checkbox">
                <div class="add-name-col">
                    <span>${add.name}</span>
                </div>
                <span class="add-price">+ R$ ${add.price.toFixed(2).replace('.', ',')}</span>
            </label>
        `).join('');
    } else {
        addsSection.style.display = 'none';
    }

    // Limpar campo de observação
    const obsInput = document.getElementById('modal-obs-input');
    if (obsInput) obsInput.value = '';

    updateModalPriceTotal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) window.lucide.createIcons();
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

function selectCustomSize(index) {
    currentSelectedSizeIndex = index;
    const cards = document.querySelectorAll('.size-option-card');
    cards.forEach((c, idx) => {
        if (idx === index) c.classList.add('selected');
        else c.classList.remove('selected');
    });
    updateModalPriceTotal();
}

function toggleCustomAdicional(addId, price) {
    const addObj = ADICIONAIS_LIST.find(a => a.id === addId);
    if (!addObj) return;

    const existingIdx = currentCustomAdicionais.findIndex(a => a.id === addId);
    if (existingIdx >= 0) {
        currentCustomAdicionais.splice(existingIdx, 1);
    } else {
        currentCustomAdicionais.push(addObj);
    }
    updateModalPriceTotal();
}

function updateModalPriceTotal() {
    if (!currentCustomizingProduct) return;
    let total = 0;

    if (currentCustomizingProduct.sizes && currentCustomizingProduct.sizes[currentSelectedSizeIndex]) {
        total += currentCustomizingProduct.sizes[currentSelectedSizeIndex].price;
    } else if (currentCustomizingProduct.price) {
        total += currentCustomizingProduct.price;
    }

    currentCustomAdicionais.forEach(a => {
        total += a.price;
    });

    const totalEl = document.getElementById('modal-total-btn-price');
    if (totalEl) {
        totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

// Adicionar do Modal ao Carrinho
function addConfiguredProductToCart() {
    if (!currentCustomizingProduct) return;

    const selectedSize = currentCustomizingProduct.sizes ? currentCustomizingProduct.sizes[currentSelectedSizeIndex] : null;
    const basePrice = selectedSize ? selectedSize.price : (currentCustomizingProduct.price || 0);
    const addsTotal = currentCustomAdicionais.reduce((sum, a) => sum + a.price, 0);
    const unitPrice = basePrice + addsTotal;

    const obsInput = document.getElementById('modal-obs-input');
    const obs = obsInput ? obsInput.value.trim() : '';

    // Gerar Chave Única para o Item Configurado
    const cartItemId = `${currentCustomizingProduct.id}-${selectedSize ? selectedSize.name : 'std'}-${currentCustomAdicionais.map(a => a.id).sort().join('_')}-${obs}`;

    const existingCartItem = cart.find(item => item.cartItemId === cartItemId);

    if (existingCartItem) {
        existingCartItem.quantity += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            productId: currentCustomizingProduct.id,
            name: currentCustomizingProduct.name,
            sizeName: selectedSize ? selectedSize.name : null,
            basePrice: basePrice,
            adicionais: [...currentCustomAdicionais],
            obs: obs,
            unitPrice: unitPrice,
            quantity: 1,
            img: currentCustomizingProduct.img
        });
    }

    saveCartToStorage();
    updateCartUI();
    closeProductModal();
    showToast(`✓ ${currentCustomizingProduct.name} adicionado ao pedido!`);
}

// Manipulação do Carrinho
function updateCartQuantity(cartItemId, delta) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.cartItemId !== cartItemId);
    }

    saveCartToStorage();
    updateCartUI();
}

function removeCartItem(cartItemId) {
    cart = cart.filter(i => i.cartItemId !== cartItemId);
    saveCartToStorage();
    updateCartUI();
    showToast('Item removido do pedido.');
}

function askClearCart() {
    if (cart.length === 0) return;
    if (confirm('Deseja realmente limpar todos os itens do seu pedido?')) {
        cart = [];
        saveCartToStorage();
        updateCartUI();
        showToast('Pedido limpo com sucesso.');
    }
}

// Atualizar Interface do Carrinho (Drawer Claem Master)
function updateCartUI() {
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = cart.reduce((sum, i) => sum + (i.unitPrice * i.quantity), 0);
    const deliveryFee = orderType === 'delivery' ? selectedDeliveryFee : 0;
    const finalTotal = subtotal + deliveryFee;

    // Badges no Header
    const countBadge = document.getElementById('cart-count');
    const headerTotal = document.getElementById('cart-total-header');
    const clearBtnHeader = document.getElementById('cart-clear-header');

    if (countBadge) countBadge.textContent = totalCount;
    if (headerTotal) headerTotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (clearBtnHeader) clearBtnHeader.style.display = totalCount > 0 ? 'inline-flex' : 'none';

    // Itens no Drawer
    const itemsContainer = document.getElementById('cart-items-container');
    const emptyMsg = document.getElementById('cart-empty-msg');
    const footerSection = document.getElementById('cart-footer-section');

    if (cart.length === 0) {
        if (itemsContainer) itemsContainer.innerHTML = '';
        if (emptyMsg) emptyMsg.style.display = 'block';
        if (footerSection) footerSection.style.display = 'none';
        return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';
    if (footerSection) footerSection.style.display = 'block';

    if (itemsContainer) {
        itemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item-card">
                <div class="cart-item-img-wrap">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-header">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <button class="cart-remove-btn" onclick="removeCartItem('${item.cartItemId}')" aria-label="Remover item">
                            <i data-lucide="trash" style="width:14px; height:14px;"></i>
                        </button>
                    </div>
                    ${item.sizeName ? `<span class="cart-item-size-tag">${item.sizeName}</span>` : ''}
                    ${item.adicionais && item.adicionais.length > 0 ? `
                        <div class="cart-item-adds">
                            ${item.adicionais.map(a => `<span>+ ${a.name} (R$ ${a.price.toFixed(2).replace('.', ',')})</span>`).join('')}
                        </div>
                    ` : ''}
                    ${item.obs ? `<div class="cart-item-obs">Obs: "${item.obs}"</div>` : ''}
                    <div class="cart-item-bottom">
                        <div class="cart-qty-selector">
                            <button class="qty-btn" onclick="updateCartQuantity('${item.cartItemId}', -1)" aria-label="Diminuir quantidade">−</button>
                            <span class="qty-num">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartQuantity('${item.cartItemId}', 1)" aria-label="Aumentar quantidade">+</button>
                        </div>
                        <span class="cart-item-total-price">R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Totais no Drawer
    const subtotalEl = document.getElementById('cart-subtotal-val');
    const deliveryFeeEl = document.getElementById('cart-delivery-fee-val');
    const finalTotalEl = document.getElementById('cart-final-total-val');
    const pixTotalEl = document.getElementById('pix-amount-display');

    if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (deliveryFeeEl) {
        deliveryFeeEl.textContent = orderType === 'delivery' ? `R$ ${selectedDeliveryFee.toFixed(2).replace('.', ',')}` : 'Grátis (Balcão)';
    }
    if (finalTotalEl) finalTotalEl.textContent = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    if (pixTotalEl) pixTotalEl.textContent = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

    if (window.lucide) window.lucide.createIcons();
}

// Abrir e Fechar Gaveta do Carrinho
function openCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Tipo de Pedido: Delivery vs Retirada
function setOrderType(type) {
    orderType = type;
    const btnDelivery = document.getElementById('btn-type-delivery');
    const btnPickup = document.getElementById('btn-type-pickup');
    const deliverySection = document.getElementById('delivery-address-section');

    if (type === 'delivery') {
        if (btnDelivery) btnDelivery.classList.add('active');
        if (btnPickup) btnPickup.classList.remove('active');
        if (deliverySection) deliverySection.style.display = 'block';
    } else {
        if (btnPickup) btnPickup.classList.add('active');
        if (btnDelivery) btnDelivery.classList.remove('active');
        if (deliverySection) deliverySection.style.display = 'none';
    }

    updateCartUI();
}

// Renderizar Zonas de Entrega
function renderDeliveryZonesSelect() {
    const select = document.getElementById('delivery-zone-select');
    if (!select) return;

    select.innerHTML = DELIVERY_ZONES.map(z => `
        <option value="${z.fee}" data-zone="${z.neighborhood}">${z.neighborhood} (+ R$ ${z.fee.toFixed(2).replace('.', ',')})</option>
    `).join('');

    select.addEventListener('change', (e) => {
        selectedDeliveryFee = parseFloat(e.target.value);
        const selectedOption = e.target.options[e.target.selectedIndex];
        selectedDeliveryZoneName = selectedOption.getAttribute('data-zone');
        updateCartUI();
    });
}

// Forma de Pagamento
function setPaymentMethod(method) {
    paymentMethod = method;
    const methods = document.querySelectorAll('.payment-option-card');
    methods.forEach(m => {
        if (m.getAttribute('data-payment') === method) m.classList.add('selected');
        else m.classList.remove('selected');
    });

    const pixBox = document.getElementById('pix-payment-box');
    const moneyBox = document.getElementById('money-change-box');

    if (pixBox) pixBox.style.display = method === 'pix' ? 'block' : 'none';
    if (moneyBox) moneyBox.style.display = method === 'money' ? 'block' : 'none';
}

// Copiar Chave Pix
function copyPixKey() {
    navigator.clipboard.writeText(CHAVE_PIX_OFICIAL).then(() => {
        const btn = document.getElementById('btn-copy-pix');
        if (btn) {
            const originalText = btn.innerHTML;
            btn.style.background = '#10B981';
            btn.style.borderColor = '#10B981';
            btn.style.color = '#FFFFFF';
            btn.innerHTML = '<i data-lucide="check" style="width:16px;height:16px;"></i> <span>✓ Chave Pix Copiada!</span>';
            if (window.lucide) window.lucide.createIcons();

            setTimeout(() => {
                btn.style.background = '';
                btn.style.borderColor = '';
                btn.style.color = '';
                btn.innerHTML = originalText;
                if (window.lucide) window.lucide.createIcons();
            }, 2500);
        }
        showToast('Chave Pix copiada para a área de transferência!');
    }).catch(() => {
        prompt('Copie a chave Pix abaixo:', CHAVE_PIX_OFICIAL);
    });
}

// Finalizar Pedido e Despachar para WhatsApp
function checkoutOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio. Adicione itens antes de enviar o pedido.');
        return;
    }

    const nameInput = document.getElementById('cust-name');
    const customerName = nameInput ? nameInput.value.trim() : '';

    if (!customerName) {
        alert('Por favor, informe seu nome para identificarmos o pedido.');
        if (nameInput) nameInput.focus();
        return;
    }

    let customerAddress = '';
    let customerComplement = '';
    if (orderType === 'delivery') {
        const addrInput = document.getElementById('cust-address');
        const compInput = document.getElementById('cust-complement');
        customerAddress = addrInput ? addrInput.value.trim() : '';
        customerComplement = compInput ? compInput.value.trim() : '';

        if (!customerAddress) {
            alert('Por favor, informe o endereço completo com número e bairro para a entrega.');
            if (addrInput) addrInput.focus();
            return;
        }
    }

    let trocoInfo = '';
    if (paymentMethod === 'money') {
        const trocoInput = document.getElementById('cust-troco');
        const trocoVal = trocoInput ? trocoInput.value.trim() : '';
        trocoInfo = trocoVal ? `troco para R$ ${trocoVal}` : 'sem troco';
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.unitPrice * i.quantity), 0);
    const deliveryFee = orderType === 'delivery' ? selectedDeliveryFee : 0;
    const total = subtotal + deliveryFee;

    let msg = `${orderType === 'delivery' ? 'Entrega em domicílio' : 'Retirada no balcão'}

`;

    cart.forEach(item => {
        const itemSum = item.unitPrice * item.quantity;
        const size = (item.sizeName && item.sizeName !== 'Padrão') ? ` · ${item.sizeName}` : '';

        msg += `*${item.quantity}x* ${item.name}${size}
`;

        if (item.adicionais && item.adicionais.length > 0) {
            item.adicionais.forEach(a => {
                msg += `+ ${a.name}
`;
            });
        }
        if (item.obs) {
            msg += `_Obs: ${item.obs}_
`;
        }

        msg += `*R$ ${itemSum.toFixed(2).replace('.', ',')}*

`;
    });

    msg += `*Itens: R$ ${subtotal.toFixed(2).replace('.', ',')}*
`;
    if (orderType === 'delivery') {
        msg += deliveryFee > 0 ? `Entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')}
` : `Entrega a combinar
`;
        msg += `*Total: R$ ${total.toFixed(2).replace('.', ',')}*
`;
    } else {
        msg += `*Total: R$ ${subtotal.toFixed(2).replace('.', ',')}*
`;
    }
    msg += `
`;

    if (customerName) msg += `*${customerName}*
`;
    if (orderType === 'delivery' && customerAddress) {
        msg += `${customerAddress}${customerComplement ? ` (${customerComplement})` : ''}
`;
    }

    if (paymentMethod === 'pix') {
        msg += `Pagamento em Pix — combinamos a chave por aqui
`;
    } else if (paymentMethod === 'money') {
        msg += `Pagamento em dinheiro — ${trocoInfo || 'sem troco'}
`;
    } else {
        msg += `Pagamento no cartão — favor levar a maquininha
`;
    }

    msg += `
_Enviado pelo site da Larica's Pastelaria_`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
}

// Widget Flutuante de Proposta Onira Labs
function initScrollProposalWidget() {
    const widget = document.getElementById('onira-proposal-widget');
    if (!widget) return;

    if (localStorage.getItem('laricas_cta_onira') === 'dispensado') {
        return;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 280) {
            widget.classList.add('visible');
        } else {
            widget.classList.remove('visible');
        }
    });
}

function dismissOniraWidget(event) {
    if (event) event.stopPropagation();
    const widget = document.getElementById('onira-proposal-widget');
    if (widget) widget.classList.remove('visible');
    localStorage.setItem('laricas_cta_onira', 'dispensado');
}

// Toast Notifier
function showToast(message) {
    const container = document.getElementById('toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = 'toast-box';
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function createToastContainer() {
    const div = document.createElement('div');
    div.id = 'toast-container';
    div.className = 'toast-container';
    document.body.appendChild(div);
    return div;
}

// Persistência no LocalStorage
function saveCartToStorage() {
    localStorage.setItem('laricas_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem('laricas_cart');
        if (saved) {
            cart = JSON.parse(saved);
        }
    } catch (e) {
        cart = [];
    }
}

// Exportar funções globais para os handlers de eventos inline
window.handleSearch = handleSearch;
window.openProductCustomizer = openProductCustomizer;
window.closeProductModal = closeProductModal;
window.selectCustomSize = selectCustomSize;
window.toggleCustomAdicional = toggleCustomAdicional;
window.addConfiguredProductToCart = addConfiguredProductToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeCartItem = removeCartItem;
window.askClearCart = askClearCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.setOrderType = setOrderType;
window.setPaymentMethod = setPaymentMethod;
window.copyPixKey = copyPixKey;
window.checkoutOrder = checkoutOrder;
window.dismissOniraWidget = dismissOniraWidget;
