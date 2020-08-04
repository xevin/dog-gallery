class ApiClient {
  _options = {
    headers: {'Content-Type': 'application/json'}
  }

  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  getOptions () {
    return {...this._options}
  }

  checkStatusCode (res) {
    if (res.status >= 200 && res.status <= 300) {
      return res
    }
    const error = new Error(res.statusText)
    error.response = res
    throw error
  }

  get (path) {
    // let options = this.getOptions()
    return fetch(`${this.baseUrl}${path}`)
      .then(this.checkStatusCode)
      .then(res => res.json())
  }

  post (path) {
    let options = this.getOptions()
    options.method = 'POST'
    return fetch(`${this.baseUrl}${path}`, options)
      .then(this.checkStatusCode)
      .then(res => res.json())
  }
}

export default ApiClient
