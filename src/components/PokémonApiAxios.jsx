import React, {useState} from 'react';
import axios from 'axios';

const PokémonApiAxios = () => {
    
    let [pokémonList, setpokémonList] = useState( [] )

    const getPokémonFromAPI = () => {

        // state variable that will save the array of pokémon (or array of pokémon, etc.) into

        // use fetch() to make an api call
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")

            .then((pokémonData) => {
                console.log(pokémonData)
                setpokémonList(pokémonData.data.results)
            })
            // .catch() will run if the fetch() process breaks for any reason (if api is down, if the url you gave the fetch() is invalid, etc;)
            .catch((err) => {
                console.log("error when fetching. something went wrong.", err)
            })
    }


    return (
        <>
            <button onClick = {getPokémonFromAPI}>Fetch Pokémon</button>

            {
                pokémonList.map((pokémonObj, indexNum)=>{
                    return <div>
                        <h1>{pokémonObj.name}</h1>
                        
                        <hr />
                    </div>
                })
            }
        </>
    )
}


export default PokémonApiAxios;