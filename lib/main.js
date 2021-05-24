import AppState from "./services/appState.js";
import State from "./services/state.js";



document.body.addEventListener("click", e => {
  if (e.target.matches("[route]")) {
      e.preventDefault();
      var str = e.target.getAttribute('route-name');
      console.log('routing app to '+str);
      let state = new State(str);
      state.setState();
      state.changeState();
  }
  if(e.target.matches("[open-btn]")){
    console.log('clicked');
  }
});



// function initApp(){
//   var screenType = window.innerWidth;
//   // setScreen(screenType);
//   var mainApp = document.getElementById('app');
//   var url;
//   var xhttp = new XMLHttpRequest();
//   if (screenType >= 800){
//     url = '/lib/views/desktop/landing-app.html';
//   }else{
//     url = '/lib/views/mobile/landing-app.html';
//   }
//   xhttp.onreadystatechange = function(){
//     if(this.readyState == 4){
//       if(this.status == 200){mainApp.innerHTML = this.responseText;}
//       if (this.status == 404) {mainApp.innerHTML = "Page not found.";}
//     }
//   }
//   xhttp.open("GET", url, true);
//   xhttp.send();
//   return;
// }

// initApp();

// window.onload = function(){
//   var screenType = window.innerWidth;
//   // setScreen(screenType);
//   var mainApp = document.getElementById('app');
//   var url;
//   var xhttp = new XMLHttpRequest();
//   if (screenType >= 800){
//     url = '/lib/views/desktop/landing-app.html';
//   }else{
//     url = '/lib/views/mobile/landing-app.html';
//   }
//   xhttp.onreadystatechange = function(){
//     if(this.readyState == 4){
//       if(this.status == 200){mainApp.innerHTML = this.responseText;}
//       if (this.status == 404) {mainApp.innerHTML = "Page not found.";}
//     }
//   }
//   xhttp.open("GET", url, true);
//   xhttp.send();
//   return;
// }

// window.addEventListener('DOMContentLoaded', () => {

  // let state = new State();
  // state.changeState();
  
  // initApp();

  // window.addEventListener("resize", function(event){
  //   var x = window.innerWidth;
  //   setScreen(x);
  //   let state = new State();
  //   let appState = new AppState(state.getState(), x);
  //   appState.setState();
  // });


// });


// document.addEventListener('DOMContentLoaded', () => {

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
//   });

// });

// function setScreen(screenType){
//   var xhttp = new XMLHttpRequest();
//   var mainBody = document.getElementById('mainBody');
//   // var scrType = screenType;
//   if(screenType >= 800){
//     var url = '../layouts/desktop/main.html';
//     console.log('changing to desktop state...');
//     xhttp.onreadystatechange = function(){
//       if(this.readyState == 4){
//         if(this.status == 200){mainBody.innerHTML = this.responseText;}
//         if (this.status == 404) {mainBody.innerHTML = "Page not found.";}
//         // setScreen(scrType);
//       }
//     }
//     xhttp.open("GET", url, true);
//     xhttp.send();
//     return;
//   }else if(screenType < 800){
//     var url = '../layouts/mobile/main.html';
//     console.log('changing to mobile state...');
//     xhttp.onreadystatechange = function(){
//       if(this.readyState == 4){
//         if(this.status == 200){mainBody.innerHTML = this.responseText;}
//         if (this.status == 404) {mainBody.innerHTML = "Page not found.";}
//         // setScreen(scrType);
//       }
//     }
//     xhttp.open("GET", url, true);
//     xhttp.send();
//     return;
//   }
// }

// async function setScreenOnload(){
//   var x = window.innerWidth;
//   setScreen(x);
// }

// function afterScreenLoaded(){
//   const openNav = document.querySelector(".open-btn");
//   const closeNav = document.querySelector(".close-btn");
//   const menu = document.querySelector(".nav-list");
  
//   const menuLeft = menu.getBoundingClientRect().left;
//   openNav.addEventListener("click", () => {
//     if (menuLeft < 0) {
//       menu.classList.add("show");
//     }
//   });
  
//   closeNav.addEventListener("click", () => {
//     if (menuLeft < 0) {
//       menu.classList.remove("show");
//     }
//   });
  
//   // Fixed Nav
  
  
//   // Scroll To
//   const links = [...document.querySelectorAll(".scroll-link")];
//   links.map(link => {
//     if (!link) return;
//     link.addEventListener("click", e => {
//       e.preventDefault();
  
//       const id = e.target.getAttribute("href").slice(1);
  
//       const element = document.getElementById(id);
//       const fixNav = navBar.classList.contains("fix-nav");
//       let position = element.offsetTop - navHeight;
  
//       window.scrollTo({
//         top: position,
//         left: 0,
//       });
  
//       navBar.classList.remove("show");
//       menu.classList.remove("show");
//       document.body.classList.remove("show");
//     });
//   });
// }

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

// setScreenOnload().then(
//   () => {
//     window.addEventListener('DOMContentLoaded', () => {
//       var navBar = document.getElementById('nav');
//       var navHeight = window.innerHeight * 0.009;
//   window.addEventListener("scroll", () => {
//     const scrollHeight = window.pageYOffset;
//     if (scrollHeight > navHeight) {
//       navBar.setAttribute('class', 'nav fix-nav');
//     } else {
//       navBar.setAttribute('class', 'nav');
//     }
//   });
//     });
//   }
// );

// setScreenOnload();
// event delegation 