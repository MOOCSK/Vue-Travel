<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{currentyCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';

export default {
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper, {click: true});
    },
    computed: {
        ...mapState({
            currentyCity: 'city'
        })
    },
    watch: {
        letter() {
            if (this.letter) {
                const ele = this.$refs[this.letter][0];
                this.scroll.scrollToElement(ele);
            }
        }
    },
    methods: {
        handleCityClick(city) {
            // this.$store.dispatch('changeCity', city);
            // this.$store.commit('changeCity', city);
            this.changeCity(city);
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    }
};
</script>
<style lang="less" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
.list {
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}
.title {
  line-height: 0.54rem;
  padding-left: 0.2rem;
  font-size: 0.26rem;
  color: #666;
  background-color: #eee;
}
.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  padding: 0.1rem 0;
  margin: 0.1rem;
  border-radius: 0.06rem;
  border: 0.02rem solid #ccc;
  text-align: center;
}
.item-list {

}
.item {
    line-height: .76rem;
    padding-left: .2rem;
}
</style>
