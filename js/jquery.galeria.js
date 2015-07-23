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
				},
				next:function(){
					
				},
				prev:function(){
					
				},
				display_galeria: function(){
					$(target).show();
					$(target).find("#gallery_container").show();
				},
				display_mapa:function(){
					$(target).show();
					$(target).find("#mapa_container").show();
				}
			}
		};
		return componentObj;
	};	
})(jQuery);
$(document).ready(function(){
	$("#galerias").galeria();
});
