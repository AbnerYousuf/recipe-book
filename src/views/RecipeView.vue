<template>
    <main>
        recipe {{ $route.params.id }}
    </main>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { watch } from 'vue';

    const route = useRoute();

    watch(() => route.params.id, () => {
        console.log('Route ID changed');
    }, { immediate: true }
    );
</script>