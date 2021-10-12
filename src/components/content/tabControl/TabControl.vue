<template>
    <div class="tab-control">
      <div v-for="(item,index) in titles"
           @click="itemClick(index)"
           :key="index"
           :class="{ ative:index === currentIndex}"
           class="tab-control-item">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
          titles:{
            type:Array,
            default() {
              return []
            }
          }
        },
        data() {
          return {
            currentIndex:0
          }
        },
        methods:{
          itemClick(index) {
            this.currentIndex = index;
            this.$emit('tabClick',index)//子传父的指定组件
          }
        }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .ative{
    color:var(--color-high-text)
  }
  .ative span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>
