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
 
</section>


</template>

<script>
import BlogListItem from "../components/blog-list-item"
import axios from 'axios'
export default {
  name: 'Home-page',
  props: {
    msg: String
  },

data(){
  return {
    listItems:[]
  }
},
components:{
  BlogListItem
  },

created() {
    //https://gorest.co.in/public-api/posts?_format=json&access-token=Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT

axios
  .get('https://gorest.co.in/public-api/posts?_format=json&access-token=Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT')
  .then(response =>
        {
          if(response.data){
            this.listItems=response.data.result
          } 
        }
   );

  },
}


</script>
