<template>
    <div class="loading-wrapper">
      <span class="content"></span><span>正在载入</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loading-wrapper
    width: 100px
    height: 100px
    font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol
    .content
      display: inline-block
      line-height: 10px
      margin-right:10px
      width:10px
      height: 10px
      border-radius: 100%
      border-top: 2px solid #24292e
      border-right: 2px solid #24292e
      border-left: 2px solid transparent
      border-bottom: 2px solid transparent
      animation:loading 1s linear infinite
    @keyframes loading
      0%
        transform: rotate(0deg)
      100%
        transform: rotate(359deg)





</style>
