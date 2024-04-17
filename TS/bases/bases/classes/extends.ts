(()=>{

    class avenger{
        constructor(
            public name:string,
            public realname:string
        ){
            console.log('constructor llamado')
        }

        protected getFullName(){
            return `${this.name} ${this.realname}`
        }

    }

    class Xmen extends avenger{

        constructor(
            name:string,
            realname:string,
            public isMutant:boolean){
                
                super(name,realname)
            console.log('constructor xmen llamado')
            
            }

            get fullname(){
                return `${this.name} - ${this.realname}`
            }

            set fullname(name:string){

                //se pueden poner condiciones..
                this.name=name;
            }


        
            public getFullNameXmen(){
               console.log(super.getFullName() )
            }    
    }

    const wolverine = new Xmen ('w','l',true);
    console.log(wolverine.fullname);
    wolverine.getFullNameXmen();
    console.log(wolverine.fullname = 'pepito');
    console.log(wolverine.fullname) ;

})()