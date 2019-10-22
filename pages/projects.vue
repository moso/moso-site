<template>
    <article>
        <h1>{{ pageTitle }}</h1>

        <h2>Open-source</h2>
        <ul class="list">
            <li v-for="project in projects" :key="project.id">
                <a :href="project.url" target="_blank" rel="noopener" :title="project.title">{{ project.title }}</a>
                <p>{{ project.subtitle }}</p>
            </li>
        </ul>

        <h2>I've also made things for...</h2>
        <ul class="list">
            <li v-for="thing in reverseThings" :key="thing.id">
                <span>{{ thing.title }}</span>
                <p>{{ thing.subtitle }}</p>
            </li>
        </ul>
    </article>
</template>

<script>
import axios from 'axios'

import { projectsApi } from '~/api.config'

export default {
    layout: 'default',

    data() {
        return {
            pageTitle: 'Projects',
            projects: [],
            things: []
        }
    },

    head() {
        return {
            title: this.pageTitle + ' - moso.io'
        }
    },

    computed: {
        reverseThings() {
            return this.things.slice().reverse();
        }
    },

    async asyncData({ req, params }) {
        if(process.client) {
            window.performance.mark('getProjects:start')
        }

        const promises = []
        /* eslint-disable-next-line no-unused-vars */
        for (const [key, value] of Object.entries(projectsApi)) {
            promises.push(axios.get(`${value}`))
        }

        const [
            { data: projects },
            { data: things }
        ] = await Promise.all(promises)

        if(process.client) {
            window.performance.mark('getProjects:end')
        }

        return {
            projects,
            things
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.pageTitle)
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
