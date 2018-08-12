<template>
<div class="header">
    <div class="header-left">
        <div class="iconfont icon-fanhui header-left__icon"></div>
    </div>
    <div class="header-input">
        <span class="iconfont icon-sousuo"></span>
        输入城市/景点/游玩主题
    </div>
    <div class="header-right">
        <span>{{city}}</span>
        <span class="iconfont icon-jiantou header-right__icon"></span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        city: String
    }
};
</script>

<style lang="less" scoped>
@prefix-header: header;
.@{prefix-header} {
    display: flex;
    justify-content: center;
    height: .86rem;
    line-height: .86rem;
    color: #fff;
    background-color: @bgColor;
    &-left {
        flex: none;
        width: .64rem;
        &__icon {
            text-align: center;
            font-size: .4rem;
        }
    }
    &-input {
        flex: auto;
        height: .64rem;
        line-height: .64rem;
        padding-left: .2rem;
        margin-top: .11rem;
        margin-left: .2rem;
        border-radius: .1rem;
        color: #ccc;
        background-color: #fff;
    }
    &-right {
        flex: none;
        width: 1.24rem;
        text-align: center;
        font-size: 0;
        span {
            font-size: .28rem;
        }
        &__icon {
            font-size: .24rem;
        }
    }
}
</style>
