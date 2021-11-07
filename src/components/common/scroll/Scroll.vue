<template>
    <div class="waw" ref="aba">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll";
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll:null
      }
    },
    // 组件创建完后调用
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.aba,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        ObserveDom:true
      })

      // 2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
       })

      // 3.监听上拉事件
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    },
    methods:{
        scrollTo(x,y,time=300){
          this.scroll && this.scroll.scrollTo(x,y,time)
        },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll &&  this.scroll.refresh()
      },
      getScrollY() {
          return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
.waw{
  height: 400px;
}
</style>
