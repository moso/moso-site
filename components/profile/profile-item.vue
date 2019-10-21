<template>
    <li>
        <a :href="link" class="icon-button" :class="linkClass" target="_blank" rel="noopener" :title="title">
            <img v-if="svg" :src="svg" :alt="title">
        </a>
    </li>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: 'link'
        },

        linkClass: {
            type: String,
            default: 'linkClass'
        },

        svg: {
            type: String,
            default: 'svg'
        },

        title: {
            type: String,
            default: 'title'
        }
    }
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variables';
@import './assets/sass/mixins';

li {
    height: 40px;
    width: 40px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        margin-top: .25rem;
        padding: .5rem;
        text-decoration: none;
        text-align: center;
        border-radius: 50%;

        @include hover-state {
            text-decoration: none;
        }

        &.github,
        &.codepen {
            color: #000;
        }

        &.twitter {
            color: $twitter;
        }

        &.linkedin {
            color: $linkedin;
        }
    }
}
</style>
