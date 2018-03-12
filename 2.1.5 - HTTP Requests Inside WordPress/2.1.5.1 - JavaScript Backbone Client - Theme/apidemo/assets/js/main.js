(function($) {

	const articleContainer = $('main#main');


	/**
	 * init - Intiates call to load posts
	 *
	 */
	function init() {
		loadPosts();
	};
	init();

	/**
	 * loadPosts - Gets posts from API and calls to have them rendered
	 *
	 */
	function loadPosts() {
		let posts = new wp.api.collections.Posts();

		posts.fetch({ data: { per_page: 5, orderby: 'title', order: 'desc' } }).done( () => {
				clearPosts();
				posts.each( post => loadPost( post.attributes ) );
		});
	}

	/**
	 * loadPost - Loads an individual post to the page
	 *
	 * @param  {Object} post API Post Object
	 */
	function loadPost( post ) {
		let article = $('<article class="post"></article>'),
				titleLink = $('<a></a>').attr( 'href', post.link ).text( post.title.rendered ),
				title = $('<h2 class="entry-title"></h2>').append( titleLink ),
				content = $('<div class="entry-content"></div>').html( post.content.rendered );

		$(article).append(title).append(content);
		$(articleContainer).append(article) ;
	}

	/**
	 * clearPosts - Clears posts on the page
	 *
	 */
	function clearPosts() {
		$(articleContainer).html('');
	}

})( jQuery );
