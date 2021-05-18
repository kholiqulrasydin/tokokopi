import App from '../views/js/app.js';
import RouteAttribute from './routes.js';
import State from './state.js';

class AppState {
    constructor(stateName, screenType = 1366){
        this.stateName = stateName;
        this.screenType = screenType;
    }

    getUrlApp(){
        var url = RouteAttribute.find(route => {
            return route.routeName === this.stateName
        });
        return url.routeApp;
    }

    getStateName(){
        return this.stateName;
    }

    setState(){
        let state = new AppState(this.stateName);
        let push = new App(this.stateName, this.screenType);
        let setState = new State(this.stateName);
        push.beginSetApp();
        setState.setState();
        return console.log('go to ' + state.getStateName() + ' page ...');
    }
}

export default AppState;