![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/shahmen2088/astone-project/ci-cd.yaml)
[![Maintainability](https://api.codeclimate.com/v1/badges/36397110a41e3c7148a5/maintainability)](https://codeclimate.com/github/shahmen2088/astone-project/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/36397110a41e3c7148a5/test_coverage)](https://codeclimate.com/github/shahmen2088/astone-project/test_coverage)

# Bookstore

- Проект представляет собой галерею книг
- Использованное API: [Books API](https://developers.google.com/books?hl=en)

---

## Основной функционал

- Регистрация и авторизация пользователей
- Избранные карточки: пользователь может добавлять или удалять из списка избранных
- Поиск по названию, выпадающее меню из карточек
- История поиска: сохранение даты и названия карточки, возможность перейти на страницу поиска после нажатия на название карточки или дату

---

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

- [ ] Реализованы Требования к функциональности
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется LocalStorage.

#### React

- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми
- [ ] Есть разделение на умные и глупые компоненты: [Умный](), [Глупый]()
- [x] Есть рендеринг списков: [Main](src/pages/MainPage/MainPage.tsx), [SearchList](src/features/SearchList/SearchList.tsx)
- [x] Реализована хотя бы одна форма: [Form](src/components/UserLoginForm/UserLoginForm.tsx)
- [x] Есть применение Контекст API: [ThemeContextMode](src/shared/contextTheme/ThemeContextMode.tsx) [App](src/app/App.tsx)
- [x] Есть применение предохранителя: [ErrorBoundary](src/app/router/app-router.tsx)
- [x] Есть хотя бы один кастомный хук: [useAuth](src/shared/hook/useAuth.ts)
- [x] Хотя бы несколько компонентов используют PropTypes: [Card](src/entities/Card/Card.tsx) [SerchList](src/features/SearchList/SearchList.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (debounce): [useDebounce](src/shared/hook/useDebounce.tsx), [Search](src/features/Search/Search.tsx)
- [x] Есть применение lazy + Suspense: [AppRouter](src/app/router/app-router.tsx)

#### Redux

- [x] Используем Modern Redux with Redux Toolkit: [store](src/app/providers/store/store.ts)
- [x] Используем слайсы: [userSlice](src/shared/reducers/slices/userSlice.ts)
- [x] Есть хотя бы одна кастомная мидлвара или `createListenerMiddleware`: [LSMIddleware](src/shared/reducers/slices/localStorageMiddleware.ts)
- [x] Используется RTK Query: [booksApi](src/shared/api/booksApi.ts)
- [x] Используется Transforming Responses: [transformResponse](src/shared/api/booksApi.ts)

---

### 2 уровень (необязательный)

- [x] Используется TypeScript
- [x] Настроен CI/CD

---

### Дополнительная информация

- [x] Кодовая база организована по методологи [Feature-Sliced Design](https://feature-sliced.design/ru/)
- [x] Проект собран при помощи [Vite](https://vitejs.dev)
- [x] При работе со стилями использовались `CSS Modules`
