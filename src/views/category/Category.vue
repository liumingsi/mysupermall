<template>
  <div class="wae" ref="aaa">
   <ul class="ww">
     <button @click="btnClick">按钮</button>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
    <li>电视剧阿爸</li>
  </ul>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  export default {
    name:"Category",
    data() {
     return {
       scroll:null
     }
  },
 //组件创建完后调用
  mounted() {
      this.scroll = new BScroll(this.$refs.aaa,{
        probeType:3,
        pullUpLoad:true,
        ObserveDom:true
     })
      // this.scroll.on('scroll',(position) => {
      //   console.log(position);
      // })
      this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多');
    })
  },
    methods:{
      btnClick() {
        console.log('btnClick');
      }
    }
}
</script>

<style scoped>
.wae{
  height: 150px;
  background: pink;
  overflow: hidden;
  /*overflow-y: scroll;*/
}
</style>
