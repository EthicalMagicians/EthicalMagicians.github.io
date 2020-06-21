

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });



  /* HTML document is loaded. DOM is ready. 
  -------------------------------------------*/

  $(document).ready(function() {


  /*-------------------------------------------------------------------------------
    ISOTOPE FILTER - PORTFOLIO
  -------------------------------------------------------------------------------*/

  jQuery(document).ready(function($){

      if ( $('.iso-box-wrapper').length > 0 ) { 

          var $container  = $('.iso-box-wrapper'), 
          $imgs     = $('.iso-box img');

          $container.imagesLoaded(function () {

              $container.isotope({
              layoutMode: 'masonry',
              itemSelector: '.iso-box'
            });

            $imgs.load(function(){
              $container.isotope('reLayout');
          })
        });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

          $container.isotope({ 
            filter: filterValue,
              animationOptions: { 
                duration: 750, 
                easing: 'linear', 
                queue: false, 
          }                
        });             

        // don't proceed if already selected 

        if ( $this.hasClass('selected') ) { 
          return false; 
        }

          var filter_wrapper = $this.closest('.filter-wrapper');
          filter_wrapper.find('.selected').removeClass('selected');
          $this.addClass('selected');

          return false;
        }); 

      }
    });



  /*-------------------------------------------------------------------------------
    HIDE MENU AFTER CLICK
  -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });



  /*-------------------------------------------------------------------------------
    EASY PIECHART
  -------------------------------------------------------------------------------*/
    
   $(window).scroll( function(){
      $('.chart').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
            $('.chart').easyPieChart({
              scaleColor:false,
              trackColor:'#ebedee',
              barColor: function(percent) {
            var ctx = this.renderer.getCtx();
            var canvas = this.renderer.getCanvas();
            var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
                gradient.addColorStop(0, "#1dc9e3");
                gradient.addColorStop(1, "#febf28");
            return gradient;
          },
            lineWidth:4,
            lineCap: 'butt',
            size:150,
              animate:1000
            });
          }
      }); 
  });


  /*-------------------------------------------------------------------------------
    CONTACT FORM
  -------------------------------------------------------------------------------*/
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    var name = $("#cf-name").val();
    var email = $("#cf-email").val();
    var subject = $("#cf-subject").val();
    var message = $("#cf-message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };
    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: dataString,
            success: function () {
                $('.text-success').fadeIn(1000);
                $('.text-danger').fadeOut(500);
            }
        });
    }
    else {
        $('.text-danger').fadeIn(1000);
        $('.text-success').fadeOut(500);
    }
    return false;
  });
  


  /*-------------------------------------------------------------------------------
    BACK TO TOP
  -------------------------------------------------------------------------------*/

  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });   
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });



  /*-------------------------------------------------------------------------------
    WOW JS
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();


  });

