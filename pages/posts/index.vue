<template>
  <div class="posts-page">
    <PostsList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  name: 'PostsIndex',
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  },
  head () {
    return { title: 'Posts - ' + process.env.appName }
  }
}
</script>

<style scoped lang="scss">
  .posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
