import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class tagPosts {

    /**
     * render - Display Posts from given tag ID
     *
     * @param {Integer} id The ID for the tag to filter Posts by
     */
    static render( id = '' ) {

        config.wp.posts()
            .embed()
            .tags( id )
            .then( posts => {
                let renderedPosts = posts.map( post => {
                    Helpers.renderContent( post, 'h2', true );
                } );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}