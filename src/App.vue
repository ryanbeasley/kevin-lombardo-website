<template>
  <div id="app">
    <div id="nav" fluid>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-brand href="/">Generic Logo</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/GetAQuote">Get a quote</b-nav-item>
            <b-nav-item to="/Purchase">Purchase</b-nav-item>
            <b-nav-item to="/Refinance">Refinance</b-nav-item>
            <b-nav-item to="/">Listings</b-nav-item>
            <b-nav-item to="/">About Me</b-nav-item>
            <b-nav-item-dropdown text="Tools" right>
              <b-dropdown-item href="#">Dropdown A</b-dropdown-item>
              <b-dropdown-item href="#">Dropdown B</b-dropdown-item>
              <b-dropdown-item href="#">Dropdown C</b-dropdown-item>
              <b-dropdown-item href="#">Dropdown D</b-dropdown-item>
            </b-nav-item-dropdown>            
            <b-button size="sm" variant="primary" class="my-2 my-sm-0" type="submit">Apply Now</b-button>
          </b-navbar-nav>
        </b-collapse>       
      </b-navbar>
    </div>
    <router-view/>
    <div class="footer">
      <b-row no-gutters>
        <b-col cols=3></b-col>
        <b-col cols=2>
          <h5>Company</h5>
          <p>
            About Us <br/>
            Blog <br/>
            Contact Us <br/>
          </p>          
        </b-col>
        <b-col cols=2>
          <h5>Associated Realtors</h5>
          <p>
            John Smith <br/>
            Jane Doe <br/>
            Jack and Jill Realty <br/>
          </p>
        </b-col>
        <b-col cols=2>
          <h5>Contact Us</h5>
          <p>
            <v-icon name="facebook"></v-icon>
          </p>
        </b-col>
        <b-col cols=3></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  export default {
    components: Icon
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  border-bottom-color: black;
  border-bottom-style: ridge;
  border-bottom-width: .5px;
}

.footer {
  padding-top: 15px;
  border-top-color: black;
  border-top-style: ridge;
  border-top-width: .5px;
  height: 300px;
}
</style>
