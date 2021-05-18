var stateApp;

class State{
    constructor(stateName = ''){
        this.stateName = stateName;
    }

    setState(){
        stateApp = this.stateName;
        return console.log('state has changed into ' + stateApp + ' state');
    }

    getState(){
        return stateApp;
    }

}

export default State;