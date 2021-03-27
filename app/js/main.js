$(function () {

  $('.user-nav__btn').on('click', function() {
    $('.shop-list1__content').toggleClass('shop-list1__content--list');
    $('.shop-item').toggleClass('shop-item--list');

  });


  $(".shop-star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    spacing: "10px",
    readOnly: true,
  });


  $(".filter-star").rateYo({
    starWidth: "11px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    spacing: "6px",
    readOnly: true,
  });



    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
          $('.filter-price__from').text(data.from);
          $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
          $('.filter-price__from').text(data.from);
          $('.filter-price__to').text(data.to);
      },
    });



     $('.top-slider__container').slick ({
        dots:true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
    })



    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');
   
    var config = {
      controls: {
        scope: 'local'
      }
    };
   
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);

     




});