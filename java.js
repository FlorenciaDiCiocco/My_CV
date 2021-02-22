window.addEventListener('scroll', function() {
    //This function is to add my name on the right top when the header is not visible
	var element = document.querySelector('header');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        document.getElementById("my_name").style.visibility = "hidden";
	}
	// checking for partial visibility
	else if(position.top < window.innerHeight && position.bottom >= 0) {
        document.getElementById("my_name").style.visibility = "hidden";
	}
    // checking for invisibility
    else{
        document.getElementById("my_name").style.visibility = "visible";
    }
});