<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ffound_blog_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'DyG=9}$dPbK:-Yn3i^l6Bwzah4CUGf(U6A2|PhAi!d8~}fxFQND8=sH|J$$aNiR!');
define('SECURE_AUTH_KEY',  'yhN7UxUWcLD+Fza6h!O3e=/;KF>|Vs$L~~1*e}Wj@AAIzFc?ujEeF#;<)O<L$ px');
define('LOGGED_IN_KEY',    '&zJ?g)(+mIwM{y>ci/M81b=iV+PFBvs8|-bcvG-uKt(@d{?JO([zG&$vA9.83Uh`');
define('NONCE_KEY',        '7v[$eCT{:W5.v]EHB*tx*$.8aAO&9@1J(Q*:P],b/1#5n8G<-;95WnXw#r*$Ot+)');
define('AUTH_SALT',        'muzEi*SPVN&Q,>P;`qML%yQ@n*a6aKPne?8e{qtba7{rYhFH9Rx$zsJU-InLo$l)');
define('SECURE_AUTH_SALT', ' ca:*#D(A5;gRD~E,6uV>%#is==bn 6I;t#M/3JWu%1Yy]+@)5mD=v-TAo>Ay9,F');
define('LOGGED_IN_SALT',   '[I Ha<eyev5c;s1YHaqf)h2JwAVA/T|r$*/drsU%Lp&)sbH 6)f n_9YdFAlL GR');
define('NONCE_SALT',       '3,y!kvpphuR?r.9WeVnxP`$>.-V5z+tK?C{K1~ISo/ud NsQ#e{v9o+E%+GbU#9E');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ff_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
