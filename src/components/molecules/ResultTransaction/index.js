import React from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

// Start Main Banner
const ResultTransaction = (props) => {
  return (

    <View style={{width: '100%', flexDirection: 'row',alignItems: "center",justifyContent: "center",}}>

        <View style={props.styleTag}>
            <View style={props.styleFav}>
                <Image source={props.imgFav} style={{width: 35, height: 35}} />
            </View>
        </View>

        <View style={props.styleDesc}>
            <View style={{justifyContent: "space-between",flexDirection: "row",width: "100%"}}>
                <Text style={{marginBottom: 4,fontSize: 14, fontWeight: "normal", color: "#797979"}}><Text style={{color: "#FF3464", fontWeight: "bold"}}>{props.resultDiscounts}</Text> discount</Text>
            </View>
            <Text style={{color: "#797979", fontSize: 14, fontWeight: "normal", marginBottom: 14}}>at <Text style={{color: "#FF3464", fontWeight: "bold"}}>{props.resultTime}</Text></Text>
        </View>

        <View style={{height: 90, flex: 4, }}>
            <TouchableOpacity style={{borderColor: "#FF3464", borderWidth: 2, backgroundColor: "#FF3464", borderRadius: 4, paddingHorizontal: 8, paddingVertical: 8, width: "100%", alignSelf: 'flex-end', alignItems: "center"}}>
                <Text style={{fontSize: 18, color: 'white'}}>Next</Text>
            </TouchableOpacity>
        </View>


    </View>
  )
}

export default ResultTransaction;
