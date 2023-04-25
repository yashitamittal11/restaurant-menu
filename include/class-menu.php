<?php

/**
 * This class adds 'root' div to the page on which the 'nisaya_menu' shortcode is used
 */
if ( ! class_exists( 'Nisaya_Menu' ) ) {
	class Nisaya_Menu {
		public static function add_nisaya_menu() {
			// Create a root element to mount our React menu
			return '<div id="root">There will be a menu here!</div>';
		}
	}
	add_shortcode( 'nisaya_menu', array( 'Nisaya_Menu', 'add_nisaya_menu' ));
}
