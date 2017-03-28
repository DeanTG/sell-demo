<template>
  <ul class="nav">
    <router-link to='/product' tag="li" active-class="current">商品</router-link>
    <router-link to='/comment' tag="li" active-class="current">评论</router-link>
    <router-link to='/seller' tag="li" active-class="current">商家</router-link>
  </ul>
</template>
<script>
  export default {
  }
</script>
<style lang="scss">
  .nav{
    display: flex;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    &>li{
      flex: 1;
      text-align: center;
      color: rgb(77, 85, 93);
      &.current{
        color: rgb(240, 20, 20);
      }
    }
  }
</style>