import RenderMe from "./services/render-me.js";
import ScreenService from "./services/screen-service.js";
import State from "./services/state.js";
import DesktopAboutApp from "./views/desktop/js/about-app.js";
import DekstopCartApp from "./views/desktop/js/cart-app.js";
import DesktopLandingApp from "./views/desktop/js/landing-app.js";
import DesktopProductsApp from "./views/desktop/js/products-app.js"
import MobileAboutApp from "./views/mobile/js/about-app.js";
import MobileCartApp from "./views/mobile/js/cart-app.js";
import MobileLandingApp from "./views/mobile/js/landing-app.js";
import MobileProductsApp from "./views/mobile/js/products-app.js";

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
    screenService.setLayout();
    let state = new State('', screenType);
    state.setScreen();
    var continueState = () => withCallback(state.changeState, runViewScript);
    setTimeout(continueState, 2000);
  })
    

], true);

renderUp.runTest();
renderUp.runMe();

}

function layoutTweaks(){
const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

}

function withCallback(overview, callback){
  overview();
  return setTimeout(callback, 1000);
}

function runViewScript(){
  let state = new State();
    var isDesktop = state.getScreen() > 800 ? true : false;
    isDesktop ? layoutTweaks() : () => {};

    switch (state.getState()) {
      case 'home':
        isDesktop ? DesktopLandingApp() : MobileLandingApp();
        break;
    
      case 'products':
        isDesktop ? DesktopProductsApp() : MobileProductsApp();
        break;

      case 'cart':
        isDesktop ? DekstopCartApp() : MobileCartApp();
        break;
      
      case 'about':
        isDesktop ? DesktopAboutApp() : MobileAboutApp();
      default:
        break;
    }
}
export default Main;