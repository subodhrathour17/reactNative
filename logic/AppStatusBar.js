/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

const AppStatusBar = ({backgroundColor, ...props}) => {
    return (
        <View style={[styles.statusBar,backgroundColor]}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}  />
        </View>
    );
};

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
    statusBar: {
        height: BAR_HEIGHT,
    },
    // backgroundColor:{
    //     backgroundColor:'#3be012'
    // },
});

export default AppStatusBar;