import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
}

type RecipeState = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([])

  const addRecipe = (recipe: RecipeState) => {
    {
        const newRecipe: Recipe = { id: Date.now().toString(), ...recipe };
        recipes.value.push(newRecipe);
        return newRecipe;
    };
  }

  const getRecipeById = (id: string) => {
    return recipes.value.find(recipe => recipe.id === id);
  }

  const filteredRecipes = (searchQuery: string) =>
    recipes.value.filter((recipe) =>
      recipe.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

  return { recipes, addRecipe, getRecipeById, filteredRecipes };
});