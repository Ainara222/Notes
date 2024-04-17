(()=>{

type Hero = {

    name:string;
    age?:number;
    powers:number[];
    getName ?: () => string;

}

    let flash:Hero= {
        name:'barry allen',
        age: 24,
        powers: [1,2]
    }
    
    let superman: Hero = {
        name:'clark kent',
        age: 45,
        powers: [3],
        getName() {
            return this.name;
        },
    }
    
    
    
    flash = {
        name: 'otro nombre',
        //age: 60, 
        powers:[87],
        getName(){
           return this.name;
       }
    }
    
    //console.log(flash.getName());
    
    })()