<template>
  <div id="app">
    <div>
      <input type="" v-model="fjzj">
      <button @click="tijiao">提交</button>
      <h2>{{msg}}</h2>
    </div>
    <communication1 @zxf='change'></communication1>
    <communication2 :titel="fjzj"></communication2>
  </div>

</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        msg: null,
        fjzj: null
      }
    },
    methods: {
      change(titel) {
        this.msg = titel;
        console.log(this.msg)
      },
    tijiao(){
      console.log(this.fjzj)
    }
    },
    components: {
      communication1: {
        name: 'communication1',
        data() {
          return {
            titel: null
          }
        },
        mounted() {

        },
        methods: {
          getclick() {
            console.log(this.titel)
            EventHub.$emit('zjtj',this.titel)
            this.$emit("zxf", "1478954")
          }
        },
        template: `<div>
        <h3>这是组件1</h3>
        <input type="text" v-model="titel">
        <button v-on:click="getclick">提交</button>
        </div>`
      },
      communication2: {
        name: 'communication2',
        data() {
          return {
            tit:null
          }
        },
        props:["titel"],
        methods: {

        },
        mounted() {
          EventHub.$on('zjtj',(req)=>{
            this.tit=req
          })
        },
        template: `<div>这是组件2 <h4>{{titel}}</h4>{{tit}}</div>`,
      }
    }
  }
</script>

<style>
</style>