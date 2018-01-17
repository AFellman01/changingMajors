$(window).scroll(function() {
  	  $(window).off("scroll");
	  $(".splash").slideUp("800", function() {
	  $("html, body").animate({"scrollTop":"0px"},100);
	  $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
 });
 });
