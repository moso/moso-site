/*
** dot env
*/
require('dotenv').config()

export default {
    /*
    ** SSR + modern mode
    */
    mode: 'universal',

    modern: 'client',

    /*
    ** Headers of the page
    */
    head: {
        title: 'Morten Sørensen | moso.io',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { vmid: 'og:description', property: 'og:description', content: 'Personal website and online resume of Morten Sørensen' },
            { vmid: 'og:image', property: 'og:image', content: 'https://moso.io/images/og_image.png' },
            { vmid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://moso.io/images/og_image.png' },
            { vmid: 'og:image:width', property: 'og:image:width', content: '700' },
            { vmid: 'og:image:height', property: 'og:image:height', content: '500' },
            { vmid: 'og:title', property: 'og:title', content: 'Morten Sørensen | moso.io' },
            { vmid: 'og:type', property: 'og:type', content: 'website' },
            { vmid: 'og:url', property: 'og:url', content: 'https://moso.io' },
            { name: 'description', content: 'Personal website and online resume of Morten Sørensen' },
            { name: 'author', content: 'Morten Sørensen' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'application-name', content: 'Morten Sørensen | moso.io' },
            { name: 'msapplication-TileColor', content: '#263238' },
            { name: 'msapplication-TileImage', content: '/images/favicon/ms-icon-144x144.png' },
            { name: 'theme-color', content: '#263238' }
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/favicon/apple-icon-57x57.png' },
            { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/favicon/apple-icon-60x60.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/favicon/apple-icon-72x72.png' },
            { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/favicon/apple-icon-76x76.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/favicon/apple-icon-114x114.png' },
            { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/favicon/apple-icon-120x120.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/favicon/apple-icon-144x144.png' },
            { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/favicon/apple-icon-152x152.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-icon-180x180.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicon/favicon-96x96.png' },
            { rel: 'icon', type: 'image/png', sizes: '192x192',  href: '/images/favicon/android-icon-192x192.png' },
            { rel: 'manifest', href: '/manifest.json' }
        ]
    },

    /*
    ** CSS
    */
    css: [
        '~/assets/sass/app.scss'
    ],

    /*
    ** Customize the progress bar color
    */
    loading: {
        color: '#37474F',
        failedColor: '#F44336',
        height: '3px',
    },

    /*
    ** Modules
    */
    modules: [
        '@nuxtjs/axios',
        ['@nuxtjs/dotenv', { systemvars: true }],
        'nuxt-webfontloader'
    ],

    /*
    ** axios config
    */
    axios: {
        proxy: true
    },

    proxy: {
        '/api/': { target: 'http://api.morten.is', pathRewrite: {'^/api/': ''} }
    },

    /*
    ** Routes
    */
    generate: {
        fallback: 'index.html'
    },

    /*
    ** Webfontloader
    */
    webfontloader: {
        google: {
            families: ['Source+Sans+Pro:300,400,600&display=swap']
        }
    },

    /*
    ** Plugins
    */
    plugins: [
        //
    ],

    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },

    /*
    ** Netlify environment variables
    */
    env: {
        projects: process.env.projects,
    }
}
