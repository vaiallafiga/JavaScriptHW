import { fetchGames, addGameAPI, updateGameAPI, deleteGameAPI } from './api.js';
import { renderGames, renderFavoritesTab } from './ui.js';
import { updateFavCounter } from './favorites.js';
import { initCart } from './cart.js';

let gamesCache = [];
let editingGameId = null;

document.addEventListener('DOMContentLoaded', async () => {
    const loadingEl = document.getElementById('loading');
    const searchInput = document.getElementById('search-input');
    const gameForm = document.getElementById('game-form');
    const themeToggleBtn = document.getElementById('theme-toggle');

    updateFavCounter();
    initCart();

    // Тема
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Поиск
    searchInput.value = localStorage.getItem('searchQuery') || '';

    searchInput.addEventListener('input', (e) => {
        localStorage.setItem('searchQuery', e.target.value.trim());
        filterAndRender();
    });

    // Вкладки
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetSection = document.getElementById(`tab-${tabName}`);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            if (tabName === 'favorites') {
                renderFavoritesTab(gamesCache, refreshAllViews);
            }
        });
    });

    // Форма добавления / редактирования
    gameForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const gameData = {
            title: document.getElementById('title').value.trim(),
            genre: document.getElementById('genre').value.trim(),
            price: Number(document.getElementById('price').value),
            rating: Number(document.getElementById('rating').value),
            image: document.getElementById('image').value.trim()
        };

        loadingEl.style.display = 'block';

        if (editingGameId) {
            const updated = await updateGameAPI(editingGameId, gameData);
            if (updated) {
                const index = gamesCache.findIndex(g => String(g.id) === String(editingGameId));
                if (index !== -1) gamesCache[index] = updated;
                resetFormState();
                refreshAllViews();
            }
        } else {
            const createdGame = await addGameAPI(gameData);
            if (createdGame && (createdGame.id || createdGame._id)) {
                gamesCache.push(createdGame);
                gameForm.reset();
                refreshAllViews();
            } else {
                gamesCache = await fetchGames();
                gameForm.reset();
                refreshAllViews();
            }
        }
        loadingEl.style.display = 'none';
    });

    // Загрузка игр
    loadingEl.style.display = 'block';
    gamesCache = await fetchGames();
    loadingEl.style.display = 'none';

    refreshAllViews();
});

function filterAndRender() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = gamesCache.filter(g => g.title && g.title.toLowerCase().includes(query));

    renderGames(filtered, handleDelete, handleEdit, refreshAllViews);
}

async function handleDelete(id) {
    if (confirm('Удалить эту игру из каталога?')) {
        const success = await deleteGameAPI(id);
        if (success) {
            gamesCache = gamesCache.filter(g => String(g.id) !== String(id));
            refreshAllViews();
        }
    }
}

function handleEdit(game) {
    editingGameId = game.id;
    document.getElementById('title').value = game.title;
    document.getElementById('genre').value = game.genre;
    document.getElementById('price').value = game.price;
    document.getElementById('rating').value = game.rating;
    document.getElementById('image').value = game.image;

    const submitBtn = document.querySelector('#game-form button[type="submit"]');
    submitBtn.textContent = 'Сохранить изменения';
    submitBtn.style.background = '#e67e22';

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetFormState() {
    editingGameId = null;
    document.getElementById('game-form').reset();
    const submitBtn = document.querySelector('#game-form button[type="submit"]');
    submitBtn.textContent = 'Добавить игру';
    submitBtn.style.background = '';
}

// Перерисовывает и каталог, и избранное
function refreshAllViews() {
    filterAndRender();
    renderFavoritesTab(gamesCache, refreshAllViews);
}