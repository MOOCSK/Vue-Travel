<template>
    <div class="header">
        <div class="iconfont icon-fanhui back-icon" @click="goBack()"></div>
        城市选择
    </div>
</template>
<script>
export default {
    methods: {
        goBack() {
            window.history.back();
        }
    }
};
</script>
<style lang="less" scoped>
.header {
  position: relative;
  height: @headerHeight;
  line-height: @headerHeight;
  text-align: center;
  font-size: 0.32rem;
  overflow: hidden;
  color: #fff;
  background-color: @bgColor;
}
.back-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
</style>
