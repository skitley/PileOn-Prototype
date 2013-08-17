/* Vars */

/* EVENT LISTENERS */
function homepageEventListeners() {
	for (var i=0; i<byID('materials').getElementsByClassName('material').length; i++) {
		byID('materials').getElementsByClassName('material')[i].addEventListener('mouseup', changePage, false);
	}
	for (var j=0; j<byID('actions').getElementsByClassName('action').length; j++) {
		byID('actions').getElementsByClassName('action')[j].addEventListener('mouseup', doAction, false);
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

function doAction() {
	var action = event.currentTarget.getAttribute('data-action');
	
	if (action == "new") {
		window.location.assign('new.html');
	}
	else if (action == "update") {
		gOverlayActive = true;
		
		byID('overlays').style.display = "block";
		byID('overlays').style.height = gScreenHeight + "px";
		
		byID('updateCancel').addEventListener('mouseup', closeOverlays, false);
		byID('updateOk').addEventListener('mouseup', verifyPileId, false);
	}
}

function closeOverlays() {
	byID('updateCancel').removeEventListener('mouseup', closeOverlays, false);
	byID('updateOk').removeEventListener('mouseup', verifyPileId, false);
	
	byID('locid').value = '';
	
	byID('overlays').style.display = "none";
}

function verifyPileId() {
	if (byID('locid').value == "621" ) {
		byID('updateCancel').removeEventListener('mouseup', closeOverlays, false);
		byID('updateOk').removeEventListener('mouseup', verifyPileId, false);
		
		window.location.assign('update.html');
	}
	else {
		alert('location not found');
	}
}