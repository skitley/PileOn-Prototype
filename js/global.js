/* Global Vars */
var appViewModel = AppViewModel();
var appViewController = new AppViewController();

document.onreadystatechange = function() {
	if (document.readyState == 'interactive') {
		init();
	}
}

/* Init */
function init() {
	window.onresize = function() {
		windowResize();
	}
	windowResize();
	
	ko.applyBindings(appViewModel);
	
	appViewController.init();
	
}

/** WINDOW RESIZE & LAYOUT **/
function windowResize() {
	
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	
	// Send these to appViewModel for bindables if used...?
	appViewModel.winWidth(winWidth);
	appViewModel.winHeight(winHeight);
	appViewModel.viewportWidth($$('body').width());
	appViewModel.viewportHeight(winHeight);
	
}

/*** DEBUG ***/
function debug(str) {
	var debugPanel = document.getElementById("debug");
	
	debugPanel.innerHTML = '<p>' + str + '</p>';
}