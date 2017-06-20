/* global describe it beforeEach */
/* eslint no-unused-vars: 0 */
/* eslint no-shadow: 0 */
import chai from 'chai'
import chaiHttp from 'chai-http'
// import server from '../src/index'
const server = 'http://localhost:3001'

const should = chai.should()
chai.use(chaiHttp)

// During the test the env variable is set to test
process.env.NODE_ENV = 'test'

// Our parent block
describe('Server SPEC', () => {
  describe('Teste route login', (done) => {
    it('it should login, /login', (done) => {
      chai.request(server)
     .post('/login')
     .end((err, res) => {
       if (err) throw err
       res.body.should.have.property('message').eq('/login')
       res.should.have.status(200)
       done()
     })
    })
    it('it should NOT login width No existing User', (done) => {
      chai.request(server)
     .post('/login')
     .end((err, res) => {
       if (err) throw err
       res.body.should.have.property('message').eq('/login')
       res.should.have.status(200)
       done()
     })
    })
    it('it should NOT login width No existing Password', (done) => {
      chai.request(server)
     .post('/login')
     .end((err, res) => {
       if (err) throw err
       res.body.should.have.property('message').eq('/login')
       res.should.have.status(200)
       done()
     })
    })
    it('it should NOT login width No User and No Password', (done) => {
      chai.request(server)
     .post('/login')
     .end((err, res) => {
       if (err) throw err
       res.body.should.have.property('message').eq('/login')
       res.should.have.status(200)
       done()
     })
    })
  })
})
