<template>
    <article>
        <h1>{{ pageTitle }}</h1>
        <h2>Experience</h2>
        <ul class="list">
            <li v-for="exp in resumePage.experiences" :key="exp.id"> {{ exp.period }} <strong>{{ exp.title }}</strong> &#64;{{ exp.location }}</li>
        </ul>

        <h2>Education</h2>
        <ul class="list">
            <li v-for="edu in resumePage.educations" :key="edu.id"> {{ edu.year }} <strong>{{ edu.title }}</strong></li>
        </ul>

        <h2>I love working with</h2>
        <ul class="list flexlist">
            <li v-for="tool in resumePage.tools" :key="tool.id">{{ tool.item }}</li>
        </ul>

        <div class="no-print">
            <h2>Contact</h2>
            <div class="code-highlight">
                <div>
                    <span class="blue">let</span>
                    $x
                    <span class="blue">=</span>
                    <span class="green">'morten'</span>
                </div>
                <div>
                    <span class="blue">let</span>
                    $y
                    <span class="blue">=</span>
                    <span class="green">'moso'</span>
                </div>
                <div>&nbsp;</div>
                <div>
                    <span class="teal">console</span><span class="blue">.</span><span class="light-blue">log(</span>$x + <span class="green">'@'</span> + $y + <span class="green">'.io'</span><span class="light-blue">)</span>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    layout: 'default',

    async fetch({ store, error }) {
        try {
            await store.dispatch('getResumePage')
        } catch(err) {
            error({
                statusCode: 500,
                message: err.message
            })
        }
    },

    data() {
        return {
            pageTitle: 'CV',
        }
    },

    computed: {
        resumePage() {
            return this.$store.state.resumePage
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

.list {
    padding: 0;
    list-style: none;
    margin: 0 0 2.5rem;

    li {
        margin: .625rem 0 0;
    }

    &.flexlist {
        li {
            margin: 0;
        }
    }
}

article > .list {
    &:last-of-type {
        margin: 0;
    }
}

.code-highlight {
    padding: .75rem;
    background-color: $code-light;
    font-family: monospace;
    font-size: 80%;

    .blue {
        color: $code-blue;
    }

    .light-blue {
        color: $code-light-blue;
    }

    .green {
        color: $code-green;
    }

    .teal {
        color: $code-teal;
    }
}
</style>
