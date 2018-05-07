import {
    getAllThemes
  } from '../../api'

const state = {
    themes: []
};

const mutations = {
    SET_LIST: (state, { themes }) => {
        // console.log("committing themes",themes)
        state.themes = themes
    }
};

const actions = {
    FETCH_THEMES: ({ commit, dispatch, state }) => {
        return getAllThemes
            .then(ts => {
                // console.log("fetched themes",ts)
                commit('SET_LIST', { themes: ts })
            }
            )
            .catch(err => console.log("api call failed", err))
    }
};

export default {
    state,
    mutations,
    actions,
};
