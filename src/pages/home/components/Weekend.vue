<template>
    <div>
        <div class="weenkend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of weekendList" :key="item.id">
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
import weekendImg01 from '@/assets/imgs/weekend_01.jpg';
import weekendImg02 from '@/assets/imgs/weekend_02.jpg';
import weekendImg03 from '@/assets/imgs/weekend_03.jpg';
import weekendImg04 from '@/assets/imgs/weekend_04.jpg';
import weekendImg05 from '@/assets/imgs/weekend_05.jpg';

export default {
    data() {
        return {
            weekendList: [
                {
                    id: '001',
                    imgUrl: weekendImg01,
                    title: '北京温泉排行榜',
                    desc: '细数北京温泉，温暖你的冬天'
                },
                {
                    id: '002',
                    imgUrl: weekendImg02,
                    title: '北京必游TOP10',
                    desc: '来北京必去的景点非这些地方莫属'
                },
                {
                    id: '003',
                    imgUrl: weekendImg03,
                    title: '寻找北京的皇城范儿',
                    desc: '数百年的宫廷庙宇，至今依旧威严霸气'
                },
                {
                    id: '004',
                    imgUrl: weekendImg04,
                    title: '学生最爱的博物馆',
                    desc: '周末干嘛？北京很多博物馆已经免费开放啦'
                },
                {
                    id: '005',
                    imgUrl: weekendImg05,
                    title: '儿童剧场，孩子的乐园',
                    desc: '带宝贝观看演出，近距离体验艺术的无穷魅力'
                }
            ]
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
      padding-bottom: 33.9%;
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
