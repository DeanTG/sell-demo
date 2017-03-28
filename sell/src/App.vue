<template>
  <div id="app">
    <HeaderView :sellerData="dataContainer"></HeaderView>
  </div>
</template>

<script>
  import HeaderView from './components/Header.vue'

  export default {
    components: {
      HeaderView
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
