import Vuex from 'vuex'
import ErrorHandler from '~/modules/ErrorHandler'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setToken (state, token) {
        state.token = token
      },
      clearToken (state, token) {
        state.token = null
      }
    },

    actions: {

      authUser (vuexContext, authData) {
        const endpoint = authData.isLogin ? 'signInWithPassword' : 'signUp'

        return this.$axios
          .$post(`https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${process.env.firebaseApiKey}`, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }).then((r) => {
            vuexContext.commit('setToken', r.idToken)
            vuexContext.dispatch('setLogoutTimer', +r.expiresIn * 1000)
          }).catch((e) => {
            console.log(e)
          })
      },

      setLogoutTimer (vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },

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
          .$post(`posts.json?auth=${vueContext.state.token}`, postData)
          .then((response) => {
            // Commit it to the addPost mutator so it will be added to the store, along with the "name" returned
            // by the server
            vueContext.commit('addPost', { ...postData, id: response.name })
          })
          .catch(error => ErrorHandler(error))
      },

      editPost (vueContext, postData) {
        return this.$axios
          .$put(`posts/${postData.id}.json?auth=${vueContext.state.token}`, postData)
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
      },
      isAuthenticated (state) {
        return state.token != null
      }
    }
  })
}

export default createStore
