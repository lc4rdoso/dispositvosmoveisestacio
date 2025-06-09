import { SafeAreaView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { SearchFilter } from "../components/SearchFilter";
import { RecipeCard } from "../components/RecipeCard";
import { CategoriesFilter } from "../components/CategoriesFilter";


export default function RecipeListScreen() {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 29, marginVertical: 31  }}>

            <Header headerText={'Nosso Canto'}   />

            <SearchFilter icon="search" placeholder={'Busque sua receita'} />


            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Categorias</Text>
                <CategoriesFilter />
            </View>

            <View style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Receitas Famosas</Text>
                <RecipeCard />
            </View>


        </SafeAreaView>
    )
}