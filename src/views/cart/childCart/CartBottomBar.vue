<template>
<div class="bottom-bar">
  <div class="check-content">
    <check-button
      :is-checked="isSelecAll"
      class="check-button"
      @click.native="checkClick"/>
    <span>全选</span>
  </div>

  <div class="price" @click="calcClick">
    合计:{{totalPrice}}
  </div>

  <div class="calculate">
    去计算({{checkLength}})
  </div>
</div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'
    export default {
        name: "CartBottomBar",
        components:{
          CheckButton
        },
        computed:{
          ...mapGetters(['cartList']),
          totalPrice() {
            return '￥' + this.cartList.filter(item => {
              return item.checked
            }).reduce((preValue,item) => {
              return preValue + item.price * item.count
            },0).toFixed(2)
          },
          checkLength() {
            return this.cartList.filter(item => item.checked).length
          },
          isSelecAll(){
            if(this.cartList.length === 0) return false

            //1,使用filter
            // return !(this.cartList.filter(item => !item.checked).length)

            //2,使用find
            //   return !this.cartList.find(item => console.log(item.checked))

            // 3,使用普通遍历
            for(let item of this.cartList){
              if(!item.checked) {
                return false
              }
            }
            return true
          }

        },
       methods: {
          checkClick() {
            if(this.isSelecAll){//全部选中
              this.cartList.forEach(item => item.checked =false)
            }else {
              this.cartList.forEach(item => item.checked = true)
            }
          },
          calcClick(){
            if(!this.isSelecAll){
              this.$toast.show('请选择压迫购买的商品',2000)
            }
          }
        }
    }
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    line-height: 40px;

    position: relative;
    display: flex;


    background-color: #eee;

    font-size: 14px;

  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;

   }
  .check-button{
    width: 16px;
    height: 16px;
    line-height: 16px;
    margin-right: 9px;
  }
  .price{
    margin-left: 20px;
    flex: 1;
  }
  .calculate{
    width: 90px;
    background: pink;
    color: #fff;
    text-align: center;

  }

</style>
