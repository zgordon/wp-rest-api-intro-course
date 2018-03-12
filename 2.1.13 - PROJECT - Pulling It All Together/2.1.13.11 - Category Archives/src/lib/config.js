import WPAPI from 'wpapi';

let config = {
    body: document.querySelector( 'body' ),
    siteTitle: document.querySelector( '.site-title a' ),
    siteDescription: document.querySelector( '.site-description' ),
    title: document.querySelector( '.title-editor' ),
    content: document.querySelector( '#content-editor' ),
    menuContainer: document.querySelector( '#mainNav ul' ),
    articleContainer: document.querySelector( 'main#main' ),
    sidebar: document.querySelector( '#secondary' ),
    apiRoot: 'https://api.dev/wp-json/',
};

config.page404 = {
    type: '404',
    title: {
        rendered: '404 Error.'
    },
    content: {
        rendered: '<p>This Page was not found</p>'
    },
    link: '/',
    _embedded: {
        author: [
            {
                name: 'Admin'
            }
        ]
    }
};

config.wp = new WPAPI( { endpoint: config.apiRoot } );

export default config;
