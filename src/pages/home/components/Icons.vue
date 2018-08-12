<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img-contain">
                        <img class="icon-img" :src="item.imgUrl" />
                    </div>
                    <p class="icon-text">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

export default {
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                autoplay: false
            }
        };
    },
    computed: {
        pages() {
            const pages = [];
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        }
    }
};
</script>
<style>
.icons .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
</style>
<style lang="less" scoped>
.icons {
  height: 0;
  padding-bottom: 50%;
  margin-top: .2rem;
  overflow: hidden;
}
.icon {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  overflow: hidden;
  &-img-contain {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;
  }
  &-img {
    display: block;
    margin: 0 auto;
    height: 100%;
  }
  &-text {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: #333;
    .ellipsis();
  }
}
</style>
