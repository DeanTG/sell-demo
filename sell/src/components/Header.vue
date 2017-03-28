<template>
  <header id="header" class="header">
    <div class="background">
      <img :src="sellerData.seller.avatar" width="100%" height="100%">
    </div>
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="sellerData.seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{sellerData.seller.name}}</span>
        </div>
        <div class="description">
          {{sellerData.seller.description}}/{{sellerData.seller.deliveryTime}}分钟送达
        </div>
        <div v-if="sellerData.seller.supports" class="support">
          <span class="icon" :class="classMap[sellerData.seller.supports[0].type]"></span>
          <span class="text">{{sellerData.seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="sellerData.seller.supports" class="support-count">
        <span class="count">{{sellerData.seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{sellerData.seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </header>
</template>
<script>
  export default {
    data () {
      return {
        classMap: ['decrease','discount','guarantee','invoice','special']
      }
    },
    props: [
      'sellerData'
    ]
  }
</script>
<style lang="scss">
  @import '../assets/css/icon.css';
  @mixin bg-image($name){
    background-image: url('../assets/img/'+$name+'.png');
  }

  .header{
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7, 17, 27, 0.5);
    .background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px) ;
    }
    .content-wrapper{
      position: relative;
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar{
        display: inline-block;
        vertical-align: top;
        img{
          border-radius: 2px;
        }    
      }
      .content{
        display: inline-block;
        margin-left: 16px;
        .title{
          margin: 2px 0 8px 0;
          .brand{
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            @include bg-image('brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .name{
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold; 
          }
        }
        .description{
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support{
          .icon{
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease{
              @include bg-image('decrease');
            }
            &.discount{
              @include bg-image('discount');
            }
            &.guarantee{
              @include bg-image('discount');
            }
            &.invoice{
              @include bg-image('invoice');
            }
            &.special{
              @include bg-image('special');
            }
          }
        }
        .text{
          line-height: 12px;
          font-size: 10px;
        }   
      }    
      .support-count{
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background: rgba(0, 0, 0, 0.2);
        text-align: center;
        .count{
          vertical-align: top;
          font-size: 10px;
        }
        .icon-keyboard_arrow_right{
          margin-left: 2px;
          line-height: 24px;
          font-size: 10px;
        }
      }   
    }
    .bulletin-wrapper{
      position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: rgba(7, 17, 27, 0.2);
      .bulletin-title{
        display: inline-block;
        vertical-align: top;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        @include bg-image('bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .bulletin-text{
        vertical-align: top;
        margin: 0 4px;
        font-size: 10px;
      }
      .icon-keyboard_arrow_right{
        position: absolute;
        font-size: 10px;
        right: 12px;
        top: 8px;
      }
    }
  }
</style>