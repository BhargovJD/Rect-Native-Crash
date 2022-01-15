import React,{useState} from 'react'
import {View,Text,FlatList} from 'react-native';

export default function PullRefresh() {
    const [myArr, setMyArr]=useState([
        {id:"1",task:"eat"},
        {id:"2",task:"sleep"},
        {id:"3",task:"code"}
    ])

    const [loading, setLoading]=useState(false)

    return (
        <View>
            <FlatList data={myArr} renderItem={({item})=>{
                return <Text key={item.id}>{item.task}</Text>
            }} onRefresh={()=>{
                setLoading(true)
                setMyArr([...myArr,{id:Math.random(),task:"new task"}])
                setLoading(false)
            }} refreshing={loading} horizontal={true}/>
        </View>
    )
}
