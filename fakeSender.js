// ==UserScript==
// @name         Enviar Fakes
// @version      v1.2.1-NF15012024
// @author       eu
// @match        ://*.tribalwars.com.pt/*screen=place*
// @updateURL https://raw.githubusercontent.com/sfarfals2/Tribalwars/main/fakeSender.js
// @downloadURL https://raw.githubusercontent.com/sfarfals2/Tribalwars/main/fakeSender.js
// ==/UserScript==

(function() {
    'use strict';

    var linkToFakes = $('#content_value').find('a:contains(fake)');
    var coordenadas = '628|592 614|483 570|502 643|509 619|597 657|506 633|583 624|595 649|536 606|517 590|518 579|596 620|517 597|460 608|543 641|533 622|510 618|506 581|457 638|549 611|506 627|488 569|476 615|517 642|573 650|519 620|509 593|538 586|464 582|460 586|465 596|556 616|494 623|499 596|460 634|586 629|581 578|461 624|541 646|500 642|509 624|584 582|467 629|529 646|537 628|531 619|522 623|537 636|530 566|490 655|508 619|521 567|473 606|516 587|467 605|558 641|564 620|521 628|529 584|489 584|469 637|567 564|500 631|591 578|486 590|456 629|499 581|466 641|515 572|471 630|578 571|474 580|599 566|508 635|549 583|507 578|594 568|503 647|534 631|498 636|577 596|457 567|477 607|488 621|515 583|465 584|475 595|519 658|506 593|567 623|529 578|475 576|593 580|485 642|505 593|460 579|510 637|548 634|583 624|582 624|538 618|507 614|511 631|547 604|535 598|547 628|532 650|510 632|509 631|586 607|536 625|510 629|520 566|496 595|457 586|467 596|574 618|581 634|508 646|499 631|588 631|576 610|586 633|588 572|473 608|491 630|521 566|501 587|558 611|565 621|535 626|537 635|547 618|567 625|587 641|509 628|533 606|541 593|511 642|539 629|546 609|553 611|509 605|519 617|484 565|492 644|537 570|474 627|583 592|525 622|561 633|512 633|532 637|577 603|515 636|515 623|585 579|480 618|498 629|532 607|502 627|576 609|518 584|471 632|591 610|490 639|580 640|511 642|533 624|483 631|533 623|487 608|544 615|536 635|543 603|589 592|462 563|474 603|524 587|458 610|598 590|545 598|458 604|547 569|473 607|483 629|582 625|593 622|601 610|519 638|570 631|598 607|586 593|546 629|510 594|543 633|501 632|505 608|516 625|578 617|488 619|517 606|531 619|492 606|514 600|591 610|541 565|500 611|482 597|459 608|540 657|528 618|521 650|506 635|580 621|518 628|513 628|534 640|581 642|512 603|485 615|526 586|472 586|521 635|584 622|497 635|524 565|485 623|578 618|482 624|524 585|469 641|510 580|467 605|516 630|577 610|484 627|543 587|473 617|539 618|485 600|603 630|568 570|587 624|507 600|519 645|498 641|536 623|519 626|512 583|535 589|459 630|531 603|517 568|501 624|579 584|542 583|466 621|552 658|505 592|512 636|584 633|575 641|549 588|467 631|574 650|540 609|586 568|504 590|475 617|516 629|590 611|522 632|581 623|513 646|529 623|516 630|533 599|518 631|531 598|511 625|540 661|509 630|503 642|511 603|568 618|484 564|503 565|493 640|525 617|508 637|586 631|499 565|497 617|491 627|597 623|583 619|504 589|570 631|530 601|519 625|583 631|589 589|467 620|510 643|510 629|583 650|511 597|582 574|446 584|466 623|517 590|471 634|519 641|512 592|543 583|503 630|483 629|536 575|512 564|507 566|476 626|516 632|506 659|505 599|477 625|497 572|472 624|509 644|509 635|583 643|507 576|461 564|475 610|493 606|483 637|584 584|454 567|506 632|575 658|508 618|594 621|526 655|525 629|531 625|528 623|494 627|537 645|508 569|475 567|476 627|584 586|469 592|465 626|599 653|506 651|526 628|582 623|582 639|528 612|484 627|582 625|491 588|518 608|517 657|505 625|582 631|585 638|579 666|558 616|502 623|545 625|517 586|512 577|476 610|534 588|533 608|501 626|532 640|570 591|475 627|586 596|562 621|522 616|515 620|530 621|593 568|477 570|455 597|519 641|567 600|590 650|553 639|581 620|571 611|486 566|475 606|518 608|490 629|530 570|501 651|527 578|473 624|581 637|582 596|525 601|515 614|502 644|512 591|528 642|540 633|587 616|491 602|523 592|473 655|526 617|519 617|520 645|495 620|592 617|493 637|528 587|544 638|580 631|583 642|515 633|579 622|519 628|581 637|575 587|474 636|586 638|528 595|521 601|520 610|542 624|522 595|522 640|512 628|551 579|474 650|509 601|555 629|580 623|535 622|514 603|523 657|523 657|531 642|513 630|537 653|509 628|496 606|488 589|572 649|511 601|592 655|528 618|598 621|513 611|491 636|550 640|546 619|512 629|484 602|514 604|519 578|513 607|533 615|589 625|537 572|454 603|474 626|533 619|515 620|516 632|592 617|507 571|449 655|527 607|525 623|512 634|580 610|591 619|516 624|537 568|502 625|592 606|519 634|500 584|468 645|500 623|501 626|518 609|532 634|527 612|513 631|528 644|535 583|470 599|592 592|580 633|525 643|567 580|593 608|515 573|474 607|527 622|491 638|512 624|549 636|578 646|496 585|464 624|516 600|524 641|550 615|494 631|581 622|507 651|532 600|607 628|498 608|542 630|576 603|516 638|559 613|504 604|556 660|521 625|584 654|506 606|580 652|506 633|546 630|529 624|548 623|539 561|465 631|575 589|481 627|501 624|523 616|516 618|483 614|543 634|579 629|585 594|474 579|501 626|535 652|508 649|535 642|597 641|514 634|499 596|475 634|490 580|462 584|505 602|520 601|502 651|509 598|545 616|519 594|462 633|544 632|549 593|481 635|582 566|478 628|547 585|541 578|457 628|579 595|461 643|508 625|572 646|533 595|525 617|497 604|517 632|590 579|463 610|535 648|517 625|536 645|511 621|511 637|580 640|580 641|580 633|591 641|581 653|567 640|579 632|603 639|585 635|591 646|584 638|585 639|584 659|556 667|526 636|588 633|606 641|582 655|562 646|581 627|614 647|583 643|580 668|535 650|568 639|596 648|584 627|616 644|579 626|614 638|600 642|595 641|594 628|616 632|612 630|608 667|536 630|613 639|597 636|603 628|614 627|613 647|584 642|510 670|462 648|582 659|572 659|570 625|616 670|536 638|610 649|584 641|595 632|618 650|592 645|594 650|595 646|598 641|608 629|614 669|536 649|583 630|614 662|562 650|590 669|535 658|581 647|589 668|558 637|611 643|603 669|561 671|536 649|599 648|595 638|611 647|604 664|586 660|571 650|601 661|572 654|598 641|610 646|613 649|598 644|608 649|609 655|600 654|600 643|618 644|607 650|606 650|612 654|605 671|578 651|611 653|598 652|613 657|502 570|510 672|579 635|624 672|575 656|608 672|576 673|579 646|626 663|567 658|601 647|621 686|555 685|557 648|618 671|579 689|556 645|624 673|580 647|628 657|582 622|606 618|595 687|579 680|582 681|578 672|577 682|577 675|554 686|580 677|601 657|637 689|582 688|579 595|592 692|581 687|582 641|516 687|580 566|465 663|562 724|558';

    var tempoMinimo = new Date('2024-01-16T08:00:00.000');
    var tempoMaximo = new Date('2024-01-16T10:00:00.000');

    var botaoAtacar = $('#target_attack');
    var botaoConfirmarAtaque = $('#troop_confirm_submit');

    var cleanUp = false;;



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
        var coordenadaAtacar = $('.village_anchor.contexted > a').text().substr(-12,7);
        coordenadas = $.grep(coordenadas, function(n) {
            return n != coordenadaAtacar;
        });
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
        if($("#content_value > div.error_box > div:contains('A força')").is(':visible')){
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
        var indexRandom = parseInt(Math.random() * (aldeiasAEnviar.length -1));
        var alvo = aldeiasAEnviar[indexRandom];
        $(linkToFakes).click();
        if(($('#unit_input_ram').val()==0 && $('#units_entry_all_ram').text()=='(0)') && ($('#unit_input_catapult').val()==0 && $('#units_entry_all_catapult').text()=='(0)')){
            adicionarAldeiaAoArrayEAvancaParaProximaSeNaoExistir();
            return;
        }
        setTimeout(function() {
        $($('#place_target > input')[0]).val(alvo);
        }, 2000);
        setTimeout(function() {
            $(botaoAtacar).click();
        }, 3000);

    }

    var executaScript = function(){
        if(cleanUp){
            localStorage.removeItem('villagesVisited');
            localStorage.removeItem('aldeiasPorEnviarAtaques');

            return;
        }


        if(botaoAtacar[0] != undefined){
            pracaReunioesSelecionar();
        }else if(botaoConfirmarAtaque[0] != undefined){
            paginaConfirmar();
        }
    }

    executaScript();
})();
