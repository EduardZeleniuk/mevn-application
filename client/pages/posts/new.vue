<template lang="pug">
  .container
    .row
      .col-12
        h1
          | Add New Post
        form
          .form-group
            input.form-control( type="text", name="title", id="title", placeholder="Title", v-model.trim="post.title" )
          .form-group
            textarea.form-control( type="text", rows="5", name="description", id="description", placeholder="Description", v-model.trim="post.description" )
          .form-group
            button.btn.btn-block.btn-primary( type="button", name="addPost", id="addPost", @click="addPost()" )
              | add new post
          section
            nuxt-link.btn.btn-success.btn-block( to="/posts" )
              | go to posts page
</template>

<script>
  import PostsService from '@/services/PostsService'
  export default {
    name: 'NewPostPage',
    data () {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async addPost () {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.addNewPost({
            title: this.post.title,
            description: this.post.description
          })
          this.$router.push('/posts')
        } else {
          alert('Empty fields!')
        }
      }
    }
  }
</script>