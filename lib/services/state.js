var stateApp;

class State{
    constructor(stateName = ''){
        this.stateName = stateName;
    }

    setState(){
        stateApp = this.stateName;
        return;
    }

    getState(){
        return stateApp;
    }

}

export default State;