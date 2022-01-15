import React from 'react'
import {View,Text,TouchableOpacity,TouchableHighlight} from 'react-native';

export default function Touchable() {
    return (
        <View>
            <TouchableOpacity>
                <Text>Click Here</Text>
            </TouchableOpacity>
            
            <TouchableHighlight>
                <Text>Click Here</Text>
            </TouchableHighlight>
        </View>
    )
}
