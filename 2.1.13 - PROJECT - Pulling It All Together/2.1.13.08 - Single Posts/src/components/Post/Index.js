import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Post {

    /**
     * render - Display Posts on the post
     *
     * @param  {String} slug Slug of post to display
     */
    static render( slug ) {

        config.wp.posts()
            .slug( slug )
            .embed()
            .then( post => {
                Helpers.renderContent( post[ 0 ], 'h1', false );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}
