// == Visibility Plugin ======================
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */
(function($) {
  $.fn.visible = function(partial) {
    let $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);

// == Animate elements into viewport ==========
function Animator({ selector }) {
  // Select & store elements
  this.animatableEls = $(`${ selector }`)
  // Apply animation when visible in viewport
  this.animateElementsIn = function(){
    if (this.animatableEls.length > 0){
      this.animatableEls.each( (i, el) => {
        let $el = $(el)
        let animation = $(el).data('animation')
        let animationClasses = `animate-${ animation } animation-complete`
        if ( !$el.hasClass('animation-complete') && $el.visible(true) && animation != undefined ){
          $el.addClass(animationClasses)
        }
        else {
          return
        }
      })
    }
    else {
      return
    }
  }
}
