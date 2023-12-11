// ==UserScript==
// @name reCAPTCHA E FARM NO A
// @author Reformed
// @email ...
// @namespace ...
// @version 1.0 (JAN/2018;)
// @grant Publico
// @description AutoFarm para Tribal Wars, com alerta sonoro para captcha.
// @match    ://*.tribalwars.com.pt/*&screen=am_farm*
// ==/UserScript==

var botProtect = $('body').data('bot-protect');
if (document.URL.indexOf('screen=am_farm') == -1)
	console.log('Você deve executar o script no assistente de farm!');
else if (botProtect !== undefined) {
	alert('Alerta Captcha!');
	$("<audio id='audio' autoplay><source src='https://www.myinstants.com/media/sounds/funny_82hiegE.mp3' type='audio/mp3' /></audio>").appendTo("body");
}
else {
	var x				= 1,				// NÃO ALTERAR!
		menu			= $('#am_widget_Farm a.farm_icon_a'),
        startAutomatic = true,
		tempo			= true,				// Tempo em milesegundos
		minhaVar		= "",				// NÃO ALTERAR!
		altAldTempo		= true,				// Tempo em milesegundos para alternar as aldeias (Use 'true' para aleatório)
		atualizarPagina	= true,			// Atualizar a página automaticamente? ('true' = SIM, 'false' = NÃO)
		tempoAtualizar	= 120,			// tempo atualizar pagina em segundos
		boxCaptcha		= $("#bot_check");	// NÃO ALTERAR!

	var aleatorio = function(superior, inferior) {
		var numPosibilidades	= superior - inferior,
			aleat				= Math.random() * numPosibilidades;

		return Math.round(parseInt(inferior) + aleat);
	};

    $('li[data-hotkey="9"]>span>a')[0].click();

	$('img').each(function() {
		var tempStr = $(this).attr('src');
		if (tempStr.indexOf('attack') != -1)
			$(this).addClass('tooltip');
	});

	if (atualizarPagina === true) {
		setInterval(function() {
			window.location.reload();
		}, aleatorio(tempoAtualizar*1000-20000, tempoAtualizar*1000+20000));
	}

	if (tempo === true)
		tempo = aleatorio(300, 1000);
    else
		tempo = parseInt(tempo) + parseInt(aleatorio(500, 1000));

	if (altAldTempo === true)
		altAldTempo = aleatorio(25000, 50000);
	else
		altAldTempo = parseInt(altAldTempo) + parseInt(aleatorio(500, 1000));


    var makeFarmClick = function(){
                var tempoAgora = tempo * x;
				selectMasterButton($("#plunder_list tr").filter(":visible").eq(1));
        if(document.querySelector("#ds_body > div.autoHideBox.error")== null){
				setTimeout(function(minhaVar) {
                    makeFarmClick();
				}, tempoAgora, this);
        }
    }


    if(startAutomatic){
    setTimeout(function(minhaVar) {makeFarmClick();}, 2698, this);
    }
    else{
        document.addEventListener('keypress', function(event) {
            if (event.keycode === 13 || event.which === 13) {
                event.preventDefault();
                makeFarmClick();
            }
        });
    }
	//var altVillage = setInterval(function () {
	//	$('.arrowRight, .groupRight').click();
	//	clearInterval(altVillage);
	//}, altAldTempo);

	var checkCaptcha = setInterval(function() {
		if (boxCaptcha.length) {
            $("<audio id='audio' autoplay><source src='https://www.myinstants.com/media/sounds/funny_82hiegE.mp3' type='audio/mp3' /></audio>").appendTo("body");

            setTimeout(function(minhaVar) {
                    alert('Alerta Captcha!');
				}, 1000, this);
			clearInterval(checkCaptcha);
			clearInterval(altVillage);
		}
	}, 100);
}
