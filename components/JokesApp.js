import React,{useState,useEffect} from 'react'
import {View,Text,Button} from 'react-native';

export default function JokesApp() {



    const [joke, setJoke] = useState("");
    const getJokes = async ()=>{
       const response =await fetch("http://api.icndb.com/jokes/random?firstName=Bhargov&lastName=Das");

       const result = await response.json()

       setJoke(result.value.joke)

    }

    useEffect(()=>{
        getJokes()
    },[])
    return (
        <View>
            <Text>Jokes App</Text>
            <Button title="Fetch Jokes on Bhargov" onPress={()=>{
                getJokes()
            }}/>

            {joke ? <Text>{joke}</Text>:null}
        </View>
    )
}
