/*
* jQuery simple tooltip plugin
*
* Copyright (c) 2012 Anton Georgiev
*
*/
(function ($) {
  $.fn.tooltip = function(attribute, options)
  {

    var unique_id = 'tooltip_' + Math.random().toString(16).slice(2, 10);

    var settings = $.extend({
      'custom_class' : false,
      'dynamic' : true,
      'top' : 0,
      'left' : 10
    }, options);

    return this.each(function(){

      var title = $(this).attr(attribute);

      $(this).hover(function(e){

        $('body').append('<div id="' + unique_id + '">' + title + '</div>');

        if (settings.custom_class)
        {
          $('#' + unique_id).addClass(settings.custom_class);
        }
        else
        {
          $('#' + unique_id)
            .css('top', (e.pageY + settings.top) + 'px')
            .css('left', (e.pageX + settings.left) + 'px')
            .css('position', 'absolute')
            .css('background', '#333333')
            .css('padding', '5px')
            .css('color', '#ffffff')
            .css('display', 'none')
            .css('font-size', '11px')
            .fadeIn('fast');
        }
      },
      function(){
        $('#' + unique_id).remove();
      }).mousemove(function(e){

        if (attribute == 'title' || attribute == 'alt')
        {
          $(this).attr(attribute, '');
        }
        if (settings.dynamic)
        {
          $('#' + unique_id)
            .css('top', (e.pageY + settings.top) + 'px')
            .css('left', (e.pageX + settings.left) + 'px');
        }
      }).mousedown(function() {
        $('#' + unique_id).remove();
      });

    });
  };
})(jQuery);
