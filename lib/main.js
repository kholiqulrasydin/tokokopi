import AppState from "./services/appState.js";
import State from "./services/state.js";

setScreenOnload();
document.body.addEventListener("click", e => {
      if (e.target.matches("[route]")) {
          e.preventDefault();
          var str = e.target.getAttribute('route-name');
          console.log('routing app to '+str);
          let state = new State(str);
          state.setState();
          console.log("changed state to "+ state.getState());
          var x = window.innerWidth;
          let appState = new AppState(state.getState(), x);
          appState.setState();
      }
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

function setScreenOnload(){
  var x = window.innerWidth;
  setScreen(x);
}

// async function onInit(){
//   var screenType = window.innerWidth;
//   setScreen(screenType);
//   var route = document.querySelector('[primaryRoute]').getAttribute('route-name');
//   // var route = 'home';
//   let state = new State(route);
//   state.setState();
//   // let appState = new AppState(state.getState(), route);
//   // appState.setState();
// }

// function addStatetoStart(){
//   let state = new State('home');
//   state.setState();
// }

// function changeAppState(){
//   var x = window.innerWidth;
//   let state = new State();
//   let appState = new AppState(state.getState(), x);
//   appState.setState();
// }

// var funqueue = [];
// funqueue.push(setScreenOnload);
// funqueue.push(addStatetoStart);
// funqueue.push(changeAppState);


// window.addEventListener("load", function(event){
//   (funqueue.shift())();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   console.log('welcome!');
  
//   document.body.addEventListener("click", e => {
//     if (e.target.matches("[route]")) {
//         e.preventDefault();
//         var str = e.target.getAttribute('route-name');
//         console.log('routing app to '+str);
//         let state = new State(str);
//         state.setState();
//         console.log("changed state to "+ state.getState());
//         var x = window.innerWidth;
//         let appState = new AppState(state.getState(), x);
//         appState.setState();
//     }
// });

// });
