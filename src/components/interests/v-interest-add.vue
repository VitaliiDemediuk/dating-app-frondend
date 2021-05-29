<template>
  <form @submit.prevent="onSubmit">
    <input class="add-interest-input" type="text" v-model="interest">
    <input class="add-interest-button" type="submit" value="Add interest">
  </form>
</template>

<script>
import axios from 'axios'

export default {

  name: "v-interest-add",
  data() {
    return {
      interest: ""
    }
  },
  methods: {
    onSubmit() {
      const config = {
        headers: {
          'Authorization': `Token ${localStorage.getItem('user-token')}`,
        },
      }
      const body = {'name': this.interest}
      axios.post('/api/v1/interest/', body, config)
           .then(response => this.$emit('reloadList'))
           .catch(err => alert("Invalid permission"))
    }
  }
}
</script>

<style>

.add-interest-input {
  width: 60%;
  padding:5px;
  border:2px solid #b3b8ce;
  margin-right: 10px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  color: #b3b8ce;
  background-color: #28223f;
}

.add-interest-input:focus {
  border-color: #b3b8ce;
}

.add-interest-button {
  padding:5px 15px;
  background: #28223f;
  border:2px solid #b3b8ce;
  color: #b3b8ce;
  cursor:pointer;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

</style>