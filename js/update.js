/* Vars */

/* EVENT LISTENERS */
function updateEventListeners() {
	for (var i=0; i<byID('actions').getElementsByClassName('action').length; i++) {
		byID('actions').getElementsByClassName('action')[i].addEventListener('mouseup', doAction, false);
	}
	for (var j=0; j<byID('question').getElementsByClassName('option').length; j++) {
		byID('question').getElementsByClassName('option')[j].addEventListener('mouseup', selectOption, false);
	}
}

/** EVENT HANDLERS **/
function doAction() {	
	var action = event.currentTarget.getAttribute('data-action');
	
	if (action == "cancel") {
		window.location.assign('index.html');
	}
	else if (action == "ok") {
		var hasSelection = false;
		
		for (var i=0; i<byID('question').getElementsByClassName('option').length; i++) {
			if (byID('question').getElementsByClassName('option')[i].classList.contains('selected')) {
				hasSelection = true;
			}
		}
		
		if (hasSelection) {
			alert('Your community thanks you!');
			window.location.assign('index.html');
		}
		else {
			alert('please make a selection');
		}
		
		
	}
}

function selectOption() {
	for (var i=0; i<byID('question').getElementsByClassName('option').length; i++) {
		byID('question').getElementsByClassName('option')[i].classList.remove('selected');
	}
	
	event.currentTarget.classList.add('selected');
}