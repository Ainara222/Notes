(()=>{
//para que muestre los demas argumentos que son pasados a la funcion
    const fullname = (name:string , ...resto: string[]):string => {
            return `${name} ${resto.join()}`;
    }


    const superMan = fullname('pepe', 'perez','alonso');

    console.log({superMan});
})()