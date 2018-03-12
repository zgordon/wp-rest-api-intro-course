import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Tag from './Tag';


export default class Tags {

    /**
     * render - Display Posts on the post
     *
     * @param {String} slug the slug for the tag to display
     */
    static render( slug = '' ) {

        config.wp.tags()
            .embed()
            .slug( slug )
            .then( tags => {
                let renderedTag = tags.map( tag => {
                    Helpers.renderHeader( `Tag: ${tag.name} [${tag.count}]` );
                    Tag.render( tag.id );
                } );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}