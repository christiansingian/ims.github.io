jQuery(document).ready(function($) {
	$('.featMh').matchHeight();
	carousel = $(".owl-carousel");
	carousel.owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots: false,
	    items: 2,
	    margin: 0,
	    autoplay:false,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            768 : {
                items: 1,
                
            },
            // breakpoint from 768 up
            992 : {
                items: 2,
            }
        }

	});
    checkClasses();
    carousel.on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses(){
        var total = $('.owl-carousel .owl-stage .owl-item.active').length;

        $('.owl-carousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('.owl-carousel .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                // this is the first one
                $(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total>1) {
                // this is the last one
                $(this).addClass('lastActiveItem');
            }
        });
    }
    sep();
    gg();
});

function gg() {
    $("#mbbtn #stack-menu").click(function() {
      var id = $(this).attr("id");
      $("#stackz nav#stack-menu2").css("display", "none");
      $("#stackz #" + id + "").toggle();
    });
    $("#mbbtn #stack-menu2").click(function() {
      var id = $(this).attr("id");
      $("#stackz nav#stack-menu").css("display", "none");
      $("#stackz #" + id + "").toggle();
    });

    // let myBtns=document.querySelectorAll('.abtn');
    // myBtns.forEach(function(btn) {
    //     btn.addEventListener('click', () => {
    //       myBtns.forEach(b => b.classList.remove('active'));
    //       btn.classList.toggleClass('active');
    //     });
    // });

    $(".abtn").each(function(index) {
        $(this).on("click", function(){
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(".abtn").removeClass('active');
                $(this).addClass('active');
            }
        });
    });

}

function sep() {

     $('#stackz #stack-menu, #stackz #stack-menu2').stackMenu({
        all: false, // add links to parents
        allTitle: 'All' // parents links text
     });
    $('.btmA').matchHeight();
	$('#mainHeader').scrollToFixed();
	$('.magic-box').matchHeight();
	$('.attr-1').matchHeight();
	$('.attr-2').matchHeight();
	$('.attr-3').matchHeight();
	$('.attr-4').matchHeight();
	$('.attr-5').matchHeight();
	$('.attr-6').matchHeight();
	$('.attr-7').matchHeight();
	$('.attr-8').matchHeight();
	$('.attr-9').matchHeight();
}