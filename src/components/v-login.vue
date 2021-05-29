<template>
  <div class="v-login">
    <div v-if="needLogin()">
      <h1>Log in</h1>
      <hr style="width: 90%;">
      <form @submit.prevent="submitLoginForm">
        <input class="login-field" type="text" v-model="login" required>
        <input class="login-field" type="password" v-model="password" required>
        <input class="login-button" type="submit" value="Log in">
      </form>
    </div>
    <div v-else>
      <form @submit.prevent="logout">
        <input class="logout-button" type="submit" value="Log out">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {

  name: "v-login",
  data () {
    return {
      login: "",
      password: "",
      token: "",
    }
  },
  methods: {
    needLogin () {
      return !Boolean(localStorage.getItem('user-token'))
    },

    submitLoginForm() {
      const config = {
        headers: {
          'Authorization': `Token ${localStorage.getItem('user-token')}`,
        },
      }
      const body = {"password": this.password, "email": this.login}
      axios.post('/api/v1/auth_token/token/login', body)
           .then(response => {
             localStorage.setItem('user-token', response.data['auth_token'])
             this.$forceUpdate()
           })
           .catch(err => {
             localStorage.removeItem('user-token')
             alert("Invalid login credentials")
             this.$forceUpdate()
           })
           .finally(() => {
             this.login = ""
             this.password = ""
           })

    },

    logout() {
      localStorage.removeItem('user-token')
      this.$forceUpdate()
    }
  }
}
</script>

<style>
.login-field {
  width: 90%;
  margin-left: 3%;
  margin-bottom: 3%;
  padding:5px;
  border:2px solid #b3b8ce;
  margin-right: 10px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  color: #b3b8ce;
  background-color: #28223f;
}

.login-field:focus {
  border-color: #b3b8ce;
}

.login-button, .logout-button {
  width: 90%;
  margin-bottom: 3%;
  padding:5px 15px;
  background: #28223f;
  border:2px solid #b3b8ce;
  color: #b3b8ce;
  cursor:pointer;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.login-button:hover {
  border-color: #171323FF;
  background: #171323FF;
}

</style>