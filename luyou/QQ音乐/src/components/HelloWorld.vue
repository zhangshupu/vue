<template>
  <div class="hello">
    <header>QQ演出</header>
    <section>
      <div class="banner">
         <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item,index) in data" :key="index">
            <img v-bind:src="item.picUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="nav">
        <dl>
          <dt class="iconfont icon-riqixuanze"></dt>
          <dd>演出日历</dd>
        </dl>
        <dl>
          <dt class="iconfont icon-riqixuanze"></dt>
          <dd>演出日历</dd>
        </dl>
        <dl>
          <dt class="iconfont icon-riqixuanze"></dt>
          <dd>演出日历</dd>
        </dl>
        <dl>
          <dt class="iconfont icon-riqixuanze"></dt>
          <dd>演出日历</dd>
        </dl>
        <dl>
          <dt class="iconfont icon-riqixuanze"></dt>
          <dd>演出日历</dd>
        </dl>
        <dl>
          <dt class="iconfont icon-riqixuanze"></dt>
          <dd>演出日历</dd>
        </dl>
        <dl>
          <dt class="iconfont icon-riqixuanze"></dt>
          <dd>演出日历</dd>
        </dl>
        <dl>
          <dt class="iconfont icon-riqixuanze"></dt>
          <dd>演出日历</dd>
        </dl>
      </div>
      <div class="list">
        <dl v-for="(item,index) in list" :key="index">
          <dt>
            <img v-lazy="item.star_logo" alt="">
          </dt>
          <dd>
            <h4 v-text="item.show_name"></h4>
            <p class="time">
              <em class="iconfont icon-shizhong1"></em>{{item.show_time}}</p>
            <p>
              <em class="iconfont icon-dizhi-01"></em>{{item.hall_name}}</p>
            <p>{{item.min_price/100}}-{{item.max_price/100}}元</p>
          </dd>
        </dl>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        data: null,
        list: null
      }
    },
    mounted() {
      this.getjson()
    },
    methods: {
      getjson() {
        axios.get('/api/banner').then((res) => {
          this.data = res.data.data.slider
        });
        axios.get('/api/list').then((reste) => {
          this.list = reste.data
        })
      }
    }
  }
</script>


<style scoped>
  @import url('element-ui/lib/theme-chalk/index.css');
  @import url('../css/index.css');
  @import url('../../fonts/iconfont.css');
</style>