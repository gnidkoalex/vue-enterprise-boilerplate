import axios from 'axios'

const state = {
  //  Initial array of users for playGroundComponent
  playGroundData: [],
}

const getters = {
  //  Alowing playGroundComponent to resive playGroundData from the store
  playGroundDataGetter(state) {
    return state.playGroundData
  },
}

const mutations = {
  //  Sets the store data after geting it from the API
  setPlayGroundData: (state, playGroundData) =>
    (state.playGroundData = playGroundData),
}

const actions = {
  //  Fetch the users data from the API
  async getPlayGroundData({ commit }) {
    try {
      const res = await axios.get('https://reqres.in/api/users?page=2')
      commit('setPlayGroundData', res.data.data)
    } catch (err) {
      // log the err and decide if show/unshow it to the user
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
