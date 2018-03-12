import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Comment {

    /**
     * render - Renders comment to a page
     *
     * @param  {Object} comment Comment to display
     */
    static render( comment ) {

        const commentContainer = document.createElement( 'div' );
        let commentMarkup = '',
            date = Helpers.formatDate( comment.date );

        commentMarkup += '<p class="author">';
        commentMarkup += `<img src="${comment.author_avatar_urls[ '24' ]}">`;
        commentMarkup += `${comment.author_name} ${date}</p>`;
        commentMarkup += `<blockquote>${comment.content.rendered}</blockquote>`;

        commentContainer.classList.add( 'comment' );
        commentContainer.innerHTML = commentMarkup;

        config.articleContainer.appendChild( commentContainer );

    }

}
