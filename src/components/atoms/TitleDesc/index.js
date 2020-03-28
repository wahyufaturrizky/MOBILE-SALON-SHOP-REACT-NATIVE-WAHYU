import React from 'react';
import {
  Text,} from 'react-native';

// Start Main Banner
const TitleDesc = (props) => {
  return (
    <Text style={{fontSize: 20, fontWeight: "bold"}}>{props.TitleDesc}</Text>
  )
}
// End Main Banner

export default TitleDesc;
