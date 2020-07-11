var checkbox = document.querySelector('.theme-switch__checkbox');

checkbox.addEventListener('change', function(){
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 250)
}

      // SLIDER

      $(document).ready(function(){
        $('.slider').slick({
          arrows:true,
          dots:true,
          slidesToShow:1,
          slidesToScroll:1,
          slidesToScrollSpeed: 3000,
          autoplay:true,
          speed:300,
          easing: 'ease',
          autoplaySpeed:4000,
          touchThreshold: 10,
          waitForAnimate: false,
          //centerMode: true,
          responsive:[
           {
              breakpoint: 1101,
              settings: {
                slidesToShow:1
              }
            },
            {
              breakpoint: 890,
              settings: {
              slidesToShow:1,
             arrows:false
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow:1,
             arrows:false
              }
            },
            {
              breakpoint: 555,
              settings: {
                slidesToShow:1,
             arrows:false
              }
            }
          ]
        });
      });    
      
      // UP

function backToTop(){
  let button = $('.up');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50){
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 400);
  })
}

backToTop();