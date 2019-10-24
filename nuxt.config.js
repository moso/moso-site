import { build, dev, env, manifest, meta } from './config'

require('dotenv').config()

export default {
    mode: 'universal',
    modern: !dev.isDev && 'client',

    watch: ['~/config/*'],

    meta,

    css: [
        '~/assets/sass/app.scss'
    ],

    loading: {
        color: '#37474F',
        failedColor: '#F44336',
        height: '3px',
    },

    modules: [
        ['@nuxtjs/dotenv', { systemvars: true }],
        '@nuxtjs/netlify-files',
        '@nuxtjs/pwa',
        '@nuxtjs/router'
    ],

    axios: {
        proxy: true
    },

    proxy: {
        '/api/': { target: 'http://api.morten.is', pathRewrite: {'^/api/': ''} }
    },

    netlifyFiles: {
        existingFilesDirectory: './netlify'
    },

    generate: {
        fallback: '404.html'
    },

    plugins: [
        '~/plugins/vue-cookies'
    ],

    manifest,

    build,

    env
}
