import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { addRecipe } from "../storage/RecipeStorage";
import { categories } from "../models/Categories";
import { FontAwesome } from "@expo/vector-icons";

export default function AddRecipeScreen() {
  const navigation = useNavigation();

  const [imageUri, setImageUri] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [time, setTime] = useState("");
  const [calories, setCalories] = useState("");
  const [difficulty, setDifficulty] = useState("Fácil");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [newStep, setNewStep] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão necessária", "Precisamos da sua permissão para acessar a galeria.");
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.7,
        aspect: [4, 3],
      });

      if (!result.canceled && result.assets.length > 0) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir a galeria.");
    }
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  const handleAddStep = () => {
    if (newStep.trim()) {
      setSteps([...steps, newStep.trim()]);
      setNewStep("");
    }
  };

  const handleAdd = async () => {
    if (!name || !description || rating === 0) {
      Alert.alert("Campos obrigatórios", "Preencha nome, descrição e nota.");
      return;
    }

    const newRecipe = {
      id: Date.now().toString(),
      name,
      description,
      category,
      image: imageUri || null,
      rating,
      ingredients,
      time: `${time} min`,
      difficulty,
      calories: `${calories} cal`,
      steps,
    };

    await addRecipe(newRecipe);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Imagem da Receita</Text>
      <Pressable onPress={pickImage}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text>Selecionar Imagem</Text>
          </View>
        )}
      </Pressable>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Ex: Cachorro-Quente" />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        multiline
        placeholder="Fale sobre a receita"
      />

      <Text style={styles.label}>Categoria</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {categories.map((cat) => (
          <Pressable
            key={cat.id}
            onPress={() => setCategory(cat.category)}
            style={[styles.categoryOption, category === cat.category && styles.categorySelected]}
          >
            <Text style={{ color: category === cat.category ? '#fff' : '#333' }}>{cat.category}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.label}>Nota</Text>
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Pressable key={star} onPress={() => setRating(star)}>
            <FontAwesome
              name={rating >= star ? "star" : "star-o"}
              size={28}
              color="#f1c40f"
              style={{ marginRight: 6 }}
            />
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Tempo de Preparo (min)</Text>
      <View style={styles.row}>
        <FontAwesome name="clock-o" size={20} color="#555" style={{ marginRight: 6 }} />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={time}
          onChangeText={setTime}
          keyboardType="numeric"
          placeholder="Ex: 15"
        />
      </View>

      <Text style={styles.label}>Calorias</Text>
      <TextInput
        style={styles.input}
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
        placeholder="Ex: 300"
      />

      <Text style={styles.label}>Dificuldade</Text>
      <View style={styles.difficultyContainer}>
        {["Fácil", "Médio", "Difícil"].map((level) => (
          <Pressable
            key={level}
            style={[styles.difficultyOption, difficulty === level && styles.difficultySelected]}
            onPress={() => setDifficulty(level)}
          >
            <Text style={styles.difficultyText}>{level}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Ingredientes</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={newIngredient}
          onChangeText={setNewIngredient}
          placeholder="Ex: 1 pão"
        />
        <Pressable style={styles.addButton} onPress={handleAddIngredient}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
      {ingredients.map((item, index) => (
        <Text key={index} style={styles.listItem}>• {item}</Text>
      ))}

      <Text style={styles.label}>Passos</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={newStep}
          onChangeText={setNewStep}
          placeholder="Ex: Cozinhar a salsicha"
        />
        <Pressable style={styles.addButton} onPress={handleAddStep}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
      {steps.map((item, index) => (
        <Text key={index} style={styles.listItem}>Passo {index + 1}: {item}</Text>
      ))}

      <Pressable style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Salvar Receita</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  imagePlaceholder: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  difficultyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  difficultyOption: {
    flex: 1,
    padding: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    alignItems: "center",
  },
  difficultySelected: {
    backgroundColor: "#f96163",
    borderColor: "#f96163",
  },
  difficultyText: {
    color: "#fff",
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: "#f96163",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  listItem: {
    marginLeft: 8,
    fontSize: 15,
    marginBottom: 4,
    color: "#444",
  },
  button: {
    backgroundColor: "#f96163",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  categoryOption: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categorySelected: {
    backgroundColor: "#f96163",
  },
});
