import * as auth from '../controllers/auth-ctrl'

export default [
  {
    method: 'POST',
    path: '/login',
    config: auth.login
  },
  {
    method: 'POST',
    path: '/logout',
    config: auth.logout
  },
  {
    method: 'POST',
    path: '/register',
    config: auth.register
  }
]
