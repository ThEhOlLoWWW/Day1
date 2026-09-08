/**
 * JOUR 01 — GUIDE 02
 * Le Détecteur de Types (Types primitifs)
 *
 * OBJECTIF
 * On vous donne une variable data = "123". Affichez son type, convertissez-la en nombre, puis affichez à nouveau son type.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

data = "123"
console.log(typeof data);
let dataNum = Number(data);
console.log(typeof dataNum);