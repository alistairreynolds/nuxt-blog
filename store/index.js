import Vuex from 'vuex'
import ErrorHandler from '~/modules/ErrorHandler'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },

    mutations: {
      // These are called via actions -> commit
      setPosts (state, posts) {
        state.loadedPosts = posts
      },
      addPost (state, newPost) {
        state.loadedPosts.push(newPost)
      },
      editPost (state, editedPost) {
        const index = state.loadedPosts.findIndex(post => editedPost.id === post.id)
        state.loadedPosts[index] = editedPost
      }
    },

    actions: {
      nuxtServerInit (vuexContext, context) {
        return context.app.$axios
          .$get('posts.json')
          .then((r) => {
            const postsArray = []
            for (const key in r) {
              postsArray.push({ ...r[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },

      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },

      addPost (vueContext, postData) {
        return this.$axios
          .$post('posts.json', postData)
          .then((response) => {
            // Commit it to the addPost mutator so it will be added to the store, along with the "name" returned
            // by the server
            vueContext.commit('addPost', { ...postData, id: response.name })
          })
          .catch(error => ErrorHandler(error))
      },

      editPost (vueContext, postData) {
        return this.$axios
          .$put(`posts/${postData.id}.json`, postData)
          .then((r) => {
            vueContext.commit('editPost', postData)
          })
          .catch(error => ErrorHandler(error))
      }
    },

    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      },
      post: state => (id) => {
        return state.loadedPosts.filter(post => post.id === id)
      }
    }
  })
}

export default createStore
