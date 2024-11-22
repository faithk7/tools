<template>
    <div class="tool-item">
        <h5>{{ name }}</h5>
        <p>{{ description }}</p>
        <a v-if="githubLink" :href="githubLink" target="_blank" rel="noopener noreferrer">
            <img id="github-mark" src="../../github-mark.svg">
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

<style scoped>
.tool-item {
    margin-bottom: 1rem;
}

#github-mark {
    width: 1.5rem;
    height: 1.5rem;
}
</style>
