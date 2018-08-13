<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
    </ul>
</template>
<script>
export default {

};
</script>
<style lang="less" scoped>
.list {
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: .4rem;
}
.item {
    line-height: .4rem;
    text-align: center;
    color: @bgColor;
}
</style>
