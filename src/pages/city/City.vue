<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphabet from './components/Alphabet';

export default {
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    mounted() {
        this.getCityInfo();
    },
    data() {
        return {
            cities: {},
            hotCities: []
        };
    },
    methods: {
        getCityInfo() {
            axios.get('/api/city.json').then(res => {
                res = res.data;
                if (res.ret && res.data) {
                    const data = res.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>

</style>
