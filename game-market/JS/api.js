const API_URL = 'https://6ae9f3323d3dd3d37be5f2ef.mockapi.io/api/onlinestore/games'; 

export async function fetchGames() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Ошибка сервера');
        const data = await response.json();

        return data.map((game, index) => ({
            ...game,
            id: game.id || game._id || `fallback-id-${index}-${Date.now()}`
        }));
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        return [];
    }
}

export async function addGameAPI(gameData) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gameData)
        });
        const created = await response.json();
        return {
            ...created,
            id: created.id || created._id || `fallback-id-${Date.now()}`
        };
    } catch (error) {
        console.error('Ошибка добавления:', error);
    }
}

export async function deleteGameAPI(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    } catch (error) {
        console.error('Ошибка удаления:', error);
        return false;
    }
}


export async function updateGameAPI(id, gameData) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gameData)
        });
        if (!response.ok) throw new Error('Ошибка обновления');
        return await response.json();
    } catch (error) {
        console.error('Ошибка редактирования:', error);
        return null;
    }
}