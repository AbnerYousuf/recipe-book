<template>
  <div>
    <h1>{{ recipe?.name }}</h1>
    <p>Ingredients: {{ recipe?.ingredients.join(', ') }}</p>
    <p>Instructions: {{ recipe?.instructions }}</p>
    <div>
      <router-link :to="{ name: 'edit-recipe', params: { id: recipeId } }">Edit</router-link>
      <router-link :to="{ name: 'home' }">Back to Home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRecipeStore } from '@/stores/recipe'

const route = useRoute()
const recipeStore = useRecipeStore()

const recipeId = computed(() => route.params.id as string)
const recipe = computed(() => recipeStore.getRecipeById(recipeId.value))
</script>
