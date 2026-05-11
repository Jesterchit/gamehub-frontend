document.addEventListener('DOMContentLoaded', () => {

    window.gamesData = [
        {
        id: 1,
        title: 'Cyberpunk 2077',
        genre: 'rpg',
        platforms: ['pc', 'xbox', 'playstation'],
        price: 1999,
        developer: 'CD PROJEKT RED',
        publisher: 'CD PROJEKT RED',
        releaseDate: '2020-12-10',
        rating: 8.5,
        description: 'Ролевая игра с открытым миром, действие которой разворачивается в Найт-Сити.',
        image: 'https://placehold.co/600x350/7C3AED/ffffff?text=Cyberpunk+2077',
        minRequirements: {
            os: '64-bit Windows 10',
            processor: 'Intel Core i5-3570K или AMD FX-8310',
            ram: '8 GB',
            gpu: 'NVIDIA GeForce GTX 970 или AMD Radeon RX 470',
            storage: '70 GB SSD'
        },
        recRequirements: {
            os: '64-bit Windows 10',
            processor: 'Intel Core i7-4790 или AMD Ryzen 3 3200G',
            ram: '12 GB',
            gpu: 'NVIDIA GeForce GTX 1060 6GB',
            storage: '70 GB SSD'
        }
    },
    {
        id: 2,
        title: 'Elden Ring',
        genre: 'rpg',
        platforms: ['pc', 'xbox', 'playstation'],
        price: 2499,
        developer: 'FromSoftware',
        publisher: 'Bandai Namco',
        releaseDate: '2022-02-25',
        rating: 9.5,
        description: 'Ролевая игра в жанре тёмного фэнтези.',
        image: 'https://placehold.co/600x350/F59E0B/000000?text=Elden+Ring',
        minRequirements: {
            os: 'Windows 10',
            processor: 'Intel Core i5-8400',
            ram: '12 GB',
            gpu: 'NVIDIA GeForce GTX 1060 3GB',
            storage: '60 GB'
        },
        recRequirements: {
            os: 'Windows 11',
            processor: 'Intel Core i7-8700K',
            ram: '16 GB',
            gpu: 'NVIDIA GeForce GTX 1070 8GB',
            storage: '60 GB SSD'
        }
    },
    {
        id: 3,
        title: 'Counter-Strike 2',
        genre: 'shooter',
        platforms: ['pc'],
        price: 0,
        developer: 'Valve',
        publisher: 'Valve',
        releaseDate: '2023-09-27',
        rating: 8.0,
        description: 'Бесплатный тактический шутер от Valve.',
        image: 'https://placehold.co/600x350/EF4444/ffffff?text=Counter+Strike+2',
        minRequirements: {
            os: 'Windows 10',
            processor: 'Intel Core i5-750',
            ram: '8 GB',
            gpu: 'NVIDIA GeForce GTX 650',
            storage: '85 GB'
        },
        recRequirements: {
            os: 'Windows 11',
            processor: 'Intel Core i5-2400',
            ram: '16 GB',
            gpu: 'NVIDIA GeForce GTX 1060',
            storage: '85 GB SSD'
        }
    },
    {
        id: 4,
        title: 'Baldur\'s Gate 3',
        genre: 'rpg',
        platforms: ['pc', 'playstation', 'xbox'],
        price: 1999,
        developer: 'Larian Studios',
        publisher: 'Larian Studios',
        releaseDate: '2023-08-03',
        rating: 9.8,
        description: 'Ролевая игра по правилам Dungeons & Dragons.',
        image: 'https://placehold.co/600x350/10B981/ffffff?text=Baldurs+Gate+3',
        minRequirements: {
            os: 'Windows 10 64-bit',
            processor: 'Intel Core i5-4690',
            ram: '8 GB',
            gpu: 'NVIDIA GeForce GTX 970',
            storage: '150 GB SSD'
        },
        recRequirements: {
            os: 'Windows 10 64-bit',
            processor: 'Intel Core i7-8700K',
            ram: '16 GB',
            gpu: 'NVIDIA GeForce RTX 2060 Super',
            storage: '150 GB SSD'
        }
    },
    {
        id: 5,
        title: 'Civilization VI',
        genre: 'strategy',
        platforms: ['pc', 'nintendo', 'xbox', 'playstation'],
        price: 1499,
        developer: 'Firaxis Games',
        publisher: '2K Games',
        releaseDate: '2016-10-21',
        rating: 8.7,
        description: 'Пошаговая стратегия о построении империи.',
        image: 'https://placehold.co/600x350/3B82F6/ffffff?text=Civilization+VI',
        minRequirements: {
            os: 'Windows 7 64-bit',
            processor: 'Intel Core i3 2.5 GHz',
            ram: '4 GB',
            gpu: 'AMD Radeon HD 5570',
            storage: '17 GB'
        },
        recRequirements: {
            os: 'Windows 10 64-bit',
            processor: 'Intel Core i5 2.5 GHz',
            ram: '8 GB',
            gpu: 'AMD Radeon R9 380',
            storage: '17 GB SSD'
        }
    },
    {
        id: 6,
        title: 'The Legend of Zelda: TotK',
        genre: 'adventure',
        platforms: ['nintendo'],
        price: 3999,
        developer: 'Nintendo',
        publisher: 'Nintendo',
        releaseDate: '2023-05-12',
        rating: 9.7,
        description: 'Приключения Линка в королевстве Хайрул.',
        image: 'https://placehold.co/600x350/F59E0B/000000?text=Zelda+TOTK',
        minRequirements: {
            os: 'Nintendo Switch',
            processor: '—',
            ram: '—',
            gpu: '—',
            storage: '16 GB'
        },
        recRequirements: {
            os: 'Nintendo Switch OLED',
            processor: '—',
            ram: '—',
            gpu: '—',
            storage: '16 GB'
        }
    },
    {
        id: 7,
        title: 'FIFA 24',
        genre: 'sports',
        platforms: ['pc', 'xbox', 'playstation'],
        price: 2999,
        developer: 'EA Sports',
        publisher: 'Electronic Arts',
        releaseDate: '2023-09-29',
        rating: 7.5,
        description: 'Футбольный симулятор с лицензированными командами.',
        image: 'https://placehold.co/600x350/06B6D4/ffffff?text=FIFA+24',
        minRequirements: {
            os: 'Windows 10 64-bit',
            processor: 'Intel Core i5-6600K',
            ram: '8 GB',
            gpu: 'NVIDIA GeForce GTX 1050 Ti',
            storage: '100 GB'
        },
        recRequirements: {
            os: 'Windows 11 64-bit',
            processor: 'Intel Core i7-6700',
            ram: '12 GB',
            gpu: 'NVIDIA GeForce GTX 1660',
            storage: '100 GB SSD'
        }
    },
    {
        id: 8,
        title: 'Resident Evil 4 Remake',
        genre: 'horror',
        platforms: ['pc', 'xbox', 'playstation'],
        price: 2499,
        developer: 'Capcom',
        publisher: 'Capcom',
        releaseDate: '2023-03-24',
        rating: 9.2,
        description: 'Ремейк культового хоррора про Леона Кеннеди.',
        image: 'https://placehold.co/600x350/DC2626/ffffff?text=Resident+Evil+4',
        minRequirements: {
            os: 'Windows 10 64-bit',
            processor: 'Intel Core i5-7500',
            ram: '8 GB',
            gpu: 'NVIDIA GeForce GTX 1050 Ti',
            storage: '50 GB'
        },
        recRequirements: {
            os: 'Windows 11 64-bit',
            processor: 'Intel Core i7-8700',
            ram: '16 GB',
            gpu: 'NVIDIA GeForce RTX 2060',
            storage: '50 GB SSD'
        }
    }
    ];

    function getLibrary() {
        const stored = localStorage.getItem('gamehub_library');
        return stored ? JSON.parse(stored) : [];
    }

    function saveLibrary(library) {
        localStorage.setItem('gamehub_library', JSON.stringify(library));
    }

    function addToLibrary(gameId) {
        const library = getLibrary();
        if (!library.find(item => item.gameId === gameId)) {
            library.push({
                gameId: gameId,
                addedAt: new Date().toISOString()
            });
            saveLibrary(library);
            return true;
        }
        return false;
    }

    function removeFromLibrary(gameId) {
        let library = getLibrary();
        library = library.filter(item => item.gameId !== gameId);
        saveLibrary(library);
    }

    function isGameInLibrary(gameId) {
        const library = getLibrary();
        return library.some(item => item.gameId === gameId);
    }

    const catalogGrid = document.getElementById('catalog-grid');
    if (catalogGrid) {
        const searchInput = document.getElementById('catalog-search');
        const sortSelect = document.getElementById('sort-select');
        const applyFiltersBtn = document.getElementById('apply-filters-btn');
        const resetFiltersBtn = document.getElementById('reset-filters-btn');
        const catalogCount = document.getElementById('catalog-count');
        const noResults = document.getElementById('no-results');

        function getActiveFilters() {
            const activeGenres = [];
            const activePlatforms = [];
            let activePrice = 'all';

            document.querySelectorAll('#genre-filters input:checked').forEach(cb => {
                activeGenres.push(cb.value);
            });
            document.querySelectorAll('#platform-filters input:checked').forEach(cb => {
                activePlatforms.push(cb.value);
            });
            const priceRadio = document.querySelector('input[name="price"]:checked');
            if (priceRadio) {
                activePrice = priceRadio.value;
            }

            return { genres: activeGenres, platforms: activePlatforms, price: activePrice };
        }

        function filterGames(searchQuery = '', filters = null) {
            if (!filters) {
                filters = getActiveFilters();
            }

            let filtered = [...gamesData];

            // Поиск по названию
            if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase().trim();
                filtered = filtered.filter(game =>
                    game.title.toLowerCase().includes(query)
                );
            }

            // Фильтр по жанрам
            if (filters.genres.length > 0) {
                filtered = filtered.filter(game =>
                    filters.genres.includes(game.genre)
                );
            }

            // Фильтр по платформам
            if (filters.platforms.length > 0) {
                filtered = filtered.filter(game =>
                    game.platforms.some(plat => filters.platforms.includes(plat))
                );
            }

            // Фильтр по цене
            switch (filters.price) {
                case 'free':
                    filtered = filtered.filter(game => game.price === 0);
                    break;
                case 'under1000':
                    filtered = filtered.filter(game => game.price > 0 && game.price < 1000);
                    break;
                case '1000-2000':
                    filtered = filtered.filter(game => game.price >= 1000 && game.price <= 2000);
                    break;
                case 'above2000':
                    filtered = filtered.filter(game => game.price > 2000);
                    break;
                default:
                    break;
            }

            return filtered;
        }

        function sortGames(games, sortType) {
            const sorted = [...games];
            switch (sortType) {
                case 'name-asc':
                    sorted.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'name-desc':
                    sorted.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 'price-asc':
                    sorted.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    sorted.sort((a, b) => b.price - a.price);
                    break;
                default:
                    break;
            }
            return sorted;
        }

        function renderCatalog(games) {
            catalogGrid.innerHTML = '';

            if (games.length === 0) {
                catalogGrid.style.display = 'none';
                noResults.style.display = 'block';
                catalogCount.textContent = 'Игр найдено: 0';
            } else {
                catalogGrid.style.display = 'grid';
                noResults.style.display = 'none';
                catalogCount.textContent = `Игр найдено: ${games.length}`;

                games.forEach(game => {
                    const card = document.createElement('div');
                    card.className = 'game-card fade-in';
                    card.setAttribute('data-id', game.id);

                    const inLibrary = isGameInLibrary(game.id);

                    card.innerHTML = `
                        <div class="game-card__image">
                            ${game.image
                                ? `<img src="${game.image}" alt="${game.title}">`
                                : `<div class="image-placeholder">&#127918;</div>`
                            }
                        </div>
                        <div class="game-card__body">
                            <h3 class="game-card__title">${game.title}</h3>
                            <p class="game-card__meta">${game.developer}</p>
                            <div class="game-card__tags">
                                <span class="tag">${getGenreLabel(game.genre)}</span>
                                ${game.platforms.slice(0, 2).map(p => `<span class="tag">${getPlatformLabel(p)}</span>`).join('')}
                            </div>
                            <div class="game-card__actions">
                                <span class="game-card__price">
                                    ${game.price === 0 ? 'Бесплатно' : game.price + ' ₽'}
                                </span>
                                ${inLibrary
                                    ? '<span style="color: var(--success); font-size: 0.8rem;">✓ В библиотеке</span>'
                                    : '<button class="btn-primary btn-sm add-to-lib-btn" data-id="' + game.id + '">+ В библиотеку</button>'
                                }
                            </div>
                        </div>
                    `;

                    card.addEventListener('click', function (e) {
                        if (!e.target.classList.contains('add-to-lib-btn')) {
                            window.location.href = 'game.html?id=' + game.id;
                        }
                    });

                    catalogGrid.appendChild(card);
                });

                document.querySelectorAll('.add-to-lib-btn').forEach(btn => {
                    btn.addEventListener('click', function (e) {
                        e.stopPropagation();
                        const gameId = parseInt(this.getAttribute('data-id'));
                        const added = addToLibrary(gameId);
                        if (added) {
                            this.textContent = '✓ Добавлено';
                            this.style.backgroundColor = 'var(--success)';
                            this.disabled = true;
                            setTimeout(() => {
                                updateCatalogDisplay();
                            }, 800);
                        }
                    });
                });
            }
        }

        function updateCatalogDisplay() {
            const searchQuery = searchInput ? searchInput.value : '';
            const filters = getActiveFilters();
            let filteredGames = filterGames(searchQuery, filters);
            const sortType = sortSelect ? sortSelect.value : 'default';
            filteredGames = sortGames(filteredGames, sortType);
            renderCatalog(filteredGames);
        }

        if (searchInput) {
            searchInput.addEventListener('input', updateCatalogDisplay);
        }

        if (sortSelect) {
            sortSelect.addEventListener('change', updateCatalogDisplay);
        }

        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', updateCatalogDisplay);
        }

        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', function () {
                document.querySelectorAll('#genre-filters input').forEach(cb => cb.checked = false);
                document.querySelectorAll('#platform-filters input').forEach(cb => cb.checked = false);
                const priceAll = document.querySelector('input[name="price"][value="all"]');
                if (priceAll) priceAll.checked = true;
                if (searchInput) searchInput.value = '';
                if (sortSelect) sortSelect.value = 'default';
                updateCatalogDisplay();
            });
        }

        renderCatalog(gamesData);
        catalogCount.textContent = `Игр найдено: ${gamesData.length}`;
    }

    const libraryContent = document.getElementById('library-content');
    if (libraryContent) {
        const librarySearch = document.getElementById('library-search');
        const librarySort = document.getElementById('library-sort');
        const libraryCount = document.getElementById('library-count');
        const emptyLibrary = document.getElementById('empty-library');

        function renderLibrary() {
            const library = getLibrary();
            const searchQuery = librarySearch ? librarySearch.value.toLowerCase().trim() : '';
            const sortType = librarySort ? librarySort.value : 'default';

            let libraryGames = library.map(item => {
                const game = gamesData.find(g => g.id === item.gameId);
                return { ...game, addedAt: item.addedAt };
            }).filter(game => game !== undefined);

            if (searchQuery !== '') {
                libraryGames = libraryGames.filter(game =>
                    game.title.toLowerCase().includes(searchQuery)
                );
            }

            switch (sortType) {
                case 'name-asc':
                    libraryGames.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'name-desc':
                    libraryGames.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                default:
                    libraryGames.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
                    break;
            }

            if (libraryCount) {
                libraryCount.textContent = library.length;
            }

            if (libraryGames.length === 0) {
                libraryContent.innerHTML = '';
                if (emptyLibrary) emptyLibrary.style.display = 'block';
            } else {
                if (emptyLibrary) emptyLibrary.style.display = 'none';
                libraryContent.innerHTML = '<div class="library-grid" id="library-grid"></div>';
                const libraryGrid = document.getElementById('library-grid');

                libraryGames.forEach(game => {
                    const card = document.createElement('div');
                    card.className = 'library-card fade-in';

                    const addedDate = game.addedAt
                        ? new Date(game.addedAt).toLocaleDateString('ru-RU')
                        : 'Неизвестно';

                    card.innerHTML = `
                        <div class="game-card__image">
                            ${game.image
                                ? `<img src="${game.image}" alt="${game.title}">`
                                : `<div class="image-placeholder">&#127918;</div>`
                            }
                        </div>
                        <div class="library-card__body">
                            <h3 class="library-card__title">${game.title}</h3>
                            <p class="library-card__meta">${game.developer} &middot; ${getGenreLabel(game.genre)}</p>
                            <div class="library-card__footer">
                                <span class="library-card__added">Добавлено: ${addedDate}</span>
                                <button class="btn-danger btn-sm remove-from-lib-btn" data-id="${game.id}">
                                    Удалить
                                </button>
                            </div>
                        </div>
                    `;

                    libraryGrid.appendChild(card);
                });

                document.querySelectorAll('.remove-from-lib-btn').forEach(btn => {
                    btn.addEventListener('click', function () {
                        const gameId = parseInt(this.getAttribute('data-id'));
                        removeFromLibrary(gameId);
                        renderLibrary();
                    });
                });
            }
        }

        if (librarySearch) {
            librarySearch.addEventListener('input', renderLibrary);
        }

        if (librarySort) {
            librarySort.addEventListener('change', renderLibrary);
        }

        renderLibrary();
    }

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.getAttribute('data-tab');

                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(tc => tc.classList.remove('active'));

                tab.classList.add('active');
                const activeContent = document.getElementById(targetTab + '-req');
                if (activeContent) {
                    activeContent.classList.add('active');
                }
            });
        });
    }

    const addToLibBtn = document.getElementById('add-to-library-btn');
    if (addToLibBtn) {
        const urlParams = new URLSearchParams(window.location.search);
        const gameId = parseInt(urlParams.get('id'));

        if (gameId && isGameInLibrary(gameId)) {
            addToLibBtn.textContent = '✓ Уже в библиотеке';
            addToLibBtn.style.backgroundColor = 'var(--success)';
            addToLibBtn.disabled = true;
        }

        addToLibBtn.addEventListener('click', function () {
            if (gameId) {
                const added = addToLibrary(gameId);
                if (added) {
                    this.textContent = '✓ Добавлено';
                    this.style.backgroundColor = 'var(--success)';
                    this.disabled = true;
                } else {
                    alert('Эта игра уже есть в вашей библиотеке!');
                }
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const emailError = document.getElementById('email-error');
            const passwordError = document.getElementById('password-error');
            let isValid = true;

            // Скрываем ошибки
            if (emailError) emailError.style.display = 'none';
            if (passwordError) passwordError.style.display = 'none';

            if (!email.includes('@') || !email.includes('.')) {
                if (emailError) {
                    emailError.textContent = 'Введите корректный email.';
                    emailError.style.display = 'block';
                }
                isValid = false;
            }

            if (password.length < 6) {
                if (passwordError) {
                    passwordError.textContent = 'Пароль должен быть не менее 6 символов.';
                    passwordError.style.display = 'block';
                }
                isValid = false;
            }

            if (isValid) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'dashboard.html';
            }
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const confirm = document.getElementById('reg-confirm').value;
            const emailError = document.getElementById('reg-email-error');
            const passwordError = document.getElementById('reg-password-error');
            const confirmError = document.getElementById('reg-confirm-error');
            let isValid = true;

            if (emailError) emailError.style.display = 'none';
            if (passwordError) passwordError.style.display = 'none';
            if (confirmError) confirmError.style.display = 'none';

            if (!email.includes('@') || !email.includes('.')) {
                if (emailError) {
                    emailError.textContent = 'Введите корректный email.';
                    emailError.style.display = 'block';
                }
                isValid = false;
            }

            if (password.length < 6) {
                if (passwordError) {
                    passwordError.textContent = 'Пароль должен быть не менее 6 символов.';
                    passwordError.style.display = 'block';
                }
                isValid = false;
            }

            if (password !== confirm) {
                if (confirmError) {
                    confirmError.textContent = 'Пароли не совпадают.';
                    confirmError.style.display = 'block';
                }
                isValid = false;
            }

            if (isValid) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'dashboard.html';
            }
        });
    }

    function getGenreLabel(genre) {
        const labels = {
            'rpg': 'RPG',
            'action': 'Экшен',
            'shooter': 'Шутер',
            'strategy': 'Стратегия',
            'adventure': 'Приключения',
            'simulation': 'Симулятор',
            'sports': 'Спорт',
            'horror': 'Хоррор'
        };
        return labels[genre] || genre;
    }

    function getPlatformLabel(platform) {
        const labels = {
            'pc': 'PC',
            'xbox': 'Xbox',
            'playstation': 'PS',
            'nintendo': 'Switch'
        };
        return labels[platform] || platform;
    }

});