import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default Button = ({icon, size, color, style, onPress}) => {
 return (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Ionicons
     name = {icon}
     size = {size? size : 26}
     color = {color ? color : '#FBFBFF'}
    />
  </TouchableOpacity>
 )
};

const styles = StyleSheet.create({
 button: {
  height: 40,
  alignItems: 'center',
  justifyContent: 'center'
 }
})