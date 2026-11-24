import { getProducts } from './api.js';
import { addToCart } from './cart.js';
import { getFavorites } from './favorites.js';

let allProducts = [];

export async function initCatalog() {
    allProducts = await getProducts();
    renderCatalog(allProducts);

    // Поиск
    document.getElementById('search-input').addEventListener('input', (e) => {
        filterAndRender();
    });

    // Фильтрация по цене
    document.getElementById('apply-filters').addEventListener('click', () => {
        filterAndRender();
    });
}

function filterAndRender() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const minPrice = Number(document.getElementById('price-min').value) || 0;
    const maxPrice = Number(document.getElementById('price-max').value) || Infinity;

    const filtered = allProducts.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(query);
        const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
        return matchesQuery && matchesPrice;
    });

    renderCatalog(filtered);
}

export function renderCatalog(products) {
    const grid = document.getElementById('catalog-list');
    const favorites = getFavorites();
    grid.innerHTML = '';

    if (products.length === 0) {
        grid.innerHTML = '<p>Ничего не найдено</p>';
        return;
    }

    products.forEach(product => {
        const isFav = favorites.includes(product.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">${product.price.toLocaleString()} ₸</p>
            <div class="card-actions">
                <button class="buy-btn" onclick="window.handleAddToCart('${product.id}')">В корзину</button>
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="window.toggleFavorite('${product.id}')">
                    ${isFav ? '❤️' : '🤍'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Экспортируем функцию добавления в корзину для глобального вызова из HTML сгенерированных карточек
window.handleAddToCart = function(id) {
    const product = allProducts.find(p => p.id === id);
    if (product) {
        addToCart(product);
        alert('Товар добавлен в корзину!');
    }
}