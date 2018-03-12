import Helpers from '../../../lib/Helpers';

export default class Tag {

    /**
     * render - Display tag on the Page
     *
     * @param  {Object} tag Tag object
     */
    static render( tag ) {

        const ul = document.querySelector( 'ul.tags' );
        let li = document.createElement( 'li' ),
            link = Helpers.makeHashFromLink( tag, 'tag' ),
            liMarkup = '';

        liMarkup += `<a href="${link}">${tag.name} [${tag.count}]</a>`;

        li.innerHTML = liMarkup;
        ul.appendChild( li );

    }

}
