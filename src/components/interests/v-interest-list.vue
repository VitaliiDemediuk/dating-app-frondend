<template>
  <div class="v-interest-list" style="padding-bottom: 20px; ">
    <h2>All interests</h2>
    <v-interest-add @reloadList="reload" />
    <hr width="95%">
    <v-interest-item
        v-for="interest in INTEREST_LIST"
        :key="interest.id"
        :interest_data="interest"
        @reloadList="reload"
    />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import vInterestItem from './v-interest-item'
import vInterestAdd from './v-interest-add'

export default {
  name: "v-interest-list",
  components: {
    vInterestItem,
    vInterestAdd,
  },
  methods: {
    ...mapActions([
       'GET_INTEREST_LIST_FROM_API'
    ]),
    reload() {
      this.GET_INTEREST_LIST_FROM_API()
      this.$forceUpdate()
    },
  },
  computed: {
    ...mapGetters([
        'INTEREST_LIST',
    ]),
  },
  mounted() {
    if (!Boolean(localStorage.getItem('user-token'))){
      this.$router.push({'name': 'login'})
    }
    this.GET_INTEREST_LIST_FROM_API()
  },
}
</script>

<style>

</style>