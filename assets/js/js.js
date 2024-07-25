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
$('.deals-carousel').owlCarousel({
    items: 5,
    loop:true,
    margin:20,
}); 
// next prev carousel of deals carousel
const guide = $('.deals-carousel');
$('#deals-prev').click(function () {
    guide.trigger('prev.owl.carousel');
});
$('#deals-next').click(function() {
    guide.trigger('next.owl.carousel');
});
