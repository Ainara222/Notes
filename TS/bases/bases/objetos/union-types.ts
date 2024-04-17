(()=>{


    type Hero = {

        name:string;
        age?:number;
        powers:number[];
        getName ?: () => string;
    
    }

    let myCustomVariable: (string| number | Hero ) = 'fernando' ;
    console.log(myCustomVariable);

    myCustomVariable = 20 ;
    console.log(myCustomVariable);

    myCustomVariable = {
        name:'bruce',
        age:34,
        powers: [1],

    }

    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
})()