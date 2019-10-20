<template>
    <div id="app">
        <moso-header />
        <main>
            <nuxt />
        </main>
        <moso-footer />
    </div>
</template>

<script>
import mosoHeader from '~/components/header'
import mosoFooter from '~/components/footer'

export default {
    components: {
        'moso-header': mosoHeader,
        'moso-footer': mosoFooter
    }
}
</script>
