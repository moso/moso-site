<template>
    <div></div>
</template>

<script>
import { profileApi } from '~/api.config'

export default {
    layout: 'default',

    components: {
        //
    },

    data() {
        return {
            title: 'Profile',
            titles: [],
            tools: []
        }
    },

    head() {
        return {
            title: this.title + ' - moso.io'
        }
    },

    async asyncData({ $axios }) {
        if(process.client) {
            window.performance.mark('getProfile:start')
        }

        const promises = []
        /* eslint-disable-next-line no-unused-vars */
        for (const [key, value] of Object.entries(profileApi)) {
            promises.push($axios.$get(`${value}`))
        }

        const [
            { data: titles },
            { data: tools }
        ] = await Promise.all(promises)
        return {
            titles,
            tools
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
