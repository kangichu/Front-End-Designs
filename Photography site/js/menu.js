var tileBtn = $('li.tiles__tile');
var allContent = $('li.content__item');
var contentWrap = $('.content-wraps');

tileBtn.on('click touchstart', function() {
  var self = $(this);
  var match = self.attr('data-tile');
  var allContent = $('li.content__item');
  var content = $('li#' + match);
  
  self.toggleClass('active');
  
  content.toggleClass('active');
  
 contentWrap.css({'transition-delay': '.35s'});
  
  return false;
});

$(window).on('click touchstart', function() {
  if (allContent.hasClass('active') && tileBtn.hasClass('active')) {
    allContent.removeClass('active');
    setTimeout(function() {
      tileBtn.removeClass('active');
    }, 400);
    contentWrap.css({'transition-delay': '.0s'});
    
  }
})