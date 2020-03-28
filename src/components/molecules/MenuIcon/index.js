import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

// Start Menu Icon
const MenuIcon = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.studyGuide}>
      <View style={{width:40, height:40, alignItems: "center", justifyContent: "center"}}>
        <Image source={props.img} style={{width: 40, height: 40}} />
      </View>

      <Text style={props.menuTitle}>{props.title}</Text>
    </TouchableOpacity>
  )
}
// End Menu Icon

export default MenuIcon;