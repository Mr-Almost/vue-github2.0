<template>
  <div class="search">
      <div class="logo"><img src="../../common/fonts/github.jpg" alt="" width="34px" height="34px" ></div>
      <nav>
        <div class="search_box">
          <span class="search_icon" ></span>
          <input type="search" class="search_input" id="searchInput" placeholder="Search or jump to..."
                 v-model="search_word"
                 @keyup.enter="searchMethod"
          >
        </div>
        <ul class="search_options" v-show="onlyScreen">
          <li><a href="#" >Pull requests</a></li>
          <li><a href="#">Issues</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Explore</a></li>
        </ul>
      </nav>
      <div class="details"></div>
      <div class="avatar"></div>
  </div>
</template>

<script>
export default {
  data() {
   return {
     search_word: 'git'
   };
  },
  computed: {
    onlyScreen() {
      if (parseInt(window.screen.width) < 768) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    searchMethod() {
      this.$dispatch('search', this.search_word);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index';
  @media only screen and (min-width:769px)
    .search
      width:100%
      padding:16px 0
      background-color: #24292E
      margin-bottom:24px
      .logo
        vertical-align:middle
        width:60px
        height:30px
        display:inline-block
        margin-left:4px
        text-align: center
        &:hover
          cursor:pointer
        img
          border-radius:25px
      nav
        display:inline-block
        margin-left:-8px
        .search_box
          display:inline-block
          height:30px
          width:300px
          line-height:30px
          background: #3F4448
          padding-left:10px
          border:0
          text-align:left
          vertical-align:middle
          border-radius:3px
          .search_input
            width:280px
            background:transparent
            border:0
            font-size:14px
            outline:none
            color:#fff
        .search_options
          display:inline-block
          padding-left:8px
          vertical-align:middle
          li
            display:inline-block
            padding:0 8px
            height:30px
            text-align:center
            line-height:30px
            &:hover
              cursor:pointer
            a
              text-decoration:none
              color:#fff
              font-size:14px
              font-weight: 600
              line-height: 1.5
              &:hover
                color:#968D8D

  @media only screen and (max-width:768px)
    .search
      background-color: #24292E
      width: auto
      display:flex
      .logo
        flex: 0 0 34px
        margin-top:2px
        margin-left: 2px
        img
          border-radius:50%
      nav
        width:100%
        .search_box
          display:flex
          flex: 1
          margin-right: 2px
          width:50%
          height: 100%
          line-height:80%
          text-align:left
          vertical-align:middle
          border-radius:3px
          background: #3F4448
          padding-left:10px
          margin-left:10px
          .search_input
            width:100%
            background:transparent
            border:0
            font-size:14px
            outline:none
            color:#fff
</style>
