(() => {
    //                                        interrogacion debido a que puede tener valor o undefined.
        const fullname = (firstname:string, lastname?:string, upper:boolean = false) :string =>{

            if(upper)
            return `${firstname} ${lastname || '---------'}`.toUpperCase();
        else return `${firstname} ${lastname || '---------'}`;
    
        }
    
        const name = fullname('toooony', 'stark',true);
    
        console.log({name});
    
    })()