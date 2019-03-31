<template>
  <div class="repo">
    <div class="result_list clearfix">
      <div class="result_content">
        <h3 class="title"><a>{{message.full_name}}</a></h3>
        <p class="description">{{message.description}}</p>
      </div>

        <div class="result_language">
          <span class="C" v-if="message.language=='C'">  </span>
          <span class="Shell" v-if="message.language=='Shell'">  </span>
          <span class="HTML" v-if="message.language=='HTML'">  </span>
          <span class="JavaScript" v-if="message.language=='JavaScript'">  </span>
          <span class="Ruby" v-if="message.language=='Ruby'">  </span>
          <span class="Python" v-if="message.language=='Python'">  </span>
          <span class="CPlusPlus" v-if="message.language=='C++'">  </span>
          <span class="Cjing" v-if="message.language=='C#'">  </span>
          <span class="CSS" v-if="message.language=='CSS'">  </span>
          <span class="Go" v-if="message.language=='Go'">  </span>
          <span class="Scala" v-if="message.language=='Scala'">  </span>
          <span class="Objective-C" v-if="message.language=='Objective-C'">  </span>
          <span class="PHP" v-if="message.language=='PHP'">  </span>
          <span class="language">{{message.language}}</span>
        </div>
        <div class="result_star">
          <div class="star">
            <div class="img_wrapper"><img src="../../common/fonts/star.jpg" width="30px" height="30px" ></div>
            <span class="starNum">{{star_num}}</span>
          </div>

        </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {}
  },
  computed: {
    star_num() {
      var num = this.message.stargazers_count;
      if (parseInt(num) > 1000) {
        return (this.message.stargazers_count / 1000).toFixed(1) + 'k';
      } else {
        return num;
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index';
  .result_list
    width:100%
    height:215px
    border-top:1px solid #eee
    .result_content
      float:left
      width:50%
      font-size: 14px
      color: #586069
      .title
        color: #0366d6
        padding-top: 4%
      .description
        word-wrap:break-word
    .result_language
      float:left
      width:30%
      height:100%
      .C,.Shell,.Ruby,.Scala,.HTML,.Go,.CSS,.JavaScript,.Python,.CPlusPlus,.Cjing,.Objective-C,.PHP
        display:inline-block
        width: 14px
        height: 14px
        background: #586069
        border-radius:50%
        margin-top:11%
        margin-left:21%
      .Shell
        background: #89e051
      .Ruby
        background: #701516
      .Scala
        background: #c22d40
      .HTML
        background: #e34c26
      .Go
        background: #00ADD8
      .CSS
        background: #563d7c
      .JavaScript
        background: #f1e05a
      .Python
        background: #3572A5
      .CPlusPlus
        background: #f34b7d
      .Cjing
        background: #178600
      .Objective-C
        background: yellow
      .PHP
        background: purple

    .result_star
      width:20%
      height:100%
      float:left
      .star
        margin-top: 8%
        .img_wrapper
          display:inline-block
          vertical-align:middle
          img
            margin-top:2px
        .starNum
          line-height:100%
          display:inline-block
          vertical-align:middle

  @media screen and (max-width:713px)
    .repo > .result_list
      display:flex
      flex-wrap: wrap
      justify-content:center
      align-items:center
    .repo > .result_list > .result_content
      width:100%
      float:none
    .repo > .result_list >  .result_language
      flex:1
      height:20%
      vertical-align: middle
      float:none
    .repo > .result_list >  .result_star
      flex:1
      height:20%
    .repo > .result_list >  .result_star >.star
      margin-top: 4%
</style>
