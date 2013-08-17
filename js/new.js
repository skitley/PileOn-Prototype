/* Vars */

/* EVENT LISTENERS */
function newEventListeners() {
	for (var i=0; i<byID('actions').getElementsByClassName('action').length; i++) {
		byID('actions').getElementsByClassName('action')[i].addEventListener('mouseup', doAction, false);
	}
	for (var j=0; j<byID('amount').getElementsByClassName('option').length; j++) {
		byID('amount').getElementsByClassName('option')[j].addEventListener('mouseup', selectOption, false);
	}
	for (var k=0; k<byID('types').getElementsByClassName('type').length; k++) {
		byID('types').getElementsByClassName('type')[k].addEventListener('mouseup', selectType, false);
	}
}

/** EVENT HANDLERS **/
function doAction() {	
	var action = event.currentTarget.getAttribute('data-action');
	
	if (action == "submit") {
		submitNewPile();
	}
	else if (action == "cancel") {
		window.location.assign('index.html');
	}
}

function selectType() {
	for (var i=0; i<byID('types').getElementsByClassName('type').length; i++) {
		byID('types').getElementsByClassName('type')[i].classList.remove('selected');
	}
	
	event.currentTarget.classList.add('selected');
}

function selectOption() {
	for (var i=0; i<byID('amount').getElementsByClassName('option').length; i++) {
		byID('amount').getElementsByClassName('option')[i].classList.remove('selected');
	}
	
	event.currentTarget.classList.add('selected');
}

function submitNewPile() {
	var typeHasSelection = false;
	var amountHasSelection = false;
	
	for (var i=0; i<byID('types').getElementsByClassName('type').length; i++) {
		if (byID('types').getElementsByClassName('type')[i].classList.contains('selected')) {
			typeHasSelection = true;
		}
	}
	
	for (var j=0; j<byID('amount').getElementsByClassName('option').length; j++) {
		if (byID('amount').getElementsByClassName('option')[j].classList.contains('selected')) {
			amountHasSelection = true;
		}
	}
	
	if (typeHasSelection && amountHasSelection) {
		alert('Thanks for adding a new pile! Hang on a second while we create a new page for your pile...');
		window.location.assign('pile.html');
	}
	else {
		alert('please choose material type and amount');
	}
	
}