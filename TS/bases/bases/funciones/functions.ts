(()=>{

const hero:string ='flash';


function returnName():string{
    return hero;
}

const activateBatSignal =():string=>{
    return 'batiseñar activada!';
}
console.log(typeof activateBatSignal);
const heroName = returnName();

})()