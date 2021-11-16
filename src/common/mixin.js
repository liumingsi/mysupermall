import {debounce} from './uitle'
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null
    }
  },
  mounted() {
    let refresh =debounce(this.$refs.scroll.refresh,10)//调用防抖函数

    //对监听的事件进行保存
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data () {
    return{
      isShowBackTop:false
    }
  },
  methods:{
    backTop() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
    listenShoBackTop(position){
      this.isShowBackTop = (-position.y) > 600
    }
  }
}
