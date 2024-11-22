<template>
    <div class="tool-item">
        <h5><a :href="link" target="_blank" rel="noopener noreferrer">{{ name }}</a></h5>
        <p class="tool-item-description">{{ description }}</p>
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
        link: {
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
.tool-item-description {
    margin-top: 7px;
    margin-bottom: 7px;
}

.tool-item {
    margin-bottom: 2rem;
}

#github-mark {
    width: 1.5rem;
    height: 1.5rem;
}
</style>
