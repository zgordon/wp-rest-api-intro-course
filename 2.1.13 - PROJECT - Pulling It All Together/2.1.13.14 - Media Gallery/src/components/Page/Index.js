import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Page {

    /**
     * render - Display pages on the Page
     *
     * @param  {String} slug The slug of the page to display
     */
    static render( slug ) {

        config.wp.pages()
            .slug( slug )
            .embed()
            .perPage( 1 )
            .then( pages => {
                if ( pages[ 0 ] ) {
                    Helpers.clearPage();
                    Helpers.renderContent( pages[ 0 ] );
                } else {
                    Helpers.clearPage();
                    Helpers.renderContent( config.page404 );
                }
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}