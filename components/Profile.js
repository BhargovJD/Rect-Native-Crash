import React from 'react'
import {View,Text} from 'react-native';

export default function Profile({name,address}) {
    return (
        <View>
            <Text>Profile name:{name} and address is {address}</Text>
        </View>
    )
}
