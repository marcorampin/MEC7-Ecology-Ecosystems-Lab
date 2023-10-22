$(document).ready(function() {

	$("nav a").on('click',function(){
   	var link = $(this).attr('href');
   	$('html,body').animate({scrollTop: ($(link).offset().top - 100)},'slow');
   	return false;
	});

    const resizeHeight = () => {
		$('html').css('--maxHeight', window.innerHeight+'px');
	}
    
    const loadFunctions = () => {
		resizeHeight();
	}

   window.addEventListener("resize", resizeHeight);
  	window.addEventListener('load', loadFunctions());
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
See online if it's possible to add a Event listener to see the click*/
/*
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
*/
