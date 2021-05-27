class ScreenService{
    constructor(screenType){
        this.screenType = screenType;
    }

    setLayout(){
        var xhttp = new XMLHttpRequest();
        var mainBody = document.getElementById('mainBody');
        if(this.screenType >= 800){
          var url = '/layouts/desktop/main.html';
          console.log('changing to desktop state...');
          xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
              if(this.status == 200){mainBody.innerHTML = this.responseText;}
              if (this.status == 404) {mainBody.innerHTML = "Page not found.";}
            }
          }
          xhttp.open("GET", url, true);
          xhttp.send();
          return;
        }else if(this.screenType < 800){
          var url = '/layouts/mobile/main.html';
          console.log('changing to mobile state...');
          xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
              if(this.status == 200){mainBody.innerHTML = this.responseText;}
              if (this.status == 404) {mainBody.innerHTML = "Page not found.";}
            }
          }
          xhttp.open("GET", url, true);
          xhttp.send();
          return;
        }
      }
}

export default ScreenService;