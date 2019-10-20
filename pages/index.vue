<template>
    <profile />
</template>

<script>
import Profile from '~/pages/profile.vue'

export default {
    layout: 'default',

    components: {
        'profile': Profile
    },

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

<style>

</style>
