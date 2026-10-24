# MiniShop

Мини-магазин на React. Каталог, поиск, корзина, оформление заказа.

Сделано как практика: роутинг, работа с API, стор, адаптив, нормальная структура компонентов.

## Деплой ссылка
https://mini-shop-phi-vert.vercel.app/

## Стек

- Vite + React 19
- React Router
- Tailwind CSS
- Zustand (корзина + persist в localStorage)
- DummyJSON — товары
- Swiper — галерея на странице товара

## Что умеет

- Каталог с пагинацией, поиском и сортировкой (всё в URL)
- Страница товара (галерея, описание, добавление в корзину)
- Корзина: количество, удаление, итого, очистка
- Checkout с простой валидацией
- Адаптив под мобилку
- 404, skeleton-загрузки, тост «добавлено в корзину»

## Запуск

```bash
cd frontend
npm i
npm run dev
```

## Сборка

```bash
npm run build
```

## Структура

```
frontend/
  ├── src/
    ├── api/          # запросы к DummyJSON
    ├── components/   # Header, Footer, ProductCard, Pagination, Swiper...
    ├── pages/        # Catalog, Product, Cart, Checkout, 404
    ├── store/        # Zustand (корзина)
    ├── config.js     # API URL, LIMIT
```

## Автор
NikCevich nikcevichoff@gmail.com
