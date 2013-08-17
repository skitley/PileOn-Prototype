/* Global Vars */
var gScreenWidth = 0;
var gScreenHeight = 0;

var gOverlayActive = false;
	
document.onreadystatechange = function() {
	if (document.readyState == 'interactive') {
		init();
	}
}

/* Init */
function init() {
	
	/* Event Listeners */
	window.onresize = function() {
		windowResize();
	}
	
	if (byID('app').getAttribute('data-page') == 'home') {
		// Event listeners for the home page
		homepageEventListeners();
	}
	else if (byID('app').getAttribute('data-page') == 'locations') {
		// Event listeners for the locations page
	}
	else if (byID('app').getAttribute('data-page') == 'pile') {
		// Event listeners for the pile detail page
		pileEventListeners();
	}
	else if (byID('app').getAttribute('data-page') == 'update') {
		// Event listeners for the update pile page
		updateEventListeners();
	}
	else if (byID('app').getAttribute('data-page') == 'new') {
		// Event listeners for the new pile page
		newEventListeners();
	}
	
	windowResize();
}

/** WINDOW RESIZE & LAYOUT **/
function windowResize() {
	
	gScreenWidth = window.innerWidth;
	gScreenHeight = window.innerHeight;
	
	var appWidth = byID('app').clientWidth;
	var actionsHeight = byID('actions').clientHeight;
	
	byID('app').style.height =  gScreenHeight + "px";
	byID('actions').style.width = appWidth + "px";
	
	byID('spacer').style.width = appWidth + "px";
	byID('spacer').style.height = actionsHeight + "px";
	
	if (gOverlayActive == true) {
		byID('overlays').style.height = gScreenHeight + "px";
	}
	
	debug(gScreenWidth + 'x' + gScreenHeight);
}


/** SELECTORS **/
function byID(str) {
	return document.getElementById(str);
}

/*** DEBUG ***/
function debug(str) {
	var debugPanel = document.getElementById("debug");
	
	debugPanel.innerHTML = '<p>' + str + '</p>';
}