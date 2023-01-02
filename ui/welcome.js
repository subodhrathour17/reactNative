/* eslint-disable prettier/prettier */
import {View, Text, Button, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import { first } from '../assets/images/image';
const welcome = ({navigation}) =>{
  console.log("gxhgua");
  return (
    <>
        <ImageBackground source={first} resizeMode="cover" style={styles.backgroundImage}>
            <View>
                <Text>welcome</Text>
                <View style = {styles.container}>
                <TouchableOpacity>
                    <Text style = {styles.text} onPress={() => navigation.navigate('Profile', { name: 'subodh' })}>
                      Button
                    </Text>
               </TouchableOpacity>
           </View>
            </View>
        </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
    text: {
        flex: 0,
        marginTop:10,
        marginLeft:10,
        width:50,
        height:30,
       borderWidth: 1,
       borderColor: 'black',
       backgroundColor: 'red',
    },
    backgroundImage: {
        flex: 1,
        // resizeMode: 'cover',
      },
 });
export default welcome;
