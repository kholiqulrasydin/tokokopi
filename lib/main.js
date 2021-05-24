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