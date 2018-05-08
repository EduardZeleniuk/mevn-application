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
              tr( v-for="(post, index) in posts", :key="post._id" )
                td {{ post.title }}
                td {{ post.description }}
                td
                  router-link( :to="{ name:'posts-id', params: { id: post._id } }" class="btn btn-danger btn-sm" )
                    | edit post
                  button.btn.btn-danger.btn-sm( type="button", @click="removePost(post._id)" )
                    | delete

        section.panel.panel-danger( v-else )
          p
            | There are no posts ... Lets add one now!
          div
            router-link( :to="{name:'posts-new'}" )
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
    },
     async removePost (value) {
        await PostsService.deletePost(value)
        this.getPosts()
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

