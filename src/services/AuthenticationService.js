import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// Como usar
// AuthenticationService.register({
//   email: 'rafael@gmail.com',
//   password: '1234'
// })