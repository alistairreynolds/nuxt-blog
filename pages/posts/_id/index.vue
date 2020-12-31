<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        Title
      </h1>
      <div class="post-details">
        <div class="post-details">
          Date:
        </div>
        <div class="post-details">
          By:
        </div>
      </div>
      <p>Contents</p>
    </section>

    <section class="post-feedback">
      <p>Feedback to <a href="mailto:feedback@example.com">feedback@example.com</a></p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Post'
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
      margin: 0;
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

      .post-details {
        color: rgb(88, 88, 88);
        margin: 0 10px;
      }
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
