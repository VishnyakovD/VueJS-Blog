<template>
 <el-dialog :title="post.title" :visible.sync="outerVisible" @close="goBack()" append-to-body>
      <div>{{post.body}}</div>

  </el-dialog>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
  export default {
    data() {
      return {
        outerVisible: true, 
        post:{}
      }
    },

    methods:{
        goBack() {
        this.outerVisible=false
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    },

     created(){
      axios.get(`https://gorest.co.in/public-api/posts?_format=json&access-token=Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT&id=${this.$route.params.id}`)
      .then(response =>
            {              
              if(response.data){      
                this.post=response.data.result[0]               
              } 
            }
      );
    },
    beforeRouteUpdate(to, from, next){

      this.outerVisible=false
      axios.get(`https://gorest.co.in/public-api/posts?_format=json&access-token=Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT&id=${to.params.id}`)
      .then(response =>
            {              
              if(response.data){      
                this.post=response.data.result[0]
              } 
            }
      );
    }

  }
</script>