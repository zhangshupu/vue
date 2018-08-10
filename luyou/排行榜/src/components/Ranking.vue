<template>
  <div class="betscroll">
    <div class="wrap">
      <router-link :to="{path:'/particulars',query:{id:item.id}}" v-for="item in data" :key="item.id">
        <dl>
          <dt>
            <img :src="item.picUrl" alt="">
          </dt>
          <dd>
            <h4>{{item.topTitle}}</h4>
            <ul>
              <li v-for="(items,index) in item.songList" :key="index">
                <em>{{index+1}}</em>{{items.songname}}&nbsp;-&nbsp;
                <span>{{items.singername}}</span>
              </li>
            </ul>
          </dd>
        </dl>
      </router-link>
    </div>
  </div>

</template>

<script>
  import betterScroll from 'better-scroll';
  import axios from 'axios';
  export default {
    naem: 'ranking',
    data() {
      return {
        data: null
      }
    },
    mounted() {
      new betterScroll('.betscroll', {
        click: true,
      });
      this.getjson();
    },
    methods: {
      getjson() {
        axios.get('/api/list').then((res) => {
          this.data = res.data.data.topList
        })
      }
    }
  }
</script>

<style scoped>
  @import url('../../fonts/iconfont.css');
  @import url('../css/ranking.css');
</style>