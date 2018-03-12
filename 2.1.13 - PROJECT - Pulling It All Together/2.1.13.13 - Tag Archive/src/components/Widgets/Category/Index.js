import config from '../../../lib/config';
import Category from './Category';

export default class Categories {

    /**
     * render - Display Categories in a list
     *
     */
    static render() {

        if( document.querySelector( 'ul.categories' ) ) {
            return false;
        }

        config.wp.categories()
            .then( categories => {

                const sidebar = config.sidebar,
                    widget = document.createElement( 'div' );
                let widgetMarkup = '';

                widget.classList.add( 'widget' );

                widgetMarkup += '<h3>Categories</h3>';
                widgetMarkup += '<ul class="categories"></ul>';

                widget.innerHTML = widgetMarkup;
                sidebar.appendChild( widget );

                let renderedCategories = categories.map( category => {
                    Category.render( category );
                } );

            } )
            .catch( err => {
                console.log( 'Error: ' + err );
            } );

    }

}