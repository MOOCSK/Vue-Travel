<template>
    <div class="banner">
        <img class="banner-img" src="https://note.youdao.com/yws/api/personal/file/C17CB0217C2D45D9BC40E2889248E9DD?method=download&shareKey=01fc6a10096e3d7f4517f7865ae202fa" />
        <div class="banner-info">
            <div class="banner-title">
                大连圣亚海洋世界（AAAA景区）
            </div>
            <div class="banner-number">
                <span class="iconfont icon-img"></span>
                39
            </div>
        </div>
    </div>
</template>
<script>
export default {

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
