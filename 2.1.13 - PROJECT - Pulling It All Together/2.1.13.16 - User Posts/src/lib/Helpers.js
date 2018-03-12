import config from './config';

export default class Helpers {

    /**
     * getTitleMarkup - Get the markup for a content title
     *
     * @param {Object} content Individual content from the API
     * @param {String} titleTag The header to display
     * @param {Boolean} addLink Whether or not to display a link
     * @return {Object} Title markup with link and content title
     */
    static getTitleMarkup( content, titleTag = 'h1', addLink = false ) {

        const titleEl = document.createElement( titleTag ),
            linkEl = document.createElement( 'a' ),
            title = document.createTextNode( content.title.rendered );

        titleEl.classList.add( 'entry-title' );

        if ( true == addLink ) {
            linkEl.appendChild( title );
            linkEl.href = Helpers.makeHashFromLink( content );
            titleEl.appendChild( linkEl );
        } else {
            titleEl.appendChild( title );
        }

        titleEl.appendChild( linkEl );

        return titleEl;

    }

    /**
     * getContentMarkup - Get the markup for content content
     *
     * @param  {Object} content Individual content from the API
     * @return {Object} Content markup with content
     */
    static getContentMarkup( content ) {

        let contentEl = document.createElement( 'div' ),
            contentMarkup = '',
            date = Helpers.formatDate( content.date ),
            lastModified = Helpers.formatDate( content.modified ),
            author = content._embedded.author[ 0 ].name,
            featuredImg = '';

        //console.log( content );

        if ( content._embedded[ 'wp:featuredmedia' ] ) {
            featuredImg = content._embedded[ 'wp:featuredmedia' ][ 0 ].source_url;
        }

        contentEl.classList.add( 'entry-content' );
        if ( 'post' == content.type ) {
            contentMarkup += `<p class="meta">Author: ${author} | ${date}</p>`;
        }
        if ( featuredImg ) {
            contentMarkup += `<img class="feature" src="${featuredImg}">`;
        }
        contentMarkup += content.content.rendered;
        if ( 'page' == content.type ) {
            contentMarkup += `<p class="footer">Last Updated ${lastModified} by ${author}</p>`;
        }
        contentMarkup += '</div>';
        contentEl.innerHTML = contentMarkup;

        return contentEl;

    }


    /**
     * renderHeader - Renders title to Page
     *
     * @param {String} title The site title to display
     * @param {String} description The site description to display
     * @return {void} Not meant to return
     */
    static renderSiteInfo( title, description ) {

        config.siteTitle.innerHTML = title;
        config.siteDescription.innerHTML = description;

    }


    /**
     * renderHeader - Renders title to Page
     *
     * @param {String} title Title to display
     * @param {String} tag The HTML tag to use
     * @return {void} Not meant to return
     */
    static renderHeader( title, tag = 'h1' ) {

        let titleEl = document.createElement( tag );
        titleEl.innerHTML = title;

        config.articleContainer.appendChild( titleEl );

    }


    /**
     * renderContent - Renders content to Page
     *
     * @param  {Object} content Post or Page content object
     * @param {String} titleTag h1, h2, etc for HTML header tag to use
     * @param {Boolean} addLink Whether to display link in title
     * @return {void} Not meant to return
     */
    static renderContent( content, titleTag = 'h1', addLink = false ) {

        const articleEl = document.createElement( 'article' ),
            titleEl = Helpers.getTitleMarkup( content, titleTag, addLink ),
            contentEl = Helpers.getContentMarkup( content );

        articleEl.classList.add( content.type );
        articleEl.appendChild( titleEl );
        articleEl.appendChild( contentEl );
        config.articleContainer.appendChild( articleEl );

    };


    /**
     * renderHeader - Renders an HTML header on the Page
     *
     * @param {String} title Title to display
     * @param {String} titleTag h1, h2, etc for HTML header tag to use
     * @return {void} Not meant to return
     */
    static renderHeader( title, titleTag = 'h1' ) {

        const titleEl = document.createElement( titleTag ),
            titleText = document.createTextNode( title );

        titleEl.appendChild( titleText );
        config.articleContainer.appendChild( titleEl );

    }


    /**
     * getHash - Get the hash from the url
     *
     * @param {Object} content The post or Page object
     * @return {String} The hash from the url
     */
     static makeHashFromLink( content, type = content.type ) {

         

         switch ( type ) {
             case 'post':
                 return '#/post/' + content.slug;
                 break;
             case 'category':
                 return '#/category/' + content.slug;
                 break;
             case 'tag':
                 return '#/tag/' + content.slug;
                 break;
             case 'user':
                 return '#/user/' + content.slug;
                 break;
             default:
                 return '#/' + content.slug;
         }

     }

    /**
     * formatDate - Convert ISO date to desired format
     *
     * @param {Object} date ISO formatted date
     * @return {String} Formatted date string
     */
    static formatDate( date ) {

        let newDate = new Date( date ),
            day = newDate.getDay(),
            month = newDate.getMonth(),
            year = newDate.getYear(),
            hours = newDate.getHours(),
            min = newDate.getMinutes();

        return day + '/' + month + '/' + year + '@' + hours + ':' + min;

    };


    /**
     * clearPage - Clear pages from Page
     * @return {void} Not meant to return
     */
    static clearPage() {
        return new Promise( resolve => {
            config.sidebar.innerHTML = '';
            Helpers.clearContent();
            resolve();
        });
    }


    /**
     * clearContent - Clear main content from Page
     * @return {void} Not meant to return
     */
    static clearContent() {

        return new Promise( resolve => {

            config.body.className = '';
            config.articleContainer.innerHTML = '';
            resolve();

        });

    }

}
