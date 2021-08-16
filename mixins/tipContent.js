const tipContent = (name = 'index') => ({
  async asyncData({ $content, store }) {
    try {
      const page = await $content(name).fetch()
      store.commit('setModalContent', page)
    } catch (e) {
      const page = await $content('index').fetch()
      store.commit('setModalContent', page)
    }
  },
})

export default tipContent
