<template>
  <div class="menu" >
      <div  class="menu_options">
        <ul>
          <li  class="selected"><a href="#" >Repositories</a></li>
          <li><a href="#">Code</a></li>
          <li><a href="#">Commits</a></li>
          <li><a href="#">Issues</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Topics</a></li>
          <li><a href="#">Wikis</a></li>
          <li><a href="#">Users</a></li>
        </ul>
      </div>
      <div class="menu_language">
        <span class="title">Languages</span>
        <ul>
          <li><a href="#" >HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">Python</a></li>
          <li><a href="#">Ruby</a></li>
          <li><a href="#">Shell</a></li>
          <li><a href="#">PHP</a></li>
          <li><a href="#">C</a></li>
          <li><a href="#">C#</a></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index';
  .menu
    width:260px
    margin-right:20px
    .menu_options
      margin-bottom:10px
      li
        width:231px
        height:38px
        border:1px solid #d1d5da
        padding:0 10px
        line-height:38px
        a
          color: #0366d6
        &.selected
          border-left:2px solid #e36209
          border-top-left-radius: 2px
          a
            background-color: #fff;
            color: #24292e;
            cursor: default;
            font-weight: 600;

    .menu_language
      padding: 0 10px
      border:1px solid #d1d5da
      width:231px
      .title
        font-size:14px
        font-weight: 600
      li
        padding: 4px 10px
        a
          width:20px
          font-size: 12px
          color: #586069


</style>
