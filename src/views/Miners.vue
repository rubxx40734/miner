<template>
    <div class="nav">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
            <h1 class="mt-3 text-light">後台管理</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
      <button type="button" class="btn btn-primary" @click="addminer">新增miner</button>
  </div>
   <AddminerVue ref="modal" v-on:emit-update="init"></AddminerVue>
  <div class="container mt-5">
    <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col" row="2">PROJECT Name</th>
            <th scope="col" >Token</th>
            <th scope="col">Fees</th>
            <th scope="col" class=" d-flex align-items-center"><div class="sort d-flex flex-column me-2">
              <button type="button" class="btn btn-sm  btn-light mb-1" ></button>
              <button type="button" class="btn btn-sm btn-light"></button>
            </div>Age</th>
            <th scope="col">Daily ROI</th>
            <th scope="col">Risk Warning</th>
            <th scope="col">操作</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="item in miners" :key="item._id">
            <!-- //1 -->
            <th scope="row"><a :href="item.contentUrl" target="_blank">{{item.content}}</a></th>
            <td class=""><a :href="item.coinHref" target="_blank"><img :src="item.coinImgUrl" alt="" class="icon me-2"></a>{{item.coin}}</td>
            <td class="text-success">{{item.fees}}</td>
            <td class="text-warning">{{item.age}}d</td>
            <td class="text-danger">{{item.daily}}%</td>
            <td>{{item.risk}}</td>
            <td><button type="button" class="btn btn-danger" @click="deleteMiner(item._id)">刪除</button></td>
          </tr>
      </tbody>
</table> 
  </div>
</template>

<script>
import AddminerVue from '../components/Addminer.vue'
export default {
    data() {
        return {
           miners: []
        }
    },
    components: {
        AddminerVue
    },
    methods: {
       init() {
         const token = window.localStorage.getItem('userToken')
         this.axios.defaults.headers.common.Authorization = `Bearer ${token}`
         this.axios.get('https://enigmatic-stream-43395.herokuapp.com/posts')
          .then(res => {
            console.log(res)
            this.miners = res.data.post
          })
       },
       deleteMiner(id){
        this.axios.delete(`https://enigmatic-stream-43395.herokuapp.com/posts/post/${id}`)
         .then(res => {
            console.log(res)
            this.init()
         })
        console.log(id)
       },
       addminer() {
        this.$refs.modal.showModal()
       }
    },
    mounted() {
        this.init()
    }
}
</script>