import { TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function SearchFilter({icon,placeholder}){
    return (
        <View style={{
            backgroundColor: "#fff",
            flexDirection:'row',
            paddingVertical:18,
            paddingHorizontal:18,
            borderRadius:8,
            shadowColor:'#000',
            marginVertical:18,
            shadowOffset: {width: 0, height: 4},
            shadowRadius:7,
            shadowOpacity: 0.1,
        }}>
            
            <FontAwesome name={icon} size={20} color="#f96163" />
            <TextInput style={{paddingLeft:8, fontSize: 16}}>
                {placeholder}
            </TextInput>

        </View>
    )
}