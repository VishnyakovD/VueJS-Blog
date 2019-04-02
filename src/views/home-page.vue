<template>
<section>
   <router-view/>  
  <div class="row">
    <div class="col-md-12">
      <h1>{{ msg }}</h1>
    </div>
  </div>
  <div class="row">
      <BlogListItem v-for="item in listItems" :item="item"/>
  </div>
  <!--<div style="display:flex;flex-wrap:wrap;">
    <div v-for="(item, index) in pages" :key="'idx'+index" style="display:block;width:35px;height:35px; text-align:center;padding:5px; border:1px solid blue;margin:2px">
      <router-link :to="`/posts-${index+1}`" class="btn btn-link" style="padding: 5px">{{index+1}}</router-link>
    </div>  
  </div>-->
 
</section>


</template>

<script>
import BlogListItem from "../components/blog-list-item"
import {mapActions, mapState, mapGetters} from 'vuex'

export default {
  name: 'Home-page',
  props: {
    msg: String
  },

data(){
  return {
    totalCount:0,
    pageCount:0,
    currentPage:1,
    perPage:20,
    //listItems:[]
  }
},
components:{
  BlogListItem
  },

  /*beforeRouteUpdate(to, from, next){
   console.log(to,to.path.replase(`/posts-`,""))
  },*/
  beforeMount() {   
     this.getPosts({params:{currentPage:1}})
  },

  computed:{
    listItems(){
      return this.$store.state.posts.pagePosts
    },
    pages(){
        return new Array(this.pageCount)
    }
  },

  methods:{
      ...mapActions('posts',{
        getPosts:'INIT_POSTS_LIST'
      })
  }
}


</script>
