import axios from "axios";
import { Pokemon } from "../src/interfaces/pokemon";


export const getPokemon = async(pokemonId :number):Promise<Pokemon> => {

  //  console.log('Hola mundo');
  //  if(true) throw new Error('auxilio');

  const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
 // console.log(respuesta.data.abilities[0].ability.name);

    return data;
}