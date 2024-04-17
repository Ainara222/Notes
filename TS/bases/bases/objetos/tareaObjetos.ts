


type general = {


  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros:number,
  disparar?:() => void


}


// Objetos
const batimovil: general = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee :general = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados

type arraysGenerales = {

  nombre:string,
  edad:number,
  mutante:boolean
}
const villanos:arraysGenerales[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 3,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type charlesType = {
  poder:string,
  estatura:number
}

type apocalipsisType = {
  lider:boolean,
  miembros:string[]
}
const charles: charlesType = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis : apocalipsisType= {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique : (charlesType | apocalipsisType);

mystique = charles;
mystique = apocalipsis;
