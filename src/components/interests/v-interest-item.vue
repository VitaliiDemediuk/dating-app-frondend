<template>
  <div class="v-interest-item">
    <input ref='interest_field' class="interest-field" type="text" readonly :value="interest_data.name">
    <input ref="edit_button" class="interest-item-button" type="button" style="margin-left: 2%" value="To edit" @click="edit">
    <input type="button" class="interest-item-button" value="Delete" style="margin-left: 3%" @click="Delete">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "v-interest-item",
  props: {
    interest_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data () {
    return {
      edit_now: false,
      interest: ""
    }
  },
  methods: {
    Delete() {
      const id = this.interest_data.id
      const config = {
        headers: {
          'Authorization': `Token ${localStorage.getItem('user-token')}`,
        },
      }
      axios.delete(`/api/v1/interest/${id}/`, config)
           .then(response => {this.$emit('reloadList')})
           .catch(err => alert("Invalid permission"))

    },
    edit() {
      if (this.edit_now) {
        const config = {
          headers: {
            'Authorization': `Token ${localStorage.getItem('user-token')}`,
          },
        }
        const id = this.interest_data.id
        const body = {
          'id': id,
          'name': this.$refs.interest_field.value
        }
        axios.put(`/api/v1/interest/${id}/`, body,  config)
            .then(response => this.$emit('reloadList'))
            .catch(err => alert("Invalid permission"))
            .finally(() => {
              this.$refs.interest_field.setAttribute('readonly', 'readonly')
              this.$refs.edit_button.setAttribute('value', 'To Edit')
            })
      } else {
        this.$refs.interest_field.removeAttribute('readonly')
        this.$refs.edit_button.setAttribute('value', 'Edit')
      }
      this.edit_now = !this.edit_now
    }
  },
}
</script>

<style>

.interest-field {
  width: 45%;
  padding:5px;
  border:2px solid #b3b8ce;
  margin-right: 10px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  color: #b3b8ce;
  background-color: #28223f;
}

/*.add-interest-input:focus {*/
/*  border-color: #b3b8ce;*/
/*}*/

.interest-item-button {
  width: 20%;
  margin-top: 20px;
  padding:5px 15px;
  background: #28223f;
  border:2px solid #b3b8ce;
  color: #b3b8ce;
  cursor:pointer;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

</style>