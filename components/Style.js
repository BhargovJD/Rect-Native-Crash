import React from 'react'
import {View,Text, StyleSheet} from 'react-native';

const Styles =StyleSheet.create({
    myview :{
        backgroundColor:"pink",
        padding:20
    }
})

export default function Style() {
    // const Styles =StyleSheet.create({
    //     myview :{
    //         backgroundColor:"pink",
    //         padding:20
    //     }
    // })
    return (
        <View style={Styles.myview}>
            <Text>Style component</Text>
        </View>
    )
}
