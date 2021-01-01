<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'NewPost',
  methods: {
    onSubmitted (postData) {
      axios.post('https://nuxtlearning-7c8ea-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}

</style>
