<template>
  <div class="betscroll">
    <div class="main">
      <ul>
        <li v-for="(item,index) in data" :key="item.data.alertid">
          <dl>
            <dd class="num">{{index+1}}</dd>
            <dt>
              <img :src="`//y.gtimg.cn/music/photo_new/T002R90x90M000${item.data.albummid}.jpg?max_age=2592000`" alt="">
            </dt>
            <dd class="titel">{{item.data.albumname}}</dd>
          </dl>
          <span>{{item.data.singer[0].name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import betterScroll from 'better-scroll'
  import {getRecommend} from '../api/recommend.js'
  export default {
    name: 'recommend',
    data() {
      return {
        data: null
      }
    },
    components: {

    },
    mounted() {
      this.getjson();
      new betterScroll('.betscroll', {
        click: true
      })
    },
    methods: {
      getjson() {
        getRecommend().then(res => {
          this.data = res.songlist
        })
      }
    }
  }
</script>

<style scoped>
  @import url('../css/recommend.css');
</style>