(()=>{

    class avenger{
       // private name:string ;
       //private team:string;
       // private realName?:string;//no se ve fuera de la clase

       static age:number = 35;

       static getAge(){
        return this.name;
       } 
       
       /**        
         * !no se ve fuera de la clase, para hacerlo no es desde objetos sino desde la propia clase
        **/

        constructor

        (  private name:string, 
           private team:string,
           public realName:string,
          ){}
        
          public bio(){
            return `${this.name} (${this.team})`
          }


    }


    const antman :avenger=new avenger('antman','capital','jose');
    console.log(antman);
    console.log(avenger.getAge() );

    /** 
     * !console.log(avenger.age) , no desde el objeto (antman)
     * **/ 



})()