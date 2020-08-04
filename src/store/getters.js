import { extractBreed } from '@/utils'

export default {
  likedPhotos (state) {
    return Object.keys(state.likes).filter(el => state.likes[el])
  },
  likedPhotosBreed (state, getters) {
    return getters['likedPhotos'].map(extractBreed)
  },
  sortedDogList (state) {
    return [...state.dogList].sort((a, b) => {
      if (a.breed > b.breed) {
        return 1
      }
      if (a.breed < b.breed) {
        return -1
      }
      return 0
    })
  },
  breedList (state) {
    return Object.keys(state.breeds)
  }
}
