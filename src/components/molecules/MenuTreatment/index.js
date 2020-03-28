import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

// Start Menu Icon
const MenuTreatment = (props) => {
  return (
    <TouchableOpacity style={props.style}>
      <View style={{width:100, alignItems: "center"}}>
        <Text style={props.textBig}>{props.nameTreatment}</Text>
      </View>
    </TouchableOpacity>
  )
}
// End Menu Icon

export default MenuTreatment;