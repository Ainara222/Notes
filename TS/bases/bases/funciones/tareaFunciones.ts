// Funciones Básicas
const sumar2 = ( a:number, b:number ): number =>  {
  return a + b;
}

const contar2 = ( heroes:string[]  ) :number => {
  return heroes.length;
}
const superHeroes2 : string[]= ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman2 = ( llamar:boolean = true ):void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}


llamarBatman();

// Rest?
const unirheroes2 = ( ...personas:string[]) : string => {
  return `${'hola'} ${ personas.join(", ")}`;
}


// Tipo funcion
const noHaceNada2 = ( numero:number, texto:string, booleano:boolean, arreglo:string[] ) :void=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco2: (n:number , s:string, b:boolean , a:string[]) => void ;
noHaceNadaTampoco = noHaceNada;
