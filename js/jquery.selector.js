(function($){
	$.fn.sel = function(){
		return this.each(function() {
			var element = $(this);						
			if (element.data('sel')) return;
			var myplugin = new sel(this);
			element.data('sel', myplugin);
			element.data('sel').methods.init();
		});
	};
	
	var sel = function(target){
		var componentObj = {
			etiquetas:false,
			equipos:["Ame","Atlas","Chiapas","CruzAzul",
					"Dorados","Guadalajara","Leon","Monterrey",
					"Morelia","Pachuca","Puebla","Pumas","Queretaro",
					"Santos","Tigres","Toluca","Veracruz","Xolos"],
			index: 0,
			jornada: 1,
			methods:{
				init:function(){
					componentObj.methods.display();
					componentObj.methods.display_jornadas();
					$(".equipos").each(function(index){
						$(this).click(function(){
							if(index < 4){
								componentObj.index = componentObj.index - (4 - index);
								if(componentObj.index < 0){
									componentObj.index += 18;
								}
							}
							if(index > 4){
								componentObj.index = componentObj.index + (index - 4);
								if(componentObj.index > 17){
									componentObj.index = index - 5;
								}
							}

							componentObj.methods.display();
						});
					});
					$(".etiquetas").click(function(){
						componentObj.methods.tags();
					});
					$(target).swipe({
						swipeLeft:function(){
							componentObj.methods.next();
						},
						swipeRight:function(){
							componentObj.methods.prev();
						}
					});
					$("#next").click(function(){
						componentObj.methods.next();
					});
					$("#prev").click(function(){
						componentObj.methods.prev();
					});
				},
				next:function(){
					componentObj.index++;
					if(componentObj.index >= 18){
						componentObj.index = 0;
					}
					componentObj.methods.display();
				},
				prev:function(){
					componentObj.index--;
					if(componentObj.index < 0){
						componentObj.index = 17;
					}
					componentObj.methods.display();
				},
				display: function(){
					var cont = componentObj.index - 5;
					if (cont < 0) {
						cont += 18;
					}
					var div_equipo = "";
					$("#indepth_estacion").stop().fadeOut("1000", function () {
						$(this).css({'background-image':'url("'+urlIndepth+'images/estaciones/IMG_'+
							componentObj.equipos[componentObj.index]+
							((componentObj.etiquetas)?2:1)+'.jpg")'}).fadeIn(1000);
					});
					for (var i = 0; i < 9; i++) {
						div_equipo = "#equipo"+i;
						cont++;						
						if(cont >= 18){
							cont = 0;
						}
						if(i == 4){
							$(div_equipo).css({'background-image':'url("'+urlIndepth+'images/btns/BTN '+componentObj.equipos[cont]+'ACTIVO.png")'});
						}else{
							$(div_equipo).css({'background-image':'url("'+urlIndepth+'images/btns/BTN '+componentObj.equipos[cont]+'.png")'});
						}
					}
				},
				display_jornadas: function(){
					$("#indepth_jornada").css({'background-image':'url("'+urlIndepth+'images/jornadas/J'+componentObj.jornada+' A.jpg")'});
				},
				tags: function(){
					if(componentObj.etiquetas){
						componentObj.etiquetas = false;
						$("#indepth_estacion").css({'background-image':'url("'+urlIndepth+'images/estaciones/IMG_'+componentObj.equipos[componentObj.index]+'1.jpg")'});
						$("#indepth_jornada").css({'background-image':'url("'+urlIndepth+'images/jornadas/J'+componentObj.jornada+' A.jpg")'});
						$(".etiquetas").css({'background-image':'url("'+urlIndepth+'images/btns/BTN_Etiqueta.png")'});
					}else{
						componentObj.etiquetas = true;
						$("#indepth_estacion").css({'background-image':'url("'+urlIndepth+'images/estaciones/IMG_'+componentObj.equipos[componentObj.index]+'2.jpg")'});
						$("#indepth_jornada").css({'background-image':'url("'+urlIndepth+'images/jornadas/J'+componentObj.jornada+' B.jpg")'});
						$(".etiquetas").css({'background-image':'url("'+urlIndepth+'images/btns/BTN_EtiquetaACTIVO.png")'});
					}
				}
			}
		};
		return componentObj;
	};	
})(jQuery);
$(document).ready(function(){
	$("#selector").sel();
});
