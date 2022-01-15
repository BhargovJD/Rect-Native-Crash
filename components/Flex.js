import React from 'react'
import {View,Text,Modal,Button,StyleSheet} from 'react-native';

export default function Flex() {
    const styles = StyleSheet.create({
        mybox:{
            backgroundColor :"red",
            width:100,
            height:80,
            borderWidth:1
        },

        container:{
            // flex:1,
            backgroundColor :"violet",
            // direction wise justify content.
            // opposite direction alignItems.

            // flexDirection:"column",
            // justifyContent:"space-between",

            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"space-around",


        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.mybox}></View>
            <View style={styles.mybox}></View>
            <View style={styles.mybox}></View>
            <View style={styles.mybox}></View>
            <View style={styles.mybox}></View>
            <View style={styles.mybox}></View>
            <View style={styles.mybox}></View>
            <View style={styles.mybox}></View>
            <View style={styles.mybox}></View>
        </View>

    )
}
