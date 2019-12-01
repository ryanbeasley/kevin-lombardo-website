<template>
  <b-container class="home" fluid>
    <div class="holder">
      <h1>Kevin Lombardo</h1>
      <br/>
      <p>- generic text to fill in the blank stuff blah blah blah, lorem ipsum erat</p>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

<style scoped lang="scss">
body, html {
  height: 100%;
}

.home {
  background-image: url('../assets/home_background.jpg');
  background-repeat: no-repeat;
  background-position: center;  
  position: relative;
  background-size: cover;
  height: 525px;
}

.holder {
  text-align: left;
  position: relative;
  left: 5%;
  top: 65%;
  color: rgb(255, 255, 255);
  width: 35%;
  background: rgba(0,0,0,0.5);
}

.holder > h1 {
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  font-size: 350%;
}

.holder > p {
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  font-size: 150%;
}
</style>