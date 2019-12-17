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

        <div class="print break">
            <h2>Find me here</h2>
            <ul class="list">
                <li v-for="item in icons" :key="item.id">
                    <span>{{ item.name }}:</span>
                    <a :href="item.url" target="_blank" :title="item.name" :aria-label="item.name" rel="noopener">{{ item.url }}</a>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
import gql from 'graphql-tag'

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
            icons: [],
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

        this.fetchData()
    },

    methods: {
        async fetchData() {
            this.icons = await this.$apollo.query({
                query: gql` {
                    icons {
                        id
                        name
                        url
                        icon
                    }
                }`
            })
            .then(({ data }) => data && data.icons)
        }
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
