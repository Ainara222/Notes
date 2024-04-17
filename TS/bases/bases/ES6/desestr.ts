(()=>{

    type avengers = {
        nick: string,
        ironmann: string,
        vision:string,
        activo: boolean,
        poder:number
    }

    const avenger = {
        nick: 'samuel L. jackson',
        ironmann: 'robert',
        vision: 'paul',
        activo: true,
        poder:1500
    }

   // const {poder, vision} = avenger;
   //console.log(poder.toFixed(2),vision.toUpperCase() );

   const printAvenger = ({ironmann, ...resto}:avengers)=>{
     console.log(ironmann, resto.nick);
   }

  // printAvenger(avenger);


   const avengersArr:[string,boolean,number]= ['cap.america', true,125];

   //const ironman = avengersArr[1];
const[capitan, iron,numero]=avengersArr;
   console.log({iron,capitan,numero});


})()