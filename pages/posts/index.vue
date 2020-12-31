<template>
  <div class="posts-page">
    <PostsList />
  </div>
</template>

<script>
export default {
  name: 'PostsIndex',
  data () {
    return {}
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
