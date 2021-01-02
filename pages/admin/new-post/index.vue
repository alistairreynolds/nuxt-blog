<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2'
import { FIREBASE_POSTS_URL } from '@/constants/urls'
export default {
  name: 'NewPost',
  methods: {
    onSubmitted (postData) {
      axios.post(FIREBASE_POSTS_URL, postData)
        .then(response => this.$router.push('/admin'))
        .catch((error) => {
          Swal.fire({
            text: error,
            toast: true,
            position: 'bottom-end'
          })
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
