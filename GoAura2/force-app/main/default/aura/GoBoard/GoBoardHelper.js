({
    nextPlayer : function(component) {
		let player = component.get("v.currentPlayer") + 1;
        if (player > 2) player = 1;
        component.set("v.currentPlayer", player);
	},
    
    recreate : function(component, state) {
		component.set("v.spaces", state);
	},
    
	helperMethod : function() {
		
	},
    
    resize : function(component, size) {
        let spacesOuter = [];
        for (let i = 0; i < size; i++) {
            let spacesInner = [];
        	for (let i = 0; i < size; i++) spacesInner.push(0);
            spacesOuter.push(spacesInner);
        }
        component.set("v.spaces", spacesOuter);
	}
})