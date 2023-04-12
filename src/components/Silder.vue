<template>
    <div>
        <div v-show="mainStore.count" style="background-color: #fff;text-align: center;padding: 15px 0;">
            <div style="margin-left: 0;" class="hidden-sm-and-up" @click="silder"><span class="icon iconfont">&#xea84;</span></div>
        </div>
        <div class="SilderBox">
            <div style="display: flex;flex-direction: column;text-align: center;color: #FFF;">
                <div style="font-size: 20px;padding: 10px;">简记</div>
                <div v-text="hito.hitokoto" style="font-size: 12px;color: #ddd;"></div>
            </div>

        </div>
        <div class="silderBar">
            <router-link :to="{ path: '/' }">
                <div><span class="icon iconfont">&#xe771;</span>首页</div>
            </router-link>

            <router-link :to="{ path: '/label' }">
                <div> <span class="icon iconfont">&#xe680;</span>标签</div>
            </router-link>

            <router-link :to="{ path: '/pigeonhole' }">
                <div><span class="icon iconfont">&#xe748;</span>归档</div>
            </router-link>

            <router-link :to="{ path: '/search' }">
                <div><span class="icon iconfont">&#xe612;</span>search</div>
            </router-link>
        </div>
        <div class="SilderAa">
            <div class="hjs">
                <span @click="fnRoute(1)" :class="{ active: hito.type === 1 }">工具目录</span>
                <span @click="fnRoute(2)" :class="{ active: hito.type === 2 }">站点概述</span>
            </div>
            <div>
                <div v-show="hito.type === 1" style="    display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            /* align-content: stretch; */
            flex-wrap: nowrap;
            align-items: center;">
                    <a href="https://cupfox.app/" target="_blank">茶杯狐</a>
                    <a href="https://go.itab.link/" target="_blank">新标签页</a>
                    <a href="" target="_blank"></a>
                    <a href="" target="_blank"></a>
                    <a href="" target="_blank"></a>
                </div>
                <div v-show="hito.type === 2" class="jkdl02">
                    <img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=1217671134&amp;s=640">
                    <div style="margin-top: 10px;    color: var(--text-color);
            font-weight: 600;">ZiXu</div>

                    <div style="display: flex;">

                        <div class="huizong">
                            <span class="text01">99</span> <span><span class="icon iconfont"
                                    style="font-size: 12px;">&#xe6c8;</span><span>日志</span> </span>
                        </div>
                        <div class="huizong"><span class="text01">99</span><span><span class="icon iconfont"
                                    style="font-size: 12px;">&#xe621;</span> <span>分类</span> </span></div>
                        <div class="huizong"><span class="text01">99</span><span><span class="icon iconfont"
                                    style="font-size: 12px;">&#xf306;</span> <span>标签</span> </span> </div>
                    </div>
                    <div style="font-size: 13px;color: #555;" class="hgujk">
                        <a href="https://github.com/XUSHAO11/" style="padding: 0;"><span> <span class="icon iconfont">&#xe6b7;</span>Github</span></a>
                        <span> <span class="icon iconfont">&#xe794;</span>Telegram</span>


                    </div>
                    <div style="font-size: 13px;color: #555;" class="jkl">
                        <div style="margin-bottom: 10px;">RSS</div>
                        <div style="font-size: 14px;"><span class="icon iconfont">&#xe636;</span>友链 </div>
                        <a href="https://xushao.top">
                            <div style="text-decoration: underline"> 梓旭</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios"
import { reactive } from "vue"
const hito = reactive({
    hitokoto: "",
    type: 2
})
axios.post("https://v1.hitokoto.cn").then((res) => {
    hito.hitokoto = res.data.hitokoto
})

const fnRoute = ((m) => {
    hito.type = m
})

import mainSfdfdtore from "../stores/counter";
const mainStore = mainSfdfdtore();
// console.log(mainStore);
const silder = (() => {
    mainStore.increment()
    console.log(mainStore);
})

const djk = (() => {
    mainStore.increment()
})
</script>

<style scoped>
.router-link-active {
    text-decoration: none;
    color: #d11414;
}

a {
    text-decoration: none;
    color: #555;
    /* margin: 20px; */
    padding: 5px 10px;
}

a:hover {
    text-shadow: 2px 2px;
}

.active {
    border-bottom: 1px solid #fc6423;
    color: #fc6423;
}

.jkl {
    padding: 10px 0;
    text-align: center;
}

.hgujk {
    margin: 10px 0;

}
.hgujk>span{
    padding: 0 5px;
}

.huizong {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 3px;
}

.huizong>.text01 {
    color: var(--text-color);
    font-weight: 600;
    font-size: 16px;
}

.huizong>:nth-child(2) {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
}

.SilderBox {
    /* margin-top: 20px; */
    background-image: linear-gradient(135deg, #CE9FFC 10%, #7367F0 100%);
    padding: 20px 0;
    border-radius: 5px 5px 0 0;
    margin-top: 20px;
}

.silderBar {
    background-color: #fff;
    padding: 20px 30px;
    font-size: 13px;
    color: #555;
    border-radius: 0 0 5px 5px;
    position: relative;
    z-index: 99;
}

.silderBar>div {
    padding: 10px 0;
}

.SilderAa {
    padding: 20px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 5px;
    position: relative;
    z-index: 99;
    cursor: pointer;
}

.hjs {
    font-size: 12px;
    color: #555;
    display: flex;
    justify-content: center
}

.hjs>span {
    padding: 0 3px;
}

.avatar {
    width: 100px;
    border-radius: 100%;
    margin-top: 20px;
    border: 1px solid #eee;
    padding: 2px;
}

.jkdl02 {
    display: flex;
    flex-direction: column;
    align-items: center;
}</style>