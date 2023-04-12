<template>
  <div>
    <div style="padding:0 20px 20px 20px;">
      <div class="stars-space">
              <div class="star star-a"></div>
              <div class="star star-b"></div>
              <div class="star star-c"></div>
              <div class="star star-d"></div>
              <div class="star star-e"></div>
              <div class="star star-f"></div>
              <div class="star star-g"></div>
              <div class="star star-h"></div>
            </div>
      <div class="swipe">
        <el-carousel indicator-position="none" :interval="4000" type="card" height="150px">
          <el-carousel-item v-for="item in imgArr" :key="item">
            <img style="width: 100%;height: 100%;" :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <el-row>
      <!-- 侧边栏 -->

      <div style="display: flex;">
        <!-- 内容 -->

        <!-- <el-col> -->
        <div class="right-content">
          <div class="content">
            <!-- 轮播 -->

            <!-- 工具箱---------------------- -->
            <div>
              <div style="text-align: center;">

                <h2 style="margin: 20px;">工具箱</h2>
              </div>
              <!-- 右边内容-中间 -->
              <div class="right-main">
                <el-row>
                  <el-col :span="8" v-for="item in MiddleList" :key="item.id">
                    <div
                      style=" padding: 10px;box-sizing: border-box; display: flex;flex-direction: column;justify-content: space-around; height: 100px;">
                      <div class="right-middle-list">
                        <div><img style="border-radius: 100%; width: 50px;height: 50px;margin-right: 10px;"
                            :src="item.img" alt="">
                        </div>
                        <div class="right-content-txt">{{ item.content }}<div style="font-size: small;font-size: 12px;">{{
                          item.text }}</div>
                        </div>

                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <!-- 友链---------------------- -->
            <div>
              <div style="text-align: center;">

                <h2 style="margin-bottom: 20px;">友链</h2>
              </div>
              <!-- 右边内容-中间 -->
              <div class="right-main">
                <el-row>
                  <el-col :span="8" v-for="item in MiddleLists" :key="item.id">
                    <div
                      style=" padding: 10px;box-sizing: border-box; display: flex;flex-direction: column;justify-content: space-around; height: 100px;">
                      <div class="right-middle-list">
                        <div><img style="border-radius: 100%; width: 60px;" :src="item.img" alt="">
                        </div>
                        <div class="right-content-txt">{{ item.content }}<div style="font-size: small;
              font-size: 12px;">{{ item.text }}</div>
                        </div>

                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
          <!-- 版权©-->
          <footer>
            <div class="footer">
              <div class="right-bottom-content">

                <div class="container">
                  <div class="hidden-xs-only">
                    <h3>シャオ・スー</h3>
                    <p>此后如竟没有炬火，我便是唯一的光!</p>
                  </div>
                  <div style="float: right;">
                    <span style="font-size: 12px;">Copyright © 2022 梓旭 | blog</span> 
                    <a href="https://beian.miit.gov.cn/" style="font-size: 12px;color: #000;"><br>豫ICP备2022014432号-1</a>
                  </div>

                </div>
              </div>
            </div>
          </footer>
        </div>
        <!-- </el-col> -->

      </div>

    </el-row>


  </div>
</template>



<script setup lang="ts">

// 轮播图
let imgArr = ['https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg', 'https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg', 'https://w.wallhaven.cc/full/qz/wallhaven-qzdqvr.jpg', 'https://th.wallhaven.cc/small/j3/j3m8y5.jpg', 'https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg']

// 工具箱数据
let MiddleList = [
  {
    title: '内容一',
    img: 'https://microblock.cc/_app/immutable/assets/betterncm-0b53d571.png',
    content: 'BetterNCM',
    text: '网易云客户端插件管理器',
    status: '1',
    id: 1
  },
  {
    title: '内容二',
    img: 'https://www.qmjkss.com/template/datll_tpl_cupfox/img/favicon.ico',
    content: '茶杯狐',
    text: '茶杯狐Cupfox - 努力让找电影变得简单',
    status: '2',
    id: 2

  },
  {
    title: '内容三',
    img: 'https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg',
    content: '这是第三个内容块',
    status: '1',
    id: 3

  },
  {
    title: '内容四',
    img: 'https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg',
    content: '这是第四个内容块',
    status: '2',
    id: 4

  },
  {
    title: '内容五',
    img: 'https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg',
    content: '这是第五个内容块',
    status: '2',
    id: 5

  },
  {
    title: '内容六',
    img: 'https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg',
    content: '这是第六个内容块',
    status: '2',
    id: 6

  }

]
//友情链接数据
let MiddleLists = [
  {
    title: '内容一',
    img: 'https://xushao.top/wp-content/uploads/2023/03/2023032815263825.png',
    content: '梓旭',
    text: '此后如竟没有炬火，我便是唯一的光!',
    status: '1',
    id: 1
  },

]




</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer {
  margin-top: 50px;
  padding: 20px;
  background-color: #fff;
  color: black;
  border-radius: 5px;
}

.right-content {
  height: 100%;
  padding: 0 20px;
  /* background-color: lightpink; */
  box-sizing: border-box;
}

.content {
  background-color: #ffffff;
  height: 100%;
  color: black;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 5px;
}

.right-content-txt:hover {
  color: #555;

}

/* 轮播 */
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.right-middle-list {
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 5px;
  transition: all .2s;
  position: relative;
  z-index: 90;
}

.right-middle-list:hover {
  opacity: 1;
  border-radius: 5px;
  background-color: hsla(0, 0%, 100%, .25);
  transform: translateY(-5px);
  box-shadow: 0 3px 20px rgba(0, 0, 0, .28);
  -webkit-animation: index-link-active 1s cubic-bezier(.315, .605, .375, .925) forwards;

}

.right-main {
  height: 200px;
}

.right-content-txt {
  font-size: 18px;
  overflow: hidden;
  color: #555;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 550;
  font-size: large;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right-bottom-content {}
</style>
