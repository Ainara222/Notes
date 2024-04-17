(() => {
//                                        interrogacion debido a que puede tener valor o undefined.
    const fullname = (firstname:string, lastname?:string) :string =>{
        return `${firstname} ${lastname || '---------'}`;

    }

    const name = fullname('toooony');

    console.log({name});

})()