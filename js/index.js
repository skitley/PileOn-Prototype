/* Vars */

/* EVENT LISTENERS */
function homepageEventListeners() {
	for (var i=0; i<byID('materials').getElementsByClassName('material').length; i++) {
		byID('materials').getElementsByClassName('material')[i].addEventListener('mousedown', changePage, false);
	}
}

/** EVENT HANLDERS **/
function changePage() {	
	var page = event.currentTarget.getAttribute('data-material');
	
	if (page == "woodchips") {
		window.location.assign('locations.html');
	}
	else {
		alert(page + " coming soon.");
	}
}