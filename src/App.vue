<template>
  <div style="max-width: 960px;margin: 0 auto;" :class="jj ? 'potion':''">
    <TabBar></TabBar>
    <el-row>
      <el-col :span="5" :class="jj ? 'hhh' : 'hidden-xs-only'"  class="my-element" >
        <Silder></Silder>
      </el-col>
      <el-col :span="19" style="margin-top: 20px;" :xs="24" class="my-element">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import TabBar from './components/TabBar.vue'
import Silder from './components/Silder.vue'
import 'element-plus/theme-chalk/display.css'
import { ref, computed } from 'vue'
let nbu = ref()
import mainSfdfdtore from "./stores/counter";
const mainStore = mainSfdfdtore();
let jj = computed(() => {
  return mainStore.count
})

</script>

<style scoped>
.hhh {
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 99;
  min-width: 40%;
  height: 100%;
}
.potion{
  position: fixed;
    top: 0;
    left: 0;
    z-index: 100040;
    width: 100vw;
    height: 100vh;
    background-color: #00000075;
}

.my-element {
  display: inline-block;
  animation: headShake; 
  animation-duration: 2s; 
}
</style>