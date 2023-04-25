<?php
/**
 * Plugin Name:     Dish Menu Plugin
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     The plugin adds a dish menu page
 * Author:          NiSaYa
 * Author URI:      YOUR SITE HERE
 * Text Domain:     nisaya-menu
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Nisaya_Menu
 */

// Your code starts here.

// Make sure we don't expose any info if called directly
defined( 'ABSPATH' ) or exit();

require_once  __DIR__ . '/include/class-menu.php';

//Enqueue scripts
function nisaya_menu_script() {

	if ( is_page( 'menu' ) ) {
		wp_register_script(
			'nisaya-menu-js',
			plugins_url( 'nisaya-menu/dist/main.js', dirname( __FILE__ ) ),
		);
		wp_enqueue_script( 'nisaya-menu-js' );
	}
}
add_action( 'wp_enqueue_scripts', 'nisaya_menu_script' );

/**
 * Set up the required nisaya menu table
 */
register_activation_hook( __FILE__, 'wp_nisaya_menu_table' );
function wp_nisaya_menu_table() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'nisaya_menu';

	$sql = "CREATE TABLE $table_name (
	  id mediumint(9) NOT NULL AUTO_INCREMENT,
	  img varchar (2048) NOT NULL,
	  title varchar (200) NOT NULL,
	  price float NOT NULL,
	  currencySymbol varchar (100) NOT NULL,
	  itemDescription varchar (300) NOT NULL,
	  PRIMARY KEY  (id)
	)";

	// dbDelta is defined in wp-admin/includes/upgrade.php so we have to import it
	// BEFORE calling dbDeta
	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );
}

/**
 * Add custom endpoint to get the menu dishes
 */
function nisaya_get_dishes() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'nisaya_menu';

	$results = $wpdb->get_results( "SELECT * FROM $table_name" );

	return $results;

}

add_action('rest_api_init', function() {
	register_rest_route( 'nisaya/v1',
						 'menu',
						  array(
							'methods' => 'GET',
							'callback' => 'nisaya_get_dishes',
							'permission_callback' => '__return_true',
						 )
	);
});
