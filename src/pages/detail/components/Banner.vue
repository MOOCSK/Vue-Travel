<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">
                    {{sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont icon-img"></span>
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
        </fade-animation>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary';
import FadeAnimation from 'common/fade/Fade';

export default {
    components: {
        CommonGallary,
        FadeAnimation
    },
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data() {
        return {
            showGallary: false
        };
    },
    methods: {
        handleBannerClick() {
            this.showGallary = true;
        },
        handleGallaryClose() {
            this.showGallary = false;
        }
    }
};
</script>
<style lang="less" scoped>
    .banner {
        position: relative;
        height: 0;
        padding-bottom: 55%;
        overflow: hidden;
    }
    .banner-img {
        width: 100%;
    }
    .banner-info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        line-height: .6rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    }
    .banner-title {
        flex: auto;
        padding: 0 .2rem;
        font-size: .32rem;
    }
    .banner-number {
        height: .32rem;
        line-height: .32rem;
        padding: 0 .4rem;
        margin-top: .14rem;
        border-radius: .2rem;
        font-size: .24rem;
        background-color: rgba(0, 0, 0, .8);
        .iconfont {
            font-size: .24rem;
        }
    }
</style>
