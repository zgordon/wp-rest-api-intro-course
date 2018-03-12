import config from '../../lib/config';
import Image from './Image';

export default class Gallery {

    /**
     * render - Renders Gallery to Page
     *
     */
    static render() {

        const galleryContainer = document.createElement( 'section' );

        config.wp.media()
            .then( images => {

                let galleryContainer = document.createElement( 'ul' );

                galleryContainer.classList.add( 'gallery' );
                config.articleContainer.appendChild( galleryContainer );

                let renderedImages = images.map( image => {
                    Image.render( image );
                } );

            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }


}