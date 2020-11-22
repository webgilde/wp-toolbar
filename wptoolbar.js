// ==UserScript==
// @name         WP Toolbar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add WP Toolbar when it is not given by WP itself
// @author       Thomas Maier, http://iamnotagoodartist.com
// @match        https://wpadvancedads.com
// @include      https://wpadvancedads.com/*
// @grant        none
// source blog: http://iamnotagoodartist.com/other/wordpress-admin-toolbar-bookmarklet/
// ==/UserScript==

(function() {
    'use strict';
	runthis();

function runthis() {
    // return if the original WP Toolbar exists, which is true for WP Admin and maybe the frontend
    if( document.querySelector( "#wpadminbar" ) ) {
        return;
    }

    var post_id = get_current_post_id();

    if( ! document.querySelector("#wptb") ) {
        // add custom CSS file
		if ( ! document.querySelector( "#wptb_css") ) {
            var css_link = "<link id='wptb_css' rel='stylesheet' href='https://wpadvancedads.com/wp-content/wp-toolbar/wp-toolbar.css' type='text/css' />";
            document.body.insertAdjacentHTML('beforeend', css_link );
		}

        // add the menu HTML
        var menu_markup = "<ul id='wptb'><li id='wptb_dashboard'><a href='/wp-admin/'>Dashboard</a><span></span><ul><li><p>Dashboard</p></li></ul></li><li class='wptb_sep'>&nbsp;</li><li id='wptb_posts'><a href='/wp-admin/post.php/?post=" + post_id + "&action=edit'>Edit</a><span></span><ul><li><p>Posts</p></li><li><a href='/wp-admin/post.php/?post=" + post_id + "&action=edit'>Edit</a></li><li><a href='/wp-admin/edit.php?post_type=bwl_kb'>All Manuals</a></li><li><a href='/wp-admin/post-new.php?post_type=bwl_kb'>New Manual</a></li><li><a href='/wp-admin/edit.php'>All Posts</a></li><li><a href='/wp-admin/post-new.php'>New Post</a></li><li><a href='/wp-admin/edit.php?post_type=page'>All Pages</a></li><li><a href='/wp-admin/post-new.php?post_type=page'>New Page</a></li></ul></li><li id='wptb_media'><a href='/wp-admin/upload.php'>Media</a><span></span><ul><li><p>Media</p></li><li><a href='/wp-admin/upload.php'>Library</a></li><li><a href='/wp-admin/media-new.php'>Add New</a></li></ul></li><li class='wptb_sep'>&nbsp;</li><li id='wptb_appearance'><a href='/wp-admin/themes.php'>Appearance</a><span></span><ul><li><p>Appearance</p></li><li><a href='/wp-admin/themes.php'>Themes</a></li><li><a href='/wp-admin/widgets.php'>Widgets</a></li><li><a href='/wp-admin/theme-editor.php'>Editor</a></li></ul></li><li id='wptb_plugins'><a href='/wp-admin/plugins.php'>Plugins</a><span></span><ul><li><p>Plugins</p></li><li><a href='/wp-admin/plugins.php'>Installed</a></li><li><a href='/wp-admin/plugin-install.php'>Add New</a></li><li><a href='/wp-admin/plugin-editor.php'>Editor</a></li></ul></li><li id='wptb_users'><a href='/wp-admin/users.php'>Users</a><span></span><ul><li><p>Users</p></li><li><a href='/wp-admin/users.php'>Authors/Users</a></li><li><a href='/wp-admin/user-new.php'>Add New</a></li><li><a href='/wp-admin/profile.php'>Your Profile</a></li></ul></li><li id='wptb_settings'><a href='/wp-admin/options-general.php'>Settings</a><span></span><ul><li><p>Settings</p></li><li><a href='/wp-admin/options-general.php'>General</a></li><li><a href='/wp-admin/options-writing.php'>Writing</a></li><li><a href='/wp-admin/options-reading.php'>Reading</a></li><li><a href='/wp-admin/options-discussion.php'>Discussion</a></li><li><a href='/wp-admin/options-media.php'>Media</a></li><li><a href='/wp-admin/options-privacy.php'>Privacy</a></li><li><a href='/wp-admin/options-permalink.php'>Permalinks</a></li><li><a href='/wp-admin/options-misc.php'>Miscellaneous</a></li></ul></li></ul>";
        document.body.insertAdjacentHTML('beforeend', menu_markup );

        // fade in according to http://youmightnotneedjquery.com/ => "fadeIn"
        var wptb = document.querySelector( '#wptb ' );
        setTimeout( function(){
            wptb.classList.add('wptb_show');
            wptb.classList.remove('wptb_hide');
        }, 1000 );
	} else {
		// setTimeout("$('#wptb').remove()", 1000);
        // setTimeout("document.wptb.parentNode.removeChild( document.wptb );", 200);
	}
}

    // get the page ID from the body element
    // source: https://stackoverflow.com/questions/58202009/how-can-i-get-the-id-of-current-page-or-post-in-wordpress
    function get_current_post_id() {
        // get body
        //var page_body = $('body');

        var page_body = document.querySelector( 'body' );
        var id = 0;

        var classList = page_body.getAttribute('class').split(/\s+/);

        classList.forEach( function( index, item ) {
            // check for page ID *or* post ID
            if ( index.indexOf('page-id') >= 0 || index.indexOf('postid') >= 0 ) {
                var index_arr = index.split('-');
                id = index_arr[index_arr.length - 1];
                return false;
            }
        });
        return id;
    }
})();
