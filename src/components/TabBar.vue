<template>
    <div class="tabstyle">
        <el-row>
            <el-col :span="24">
                <div class="tabBox">
                    <router-link :to="{ path: '/' }" class="hidden-xs-only">
                        <div><span class="icon iconfont">&#xe771;</span>首页</div>
                    </router-link>

                    <router-link :to="{ path: '/label' }" class="hidden-xs-only">
                        <div> <span class="icon iconfont">&#xe680;</span>标签</div>
                    </router-link>

                    <router-link :to="{ path: '/pigeonhole' }" class="hidden-xs-only">
                        <div><span class="icon iconfont">&#xe748;</span>归档</div>
                    </router-link>

                    <router-link :to="{ path: '/search' }" class="hidden-xs-only">
                        <div><span class="icon iconfont">&#xe612;</span>search</div>
                    </router-link>
                    <div style="margin-left: 20px;" class="hidden-sm-and-up" @click="silder"><span class="icon iconfont">&#xea84;</span></div>
                    <div style="position: absolute;right: 10px;">
                        <img src="https://xushao.top/wp-content/uploads/2023/03/2023032815263825.png" alt=""
                            style="width: 60px;">
                    </div>
                </div>
              
            </el-col>
        </el-row>


    </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import 'element-plus/theme-chalk/display.css'
import Silder from './Silder.vue'

import mainSfdfdtore from "../stores/counter";
const mainStore = mainSfdfdtore();
// console.log(mainStore);
const silder = (() => {
    mainStore.increment()
    console.log(mainStore);
})
</script>
<style  scoped>
.router-link-active {
    text-decoration: none;
    color: #fff !important;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
}

a {
    text-decoration: none;
    color: #555;
    margin: 0 20px;
    padding: 5px 10px;
}


.tabBox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
}

.tabBox>div {
    margin-left: 40px;
    color: #555;
    font-size: 14px;
    cursor: pointer;
    padding: 3px 10px;

}

.active {
    background-color: rgba(47, 47, 47);
    color: #fff !important;

}

.searchInput {
    background: #fff;
    outline: none;
    border: none;
    margin-left: 50px;
}

.SearchBtn {
    background-color: rgba(236, 79, 26);
    color: #fff;
    border: none;
    margin-left: 30px;
}

.tabRight {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
</style>