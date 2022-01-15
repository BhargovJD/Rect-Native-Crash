import React from 'react'
import {View,Text} from 'react-native';



export default function ArrayMap() {
    let myArr=[
        {id:"1",task:"eat"},
        {id:"2",task:"sleep"},
        {id:"3",task:"code"}
    ]

    return (
        <View>
            {/* {
                myArr.map(item=><Text>{item.task}</Text>)
            } */}

            {
                myArr.map(item=>{
                return <Text>{item.task}</Text>})
            }
        </View>
    )
}
