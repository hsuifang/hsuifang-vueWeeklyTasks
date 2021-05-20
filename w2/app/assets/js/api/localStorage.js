const ID_TOKEN_KEY = 'hexschoolAuthToken'

const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY)
}
const saveToken = (token) => {
  window.localStorage.setItem(ID_TOKEN_KEY, token)
}
const removeToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY)
}

export const JWT = { getToken, saveToken, removeToken }
