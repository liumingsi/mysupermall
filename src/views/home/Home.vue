<template>
    <div id="home" class="wrapper">
     <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <tab-control ref="tabControl1"
                  :titles="['流行','新款','精选']"
                  @tabClick="tabClick"
                  class="tab-control"
                  v-show="isTabFixed"
                  />
     <scroll class="content"
             ref="scroll"
             :probe-type="3"
             @scroll="contentScroll"
             :pull-up-load="true"
             @pullingUp="loadMore">
       <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
       <home-recommend-view :recommends="recommends"/>
       <feature-view/>
       <tab-control ref="tabControl2"
                    :titles="['流行','新款','精选']"
                    @tabClick="tabClick"/>
       <goods-list :goods="showGoods"/>
     </scroll>

      <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
  //引入子组件
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import FeatureView from "./childComps/FeatureView";

  // 引入公共组件
  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  //引入计算属性和方法的组件
  import {getHomeMultidata,getHomeGoods} from "network/home";
  import {itemListenerMixin,backTopMixin} from "common/mixin";

  export default {
   name:"Home",
   components: {
     HomeSwiper,
     HomeRecommendView,
     FeatureView,
     NavBar,
     TabControl,
     GoodsList,
     Scroll,
   },
    mixins:[itemListenerMixin,backTopMixin],
    data() {
      return{
        // result:null,
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0,
      }
    },
    computed:{
     showGoods() {
       return this.goods[this.currentType].list
     }
    },
    activated() {
     this.$refs.scroll.scrollTo(0,this.saveY,0);
     this.$refs.scroll.refresh()
    },
    deactivated() {
      // this.$refs.scroll.refresh()
     //1,保存Y值
     this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
     //1,请求多个数据
      this.getHomeMultidata()
      //2,请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    destroyed() {
      //2，取消全局事件的监听
      // this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods:{

       //事件监听相关的方法
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
                break
          case 1:
            this.currentType = 'new'
                break
          case 2:
            this.currentType = 'sell'
                break
        }
        //让两个TabControl的currentIndex保持一致
          this.$refs.tabControl1.currentIndex = index;
          this.$refs.tabControl2.currentIndex = index;
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position) {
        //判断BackTop是否显示
        //决定tabControl是否吸顶（position:fixed)
        this.listenShoBackTop(position)
        this.isTabFixed = (-position.y) > this.tabOffsetTop

      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        //获取tabcontrol的offsetTop
        //所有的组件都有一个属性$el:用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;

      },
      // 网络请求相关的方法
       getHomeMultidata() {
         getHomeMultidata().then(res => {
           this.banners = res.data.banner.list;
           this.recommends = res.data.recommend.list;
         });
       },
        getHomeGoods(type) {
         const page = this.goods[type].page + 1
         getHomeGoods(type,page).then(res => {
           this.goods[type].list.push(...res.data.list)
           this.goods[type].page += 1

           //完成上拉加载更多
           this.$refs.scroll.finishPullUp()
      })}
    }
  }
    window.onresize=function(){
      location.reload();
  }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
.home-nav {
  background-color: var(--color-tint);
  color: #fff;


  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*z-index: 9;*/
}
.content{
    height: calc(100% - 93px);
    overflow:hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
.tab-control{
  position: relative;
  z-index: 9;

}


  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/
</style>
