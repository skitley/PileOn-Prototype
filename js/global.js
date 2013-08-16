/* Global Vars */
var screenWidth = 0;
var screenHeight = 0;
	
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
	
	windowResize();
}

/** WINDOW RESIZE & LAYOUT **/
function windowResize() {
	
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;
	
	var appWidth = byID('app').clientWidth;
	var actionsHeight = byID('actions').clientHeight;
	
	byID('app').style.height =  screenHeight + "px";
	byID('actions').style.width = appWidth + "px";
	
	byID('spacer').style.width = appWidth + "px";
	byID('spacer').style.height = actionsHeight + "px";
	
	debug(screenWidth + 'x' + screenHeight);
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