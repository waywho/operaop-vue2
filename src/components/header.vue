<template>
  <div id="header" class="row middle-xs">
    <div class="col-xs-6">
      <div class="logo">
        <img src='../assets/images/operaop-logo-trimmed.png' alt="operaop logo" />
      </div>
    </div>
    <div class="col-xs-6">
      <ul class="row middle-xs end-xs">
        <li class="col-sm-6 search" id="search-element">
          <input type="text" id="search" placeholder="search" />
        </li>
        <li class="col-xs-4 col-sm-3">
          <div class="avatar">
            <img src="../assets/images/myopera-logo.png" />
          </div>
        </li>
         <li class="col-xs-5 col-sm-3">
            <i class="fa fa-bars fa-2x is-darkgray" aria-hidden="true"></i>
        </li>
      </ul>
    </div>

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
}

#header ul {
  list-style-type: none;
}

.logo {
  height: 57px;
  display: inline-block;
}

.logo img {
  width: auto;
  height: 100%;
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
