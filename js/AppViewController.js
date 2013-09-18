/** 
	The view controller is the main entity that manages the
	interaction between the server side model and the veiw model.
	This allows the back-end model and view model to change
	independently, and the only thing that needs adjustment
	is the view controller. Think of this as an API between
	some external data server and the application.
	
	All piles get assigned random integers for every app
	(page) refresh. This is done for the following pile properties:
		* Amount (size of pile)
		* Status (assigned 2 to 4 statuses + amounts)
		* Distance (away from the user)
	
	Is there a way to randomize addresses? (number + name generator)
	Is there a way to randomize ID#s to be random names? (name generator)
	
**/
function AppViewController() {
	var self = this;
	
	self.init = function() {
		self.getCategories();
		self.getCategoryNumPiles();
	}
	
	self.getCategories = function() {
		var categories = [
			new CategoryViewModel(0, "Leaves"),
			new CategoryViewModel(1, "Pine Needles"),
			new CategoryViewModel(2, "Rocks"),
			new CategoryViewModel(3, "Woodchips")
		];
		
		appViewModel.categories(categories);
		
	}

	self.getCategoryNumPiles = function() {
		var leafPiles = [
			new PileViewModel(1,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(2,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(3,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(4,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[0].piles(leafPiles);
		appViewModel.categories()[0].numPiles(leafPiles.length);
		
		var pineneedlesPiles = [
			new PileViewModel(5,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(6,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(7,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(8,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(9,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(10,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(11,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[1].piles(pineneedlesPiles);
		appViewModel.categories()[1].numPiles(pineneedlesPiles.length);
		
		var rockPiles = [
			new PileViewModel(12,"Rocks",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(13,"Rocks",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(14,"Rocks",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[2].piles(rockPiles);
		appViewModel.categories()[2].numPiles(rockPiles.length);
		
		var woodchipPiles = [
			new PileViewModel(15,"Woodchips",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(16,"Woodchips",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(17,"Woodchips",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(18,"Woodchips",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(19,"Woodchips",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(20,"Woodchips",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[3].piles(woodchipPiles);
		appViewModel.categories()[3].numPiles(woodchipPiles.length);
		
	}
	
	
	return self;
}

function randNum(min, max) {
	return (Math.floor((Math.random() * (max-min))) + min);
}




























