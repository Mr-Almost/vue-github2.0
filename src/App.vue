<template>
  <div id="app">
    <div class="search-wrapper">
      <search></search>
    </div>
    <div class="main">
      <div class="menu-wrapper" v-show="onlyScreen">
        <menu></menu>
      </div>
      <loading v-show="!infoItems" class="loading"></loading>
      <div class="content-wrapper">
        <div class="result-wrapper" v-if="infoCount" >
          <div class="result_number">Showing {{formatCount}} available repository results</div>
        </div>
        <div class="repo-wrapper">
        <div v-for="item in infoItems">
          <repo :message="item"></repo>
        </div>
        </div>
        <div class="pagination-wrapper">
          <pagination :total-count="infoCount" :limit="6" :nowpage="nowpage"></pagination>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import search from './components/search/search';
import menu from './components/menu/menu';
import repo from './components/repo/repo';
import pagination from './components/pagination/pagination';
import loading from './components/loading/loading';

export default {
  data() {
    return {
      info: {},
      search_word: 'git',
      nowpage: 1
    };
  },
  created() {
    this._getDataFromGithub(this.url);
  },
  computed: {
    url() {
      return 'https://api.github.com/search/repositories?q=' + this.search_word + '&page=' + this.nowpage + '&per_page=6';
    },
    infoItems() {
      return this.info.items;
    },
    infoCount() {
      return this.info.total_count;
    },
    formatCount() {
      if (this.info.total_count) {
        var reg = /\d{1,3}(?=(\d{3})+$)/g;
        return (this.info.total_count + '').replace(reg, '$&,');
      } else {
        return 0;
      }
    },
    onlyScreen() {
      if (parseInt(window.screen.width) < 768) {
        return false;
      } else {
        return true;
      }
    }
  },
  events: {
    'search': function (msg) {
      this.search_word = msg;
      this.nowpage = 1;
      this._getDataFromGithub(this.url);
      console.log(msg);
    },
    'changePage': function (msg) {
      this.nowpage = msg;
      this._getDataFromGithub(this.url);
    }
  },
  methods: {
    _getDataFromGithub(url) {
      this.info = {};
      this.$http.get(url).then((response) => {
        response = response.body;
        if (!response.incomplete_results) {
          this.info = response;
          console.log(response);
        }
      });
    }
  },
  components: {
    search,
    menu,
    repo,
    pagination,
    loading
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @media only screen and (min-width:769px)
    .search-wrapper
      width:100%
    .main
      display:flex
      justify-content:center
      position:relative
      width:100%
      .menu-wrapper
        width:260px
        padding-left: 20px
        margin-right:20px
      .loading
        width:100%
        display:flex
        align-items: content
        justify-content:center
      .content-wrapper
        width:720px
        .result-wrapper
          width:720px
        .result_number
          height:50px
          color: #24292e
          font-size: 20px
          font-weight: 600



  @media only screen and (max-width:768px)
    .search-wrapper
      width:100%
    .main
      width:100%
      position:relative
      .loading
        width:100%
        height:100vh
        display:flex
        justify-content:center
        align-items:center
      .content-wrapper
        width:100%
        padding:0 10px
        .result-wrapper
          width:100%
        .result_number
          margin-top:10px
          height:30px
          color: #24292e
          font-size: 20px
          font-weight: 600
</style>
