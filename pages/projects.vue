<template>
    <article>
        <h1>{{ pageTitle }}</h1>

        <h2>Open-source</h2>
        <ul class="list">
            <li v-for="project in projectsPage.projects" :key="project.id">
                <a :href="project.url" target="_blank" rel="noopener" :title="project.title">{{ project.title }}</a>
                <p>{{ project.subtitle }}</p>
            </li>
        </ul>

        <h2>I've also made things for...</h2>
        <ul class="list">
            <li v-for="thing in projectsPage.things" :key="thing.id">
                <span>{{ thing.title }}</span>
                <p>{{ thing.subtitle }}</p>
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    layout: 'default',

    async fetch({ store, error }) {
        try {
            await store.dispatch('getProjectsPage')
        } catch(err) {
            error({
                statusCode: 500,
                message: err.message
            })
        }
    },

    data() {
        return {
            pageTitle: 'Projects',
        }
    },

    computed: {
        projectsPage() {
            return this.$store.state.projectsPage
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.pageTitle)
    },

    head() {
        return {
            title: this.pageTitle + ' - moso.io'
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    padding: 0;
    list-style: none;

    li {
        margin: .625rem 0 0;

        a, span {
            font-weight: 700;
        }

        p {
            margin: 0;
            font-size: .9125rem;
        }
    }
}

article {
    > .list {
        &:first-of-type {
            margin: 0 0 3rem;
        }
    }
}
</style>
