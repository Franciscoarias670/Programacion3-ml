var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank:true,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        520:{
            slidesPerView:2
        },
        720:{
            slidesPerView:3
        }


    }
})
