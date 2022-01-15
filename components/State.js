import React,{useState} from 'react'
import {View,Text,Button} from 'react-native';

export default function State() {
    const [name, setName] = useState("What is your name ?")


    return (
        <View>

            <Text>{name}</Text>
            <Button title="Change name" onPress={()=>{
                // alert("Pressed!")
                setName("My name is Bhargov")
            }}/>
        </View>
    )
}
