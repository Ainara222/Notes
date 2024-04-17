(()=>{


class apocalipsis{

    static instance:apocalipsis;

    constructor(public name:string){

    }


    static llamarApocalipsis():apocalipsis{
        if(!apocalipsis.instance){
            apocalipsis.instance = new apocalipsis('soy apocalipsis uno');
        }

        return apocalipsis.instance;

    }

    changeName(newName:string):void {
        this.name=newName;
    }
}
const apocal1 = apocalipsis.llamarApocalipsis();
const apocal2 = apocalipsis.llamarApocalipsis();
const apocal3 = apocalipsis.llamarApocalipsis();
apocal1.changeName('xavier');
const apocalipsis1= new apocalipsis('soy el apocalipsis');
const apocalipsis2= new apocalipsis('soy el apocalipsis');
const apocalipsis3= new apocalipsis('soy el apocalipsis');

console.log(apocalipsis1,apocalipsis2);


})()