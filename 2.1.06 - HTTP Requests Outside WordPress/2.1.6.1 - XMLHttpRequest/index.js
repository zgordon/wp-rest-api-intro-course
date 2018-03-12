const apiRoot = 'https://api-test.dev/wp-json',
			articleContainer = document.querySelector('main#main'),
			listPosts = {};

/**
 * init - Initialize the listing of posts
 *
 */
listPosts.init = function() {

	let request = new XMLHttpRequest();

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    // Success!
	    let posts = JSON.parse(request.responseText);
			// console.log( data );
			listPosts.clearPosts();
			listPosts.render( posts );
	  } else {
	    console.log( request );
	  }
	};

	request.onerror = function() {
	  console.log( 'A network error has occured' );
	};

	request.open('GET', apiRoot + '/wp/v2/posts', true);

	request.send();

};
listPosts.init();


/**
 * renderPost - Display posts on the page
 *
 * @param  {Array} posts Array of Posts in JSON
 */
listPosts.render = function( posts ) {
	for ( let post of posts ) {
		listPosts.renderPost( post );
	}
};


/**
 * renderPost - Displays an individual post on the page
 *
 * @param  {Object} post Individual post
 */
listPosts.renderPost = function( post ) {

  const articleEl = document.createElement( 'article' ),
			titleEl = listPosts.getTitleMarkup( post ),
			contentEl = listPosts.getContentMarkup( post );

	articleEl.classList.add('post');
	articleEl.appendChild( titleEl );
	articleEl.appendChild( contentEl );
	articleContainer.appendChild(articleEl);

};


/**
 * getTitleMarkup - Get the markup for a post title
 *
 * @param  {Object} post Individual post from the API
 * @return {Object}      Title markup with link and post title
 */
listPosts.getTitleMarkup = function( post ) {

	const titleEl = document.createElement( 'h2' ),
			titleLinkEl = document.createElement( 'a' ),
			title = document.createTextNode( post.title.rendered );

	titleEl.classList.add('entry-title');
	titleLinkEl.appendChild( title );
	titleLinkEl.href = post.link;
	titleLinkEl.target = '_blank';
	titleEl.appendChild( titleLinkEl );

	return titleEl;

};


/**
 * getContentMarkup - Get the markup for post content
 *
 * @param  {Object} post Individual post from the API
 * @return {Object}      Content markup with content
 */
listPosts.getContentMarkup = function( post ) {
	const contentEl = document.createElement( 'div' ),
			content = document.createTextNode('');

	contentEl.classList.add('entry-content');
	contentEl.appendChild( content );
	contentEl.innerHTML = post.content.rendered;

	return contentEl;

};


/**
 * clearPosts - Clear posts from page
 *
 */
listPosts.clearPosts = function() {
		articleContainer.innerHTML = '';
};
