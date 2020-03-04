$('#myCarousel').carousel({
    interval: 0
})

$('.carousel .carousel-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

$('.js-best').click(function(){
  var id = "5";
  $('.shop-item').addClass('hidden');
  $('.shop-item.'+ id).removeClass('hidden');
  $('#myCarousel').carousel({
      interval: 0
  })
  $('.carousel .carousel-item').each(function() {
      var minPerSlide = 4;
      var next = $(this).next();
      if (!next.length) {
          next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 0; i < minPerSlide; i++) {
          next = next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
          }

          next.children(':first-child').clone().appendTo($(this));
      }
  });
})

$('.js-new').click(function(){
  var id = "6";
  $('.shop-item').addClass('hidden');
  $('.shop-item.'+ id).removeClass('hidden');
  $('#myCarousel').carousel({
      interval: 0
  })
  $('.carousel .carousel-item').each(function() {
      var minPerSlide = 4;
      var next = $(this).next();
      if (!next.length) {
          next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 0; i < minPerSlide; i++) {
          next = next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
          }

          next.children(':first-child').clone().appendTo($(this));
      }
  });
})
