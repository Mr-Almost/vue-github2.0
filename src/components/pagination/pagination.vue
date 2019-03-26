<template>
  <div id="pagination" v-show="totalCount>0">
    <ul class="page-wrapper">
      <li @click="previous" class="prev" :class="{'unselect':nowpage===1}">Previous</li>
      <li v-for="item in pages"
          track-by="$index"
          @click="changePage(item)"
          class="page-select"
          :class="{'unselect':typeof item==='string','highlight':nowpage==item}"
      >{{item}}
      </li>
      <li @click="next" class="next" :class="{'unselect':nowpage===pageTotal}">Next</li>
    </ul>
  </div>
</template>

<script>
  /* eslint-disable */

  import Vue from 'vue';

export default
{
  props:{
    totalCount: 0,
    limit: 0,
    nowpage: 1
  },
  data() {
    return {
    }
  },
  computed: {
    pageTotal() {
      return Math.ceil(this.totalCount/this.limit);
    },
    pages() {
      let nowPage = this.nowpage;
      let pageTotal = this.pageTotal;
      let page = [];
      console.log(nowPage);
      console.log(pageTotal);
      if (pageTotal <= 11) {
        for(let i = 1 ;i < pageTotal+1;i++) {
         page.push(i)
        }
      } else if (pageTotal > 11 && nowPage >= 7 && nowPage <= pageTotal-6) {
        page.push(1);
        page.push(2);
        page.push('...');
        page.push(nowPage-2);
        page.push(nowPage-1);
        page.push(nowPage);
        page.push(nowPage+1);
        page.push(nowPage+2);
        page.push('...');
        page.push(pageTotal-1);
        page.push(pageTotal);
      } else if (pageTotal > 11 &&  nowPage <7) {
        for(let i = 1 ;i < 8;i++) {
          page.push(i)
        }
        page.push('...');
        page.push(pageTotal-1)
        page.push(pageTotal)
      }else if (pageTotal > 11 && nowPage > pageTotal-6 ) {
        page.push(1);
        page.push(2);
        page.push('...');
        for(let i = pageTotal-6 ;i < pageTotal+1;i++) {
          page.push(i)
        }
      }
      return page;
    }
  },
  methods: {
    changePage(item) {
      this.nowpage = item;
      console.log(item);
      this.$dispatch('changePage',item)
    },
    previous() {
      this.nowpage--;
      if (this.nowpage < 0) {
        this.nowpage = 1;
      }
      this.$dispatch('changePage',this.nowpage)
    },
    next() {
      this.nowpage++;
      if (this.nowpage > this.pageTotal) {
        this.nowpage = this.pageTotal
      }
      this.$dispatch('changePage',this.nowpage)
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index';
  .page-wrapper
    display:flex
    justify-content:center
    font-weight: 500
    font-size: 13px
    font-family: sans-serif
    color: #0366d6
    li
      min-width:30px
      line-height: 30px
      text-align:center
      padding: 6px
      border:1px solid #e1e4e8
      &:hover
        cursor: pointer
        background-color: #EFF3F6
      &.highlight
        background-color: #0366d6
        color: #fff
      &.unselect
        pointer-events:none
        background-color: #FAFBFC
        color:#D1D5DC
    .next,.prev
      width: 60px
</style>
