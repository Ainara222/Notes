
/**
 * ! Los namespace son como mini programas donde puedes agrupar todas las funciones, variables, (logica)
 * ! y solo exponemos lo que necesitamos
 */
namespace Validations{
/**
 * !necesario el 'export' para poder usar y que se muestre tal funcion fuera del namespace
 */
    export const validateText = (text:string)=>{

        if(text.length>3){
            return true;
        }else return false;
    }

    export const validateDate=(fecha:Date): boolean=>{
        return (isNaN(fecha.valueOf()))?false:true;

        /**
         * ! isNan : valida si el argumento pasado es un numero o no
         */



    }

}

console.log( Validations.validateText('fernando'))