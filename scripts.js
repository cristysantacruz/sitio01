// JavaScript Document

var nombre = 'Carlos';

function random(minimo, maximo){
            var numero = Math.round(Math.random()*(maximo-minimo)+minimo);
            return numero;
        }

function random2(minimo, maximo){
            var numero = Math.round(Math.random()*(maximo-minimo)+minimo);
            return numero;
        }

var numeros = [1, 2, 3, 4]; //indexado
var postres = []; //asociado
postres['yummie'] = 'chocolate';
postres[4] = 'galleta';
postres['posqueotra'] = 'fruta';

var mapa = [
            [1,0,0],
            [0,1,0],
            [0,0,1]
                    ];


var frases = [];
frases[1] = 'Un robot no puede dañar a un ser humano o, por inacción, permitir que un ser humano sea dañado';
frases[2] = 'Un robot debe obedecer las órdenes dadas por un ser humano, excepto cuando tales órdenes entren en conflicto con la Primera Ley';
frases[3] = 'Un robot debe proteger su propia existencia hasta donde esta protección no entre en conflicto con la Primera o la Segunda Ley';