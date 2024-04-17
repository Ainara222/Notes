(()=>{

abstract class mutante{
    constructor(
        public name:string,
        public realname:string
    ){

    }
}

class Xmen extends mutante{

     salvarMundo(){
        return 'mundo salvado';
     }
}

class villian extends mutante{
     conquistarMundo(){
        return 'mundo conquistado';
     }
}

const wolverine = new Xmen('wolverine','logan');
const magneto = new villian('magneto','magne');

console.log(wolverine);
console.log(magneto);

console.log(wolverine.salvarMundo());
console.log(magneto.conquistarMundo());

const printName = (character :mutante)=>{
    console.log(character.realname);
}

printName(wolverine);


})()