/*==========================| PRIMEIROS EVENTOS |==========================*/

$(function() {
	if ($.cookie("darkmode") == 1) {
		darkmode();
		$("section div p:first-child").css('background', $.cookie("darkcolor"));
	} else {
		$("section div p:first-child").css('background', $.cookie("color"));
	}
});

/*==========================| PRIMEIROS EVENTOS |==========================*/

/*============================| TROCA DE COR |============================*/

var cor = 0;
function color() {
if (cor == 0) {
    $("html, body").animate({scrollTop: 0}, "slow");
    $("#color img").attr("src","img/icon/color_1.png");
    $('<div class="color" style="text-align: center;"><p>Selecionar cor</p><div id="color-picker-container" style="padding: 10px; display: inline-block;"></div></div>').prependTo('section:visible');
    if ($.cookie("darkmode") == 1) {
        var colorPicker = new iro.ColorPicker("#color-picker-container", {width: 240, color: $.cookie("darkcolor")});
    } else {
        var colorPicker = new iro.ColorPicker("#color-picker-container", {width: 240, color: $.cookie("color")});
    }
    
    colorPicker.on('color:change', onColorChange);
    function onColorChange(color, changes) {
        $("section div p:first-child").css("background", color.hexString);
        if ($.cookie("darkmode") == 1) {
            $.cookie("darkcolor", color.hexString, { expires: 60 });
        } else {
            $.cookie("color", color.hexString, { expires: 60 });
        }
    }
    darkmode(); darkmode();
    cor = 1
    } else {
    $("#color img").attr("src","img/icon/color_0.png");
    $(".color").remove();
    cor = 0
    }
}

$("#input-color").on("change", function() {
$("section div p:first-child").css('background', $("#input-color").val());

if ($.cookie("darkmode") == 1) {
    $.cookie("darkcolor", $("#input-color").val(), { expires: 7 });
    $("section div").css({"background" : "#292a2d", "text-shadow" : "2px 2px 2px black"});
} else {
    $.cookie("color", $("#input-color").val(), { expires: 7 });
    $("section div").css({"background" : "white", "text-shadow" : ""});
}

});

/*============================| TROCA DE COR |============================*/

/*================================| LOGO |================================*/

function logohide() {
    if ($("nav").is(":visible")) {
        $("nav, main").fadeOut(100);
        $(".logo_fix").fadeTo(100, 0.2);
    } else {
		$("nav, main").fadeIn(100);
		if ($(window).width() >= 500) {
			$(".logo_fix").fadeOut(100);
		} else {
			$(".logo_fix").fadeTo(100, 1);
		}
    }
};

/*================================| LOGO |================================*/

/*==============================| DARK MODE |==============================*/

var darkicon = 0;

function darkmode() {
    if (darkicon == 0) {
        // Dark Mode
        darkicon = 1;
        
        $(".darker").show();
        $("#darkmode img").attr("src","img/icon/night_1.png");
        $.cookie("darkmode", darkicon, { expires: 60 });
        
        if ($.cookie("darkcolor") == null) {
            $("section div p:first-child").css("background", "#202124");
        } else {
            $("section div p:first-child").css('background', $.cookie("darkcolor"));
        }
        $("nav").css("background", "#202124");
        $(".icon img").css('-webkit-filter', 'drop-shadow(2px 2px 2px white) invert(1)');
        $("section div, .color *").css({"background" : "#292a2d", "text-shadow" : "2px 2px 2px black", "color" : "white"});
        $(".fa").css("color", "white");
        $(".glow_purple").css("background", "#ae13ff52");
        $(".glow_green").css("background", "#126700c2");
        $('nav img').css('-webkit-filter', 'drop-shadow(3px 3px 1px black)');
        
    } else {
        // Light Mode
        darkicon = 0;
        
        $("section div p:first-child").css('background', $.cookie("color"));     
        $("#darkmode img").attr("src","img/icon/night_0.png");
        $.cookie("darkmode", darkicon, { expires: 60 });
        $("section *:not(.color, .color *), nav, .darker").removeAttr("style");
		$(".color, .color *").css('background', 'white');
        
        if ($.cookie("color") == null) {
            $("section div p:first-child").css("background", "#23004c");
        } else {
            $("section div p:first-child").css('background', $.cookie("color"));
            $("section *:not(.color, .color *)").removeAttr("style");
			$(".color, .color *").css('background', 'white');
        }
    }
};

