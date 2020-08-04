import TYPES from './types'

const LIKES = 'likes'

function updateLikeStore (value) {
  let storage = {...getAllLikes(), ...value}
  localStorage.setItem('likes', JSON.stringify(storage))
}

function getAllLikes () {
  let storage = localStorage.getItem(LIKES) || '{}'
  return JSON.parse(storage)
}

const likesInLocalStoragePlugin = store => {
  store.commit(TYPES.SET_LIKES, getAllLikes())

  store.subscribe((mutation, state) => {
    if ([TYPES.SET_LIKE, TYPES.UNSET_LIKE].includes(mutation.type)) {
      updateLikeStore(state.likes)
    }
  })
}

export default [
  likesInLocalStoragePlugin
]
