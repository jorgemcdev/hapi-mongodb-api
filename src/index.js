import Hapi from 'hapi'
import Good from 'good'

import routes from './routes'

const server = new Hapi.Server()
server.connection({ port: 3001, host: 'localhost' })

server.route(routes)

server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ response: '*', log: '*' }]
      },
      { module: 'good-console' },
        'stdout'
      ]}
  }
}, (err) => {
  // something bad happened loading the plugin
  if (err) throw err
  server.start(err => {
    if (err) throw err
    server.log('info', 'Server running at: ' + server.info.uri)
  })
})

export default server
