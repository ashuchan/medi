
var width = $(window).width();

var current=1;

var currentAd=1;

function slideShow(){
	var cId = "#slide"+current;
	$(cId).animate({ opacity: 0 }, 2000);
	current++;
	if(current>5)
		current=1;
	cId = "#slide"+current;
	$(cId).animate({ opacity: 1 }, 2000);
	
	//animation for ads
	
	cId = "#ad"+currentAd;
	$(cId).animate({ opacity: 0 }, 2000);
	currentAd++;
	if(currentAd>2)
		currentAd=1;
	cId = "#ad"+currentAd;
	$(cId).animate({ opacity: 1 }, 2000);
	
	setTimeout(slideShow,6000);
}

function scrollToSignUp(){
	$('html,body').animate({
		scrollTop: $('#signUp').offset().top
		}, 1000);
}