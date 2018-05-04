<template>
  <h1 class="red">{{ posts }}</h1>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  data () {
    return {
      posts: []
    }
  },
 	methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      console.log(response.data)
      this.posts = response.data[0].title
    }
  },
  mounted () {
    this.getPosts()
  }
}


</script>

<style>
.red {
  color: red;
}
</style>

