// Responsive Menu

function openSlideMenu(){
  $("#side-menu").css({"marginLeft":"0", "transition":"0.5s"});
}

function closeSideMenu(){
  $("#side-menu").css({"marginLeft":"-250px", "transition":"0.5s"})
}

// Fade in

$(function(){  // $(document).ready shorthand
  $('.projects').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});