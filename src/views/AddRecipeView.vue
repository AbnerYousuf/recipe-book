<template>
    <h1>Add New Recipe</h1>
    <form @submit.prevent="addRecipe()">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
        </div>
        <div>
            <label for="ingredients">Ingredients:</label>
            <textarea id="ingredients" name="ingredients"></textarea>
        </div>
        <div>
            <label for="instructions">Instructions:</label>
            <textarea id="instructions" name="instructions"></textarea>
        </div>
        <button type="submit">Add This Recipe</button>
    </form>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const addRecipe = () => {
        router.push({ name: 'recipe', params: { id: 999 } });
    }
</script>