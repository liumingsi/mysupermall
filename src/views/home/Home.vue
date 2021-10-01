<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"/>
      <home-recommend-view :recommends="recommends"/>
      <feature-view/>
      <ul>
        <li>1美女</li>
        <li>2美女</li>
        <li>3美女</li>
        <li>4美女</li>
        <li>5美女</li>
        <li>6美女</li>
        <li>7美女</li>
        <li>8美女</li>
        <li>9美女</li>
        <li>10美女</li>
        <li>11美女</li>
        <li>12美女</li>
        <li>13美女</li>
        <li>14美女</li>
        <li>15美女</li>
        <li>16美女</li>
        <li>17美女</li>
        <li>18美女</li>
        <li>19美女</li>
        <li>20美女</li>
        <li>21美女</li>
        <li>22美女</li>
        <li>23美女</li>
        <li>24美女</li>
        <li>25美女</li>
        <li>26美女</li>
        <li>27美女</li>
        <li>28美女</li>
        <li>29美女</li>
        <li>30美女</li>
        <li>31美女</li>
        <li>32美女</li>
        <li>33美女</li>
        <li>34美女</li>
        <li>35美女</li>
        <li>36美女</li>
        <li>37美女</li>
        <li>38美女</li>
        <li>39美女</li>
        <li>40美女</li>
        <li>41美女</li>
        <li>42美女</li>
        <li>43美女</li>
        <li>44美女</li>
        <li>45美女</li>
        <li>46美女</li>
        <li>47美女</li>
        <li>48美女</li>
        <li>49美女</li>
        <li>50美女</li>
        <li>51美女</li>
        <li>52美女</li>
        <li>53美女</li>
        <li>54美女</li>
        <li>55美女</li>
        <li>56美女</li>
        <li>57美女</li>
        <li>58美女</li>
        <li>59美女</li>
        <li>60美女</li>
        <li>61美女</li>
        <li>62美女</li>
        <li>63美女</li>
        <li>64美女</li>
        <li>65美女</li>
        <li>66美女</li>
        <li>67美女</li>
        <li>68美女</li>
        <li>69美女</li>
        <li>70美女</li>
        <li>71美女</li>
        <li>72美女</li>
        <li>73美女</li>
        <li>74美女</li>
        <li>75美女</li>
        <li>76美女</li>
        <li>77美女</li>
      </ul>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import FeatureView from "./childComps/FeatureView";
  import {getHomeMultidata} from "network/home";


  export default {
   name:"Home",
   components: {
     NavBar,
     HomeSwiper,
     HomeRecommendView,
     FeatureView
   },
    data() {
      return{
        // result:null,
        banners:[],
        recommends:[],

      }
    },
    created() {
     //1,请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        // this.result = res
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }

  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
