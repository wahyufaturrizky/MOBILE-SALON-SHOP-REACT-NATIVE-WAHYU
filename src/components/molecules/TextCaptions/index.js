import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Button,
    TouchableOpacity,
} from 'react-native';

// Start Main Banner
const TextCaptions = (props) => {
  return (
    <View style={{marginBottom: 14,}}>
			<Text style={{fontSize: 14,marginTop: 8,}}>{props.textIcon}<Text style={props.linking}> {props.textCapt}</Text></Text>
		</View>
  )
}
// End Main Banner

export default TextCaptions;