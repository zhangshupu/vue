<template>
  <div class="wrap">
    <Headte></Headte>
    <div class="top">
      <dl>
        <dt>
          <img :src="imgurl" alt="">
        </dt>
        <dd>
          <h4>巅峰磅·流行指数</h4>
          <p>第200天</p>
          <p>2018-07-19
            <em>更新</em>
          </p>
        </dd>
      </dl>
      <a>
        <em class="iconfont icon-bofang1"></em>播放全部</a>
    </div>
    <div class="betscroll">
      <div class="list">
        <h4>排行榜
          <em>共一百首</em>
        </h4>
        <ol>
          <li v-for="(item,index) in data" :key="index">
            {{index+1}}
            <span>{{item.data.albumname}}
              <em>{{item.data.singer[0].name}}</em>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Headte from './comment/Header'
  import betterScroll from 'better-scroll';
  export default {
    name: 'particulars',
    data() {
      return {
        id: null,
        data: null,
        imgurl: null
      }
    },
    mounted() {
      this.id = this.$route.query.id;
      this.getjson();
      new betterScroll('.betscroll',{
        click :true
      })
    },
    methods: {
      getjson() {
        axios.get(`/api/particulars?id=${this.id}`).then((res) => {
          this.data = res.data.songlist;
          this.imgurl = res.data.topinfo.pic_album;
        })
      }
    },
    components: {
      Headte
    }
  }
</script>

<style scoped>
  @import url('../../fonts/iconfont.css');
  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .top {
    width: 100%;
    height: auto;
    background: rgba(0, 0, 0, .5);
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  dl {
    width: 100%;
    height: auto;
    display: flex;
  }

  dl dt {
    width: 30%;
    margin-left: 4%;
    height: auto;
  }

  dl dt img {
    width: 100%;
    height: auto;
    display: block;
  }

  dl dd {
    width: 62%;
    height: auto;
    margin-left: 4%;
    color: #fff;
  }

  dl dd h4 {
    font-size: 20px;
    margin-top: 20px;
  }

  dl dd p {
    font-size: 15px;
    margin-top: 8px;
  }

  .top a {
    width: 40%;
    padding: 10px 0px;
    text-align: center;
    background: #0fd;
    color: #fff;
    font-size: 20px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    border-radius: 20px;
  }

  .iconfont {
    font-size: 20px;
    margin-right: 10px;
  }

  .betscroll {
    width: 100%;
    flex: 1;
    overflow: hidden;
  }

  .list {
    width: 100%;
    height: auto;
  }

  .list h4 {
    width: 96%;
    padding-left: 4%;
    color: #ccc;
    font-size: 16px;
    margin-top: 20px;
  }

  ol {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }

  ol li {
    width: 96%;
    margin-left: 4%;
    height: 40px;
    font-size: 20px;
    color: #ccc;
  }

  ol li span {
    margin-left: 10px;

  }

  ol li em {
    margin-left: 10px;
    color: #f00;

  }
</style>