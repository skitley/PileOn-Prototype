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
	
	// Holds all the view data
	self.categories = ko.observableArray([]);
	
	/*
		Moves to the next page, changes active category
		and/or active pile accordingly.
	*/
	self.nextPage = function(data, event) {
		currentPage(currentPage() + 1);
		
		// Going to page 2 (list of piles in category)
		if (currentPage() == 1) {
			activeCategory = $$(event.currentTarget).attr('data-category');
			
			for (var i=0; i<categories().length; i++) {
				categories()[i].active(false);
			}
			categories()[activeCategory].active(true);
		}
		// Going to page 3 (pile details page)
		else if (currentPage() == 2) {
			
		}
		// Going to page 4 (map page)
		else if (currentPage() ==3) {
		
		}
		
		setPageHeight();
	}
	
	// Set the page height everytime a page change occurs
	self.setPageHeight = function() {
		
	}
	
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

function PileViewModel(id, category) {
	var self = this;
	
	self.id = ko.observable(id);
	self.active = ko.observable(false);
	self.category = ko.observable(category);
	self.createdOn = ko.observable();
	self.address = ko.observable();
	self.notes = ko.observable();
	self.statuses = ko.observableArray();
	
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
