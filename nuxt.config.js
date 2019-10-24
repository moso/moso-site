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
        title: 'Morten Sørensen - moso.io',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { vmid: 'og:description', property: 'og:description', content: 'Personal website and online resume of Morten Sørensen' },
            { vmid: 'og:image', property: 'og:image', content: 'https://moso.io/images/og_image.png' },
            { vmid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://moso.io/images/og_image.png' },
            { vmid: 'og:image:width', property: 'og:image:width', content: '1200' },
            { vmid: 'og:image:height', property: 'og:image:height', content: '630' },
            { vmid: 'og:title', property: 'og:title', content: 'Morten Sørensen - moso.io' },
            { vmid: 'og:type', property: 'og:type', content: 'website' },
            { vmid: 'og:url', property: 'og:url', content: 'https://moso.io' },
            { vmid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
            { vmid: 'twitter:creator', property: 'twitter:creator', content: '@mosolicious' },
            { vmid: 'twitter:description', property: 'twitter:description', content: 'Personal website and online resume of Morten Sørensen' },
            { vmid: 'twitter:title', property: 'twitter:title', content: 'Morten Sørensen - moso.io' },
            { vmid: 'twitter:image', property: 'twitter:image', content: 'https://moso.io/images/twitter_image.png' },
            { vmid: 'twitter:image:alt', property: 'twitter:image:alt', content: 'Personal website and online resume of Morten Sørensen' },
            { vmid: 'twitter:site', property: 'twitter:site', content: '@mosolicious' },
            { name: 'description', content: 'Personal website and online resume of Morten Sørensen' },
            { name: 'author', content: 'Morten Sørensen' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'application-name', content: 'Morten Sørensen - moso.io' },
            { name: 'msapplication-TileColor', content: '#263238' },
            { name: 'theme-color', content: '#263238' }
        ],
        link: [
            //
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
        ['@nuxtjs/dotenv', { systemvars: true }],
        '@nuxtjs/netlify-files',
        '@nuxtjs/pwa',
        '@nuxtjs/router'
    ],

    /*
    ** Modules config
    */
    axios: {
        proxy: true
    },

    proxy: {
        '/api/': { target: 'http://api.morten.is', pathRewrite: {'^/api/': ''} }
    },

    netlifyFiles: {
        existingFilesDirectory: './netlify'
    },

    /*
    ** Routes
    */
    generate: {
        fallback: true
    },

    /*
    ** Plugins
    */
    plugins: [
        '~/plugins/vue-cookies'
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
        titles: process.env.titles,
        bios: process.env.bios,
        projects: process.env.projects,
        things: process.env.things,
        experiences: process.env.experiences,
        educations: process.env.educations,
        tools: process.env.tools,
        icons: process.env.icons
    }
}
