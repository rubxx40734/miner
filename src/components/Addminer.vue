<template>
   <div class="modal" tabindex="-1" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title bg-light">新增資料</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">miner</span>
            <input type="text" class="form-control" placeholder="miner" v-model="data.content">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">minerUrl</span>
            <input type="text" class="form-control" placeholder="minerUrl" v-model="data.contentUrl">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">coin</span>
            <input type="text" class="form-control" placeholder="coin" v-model="data.coin">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">coinHref</span>
            <input type="text" class="form-control" placeholder="coinHref" v-model="data.coinHref">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">coinImgUrl</span>
            <input type="text" class="form-control" placeholder="coinImgUrl" v-model="data.coinImgUrl">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">fees</span>
            <input type="text" class="form-control" placeholder="fees" v-model="data.fees">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">age</span>
            <input type="date" class="form-control" placeholder="age" v-model="data.age">
         </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">LaunchDate</span>
            <input type="date" class="form-control" placeholder="LaunchDate" v-model="data.LaunchDate">
        </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">daily</span>
            <input type="text" class="form-control" placeholder="daily" v-model="data.daily">
         </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">risk</span>
            <input type="text" class="form-control" placeholder="risk" v-model="data.risk">
         </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="sendMiner">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      modal: {},
      data: {
        content: '',
        contentUrl: '',
        coin: '',
        coinHref: '',
        coinImgUrl: '',
        fees: '',
        age: '',
        daily: '',
        risk: '',
        LaunchDate: ''
      }
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    sendMiner () {
      this.axios.post(`${process.env.VUE_APP_API}posts`, this.data)
        .then(res => {
          console.log(res)
          this.data = {}
          this.hideModal()
          this.$emit('emit-update')
        })
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
