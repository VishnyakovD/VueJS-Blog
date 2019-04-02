import axios from "axios"

const api = axios.create({
    baseURL:'https://gorest.co.in/public-api',
    params:{
        'access-token':'Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT',
        _format:'json'
    }
})

const posts={
    endpoint:'/posts',
    getPosts(params){
        let page = params.page || 1
        return api.get(this.endpoint, { params: {page:page, fields:'id,user_id,title'}})
    },
    getPostById(postId, isFullPost) {
        return api.get(this.endpoint, {
          params: {
            id: postId,
            fields: isFullPost ? 'id,user_id,title,body' : 'body'
          }
        })
      },
}

export default posts
