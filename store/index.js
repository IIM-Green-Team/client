const getDefaultState = () => {
  return {
    progression: 0,
  }
}

export const state = () => getDefaultState()

export const actions = {
  updateCurrentProgression({ commit }, { progression }) {
    if (typeof progression === 'number') {
      commit('updateCurrentProgression', { progression })
    }
  },
}

export const mutations = {
  updateCurrentProgression(state, { progression = 0 }) {
    state.progression = progression
  },
}

export const getters = {
  currentProgression: (state) => state.progression,
}
