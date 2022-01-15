import React,{useState} from 'react'
import {View,Text,TextInput,Button,ActivityIndicator} from 'react-native';

export default function Calculator() {
    const[Itext1, setItext1] = useState("")
    const[Itext2, setItext2] = useState("")

    const[loading, setLoading] = useState(false)

    if(loading){
        return (
            <View style={{alignItems:"center"}}>
                <Text>Calculating</Text>
                <ActivityIndicator size="large" color="red"/>
            </View>
        )
    }

    const calculate =()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            alert(Math.floor(Math.random()*100)+"%")
        },2000)
    }

    return (
        <View>
             <TextInput value={Itext1} placeholder="Type a name of person 1" onChangeText={(e)=>{setItext1(e)}} style={{height:50, borderWidth: 2}} />

             <TextInput value={Itext2} placeholder="Type a name of person 2" onChangeText={(e)=>{setItext2(e)}} style={{height:50, borderWidth: 2}} />

             <Button title="Calculate" onPress={()=>{
                 calculate()
             }}/>
        </View>
    )
}
