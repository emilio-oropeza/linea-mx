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
						
					});
				},
				next:function(){
					
				},
				prev:function(){
					
				},
				display_galeria: function(){
					
				},
				display_mapa:function(){

				}
			}
		};
		return componentObj;
	};	
})(jQuery);
$(document).ready(function(){
	$("#galerias").galeria();
});
