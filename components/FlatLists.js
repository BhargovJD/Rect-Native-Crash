import React from 'react'
import {View,Text,FlatList} from 'react-native';

export default function FlatLists() {
    let myArr=[
        {id:"1",task:"eat"},
        {id:"2",task:"sleep"},
        {id:"3",task:"code"}
    ]

    return (
        <View>
            <FlatList data={myArr} renderItem={({item})=>{
                return <Text key={item.id}>{item.task}</Text>
            }}/>
        </View>
    )
}
