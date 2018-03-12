import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Header {

    static render() {

        config.wp.root()
            .then( info => {
                Helpers.renderSiteInfo( info.name, info.description );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}
