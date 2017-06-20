const login = {
  handler: (request, reply) => {
    reply({
      message: '/login'
    }).code(200)
  }
}

const logout = {
  handler: (request, reply) => {
    reply('/logout')
  }
}

const register = {
  handler: (request, reply) => {
    reply('/register')
  }
}

export { login, logout, register }
