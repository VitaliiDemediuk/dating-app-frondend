<template>
  <div class="v-main-wrapper">
    <ul>
<!--      <li><a href="/#/profile">Profile</a></li>-->
      <li><a href="/#/interests">Interests</a></li>
      <li><a href="/#/login">Log in</a></li>
    </ul>
    <div class="card-container">
      <router-view></router-view>
    </div>
    <footer>
      <p>
      </p>
    </footer>
  </div>
</template>

<script>
  import vLogin from './v-login'

  export default {
    name: 'v-main-wrapper',
    components: {
      vLogin,
    },

    props: {

    },

    data() {
      return {
        title: "Main wrapper"
      }
    }
  }
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css";
@import url('https://fonts.googleapis.com/css?family=Montserrat');

/*nav*/
* {
  list-style-type: none;
}



  ul{
    position:fixed;
    width:100%;
    top: 0;
    display: flex;
    margin: auto;
    max-width: 400px;
    justify-content: space-between;
    /*text-align: center;*/
  }

li {
  padding: 1rem 2rem 1.15rem;
  text-transform: uppercase;
  cursor: pointer;
  min-width: 80px;
  max-height: 20%;
  /*margin: auto;*/
}

a {
  text-decoration: none;
  color: #ebebeb;
}

a:hover {
  color: #4a475c;
}

li:active {
  transform: translateY(4px);
}

/*nav*/

* {
  box-sizing: border-box;
}

body {
  background-color: #28223F;
  font-family: Montserrat, sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;
  margin: 0;
}

h3 {
  margin: 10px 0;
}

h6 {
  margin: 5px 0;
  text-transform: uppercase;
}

p {
  font-size: 14px;
  line-height: 21px;
}

.card-container {
  background-color: #231E39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  color: #B3B8CD;
  padding-top: 30px;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;
}

.card-container .pro {
  color: #231E39;
  background-color: #FEBB0B;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 30px;
  left: 30px;
}

.card-container .round {
  border: 1px solid #03BFCB;
  border-radius: 50%;
  padding: 7px;
}

.buttons {
  margin-top: 20px;
  margin-bottom: 20px;
}

button.primary {
  background-color: #03BFCB;
  border: 1px solid #03BFCB;
  border-radius: 3px;
  color: #231E39;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  padding: 10px 25px;
}

button.primary.ghost {
  background-color: transparent;
  color: #02899C;
}

.combobox {
  background-color: transparent;
  color: #02899C;
  border: 1px solid #03BFCB;
  border-radius: 3px;
  padding: 10px 25px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}

</style>