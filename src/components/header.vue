<template>
  <div id="header" class="row middle-sm">
    <div class="col-sm-6">
      <div class="logo">
        <img src='../assets/images/operaop-logo-trimmed.png' alt="operaop logo" />
      </div>
    </div>
    <div class="col-sm-6">
      <ul class="row middle-sm between-sm">
        <li class="col-sm-6 search">
          <input type="text" id="search" placeholder="search" class="box" />
        </li>
        <li class="col-sm-2">
          <div class="avatar box">
            <img src="../assets/images/myopera-logo.png" />
          </div>
        </li>
         <li class="col-sm-2">
            <i class="fa fa-bars fa-2x is-darkgray box" aria-hidden="true"></i>
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

#header li {
  display: inline-block;
}

.logo {
  height: 76px;
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
</style>
