<template>
  <div class="posts-page">
    <PostsList :posts="posts" />
  </div>
</template>

<script>
export default {
  name: 'PostsIndex',
  asyncData (context, callback) {
    callback(null, {
      posts: [
        {
          id: 1,
          title: 'Some stuff',
          previewText: 'Makin some stuff',
          thumb: 'post1.jpg'
        },
        {
          id: 2,
          title: 'Some other stuff',
          previewText: 'Makin more stuff',
          thumb: 'post2.jpg'
        }
      ]
    })
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
