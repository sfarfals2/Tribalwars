// ==UserScript==
// @name         Fazer cavalaria
// @namespace    tribalwars do sfarfas
// @version      v1
// @description  Fazer CL sempre que possivel
// @author       sfarfas
// @match    ://*.tribalwars.com.pt/*&screen=train*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var minhaVar = '';
    var boxCaptcha= $("#bot_check");	// NÃO ALTERAR!

	var aleatorio = function(superior, inferior) {
		var numPosibilidades	= superior - inferior,
			aleat				= Math.random() * numPosibilidades;

		return Math.round(parseInt(inferior) + aleat);
	};

    var botProtectionAppear = function(){
        if($('body').data('bot-protect') !== undefined || $('#botprotection_quest').is(':visible')){
            $("<audio id='audio' loop autoplay><source src='https://www.myinstants.com/media/sounds/funny_82hiegE.mp3' type='audio/mp3' /></audio>").appendTo("body");
            setTimeout(function(minhaVar) {
                    alert('Alerta Captcha!');
				}, 1000, this);
            return true;
        }
        return false;
    }

    var recrutaCL = function(){
        if(botProtectionAppear()) return;
        if($('input[name="light"]').is(':visible')){
            var x = $('#light_0_a').html().match(/\d+/)
            $('input[name="light"]').val(x)
            $('.btn.btn-recruit').click()
        }

        setTimeout(function(minhaVar) {
            recrutaCL();
        }, aleatorio(300000,600000), this);
    }

    setTimeout(function(minhaVar) {
        recrutaCL();
    }, aleatorio(1000,3000), this);

	var checkCaptcha = setInterval(function() {
		if (boxCaptcha.length) {
            $("<audio id='audio' loop autoplay><source src='https://www.myinstants.com/media/sounds/funny_82hiegE.mp3' type='audio/mp3' /></audio>").appendTo("body");
            atualizarPagina = false;
            setTimeout(function(minhaVar) {
                    alert('Alerta Captcha!');
				}, 1000, this);
			clearInterval(checkCaptcha);
			clearInterval(altVillage);
		}
	}, 100);
})();
