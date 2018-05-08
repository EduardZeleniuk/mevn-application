<template lang="pug">
  .container
    .row
      .col-12
        h1
          | Posts
        h3
          | This file will list all the posts

        section.panel.panel-success( v-if="posts" )
          .panel-heading
            | list of posts
          table.table.table-striped
            tbody
              tr
                th Title
                th Description
                th Action
              tr( v-for="(post, index) in posts", :key="post.title" )
                td {{ post.title }}
                td {{ post.description }}

        section.panel.panel-danger( v-else-if="posts" )
          p
            | There are no posts ... Lets add one now!
          div
            router-link( :to="{ name: 'NewPost' }" )
              | add new post
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
        this.posts = response.data.posts
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

