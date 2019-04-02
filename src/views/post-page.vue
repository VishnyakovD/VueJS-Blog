<template>
 <el-dialog :title="post.title" :visible.sync="outerVisible" @close="goBack()" append-to-body>
      <div>{{post.body}}</div>

  </el-dialog>
</template>

<script>
import Vue from 'vue'
import {mapActions, mapState, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        outerVisible: true, 
        //post:{}
      }
    },

    methods:{
      ...mapActions('posts',{
        getPost:'INIT_POST'
      }),

      goBack() {
        this.outerVisible=false
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/posts')
      },

      loadPost(id){
        this.getPost({params:{id:id}})
      }
    },

  computed: {
    post(){
      return this.$store.state.posts.post
    },
  },

  beforeMount() {   
     this.loadPost(this.$route.params.id)
  },
    beforeRouteUpdate(to, from, next){
      this.outerVisible=false
      this.loadPost(to.params.id)
    }

  }
</script>