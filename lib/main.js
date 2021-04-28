import AppState from "./services/appState.js";
import State from "./services/state.js";

window.addEventListener("load", function(event){
  var x = window.innerWidth;
  setScreen(x);
  let appState = new AppState('home', x);
  appState.setState();
  console.log('welcome!');
});

window.addEventListener("resize", function(event){
  var x = window.innerWidth;
  setScreen(x);
  let state = new State();
  let appState = new AppState(state.getState(), x);
  appState.setState();
});

function setScreen(screenType){
  var xhttp = new XMLHttpRequest();
  var mainBody = document.getElementById('mainBody');
  // var scrType = screenType;
  if(screenType >= 800){
    var url = '../layouts/desktop/main.html';
    console.log('changing to desktop state...');
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4){
        if(this.status == 200){mainBody.innerHTML = this.responseText;}
        if (this.status == 404) {mainBody.innerHTML = "Page not found.";}
        // setScreen(scrType);
      }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
    return;
  }else if(screenType < 800){
    var url = '../layouts/mobile/main.html';
    console.log('changing to mobile state...');
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4){
        if(this.status == 200){mainBody.innerHTML = this.responseText;}
        if (this.status == 404) {mainBody.innerHTML = "Page not found.";}
        // setScreen(scrType);
      }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
    return;
  }
}