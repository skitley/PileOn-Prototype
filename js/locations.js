/* Vars */

/* EVENT LISTENERS */
function something() {
	
}

/** EVENT HANDLERS **/
function changePage() {	
	var page = event.currentTarget.getAttribute('data-material');
	
	if (page == "woodchips") {
		window.location.assign(page + '.html');
	}
	else {
		alert(page + " coming soon.");
	}
}