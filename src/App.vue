<script setup lang="ts">
import {ref,onMounted} from "vue"
import {useWeb3js} from './web3/useWeb3js'
// import { mainnet } from "viem/chains"


const chainId = ref(56) // 主网链 ID
const web3jsInstance = useWeb3js({ chainId: chainId.value })
// 访问 web3.js 的方法
onMounted(() => {
  if (web3jsInstance.value) {
    console.log('Web3.js Instance:', web3jsInstance.value)
    
    // 示例：获取当前区块号
    web3jsInstance.value.eth.getBlockNumber().then((blockNumber) => {
      console.log('Current Block Number:', blockNumber)
    }).catch((error) => {
      console.error('Error fetching block number:', error)
    })
  } else {
    console.error('Failed to initialize web3.js instance.')
  }
})

</script>

<template>
  <div>
<!-- 测试一下 -->
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
