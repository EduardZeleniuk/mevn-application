import api from '@/services/api'

export default {
  fetchPosts () {
    return api().get('posts')
  },
   addNewPost (params) {
    return api().post('posts', params)
  }
}