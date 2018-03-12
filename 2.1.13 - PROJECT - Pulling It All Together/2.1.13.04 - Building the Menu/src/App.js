import Header from './components/Header';
import Menu from './components/Menu/Index';

export default class App {

    /**
     * init - Initialize the app
     * @return {void} Not meant to return
     */
    static init() {
        Header.render();
        Menu.render();
    }

}

App.init();
