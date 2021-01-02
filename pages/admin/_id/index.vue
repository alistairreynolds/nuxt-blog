<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>

export default {
  name: 'EditPost',
  layout: 'admin',
  asyncData (context) {
    return context.$axios
      .$get(`posts/${context.params.id}.json`)
      .then((r) => {
        return {
          loadedPost: r
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted (postData) {
      postData.id = this.$route.params.id
      postData.updatedDate = new Date()
      this.$store.dispatch('editPost', postData)
        .then((r) => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}

</style>
