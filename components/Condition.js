import React from 'react'
import {View,Text} from 'react-native';

export default function Condition() {
    let name = ""
    return (
        <View>
            <Text>
                Condition:
            {
                name ? "Name is available":"Name is not present"
            }
            </Text>

        </View>
    )
}
