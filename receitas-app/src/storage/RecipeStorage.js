import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@recipes_list';

export async function getRecipes() {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Erro ao buscar as receitas:', e);
    return [];
  }
}

export async function saveRecipes(recipes) {
  try {
    const jsonValue = JSON.stringify(recipes);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Erro ao salvar as receitas:', e);
  }
}

export async function addRecipe(newRecipe) {
  const recipes = await getRecipes();
  const updatedRecipes = [...recipes, newRecipe];
  await saveRecipes(updatedRecipes);
}

export async function deleteRecipe(recipeId) {
  const recipes = await getRecipes();
  const updatedRecipes = recipes.filter(r => r.id !== recipeId);
  await saveRecipes(updatedRecipes);
}

export async function updateRecipe(updatedRecipe) {
  const recipes = await getRecipes();
  const updatedRecipes = recipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r));
  await saveRecipes(updatedRecipes);
}
