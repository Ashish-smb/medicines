$('.hero-area-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    dots:true,
});

// tab menu
const btn = $('.hair-deals .hairfall-stages ul > li');
const tab = $('.hair-deals .hairfall-view > div ');
btn.click(function() {
    btn.removeClass('active');
    $(this).addClass('active');
    tab.removeClass('active');
    $($(this).data('tab')).addClass('active');
    console.log( $(this).data('tab') );
});

// product carousel 
$('.product-carousel').owlCarousel({
    items: 5,
    loop:true,
    margin:20,
}); 