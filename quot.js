;(function($){
    var defaults = {      
      q: [
        { quo: "Test quote1", name: "Test name1", src: 'http://vignette2.wikia.nocookie.net/steamplane/images/b/b0/Happy_Face_100x100.gif' },
        { quo: "Test quote2", name: "Test name2", src: 'http://vignette3.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e4/At_100x100_iconjake.jpg' },
        { quo: "Test quote3", name: "Test name3", src: 'http://www.animated-gifs.eu/category_cartoons/avatars-100x100-cartoons-spongebob/0038.gif' },
        { quo: "Test quote4", name: "Test name4", src: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg' },
        { quo: "Test quote5", name: "Test name5", src: 'https://c2.staticflickr.com/2/1047/5101973919_7714cdfc41_o.jpg' },
        { quo: "Test quote6", name: "Test name6", src: 'http://www.avatarsdb.com/avatars/say_cheese.jpg' }
      ],
      itemClass: 'quot-item',
      jsonPath: null
    }
    function Quot (element, options){
      this.options = $.extend(defaults, options);
      this.element = element;
      if(this.options.jsonPath){
        $.getJSON(this.options.jsonPath, function(j) {
            // this.options.q = j;
            console.log(j);
        });
      }
      this.Init();
    setInterval($.proxy(this.fade, this), 2000);
    }
    Quot.prototype.Init = function(){
        this.Markup();
    }
    Quot.prototype.Markup = function(){
      this.element.addClass('quot-wrap');
      var n = this.options.q.length,
        q, m, im,
        activeClass = '';
      for(var i = 0; i<n; i++ ){
        i==0 ? activeClass = 'active' : activeClass = '';
        q = this.options.q[i].quo;
        im = this.options.q[i].src;
        m = '<div class="' + this.options.itemClass + ' ' + activeClass + '"><img src="' + im + '" /><h3>' + q + '</h3></div>';
        $(m, {
          text: 'test',
          class: this.options.itemClass
        }).appendTo(this.element);
      }
    }
    Quot.prototype.fade = function(){
      
      var current = this.element.find('.active'),
      divs = this.element.find('.' + this.options.itemClass),
      currentIndex = divs.index(current),
      nextIndex = currentIndex + 1;
      if (nextIndex >= divs.length) {
        nextIndex = 0;
      }
      var next = divs.eq(nextIndex);
      current.removeClass('active');
      next.addClass('active');
    }
    $.fn.quot = function(options){
      new Quot(this, options);
      return this;
    }
    
})(jQuery);