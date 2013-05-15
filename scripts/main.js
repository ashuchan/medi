
var width = $(window).width();

var current=1;

function slideShow(){
	var cId = "#slide"+current;
	$(cId).animate({ opacity: 0 }, 2000);
	current++;
	if(current>5)
		current=1;
	cId = "#slide"+current;
	$(cId).animate({ opacity: 1 }, 2000);
	setTimeout(slideShow,6000);
}