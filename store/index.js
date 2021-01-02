import Vuex from 'vuex'
import axios from 'axios'
import { FIREBASE_POST_URL, FIREBASE_POSTS_URL } from '@/constants/urls'
import Swal from 'sweetalert2'

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
        return axios.get(FIREBASE_POSTS_URL)
          .then((r) => {
            const postsArray = []
            for (const key in r.data) {
              postsArray.push({ ...r.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },

      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },

      addPost (vueContext, postData) {
        return axios
          .post(FIREBASE_POSTS_URL, postData)
          .then((response) => {
            // Commit it to the addPost mutator so it will be added to the store, along with the "name" returned
            // by the server
            vueContext.commit('addPost', { ...postData, id: response.data.name })
          })
          .catch((error) => {
            Swal.fire({
              text: error,
              toast: true,
              position: 'bottom-end'
            })
          })
      },

      editPost (vueContext, postData) {
        return axios
          .put(FIREBASE_POST_URL.replace('%s', postData.id), postData)
          .then((r) => {
            vueContext.commit('editPost', postData)
          })
          .catch((error) => {
            Swal.fire({
              text: error,
              toast: true,
              position: 'bottom-end'
            })
          })
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
