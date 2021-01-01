import Vuex from 'vuex'

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
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts',
              [
                {
                  id: 1,
                  title: 'Some stuff',
                  previewText: 'Makin some stuff',
                  thumb: 'post1.jpg'
                },
                {
                  id: 2,
                  title: 'Some other stuff',
                  previewText: 'Makin more stuff',
                  thumb: 'post2.jpg'
                }
              ]
            )
            resolve()
          }, 1000)
        })
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
