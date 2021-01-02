<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Swal from 'sweetalert2'
import { FIREBASE_POST_URL } from '~/constants'

export default {
  name: 'EditPost',
  asyncData (context) {
    return axios.get(FIREBASE_POST_URL.replace('%s', context.params.id))
      .then((r) => {
        let date = r.data.updatedDate
        date = moment(date).format('dddd Do MMMM YYYY @ h:mm a')
        r.data.updatedDate = date

        return {
          loadedPost: r.data
        }
      }).catch(e => context.error(e))
  },
  methods: {
    onSubmitted (data) {
      axios.put(FIREBASE_POST_URL.replace('%s', this.$route.params.id), data)
        .then(r => this.$router.push('/admin'))
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
