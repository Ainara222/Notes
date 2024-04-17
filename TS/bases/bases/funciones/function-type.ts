(()=> {


    const addnumber =(a:number, b:number) => a+b;//recibe dos numeros y los suma
    const saludo =(name:string) => `'hola'${name}`;//recibe el nombre y lo concatena con una palabra
    const saveWorld =()=>`el mundo esta salvado`//no recibe argumentos  devuelve el string


/* myfunction = 19;  
   
    console.log(myfunction); porque es de tipo any 

    let myfunction: (y:number, t:number)=> number ;
    myfunction = addnumber;
    console.log(myfunction);
    console.log(myfunction(23,67));

    let myfunction: (y:string)=> string ;
    myfunction = saludo;
    console.log(myfunction('fernando'));

    
    let myfunction: ()=> string ;
    myfunction = saveWorld;
    console.log(myfunction()); */

})()