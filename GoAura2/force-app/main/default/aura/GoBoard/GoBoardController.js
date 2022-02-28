({
	resize : function(component, event, helper) {
		helper.resize(component, component.find("sizeInput").get("v.value"));
	},
    
    setTurnType : function(component, event, helper) {
        let turnType = component.find("turnType").get("v.value");
        if (turnType == -1) {
            component.set("v.alternate", true);
            component.set("v.currentPlayer", 1);
        } else {
            component.set("v.alternate", false);
            component.set("v.currentPlayer", parseInt(component.find("turnType").get("v.value")));
        }
	},
    
    clickSpace : function(component, event, helper) {
		let xaxis = event.target.dataset.xaxis;
        let yaxis = event.target.dataset.yaxis;
        let temp = component.get("v.spaces");
        temp[yaxis][xaxis] = component.get("v.currentPlayer");
        component.set("v.spaces", temp);
        if (component.get("v.alternate")) helper.nextPlayer(component);
	},
    
    saveJS : function(component, event, helper) {
		var job = component.get("c.save");
        let temp = component.find("saveInput").get("v.value");
        job.setParams({ name : temp, data : JSON.stringify(component.get("v.spaces")) });
        $A.enqueueAction(job);
	},
    
    loadJS : function(component, event, helper) {
		var job = component.get("c.loadJSON");
        let temp = component.find("saveInput").get("v.value");
        job.setParams({ name : temp });
        job.setCallback(this, function(response) {
            console.log(response.getReturnValue());
            console.log(JSON.parse(response.getReturnValue()));
            helper.recreate(component, JSON.parse(response.getReturnValue()));
        });
        $A.enqueueAction(job);
	},
    
    myAction : function(component, event, helper) {
		
	},
    
    setup : function(component, event, helper) {
        helper.resize(component, component.get("v.size"));
	}
})