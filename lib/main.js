import ProductsProvider from "./services/provider/products-provider.js";
import RenderMe from "./services/render-me.js";
import RouteAttribute from "./services/routes.js";
import ScreenService from "./services/screen-service.js";
import State from "./services/state.js";
import DesktopLandingApp from "./views/desktop/js/landing-app.js";
import MobileLandingApp from "./views/mobile/js/landing-app.js";

function Main() {
let renderUp = new RenderMe([

  () => 
    document.body.addEventListener("click", e => {
      if (e.target.matches("[route]")) {
          e.preventDefault();
          var str = e.target.getAttribute('route-name');
          console.log('routing app to '+str);
          let state = new State(str);
          state.setState();
          state.changeState();
          setTimeout(runViewScript, 2000);
      }
    }),

  () => setTimeout(() => {
    
    runViewScript();
    
  }, 1000),

  () => window.addEventListener('resize', () => {

    var screenType = window.innerWidth;
    let screenService = new ScreenService(screenType);
    let state = new State('', screenType);
    state.setScreen();
    screenService.setLayout();
    setTimeout(state.changeState, 1000);
    setTimeout(runViewScript, 1000);
  })
    

], true);

renderUp.runTest();
renderUp.runMe();

}


function runViewScript(){
  let state = new State();
    var isDesktop = state.getScreen() > 800 ? true : false;

    switch (state.getState()) {
      case 'home':
        isDesktop ? DesktopLandingApp() : MobileLandingApp();
        break;
    
      default:
        break;
    }
}
export default Main;