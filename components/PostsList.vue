<template>
  <section class="posts-list">
    <PostPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :thumb="post.thumb"
      :title="post.title"
      :preview-text="post.previewText"
      :is-admin="isAdmin"
    />
  </section>
</template>

<script>
export default {
  name: 'PostsList',
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
