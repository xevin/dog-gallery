import Vue from 'vue'
import TYPES from './types'

export default {
  [TYPES.SET_DOG_LIST] (state, payload) {
    state.dogList = payload
  },
  [TYPES.ADD_DOG_LIST] (state, payload) {
    state.dogList = [...state.dogList, ...payload]
  },
  [TYPES.SET_BREEDS] (state, payload) {
    state.breeds = payload
  },
  [TYPES.SET_BREED_IMAGE_LIST] (state, payload) {
    state.breedImageList = payload
  },
  [TYPES.DELETE_BREED_IMAGE_LIST] (state) {
    state.breedImageList = []
  },
  [TYPES.SET_LIKE] (state, id) {
    Vue.set(state.likes, id, true)
  },
  [TYPES.SET_LIKES] (state, payload) {
    state.likes = payload
  },
  [TYPES.UNSET_LIKE] (state, id) {
    Vue.set(state.likes, id, false)
  }
}
