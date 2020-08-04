export function extractBreed (path) {
  let pathArr = path.split('/')
  return {
    image: path,
    breed: pathArr[pathArr.length - 2]
  }
}
