$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1,
        },
        640:{
            items:2,
        },
        768:{
            items:3,
        },
        1024:{
            items: 4,
        }
    }
});