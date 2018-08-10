<template>
  <div class="wrap">
    <header>
      <span class="iconfont icon-xiangzuo"></span>
      <span>庆丰包子铺（万柳店）</span>
      <span></span>
    </header>
    <div class="tab">
      <router-link to="/order">点菜</router-link>
      <router-link to="/evaluate">评价</router-link>
      <router-link to="/merchant">商家</router-link>
    </div>
    <section>
       <router-view/>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
  @import url('../../fonts/iconfont.css');
  @import url('../css/index.css');
</style>