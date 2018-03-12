import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Page {

    /**
     * render - Display pages on the Page
     *
     * @param  {String} slug The slug of the page to display
     */
    static render( slug ) {

        return new Promise( resolve => {

            config.wp.pages()
                .slug( slug )
                .embed()
                .perPage( 1 )
                .then( pages => {
                    if ( pages[ 0 ] ) {
                        Helpers.renderContent( pages[ 0 ] );
                    } else {
                        Helpers.renderContent( config.page404 );
                    }
                    resolve();
                } )
                .catch( err => {
                    console.log( `Error: ${err}` );
                } );
        } );

    }

}