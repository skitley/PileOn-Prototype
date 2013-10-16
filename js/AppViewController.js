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
			new CategoryViewModel(0, "Dirt"),
			new CategoryViewModel(1, "Hay & Grass"),
			new CategoryViewModel(2, "Leaves"),
			new CategoryViewModel(3, "Mulch"),
			new CategoryViewModel(4, "Pine Needles"),
			new CategoryViewModel(5, "Rocks"),
			new CategoryViewModel(6, "Sand"),
			new CategoryViewModel(7, "Sticks"),
			new CategoryViewModel(8, "Woodchips")
		];
		
		appViewModel.categories(categories);
		
	}

	self.getCategoryNumPiles = function() {
		var dirtPiles = [
			new PileViewModel(1,"Dirt",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(2,"Dirt",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(3,"Dirt",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(4,"Dirt",randNum(1,5),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[0].piles(dirtPiles);
		appViewModel.categories()[0].numPiles(dirtPiles.length);
		
		var hayPiles = [
			new PileViewModel(5,"Hay & Grass",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(6,"Hay & Grass",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(7,"Hay & Grass",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(8,"Hay & Grass",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(9,"Hay & Grass",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(10,"Hay & Grass",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(11,"Hay & Grass",randNum(1,5),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[1].piles(hayPiles);
		appViewModel.categories()[1].numPiles(hayPiles.length);
		
		var leavesPiles = [
			new PileViewModel(12,"Leaves",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(13,"Leaves",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(14,"Leaves",randNum(1,5),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[2].piles(leavesPiles);
		appViewModel.categories()[2].numPiles(leavesPiles.length);
		
		var mulchPiles = [
			new PileViewModel(15,"Mulch",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(16,"Mulch",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(17,"Mulch",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(18,"Mulch",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(19,"Mulch",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(20,"Mulch",randNum(1,5),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[3].piles(mulchPiles);
		appViewModel.categories()[3].numPiles(mulchPiles.length);
		
		var pinePiles = [
			new PileViewModel(21,"Pine Needles",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(22,"Pine Needles",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(23,"Pine Needles",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(24,"Pine Needles",randNum(1,5),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[4].piles(pinePiles);
		appViewModel.categories()[4].numPiles(pinePiles.length);
		
		var rockPiles = [
			new PileViewModel(25,"Rocks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(26,"Rocks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(27,"Rocks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(28,"Rocks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(29,"Rocks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(30,"Rocks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(31,"Rocks",randNum(1,5),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[5].piles(rockPiles);
		appViewModel.categories()[5].numPiles(rockPiles.length);
		
		var sandPiles = [
			new PileViewModel(32,"Sand",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(33,"Sand",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(34,"Sand",randNum(1,5),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[6].piles(sandPiles);
		appViewModel.categories()[6].numPiles(sandPiles.length);
		
		var stickPiles = [
			new PileViewModel(35,"Sticks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(36,"Sticks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(37,"Sticks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(38,"Sticks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(39,"Sticks",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(40,"Sticks",randNum(1,5),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[7].piles(stickPiles);
		appViewModel.categories()[7].numPiles(stickPiles.length);
		
		var woodchipPiles = [
			new PileViewModel(45,"Woodchips",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(46,"Woodchips",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(47,"Woodchips",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(48,"Woodchips",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(49,"Woodchips",randNum(1,5),randNum(1,24),randNum(0,50)),
			new PileViewModel(50,"Woodchips",randNum(1,5),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[8].piles(woodchipPiles);
		appViewModel.categories()[8].numPiles(woodchipPiles.length);
		
	}
	
	
	return self;
}

function randNum(min, max) {
	return (Math.floor((Math.random() * (max-min))) + min);
}




























