<?php
/** 
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', 'G:\PleskVhosts\test.aiacpa.org\aiacpa.org\Indiaday\wp-content\plugins\wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'wordpress_IndiaDay');

/** MySQL database username */
define('DB_USER', 'wpindiaday');

/** MySQL database password */
define('DB_PASSWORD', 'Indiaday123');

/** MySQL hostname */
define('DB_HOST', '198.71.225.57:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'g7#YpWxPtUw19ojtPz@DgaW0Tn%7!MPr6qTzLHAWA3Samt%st)zocjRvhH!4Zqd9');
define('SECURE_AUTH_KEY',  'zsW4cirCRC^xT^qGdz!SLUUlxN2Z!9Fa9w7AVnI9VXnoclKOzczaoOfZgU&mEaCF');
define('LOGGED_IN_KEY',    'Li&!w7HInoBD7M(HKsZZP9IaLWW7Qx00L%%H7huGQrIvGvd5Ieo9OfF&Tbz^J&7J');
define('NONCE_KEY',        'gb8Og)h!V1u)MIHZIo8neGO@TGeGLAJM*4uSUlZKyTR8oDzNkmhXNU1k3adTa%TB');
define('AUTH_SALT',        'k%BkV*4&6mpE^0r9zun5cG40Mht%mrlZoFeF9K)^PjjuLQMteti%JEt6^esOzeYX');
define('SECURE_AUTH_SALT', 'B0qenuXUfnM@S^vtnKjHDJ)i7qSPDO2#CFkjCX%fjmDm6JlD#mGma*S4O1MGEAXs');
define('LOGGED_IN_SALT',   '1Kjec4NeiLGrCNcr!oRvYjFYJBJDGOmTVRzFftRW)PvtGZywDMQ9TezChMqn*7^N');
define('NONCE_SALT',       '(BR@mFo3943SMMltBDh5fZ7(4mETpqnafqe@B8!emUuaWOh*v*6aygfwpdP9!g60');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'cVJ49k1e6Y_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress.  A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de.mo to wp-content/languages and set WPLANG to 'de' to enable German
 * language support.
 */
define ('WPLANG', 'en_US');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');

//--- disable auto upgrade
define( 'AUTOMATIC_UPDATER_DISABLED', true );
?>
