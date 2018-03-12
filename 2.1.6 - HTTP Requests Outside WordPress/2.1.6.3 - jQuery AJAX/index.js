$(function() {

var apiRoot = 'https://api-test.dev/wp-json',
    articleContainer = $('main#main');

listPosts.init = function() {

	$.ajax( {
	  url: apiRoot + '/wp/v2/posts/?per_page=5',
	  success: function ( posts ) {
			listPosts.render( posts );
	  },
		error:  function( err ) {
			console.log( 'Error: ', err );
		}
	} );

};
listPosts.init();

listPosts.render = function( posts ) {

	for ( let post of posts ) {
		listPosts.renderPost( post );
	}

};

listPosts.renderPost = function( post ) {

  const article = $( '<article>' ),
			titleEl = listPosts.getTitleMarkup( post ),
			contentEl = listPosts.getContentMarkup( post );

	$( article ).addClass('post');
	$( article ).append( titleEl );
	$( article ).append( contentEl );
	$( articleContainer ).append( article );

};

listPosts.getTitleMarkup = function( post ) {

	const title = $( '<h2>' ),
				titleLink = $( '<a>' );

	$(title).addClass('entry-title');
	$(titleLink).text( post.title.rendered );
	$(titleLink).attr( 'href', post.link );
	$(titleLink).attr( 'target', '_blank' );

	$(title).append( titleLink );

	return title;

};

listPosts.getContentMarkup = function( post ) {

	const content = $( '<div>' );

	$(content).addClass('entry-content');
	$(content).html( post.content.rendered );

	return content;

};

listPosts.clearPosts = function() {

		$(articleContainer).html('');

};

});
