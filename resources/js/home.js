import Swiper from 'swiper';
import {Pagination, Autoplay} from 'swiper/modules';
const herosection = new Swiper("#hero-section", {
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    modules : [Pagination, Autoplay],
    pagination : {
        el : ".swiper-pagination",
        "clickable" : true
    },
});

const  testimonial = new Swiper(".testimonial", {
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});