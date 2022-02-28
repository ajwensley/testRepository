({
	myAction : function(component, event, helper) {
		
	},
    
    toggleVisible : function(component, event, helper) {
        let state = component.get("v.state") + 1;
        if (state > 2) state = 0;
		component.set("v.state", state);
	},
    
    toggleColor : function(component, event, helper) {
		//component.set("v.state", 0);
	}
})