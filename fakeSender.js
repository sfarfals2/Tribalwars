// ==UserScript==
// @name         Enviar Fakes
// @version      v1.0
// @author       eu
// @match        ://*.tribalwars.com.pt/*screen=place*
// @updateURL https://raw.githubusercontent.com/sfarfals2/Tribalwars/main/fakeSender.js
// @downloadURL https://raw.githubusercontent.com/sfarfals2/Tribalwars/main/fakeSender.js
// ==/UserScript==

(function() {
    'use strict';

    var linkToFakes = $('#content_value').find('a:contains(fake)');
    var coordenadas = '643|509 657|506 652|507 635|495 620|517 622|510 618|506 638|511 627|488 650|519 620|509 623|499 646|500 642|509 629|529 628|531 619|522 636|530 655|508 619|521 620|521 628|529 639|504 629|499 641|515 631|498 635|502 621|515 633|500 658|506 623|529 642|505 618|507 628|532 650|510 632|509 625|510 629|520 634|508 646|499 630|521 651|512 641|509 633|505 619|498 628|525 633|512 633|532 636|515 658|532 618|498 629|532 640|511 624|483 623|487 629|510 633|501 651|513 632|505 635|503 619|517 619|492 650|512 657|528 618|521 650|506 621|518 628|513 642|512 622|497 635|524 633|529 618|482 624|524 641|510 618|485 624|507 618|499 645|498 623|519 626|512 630|531 624|514 654|508 623|513 646|529 623|516 631|531 630|503 647|511 642|511 640|504 618|484 640|525 631|499 619|504 631|530 620|510 643|510 650|511 643|505 636|510 623|517 634|519 641|512 630|483 625|516 626|516 632|506 625|497 624|509 644|509 643|507 658|508 621|526 655|525 629|531 625|528 623|494 645|508 653|506 651|526 639|528 625|491 640|508 625|517 626|532 621|522 620|530 629|530 651|527 644|512 655|526 645|495 637|528 642|515 622|519 638|528 624|522 640|512 650|509 622|514 657|523 657|531 645|522 642|513 653|509 644|520 649|511 655|528 621|513 619|512 629|484 632|504 636|496 619|515 620|516 655|527 623|512 619|516 634|500 645|500 623|501 626|518 634|527 631|528 633|525 622|491 638|512 646|496 624|516 622|507 651|532 628|498 651|514 654|506 652|506 630|529 625|514 634|504 627|501 624|523 618|483 652|508 641|514 634|499 634|490 651|509 624|530 629|516 643|508 648|517 645|511 621|511 642|510 640|509 631|508 641|516 626|515';

    var tempoMinimo = new Date('2024-01-12T08:00:00.000');
    var tempoMaximo = new Date('2024-01-12T17:00:00.000');

    var botaoAtacar = $('#target_attack');
    var botaoConfirmarAtaque = $('#troop_confirm_submit');



    var guardarAldeiasNasCookies= function(coordenadasToArray){
        localStorage.setItem('aldeiasPorEnviarAtaques', JSON.stringify(coordenadasToArray));
    }

    var carregarAldeiasDasCookiesSeNaoEstiverVazioOuDefault = function(carregarSeVazio){
        var aldeiasNasCookies = JSON.parse(localStorage.getItem('aldeiasPorEnviarAtaques'));
        if(aldeiasNasCookies != null && aldeiasNasCookies.length > 0){
            coordenadas = aldeiasNasCookies;
            return coordenadas;
        }else if(carregarSeVazio)
        {
            coordenadas = coordenadas.split(' ');
            guardarAldeiasNasCookies(coordenadas);
        }
        return [];
    }

    var adicionarAldeiaAoArrayEAvancaParaProximaSeNaoExistir = function(){
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

    var verifaAldeiaExisteNoArray = function(aldeia){
         var arrayOfVillages= JSON.parse(localStorage.getItem('villagesVisited'));
        if(arrayOfVillages == null){
            return false;
        }else{
            var result = arrayOfVillages.find(obj => {
                return obj.b === aldeia
            });
        }
    }
    var paginaConfirmar = function(){
        var duracaoMinima = (tempoMinimo - new Date())/1000;
        var duracaoMaxima = (tempoMaximo - new Date())/1000;
        var duracaoDoAtaque = parseInt($('.relative_time').attr('data-duration'));
        coordenadas = carregarAldeiasDasCookiesSeNaoEstiverVazioOuDefault(false);
        coordenadas.shift();
        guardarAldeiasNasCookies(coordenadas);
        if($('.error:Contains("Bónus noturno")').length > 0){
            setTimeout(function(){
                $('a:contains(Praça de Reuniões)')[0].click();
            }, 1000);
            return;
        }
        if(duracaoDoAtaque > duracaoMinima && duracaoDoAtaque < duracaoMaxima){
            setTimeout(function(){
                $(botaoConfirmarAtaque).click();
            }, 1000);
        }else
        {
            setTimeout(function(){
                $('a:contains(Praça de Reuniões)')[0].click();
            }, 1000);
        }
    }


    var pracaReunioesSelecionar = function(){
        if($("#content_value > div.error_box > div:contains('A Força')").is(':visible')){
            adicionarAldeiaAoArrayEAvancaParaProximaSeNaoExistir();
            return;
        }

        var currentVillageId= $.cookie("global_village_id");

        var aldeiasAEnviar = [];
        if(verifaAldeiaExisteNoArray()){
            aldeiasAEnviar = carregarAldeiasDasCookiesSeNaoEstiverVazioOuDefault(false);
        }else{
            aldeiasAEnviar = carregarAldeiasDasCookiesSeNaoEstiverVazioOuDefault(true);
        }
        if(aldeiasAEnviar.length == 0){
            adicionarAldeiaAoArrayEAvancaParaProximaSeNaoExistir();
            return;
        }
        var primeira = aldeiasAEnviar[0];
        $(linkToFakes).click();
        if(($('#unit_input_ram').val()==0 && $('#units_entry_all_ram').text()=='(0)') || ($('#unit_input_catapult').val()==0 && $('#units_entry_all_catapult').text()=='(0)')){
            adicionarAldeiaAoArrayEAvancaParaProximaSeNaoExistir();
            return;
        }
        setTimeout(function() {
        $($('#place_target > input')[0]).val(primeira);
        }, 2000);
        setTimeout(function() {
            $(botaoAtacar).click();
        }, 3000);

    }

    var executaScript = function(){
        if(botaoAtacar[0] != undefined){
            pracaReunioesSelecionar();
        }else if(botaoConfirmarAtaque[0] != undefined){
            paginaConfirmar();
        }
    }

    executaScript();
})();
