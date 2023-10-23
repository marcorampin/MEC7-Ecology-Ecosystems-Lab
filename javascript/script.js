//is loaded as soon as the website is ready
$(document).ready(function() {

	let html = $('html');
	
	//retrieves the value of a css variable contained in an element
	const getStyleVariable = (element, varName) => {
		let computedStyle = window.getComputedStyle(element[0]);
		let value = computedStyle.getPropertyValue(varName);
		return value;
	}

	//scrolls with an animation to the internal link clicked in the nav bar
	$("nav a").on('click',function(){
   	let link = $(this).attr('href');
   	let navHeight = getStyleVariable(html, '--navHeight');
   	//keeps only the number of the variable since it's needed only as a number for the scroll
   	let numNavHeight = parseFloat(navHeight);
   	
   	$('html,body').animate({scrollTop: ($(link).offset().top - (numNavHeight*8))},'slow');
   	
   	//It hides again all the links once a link has been clicked
   	let x = document.getElementById("myLinks");
   	x.style.display = "none";
   	
   	return false;
	});
	
	//resize the height of the window height considering also the browsers components (needed for smartphones)
    const resizeHeight = () => {
		html.css('--maxHeight', window.innerHeight+'px');
	}
   window.addEventListener("resize", resizeHeight);
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
See online if it's possible to add a Event listener to see the click and if it's possible to make it in jQuery*/

function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

