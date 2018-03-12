import config from './config';
import Helpers from './Helpers';
import Page from '../components/Page';
import Posts from '../components/Posts';
import Post from '../components/Post';
import CategoryWidget from '../components/Widgets/Category/Index';
import Category from '../components/Categories/Index';
import TagWidget from '../components/Widgets/Tag/Index';
import Tag from '../components/Tags/Index';
import Gallery from '../components/Gallery/Index';
import Users from '../components/Users/Index';
import User from '../components/Users/User';
import UserPosts from '../components/Users/UserPosts';


export default class Router {

    /**
     * init - Initializes the Router
     *
     * @returns {void} Not meant to return
     */
    static init() {

        Helpers.clearPage();
        Router.loadPage();
        Router.listenPageChange();

    }

    /**
     * Gets the slug from the URL
     *
     * @return {string} slug Slug from URL
     */
    static getSlug() {

        let slug = window.location.hash;

        if ( "" === slug ) {
            return null;
        } else {
            return slug.substr( 1 );
        }

    }

    /**
     * Listener function for URL changes
     *
     * @return {void} Not meant to return
     */
    static listenPageChange() {

        window.addEventListener( 'hashchange', Router.loadPage, false );

    }


    /**
     * loadPage - Loads Page based on URL
     * @return {void} Not meant to return
     */
    static loadPage() {

        let slug = Router.getSlug() || 'home';

        if ( '/' == slug ) slug = 'home';

        if ( '/blog' == slug ) {

            Helpers.clearContent();
            config.body.className = '';
            config.body.classList.add( 'blog' );
            Posts.render();
            CategoryWidget.render();
            TagWidget.render();


        } else if ( '/post' == slug.substring( 0, 5 ) ) {

            Helpers.clearContent();
            config.body.className = '';
            config.body.classList.add( 'blog' );
            Post.render( slug.substring( 6 ) );
            CategoryWidget.render();
            TagWidget.render();


        } else if ( '/category' == slug.substring( 0, 9 ) ) {

            let catSlug = slug.substring( 10 );

            Helpers.clearContent();
            config.body.classList.add( 'blog' );
            Category.render( catSlug );
            CategoryWidget.render();
            TagWidget.render();

        } else if ( '/tag' == slug.substring( 0, 4 ) ) {

            let tagSlug = slug.substring( 5 );

            Helpers.clearContent();
            config.body.classList.add( 'blog' );
            Tag.render( tagSlug );
            CategoryWidget.render();
            TagWidget.render();

        } else if ( '/media' == slug.substring( 0, 6 ) ) {

            Helpers.clearPage();
            config.body.className = '';
            config.body.classList.add( 'media' );
            Page.render( slug );
            Gallery.render();

        } else if ( '/users' == slug.substring( 0, 6 ) ) {

            Helpers.clearPage();
            config.body.classList.add( 'Users' );
            Users.render();

        } else if ( '/user' == slug.substring( 0, 5 ) ) {

            const userSlug = slug.split( '/' ).pop();
            Helpers.clearPage();
            config.body.className = '';
            config.body.classList.add( 'user' );
            User.render( userSlug, 'h1', false );
            UserPosts.render( userSlug );

        } else {

            Helpers.clearPage();
            Page.render( slug );

        }

    }
}
