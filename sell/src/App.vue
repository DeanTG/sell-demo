<template>
  <div id="app">
    <HeaderView :sellerData="dataContainer"></HeaderView>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderView from './components/Header.vue'
  import Tab from './components/Tab.vue'

  export default {
    components: {
      HeaderView,
      Tab
    },
    data () {
      return {
        dataContainer: {
          seller: {}
        }
      }
    },
    mounted () {
      let _this = this;
      this.$http.get('src/data/data.json').then(function (res) {
        _this.dataContainer.seller = res.data['seller'];
      }).catch(function(err){
        console.log('seller:' + err);
      });
    }
  }
</script>

<style lang="scss">
</style>
