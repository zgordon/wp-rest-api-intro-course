import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class User {

    /**
     * render - Display Users on the user
     *
     * @param {String} slug The slug to display
     * @param {String} titleTag The header element to use
     * @param {Boolean} addLink Whether to add a link or not
     */
    static render( slug = '', titleTag = 'h1', addLink = false ) {

        config.wp.users()
            .slug( slug )
            .then( users => {
                let renderedUsers = users.map( user => {
                    let userPost = {
                        id: user.id,
                        slug: user.slug,
                        type: 'user',
                        title: {
                            rendered: user.name
                        },
                        content: {
                            rendered: user.description
                        },
                        _embedded: {
                            author: [
                                {
                                    name: user.name
                                }
                            ],
                            'wp:featuredmedia': [
                                {
                                    source_url: user.avatar_urls[ '96' ]
                                }
                            ]
                        },
                        link: config.apiRoot + '/wp/v2/Users/?slug' + user.slug
                    };
                    Helpers.renderContent( userPost, titleTag, addLink );
                } );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}
