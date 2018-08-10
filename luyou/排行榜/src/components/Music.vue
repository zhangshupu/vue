<template>
  <div class="wrap">
    <!-- <header>
      <span class="iconfont icon-QQ"></span>QQ音乐</header> -->
    <Headte></Headte>
    <div class="tab">
      <router-link to="/music/recommend">
        推荐
      </router-link>
      <router-link to="/music/ranking">
        排行榜
      </router-link>
      <router-link to="/music/search">
        搜索
      </router-link>
    </div>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
import Headte from './comment/Header'
  export default {
    name: 'HelloWorld',
    data() {
      return {

      }
    },
    components:{
      Headte
    }
  }
</script>

<style scoped>
  @import url('../../fonts/iconfont.css');
  @import url('../css/music.css');
</style>