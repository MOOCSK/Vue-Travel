<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
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
.recommend {
  &-title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    text-indent: 0.2rem;
    background-color: #eee;
  }
}
.item {
  display: flex;
  box-sizing: border-box;
  height: 1.9rem;
  overflow: hidden;
  &-img {
    flex: none;
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  &-info {
    flex: auto;
    min-width: 0;
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
  &-button {
    padding: 0 0.2rem;
    margin-top: 0.2rem;
    border-radius: 0.06rem;
    line-height: 0.44rem;
    color: #fff;
    background-color: #ff9300;
  }
}
</style>
