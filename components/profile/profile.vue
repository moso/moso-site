<template>
    <div class="profile">
        <div class="profile-image">
            <img :src="image" :alt="name">
        </div>
        <div class="name">{{ name }}</div>
        <div class="position">{{ position }}</div>
        <div class="icon-group">
            <ul>
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: 'image'
        },

        name: {
            type: String,
            default: 'name',
        },

        position: {
            type: String,
            default: 'position'
        }
    }

}
</script>

<style lang="scss" scoped>
@import './assets/sass/variables';

.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.75rem 1.75rem 0;
    text-align: center;

    .profile-image {
        width: 125px;

        img {
            width: 100%;
            height: auto;
            border-radius: 50%;
            border: 2px solid $gray;
        }
    }

    .name {
        margin: .625rem 0 0;
        font-size: 1.125rem;
        // font-weight: 700;
    }

    .position {
        font-size: .8125rem;
        color: rgba(#444,.54);
    }

    .icon-group {
        margin: .215rem 0 0;
        width: 100%;
        font-size: 1.5rem;

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 200px;
            margin: 0 auto;
            padding: 0;
            list-style: none;
        }
    }
}
</style>
