$(window).scroll(function(){
  $(".card shadow-sm")
  .stop()
  .animate(
    {"marginTop": ($(window).scrollTop()) + "px", 
    "marginLeft":($(window).scrollBottom()) + "px"},
     "slow" );
});