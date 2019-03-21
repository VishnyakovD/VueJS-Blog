<template>
<div>
   <div>{{post.body}}</div>
</div>
  
 <!-- <el-dialog :title="post.title" :visible.sync="outerVisible" append-to-body>
      <div>{{post.body}}</div>
      <el-button @click="outerVisible = false">Close</el-button>
  </el-dialog>-->
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
    beforeRouteUpdate(to, from, next){
      console.log(this.$route.params.id)
      this.outerVisible=false
      axios.get(`https://gorest.co.in/public-api/posts?_format=json&access-token=Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT&id=${this.$route.params.id}`)
      .then(response =>
            {              
              if(response.data){      
                this.post=response.data.result[0]
              console.log(this.post)    
               
              } 
            }
      );
    }

  }
</script>