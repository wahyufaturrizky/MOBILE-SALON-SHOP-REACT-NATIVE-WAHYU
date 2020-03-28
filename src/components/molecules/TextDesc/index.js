import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import TitleDesc from '../../../components/atoms/TitleDesc';

// Start Main Banner
const TextDesc = (props) => {
  return (
    <View style={{marginBottom: 14}}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>{props.TitleDesc}</Text>
      <Text style={{fontSize: 14,marginTop: 8, color: "#797979"}}>{props.SubTitleDesc}<Text style={{color: "#FF3464", fontStyle: "italic"}}> {props.links}</Text></Text>
    </View>
  )
}
// End Main Banner

export default TextDesc;