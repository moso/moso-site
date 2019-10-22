<template>
    <article>
        <h1>{{ pageTitle }}</h1>
        <h2>✋🏻 Oops!</h2>
        <p>It looks like you're lost, mate.</p>
        <p>You can take the <a href="" @click="this.$router.back()">fast way back</a>, or go all the way back to <nuxt-link to="/">the front page</nuxt-link>.</p>
    </article>
</template>

<script>
export default {
    layout: 'default',

    data() {
        return {
            pageTitle: '404 - page not found'
        }
    },

    head() {
        return {
            title: this.pageTitle + ' - moso.io'
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.pageTitle)
    }
}
</script>
