<template>
    <div class="tool-item">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
        <a v-if="githubLink" :href="githubLink" target="_blank" rel="noopener noreferrer">
            View on GitHub
        </a>
    </div>
</template>

<script>
export default {
    name: "ToolItem",
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        githubLink: {
            type: String,
            default: null,
        },
    },
};
</script>

<!-- <style scoped>
.tool-item {
  /* Add your styles here */
}
</style> -->
