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
const NameShop = (props) => {
  return (

    <View style={{width: '100%',flexDirection: 'row',marginBottom: 14,alignItems: "center",justifyContent: "center",}}>

        <View style={props.styleDesc}>
            <View style={{justifyContent: "space-between",flexDirection: "row",width: "100%"}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>{props.nameShop}</Text>
                    <View style={props.styleFav}>
                        <Image source={props.imgFav} style={{width: 35, height: 35}} />
                    </View>
            </View>
            <Text style={{color: "#FF3464", fontSize: 18, fontWeight: "bold"}}>★★★★★<Text style={{color: "#FF3464",fontWeight: "normal", fontSize: 10,}}> 58 reviews</Text></Text>
        </View>


    </View>
  )
}
// End Main Banner

export default NameShop;
