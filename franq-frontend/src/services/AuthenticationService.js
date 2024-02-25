import Api from './Api'

export default {
  /**
   * Uses /register route to register new user.
   * @param {Object} credentials - User data.
   * @param {String} credentials.name - User name.
   * @param {String} credentials.email - User email.
   * @param {String} credentials.password - User password.
   */
  register (credentials) {
    return Api().post('register', credentials)
  },
  /**
   * Uses /login route to login new user.
   * @param {Object} credentials - User data.
   * @param {String} credentials.email - User email.
   * @param {String} credentials.password - User password.
   */
  login (credentials) {
    return Api().post('login', credentials)
  }
}