<template>
  <div id="header">
    <div class="logo">
      <img src='../assets/images/logo-placeholder.png' alt="operaop logo" />
    </div>

    <ul class="header-items">
      <li class="search" id="search-element">
        <input type="text" id="search" class="small" placeholder="search" />
      </li>
      <li class="">
        <div class="avatar-small-border logo-space">
          <img src="../assets/images/myopera-logo.png" />
        </div>
      </li>
       <li class="">
          <i class="fa fa-bars fa-2x is-darkgray" aria-hidden="true"></i>
      </li>
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
  position: fixed !important;
  background-color: #FFFFFF;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  z-index: 999;
  padding-left: 100px;
  padding-right: 100px;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 8;
}

#header ul {
  list-style-type: none;
  margin-bottom: 0px;
}

.logo {
  height: 57px;
  display: inline-block;
}

.header-items {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: auto;
  height: 100%;
}

.logo-space {
    margin: 0px 30px 0px 30px;
}

.avatar img {
  width: 100%;
}

.box {
  margin: 0 auto;
}

@media screen and (max-width: 46rem) {
  #header {
    padding: 50px 28px 28px 28px;
  }
  #search-element {
    display: none;
  }
}

</style>
