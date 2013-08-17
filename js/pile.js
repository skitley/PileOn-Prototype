/* Vars */

/* EVENT LISTENERS */
function pileEventListeners() {
	for (var i=0; i<byID('actions').getElementsByClassName('action').length; i++) {
		byID('actions').getElementsByClassName('action')[i].addEventListener('mouseup', doAction, false);
	}
}

/** EVENT HANDLERS **/
function doAction() {	
	var action = event.currentTarget.getAttribute('data-action');
	
	if (action == "update") {
		window.location.assign('update.html');
	}
	
}