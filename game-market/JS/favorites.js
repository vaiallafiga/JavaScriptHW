let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export function getFavorites() {
    return favorites;
}

export function toggleFavorite(id) {
    if (!id) return;
    const stringId = String(id);

    if (favorites.includes(stringId)) {
        favorites = favorites.filter(favId => favId !== stringId);
    } else {
        favorites.push(stringId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavCounter();
}

export function updateFavCounter() {
    const countEl = document.getElementById('fav-count');
    if (countEl) {
        countEl.textContent = favorites.length;
    }
}