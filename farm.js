// ==UserScript==
// @name reCAPTCHA E FARM NO A
// @author Reformed
// @email ...
// @namespace ...
// @version 1.2
// @grant Publico
// @description AutoFarm para Tribal Wars, com alerta sonoro para captcha.
// @match    ://*.tribalwars.com.pt/*&screen=am_farm*
// @updateURL https://raw.githubusercontent.com/sfarfals2/Tribalwars/main/farm.js
// @downloadURL https://raw.githubusercontent.com/sfarfals2/Tribalwars/main/farm.js
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

    var addToVillageArrayAndMoveNextIfNotExists = function(){
        var currentVillageId= $.cookie("global_village_id");
        var arrayOfVillages= JSON.parse(localStorage.getItem('villagesVisited'));
        if(arrayOfVillages == null){
            arrayOfVillages = [];
            arrayOfVillages.push(currentVillageId);
            localStorage.setItem('villagesVisited', JSON.stringify(arrayOfVillages));
            $('#village_switch_right')[0].click();
        }else{
            if(jQuery.inArray(currentVillageId, arrayOfVillages) == -1)
            {
                arrayOfVillages.push(currentVillageId);
                localStorage.setItem('villagesVisited', JSON.stringify(arrayOfVillages));
                $('#village_switch_right')[0].click();
            }else{
                localStorage.removeItem('villagesVisited');
            }
        }
    }


	$('img').each(function() {
		var tempStr = $(this).attr('src');
		if (tempStr.indexOf('attack') != -1)
			$(this).addClass('tooltip');
	});

	if (atualizarPagina === true) {
		setInterval(function() {
            		if(botProtectionAppear()) return;
			window.location.reload();
		}, aleatorio(tempoAtualizar*1000-40000, tempoAtualizar*1000+40000));
	}

	if (tempo === true)
		tempo = aleatorio(200, 600);
    else
		tempo = parseInt(tempo) + parseInt(aleatorio(200, 600));

	if (altAldTempo === true)
		altAldTempo = aleatorio(25000, 50000);
	else
		altAldTempo = parseInt(altAldTempo) + parseInt(aleatorio(500, 1000));


    var makeFarmClick = function(){
                var tempoAgora = tempo * x;
				if(botProtectionAppear()) return;
				selectMasterButton($("#plunder_list tr").filter(":visible").eq(1));
        if(document.querySelector("#ds_body > div.autoHideBox.error")== null){
				setTimeout(function(minhaVar) {
                    makeFarmClick();
				}, tempoAgora, this);
        }else
        {
            addToVillageArrayAndMoveNextIfNotExists();
        }
    }


    if(startAutomatic){

    setTimeout(function(minhaVar) {$('li[data-hotkey="9"]>span>a')[0].click();}, 2698, this);


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
