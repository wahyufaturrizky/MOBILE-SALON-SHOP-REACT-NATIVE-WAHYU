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

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Start Main Banner
const CardCommentUser = (props) => {
  return (

    <View style={props.styleCardMenu}>

        <View style={props.styleTag}>
            <View style={props.styleFav}>
                <Image source={props.imgFav} style={{width: 35, height: 35}} />
            </View>
        </View>

        <View style={props.styleDesc}>
            <View style={{justifyContent: "space-between",flexDirection: "row",width: "100%"}}>
                <Text style={{marginBottom: 4,fontSize: 14, fontWeight: "bold"}}>{props.nameUser}</Text>
                <Text style={{fontSize: 14, fontWeight: "normal"}}>{props.dateReview}</Text>
            </View>
            <Text style={{color: "#FF3464", fontSize: 14, fontWeight: "bold", marginBottom: 14}}>★★★<Text style={{color: "#616161"}}>★★</Text></Text>
            <Text style={{color: "#616161", fontSize: 14, marginBottom: 14}}>The place was clean, great service, stall are friendly. I will certainly recommend to my friends and visit again! ;)</Text>
            <Text style={{color: "#BFBFBF", fontSize: 12,}}>🇬 Review from Google</Text>
        </View>


    </View>
  )
}
// End Main Banner

export default CardCommentUser;
