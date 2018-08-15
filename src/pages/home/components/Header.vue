<template>
<div class="header">
    <div class="header-left">
        <div class="iconfont icon-fanhui header-left__icon"></div>
    </div>
    <div class="header-input">
        <span class="iconfont icon-sousuo"></span>
        输入城市/景点/游玩主题
    </div>
    <router-link tag="div" to="city" class="header-right">
            <span>{{city}}</span>
            <span class="iconfont icon-jiantou header-right__icon"></span>
    </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['city'])
    }
};
</script>

<style lang="less" scoped>
@prefix-header: header;
.@{prefix-header} {
    display: flex;
    justify-content: center;
    height: @headerHeight;
    line-height: @headerHeight;
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
        min-width: 1.24rem;
        padding: 0 .1rem;
        text-align: center;
        font-size: 0;
        color: white;
        span {
            font-size: .28rem;
        }
        &__icon {
            padding-left: .04rem;
            font-size: .24rem;
        }
    }
}
</style>
