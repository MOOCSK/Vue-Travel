<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) of imgs"
                              :key="index">
                    <img class="gallary-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imgs: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        };
    },
    methods: {
        handleGallaryClick() {
            this.$emit('close');
        }
    }
};
</script>
<style>
    .container .swiper-container {
        overflow: inherit;
    }
</style>
<style lang="less" scoped>
    .container {
        position: fixed;
        z-index: 99;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #000;
    }
    .wrapper {
        width: 100%;
        height: 0;
        padding-bottom: 99%;
        background-color: #fff;
    }
    .gallary-img {
        width: 100%;
    }
    .swiper-pagination {
        color: #fff;
        bottom: -1rem;
    }
</style>
