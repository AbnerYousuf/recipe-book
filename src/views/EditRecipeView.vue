<template>
    <h1>Add New Recipe</h1>
    <form @submit.prevent="addRecipe()">
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="name" id="name" name="name" required placeholder="Recipe name">
        </div>
        <div>
            <label for="ingredients">Ingredients:</label>
            <textarea v-model="ingredients" id="ingredients" name="ingredients" required placeholder="List ingredients, separated by commas"></textarea>
        </div>
        <div>
            <label for="instructions">Instructions:</label>
            <textarea v-model="instructions" id="instructions" name="instructions" required placeholder="Describe the instructions"></textarea>
        </div>
        <button type="submit">Add This Recipe</button>
    </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useRecipeStore } from '@/stores/recipe';


    const name = ref('');
    const ingredients = ref('');
    const instructions = ref('');
    const router = useRouter();
    const recipeStore = useRecipeStore();

    const addRecipe = () => {
        const addedRecipe = recipeStore.addRecipe({
            name: name.value,
            ingredients: ingredients.value.split(',').map(ingredient => ingredient.trim()),
            instructions: instructions.value
        });
        router.push({ name: 'recipe', params: { id: addedRecipe.id } });
    }
</script>