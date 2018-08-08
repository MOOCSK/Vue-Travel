<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import Img01 from '@/assets/imgs/img_01.jpg';
import Img02 from '@/assets/imgs/img_02.jpg';

export default {
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl: Img01
                },
                {
                    id: '0002',
                    imgUrl: Img02
                }
            ]
        };
    }
};
</script>

<style>
.wrapper .swiper-pagination-bullet-active {
    background-color: #fff;
}
</style>
<style lang="less" scoped>
.wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 25.6%;
    overflow: hidden;
    background-color: #ccc;
}
.swiper-img {
    width: 100%;
}
</style>
