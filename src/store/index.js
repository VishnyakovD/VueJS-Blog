import Vue from 'vue'
import Vuex from 'vuex'
import posts from '../store/posts'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        posts
    },
   /* state:{
        pagePosts:[],
        currentPage:1,
        pageCount:0,
        isLoaded:false,
        post:{}
    },
    mutations: {
        SET_POSTS_LIST(state, payload) {
          state.pagePosts = payload;
          state.isLoaded = true
        },
        SET_PAGE(state, payload) {
          state.currentPage = payload
        },
        SET_PAGE_COUNT(state, payload) {
          state.pageCount = payload
        },
        SET_POST(state, payload){
            state.post=payload
        }
      },
    actions:{
        async INIT_POST({commit, state},qParams){            
            let {data}= await posts.getPostById(qParams.params.id, true)        
            commit('SET_POST', data.result[0])
        },

        async INIT_POSTS_LIST({commit, state},qParams){
            let {data}= await posts.getPosts(qParams.params)
            commit('SET_POSTS_LIST', data.result)
            commit('SET_PAGE', data['_meta'].currentPage)
            commit('SET_PAGE_COUNT', data['_meta'].pageCount)
        }
    },
    getters:{

    }*/
})