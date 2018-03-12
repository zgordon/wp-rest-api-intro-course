import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Category from './Category';

export default class Categories {

    /**
     * render - Display Posts based on the category
     *
     * @param {String} catSlug the slug of the current category Page
     */
    static render( catSlug = '' ) {

        config.wp.categories()
            .embed()
            .slug( catSlug )
            .then( categories => {
                let renderedCat = categories.map( cat => {
                    Helpers.renderHeader( `Category: ${cat.name} [${cat.count}]` );
                    Category.render( cat.id );
                } );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}
