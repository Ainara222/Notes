(() => {

    const fullname = (firstname:string, lastname:string) :string =>{
        return `${firstname} ${lastname}`;

    }

    const name = fullname('toooony', 'stark');

    console.log({name});

})()