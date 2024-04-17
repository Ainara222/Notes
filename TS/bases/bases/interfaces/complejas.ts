(()=>{

    interface Client{
        name:string;
        age?:number;
        address: Address
        getFullAddress?(id:string):void;
    }

    interface Address{
            id:number,
            zip:string;
            city:string
        }
    

    const client:Client ={
        
        name: 'fernando',
        age:23,
        address:{
            id:123,
            zip:'kis sur',
            city:'london'
        },
        getFullAddress( id: string) {
            return this.address.city;
        },
}


const client2:Client ={
        
    name: 'melisa',
    age:23,
    address:{
        id:123,
        zip:'kis sur',
        city:'london'
    }
}

})()