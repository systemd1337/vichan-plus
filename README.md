vichan plus - A lightweight and full featured PHP imageboard.
========================================================

**Please do not contact Fredrick Brennan in regards to vichan issues.**

As of 29 August 2022 it supports PHP8.1.

About
------------
vichan is a free light-weight, fast, highly configurable and user-friendly
imageboard software package. It is written in PHP and has few dependencies.

**For best results, you should use a stable release from the releases page. The master branch is used for development work and testing. You may experience bugs if you use master.**

Some documentation may be found on our [wiki](https://github.com/vichan-devel/vichan/wiki). (feel free to contribute)

History
------------
vichan is a fork of (now defunc'd) [Tinyboard](http://github.com/savetheinternet/Tinyboard),
a great imageboard package, actively building on it and adding a lot of features and other
improvements.

![](https://imoutochan.online/static/logo.png)

Requirements
------------
1.	PHP >= 7.4
2.	PHP >= 8.1 Works also for vichan plus
3.	MySQL/MariaDB server
4.	[mbstring](http://www.php.net/manual/en/mbstring.installation.php) 
5.	[PHP GD](http://www.php.net/manual/en/intro.image.php)
6.	[PHP PDO](http://www.php.net/manual/en/intro.pdo.php)
7.	A Unix-like OS, preferrably FreeBSD or GNU/Linux

We try to make sure vichan is compatible with all major web servers. vichan does not include an Apache `.htaccess` file nor does it need one.

### Recommended
1.	MySQL/MariaDB server >= 5.5.3
2.	ImageMagick (command-line ImageMagick or GraphicsMagick preferred).
3.	~~[APC (Alternative PHP Cache)](http://php.net/manual/en/book.apc.php)~~,
	[APCu (Alternative PHP Cache)](http://php.net/manual/en/book.apcu.php),
	[XCache](http://xcache.lighttpd.net/),
	[Memcached](http://www.php.net/manual/en/intro.memcached.php) or
	[Redis](https://redis.io/docs/about/)

Contributing
------------
You can contribute to vichan-plus by:
*	Developing patches/improvements/translations and using GitHub to submit pull requests
*	Providing feedback and suggestions
*	Writing/editing documentation

Installation
-------------
1.	Get the latest development version & install to your web server directory with:
   
        git clone git://github.com/systemd1337/vichan-plus
3.  For Debian based operating systems, install the required packages:

        sudo apt install php7.4-mysql, php7.4-mbstring, php7.4-redis, php7.4-imagick, php7.4-igbinary, php7.4-gmp, php7.4-bcmath, php7.4-curl, php7.4-gd, php7.4-zip, php7.4-imap, php7.4-ldap, php7.4-bz2, php7.4-ssh2, php-phpseclib, php7.4-common, php7.4-json, php7.4-xml, php7.4-dev, libsmbclient-dev, php-pear

4.	run ```composer install``` inside the vichan-plus directory	
5.	Navigate to ```install.php``` in your web browser and follow the
	prompts.
6.	vichan should now be installed. Log in to ```mod.php``` with the
	default username and password combination: **admin / password**.

Please remember to change the administrator account password.

See also: [Configuration Basics](https://github.com/vichan-devel/vichan/wiki/config).

*Optionally, enable additional JavaScript by adding the following definitions to `inc/instance-config.php`*:
```js
$config['additional_javascript'][] = 'js/jquery.min.js';
$config['additional_javascript'][] = 'js/mobile-style.js';
$config['additional_javascript'][] = 'js/download-original.js';
$config['additional_javascript'][] = 'js/expand-all-images.js';
$config['additional_javascript'][] = 'js/expand-too-long.js';
$config['additional_javascript'][] = 'js/ajax.js';
$config['additional_javascript'][] = 'js/post-hover.js';
$config['additional_javascript'][] = 'js/quick-reply.js';
$config['additional_javascript'][] = 'js/show-backlinks.js';
$config['additional_javascript'][] = 'js/show-own-posts.js';
$config['additional_javascript'][] = 'js/thread-stats.js';
$config['additional_javascript'][] = 'js/jquery-ui.custom.min.js';
$config['additional_javascript'][] = 'js/show-backlinks.js';
$config['additional_javascript'][] = 'js/wPaint/8ch.js';
$config['additional_javascript'][] = 'js/wpaint.js';
$config['additional_javascript'][] = 'js/upload-selection.js';
$config['additional_javascript'][] = 'js/options.js';
$config['additional_javascript'][] = 'js/local-time.js';
$config['additional_javascript'][] = 'js/charcount.js';
$config['additional_javascript'][] = 'js/hide-threads.js';
$config['additional_javascript'][] = 'js/post-menu.js';
$config['additional_javascript'][] = 'js/fix-report-delete-submit.js';
$config['additional_javascript'][] = 'js/style-select.js';
$config['additional_javascript'][] = 'js/options/general.js';
```

Upgrade
-------
To upgrade from any version of vichan-plus:

Either run ```git pull``` to update your files, if you used git, or
backup your ```inc/instance-config.php```, replace all your files in place
(don't remove boards etc.), then put ```inc/instance-config.php``` back and
finally run ```install.php```.

To migrate from a Kusaba X board, use http://github.com/vichan-devel/Tinyboard-Migration

Demo
--------
Demo with the most updated version of [Vichan](https://vichan.27chan.org).

1. PHP 8.1
2. MySQL 5.7
3. KeyDB 6.2.1 (Redis)
4. NGINX 1.14.0

Support
--------
vichan-plus is still beta software -- there are bound to be bugs. If you find a
bug, please report it.

CLI tools
-----------------
There are a few command line interface tools, based on Tinyboard-Tools. These need
to be launched from a Unix shell account (SSH, or something). They are located in a ```tools/```
directory.

You actually don't need these tools for your imageboard functioning, they are aimed
at the power users. You won't be able to run these from shared hosting accounts
(i.e. all free web servers).

Oekaki
------
vichan makes use of [wPaint](https://github.com/websanova/wPaint) for oekaki. After you pull the repository, however, you will need to download wPaint separately using git's `submodule` feature. Use the following commands:

```
git submodule init
git submodule update
```

To enable oekaki, add all the scripts listed in `js/wpaint.js` to your `instance-config.php`.

WebM support
------------
Read `inc/lib/webm/README.md` for information about enabling webm.

vichan API
----------
vichan provides by default a 4chan-compatible JSON API. For documentation on this, see:
https://github.com/vichan-devel/vichan-API/ .

License
--------
See [LICENSE.md](http://github.com/vichan-devel/vichan/blob/master/LICENSE.md).
