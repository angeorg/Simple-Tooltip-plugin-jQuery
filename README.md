# Description

Simple tooltip jQuery plugin

# Usage
<p>You have to include jQuery.js, tooltip.js, assign CSS selector and attribute that will be used to generate the tooltip box.</p>

<h2>Example #1</h2>
<pre>$('a.tooltip').tooltip('title');</pre>

<h2>Example #2: Adding a custom class</h2>
<pre>$('img').tooltip('alt', { 'custom_class' : 'test' });</pre>

# Available options and parameters
<pre>
'custom_class' : false, //there's a default tooltip styling, however you can specify your own class
'dynamic' : true, //the tooltip will follow the mouse's cursor
'top' : 0, //position the tooltip from the top of the mouse's cursor
'left' : 10 //position the tooltip from the left of the mouse's cursor
</pre>

# Copyright
jQuery simple tooltip plugin is written by Anton Georgiev (c) 2012