import Vuex from 'vuex'
import axios from 'axios'
import { FIREBASE_POSTS_URL } from '@/constants/urls'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
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
            console.log(postsArray)
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
