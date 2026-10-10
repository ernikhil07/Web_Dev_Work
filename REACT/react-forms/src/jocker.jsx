import {useState} from "react";
export default function Jocker(){
    const URL ="https://official-joke-api.appspot.com/random_joke";
    let[joke,setJoke]=useState({});

    const getJoke= async ()=>{
        let responce=await fetch(URL);
        let jsonResponce= await responce.json();
        console.log(jsonResponce);
        setJoke({setup: jsonResponce.setup, punchline:jsonResponce.punchline});
    }
    return(
        <div>
            <h3>Jocker</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>New Joke</button>
        </div>
    )
}