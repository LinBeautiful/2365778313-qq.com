<template>
  <div class="home">
    <div id="headerswper">
      <img src="../assets/img/logo-2018-2.gif" alt="" />
    </div>
    <div id="nav">
      <div class="left-top" style="float: left">
        <router-link to="/About">首页</router-link>
        <router-link to="/Ask">问答</router-link>
        <router-link to="/Tree">树洞</router-link>
        <router-link to="/Zoo">动物园</router-link>
        <router-link to="/OX">随手拍</router-link>
        <router-link to="/Pic">无聊图</router-link>
        <router-link to="/Top">热榜</router-link>
      </div>

      <div class="right-top">
        <router-link to="/Pond" style="float: right">鱼塘</router-link>
        <router-link to="/Zhoubian" style="float: right">周边</router-link>
      </div>
    </div>
  <router-view></router-view>
  </div>
  
</template>

<script>

</script>
<style>
/* #headerswper{
  background:#fff url('../assets/img/logo-2018-2.gif') no-repeat scroll 5px 28px;
  background-size: 30px;
  position: absolute;
  z-index: 999;
} */
body {
  margin: 0;
  padding: 0;
}
#headerswper img {
  width: 36%;
  padding-top: 30px;
}
#nav {
  background-color: #222;
  color: #aaa;
  font-size: 12px;
  padding: 7px 10px;
  overflow: hidden;
}
#nav a {
  color: #aaa;
  font-size: 0.14rem;
  font-weight: inherit;
  line-height: 1.8em;
}
</style>
