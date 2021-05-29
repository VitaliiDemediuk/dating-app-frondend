<template>
  <div>
    <h3 style="margin-top: 30px;">Ricky Park, <span>21</span></h3>
    <h6>Female</h6>
    <h6>New York</h6>
    <div class="buttons">
      <button class="primary">
        Edit profile
      </button>
      <button class="primary ghost" style="margin-left: 5px;">
        Messages
      </button>
    </div>
    <div class="info-container">
      <h6>About me</h6>
      <p>User interface designer and <br> front-end developer</p>
    </div>
    <div class="info-container">
<!--      <h6>Interests</h6>?-->
<!--      <ul>-->
<!--        <li>UI / UX</li>-->
<!--        <li>Front End Development</li>-->
<!--        <li>HTML</li>-->
<!--        <li>CSS</li>-->
<!--        <li>JavaScript</li>-->
<!--        <li>React</li>-->
<!--        <li>Node</li>-->
<!--      </ul>-->
<!--      <div style="width: 100%; margin-left: auto;">-->
<!--        <div style="width: 43%; margin-left: auto; margin-right: auto;">-->
<!--          <select class="add-interes" style="display: none;">-->
<!--            <option>Пункт 1</option>-->
<!--            <option>Пункт 2</option>-->
<!--          </select>-->
<!--          <button style="margin-left: 10px;" class="primary ghost">-->
<!--            Messages-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>

</template>

<script>
export default {
  name: "v-profile-card-main",
  mounted() {
    if (!Boolean(localStorage.getItem('user-token'))){
      this.$router.push({'name': 'login'})
    }
  }
}
</script>

<style>

</style>