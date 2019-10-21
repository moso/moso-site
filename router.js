import Vue from 'vue'
import Router from 'vue-router'

import profile from '~/pages/profile.vue'
import cv from '~/pages/cv.vue'
import projects from '~/pages/projects.vue'
// import error from '~/pages/error.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        linkActiveClass: 'active',
        routes: [
            {
                path: '/',
                component: profile,
            },
            {
                path: '/profile',
                component: profile,
            },
            {
                path: '/cv',
                component: cv,
            },
            {
                path: '/projects',
                component: projects,
            },
            /*
            {
                path: '/404',
                component: error,
            },
            {
                path: '*',
                redirect: '404'
            }
            */
        ]
    })
}
