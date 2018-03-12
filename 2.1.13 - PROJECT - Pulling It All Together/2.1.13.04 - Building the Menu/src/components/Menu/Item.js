import config from "../../lib/config";
import Helpers from "../../lib/Helpers";

export default class MenuItem {

    /**
     * render - Displays the a menu item for a page
     * @param {Object} page The page to be displayed
     *
     */
    static render( page ) {

        let li = document.createElement( 'li' ),
            liMarkup = '',
            hash = Helpers.makeHashFromLink( page );

        liMarkup += `<a href="${hash}">`;
        liMarkup += page.title.rendered;
        liMarkup += '</a>';

        li.innerHTML = liMarkup;
        config.menuContainer.appendChild( li );

    }

}
