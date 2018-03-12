<?php
	// Require the Require Library
	require_once 'library/Requests.php';
	Requests::register_autoloader();
	// Setup request to a WP site
	$response = Requests::get('http://api-test.dev/wp-json/wp/v2/posts/?per_page=5');
	// Convert JSON to PHP Array
	$posts = json_decode($response->body, true)
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>WP API Decoupled Demo</title>
		<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<div id="page">

			<header id="masthead" class="site-header">
				<div class="site-branding">
					<h1 class="site-title"><a href="/">Decoupled WordPress</a></h1>
					<p class="site-description">Using PHP and <a href="http://requests.ryanmccue.info/">Requests for PHP</a></p>
				</div>
			</header>

			<div id="content">

					<div id="primary">
						<main id="main">
							<!-- Loop through posts -->
							<?php foreach ($posts as $post): ?>
								<article class="post">
									<h3 class="entry-title">
										<a href="<?php echo $post['link']; ?>">
											<?php echo $post['title']['rendered']; ?>
										</a>
									</h3>
									<div class="entry-content">
										<?php echo $post['content']['rendered']; ?>
									</div>
								</article>
							<?php endforeach; ?>
							<!-- End loop through posts -->
						</main>
					</div>

					<div id="secondary">
					</div>

				</div>
			</div>
		</div>
		<script type="text/javascript">
			const links = document.getElementsByTagName('a');
			const	h1 = document.querySelector('h1.site-title a');
			// Open links in new tabs
			for(let link of links) {
				link.target = '_blank';
			}
			// Undo this for main site h1 link
			h1.removeAttribute('target');
		</script>
	</body>
</html>
