<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll';

export default {
    props: {
        cities: Object
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.search, {click: true});
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        };
    },
    computed: {
        hasNoData() {
            return !this.list.length;
        }
    },
    watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (!this.keyword) {
                this.list = [];
                return;
            }
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities) {
                    this.cities[i].forEach((item) => {
                        if (item.spell.indexOf(this.keyword) > -1 ||
                            item.name.indexOf(this.keyword) > -1) {
                            result.push(item);
                        }
                    });
                }
                this.list = result;
            }, 100);
        }
    },
    methods: {
        handleCityClick(city) {
            // this.$store.dispatch('changeCity', city);
            this.$store.commit('changeCity', city);
            this.$router.push('/');
        }
    }
};
</script>
<style lang="less" scoped>
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: @bgColor;
  &-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0 0.1rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content {
  position: absolute;
  z-index: 1;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-color: #eee;
}
.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  background-color: #fff;
  color: #666;
}
</style>
