<template>
  <div class="nav bg-setting">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
            <h1 class="mt-3 text-light">後台管理</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container border mt-5">
        <div class="row justify-content-center">
          <h1 class="h3 mb-3 font-weight-normal text-center">
            請先登入
          </h1>
          <div class="col-8">
            <form id="form" class="form-signin">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="username"
                  placeholder="name@example.com" required autofocus v-model="user.email">
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="password"
                  placeholder="Password" required v-model="user.password">
                <label for="password">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3" type="button"
              @click="login">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
</template>

<style lang="scss">
.bg-setting{
  background-image: url('../assets/bg.jpg');
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${process.env.VUE_APP_API}users/sign_in`
      this.axios.post(url, this.user)
        .then(res => {
          console.log(res)
          const token = res.data.user.token
          console.log(token)
          window.localStorage.setItem('userToken', token)
          this.$router.push('/miners')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    // console.log(this.axios)
  }
}
</script>
