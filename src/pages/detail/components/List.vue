<template>
    <div>
        <div class="item"
            v-for="(item, index) of list"
            :key="index">
            <div class="item-title border-bottom">
                <span class="iconfont icon-tianmaohuopiaotongxing"></span>
                <span>{{item.title}}</span>
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
};
</script>
<style lang="less" scoped>
.item-title {
    display: flex;
    align-items: center;
    padding: 0 .2rem;
    line-height: .8rem;
    font-size: .32rem;
    .iconfont {
        padding-right: .1rem;
        font-size: .48rem;
        color: #00bcd4;
    }
}
.item-children {
    padding: 0 .2rem;
}
</style>
