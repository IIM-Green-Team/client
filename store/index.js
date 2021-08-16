const getDefaultState = () => {
  return {
    progression: 0,
    questions: {},
    modal: false,
    modalContent: {},
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
  closeModal({ commit }) {
    commit('handleModal', false)
  },
  openModal({ commit }) {
    commit('handleModal', true)
  },
  setModalContent({ commit }, payload) {
    commit('setModalContent', payload)
  },
}

export const mutations = {
  updateCurrentProgression(state, { progression = 0 }) {
    state.progression = progression
  },
  updateQuestionScore(state, { id = null, value = 0 }) {
    state.questions[id] = value
  },
  handleModal(state, payload) {
    state.modal = payload
  },
  setModalContent(state, payload) {
    state.modalContent = payload
  },
}

export const getters = {
  currentProgression: (state) => state.progression,
  currentQuestions: (state) => state.questions,
  modal: (state) => state.modal,
  modalContent: (state) => state.modalContent,
}
