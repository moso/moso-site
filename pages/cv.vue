<template>
    <article>
        <h1>{{ pageTitle }}</h1>
        <h2>Experience</h2>
        <ul class="list">
            <li v-for="exp in reverseExp" :key="exp.id"> {{ exp.period }} <strong>{{ exp.title }}</strong> &#64;{{ exp.location }}</li>
        </ul>

        <h2>Education</h2>
        <ul class="list">
            <li v-for="edu in reverseEdu" :key="edu.id"> {{ edu.year }} <strong>{{ edu.title }}</strong></li>
        </ul>
    </article>
</template>

<script>
import axios from 'axios'

import { cvApi } from '~/api.config'

export default {
    layout: 'default',

    components: {
        //
    },

    data() {
        return {
            pageTitle: 'CV',
            experiences: [],
            educations: []
        }
    },

    head() {
        return {
            title: this.pageTitle + ' - moso.io'
        }
    },

    computed: {
        reverseExp() {
            return this.experiences.slice().reverse();
        },
        reverseEdu() {
            return this.educations.slice().reverse();
        }
    },

    async asyncData({ req, params }) {
        if(process.client) {
            window.performance.mark('getCv:start')
        }

        const promises = []
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(cvApi)) {
            promises.push(axios.get(`${value}`))
        }

        const [
            { data: experiences },
            { data: educations }
        ] = await Promise.all(promises)

        if(process.client) {
            window.performance.mark('getCv:end')
        }

        return {
            experiences,
            educations
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
    }
}

article > .list {
    &:first-of-type {
        margin: 0 0 2rem;
    }
}
</style>
