<template>
    <div class="cart">
<!--      导航-->
      <nav-bar class="cart-nav">
        <div slot="center">购物街({{length}})</div>
      </nav-bar>
<!--      商品的列表-->
      <cart-list/>

<!--      底部汇总-->
      <cart-bottom-bar/>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childCart/CartList";
  import CartBottomBar from "./childCart/CartBottomBar";


  import {mapGetters} from 'vuex'

  export default {
     name:"Cart",
     components:{
       NavBar,
       CartList,
       CartBottomBar,
     },
    computed:{
       // ...mapGetters
       //两种语法
      // 数组引入方法
      // ...mapGetters(['cartLength','carList'])
      // 对象属性方法导入
      ...mapGetters({
        length:'cartLength',
        list:'cartList'
      })
    }
  }
</script>

<style scoped>
  .cart-nav {
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: 700;
  }
  .cart{
    height: 100vh;
  }
</style>
