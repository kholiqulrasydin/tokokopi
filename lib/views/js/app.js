import AppState from "../../services/appState.js";

class App{
    constructor(routeName, screenType){
        this.routeName = routeName;
        this.screenType = screenType;
    }

    beginSetApp(){
        let appBody = new AppState(this.routeName);
        var appName = appBody.getUrlApp();
        console.log(this.screenType + appName);
        var url = function(){
          if(this.screenType >= 800){
            return '../desktop/' + appBody.getUrlApp() + '.html';
          }else{
            return '../mobile/' + appBody.getUrlApp() + '.html';
          }
        };
        var xhttp = new XMLHttpRequest();
        var mainApp = document.getElementById('app');

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
              if(this.status == 200){mainApp.innerHTML = this.responseText;}
              if (this.status == 404) {mainApp.innerHTML = "Page not found.";}
            }
          }
          xhttp.open("GET", url, true);
          xhttp.send();
          return;
    }
}

export default App;