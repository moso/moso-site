<template>
    <div></div>
</template>

<script>
import { cvApi } from '~/api.config'

export default {
    layout: 'default',

    components: {
        //
    },

    data() {
        return {
            title: 'CV',
            experiences: [],
            educations: []
        }
    },

    head() {
        return {
            title: this.title + ' - moso.io'
        }
    },

    async asyncData({ $axios }) {
        if(process.client) {
            window.performance.mark('getCv:start')
        }

        const promises = []
        /* eslint-disable-next-line no-unused-vars */
        for (const [key, value] of Object.entries(cvApi)) {
            promises.push($axios.$get(`${value}`))
        }

        const [
            { data: experiences },
            { data: educations }
        ] = await Promise.all(promises)
        return {
            experiences,
            educations
        }
        /* eslint-disable-next-line no-unreachable */
        if(process.client) {
            window.performance.mark('getCv:end')
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.title)
    }
}
</script>
