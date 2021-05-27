import Main from "./main.js";
import ScreenService from "./services/screen-service.js";
import State from "./services/state.js";

function getInitialState(){
    var initialRouteName = document.querySelector('[primaryRoute]').getAttribute('route-name');
    console.log('catching ' + initialRouteName + ' as default state ... ');
    let state = new State(initialRouteName, 0);
    state.setState();
    setTimeout(state.changeState, 2000)
}

function initScreen(screenType, initialStateCallback, mainFunction){
  let layout = new ScreenService(screenType);
  layout.setLayout();
  let state = new State('', screenType);
  state.setScreen();
  setTimeout(initialStateCallback, 1000);
  setTimeout(mainFunction, 2500);
} 

window.onload = () => {
    var screenType = window.innerWidth;
    initScreen(screenType, getInitialState, Main);
}
