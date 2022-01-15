import React,{useState} from 'react'
import {View,TextInput,ActivityIndicator} from 'react-native';

export default function Input() {
    const [Itext, setItext] = useState("");
    return (
        <View>
            <TextInput value={Itext} placeholder="Type a name" onChangeText={(e)=>{setItext(e)}} />

            <ActivityIndicator size="large" color="red"/>


        </View>
    )
}
