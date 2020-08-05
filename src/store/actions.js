import TYPES from './types'
import ApiClient from '../apiClient'
import { extractBreed } from '@/utils'

const DogApi = new ApiClient('https://dog.ceo/api')

export default {
  pullRandomDogList ({commit}) {
    return DogApi.get('/breeds/image/random/20')
      .then(data => {
        commit(TYPES.SET_DOG_LIST, data.message.map(extractBreed))
        return data.message
      })
  },
  appendRandomDogList ({commit}) {
    return DogApi.get('/breeds/image/random/20')
      .then(data => {
        commit(TYPES.ADD_DOG_LIST, data.message.map(extractBreed))
        return data.message
      })
  },
  pullBreeds ({commit}) {
    return DogApi.get('/breeds/list/all')
      .then(data => {
        commit(TYPES.SET_BREEDS, data.message)
        return data.message
      })
  },
  pullBreedPhotos ({commit}, breedName) {
    commit(TYPES.DELETE_BREED_IMAGE_LIST)

    return DogApi.get(`/breed/${breedName}/images`)
      .then(data => {
        commit(TYPES.SET_BREED_IMAGE_LIST, data.message.map(extractBreed))
        return data.message
      })
  },
  setLike ({commit}, id) {
    commit(TYPES.SET_LIKE, id)
  },
  unsetLike ({commit}, id) {
    commit(TYPES.UNSET_LIKE, id)
  },
  toggleLike (context, id) {
    if (context.state.likes[id]) {
      context.commit(TYPES.UNSET_LIKE, id)
    } else {
      context.commit(TYPES.SET_LIKE, id)
    }
  }
}
