const swiper = new Swiper('.intro-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 100,
    autoplay: {
        delay: 10000,
    },
    breakpoints: {
        500: {
            spaceBetween: 60,

        }
    },
    // If we need pagination
    pagination: {
        el: '.intro-pagination',
        bulletClass: 'intro-pagination__bullet',
        bulletActiveClass: 'intro-pagination__bullet-active',

    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    on: {

        init: function (swiper) {
            const allSlides = document.querySelector('.fraction__allslides');
            const duplicateIndex = document.querySelectorAll('.swiper-slide-duplicate').length;
            const realSlides = swiper.slides.length - duplicateIndex;
            allSlides.innerHTML = realSlides < 10 ? `0${realSlides}` : realSlides;
        },
        slideChange: function (swiper) {
            const curentSlide = document.querySelector('.fraction__curent');
            curentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex;

        }

    }
});


const hitSwiper = new Swiper('.hit-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
        1440: {
            slidesPerView: 4,
        },
    },
    // If we need pagination
    pagination: {
        el: '.hit-pagination',
        bulletClass: 'hit-pagination__bullet',
        bulletActiveClass: 'hit-pagination__bullet-active',
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

const newSwiper = new Swiper('.new-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,

        }

    },
    // If we need pagination
    pagination: {
        el: '.new-pagination',
        bulletClass: 'new-pagination__bullet',
        bulletActiveClass: 'new-pagination__bullet-active',
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

const stocksSwiper = new Swiper('.stocks-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
        1440: {
            slidesPerView: 4,
        },
    },
    // If we need pagination
    pagination: {
        el: '.stocks-pagination',
        bulletClass: 'stocks-pagination__bullet',
        bulletActiveClass: 'stocks-pagination__bullet-active',
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

const stocks2Swiper = new Swiper('.stocks-2-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
        1440: {
            slidesPerView: 4,
        },
    },
    // If we need pagination
    pagination: {
        el: '.stocks-2-pagination',
        bulletClass: 'stocks-2-pagination__bullet',
        bulletActiveClass: 'stocks-2-pagination__bullet-active',
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});