import App from "../views/js/app.js";
import AppState from "./appState.js";

var stateApp, screenSize;

class State{
    constructor(stateName = '', screenType = 1366){
        this.stateName = stateName;
        this.screenType = screenType;
    }

    setState(){
        stateApp = this.stateName;
        return console.log('state has changed into ' + stateApp + ' state');
    }

    setScreen(){
        screenSize = this.screenType;
        return console.log('app screen size has changed into ' + screenSize);
    }

    changeState(){
        let app = new App(stateApp, screenSize);
        app.beginSetApp();
        return console.log('loading new state ... ');
    }

    getState(){
        return stateApp;
    }

    getScreen(){
        return screenSize;
    }

}

export default State;