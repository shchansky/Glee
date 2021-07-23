$(function () {
  $('.menu__btn').on ('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  })


  $('.footer-top__title').on ('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  })


  $('.related__slider').slick ({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    infinite:false,
    responsive: [
      {
        breakpoint: 1231,
        settings: {
          slidesToShow: 3,
        }
      },  

      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
        }
      },
    ]

})





  $('.merchandise-tabs__top-item').on ('click', function(e){
    e.preventDefault();
    $('.merchandise-tabs__top-item').removeClass('merchandise-tabs__top-item--active');
    $(this).addClass('merchandise-tabs__top-item--active');
    $('.merchandise-tabs__content-item').removeClass('merchandise-tabs__content-item--active');
    $($(this).attr('href')).addClass('merchandise-tabs__content-item--active');
  });





  $('.merchandise__form-num').styler();




  $ ('.merchandise-slide__thumb').slick ({
    asNavFor: '.merchandise-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $ ('.merchandise-slide__big').slick ({
    asNavFor: '.merchandise-slide__thumb',
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1231,
        settings: {
          draggable: true,
        }
      },  
    ]
  });



  $('.user-nav__btn').on('click', function() {
    $('.shop-list1__content').toggleClass('shop-list1__content--list');
    $('.shop-item').toggleClass('shop-item--list');

  });


  $(".shop-star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    spacing: "12px",
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