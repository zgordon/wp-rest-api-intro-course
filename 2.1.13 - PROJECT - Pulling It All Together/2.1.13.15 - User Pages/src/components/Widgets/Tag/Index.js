import config from '../../../lib/config';
import Tag from './Tag';

export default class Tags {

    /**
     * render - Display Tags in a list
     *
     */
    static render() {

        if( document.querySelector( 'ul.tags' ) ) {
            return false;
        }

        config.wp.tags()
            .then( tags => {

                const sidebar = config.sidebar;
                let widget = document.createElement( 'div' ),
                    widgetMarkup = '';

                widget.classList.add( 'widget' );

                widgetMarkup += '<h3>Tags</h3>';
                widgetMarkup += '<ul class="tags"></ul>';

                widget.innerHTML = widgetMarkup;
                sidebar.appendChild( widget );

                let renderedTags = tags.map( tag => {
                    Tag.render( tag );
                } );

            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}
