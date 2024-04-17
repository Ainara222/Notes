(()=>{

type avenger = {
    name:string,
    weapon:string,
}

const ironman:avenger={
    name:'iron',
    weapon:'pistola'
}

const hulk:avenger={
    name:'hulk',
    weapon:'puño'
}

const thor:avenger={
    name:'thor',
    weapon:'cuchillo'
}

const avengers:avenger[] = [ironman,hulk,thor];

for (const aven of avengers) {
    console.log(aven.name, aven.weapon);
}

})()