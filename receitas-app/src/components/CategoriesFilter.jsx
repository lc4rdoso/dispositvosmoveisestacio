import { ScrollView, Text } from "react-native";
import { View } from "react-native";
import { categories } from "../models/Categories";
import { colors } from "../models/Colors";

export function CategoriesFilter() {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                backgroundColor:
									index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                                marginRight: 36,
                                marginVertical:16,
                                shadowRadius:7,
                                shadowOpacity:0.2,
                                paddingVertical:10,
                                paddingHorizontal: 16,
                                borderRadius:8,
                                shadowColor:'#000',
                                shadowOpacity: 0.1,
                                shadowOffset: { width: 0, height: 4 },
                                borderWidth:2,
                                borderColor: colors.COLOR_PRIMARY
                            }}
                        >
                            <Text style={{ color: index === 0 && colors.COLOR_LIGHT, fontSize: 18 }}>
                                {category.category}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}