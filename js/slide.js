$(document).ready(function(){
  	$(".widget-big-case li").hover(function(){
  		$(this).find(".widget-big-case-qrcode-wrap").animate({height:'184px',opacity: '1',top:'-14px'});
  	}, function () {
        $(this).find(".widget-big-case-qrcode-wrap").animate({height:'0',opacity: '0',top:'170px'});              
 	});
});

/*
$(document).ready(function(){
	$(".page-case-sub-nav li a").hover(function(){
		$(this).parent().parent().parent().css("background", "#fff");
	}, function () {
		$(this).parent().parent().parent().css("background", "#f8f8f8",);             
 	});
});*/
