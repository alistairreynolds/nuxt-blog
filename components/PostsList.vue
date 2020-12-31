<template>
  <section class="posts-list">
    <div v-for="post in posts" :key="post.id">
      <PostPreview
        :id="post.id"
        :thumb="post.thumb"
        :title="post.title"
        :text="post.text"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostsList',
  data () {
    return {
      posts: [
        {
          id: 1,
          title: 'Some stuff',
          text: 'Makin some stuff',
          thumb: 'post1.jpg'
        },
        {
          id: 2,
          title: 'Some other stuff',
          text: 'Makin more stuff',
          thumb: 'post2.jpg'
        }
      ]
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
