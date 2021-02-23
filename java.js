window.addEventListener('scroll', function() {
    //This function is to add my name on the right top when the header is not visible
	var element = document.querySelector('header');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        document.getElementById("my_name").style.display = "none";
	}
	// checking for partial visibility
	else if(position.top < window.innerHeight && position.bottom >= 0) {
        document.getElementById("my_name").style.display = "inline";
	}
    // checking for invisibility
    else{
        document.getElementById("my_name").style.display = "inline";
    }
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }