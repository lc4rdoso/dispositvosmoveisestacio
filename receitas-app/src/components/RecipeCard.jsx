import { FlatList, Image, Pressable, Text, View } from "react-native";
import { recipeList } from "../models/RecipesList";
import { colors } from "../models/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function RecipeCard() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList data={recipeList} renderItem={({ item }) => (
                <Pressable
                onPress={() => navigation.navigate('RecipeDetail',{item : item})}
                key={item.id}
                    style={{
                        backgroundColor: colors.COLOR_LIGHT,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 7,
                        alignItems: 'center',
                        paddingVertical: 8,
                        marginVertical: 16,
                        borderRadius: 16,
                        shadowOffset: { width: 0, height: 4 },
                    }}
                >
                    <Image source={item.image} style={{ width: 150, height: 150, resizeMode: "center" }} />
                    <Text>{item.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Text>{item.time}</Text>
                        <Text> | </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{marginRight: 4}}>
                                {item.rating}
                            </Text>
                            <FontAwesome name="star" size={16} color={colors.COLOR_PRIMARY} />
                        </View>
                    </View>
                </Pressable>
            )}
            numColumns={2}
            columnWrapperStyle={{ //estil opcional para as colunas 
                justifyContent:'space-between',
            
            }}
            showsVerticalScrollIndicator={false} //tira o scroll vertical
            />
        </View>
    )
}