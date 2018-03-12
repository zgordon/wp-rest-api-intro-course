import Header from './components/Header';

export default class App {

    /**
     * init - Initialize the app
     * @return {void} Not meant to return
     */
    static init() {
        Header.render();
    }

}

App.init();
