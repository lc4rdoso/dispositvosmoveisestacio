import { View, Image, Text, TouchableOpacity } from "react-native";

export default function WelcomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={require('../../assets/images/welcome1.png')} style={{ marginTop: 30 }} />
            <Text style={{ color: '#f96163', marginBottom: 10 }}>
                Nosso Canto Receitas
            </Text>
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#3c444c',
                marginBottom: 40
            }}>
                
                Salve suas receitas favoritas 
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('RecipeList')}
                style={{
                    backgroundColor: '#e74c3c',
                    borderRadius: 18,
                    width: '80%',
                    alignItems: 'center',
                    paddingVertical: 18
                }}>
                <Text
                    style={{ fontSize: 18, fontWeight: '700', color: "#fff", }}
                >Acessar
                </Text>
            </TouchableOpacity>
        </View>
    )
}