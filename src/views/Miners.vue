<template>
    <div class="nav bg-dark">
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
            <td><button type="button" class="btn btn-warning" @click="putminer(item._id,item)">編輯</button></td>
            <td><button type="button" class="btn btn-danger" @click="deleteMiner(item._id)">刪除</button></td>
          </tr>
      </tbody>
</table>
  </div>
   <div class="modal" tabindex="-1" ref="delmodal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title bg-light">修改資料</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">miner</span>
            <input type="text" class="form-control" placeholder="miner" v-model="tempminer.content">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">minerUrl</span>
            <input type="text" class="form-control" placeholder="minerUrl" v-model="tempminer.contentUrl">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">coin</span>
            <input type="text" class="form-control" placeholder="coin" v-model="tempminer.coin">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">coinHref</span>
            <input type="text" class="form-control" placeholder="coinHref" v-model="tempminer.coinHref">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">coinImgUrl</span>
            <input type="text" class="form-control" placeholder="coinImgUrl" v-model="tempminer.coinImgUrl">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">fees</span>
            <input type="text" class="form-control" placeholder="fees" v-model="tempminer.fees">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">age</span>
            <input type="text" class="form-control" placeholder="age" v-model="tempminer.age">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">daily</span>
            <input type="text" class="form-control" placeholder="daily" v-model="tempminer.daily">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">risk</span>
            <input type="text" class="form-control" placeholder="risk" v-model="tempminer.risk">
         </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="editMiner(tempminer._id)">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AddminerVue from '../components/Addminer.vue'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      miners: [],
      tempminer: {},
      delmodal: {}
    }
  },
  components: {
    AddminerVue
  },
  methods: {
    init () {
      const token = window.localStorage.getItem('userToken')
      this.axios.defaults.headers.common.Authorization = `Bearer ${token}`
      this.axios.get('https://enigmatic-stream-43395.herokuapp.com/posts')
        .then(res => {
          console.log(res)
          this.miners = res.data.post
        })
    },
    deleteMiner (id) {
      this.axios.delete(`https://enigmatic-stream-43395.herokuapp.com/posts/post/${id}`)
        .then(res => {
          console.log(res)
          this.init()
        })
      console.log(id)
    },
    addminer () {
      this.$refs.modal.showModal()
    },
    putminer (id, item) {
      console.log(id, item.content)
      this.tempminer = { ...item }
      this.delmodal.show()
    },
    editMiner (id) {
      console.log(id)
      const url = `https://enigmatic-stream-43395.herokuapp.com/posts/${id}`
      this.axios.patch(url, this.tempminer)
        .then(res => {
          console.log(res)
          this.delmodal.hide()
          this.init()
        })
        .then(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.delmodal = new Modal(this.$refs.delmodal)
    this.init()
  }
}
</script>
