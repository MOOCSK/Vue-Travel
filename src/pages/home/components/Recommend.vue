<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
import recommendImg01 from '@/assets/imgs/recommend_01.jpg';
import recommendImg02 from '@/assets/imgs/recommend_02.jpg';
import recommendImg03 from '@/assets/imgs/recommend_03.jpg';
import recommendImg04 from '@/assets/imgs/recommend_04.jpg';
import recommendImg05 from '@/assets/imgs/recommend_05.jpg';

export default {
    data() {
        return {
            recommendList: [
                {
                    id: '001',
                    imgUrl: recommendImg01,
                    title: '故宫',
                    desc: '东方宫殿建筑代表，世界宫殿建筑典范'
                },
                {
                    id: '002',
                    imgUrl: recommendImg02,
                    title: '南山滑雪场',
                    desc: '北京专业级滑雪圣地'
                },
                {
                    id: '003',
                    imgUrl: recommendImg03,
                    title: '天安门广场',
                    desc: '我爱北京天安门，天安门上太阳升'
                },
                {
                    id: '004',
                    imgUrl: recommendImg04,
                    title: '水立方',
                    desc: '中国的荣耀，阳光下的晶莹水滴'
                },
                {
                    id: '005',
                    imgUrl: recommendImg05,
                    title: '温都水城养生馆',
                    desc: '各种亚热带植物掩映其间仿佛置身热带雨林'
                }
            ]
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
