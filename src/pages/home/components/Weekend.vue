<template>
    <div>
        <div class="weenkend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        list: Array
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="less" scoped>
.weenkend {
  &-title {
    line-height: 0.8rem;
    text-indent: 0.2rem;
    background-color: #eee;
  }
}
.item {
  &-img-wrapper {
      height: 0;
      padding-bottom: 37.9%;
      overflow: hidden;
  }
  &-img {
    width: 100%;
  }
  &-info {
    padding: 0.1rem;
  }
  &-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    .ellipsis();
  }
  &-desc {
    line-height: 0.4rem;
    color: #ccc;
    .ellipsis();
  }
}
</style>
