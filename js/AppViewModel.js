/**
	Main application view model.
**/
function AppViewModel() {
	var self = this;
	
	// App dimensions and layout
	self.winWidth = ko.observable(0);
	self.winHeight = ko.observable(0);
	self.viewportWidth = ko.observable(0);
	self.viewportHeight = ko.observable(0);
	
	// Tracks page layout and transitions
	self.pageCount = ko.observable(4);
	self.currentPage = ko.observable(0);
	self.pageHeight = ko.observable(0);
	
	// Determines page content
	self.activeCategory = ko.observable(0);
	self.activePile = ko.observable(0);
	
	// New and update pile process flags
	self.createPileProcessActive = ko.observable(false);
	self.updatePileProcessActive = ko.observable(false);
	
	// Tracks button enabled states
	self.listViewActive = ko.observable(true);
	self.mapViewActive = ko.observable(false);
	
	// Tracks selection button states and which amount of material is selected
	self.isMaterialSelected = ko.observable(false);
	self.isMaterialAmountSelected = ko.observable(false);
	self.materialAmount = ko.observable(0);
	
	// Toggles the state of the about page
	self.isShowingAboutPage = ko.observable(false);
	
	// Holds all the view data
	self.categories = ko.observableArray([]);
	
	/*
		Moves to the next page, changes active category
		and/or active pile accordingly. Pages begin index at
		zero. The view is bound to both the boolean flags of
		"active" on both categories and piles. The view is
		also bound to the activeCategory and activePile
		properties.
	*/
	self.nextPage = function(data, event) {
		byID('pageWrap').scrollTop = 0;
		currentPage(currentPage() + 1);
		
		// Going to page 2 (list of piles in category)
		if (currentPage() == 1) {
			activeCategory((event.currentTarget).getAttribute('data-category'));
			
			for (var i=0; i<categories().length; i++) {
				categories()[i].active(false);
			}
			categories()[activeCategory()].active(true);
		}
		// Going to page 3 (pile details page)
		else if (currentPage() == 2) {
			activePile = (event.currentTarget).getAttribute('data-pile');
			
			// clear any previously existing active pile
			for (var j=0; j<categories().length; j++) {
				for (var k=0; k<categories()[j].piles().length; k++) {
					categories()[j].piles()[k].active(false);
					
					if (categories()[j].piles()[k].id() == activePile) {
						categories()[j].piles()[k].active(true);
					}
				}
			}
			
		}
		// Going to page 4 (map page? cut this out?)
		else if (currentPage() == 3) {
		
		}
		
	}
	
	self.prevPage = function() {
		if (currentPage() == 1) {
			for (var i=0; i<categories().length; i++) {
				categories()[i].active(false);
			}
		}
		else if (currentPage() == 2) {
			for (var j=0; j<categories().length; j++) {
				for (var k=0; k<categories()[j].piles().length; k++) {
					categories()[j].piles()[k].active(false);
					
					if (categories()[j].piles()[k].id() == activePile) {
						categories()[j].piles()[k].active(true);
					}
				}
			}
		}
		currentPage(currentPage() - 1);
		
		// WARNING: Messy code
		// Force scroll on #pagewrap to top (otherwise might not see some stuff)
		// TODO: Fix scrolling to be better...
		byID('pageWrap').scrollTop = 0;
		
	}
	
	self.firstPage = function() {
		if (currentPage() == 0) {
			// do nothing
		}
		else if (currentPage() == 1) {
			// reset any active category statuses
			for (var i=0; i<categories().length; i++) {
				categories()[i].active(false);
			}
			
			// set current page to 1
			currentPage(0);
		}
		else if (currentPage() == 2) {
			// clear any previously existing active pile and category
			for (var j=0; j<categories().length; j++) {
				
				for (var k=0; k<categories()[j].piles().length; k++) {
					categories()[j].piles()[k].active(false);
				}
				
				categories()[j].active(false);
			}
			
			// set current page to 1
			currentPage(0);
		}
		
	}
	
	self.changeViewMode = function(data, event) {
		if (event.currentTarget.getAttribute('data-action') == 'mapview') {
			alert('Map view coming soon.');
		}
	}
	
	self.activateCreatePileProcess = function() {
		createPileProcessActive(true);
	}
	
	self.updatePile = function() {
		// Update pile from home page vs details page respectively
		updatePileProcessActive(true);
	}
	
	// Messy code
	self.cancelActiveProcess = function() {
		createPileProcessActive(false);
		updatePileProcessActive(false);
		
		// Reset material amount selection stuff
		for (var i=0;i<byID('newPileForm').getElementsByClassName('type').length; i++) {
			byID('newPileForm').getElementsByClassName('type')[i].classList.remove('action-selected');
		}
		for (var k=0;k<byID('newPileForm').getElementsByClassName('option').length; k++) {
			byID('newPileForm').getElementsByClassName('option')[k].classList.remove('action-selected');
		}
		for (var j=0;j<byID('updatePileForm').getElementsByClassName('option').length; j++) {
			byID('updatePileForm').getElementsByClassName('option')[j].classList.remove('action-selected');
		}
		materialAmount(0);
		
		byID('newPileForm').scrollTop = 0;
		byID('updatePileForm').scrollTop = 0;
	}
	
	// WARNING: Messy code
	self.okActiveProcess = function() {
		if (createPileProcessActive() == true) {
			alert("New pile being created... (coming soon)");
			createPileProcessActive(false);
			
			// Set appropriate category
			// Create new pile
			// Set current page to new pile details (page 3)
			
		}
		else if (updatePileProcessActive() == true) {
			// Do checks to see which page user came from to autofill pile ID
						
			alert("Updating pile status. Your community thanks you!");
			updatePileProcessActive(false);
		}
		
		// Reset material amount selection stuff
		for (var i=0;i<byID('newPileForm').getElementsByClassName('type').length; i++) {
			byID('newPileForm').getElementsByClassName('type')[i].classList.remove('action-selected');
		}
		for (var k=0;k<byID('newPileForm').getElementsByClassName('option').length; k++) {
			byID('newPileForm').getElementsByClassName('option')[k].classList.remove('action-selected');
		}
		for (var j=0;j<byID('updatePileForm').getElementsByClassName('option').length; j++) {
			byID('updatePileForm').getElementsByClassName('option')[j].classList.remove('action-selected');
		}
		materialAmount(0);
		
		byID('newPileForm').scrollTop = 0;
		byID('updatePileForm').scrollTop = 0;
		
	}
	
	// WARNING: Messy code (forms in general need this)
	self.newPileMaterialSelect = function(data, event) {
		for (var i=0;i<byID('newPileForm').getElementsByClassName('type').length; i++) {
			byID('newPileForm').getElementsByClassName('type')[i].classList.remove('action-selected');
		}
		event.currentTarget.classList.add('action-selected');
	}
	
	// WARNING: Messy code (forms in general need this)
	self.newPileMaterialAmountSelect = function(data, event) {
		// Reset button selection displays and add selected class to target
		for (var i=0;i<byID('newPileForm').getElementsByClassName('option').length; i++) {
			byID('newPileForm').getElementsByClassName('option')[i].classList.remove('action-selected');
		}
		event.currentTarget.classList.add('action-selected');
		
		// Change the chart image appropriately
		materialAmount(event.currentTarget.getAttribute('data-amount'));
	}
	
	// WARNING: Messy code
	self.updatePileMaterialAmountSelect = function(data, event) {
		// Reset button selection displays and add selected class to target
		for (var i=0;i<byID('updatePileForm').getElementsByClassName('option').length; i++) {
			byID('updatePileForm').getElementsByClassName('option')[i].classList.remove('action-selected');
		}
		event.currentTarget.classList.add('action-selected');
		
		// Change the chart image appropriately
		materialAmount(event.currentTarget.getAttribute('data-amount'));
	}
	
	self.createPile = function() {
		
	}
	
	self.getLocationFromGPS = function() {
		alert('Auto location via GPS coming soon.');
	}
	
	self.locationForm = function() {
		alert('Location entry form coming soon.');
	}
	
	self.toggleAbout = function() {
		if (isShowingAboutPage() == false) {
			isShowingAboutPage(true);
		}
		else {
			isShowingAboutPage(false);
		}
	}
	
	self.pageWrapClass = ko.computed(function() {
		if (currentPage() == 1 || currentPage() == 2) {
			// find the active category and return appropriate
			return activeCategory();
		}
	}, this);
	
	return self;
};

