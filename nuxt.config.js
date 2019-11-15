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
        '@nuxtjs/axios',
        ['@nuxtjs/dotenv', { systemvars: true }],
        '@nuxtjs/pwa'
    ],

    buildModules: [
        '@nuxtjs/netlify-files',
        '@nuxtjs/router'
    ],

    netlifyFiles: {
        existingFilesDirectory: './netlify'
    },

    generate: {
        fallback: 'index.html'
    },

    plugins: [
        //
    ],

    env,

    manifest,

    build
}
