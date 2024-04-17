(()=>{

let flash: { name:string, age?:number, powers:string[], getNombre?:() => string} = {
    name:'barry allen',
    age: 24,
    powers: ['super velocidad', 'viajar en el tiempo']
}

let superman: { name:string, age?:number, powers:number[], getNombre?:() => string} = {
    name:'clark kent',
    age: 45,
    powers: [1]
}



flash = {
    name: 'otro nombre',
    //age: 60, 
    powers:['super fuerza'],
    getNombre(){
       return this.name;
   }
}

console.log(flash.getNombre());

})()