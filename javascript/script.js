$(document).ready(function() {

    const resizeHeight = () => {
		$('html').css('--maxHeight', window.innerHeight+'px');
	}
    
    const loadFunctions = () => {
		resizeHeight();
	}

    window.addEventListener("resize", resizeHeight);
  	window.addEventListener('load', loadFunctions());
});
