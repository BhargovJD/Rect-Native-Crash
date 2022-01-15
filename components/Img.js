import React from 'react'
import {View,Text,Image} from 'react-native';

export default function Img() {
    return (
        <View>
            <Image source={require('./assets/dp.jpg')} style={{height:200, width:200}}/>
            {/* <Image source={{uri:"link"}} style={{height:200, width:200}}/> */}

        </View>
    )
}
