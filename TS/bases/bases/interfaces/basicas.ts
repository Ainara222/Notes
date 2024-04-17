(()=>{

/**
 * !interfaces tampoco 'lucen' en js , solo en ts para restringir como 'lucen' los objetos
 */
    interface  Hero  {

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
        
        


})()