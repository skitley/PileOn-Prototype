/** 
	The view controller is the main entity that manages the
	interaction between the server side model and the veiw model.
	This allows the back-end model and view model to change
	independently, and the only thing that needs adjustment
	is the view controller. Think of this as an API between
	some external data server and the application.
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
			new CategoryViewModel(5, "Rocks"),
			new CategoryViewModel(6, "Pebbles")
		];
		
		appViewModel.categories(categories);
		
	}

	self.getCategoryNumPiles = function() {
		var dirtPiles = [
			new PileViewModel(1,"Dirt"),
			new PileViewModel(2,"Dirt"),
			new PileViewModel(3,"Dirt"),
			new PileViewModel(4,"Dirt")
		];
		appViewModel.categories()[0].piles(dirtPiles);
		appViewModel.categories()[0].numPiles(dirtPiles.length)
		
		var woodchipPiles = [
			new PileViewModel(5,"Woodchip"),
			new PileViewModel(6,"Woodchip"),
			new PileViewModel(7,"Woodchip"),
			new PileViewModel(8,"Woodchip"),
			new PileViewModel(9,"Woodchip"),
			new PileViewModel(10,"Woodchip"),
			new PileViewModel(11,"Woodchip")
		];
		appViewModel.categories()[1].piles(woodchipPiles);
		appViewModel.categories()[1].numPiles(woodchipPiles.length)
		
		var stickPiles = [
			new PileViewModel(12,"Stick")
		];
		appViewModel.categories()[2].piles(stickPiles);
		appViewModel.categories()[2].numPiles(stickPiles.length)
		
		var leafPiles = [
			new PileViewModel(13,"Leaves")
		];
		appViewModel.categories()[3].piles(leafPiles);
		appViewModel.categories()[3].numPiles(leafPiles.length)
		
		var pinePiles = [
			new PileViewModel(14,"Pine Needles")
		];
		appViewModel.categories()[4].piles(pinePiles);
		appViewModel.categories()[4].numPiles(pinePiles.length)
		
		var rockPiles = [
			new PileViewModel(15,"Rocks")
		];
		appViewModel.categories()[5].piles(rockPiles);
		appViewModel.categories()[5].numPiles(rockPiles.length)
		
		var pebblePiles = [
			new PileViewModel(16,"Rocks")
		];
		appViewModel.categories()[6].piles(pebblePiles);
		appViewModel.categories()[6].numPiles(pebblePiles.length)
		
	}
	
	
	return self;
}





























