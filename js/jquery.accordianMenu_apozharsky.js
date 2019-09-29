;(function($, window, undefined) { 

$.AccordianMenu = function(options, divSubMenu) {
        
        this.$menuDiv = $(divSubMenu);
        
        this._init(options);
        
    };
    
    $.AccordianMenu.defaults = {
        
        speed : 250,
        easing : 'ease',
        defaultItem : 0,
        menuWidth : '415px',
        sliceWidth : '90px'
          
    };
    
    $.AccordianMenu.prototype = {
        
        _init : function(options) {
            
            this.options = $.extend($.AccordianMenu.defaults, options );
            
            this.$menu = this.$menuDiv.children("ul");
            this.$menuItems = this.$menu.children("li");
            this.$imgWrapper = this.$menuItems.children("a");
            this.$menuItemsPreview = this.$imgWrapper.children("span.menuPreview");
            this.totalItems = this.$menuItems.length;
            this.currentIndex = -1;
            this._clickHandler();
            this._openItem(this.options.defaultItem);
            
        },
        
        _validCurrent : function() {
            
            return (this.currentIndex >= 0 && this.currentIndex < this.totalItems) ? true : false;
            
        },
        
        _openItem : function(openedIndex) {
            
            this.$imgWrapper.eq(openedIndex).click();
            
        },
        
        _clickHandler : function() {
            
            var self = this;
            
            self.$imgWrapper.click(function(event){
                
                var $parentLI = $(this).parent('li');
                
                var clickedIndex = $parentLI.index();
                
                if (self.currentIndex == clickedIndex){
        
                    self._slideItem($parentLI, false, 1500, 'easeOutQuint', true);
                    
                    self.currentIndex = -1;                  
                } else {
                    
                    if (self._validCurrent()){
                        
                        self._slideItem(self.$menuItems.eq(self.currentIndex), false, 250, 'jswing', false);
                    }
                    
                        self.currentIndex = clickedIndex;
                        
                        self._slideItem($parentLI, true, 250, 'jswing' );
                        
                    }
                    
                    event.preventDefault();
                
            });
            
        },
        
        
        _slideItem : function($panelSlice, state, speed, easing, allClosed) {
            
            var $colorImage = $panelSlice.find('span.menuImage');
            
            if (state){
                
                var bwOption = {width: this.options.menuWidth};
                
                var colorOption = {left: '0px'};
                
            } else {
                
                 bwOption = {width: this.options.sliceWidth};
                
                colorOption = {left: this.options.sliceWidth};
                
            }
            
            if (!allClosed){
                
                this.$menuItemsPreview.stop().animate({opacity: '.1'}, 1000);
                
            } else {
                
                this.$menuItemsPreview.stop().animate({opacity: '1'}, 1500);
                
            }
            
            
            $panelSlice.stop().animate(bwOption, speed, easing);
            $colorImage.stop().animate(colorOption, speed, easing);
            
            if (state) {
                $colorImage.animate({opacity: '1'}, 2000);
            } else {
                $colorImage.css({opacity: '.2'});
            }
        }     
};
  
  $.fn.AccordianMenu = function (options) {
    
    if (typeof options === 'string') {
        
        
        
    } else {
        this.each(function() {
           var instance = $.data(this, 'AccordianMenu');
            
            if (instance) {
                
                instance._init();
                
            } else {
                instance = $.data(this, 'AccordianMenu', new $.AccordianMenu(options, this));
            }
            
            
        });
    }
    
    return this
    
}
  
  
    
  })(jQuery, window);