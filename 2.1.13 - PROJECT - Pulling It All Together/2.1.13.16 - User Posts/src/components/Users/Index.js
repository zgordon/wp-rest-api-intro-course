import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import User from './User';

export default class UserList {

    /**
     * render - Display Users in a list
     *
     */
    static render() {

        config.wp.users()
            .then( users => {
                Helpers.renderHeader( 'Users', 'h1' );
                let renderedUsers = users.map( user => {
                    User.render( user.slug, 'h2', true );
                } );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}