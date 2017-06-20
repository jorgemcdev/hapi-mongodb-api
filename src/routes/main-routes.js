export default [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply({
        message: 'Hello from server'
      }).code(200)
    }
  }
]
