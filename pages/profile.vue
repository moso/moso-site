<template>
    <article>
        <div v-for="title in titles" :key="title.id">
            <profile image="/images/profile.jpg" name="Morten Sørensen" :position="title.title">
                <profile-item v-for="icon in icons" :key="icon.id" :link="icon.url" :link-class="icon.name.toLowerCase().trim()" :svg="icon.svg" :title="icon.name" />
            </profile>
        </div>

        <h1 class="hidden">{{ pageTitle }}</h1>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-for="bio in bios" :key="bio.id" v-html="bio.text"></div>
    </article>
</template>

<script>
import axios from 'axios'

import Profile from '~/components/profile/profile.vue'
import ProfileItem from '~/components/profile/profile-item.vue'

import { profileApi } from '~/api.config'

export default {
    layout: 'default',

    components: {
        'profile': Profile,
        'profile-item': ProfileItem
    },

    data() {
        return {
            pageTitle: 'Profile',
            titles: [],
            icons: [],
            bios: []
        }
    },

    head() {
        return {
            title: this.pageTitle + ' - moso.io'
        }
    },

    async asyncData({ $axios }) {
        if(process.client) {
            window.performance.mark('getProfile:start')
        }

        const promises = []
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(profileApi)) {
            promises.push(axios.get(`${value}`))
        }

        const [
            { data: titles },
            { data: icons },
            { data: bios }
        ] = await Promise.all(promises)

        if(process.client) {
            window.performance.mark('getProfile:end')
        }

        return {
            titles,
            icons,
            bios
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.pageTitle)
    }
}
</script>

<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;

    .hidden {
        display: none;
    }
}
</style>

<style lang="scss">
article
    > div:last-of-type {
        p {
            &:last-of-type {
                margin: 1rem 0 0;
            }
        }
    }
</style>
