export const state = () => ({
    pageTitle: 'Default Title',
    titles: [],
    bios: [],
    experiences: [],
    educations: [],
    tools: [],
    projects: [],
    things: [],
    icons: []
})

export const mutations = {
    SET_PAGE_TITLE(state, title) {
        state.pageTitle = title
    },

    setTitles(state, titles) {
        state.titles = titles
    },

    setBios(state, bios) {
        state.bios = bios
    },

    setExperiences(state, experiences) {
        state.experiences = experiences
    },

    setEducations(state, educations) {
        state.educations = educations
    },

    setTools(state, tools) {
        state.tools = tools
    },

    setProjects(state, projects) {
        state.projects = projects
    },

    setThings(state, things) {
        state.things = things
    },

    setIcons(state, icons) {
        state.icons = icons
    }
}

export const actions = {
    async getTitles({ commit }) {
        const titles = await this.$axios.$get(`${process.env.titles}`)
        commit('setTitles', titles)
    },

    async getBios({ commit }) {
        const bios = await this.$axios.$get(`${process.env.bios}`)
        commit('setBios', bios)
    },

    async getExperiences({ commit }) {
        const experiences = await this.$axios.$get(`${process.env.experiences}`)
        commit('setExperiences', experiences)
    },

    async getEducations({ commit }) {
        const educations = await this.$axios.$get(`${process.env.educations}`)
        commit('setEducations', educations)
    },

    async getProjects({ commit }) {
        const projects = await this.$axios.$get(`${process.env.projects}`)
        commit('setProjects', projects)
    },

    async getThings({ commit }) {
        const things = await this.$axios.$get(`${process.env.things}`)
        commit('setThings', things)
    },

    async getIcons({ commit }) {
        const icons = await this.$axios.$get(`${process.env.icons}`)
        commit('setIcons', icons)
    }
}
