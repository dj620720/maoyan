<template>
  <div id="main">
    <Header title="猫眼电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{$store.state.city.nm}}</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/now" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/next" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <TabBar />
    <router-view name="detail"/>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import { messageBox } from "@/components/JS";
import { setTimeout } from "timers";

export default {
  name: "movie",
  components: {
    Header,
    TabBar
  },
  mounted() {
    setTimeout(() => {
      this.axios.get("/api/getLocation").then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
          var name = res.data.data.nm;
          var id = res.data.data.id;
          if (this.$store.state.city.id == id) {
            return;
          }
          messageBox({
            title: "定位",
            content: name,
            cancel: "取消",
            ok: "切换定位",
            handelCancel() {},
            handelOk() {
              window.localStorage.setItem("nowNm", name);
              window.localStorage.setItem("nowId", id);
              window.location.reload();
            }
          });
        }
      });
    }, 2000);
  }
};
</script>
<style scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}

.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}

.movie_menu .city_name .active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}

.router-link-exact-active {
  color: rgb(229, 72, 71) !important;
}
.router-link-active {
  color: rgb(229, 72, 71) !important;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}

.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}





.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}

.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}

.movie_menu .search_entry .active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}

.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>
