
$(function() {
  var b = $(".expand-collapse-wrap .button");
  var w = $(".expand-collapse-wrap");
  var l = $(".expand-container");
  
  w.height(100);

  b.click(function() {
  
    if(w.hasClass('is-expanded')) {
      w.removeClass('is-expanded');
      w.height(100);
    } else {
      w.addClass('is-expanded');
      w.height(l.outerHeight(true));
    }
  
  });
});
