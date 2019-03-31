<template>
  <div class="search" :class="{active:scrolling}">
      <div class="logo"><img src="../../common/fonts/github.jpg" alt="" width="34px" height="34px" ></div>
      <nav>
        <div class="search_box" >
          <span class="search_icon" ></span>
          <input type="search" class="search_input" id="searchInput" placeholder="Search or jump to..."
                 v-model="search_word"
                 @keyup.enter="searchMethod"
                 @focus="focusEvent"
                 @blur="blurEvent"
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
     search_word: 'git',
     scrolling: false
   };
  },
  ready() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    }, true);
  },
  methods: {
    handleScroll (e) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
        this.scrolling = true;
      } else {
        this.scrolling = false;
      }
    },
    searchMethod() {
      this.$dispatch('search', this.search_word);
    },
    focusEvent(e) {
      e.target.parentNode.classList.add('active');
      console.log(111);
    },
    blurEvent(e) {
      e.target.parentNode.classList.remove('active');
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index';
    .search
      padding:16px 0
      background-color: #24292E
      margin-bottom:24px
      &.active
        position:fixed
        top:0
        z-index:100
        width:100%
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
        width:40%
        max-width:40%
        .search_box
          box-sizing:border-box
          display:inline-block
          width:40%
          height:30px
          min-width:250px
          line-height:30px
          background: #3F4448
          padding-left:10px
          border:0
          text-align:left
          vertical-align:middle
          border-radius:3px
          transition: width 0.1s ease-in-out, background-color 0.1s, color 0.1s
          &.active
            width:60%
            background: #fafbfc
          .search_input
            width:90%
            background:transparent
            border:0
            font-size:14px
            outline:none
            color:#fff
            &:focus
              color:#000
              outline:none
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
    @media screen and (max-width:713px)
      .search > nav> .search_options
        display:none



</style>
