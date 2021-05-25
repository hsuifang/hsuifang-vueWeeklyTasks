const ID_TOKEN_KEY = 'hexschoolAuthToken'

const getToken = () => {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)hexschoolAuthToken\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
}

const saveToken = (token, expired) => {
  document.cookie = `${ID_TOKEN_KEY}=${token}; expires=${new Date(expired)}`
}

const removeToken = () => {
  document.cookie = `${ID_TOKEN_KEY}=;  expires=Thu, 01 Jan 1970 00:00:00 UTC;`
}

export const JWT = { getToken, saveToken, removeToken }
