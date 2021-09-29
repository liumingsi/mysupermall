<template>
  <tab-bar>
    <tab-bar-itme path="/home" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home2.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-itme>
    <tab-bar-itme path="/category" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/Category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/Category2.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-itme>
    <tab-bar-itme path="/cart" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/shop-cart-1.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shop-cart-2.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-itme>
    <tab-bar-itme path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/Profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/Profile2.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-itme>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItme from "components/common/tabbar/TabBarItme";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItme
    }
  }
</script>

<style scoped>

</style>
