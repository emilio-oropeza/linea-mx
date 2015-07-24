(function($){
	$.fn.galeria = function(){
		return this.each(function() {
			var element = $(this);						
			if (element.data('galeria')) return;
			var myplugin = new galeria(this);
			element.data('galeria', myplugin);
			element.data('galeria').methods.init();
		});
	};
	
	var galeria = function(target){
		var componentObj = {
			etiquetas:false,
			index: 0,
			methods:{
				init:function(){
					$("#boton_mapa").click(function(){
						componentObj.methods.display_mapa();
					});
					$("#boton_galeria").click(function(){
						componentObj.methods.display_galeria();
					});
					$("#close").click(function(){
						$(target).hide();
						$(target).find("#mapa_container").hide();
						$(target).find("#gallery_container").hide();
					});
					$(target).swipe({
						swipeLeft:function(){
							componentObj.methods.next();
						},
						swipeRight:function(){
							componentObj.methods.prev();
						}
					});
					$("#left").click(function(){
						componentObj.methods.prev();
					});
					$("#right").click(function(){
						componentObj.methods.next();
					});
					$(window).resize(function(){
						componentObj.methods.display_poster();
					});
				},
				next:function(){
					if(componentObj.index < 4){
						componentObj.index++;
					}
					componentObj.methods.display_poster();
				},
				prev:function(){
					if(componentObj.index > 0){
						componentObj.index--;
					}
					componentObj.methods.display_poster();
				},
				display_galeria: function(){
					$(target).show();
					$(target).find("#gallery_container").show();
				},
				display_mapa:function(){
					$(target).show();
					$(target).find("#mapa_container").show();
				},
				display_poster:function(){
					if(componentObj.index == 0){
						$("#left").prop( "disabled", true );
					}else if(componentObj.index == 4){
						$("#right").prop( "disabled", true );
					}else{
						$("#left").prop( "disabled", false );;
						$("#right").prop( "disabled", false );;
					}
					var left = -1*(componentObj.index*($("#images div").width()));
					$("#images").animate({"left":left}, "slow");
					$("#indicator div").each(function(i){	
						if(i == componentObj.index){
							$(this).css({"background-color":"66BD4C"});
						}else{
							$(this).css({"background-color":"#FFF"});
						}
					});
				}
			}
		};
		return componentObj;
	};	
})(jQuery);
$(document).ready(function(){
	$("#galerias").galeria();
});
