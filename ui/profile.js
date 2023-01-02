/* eslint-disable prettier/prettier */

import { View, Text } from 'react-native';
import React from 'react';
const profile = ({navigation,route}) => {
  return (
    <View>
      <Text>welcome to profile screen {route.params.name}</Text>
    </View>
  );
};

// eslint-disable-next-line eol-last
export default profile;