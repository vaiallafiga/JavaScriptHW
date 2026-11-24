import { getFavorites, toggleFavorite } from './favorites.js';
import { addToCart } from './cart.js';

export function renderGames(games, onDelete, onEdit, onUpdateFavs) {
    const gridEl = document.getElementById('games-grid');
    gridEl.innerHTML = '';

    if (games.length === 0) {
        gridEl.innerHTML = '<p style="text-align: center; grid-column: span 3;">Игры не найдены</p>';
        return;
    }

    const favorites = getFavorites();

    games.forEach(game => {
        const gameId = String(game.id);
        const isFav = favorites.includes(gameId);

        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div>
                <img src="${escapeHtml(game.image || 'https://via.placeholder.com/300x140?text=No+Image')}" alt="${escapeHtml(game.title)}">
                <h4>${escapeHtml(game.title)}</h4>
                <p><b>Жанр:</b> ${escapeHtml(game.genre)}</p>
                <p><b>Цена:</b> ${game.price} ₸</p>
                <p><b>Рейтинг:</b> ⭐ ${game.rating}</p>
            </div>
            <div>
                <div class="card-buttons">
                    <button class="action-btn cart-btn add-cart-btn">В корзину</button>
                    <button class="action-btn fav-btn toggle-fav-btn ${isFav ? 'active' : ''}">${isFav ? '❤️' : '🤍'}</button>
                </div>
                <div class="card-actions">
                    <button class="edit-btn">Изменить</button>
                    <button class="delete-btn">Удалить</button>
                </div>
            </div>
        `;

        card.querySelector('.delete-btn').addEventListener('click', () => {
            onDelete(game.id);
        });

        card.querySelector('.edit-btn').addEventListener('click', () => {
            onEdit(game);
        });

        card.querySelector('.toggle-fav-btn').addEventListener('click', () => {
            toggleFavorite(game.id);
            onUpdateFavs();
        });

        card.querySelector('.add-cart-btn').addEventListener('click', () => {
            addToCart(game);
        });

        gridEl.appendChild(card);
    });
}

export function renderFavoritesTab(allGames, onUpdateFavs) {
    const gridEl = document.getElementById('favorites-grid');
    gridEl.innerHTML = '';

    const favorites = getFavorites();
    const favGames = allGames.filter(game => favorites.includes(String(game.id)));

    if (favGames.length === 0) {
        gridEl.innerHTML = '<p style="text-align: center; grid-column: span 3; color: #7f8c8d;">В избранном пока ничего нет</p>';
        return;
    }

    favGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div>
                <img src="${escapeHtml(game.image || 'https://via.placeholder.com/300x140?text=No+Image')}" alt="${escapeHtml(game.title)}">
                <h4>${escapeHtml(game.title)}</h4>
                <p><b>Жанр:</b> ${escapeHtml(game.genre)}</p>
                <p><b>Цена:</b> ${game.price} ₸</p>
                <p><b>Рейтинг:</b> ⭐ ${game.rating}</p>
            </div>
            <div>
                <div class="card-buttons">
                    <button class="action-btn cart-btn add-cart-btn">В корзину</button>
                    <button class="action-btn fav-btn toggle-fav-btn active">❤️</button>
                </div>
            </div>
        `;

        card.querySelector('.toggle-fav-btn').addEventListener('click', () => {
            toggleFavorite(game.id);
            onUpdateFavs();
        });

        card.querySelector('.add-cart-btn').addEventListener('click', () => {
            addToCart(game);
        });

        gridEl.appendChild(card);
    });
}

function escapeHtml(text) {
    if (!text) return '';
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}