<template>
    <div class="tool-item">
        <div class="tool-item-header">
            <h5><a :href="link" target="_blank" rel="noopener noreferrer">{{ name }}</a></h5>
            <a v-if="githubLink" :href="githubLink" target="_blank" rel="noopener noreferrer">
                <img id="github-mark" src="../../assets/github-mark.svg" alt="GitHub Link">
            </a>
        </div>
        <p class="tool-item-description">{{ description }}</p>
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
.tool-item {
    margin-bottom: 2rem;
}

.tool-item-header {
    display: flex;
    gap: 0.3rem;
    align-items: center;
}

.tool-item-header h5 {
    margin: 0;
    margin-right: 0.5rem;
}

.tool-item-description {
    margin-top: 7px;
    margin-bottom: 7px;
}

#github-mark {
    width: 1.3rem;
    height: 1.3rem;
}
</style>
