<template>
  <div class="single-post-page">
    <section class="post">
      <div class="hero" />
      <h1 class="post-title" :style="{backgroundImage:`url('${loadedPost.thumb}')`}">
        {{ loadedPost.title }}
      </h1>
      <div class="post-details">
        <div class="post-detail">
          Written By {{ loadedPost.author }}
        </div>
        <div class="post-detail">
          {{ loadedPost.updatedDate | date }}
        </div>
      </div>
      <p class="post-content">
        {{ loadedPost.content }}
      </p>
    </section>

    <section class="post-feedback">
      <p>Feedback to <a href="mailto:feedback@example.com">feedback@example.com</a></p>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Post',
  asyncData (context) {
    return context.$axios.$get(`posts/${context.params.id}.json`)
      .then((r) => {
        return {
          loadedPost: r
        }
      }).catch(e => context.error(e))
  }
}
</script>

<style scoped lang="scss">

.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;

  .post {
    width: 100%;

    @media (min-width: 768px) {
      width: 600px;
      margin: auto;
    }

    .post-title {
      background-size: cover;
      background-blend-mode: color;
    }

    .post-details {
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 3px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      .post-detail {
        color: rgb(88, 88, 88);
        margin: 0 10px;
      }
    }

    .post-content{
      margin: 30px 0;
    }

    .post-feedback a {
      color: red;
      text-decoration: none;

      &a:hover,
      &a:active {
        color: salmon;
      }

    }

  }

}

</style>
