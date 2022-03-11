<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zlatmax</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600,700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <link rel="stylesheet" href="../css/icons.css">
    <link rel="stylesheet" href="../css/swiperStyle.css">
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <div class="wrapper">
        <header class="header">
            <div class="header__top top-header">
                <div class="container">
                    <div class="top-header__items">
                        <ul class="top-header__list header__menu">
                            <li class="top-header__list-item">
                                <a href="#" class="top-header__link">О нас</a>
                            </li>
                            <li class="top-header__list-item">
                                <a href="#" class="top-header__link">Оплата и доставка</a>
                            </li>
                            <li class="top-header__list-item">
                                <a href="#" class="top-header__link">Новости</a>
                            </li>
                            <li class="top-header__list-item">
                                <a href="#" class="top-header__link">Контакты</a>
                            </li>
                            <li class="top-header__list-item top-header__list-item--catalog">
                                <a href="#" class="top-header__link">Каталог товаров</a>
                            </li>
                            <li class="top-header__list-item top-header__list-item--user">
                                <a href="#" class="top-header__link">Личный кабинет</a>
                            </li>
                        </ul>
                        <a href="tel:+78007774967" class="top-header__icon-phone icon-phone"></a>
                        <a href="#" class="top-header__user">
                            <span class="icon-user top-header__user-ico"></span>
                            <span class="top-header__user-link">Личный кабинет</span>
                        </a>
                        <button class="burger">
                            <p class="burger__line"></p>
                        </button>
                    </div><!-- top-header__items -->
                </div><!-- container -->
            </div><!-- header__top top-header -->
            <div class="header__body body-header">
                <div class="container body-header__container">
                    <div class="body-header__logo">
                        <a href="mainPage.html" class="body-header__logo-ico icon-logo"></a>
                    </div>
                    <form action="#" class="body-header__search">
                        <input type="search" class="body-header__search-input" placeholder="Поиск">
                    </form>
                    <div class="body-header__actions">
                        <div class="body-header__actions-location">
                            <span class="body-header__actions-ico icon-location"></span>
                            <p class="body-header__actions-city">Москва</p>
                        </div>
                        <div class="body-header__actions-call">
                            <a href="tel:+78007774967">
                                8-800-777-49-67
                            </a>
                            <a href="#" class="body-header__actions-callback">Заказать звонок</a>
                            <a href="#" class="body-header__actions-arrow icon-arrow"></a>
                            <div class="actions-header__dropdown">
                                <a href="tel:+78007774902">
                                    8-800-777-49-02
                                </a>
                                <p>
                                    <a href="tel:+78007774903">
                                        8-800-777-49-03
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div class="body-header__favorit">
                            <a href="#" class="body-header__favorit-ico icon-favorit"></a>
                        </div>
                        <div class="body-header__cart">
                            <a href="#" class="body-header__cart-ico icon-cart">
                                <div class="body-header__cart-counter">0</div>
                            </a href="#">
                            <div class="body-header__cart-body">
                                <p class="body-header__cart-price">0 р.</p>
                                <a href="#" class="body-header__cart-order">Оформить заказ</a>
                            </div>
                        </div>
                    </div>
                </div><!-- container -->
            </div> <!-- header__body body-header -->
            <div class="header__catalog catalog-header">
                <div class="container">
                    <ul class="catalog-header__list">
                        <button class="catalog-header__list-item catalog-header__list-back">Назад</button>
                        <li class="catalog-header__list-item" data-catalog="submenu-1">Каталог ножей</li>
                        <li class="catalog-header__list-item" data-catalog="submenu-2">Клинковое оружие</li>
                        <li class="catalog-header__list-item" data-catalog="submenu-3">Сувенирные изделия</li>
                        <li class="catalog-header__list-item" data-catalog="submenu-4">Фонари ARMYTEK</li>
                        <li class="catalog-header__list-item" data-catalog="submenu-5">Сопуствующие товары</li>
                    </ul>
                </div>
                <div class="header__submenu-catalog catalog-submenu">
                    <div class="container">
                        <div class="catalog-submenu__categories" data-submenu="submenu-1">
                            <a href="#" class="catalog-submenu__back">Назад</a>
                            <a href="#" class="catalog-submenu__category">Категория ножей</a>
                            <a href="#" class="catalog-submenu__category">Производство ножей</a>
                            <a href="#" class="catalog-submenu__category">Ножи по маркам стали</a>
                            <a href="#" class="catalog-submenu__category">Заточка и полировка ножей</a>
                            <a href="#" class="catalog-submenu__category">Ножевая мастерская</a>

                            <p class="catalog-submenu__item">Разделочные ножи</p>
                            <p class="catalog-submenu__item">Ножи АИР</p>
                            <p class="catalog-submenu__item">Ножи из стали 40х102С2М</p>
                            <p class="catalog-submenu__item">Паста ГОИ</p>
                            <p class="catalog-submenu__item">Ножевые клинки</p>

                            <p class="catalog-submenu__item">Туристические ножи</p>
                            <p class="catalog-submenu__item">Ножи ЗИК</p>
                            <p class="catalog-submenu__item">Ножи из стали 95х18</p>
                            <p class="catalog-submenu__item">Алмазная паста</p>
                            <p class="catalog-submenu__item">Заготовки для ножей</p>

                            <p class="catalog-submenu__item">Ножи охотничьи</p>
                            <p class="catalog-submenu__item">Ножи ЗЗОСС</p>
                            <p class="catalog-submenu__item">Ножи из стали 100х13м</p>
                            <p class="catalog-submenu__item">Бруски и камни для заточки</p>
                            <p class="catalog-submenu__item">Литье для ножей</p>

                            <p class="catalog-submenu__item">Булатные ножи</p>
                            <p class="catalog-submenu__item">Ножи РОСоружие</p>
                            <p class="catalog-submenu__item">Ножи из стали 110х18м-ШД</p>
                            <p class="catalog-submenu__item">Заточные системы</p>
                            <p class="catalog-submenu__item">Материалы для рукоятей</p>

                            <p class="catalog-submenu__item">Ножи из дамаска</p>
                            <p class="catalog-submenu__item">Ножи Оружейник</p>
                            <p class="catalog-submenu__item">Ножи из стали ЭИ-107 ТЦ</p>
                            <p class="catalog-submenu__item"></p>
                            <p class="catalog-submenu__item">Уход за рукоятиями ножей</p>

                            <p class="catalog-submenu__item">Тактического назначения</p>
                            <p class="catalog-submenu__item">Булат Сергея Баранова</p>
                            <p class="catalog-submenu__item">Ножи из стали 50х14МФ</p>
                            <p class="catalog-submenu__item"></p>
                            <p class="catalog-submenu__item"></p>

                            <p class="catalog-submenu__item">Метательные ножи</p>
                            <p class="catalog-submenu__item">Булат Андрея Умерова</p>
                            <p class="catalog-submenu__item">Ножи из стали AUS-8</p>
                            <p class="catalog-submenu__item"></p>
                            <p class="catalog-submenu__item"></p>

                            <p class="catalog-submenu__item">Мачете и кукри</p>
                            <p class="catalog-submenu__item">Ножи Златко</p>
                            <p class="catalog-submenu__item">Ножи из стали К340</p>
                            <p class="catalog-submenu__item"></p>
                            <p class="catalog-submenu__item"></p>

                            <p class="catalog-submenu__item">Ножи кухонные</p>
                            <p class="catalog-submenu__item">Ножи Стиль-М</p>
                            <p class="catalog-submenu__item">Ножи из стали M390</p>
                            <p class="catalog-submenu__item"></p>
                            <p class="catalog-submenu__item"></p>

                            <p class="catalog-submenu__item"></p>
                            <p class="catalog-submenu__item">Оружейная компания</p>
                            <p class="catalog-submenu__item">Ножи из стали ЭП-766</p>
                            <p class="catalog-submenu__item"></p>
                            <p class="catalog-submenu__item"></p>

                            <a href="#" class="catalog-submenu__link">Смотреть все</a>
                            <a href="#" class="catalog-submenu__link">Смотреть все</a>
                            <a href="#" class="catalog-submenu__link">Смотреть все</a>
                            <a href="#" class="catalog-submenu__link">Смотреть все</a>
                            <a href="#" class="catalog-submenu__link">Смотреть все</a>
                        </div> <!-- catalog-submenu__categories -->

                        <div class="catalog-submenu__categories" data-submenu="submenu-2">
                            <a href="#" class="catalog-submenu__back">Назад</a>
                            <a href="#" class="catalog-submenu__category">Категория ножей</a>
                            <a href="#" class="catalog-submenu__category">Производство ножей</a>


                            <p class="catalog-submenu__item">Разделочные ножи</p>
                            <p class="catalog-submenu__item">Ножи АИР</p>

                            <p class="catalog-submenu__item">Туристические ножи</p>
                            <p class="catalog-submenu__item">Ножи ЗИК</p>


                            <p class="catalog-submenu__item">Ножи охотничьи</p>
                            <p class="catalog-submenu__item">Ножи ЗЗОСС</p>


                            <p class="catalog-submenu__item">Булатные ножи</p>
                            <p class="catalog-submenu__item">Ножи РОСоружие</p>


                            <p class="catalog-submenu__item">Ножи из дамаска</p>
                            <p class="catalog-submenu__item">Ножи Оружейник</p>


                            <p class="catalog-submenu__item">Тактического назначения</p>
                            <p class="catalog-submenu__item">Булат Сергея Баранова</p>


                            <p class="catalog-submenu__item">Метательные ножи</p>
                            <p class="catalog-submenu__item">Булат Андрея Умерова</p>


                            <p class="catalog-submenu__item">Мачете и кукри</p>
                            <p class="catalog-submenu__item">Ножи Златко</p>


                            <p class="catalog-submenu__item">Ножи кухонные</p>
                            <p class="catalog-submenu__item">Ножи Стиль-М</p>


                            <p class="catalog-submenu__item"></p>
                            <p class="catalog-submenu__item">Оружейная компания</p>


                            <a href="#" class="catalog-submenu__link">Смотреть все</a>
                            <a href="#" class="catalog-submenu__link">Смотреть все</a>

                        </div> <!-- catalog-submenu__categories -->

                    </div>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="intro">
                <div class="container">
                    <div class="intro__content">
                        <div class="intro-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="intro-swiper__body">
                                        <div class="intro__text">
                                            <h1 class="intro__title">Интернет магазин сертифицированных<br>
                                                златоустовских ножей
                                            </h1>
                                            <p class="intro__subtitle">
                                                Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
                                                представлен наиболее широкий выбор Златоустовских ножей от
                                                Златоустовских
                                                Оружейных Фабрик и компаний, мы являемся официальными поставщиками.
                                            </p>
                                        </div>
                                        <a href="#" class="intro-swiper__link">Подробнее</a>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="intro-swiper__body">
                                        <div class="intro__text">
                                            <h1 class="intro__title">Интернет магазин сертифицированных<br>
                                                златоустовских ножей
                                            </h1>
                                            <p class="intro__subtitle">
                                                Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
                                                представлен наиболее широкий выбор Златоустовских ножей от
                                                Златоустовских
                                                Оружейных Фабрик и компаний, мы являемся официальными поставщиками.
                                            </p>
                                        </div>
                                        <a href="#" class="intro-swiper__link">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                            <div class="pagination__control">
                                <div class="intro-pagination">
                                    <span class="intro-pagination__bullet"></span>
                                </div>
                                <div class="fraction">
                                    <span class="fraction__curent">1</span> / <span class="fraction__allslides">4</span>
                                </div>
                            </div>
                        </div>
                        <div class=" intro__pic">
                            <div class="intro__pic-img">
                                <img src="../img/intro/intro-1.png" alt="knife set">
                                <div class="pic-intro__tips pic-intro__tip-1">+</div>
                                <div class="pic-intro__tips pic-intro__tip-2">+</div>
                                <div class="pic-intro__tips pic-intro__tip-3">+</div>
                            </div>
                        </div>
                    </div>
                    <div class="intro__benefits benefits">
                        <div class="benefits__item">
                            <img src="../img/intro/benefits/benefits-1.png" alt="#">
                            <p class="benefits__item-text">
                                Гарантия 100% возврата
                                денежных средств
                            </p>
                        </div>

                        <div class="benefits__item">
                            <img src="../img/intro/benefits/benefits-2.png" alt="#">
                            <p class="benefits__item-text">
                                Гарантия 100% возврата
                                денежных средств
                            </p>
                        </div>

                        <div class="benefits__item">
                            <img src="../img/intro/benefits/benefits-3.png" alt="#">
                            <p class="benefits__item-text">
                                Гарантия 100% возврата
                                денежных средств
                            </p>
                        </div>

                        <div class="benefits__item">
                            <img src="../img/intro/benefits/benefits-4.png" alt="#">
                            <p class="benefits__item-text">
                                Гарантия 100% возврата
                                денежных средств
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="catalog">
                <div class="container">
                    <div class="catalog__cards">
                        <div class="catalog__card card-catalog">
                            <div class="card-catalog__text">
                                <h5 class="card-catalog__title">
                                    Каталог ножей
                                </h5>
                                <ul class="card-catalog__list">
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Разделочные </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Туристические </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Охотничьи </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-catalog__pic">
                                <img src="../img/catalog-cards/card-1.png" alt="knife">
                            </div>
                        </div>
                        <div class="catalog__card card-catalog">
                            <div class="card-catalog__text">
                                <h5 class="card-catalog__title">
                                    Среднеклинковое оружие
                                </h5>
                                <ul class="card-catalog__list">
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Разделочные </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Туристические </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Охотничьи </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-catalog__pic">
                                <img src="../img/catalog-cards/card-2.png" alt="knife">
                            </div>
                        </div>
                        <div class="catalog__card card-catalog">
                            <div class="card-catalog__text">
                                <h5 class="card-catalog__title">
                                    Длинноклинковое оружие
                                </h5>
                                <ul class="card-catalog__list">
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Разделочные </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Туристические </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Охотничьи </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-catalog__pic">
                                <img src="../img/catalog-cards/card-3.png" alt="knife">
                            </div>
                        </div>
                        <div class="catalog__card card-catalog">
                            <div class="card-catalog__text">
                                <h5 class="card-catalog__title">
                                    Сувенирные изделия
                                </h5>
                                <ul class="card-catalog__list">
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Разделочные </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Туристические </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Охотничьи </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-catalog__pic">
                                <img src="../img/catalog-cards/card-4.png" alt="knife">
                            </div>
                        </div>
                        <div class="catalog__card card-catalog">
                            <div class="card-catalog__text">
                                <h5 class="card-catalog__title">
                                    Сопутствующие товары
                                </h5>
                                <ul class="card-catalog__list">
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Разделочные </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Туристические </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Охотничьи </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-catalog__pic">
                                <img src="../img/catalog-cards/card-5.png" alt="knife">
                            </div>
                        </div>
                        <div class="catalog__card card-catalog">
                            <div class="card-catalog__text">
                                <h5 class="card-catalog__title">
                                    Ножевая мастерская
                                </h5>
                                <ul class="card-catalog__list">
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Разделочные </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Туристические </a>
                                    </li>
                                    <li class="card-catalog__list-item">
                                        <a class="card-catalog__link">Охотничьи</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-catalog__pic">
                                <img src="../img/catalog-cards/card-6.png" alt="knife">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hit">
                <div class="container">
                    <div class="hit__header block__header">
                        <h2 class="block__header-title">Хиты продаж</h2>
                        <a href="#" class="block__header-link">Перейти в каталог</a>
                    </div>
                    <div class="hit__cards">
                        <div class="hit-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="hit__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="hit__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="hit__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="hit__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hit-pagination">
                                <span class="hit-pagination__bullet"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="new">
                <div class="container">
                    <div class="new__content">
                        <div class="new__text">
                            <h5 class="new__title">Новинки</h5>
                            <p class="new__subtitle">
                                Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине представлен наиболее
                                широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы
                                являемся официальными поставщиками.
                            </p>
                            <a href="#" class="new__link">Больше новинок</a>
                        </div>
                        <div class="new__slider">
                            <div class="new-swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="product__card new-product__card">
                                            <div class="product__card-pic">
                                                <img src="../img/hit/hit-1.jpg" alt="#">
                                            </div>
                                            <div class="product__card-descr">
                                                <h5 class="descr-card__title">Нож Лиса</h5>
                                                <div class="descr-card__info">
                                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                                </div>
                                                <div class="descr-card__feedback">
                                                    <div class="descr-card__feedback-rating">
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                    </div>
                                                    12 отзывов
                                                </div>
                                                <div class="descr-card__actions">
                                                    <p class="descr-card__actions-price">2 719 р.</p>
                                                    <div class="descr-card__actions-compare">
                                                        <a href="#"
                                                            class="descr-card__actions-compare-ico icon-compare"></a>
                                                        <a href="#"
                                                            class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                    </div>
                                                </div>
                                                <a href="#" class="descr-card__tocart">
                                                    В корзину
                                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="product__card new-product__card">
                                            <div class="product__card-pic">
                                                <img src="../img/hit/hit-1.jpg" alt="#">
                                            </div>
                                            <div class="product__card-descr">
                                                <h5 class="descr-card__title">Нож Лиса</h5>
                                                <div class="descr-card__info">
                                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                                </div>
                                                <div class="descr-card__feedback">
                                                    <div class="descr-card__feedback-rating">
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                    </div>
                                                    12 отзывов
                                                </div>
                                                <div class="descr-card__actions">
                                                    <p class="descr-card__actions-price">2 719 р.</p>
                                                    <div class="descr-card__actions-compare">
                                                        <a href="#"
                                                            class="descr-card__actions-compare-ico icon-compare"></a>
                                                        <a href="#"
                                                            class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                    </div>
                                                </div>
                                                <a href="#" class="descr-card__tocart">
                                                    В корзину
                                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="product__card new-product__card">
                                            <div class="product__card-pic">
                                                <img src="../img/hit/hit-1.jpg" alt="#">
                                            </div>
                                            <div class="product__card-descr">
                                                <h5 class="descr-card__title">Нож Лиса</h5>
                                                <div class="descr-card__info">
                                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                                </div>
                                                <div class="descr-card__feedback">
                                                    <div class="descr-card__feedback-rating">
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                    </div>
                                                    12 отзывов
                                                </div>
                                                <div class="descr-card__actions">
                                                    <p class="descr-card__actions-price">2 719 р.</p>
                                                    <div class="descr-card__actions-compare">
                                                        <a href="#"
                                                            class="descr-card__actions-compare-ico icon-compare"></a>
                                                        <a href="#"
                                                            class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                    </div>
                                                </div>
                                                <a href="#" class="descr-card__tocart">
                                                    В корзину
                                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="new-pagination">
                                    <span class="new-pagination__bulet"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stocks">
                <div class="container">
                    <div class="stocks__header block__header">
                        <h2 class="block__header-title">Акции</h2>
                        <a href="#" class="block__header-link">Все акции</a>
                    </div>
                    <div class="stocks__cards">
                        <div class="stocks-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="stocks-pagination">
                                <span class="stocks-pagination__bullet"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stocks-2">
                <div class="container">
                    <div class="stocks-2__header block__header">
                        <h2 class="block__header-title">Акции</h2>
                        <a href="#" class="block__header-link">Все акции</a>
                    </div>
                    <div class="stocks-2__cards">
                        <div class="stocks-2-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="stocks-2__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks-2__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks-2__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks-2__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="stocks-2-pagination">
                                <span class="stocks-2-pagination__bullet"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="new">
                <div class="container">
                    <div class="new__content">
                        <div class="new__text">
                            <h5 class="new__title">Новинки</h5>
                            <p class="new__subtitle">
                                Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине представлен наиболее
                                широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы
                                являемся официальными поставщиками.
                            </p>
                            <a href="#" class="new__link">Больше новинок</a>
                        </div>
                        <div class="new__slider">
                            <div class="new-swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="product__card new-product__card">
                                            <div class="product__card-pic">
                                                <img src="../img/hit/hit-1.jpg" alt="#">
                                            </div>
                                            <div class="product__card-descr">
                                                <h5 class="descr-card__title">Нож Лиса</h5>
                                                <div class="descr-card__info">
                                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                                </div>
                                                <div class="descr-card__feedback">
                                                    <div class="descr-card__feedback-rating">
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                    </div>
                                                    12 отзывов
                                                </div>
                                                <div class="descr-card__actions">
                                                    <p class="descr-card__actions-price">2 719 р.</p>
                                                    <div class="descr-card__actions-compare">
                                                        <a href="#"
                                                            class="descr-card__actions-compare-ico icon-compare"></a>
                                                        <a href="#"
                                                            class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                    </div>
                                                </div>
                                                <a href="#" class="descr-card__tocart">
                                                    В корзину
                                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="product__card new-product__card">
                                            <div class="product__card-pic">
                                                <img src="../img/hit/hit-1.jpg" alt="#">
                                            </div>
                                            <div class="product__card-descr">
                                                <h5 class="descr-card__title">Нож Лиса</h5>
                                                <div class="descr-card__info">
                                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                                </div>
                                                <div class="descr-card__feedback">
                                                    <div class="descr-card__feedback-rating">
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                    </div>
                                                    12 отзывов
                                                </div>
                                                <div class="descr-card__actions">
                                                    <p class="descr-card__actions-price">2 719 р.</p>
                                                    <div class="descr-card__actions-compare">
                                                        <a href="#"
                                                            class="descr-card__actions-compare-ico icon-compare"></a>
                                                        <a href="#"
                                                            class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                    </div>
                                                </div>
                                                <a href="#" class="descr-card__tocart">
                                                    В корзину
                                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="product__card new-product__card">
                                            <div class="product__card-pic">
                                                <img src="../img/hit/hit-1.jpg" alt="#">
                                            </div>
                                            <div class="product__card-descr">
                                                <h5 class="descr-card__title">Нож Лиса</h5>
                                                <div class="descr-card__info">
                                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                                </div>
                                                <div class="descr-card__feedback">
                                                    <div class="descr-card__feedback-rating">
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                        <span class="descr-card__star icon-star"></span>
                                                    </div>
                                                    12 отзывов
                                                </div>
                                                <div class="descr-card__actions">
                                                    <p class="descr-card__actions-price">2 719 р.</p>
                                                    <div class="descr-card__actions-compare">
                                                        <a href="#"
                                                            class="descr-card__actions-compare-ico icon-compare"></a>
                                                        <a href="#"
                                                            class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                    </div>
                                                </div>
                                                <a href="#" class="descr-card__tocart">
                                                    В корзину
                                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="new-pagination">
                                    <span class="new-pagination__bulet"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stocks">
                <div class="container">
                    <div class="stocks__header block__header">
                        <h2 class="block__header-title">Акции</h2>
                        <a href="#" class="block__header-link">Все акции</a>
                    </div>
                    <div class="stocks__cards">
                        <div class="stocks-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="stocks-pagination">
                                <span class="stocks-pagination__bullet"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stocks">
                <div class="container">
                    <div class="stocks__header block__header">
                        <h2 class="block__header-title">Акции</h2>
                        <a href="#" class="block__header-link">Все акции</a>
                    </div>
                    <div class="stocks__cards">
                        <div class="stocks-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="stocks__card product__card">
                                        <div class="product__card-pic">
                                            <img src="../img/hit/hit-1.jpg" alt="#">
                                        </div>
                                        <div class="product__card-descr">
                                            <h5 class="descr-card__title">Нож Лиса</h5>
                                            <div class="descr-card__info">
                                                <span>95х18</span> <span>Орех, Алюминий</span>
                                            </div>
                                            <div class="descr-card__feedback">
                                                <div class="descr-card__feedback-rating">
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                    <span class="descr-card__star icon-star"></span>
                                                </div>
                                                12 отзывов
                                            </div>
                                            <div class="descr-card__actions">
                                                <p class="descr-card__actions-price">2 719 р.</p>
                                                <div class="descr-card__actions-compare">
                                                    <a href="#"
                                                        class="descr-card__actions-compare-ico icon-compare"></a>
                                                    <a href="#"
                                                        class="descr-card__actions-favorit-ico icon-favorit"></a>
                                                </div>
                                            </div>
                                            <a href="#" class="descr-card__tocart">
                                                В корзину
                                                <span class="descr-card__tocart-ico icon-cart"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="stocks-pagination">
                                <span class="stocks-pagination__bullet"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="articles">
                <div class="container">
                    <div class="articles__header block__header">
                        <h2 class="block__header-title">Акции</h2>
                    </div>
                    <div class="articles__cards">
                        <a href="#">
                            <div class="article__card">
                                <div class="article__card-pic">
                                    <img src="../img/articles/articles-1.jpg" alt="Все о ножах: как правильно выбрать">
                                </div>
                                <div class="article__card-text">
                                    <h5 class="article__card-title">
                                        Все о ножах: как правильно выбрать
                                    </h5>
                                    <p class="article__card-date">
                                        24.07.2019
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div class="article__card">
                                <div class="article__card-pic">
                                    <img src="../img/articles/articles-2.jpg" alt="Кухонные ножи для хозяек">
                                </div>
                                <div class="article__card-text">
                                    <h5 class="article__card-title">
                                        Кухонные ножи для хозяек
                                    </h5>
                                    <p class="article__card-date">
                                        24.07.2019
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div class="article__card">
                                <div class="article__card-pic">
                                    <img src="../img/articles/articles-3.jpg" alt="Кухонные ножи для хозяек">
                                </div>
                                <div class="article__card-text">
                                    <h5 class="article__card-title">
                                        Кухонные ножи для хозяек
                                    </h5>
                                    <p class="article__card-date">
                                        24.07.2019
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div class="article__card">
                                <div class="article__card-pic">
                                    <img src="../img/articles/articles-4.jpg" alt="Как правильно выбрать фонарь">
                                </div>
                                <div class="article__card-text">
                                    <h5 class="article__card-title">
                                        Как правильно выбрать фонарь
                                    </h5>
                                    <p class="article__card-date">
                                        24.07.2019
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lantern">
                <div class="container">
                    <div class="lantern__cards">
                        <div class="lantern__card">
                            <div class="lantern__card-body">
                                <h5 class="lantern__card-title">Тактические фонари</h5>
                                <p class="lantern__card-subtitle">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                </p>
                                <a href="#" class="lantern__link">Подробнее</a>
                            </div>
                            <div class="lantern__card-pic">
                                <img src="../img/flashlight/flashlight-1.png" alt="Тактические фонари">
                            </div>
                        </div>
                        <div class="lantern__card">
                            <div class="lantern__card-body">
                                <h5 class="lantern__card-title">Налобные мультифонари</h5>
                                <p class="lantern__card-subtitle">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                </p>
                                <a href="#" class="lantern__link">Подробнее</a>
                            </div>
                            <div class="lantern__card-pic _lantern__card-pic">
                                <img src="../img/flashlight/flashlight-2.png" alt="Палобные мультифонари">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lantern-product">
                <div class="container">
                    <div class="lantern-product__header block__header">
                        <h2 class="block__header-title">Фонари</h2>
                        <a href="#" class="block__header-link">Перейти в каталог</a>
                    </div>
                    <div class="lantern-product__cards">
                        <div class="product__card">
                            <div class="product__card-pic">
                                <img src="../img/lantert-product/lantern-product-1.png" alt="lantern">
                            </div>
                            <div class="product__card-descr">
                                <h5 class="descr-card__title">Нож Лиса</h5>
                                <div class="descr-card__info">
                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                </div>
                                <div class="descr-card__feedback">
                                    <div class="descr-card__feedback-rating">
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                    </div>
                                    12 отзывов
                                </div>
                                <div class="descr-card__actions">
                                    <p class="descr-card__actions-price">2 719 р.</p>
                                    <div class="descr-card__actions-compare">
                                        <a href="#" class="descr-card__actions-compare-ico icon-compare"></a>
                                        <a href="#" class="descr-card__actions-favorit-ico icon-favorit"></a>
                                    </div>
                                </div>
                                <a href="#" class="descr-card__tocart">
                                    В корзину
                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                </a>
                            </div>
                        </div>
                        <div class="product__card">
                            <div class="product__card-pic">
                                <img src="../img/lantert-product/lantern-product-1.png" alt="lantern">
                            </div>
                            <div class="product__card-descr">
                                <h5 class="descr-card__title">Нож Лиса</h5>
                                <div class="descr-card__info">
                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                </div>
                                <div class="descr-card__feedback">
                                    <div class="descr-card__feedback-rating">
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                    </div>
                                    12 отзывов
                                </div>
                                <div class="descr-card__actions">
                                    <p class="descr-card__actions-price">2 719 р.</p>
                                    <div class="descr-card__actions-compare">
                                        <a href="#" class="descr-card__actions-compare-ico icon-compare"></a>
                                        <a href="#" class="descr-card__actions-favorit-ico icon-favorit"></a>
                                    </div>
                                </div>
                                <a href="#" class="descr-card__tocart">
                                    В корзину
                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                </a>
                            </div>
                        </div>
                        <div class="product__card">
                            <div class="product__card-pic">
                                <img src="../img/lantert-product/lantern-product-1.png" alt="lantern">
                            </div>
                            <div class="product__card-descr">
                                <h5 class="descr-card__title">Нож Лиса</h5>
                                <div class="descr-card__info">
                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                </div>
                                <div class="descr-card__feedback">
                                    <div class="descr-card__feedback-rating">
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                    </div>
                                    12 отзывов
                                </div>
                                <div class="descr-card__actions">
                                    <p class="descr-card__actions-price">2 719 р.</p>
                                    <div class="descr-card__actions-compare">
                                        <a href="#" class="descr-card__actions-compare-ico icon-compare"></a>
                                        <a href="#" class="descr-card__actions-favorit-ico icon-favorit"></a>
                                    </div>
                                </div>
                                <a href="#" class="descr-card__tocart">
                                    В корзину
                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                </a>
                            </div>
                        </div>
                        <div class="product__card">
                            <div class="product__card-pic">
                                <img src="../img/lantert-product/lantern-product-1.png" alt="lantern">
                            </div>
                            <div class="product__card-descr">
                                <h5 class="descr-card__title">Нож Лиса</h5>
                                <div class="descr-card__info">
                                    <span>95х18</span> <span>Орех, Алюминий</span>
                                </div>
                                <div class="descr-card__feedback">
                                    <div class="descr-card__feedback-rating">
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                        <span class="descr-card__star icon-star"></span>
                                    </div>
                                    12 отзывов
                                </div>
                                <div class="descr-card__actions">
                                    <p class="descr-card__actions-price">2 719 р.</p>
                                    <div class="descr-card__actions-compare">
                                        <a href="#" class="descr-card__actions-compare-ico icon-compare"></a>
                                        <a href="#" class="descr-card__actions-favorit-ico icon-favorit"></a>
                                    </div>
                                </div>
                                <a href="#" class="descr-card__tocart">
                                    В корзину
                                    <span class="descr-card__tocart-ico icon-cart"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about">
                <div class="container">
                    <h2 class="about__title">
                        Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
                    </h2>
                    <p class="about__subtitle">
                        Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого качества из города
                        оружейников - Златоуста. Златоустовские ножи известны и популярны среди потребителей как на
                        российским рынке, так и за рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие,
                        складные и метательные. Нож Златоуста - это идеальный друг и товарищ в повседневной жизни и в
                        экстремальных ситуациях. На многую продукцию распространяется гарантия до 10 лет - это один из
                        главных показателей качества. Для Вас на нашем сайте "zlatmax" предложен огромный ассортимент
                        Златоустовских ножей. Наши менеджеры помогут определиться и подобрать самый лучший
                        Златоустовский нож, ориентируясь на Ваши пожелания.
                    </p>
                </div>
            </div>
        </main>
        <footer class="footer">
            <div class="container">
                <div class="footer__items">
                    <div class="footer__item-column">
                        <div class="footer__item footer__info">
                            <h5 class="footer__item-title">ИНФОРМАЦИЯ</h5>
                            <ul class="footer__list">
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">Златоустовские ножи
                                        в Москве и Московской
                                        области
                                    </a>
                                </li>
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">Ножевые стали</a>
                                </li>
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">О нас</a>
                                </li>
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">Условия оплаты
                                        и доставки
                                    </a>
                                </li>
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">Политика
                                        конфиденциальности
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__item-column">
                        <div class="footer__item footer__support">
                            <h5 class="footer__item-title">СЛУЖБА ПОДДЕРЖКИ</h5>
                            <ul class="footer__list">
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">
                                        Контактная информация
                                    </a>
                                </li>
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">
                                        Возврат товара
                                    </a>
                                </li>
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">
                                        Карта сайта
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__item-column">
                        <div class="footer__item footer__additionally">
                            <h5 class="footer__item-title">ДОПОЛНИТЕЛЬНО</h5>
                            <ul class="footer__list">
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">
                                        Подарочные сертификаты
                                    </a>
                                </li>
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">
                                        Партнеры
                                    </a>
                                </li>
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">
                                        Товары со скидкой
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__item-column">
                        <div class="footer__item footer__user">
                            <h5 class="footer__item-title">ЛИЧНЫЙ КАБИНЕТ</h5>
                            <ul class="footer__list">
                                <ul class="footer__list">
                                    <li class="footer__list-item">
                                        <a href="#" class="footer__link">
                                            Личный кабинет
                                        </a>
                                    </li>
                                    <li class="footer__list-item">
                                        <a href="#" class="footer__link">
                                            История заказов
                                        </a>
                                    </li>
                                    <li class="footer__list-item">
                                        <a href="#" class="footer__link">
                                            Мои закладки
                                        </a>
                                    </li>
                                    <li class="footer__list-item">
                                        <a href="#" class="footer__link">
                                            Рассылка новостей
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__item-column">
                        <div class="footer__item footer__contacts">
                            <h5 class="footer__item-title">КОНТАКТЫ</h5>
                            <ul class="footer__list">
                                <li class="footer__list-item">
                                    <a href="tel:+78007774967" class="footer__link">
                                        <span class="icon-phone"></span>8 (800) 777-49-67
                                    </a>
                                </li>
                                <li class=" footer__list-item">
                                    <a class="footer__link">
                                        <span class="icon-clock"></span> Пн-Пт<br>
                                        7:00 - 16:00 (МСК)
                                    </a>
                                </li>
                                <li class="footer__list-item">
                                    <a class="footer__link">
                                        <span class="icon-location"></span>
                                        Златоуст,
                                        ул. Шоссейная,
                                        д. 1, офис «6Б»
                                    </a>
                                </li>
                                <li class="footer__list-item">
                                    <a href="mailto:info@zlatmax.ru" mailto class="footer__link">
                                        <span class="icon-mail"></span>
                                        info@zlatmax.ru
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__item-column">
                        <div class="footer__item footer__useful">
                            <h5 class="footer__item-title">ПОЛЕЗНЫЕ ССЫЛКИ</h5>
                            <ul class="footer__list">
                                <li class="footer__list-item">
                                    <a href="#" class="footer__link">Способы оплаты и доставки</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__item-column">
                        <div class="footer__item footer__useful">
                            <h5 class="footer__item-title">НАША ГАРАНТИЯ</h5>
                            <ul class="footer__list">
                                <p class="footer__link footer__link-text">
                                    Недовольны своей покупкой?
                                    Вы можете вернуть ее в течении
                                    30 дней с даты получения,
                                    согласно <a href="#">нашим правилам</a>
                                </p>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__item-column">
                        <div class="footer__item footer__newsletter">
                            <h5 class="footer__item-title">НОВОСТНАЯ РАССЫЛКА</h5>
                            <ul class="footer__list">
                                <p class="footer__item-subtitle">Подпишитесь прямо сейчас!</p>
                                <form action="#" class="footer__form" method="post" enctype="multipart/form-data">
                                    <div class="footer__input-wrapper">
                                        <input type="mail" class="footer__form-input" placeholder="example@gmail.com">
                                        <button type="submit" class="footer__form-submit"></button>
                                    </div>
                                    <div class="footer__form-checkbox">
                                        <input type="checkbox" name="agree" id="chekbox">
                                        <label for="chekbox" class="footer__form-agree-text">
                                            Я прочитал Условия соглашения и
                                            согласен с условиями
                                        </label>
                                    </div>
                                </form>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__item footer__social">
                        <h5 class="footer__item-title">СОЦИАЛЬНЫЕ СЕТИ</h5>
                        <ul class="footer__list footer__list-soc">
                            <li class="footer__list-item footer__list-item-soc">
                                <img src="../img/footer/facebook.png" alt="facebook">
                            </li>
                            <li class="footer__list-item footer__list-item-soc">
                                <img src="../img/footer/viber.png" alt="viber">
                            </li>
                            <li class="footer__list-item footer__list-item-soc">
                                <img src="../img/footer/telegram.png" alt="telegram">
                            </li>
                            <li class="footer__list-item footer__list-item-soc">
                                <img src="../img/footer/whats.png" alt="whatsapp">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="descr">
                    <p>
                        Все материалы, размещенные на сайте, носят справочный характер и не являются
                        публичной офертой, определяемойположениями Статьи 437 Гражданского кодекса Российской Федерации.
                        При копировании материалов гиперссылка на www.zlatmax.ru обязательна!
                    </p>
                    <p>
                        Златоустовские ножи www.zlatmax.ru ©
                    </p>
                </div>
            </div>
        </footer>
    </div>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <script src="../js/script.js"></script>
    <script src="../js/sliders.js"></script>
</body>

</html>