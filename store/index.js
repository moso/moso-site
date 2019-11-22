import gql from 'graphql-tag'

export const state = () => ({
    pageTitle: 'Default Title'
})

export const mutations = {
    SET_PAGE_TITLE(state, title) {
        state.pageTitle = title
    },

    setProfilePage(state, profilePage) {
        state.profilePage = profilePage
    },

    setResumePage(state, resumePage) {
        state.resumePage = resumePage
    },

    setProjectsPage(state, projectsPage) {
        state.projectsPage = projectsPage
    }
}

export const actions = {
    async getProfilePage({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const pageData = await client.query({
            query: gql` {
                titles {
                    id,
                    title
                },

                bios {
                    id,
                    text
                }
            }`
        })
        commit('setProfilePage', pageData.data)
    },

    async getResumePage({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const pageData = await client.query({
            query: gql` {
                educations(sort: "id:desc") {
                    id
                    year
                    title
                },

                experiences(sort: "id:desc") {
                    id
                    period
                    title
                    location
                },

                tools {
                    id
                    item
                }
            }`
        })
        commit('setResumePage', pageData.data)
    },

    async getProjectsPage({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const pageData = await client.query({
            query: gql` {
                projects {
                    id
                    title
                    url
                    subtitle
                },

                things(sort: "id:desc") {
                    id
                    title
                    subtitle
                }
            }`
        })
        commit('setProjectsPage', pageData.data)
    }
}
