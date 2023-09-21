import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native'
import {Colors} from '../../app/constants'


const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('Onboarding')
    },3000)
    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white}} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#465bd8" />
            <Image source={require('../assets/images/MSAzul.png')} style={{width:300, height:70}}  />   
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})