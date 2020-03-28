import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

// Start Menu Icon
const DiscountHours = (props) => {
  return (
    <TouchableOpacity style={props.style}>
      <View style={{width:100, alignItems: "center"}}>
        <Text style={props.textSmall}>{props.time}</Text>
        <Text style={props.textBig}>{props.discount}</Text>
      </View>
    </TouchableOpacity>
  )
}
// End Menu Icon

export default DiscountHours;