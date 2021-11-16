<template>
    <div id="detail">
      <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
      <scroll class="content" ref="scroll"
              :probe-type="3"
              @scroll="contentScroll">
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
        <detail-param-info ref="params" :param-info="paramInfo"/>
        <detail-comment-info ref="comment" :comment-info="commentInfo"/>
        <goods-list ref="recommend" :goods="recommends"/>
      </scroll>
      <detail-bottom-bar @addCart="addToCart"/>
      <back-top @click.native="backTop" v-show="isShowBackTop"/>
    </div>
</template>

<script>
    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailShopInfo from "./childComps/DetailShopInfo";
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
    import DetailParamInfo from "./childComps/DetailParamInfo";
    import DetailCommentInfo from "./childComps/DetailCommentInfo";
    import DetailBottomBar from "./childComps/DetailBottomBar";

    import Scroll from "components/common/scroll/Scroll";
    import GoodsList from "components/content/goods/GoodsList";

    import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail";
    import {itemListenerMixin,backTopMixin} from "common/mixin";
    import {debounce} from "../../common/uitle";

    import {mapActions} from 'vuex'

    export default {
        name: "Detail",
        components:{
           DetailNavBar,
           DetailSwiper,
           DetailBaseInfo,
           DetailShopInfo,
           DetailGoodsInfo,
           DetailParamInfo,
           DetailCommentInfo,
           DetailBottomBar,
           Scroll,
           GoodsList,
        },
        mixins:[itemListenerMixin,backTopMixin],
        data() {
          return {
            iid:null,
            topImages:[],
            goods: {},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            getThemeTopY:null,
            currentIndex:0,
            message:'',
            show:false
            }
         },
        created() {
          //1,保存传入的iid
           this.iid = this.$route.params.iid

          //2,根据iid请求详情页的数据
          getDetail(this.iid).then(res => {
            //1,获取顶部的图片轮播数据

            this.topImages = res.result.itemInfo.topImages;

            //2,获取商品信息
            const data = res.result;
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

            //3,创建店铺信息的对象
            this.shop = new Shop(data.shopInfo)

            //4,保存商品的详情数据
            this.detailInfo = data.detailInfo;

            //5,获取参数的信息
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

            //6,取出评论信息
            if(data.rate.cRate !== 0) {
              this.commentInfo = data.rate.list[0]
            }
          })

          //3,请求推荐数据
          getRecommend().then(res => {
            this.recommends = res.data.list
          })

          //4,给getThemeTopY赋值(给this。themeTopYs赋值的操作进行防抖)
          this.getThemeTopY = debounce(() => {
            this.themeTopYs = []
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            this.themeTopYs.push(Number.MAX_VALUE)
          })
        },
      updated() {

      },
      destroyed() {
          this.$bus.$off('itemImageLoad',this.itemImgListener)
      },
      methods:{
          ...mapActions(['addCart']),
          imageLoad() {
            this.$refs.scroll.refresh()
              this.getThemeTopY()
          },
          titleClick(index) {
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
          },
          contentScroll(position){
            //1,获取y值
            const positionY = -position.y
            //2,positionY和主题中值进行对比
            let length = this.themeTopYs.length
            for(let i = 0;i < length-1;i++) {
              if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
                this.currentIndex = i;
                this.$refs.nav.currentIndex = this.currentIndex
              }

              //3,是否显示回到顶部
              this.listenShoBackTop(position)
            }
          },
          addToCart() {
            //1,获取购物车需要展示的商品信息
              const product = {};
              product.image = this.topImages[0];
              product.title = this.goods.title;
              product.desc = this.goods.desc;
              product.price = this.goods.realPrice;
              product.iid = this.iid;
            //2,将商品添加到购物车里(方法:1，mapActions 2,Promise
            //this.$store.cartList.push(product)
            // this.$store.commit('addCart',product)
            // 第一种方法
            this.addCart(product).then(res => {
              // this.show = true;
              // this.message = res;
              // setTimeout(() => {
              //   this.show = false;
              //   this.message = ''
              // },1000)
              // console.log(res);
              this.$toast.show(res,2000)
            })
              // 第二种方法
            // this.$store.dispatch('addCart',product).then(res => {
            //   console.log(res);
            // })

          }

        }
      }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 49px);
    background-color: #fff;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;

  }
</style>
