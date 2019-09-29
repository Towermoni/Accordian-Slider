;(function($, window, undefined) {
    
    var $textDrop = $(".textDrop");
    // checking to see if I have textDrop class
    // console.log($textDrop.length);
    // console.log($textDrop.text());

    var $dustPuffs = $(".dustPuffs");
    
    $textDrop.css({opacity: .2, transform: "scale(40,40)"}).animate({opacity: .8, transform: "scaleX(1)"}, 1000,function(){
            
    $("#dustPuffs").css({display: 'inline'});
        
    $dustPuffs.each(function() {
    $(this).css({left: '-350px'}).animate({top: '10px', right: '500px', opacity: .2, transform: 'scale(3,2)'}, 1500).fadeOut(800).animate({opacity: 1, transform: 'scale(1,1)'}, function(){
        
        $textDrop.animate({right: '200px'}, 500, 'easeOutBounce', function(){
            
        })
    
        
    });
    })
      
        
        
    })
    
 
    
    
})(jQuery, window);