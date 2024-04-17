
//import { Hero as superHero /*alias para usar solo en este archivo aunque la clase se seguira llamando Hero*/, Hero2 } from "./classes/Hero";
//import powers /*esta es una exportacion por defecto*/ ,{Power} from "../data/powers";
//console.log('Hola Mundo!????????');
/*import {Hero} from './classes/Hero';


const iron = new Hero('pepe',23,123);
console.log(iron);

console.log(iron.power);*/

import { genericFunction, genericFunctionArrow,printObject } from "../../generes/generics";
import { Hero } from "../interfaces/hero";
import { villain } from "../interfaces/villian";

/*
import { printObject } from "../generes/generics";
printObject(123);
printObject('123');
printObject(new Date() );
printObject([43,1,1,2,2,]);
printObject(123);*/

/*
console.log(genericFunction(3.714343).toFixed(2)    )
console.log(genericFunction(new Date()).getTime()    )
console.log(genericFunctionArrow('3.714343').toUpperCase())*/

const deadpool = {
    name:'deadpool',
    realname:'wade',
    dangerLevel:130
}

console.log(genericFunctionArrow<villain>(deadpool).dangerLevel);







