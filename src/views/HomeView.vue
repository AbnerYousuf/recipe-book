<template>
  <main>
    <h1>Welcome to the Recipe Book!</h1>
    <div>
      <input type="text" placeholder="Search recipes..." v-model="searchQuery" />
    </div>
    <nav v-if="filteredRecipes.length > 0">
      <ul>
        <li v-for="recipe in filteredRecipes" :key="recipe.id">
          <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">{{
            recipe.name
          }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else>
      <p>No recipes found.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useRecipeStore } from '@/stores/recipe'

const recipeStore = useRecipeStore()
const searchQuery = ref('')
const filteredRecipes = computed(() => recipeStore.filteredRecipes(searchQuery.value))
</script>
