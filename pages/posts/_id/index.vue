<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        {{ post.title }}
      </h1>
      <div class="post-details">
        <div class="post-detail">
          {{ post.updatedDate }}
        </div>
        <div class="post-detail">
          Written By: {{ post.author }}
        </div>
      </div>
      <p class="post-content">
        {{ post.content }}
      </p>
    </section>

    <section class="post-feedback">
      <p>Feedback to <a href="mailto:feedback@example.com">feedback@example.com</a></p>
    </section>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  name: 'Post',
  asyncData (context, callback) {
    callback(null, {
      post: {
        id: 1,
        title: 'Some stuff',
        previewText: 'Makin some stuff',
        thumb: '/images/post1.jpg',
        author: 'Me',
        updatedDate: moment().format('dddd Do MMMM YYYY, h:mm a'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    })
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
