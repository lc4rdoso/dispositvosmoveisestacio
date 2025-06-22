import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { getRecipes } from "../storage/RecipeStorage";

export default function RecipeListScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tudo");

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
      setFiltered(data);
    };

    const unsubscribe = navigation.addListener("focus", loadRecipes);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    let filteredList = recipes;

    if (selectedCategory !== "Tudo") {
      filteredList = filteredList.filter((r) =>
        r.category?.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
      );
    }

    if (search.trim() !== "") {
      filteredList = filteredList.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(filteredList);
  }, [search, recipes, selectedCategory]);

  const categories = ["Tudo", "Sobremesa", "Bebida", "Massa", "Almoço", "Jantar", "Café da manhã", "Asiática", "Italiana", "Vegetariana","Frutos do mar"];
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Nosso Canto</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddRecipe")}
        >
          <Ionicons name="add-circle-outline" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Nova Receita</Text>
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#f96163" />
          <TextInput
            placeholder="Busque sua receita"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryButton,
                selectedCategory === cat && { backgroundColor: "#f96163" },
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && { color: "#fff", fontWeight: "bold" },
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Receitas Famosas</Text>
        {filtered.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            onPress={() => navigation.navigate("RecipeDetail", { item: recipe })}
            style={[styles.recipeCard, { backgroundColor: recipe.color || "#f96163" }]}
          >
            <View style={styles.cardRow}>
              <Image
                source={
                  recipe.image
                    ? { uri: recipe.image }
                    : require("../../assets/images/default.png")
                }
                style={styles.recipeThumbnail}
              />
              <Text style={styles.recipeTitle}>{recipe.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#f96163",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: "#333",
  },
  recipeCard: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  recipeTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    marginLeft: 12,
  },
  recipeThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
