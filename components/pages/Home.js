import React from 'react'
import {View,Text,Button} from 'react-native';

export default function Home({navigation}) {
    return (
        <View>
            <Text>Home page</Text>
            <Button title="Go to about page" onPress={()=>{
                navigation.navigate("About")
            }}/>
        </View>
    )
}
