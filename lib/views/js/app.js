import AppState from "../../services/appState.js";

class App{
    constructor(routeName, screenType){
        this.routeName = routeName;
        this.screenType = screenType;
    }

    beginSetApp(){
        let appBody = new AppState(this.routeName);
        var appName = appBody.getUrlApp();
        console.log(this.screenType + " " + appName);
        // var dynamicUrl = 'url';
        var url;
        if(this.screenType >= 800){
<<<<<<< HEAD
          url = 'lib/views/desktop/' + appName + '.html';
          // eval('var' + dynamicUrl + ' = ' + "../desktop/" + appName + ".html" + ';');
        }else{
          // eval('var' + dynamicUrl + ' = ' + "../mobile/" + appName + ".html" + ';');
          url = 'lib/views/mobile/' + appName + '.html';
=======
          url = '/lib/views/desktop/' + appName + '.html';
          // eval('var' + dynamicUrl + ' = ' + "../desktop/" + appName + ".html" + ';');
        }else{
          // eval('var' + dynamicUrl + ' = ' + "../mobile/" + appName + ".html" + ';');
          url = '/lib/views/mobile/' + appName + '.html';
>>>>>>> 3a34d86043b137be6df18816ac3a0ac99f03203c
        }
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