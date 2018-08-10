<template>
  <div class="order">
    <div class="left">
      <div class="list">
        <ul>
          <li v-for="(item,index) in data" :key="index" @click="switcher(index,item)">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div>
        <div class="main" v-for="(item,index) in data" :key="index" v-if="index==ind">
          <h4>{{item.name}}</h4>
          <dl v-for="(items,index) in item.spus" :key="index">
            <dt>
              <img :src="items.picture" alt="">
            </dt>
            <dd>
              <h5>{{items.name}}</h5>
              <p>{{items.praise_content}}</p>
              <p>
                <em>￥
                  <b class="price">{{items.min_price}}</b>
                </em>/盘</p>
            </dd>
            <a>
              <em @click="subtract(items.min_price,index)">-</em>
              <span>{{items.status}}</span>
              <em @click="plus(items.min_price,index)">+</em>
            </a>
          </dl>
        </div>
      </div>

    </div>
    <footer>
      <span>一共
        <em>{{sum}}</em>件</span>
      <span>合计：
        <b>{{total}}</b>元</span>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios';
  import betterScroll from 'better-scroll'
  export default {
    name: 'order',
    data() {
      return {
        data: null,
        mag: [],
        ind: 0,
        total: 0, //总价
        sum: 0 //个数
      }
    },
    mounted() {
      this.getjson();
      new betterScroll('.left',{
        click:true
      });
      new betterScroll('.right', {
        click: true
      })
    },
    methods: {
      getjson() {
        axios.get('/api').then(res => {
          this.data = res.data.data.food_spu_tags;
          this.mag = this.data[0].spus;
        })
      },
      switcher(index, item) {
        this.ind = index;
        this.mag = item.spus;
      },
      //减号
      subtract(price, index) {
        if (this.mag[index].status < 1) {
          return
        }
        this.mag[index].status--;
        this.total -= price;
        this.sum--;
        this.$emit('total', total)
      },
      //加号
      plus(price, index) {
        this.mag[index].status++;
        this.total += price;
        this.sum++;

      }
    },
  }
</script>

<style scoped>
  @import url('../../fonts/iconfont.css');
  @import url('../css/order.css');
</style>