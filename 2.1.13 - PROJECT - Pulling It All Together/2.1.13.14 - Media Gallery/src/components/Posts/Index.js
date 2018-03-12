import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Posts {

    /**
     * render - Display Posts on the post
     *
     */
    static render() {


        config.wp.posts()
            .embed()
            .then( posts => {
                Helpers.renderHeader( 'Blog', 'h1' );
                let renderedPosts = posts.map( content => {
                    Helpers.renderContent( content, 'h2', true );
                } );
            } )
            .catch( err => {
                console.log( 'Error: ' + err );
            } );


    }

}
