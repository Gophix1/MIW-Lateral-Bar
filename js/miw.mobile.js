//Botão de navegação Mobile
$(function() {
    $("#show_mobile").click(function(){
		function animateCSS(element, animationName, callback) {
		const node = document.querySelector(element)
		node.classList.add('animated', animationName)
		function handleAnimationEnd() {
			node.classList.remove('animated', animationName)
			node.removeEventListener('animationend', handleAnimationEnd)
			if (typeof callback === 'function') callback()
			}
		node.addEventListener('animationend', handleAnimationEnd)
		}
		
		if (show_mobile == 0){
		var j = $('nav div').length - 2; // Conta quantas navegações tem menos o dois primeiros
		function repeat2() {
			if (j > 1) { // Esconder todas as navegações menos a primeira
				animateCSS('nav div:nth-last-child('+j+')', 'fadeOut', function() {
					$('nav div:nth-last-child('+j+')').hide();
					j--;
					repeat2();
				});
			}
		}
		repeat2();
			$("#show_mobile img").attr("src","img/icon/menu_0.png");
			show_mobile = 1;
		} else {
		var i = 2;
		function repeat() {
			if (i <= $('nav div').length - 2) {
				$('nav div:nth-last-child('+i+')').show();
				animateCSS('nav div:nth-last-child('+i+')', 'fadeInUp', function() {
					i++;
					repeat();            
				});
			}
		}
		repeat();
			$("nav div:last-child").css("margin-top", "10px");
			$("#show_mobile img").attr("src","img/icon/menu_1.png");
			show_mobile = 0;
		}
	});
});