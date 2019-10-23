<template>
    <article>
        <div v-for="title in titles" :key="title.id" class="profile-picture">
            <img src="/images/profile.jpg" alt="Morten Sørensen" />
            <div class="name">Morten S&oslash;rensen</div>
            <div class="position">{{ title.title }}</div>
        </div>

        <h1 class="hidden">{{ pageTitle }}</h1>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-for="bio in bios" :key="bio.id" v-html="bio.text"></div>
    </article>
</template>

<script>
import axios from 'axios'

import { profileApi } from '~/api.config'

export default {
    layout: 'default',

    data() {
        return {
            pageTitle: 'Profile',
            titles: [],
            bios: []
        }
    },

    head() {
        return {
            title: this.pageTitle + ' - moso.io'
        }
    },

    async asyncData({ req, params }) {
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
            { data: bios }
        ] = await Promise.all(promises)

        if(process.client) {
            window.performance.mark('getProfile:end')
        }

        return {
            titles,
            bios
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.pageTitle)
    }
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variables';

.profile-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;

    img {
        width: 125px;
        height: auto;
        border-radius: 50%;
        border: 2px solid $gray;
    }

    .name {
        margin: .625rem 0 0;
        font-size: 1.125rem;
    }

    .position {
        font-size: .8125rem;
        color: rgba(#444,.54);
    }
}

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
