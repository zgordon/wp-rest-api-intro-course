import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class UserPosts {

    /**
     * getUserID - Gets the User ID based on the slug
     *
     * @param {String} userSlug the slug for the user
     */
    static render( userSlug ) {

        config.wp.users()
            .slug( userSlug )
            .then( users => {
                let renderedUser = users.map( user => {
                    config.wp.posts()
                        .author( user.id )
                        .embed()
                        .then( posts => {
                            let renderedPosts = posts.map( postObj => {
                                Helpers.renderContent( postObj, 'h2', true );
                            } );
                        } )
                        .catch( err => {
                            console.log( 'Error: ' + err );
                        } );
                } );
            } )
            .catch( err => {
                console.log( 'Error: ' + err );
            } );

    }

}
