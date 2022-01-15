import React,{useState} from 'react'
import {View,Text,Modal,Button} from 'react-native';


export default function Models() {
    const [showModal, setShowModal] = useState(false)
    return (
        <View>

            <Text>Modal</Text>

            <Modal animationType="slide" visible={showModal} onRequestClose={()=>{
                setShowModal(false)
            }}>
            <Text>This is Modal</Text>
            <Button title="Close modal" onPress={()=>{
                setShowModal(false)
            }}/>
            </Modal>

            <Button title="Open modal" onPress={()=>{
                setShowModal(true)
            }}/>

        </View>
    )
}