function CategoryViewModel(id, name) {
	var self = this;
	
	self.id = ko.observable(id);
	self.name = ko.observable(name);
	self.active = ko.observable(false);
	self.numPiles = ko.observable();
	self.piles = ko.observableArray([]);
	
	return self;
}

function PileViewModel(id, category, amt, fts, dist) {
	var self = this;
	
	self.id = ko.observable(id);
	self.active = ko.observable(false);
	self.category = ko.observable(category);
	self.createdOn = ko.observable();
	self.address = ko.observable();
	self.notes = ko.observable();
	
	self.distance = ko.observable(dist); // Temp until distance calculation comes into play from user entered location
	
	self.statuses = ko.observableArray();
	self.amount = ko.observable(amt); // TEMPORARY...?
	self.firstTimeStamp = ko.observable(fts); // TEMPORARY...?
	
	return self;
}

function AddressViewModel() {
	var self = this;
	
	self.line1 = ko.observable();
	self.line2 = ko.observable();
	self.city = ko.observable();
	self.state = ko.observable();
	self.zip = ko.observable();
	
	return self;
}

function StatusViewModel() {
	var self = this;
	
	self.amount = ko.observable();
	self.timestamp = ko.observable();
	
	return self;
}

function UserViewModel() {
	var self = this;
	
	self.location = ko.observable();
}
