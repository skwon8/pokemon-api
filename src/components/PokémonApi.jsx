import React, {useState} from 'react';

const PokémonApi = () => {
    
    let [pokémonList, setpokémonList] = useState( [] )

    const getPokémonFromAPI = () => {

        // state variable that will save the array of pokémon (or array of pokémon, etc.) into

        // use fetch() to make an api call
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((pokémonData) => {
                // convert our data to json (key value pairs -> javascript object) so that javascript application can understand it
                return pokémonData.json()
            })
            .then((pokémonData) => {
                console.log(pokémonData)
                setpokémonList(pokémonData.results)
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


export default PokémonApi;