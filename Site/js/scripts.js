$(document).ready(function() {
  //Wow scroll animations init
  wow = new WOW({mobile: false})
  wow.init();

  //Carosuel init
  $("#quotes-slider").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
  });

  //To top button
  $('.to-top-btn').on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 1300);
  });

  //Tabs
  $(".tab-content__item").not(":first").hide();
  $(".tabs__tab").show().click(function() {
    var ind = $(this).index();
    $(".tabs__tab").removeClass("tabs__tab--active").eq(ind).addClass("tabs__tab--active");
    $(".tab-content__item").hide().eq(ind).fadeIn()
  }).eq(0).addClass("tabs__tab--active");
});