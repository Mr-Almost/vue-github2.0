<template>
  <div id="app">
    <div class="search-wrapper">
      <search></search>
    </div>
    <div class="main-wrapper">
      <div class="main">
        <div class="menu-wrapper">
          <menu></menu>
        </div>
        <div class="content-wrapper">
          <loading v-show="!infoItems" class="loading"></loading>
          <div class="content">
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
    *
      margin:0
      padding:0
    .main-wrapper
      display:flex
      justify-content:center
      .main
        width:80%
        display:flex
        justify-content:center
        min-height:100px
        .menu-wrapper
          flex:1;
          padding-left: 20px
          margin-right:20px
        .content-wrapper
          flex:4
          position:relative
          max-width:100%
          .loading
            position:absolute
            top:0
            left:0
            bottom:0
            right:0
            margin:auto
          .content
            .result-wrapper
              width:100%
            .result_number
              height:50px
              color: #24292e
              font-size: 20px
              font-weight: 600
            .pagination-wrapper
              width:100%
              max-height:30px
    @media screen and (max-width:713px)
      #app > .main-wrapper > .main > .menu-wrapper
        display:none



</style>
