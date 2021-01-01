<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">
      Author Name
    </AppControlInput>
    <AppControlInput v-model="editedPost.title">
      Title
    </AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink">
      Thumbnail Link
    </AppControlInput>
    <AppControlInput
      v-model="editedPost.content"
      control-type="textarea"
    >
      Content
    </AppControlInput>
    <AppButton type="submit">
      Submit
    </AppButton>
    <AppButton
      type="button"
      style="margin-left:10px"
      btn-style="cancel"
      @click="onCancel"
    >
      Cancel
    </AppButton>
  </form>
</template>

<script>
export default {
  name: 'AdminPostForm',
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      editedPost: this.post ? { ...this.post } : {
        title: '',
        author: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onCancel () {
      this.$router.push('/admin')
    },
    onSave () {
      console.log(this.editedPost)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
