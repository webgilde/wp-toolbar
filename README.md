A WordPress Toolbar that can be customized and works without being logged-in or while the original WP Toolbar is disabled.

- Inspired by http://iamnotagoodartist.com/other/wordpress-admin-toolbar-bookmarklet/
- See https://webgilde.com/en/wordpress-wp-toolbar/ for more context

## How to install

- install Tampermonkey / Greasemonkey
- upload `arrow.png`, `menu.png`, and `wp-toolbar.css` to your server or another public place
- upload the code from `wptoolbar.js`
- adjust the URL(s) on which the script should run automatically
- adjust the links to `wp-toolbar.css` in the code

## Limitations

- the Toolbar is customized to fit our needs, e.g., we use a custom post type for Manual posts or one for Downloads that comes from Easy Digital Downloads
- it does not work when WP is running in a subdirectory
