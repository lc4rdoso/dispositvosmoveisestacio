import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Header({headerText}){

    const navigation = useNavigation()

    return (
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{flex:1,fontSize:22, fontWeight: '700'}}>
                {headerText}
            </Text>
            <FontAwesome name='home' size={24} color="#f96163" style={{marginRight: 18}} onPress={() => navigation.navigate('Welcome')} />
            <FontAwesome name='bell-o' size={24} color="#f96163" style={{marginRight: 18}} />
            <FontAwesome name='info' size={24} color="#f96163" style={{marginRight: 10}} />
        </View>
    )
}