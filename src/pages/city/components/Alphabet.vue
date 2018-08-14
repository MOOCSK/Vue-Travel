<template>
    <ul class="list">
        <li class="item"
            v-for="(item, key) of cities"
            :key="key"
            @click="handleLetterClick">{{key}}</li>
    </ul>
</template>
<script>
export default {
    props: {
        cities: Object
    },
    methods: {
        handleLetterClick(event) {
            this.$emit('change', event.target.innerHTML);
        }
    }
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
