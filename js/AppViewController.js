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
			new CategoryViewModel(1, "Woodchips"),
			new CategoryViewModel(2, "Sticks"),
			new CategoryViewModel(3, "Leaves"),
			new CategoryViewModel(4, "Pine Needles"),
			new CategoryViewModel(5, "Hay"),
			new CategoryViewModel(6, "Rocks"),
			new CategoryViewModel(7, "Pebbles")
		];
		
		appViewModel.categories(categories);
		
	}

	self.getCategoryNumPiles = function() {
		var dirtPiles = [
			new PileViewModel(1,"Dirt",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(2,"Dirt",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(3,"Dirt",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(4,"Dirt",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[0].piles(dirtPiles);
		appViewModel.categories()[0].numPiles(dirtPiles.length);
		
		var woodchipPiles = [
			new PileViewModel(5,"Woodchip",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(6,"Woodchip",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(7,"Woodchip",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(8,"Woodchip",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(9,"Woodchip",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(10,"Woodchip",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(11,"Woodchip",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[1].piles(woodchipPiles);
		appViewModel.categories()[1].numPiles(woodchipPiles.length);
		
		var stickPiles = [
			new PileViewModel(12,"Stick",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(13,"Stick",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(14,"Stick",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[2].piles(stickPiles);
		appViewModel.categories()[2].numPiles(stickPiles.length);
		
		var leafPiles = [
			new PileViewModel(15,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(16,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(17,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(18,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(19,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(20,"Leaves",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[3].piles(leafPiles);
		appViewModel.categories()[3].numPiles(leafPiles.length);
		
		var pinePiles = [
			new PileViewModel(21,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(22,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(23,"Pine Needles",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[4].piles(pinePiles);
		appViewModel.categories()[4].numPiles(pinePiles.length);
		
		var hayPiles = [
			new PileViewModel(24,"Hay",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(25,"Hay",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(26,"Hay",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[5].piles(hayPiles);
		appViewModel.categories()[5].numPiles(hayPiles.length);
		
		var rockPiles = [
			new PileViewModel(27,"Rocks",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(28,"Rocks",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[6].piles(rockPiles);
		appViewModel.categories()[6].numPiles(rockPiles.length);
		
		var pebblePiles = [
			new PileViewModel(29,"Pebbles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(30,"Pebbles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(31,"Pebbles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(32,"Pebbles",randNum(1,7),randNum(1,24),randNum(0,50)),
			new PileViewModel(33,"Pebbles",randNum(1,7),randNum(1,24),randNum(0,50))
		];
		appViewModel.categories()[7].piles(pebblePiles);
		appViewModel.categories()[7].numPiles(pebblePiles.length);
		
	}
	
	
	return self;
}

function randNum(min, max) {
	return (Math.floor((Math.random() * (max-min))) + min);
}




























