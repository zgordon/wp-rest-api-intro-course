	<div class="add-post">
		<h3 class="add-new-post">Add New Post</h3>
		<h3><input class="title-editor" type="text" name="title" placeholder="Enter title here" value=""></h3>
		<?php wp_editor('', 'editor'); ?>
		<p><input id="save-post" class="button" type="submit" name="" value="Save"></p>
	</div>
