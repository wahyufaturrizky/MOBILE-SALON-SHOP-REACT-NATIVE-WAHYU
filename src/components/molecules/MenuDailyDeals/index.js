import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

// Start Menu Icon
const MenuDailyDeals = (props) => {
  return (
    <TouchableOpacity style={props.style}>
      <View style={{width:70, alignItems: "center"}}>
        <Text style={props.textSmall}>{props.Day}</Text>
        <Text style={props.textBig}>{props.Date}</Text>
        <Text style={props.textSmall}>{props.Month}</Text>
      </View>
    </TouchableOpacity>
  )
}
// End Menu Icon

export default MenuDailyDeals;