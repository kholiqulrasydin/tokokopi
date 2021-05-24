import State from "../../services/state.js";

function layoutSet(screenType){
    var xhttp = new XMLHttpRequest();
    var mainBody = document.getElementById('mainBody');
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

window.onload = () => {
    var screenType = window.innerWidth;
    let state = new State('home', screenType);
    state.setScreen();
    state.setState();
    layoutSet(screenType);
}
var inv = setInterval(()=>{ let state = new State(); state.changeState();}, 100);

  window.addEventListener("resize", () => {
    var x = window.innerWidth;
    let state = new State('', x);
    state.setScreen();
    layoutSet(state.getScreen());
    setTimeout(clearInterval(setInterval(()=>{state.changeState();}, 100)), 1000);
  });

document.addEventListener('scroll', () => {clearInterval(inv);});

