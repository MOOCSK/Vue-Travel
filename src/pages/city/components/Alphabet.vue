<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick">{{item}}</li>
    </ul>
</template>
<script>
export default {
    props: {
        cities: Object
    },
    data() {
        return {
            touchStatus: false
        };
    },
    computed: {
        letters() {
            const letters = [];
            for (let i in this.cities) {
                letters.push(i);
            }
            return letters;
        }
    },
    methods: {
        handleLetterClick(event) {
            this.$emit('change', event.target.innerHTML);
        },
        handleTouchStart() {
            this.touchStatus = true;
        },
        handleTouchMove(event) {
            if (this.touchStatus) {
                const startY = this.$refs['A'][0].offsetTop;
                const touchY = event.touches[0].clientY - 79;
                const index = Math.floor((touchY - startY) / 20);
                if (index >= 0 && index < this.letters.length) {
                    this.$emit('change', this.letters[index]);
                }
            }
        },
        handleTouchEnd() {
            this.touchStatus = false;
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
