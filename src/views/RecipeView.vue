<template>
    <main>
        recipe {{ $route.params.id }}
    </main>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const route = useRoute();
</script>