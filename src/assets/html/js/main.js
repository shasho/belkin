jQuery(function () {
	jQuery('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				jQuery('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});


$(".button1Con").click(function () {
	var target = $(this).attr('data-accord');
	//closeAllFlahs();
	if($('.accord'  + target + ' .btnCircle').text() === '+'){
		$('.accord' + target + ' .popOpen').slideDown(700);
		$('.accord'  + target + ' .btnCircle').delay(700).text("-");
		$('.accord'  + target + ' .popOpen').attr("aria-expanded","true");
	} else{
		$('.accord' + target + ' .popOpen').slideUp(700);
		$('.accord' + target + ' .btnCircle').delay(700).text("+");
		$('.accord'  + target + ' .popOpen').attr("aria-expanded","false");
	}
	//$('html,body').animate({ scrollTop: $('.button1').offset().top }, 1000);
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 20) {
        $('.topBar').addClass('topBarBg');
    } else if ($(window).scrollTop() <= 19) {
        $('.topBar').removeClass('topBarBg');
    }
});


$(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
	var bodyScroll = $(window).height();
	//alert(bodyScroll);
    var ss1 = $('.sec1').height() ;
    var ss2 = ss1 + $('.sec2').height();
    var ss3 = ss2 + $('.sec3').height();
	
	var z = bodyScroll- $('.sec3').height()-90;
	//alert(bodyScroll );

    if (currentScroll < ss1) { removeActivesClass(); $('nav.top ul li:nth-child(1)').addClass("active"); }
    if (currentScroll > ss1) { removeActivesClass(); $('nav.top ul li:nth-child(2)').addClass("active"); }
    if (currentScroll > ss2) { removeActivesClass(); $('nav.top ul li:nth-child(3)').addClass("active"); }
	//if (currentScroll > z) { removeActivesClass(); $('nav.top ul li:nth-child(3)').addClass("active"); }
   // if (currentScroll > 60) { $('nav.top').addClass('topNavBkg'); } else { $('nav.top').removeClass('topNavBkg'); }
});

function removeActivesClass() {
    $('nav.top ul li:nth-child(1), nav.top ul li:nth-child(2), nav.top ul li:nth-child(3)').removeClass("active");
    //var num = ".s" + section;
    //$(num).addClass("active");
}

$('nav.top ul li:nth-child(3) a').click(function () {
	setTimeout(function() {
		$('nav.top ul li:nth-child(2)').removeClass("active");
    	$('nav.top ul li:nth-child(3)').addClass("active");
  }, 700);
	
});
/*$(document).ready(function () {
	$(".youtube").colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 });
});

var cboxOptions = {
	width: '95%',
	height: '95%',
	maxWidth: '1200px',
	maxHeight: '760px',
}

$('.youtube').colorbox(cboxOptions);*/


/*
$(window).resize(function () {
	$.colorbox.resize({
		width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
		height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
	});
});
*/


/*$( ".menuBtn" ).click(function() {
	$(".main-menu-warpper").fadeIn( 500, function() { });
	//$("body").css("overflow", "hidden");
});
$( ".xBtn, .closeBigMenu, .mainMenu ul li a" ).click(function() {
	closeBigMenu();
	//$("body").css("overflow", "");
});

function closeBigMenu(){
	$(".main-menu-warpper").fadeOut( 500, function() { });
}*/

/*var cboxOptions1 = { width: '100%', height: '100%', maxWidth: '1014px', maxHeight: '672px',inline: true, className: 'popUp1', transition: 'none', onComplete:function(){ $('#popUp1 h2').focus(); $("#popUp1").attr("aria-hidden","false"); $("#popUp1 h2, #popUp1 p,  #cboxClose").attr("tabindex","0"); $("#cboxClose").attr("aria-label","סגור את החלון הנפתח"); }, onClosed:function(){  $("#popUp1").attr("aria-hidden","true");$('button a.inline1').focus();  }}; 


$('.inline1').colorbox(cboxOptions1 );*/


/*
$(window).scroll(function () {
    if ($(window).scrollTop() >= 20) {
        $('.menuBtn').addClass('menuBtnBg');
    } else if ($(window).scrollTop() <= 19) {
        $('.menuBtn').removeClass('menuBtnBg');
    }
});
*/
