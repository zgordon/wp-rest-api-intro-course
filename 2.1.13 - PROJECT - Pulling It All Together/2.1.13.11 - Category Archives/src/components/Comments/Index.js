import config from '../../lib/config';
import Comment from './Comment';

export default class Comments {

    /**
     * render - Display Comments on the Page
     *
     * @param  {Integer} id ID of the post to display comments for
     */
    static render( id ) {

        config.wp.comments()
            .post( id )
            .embed()
            .then( comments => {
                let renderedComments = comments.map( comment => {
                    Comment.render( comment );
                } );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}