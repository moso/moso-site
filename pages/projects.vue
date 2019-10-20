<template>
    <div></div>
</template>

<script>
import { projectsApi } from '~/api.config'

export default {
    layout: 'default',

    components: {
        //
    },

    data() {
        return {
            title: 'Projects',
            projects: [],
            smallprojects: []
        }
    },

    head() {
        return {
            title: this.title + ' - moso.io'
        }
    },

    async asyncData({ $axios }) {
        if(process.client) {
            window.performance.mark('getProjects:start')
        }

        const promises = []
        /* eslint-disable-next-line no-unused-vars */
        for (const [key, value] of Object.entries(projectsApi)) {
            promises.push($axios.$get(`${value}`))
        }

        const [
            { data: projects },
            { data: smallprojects }
        ] = await Promise.all(promises)
        return {
            projects,
            smallprojects
        }
        /* eslint-disable-next-line no-unreachable */
        if(process.client) {
            window.performance.mark('getProfile:end')
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.title)
    }
}
</script>
