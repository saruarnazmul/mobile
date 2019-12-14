$(function(){

	$('#slide-submenu').on('click',function() {			        
        $(this).closest('.menu-group').fadeOut('slide',function(){
        	$('.mini-submenu').fadeIn();	
        });
        
      });

	$('.mini-submenu').on('click',function(){		
        $(this).next('.menu-group').toggle('slide');
        $('.mini-submenu').hide();
	})
})
// <i class="fas fa-home"></i>
// <i class="fas fa-cog"></i>
// <i class="fas fa-envelope"></i>
// <i class="fas fa-photo-video"></i>