import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      toggleMenu: false,
      bgcolor: 'landing'
    },
    mutations: {
      toggleMenu (state) {
        state.toggleMenu = !state.toggleMenu
      },
      changeBgColor (state, color) {
        state.bgcolor = color
      }
    }
  })
}

export default createStore
