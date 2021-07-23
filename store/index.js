const getDefaultState = () => {
  return {
    progression: 0,
    questions: {},
  }
}

export const state = () => getDefaultState()

export const actions = {
  updateCurrentProgression({ commit }, { progression }) {
    if (typeof progression === 'number') {
      commit('updateCurrentProgression', { progression })
    }
  },
  updateQuestionScore({ commit }, { id, value }) {
    if (typeof value === 'number' && id !== null) {
      commit('updateQuestionScore', { id, value })
    }
  },
}

export const mutations = {
  updateCurrentProgression(state, { progression = 0 }) {
    state.progression = progression
  },
  updateQuestionScore(state, { id = null, value = 0 }) {
    state.questions[id] = value
  },
}

export const getters = {
  currentProgression: (state) => state.progression,
  currentQuestions: (state) => state.questions,
}
