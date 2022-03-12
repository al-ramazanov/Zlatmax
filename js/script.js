function adaptiveHeader() {
    const topHeader = document.querySelector('.top-header__items');
    const topHeaderFavorit = document.querySelector('.body-header__favorit');
    const topHeaderCart = document.querySelector('.body-header__cart');
    const burger = document.querySelector('.burger');

    let docWidth = document.documentElement.offsetWidth;
    if (docWidth <= 992) {
        topHeader.append(topHeaderFavorit, topHeaderCart, burger);
    };

    window.addEventListener('resize', function () {
        const topHeader = document.querySelector('.top-header__items');
        const topHeaderFavorit = document.querySelector('.body-header__favorit');
        const topHeaderCart = document.querySelector('.body-header__cart');
        const bodyHeader = document.querySelector('.body-header__actions');
        const burger = document.querySelector('.burger');
        let docWidth = document.documentElement.offsetWidth;
        if (docWidth <= 992) {
            topHeader.append(topHeaderFavorit, topHeaderCart, burger);
        }
        else {
            bodyHeader.append(topHeaderFavorit, topHeaderCart)

        }
    });
}
adaptiveHeader();

document.addEventListener('click', documentActions);
function documentActions(e) {
    const targetElement = e.target;
    const catalogSubMenu = document.querySelector('.catalog-submenu');
    const activeBlock = document.querySelector('.submenu-open');
    const activeLink = document.querySelector('.catalog-header__list-item-active');
    // open burger
    if (targetElement.closest('.burger')) {
        const burger = document.querySelector('.burger');
        let headerMenu = document.querySelector('.header__menu');
        let headerCatalog = document.querySelector('.catalog-header');
        burger.classList.toggle('active');
        document.body.classList.toggle('lock');
        headerMenu.classList.toggle('menu-open');
        if (headerCatalog.classList.contains('catalog-open')) {
            headerCatalog.classList.remove('catalog-open');

            if (activeLink && activeLink) {
                if (activeLink.classList.contains('catalog-header__list-item-active')) {
                    activeLink.classList.remove('catalog-header__list-item-active');
                }
            }
            if (activeBlock && activeBlock) {
                if (activeBlock.classList.contains('submenu-open')) {
                    activeBlock.classList.remove('submenu-open');
                }
            }
            if (catalogSubMenu && catalogSubMenu) {
                if (catalogSubMenu.classList.contains('catalog-submenu-open')) {
                    catalogSubMenu.classList.remove('catalog-submenu-open');
                }
            }
        }


    }
    // open burger

    // header open catalog start
    if (targetElement.closest('.top-header__list-item--catalog')) {
        let headerCatalog = document.querySelector('.catalog-header');
        let headerCatalogBack = document.querySelector('.catalog-header__list-back');
        headerCatalog.classList.add('catalog-open');
        headerCatalogBack.addEventListener('click', function () {
            if (headerCatalog.classList.contains('catalog-open')) {
                headerCatalog.classList.remove('catalog-open');
            }
        });

    }
    // header open catalog end

    // header submenu start
    if (targetElement.closest('[data-catalog]')) {
        const subMenuId = targetElement.dataset.catalog ? targetElement.dataset.catalog : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        if (subMenu) {
            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('catalog-header__list-item-active');
                activeBlock.classList.remove('submenu-open');
                catalogSubMenu.classList.remove('catalog-submenu-open');
            }
            catalogSubMenu.classList.add('catalog-submenu-open');
            targetElement.classList.toggle('catalog-header__list-item-active');
            subMenu.classList.toggle('submenu-open');

            let headerSubMenuBack = document.querySelectorAll('.catalog-submenu__back');
            headerSubMenuBack.forEach(function (back) {
                back.addEventListener('click', function () {
                    subMenu.classList.remove('submenu-open');
                    catalogSubMenu.classList.remove('catalog-submenu-open');
                    targetElement.classList.remove('catalog-header__list-item-active');
                })
            })
            // headerSubMenuBack.addEventListener('click', function () {
            //     subMenu.classList.remove('submenu-open');
            //     catalogSubMenu.classList.remove('catalog-submenu-open');
            //     targetElement.classList.remove('catalog-header__list-item-active');
            // })
        } else {
            console.log('нет меню');
        }

    }
    // header submenu end

    // callBack start
    if (targetElement.closest('.body-header__actions-arrow')) {
        const headerDropDown = document.querySelector('.actions-header__dropdown')
        targetElement.classList.toggle('open');
        headerDropDown.classList.toggle('open');

    }
    // callBack end

    // to cart start
    if (targetElement.closest('.descr-card__tocart')) {
        const cart = document.querySelector('.body-header__cart-counter');
        targetElement.classList.toggle('product-take');
        const choosed = document.querySelectorAll('.product-take');
        if (choosed && choosed) {
            cart.textContent = choosed.length;
        }

        e.preventDefault();
    }
    // to cart end
    if (targetElement.closest('.descr-card__actions-favorit-ico')) {
        targetElement.classList.toggle('favorit-product');
        e.preventDefault();
    }


}
function getCategoryLength() {
    const categories = document.querySelectorAll('.catalog-submenu__categories');
    categories.forEach(function (category) {
        const categoryLength = category.querySelectorAll('.catalog-submenu__category').length;
        category.classList.add(`categoryQuantity-${categoryLength}`);
    })
}
getCategoryLength();
function openFilter(e) {
    const filters = document.querySelectorAll('.filter');
    filters.forEach(function (filter) {
        const filterHeader = filter.querySelector('.filter__header');
        filterHeader.addEventListener('click', function (e) {
            filter.classList.toggle('open');
            e.preventDefault();
        })
    })
}
function pageSort() {
    const sortItem = document.querySelector('.page__sort');
    sortItem.addEventListener('click', function () {
        this.classList.toggle('open')
    })
}
pageSort();
openFilter();
function openSpoiler() {
    const spoilers = document.querySelectorAll('.footer__item');
    spoilers.forEach(function (spoiler) {
        spoiler.addEventListener('click', function () {
            const spoilerHeader = spoiler.querySelector('.footer__item-title');
            const spoilerBody = spoiler.querySelector('.footer__list');
            spoilerHeader.classList.toggle('open');
            spoilerBody.classList.toggle('open');
        })
    })
}
openSpoiler();

