Overview

This package includes:

Kanopi Blocks plugin – Custom Gutenberg blocks (Hero, Testimonials, ), SCSS-based, animations, React using block.js and edit.js.

Custom Theme / Templates – Includes home-page.html,current-date block,PHP customizations and other template files used for full-site editing.


=============================

Requirements

WordPress 6.0+

PHP 7.4+

MySQL 5.7+

Node.js & npm: required if building or managing plugin assets

=============================

Installation Steps

Install WordPress on your server or local environment.

Upload Theme:

Copy the theme folder into wp-content/themes/.

Activate the theme via Appearance → Themes.

Upload Plugin:

Copy the kanopi-blocks folder into wp-content/plugins/.

cd wp-content/plugins/kanopi-blocks
npm install  (This will install all dependencies listed in package.json.) 

Go to your WordPress Admin → Plugins → Installed Plugins.

Find Kanopi Blocks and click Activate.

===================================================


Plugin & Theme Features

Hero Block: Editable heading/subheading,image,buttons with live preview.

Testimonials Block: Add, Edit, remove, and reorder testimonial items with live preview.

Current Date Block: Shows today’s date dynamically on the homepage.


PHP Customizations:

Custom excerpt length and “Read More” text

Default featured image for posts

Animation classes for Gutenberg Heading and Post Query blocks

Responsive SCSS styling and animations for all blocks.


=================================================== 


Post-Installation Tips

Clear browser or plugin cache if you don’t see changes.

Check block layouts in the editor to verify correct display.

Adjust any fonts, colors, or settings via the WordPress Editor if needed.

=================================================== 

Improvements with More Time:

Add more reusable dynamic blocks and global block settings.

Implement unit and integration testing for blocks.

Optimize animations for performance across all devices.

Add full accessibility compliance (WCAG 2.1) to all blocks.
