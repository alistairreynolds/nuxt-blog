<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author" placeholder="Alistair">
      Author Name
    </AppControlInput>
    <AppControlInput v-model="editedPost.title">
      Title
    </AppControlInput>
    <AppControlInput v-model="editedPost.thumb" placeholder="https://miro.medium.com/max/2400/0*ScZSC40m756hGB4z">
      Thumbnail Link
    </AppControlInput>
    <AppControlInput
      v-model="editedPost.content"
      control-type="textarea"
    >
      Content
    </AppControlInput>
    <AppControlInput
      v-model="editedPost.previewText"
      control-type="textarea"
    >
      Preview Content
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
        thumb: '',
        previewText: '',
        content: ''
      }
    }
  },
  methods: {
    onCancel () {
      this.$router.push('/admin')
    },
    onSave () {
      if (!this.editedPost.thumb) {
        this.editedPost.thumb = 'https://miro.medium.com/max/2400/0*ScZSC40m756hGB4z'
      }
      if (!this.editedPost.author) {
        this.editedPost.author = 'Alistair'
      }
      this.$emit('submit', this.editedPost)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
