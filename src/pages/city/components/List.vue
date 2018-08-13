<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">苏州</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">上海</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">广州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                    <div class="item border-bottom">苏州</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll';

export default {
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper);
    }
};
</script>
<style lang="less" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
.list {
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}
.title {
  line-height: 0.54rem;
  padding-left: 0.2rem;
  font-size: 0.26rem;
  color: #666;
  background-color: #eee;
}
.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  padding: 0.1rem 0;
  margin: 0.1rem;
  border-radius: 0.06rem;
  border: 0.02rem solid #ccc;
  text-align: center;
}
.item-list {

}
.item {
    line-height: .76rem;
    padding-left: .2rem;
}
</style>
