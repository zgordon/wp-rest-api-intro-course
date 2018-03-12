import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Category {

    /**
     * render - Display Posts on the post
     *
     * @param {Integer} catID the ID for the Categories to display
     */
    static render( catID = '' ) {

        config.wp.posts()
            .embed()
            .categories( catID )
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
