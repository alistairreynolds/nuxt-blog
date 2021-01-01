<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'EditPost',
  data () {
    return {
      loadedPost: {
        author: 'Alistair',
        title: 'Is Cake',
        content: 'Cake is good for you',
        thumbnailLink: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg?webp=true&quality=90&resize=500%2C454'
      }
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
