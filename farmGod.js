// ==UserScript==
// @name FarmGod aviso recaptcha
// @author Reformed
// @email ...
// @namespace ...
// @version 1.2
// @grant Publico
// @description AutoFarm para Tribal Wars, com alerta sonoro para captcha.
// @match    ://*.tribalwars.com.pt/*&screen=am_farm*
// @updateURL https://raw.githubusercontent.com/sfarfals2/Tribalwars/main/farmGod.js
// @downloadURL https://raw.githubusercontent.com/sfarfals2/Tribalwars/main/farmGod.js
// ==/UserScript==
var musicAddress= "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d3a7b18ab3.mp3";
var botProtect = $('body').data('bot-protect');
var	minhaVar = "";				// NÃO ALTERAR!
if (document.URL.indexOf('screen=am_farm') == -1)
	console.log('Você deve executar o script no assistente de farm!');
else if (botProtect !== undefined) {
	$("<audio id='audio' loop autoplay><source src='"+musicAddress+"' type='audio/mp3' /></audio>").appendTo("body");
}
else {
	var x				= 1,				// NÃO ALTERAR!
		menu			= $('#am_widget_Farm a.farm_icon_a'),
        startAutomatic = true,
		tempo			= true,				// Tempo em milesegundos
		altAldTempo		= true,				// Tempo em milesegundos para alternar as aldeias (Use 'true' para aleatório)
		atualizarPagina	= true,			// Atualizar a página automaticamente? ('true' = SIM, 'false' = NÃO)
		tempoAtualizar	= 300,			// tempo atualizar pagina em segundos
		boxCaptcha		= $("#bot_check");	// NÃO ALTERAR!

	var aleatorio = function(superior, inferior) {
		var numPosibilidades	= superior - inferior,
			aleat				= Math.random() * numPosibilidades;

		return Math.round(parseInt(inferior) + aleat);
	};

	var botProtectionAppear = function(){
	if($('body').data('bot-protect') !== undefined || $('#botprotection_quest').is(':visible')){
        $("<audio id='audio' loop autoplay><source src='"+musicAddress+"' type='audio/mp3' /></audio>").appendTo("body");
		return true;
	}
	return false;
	}

	if (atualizarPagina === true) {
		setInterval(function() {
	            	if(botProtectionAppear()) return;
			window.location.reload();
		}, aleatorio(tempoAtualizar*1000-40000, tempoAtualizar*1000+40000));
	}

	if (tempo === true)
		tempo = aleatorio(100, 300);
    else
		tempo = parseInt(tempo) + parseInt(aleatorio(100, 300));



    var makeFarmClick = function(){
                var tempoAgora = tempo * x;
				if(botProtectionAppear()) return;
				$('.farmGod_icon').first().trigger('click');
        if($('div.farmGodContent>table>tbody>tr.farmRow').length>0){
				setTimeout(function(minhaVar) {
                    makeFarmClick();
				}, tempoAgora, this);
        }
    }


    if(startAutomatic){
        setTimeout(function(minhaVar) {$('li[data-hotkey="8"]>span>a')[0].click();}, 2698, this);
        setTimeout(function(minhaVar) {$('input[value="Plan farms"]')[0].click();}, 4698, this);
        setTimeout(function(minhaVar) {makeFarmClick();}, 7000, this);
    }
    else{
        document.addEventListener('keypress', function(event) {
            if (event.keycode === 13 || event.which === 13) {
                event.preventDefault();
                makeFarmClick();
            }
        });
    }

	var checkCaptcha = setInterval(function() {
		if (boxCaptcha.length) {
            $("<audio id='audio' loop autoplay><source src='"+musicAddress+"' type='audio/mp3' /></audio>").appendTo("body");
            atualizarPagina = false;
            setTimeout(function(minhaVar) {
                    alert('Alerta Captcha!');
				}, 1000, this);
			clearInterval(checkCaptcha);
			clearInterval(altVillage);
		}
	}, 100);
}
