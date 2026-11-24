import { updateFavCounter } from './favorites.js';

let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function initCart() {
    updateCartUI();

    document.getElementById('clear-cart-btn').addEventListener('click', () => {
        cart = [];
        saveAndRender();
    });

    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Корзина пуста!');
            return;
        }
        modal.style.display = 'flex';
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    document.getElementById('payment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🎉 Оплата прошла успешно! Спасибо за покупку.');
        cart = [];
        saveAndRender();
        modal.style.display = 'none';
    });
}

export function addToCart(product) {

    const productId = product.id || product._id;

    if (!productId) {
        alert('Ошибка: у этого товара нет ID! Проверьте данные из MockAPI.');
        console.error('Проблемный объект товара:', product);
        return;
    }

    const stringId = String(productId);
    const existing = cart.find(item => String(item.id) === stringId);

    if (!existing) {

        cart.push({ ...product, id: stringId });
        saveAndRender();
        alert(`Игра "${product.title}" добавлена в корзину!`);
    } else {
        alert('Эта игра уже есть в корзине.');
    }
}

export function removeFromCart(id) {
    const stringId = String(id);
    cart = cart.filter(item => String(item.id) !== stringId);
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

export function updateCartUI() {
    const listEl = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');

    if (!listEl) return;

    listEl.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        listEl.innerHTML = '<p style="text-align: center; color: #7f8c8d;">Корзина пуста</p>';
        totalEl.textContent = '0';
        countEl.textContent = '0';
        return;
    }

    cart.forEach(item => {
        total += Number(item.price);

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <h4>${item.title}</h4>
                <p><b>Цена:</b> ${item.price} ₸</p>
            </div>
            <button class="danger-btn remove-item-btn" data-id="${item.id}">Удалить</button>
        `;

        div.querySelector('.remove-item-btn').addEventListener('click', () => {
            removeFromCart(item.id);
        });

        listEl.appendChild(div);
    });

    totalEl.textContent = total.toLocaleString();
    countEl.textContent = cart.length;
}