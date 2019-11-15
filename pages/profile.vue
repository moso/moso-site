<template>
    <article>
        <div v-for="(title, index) in titles" :key="+index.id" class="profile-picture">
            <img src="/images/profile.jpg" alt="Morten Sørensen" />
            <div class="name">Morten S&oslash;rensen</div>
            <div class="position">{{ title.title }}</div>
        </div>

        <h1 class="hidden">{{ pageTitle }}</h1>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-for="(bio, index) in bios" :key="+index.id" v-html="bio.text"></div>
    </article>
</template>

<script>
export default {
    layout: 'default',

    async fetch({ store, error }) {
        try {
            await store.dispatch('getTitles')
            await store.dispatch('getBios')
        } catch(err) {
            error({
                statusCode: 500,
                message: err.message
            })
        }
    },

    data() {
        return {
            pageTitle: 'Profile',
        }
    },

    computed: {
        titles() {
            return this.$store.state.titles
        },

        bios() {
            return this.$store.state.bios
        }
    },

    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.pageTitle)
    },

    head() {
        return {
            title: this.pageTitle + ' - moso.io'
        }
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
        height: 125px;
        border-radius: 50%;
        border: 2px solid $gray;
    }

    .name {
        margin: .625rem 0 0;
        font-size: 1.125rem;
    }

    .position {
        font-size: .8125rem;
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
