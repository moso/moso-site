<template>
    <moso-profile />
</template>

<script>

export default {
    components: {
        'moso-profile': () => import('~/pages/profile.vue')
    },

    layout: 'default',

    data() {
        return {
            title: 'Profile'
        }
    },

    head() {
        return {
            title: this.title + ' - moso.io'
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.title)
    }
}
</script>
