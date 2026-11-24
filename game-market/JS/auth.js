let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

export function initAuth(onAuthChange) {
    const authBtn = document.getElementById('auth-btn');
    const modal = document.getElementById('auth-modal');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('auth-form');
    const toggleText = document.getElementById('toggle-auth-mode');
    const modalTitle = document.getElementById('modal-title');
    
    let isRegister = false;

    updateUI();

    authBtn.addEventListener('click', () => {
        if (currentUser) {
            if (confirm(`Выйти из аккаунта (${currentUser.email})?`)) {
                currentUser = null;
                localStorage.removeItem('currentUser');
                updateUI();
                onAuthChange();
            }
        } else {
            modal.style.display = 'flex';
        }
    });

    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    toggleText.addEventListener('click', () => {
        isRegister = !isRegister;
        modalTitle.textContent = isRegister ? 'Регистрация аккаунта' : 'Вход в аккаунт';
        document.getElementById('auth-submit').textContent = isRegister ? 'Зарегистрироваться' : 'Войти';
        toggleText.textContent = isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email').value;
        
        // Эмуляция успешного входа/регистрации с бонусами
        currentUser = { email, bonuses: isRegister ? 500 : 150 }; // 500 бонусов при регистрации!
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        modal.style.display = 'none';
        updateUI();
        onAuthChange();
        alert(`Добро пожаловать! Вам начислено бонусов: ${currentUser.bonuses}`);
    });

    function updateUI() {
        if (currentUser) {
            authBtn.textContent = `${currentUser.email.split('@')[0]} (🎁 ${currentUser.bonuses})`;
        } else {
            authBtn.textContent = 'Войти';
        }
    }
}

export function getCurrentUser() {
    return currentUser;
}