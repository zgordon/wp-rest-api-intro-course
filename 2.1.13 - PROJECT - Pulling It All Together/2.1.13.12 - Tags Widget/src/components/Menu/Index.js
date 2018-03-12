import config from '../../lib/config';
import MenuItem from './Item';

export default class Menu {

    /**
     * render - Displays the menu on the page
     *
     */
    static render() {

        config.wp.pages()
            .parent( 0 )
            .order( 'asc' )
            .orderby( 'menu_order' )
            .then( pages => {
                let menuPages = pages.map( page => MenuItem.render( page ) );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}
