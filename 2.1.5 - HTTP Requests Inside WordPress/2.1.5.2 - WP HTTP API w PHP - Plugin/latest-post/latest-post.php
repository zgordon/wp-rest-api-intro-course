<?php
/**
 * Plugin Name: Latest Post Via API Widget
 * Description: Gets the latest post via API and displays it in a widget.  Uses Widget Plugin Template from Pippin with update to constructor function.
 * Version:     1.0.0
 * Author:      Zac Gordon
 * Author URI:  https://javascriptforwp.com
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
class latest_post_api extends WP_Widget {

    /** constructor -- name this the same as the class above */
    public function __construct() {
        parent::__construct(false, $name = 'Latest Post Via API');
    }

    /** @see WP_Widget::widget -- do not rename this */
    function widget($args, $instance) {
        extract( $args );

				// Make request to API for single post
				$request = wp_remote_get( 'http://api-test.dev/wp-json/wp/v2/posts/?per_page=1' );
				if( is_wp_error( $request ) ) {
					return false; // Bail early
				}

				// Decode the JSON into PHP Object
				$body = wp_remote_retrieve_body( $request );
				$post = json_decode( $body )[0];

				// Set the title, message and wrappers for widget
				$title = apply_filters('widget_title',  'Latest Post: ' . $post->title->rendered);
				$message = $post->excerpt->rendered;
				$before_title = '<h2 class="widget-title"><a href="' . $post->link .  '">';
				$after_title = '</a></h2>';

        ?>
              <?php echo $before_widget; ?>
              <?php if ( $title )
                    echo $before_title . $title . $after_title; ?>
							<?php echo $message; ?>

              <?php echo $after_widget; ?>
        <?php
    }

    /** @see WP_Widget::update -- do not rename this */
    function update($new_instance, $old_instance) {
        return $old_instance;
    }

    /** @see WP_Widget::form -- do not rename this */
    function form($instance) {
				// There are no settings needed for this widget
				?>
        <p>Automatically displays latest post in widget</p>
        <?php
    }


} // end class example_widget
add_action('widgets_init', create_function('', 'return register_widget("latest_post_api");'));
?>
