<template>
    <moso-profile />
</template>

<script>
import MosoProfile from '~/pages/profile.vue'

export default {
    layout: 'default',

    components: {
        'moso-profile': MosoProfile
    },

    data() {
        return {
            title: 'Profile'
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.title)
    },

    head() {
        return {
            title: this.title + ' - moso.io'
        }
    }
}
</script>