/*==============================| DARK MODE |==============================*/

/*==============================| RANDOM BG |==============================*/

function wallpaper() {
var bg = ["bg01", "bg02", "bg03", "bg04", "bg05", "bg06", "bg07", "bg08", "bg09", "bg10", "bg11", "bg12", "bg13", "bg14", "bg15", "bg16", "bg16", "bg18", "bg19", "bg20", "bg21", "bg22", "bg23", "bg24"];
var rand = [Math.floor((Math.random() * bg.length)), Math.floor((Math.random() * 100))];
$('body').css({"background-image" : 'radial-gradient(transparent, black 250%), url("img/bg/' + bg[rand[0]] + '.jpg")' , "background-position" : rand[1] + '%'});
};

/*==============================| RANDOM BG |==============================*/

// Botão de navegação Desktop
$(function() {
	$("#show_desktop").click(function(){
		if (show_desktop == 1) {
			$("nav p").hide();
			$("main").css("margin-left", $("nav div").innerWidth()); // Detecta o tamanho da nav
			$("#show_desktop img").attr("src","img/icon/menu_0.png");
			show_desktop = 0
		} else {
			$("nav p").show();
			$("main").css("margin-left", $("nav div").innerWidth()); // Detecta o tamanho da nav
			$("#show_desktop img").attr("src","img/icon/menu_1.png");
			show_desktop = 1
		}
	});
});

function reset() {
    $('section').hide();
    $("#entradas img").attr("src","img/icon/entry_0.png");
    $("#sobre img").attr("src","img/icon/info_0.png");
    $("#playlists img").attr("src","img/icon/music_0.png");
    $("#changelog img").attr("src","img/icon/changelog_0.png");
    $("#wallpaper img").attr("src","img/icon/wall_0.png");
    $("#key img").attr("src","img/icon/pass_0.png");
};

function entradas() {
    reset();
    $("#entradas img").attr("src","img/icon/entry_1.png");
    $('.entradas').show();
}

function sobre() {
    reset();
    $("#sobre img").attr("src","img/icon/info_1.png");
    $('.sobre').show();
    $(document).attr("title", "Sobre | My Irreal World");
}

function changelog() {
    reset();
    $("#changelog img").attr("src","img/icon/changelog_1.png");
    $('.changelog').show();
    $(document).attr("title", "Changelog | My Irreal World");
}

function playlists() {
    reset();
    $("#playlists img").attr("src","img/icon/music_1.png");
    $('.playlists').show();
    $(document).attr("title", "Playlists | My Irreal World");
}

/*===============================| SENHAS |===============================*/

// Variável requerida para cada chave. Faz com que somente seja inserida uma única vez, prevenindo a repetição
var exemplo_senha = 0;

function key() {

var senha = prompt("Digite a senha:", "");

switch(senha.toLowerCase()) {
      
case "clear":
        c = confirm("Redefinir preferências?");
        if (c == true) {
            $.removeCookie("darkmode");
            $.removeCookie("color");
            $.removeCookie("darkcolor");
            darkmode(); darkmode();
        } else {
            alert("Redefinição cancelada.");
        }
      break;
  
default:
    if(senha == 0) {alert("Digite uma senha."); key();} else if (senha == null) {} else {alert('Senha Inválida.'); key();};
      break;
  }
};

/*===============================| SENHAS |===============================*/