import Helpers from '../../lib/Helpers';

export default class Image {

    /**
     * render - Renders galleryImage to Page
     *
     */
    static render( image ) {

        const galleryContainer = document.querySelector( 'ul.gallery' );

        let li = document.createElement( 'li' ),
            img = document.createElement( 'img' ),
            captionEl = document.createElement( 'div' ),
            dateEl = document.createElement( 'span' );

        captionEl.innerHTML = image.caption.rendered;
        captionEl.classList.add( 'caption' );

        dateEl.innerHTML = Helpers.formatDate( image.date );
        dateEl.classList.add( 'date' );

        img.src = image.source_url;
        img.alt = image.alt_text;
        img.classList.add( 'gallery-item' );

        li.appendChild( img );
        captionEl.appendChild( dateEl );
        li.appendChild( captionEl );
        galleryContainer.appendChild( li );

    }

}