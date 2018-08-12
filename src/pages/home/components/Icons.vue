<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id" @click="item.clickHandle">
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
import Icon01 from "@/assets/imgs/icon_01.png";
import Icon02 from "@/assets/imgs/icon_02.png";
import Icon03 from "@/assets/imgs/icon_03.png";
import Icon04 from "@/assets/imgs/icon_04.png";
import Icon05 from "@/assets/imgs/icon_05.png";
import Icon06 from "@/assets/imgs/icon_06.png";
import Icon07 from "@/assets/imgs/icon_07.png";
import Icon08 from "@/assets/imgs/icon_08.png";
import Icon09 from "@/assets/imgs/icon_09.png";

export default {
    data() {
        return {
            iconList: [
                {
                    id: "001",
                    imgUrl: Icon01,
                    desc: "景点门票",
                    clickHandle() {
                        alert("暂未开发");
                    }
                },
                {
                    id: "002",
                    imgUrl: Icon02,
                    desc: "滑雪季",
                    clickHandle() {
                        alert("暂未开发");
                    }
                },
                {
                    id: "003",
                    imgUrl: Icon03,
                    desc: "泡温泉",
                    clickHandle() {
                        alert("暂未开发");
                    }
                },
                {
                    id: "004",
                    imgUrl: Icon04,
                    desc: "动植园",
                    clickHandle() {
                        alert("暂未开发");
                    }
                },
                {
                    id: "005",
                    imgUrl: Icon05,
                    desc: "游乐园",
                    clickHandle() {
                        alert("暂未开发");
                    }
                },
                {
                    id: "006",
                    imgUrl: Icon06,
                    desc: "必游榜单",
                    clickHandle() {
                        alert("暂未开发");
                    }
                },
                {
                    id: "007",
                    imgUrl: Icon07,
                    desc: "演出",
                    clickHandle() {
                        alert("暂未开发");
                    }
                },
                {
                    id: "008",
                    imgUrl: Icon08,
                    desc: "城市观光",
                    clickHandle() {
                        alert("暂未开发");
                    }
                },
                {
                    id: "009",
                    imgUrl: Icon09,
                    desc: "一日游",
                    clickHandle() {
                        alert("暂未开发");
                    }
                }
            ]
        };
    },
    computed: {
        pages() {
            const pages = [];
            this.iconList.forEach((item, index) => {
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
