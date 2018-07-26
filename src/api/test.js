import request from './service'

export default {
  getTest() {
    return request.get('/api/test')
  }
}