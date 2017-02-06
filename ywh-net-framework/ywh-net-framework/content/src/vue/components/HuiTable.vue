<template>
  <div class="hui-list">
    <!-- <ol>
      <li v-for="data in datas">
      </li>
    </ol> -->
    <table class="table table-striped table-hover">
      <caption style="text-align:center"><h2>{{title}}</h2></caption>
      <thead>
        <tr>
          <th v-show="v_showLineNumber" style="text-align:center">行号</th>
          <th v-for="head in theads"  style="text-align:center">{{head}}</th>
          <!-- <th style="text-align:center">name</th>
          <th style="text-align:center">maker</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data,index) in pageDatas">
          <td v-show="v_showLineNumber">{{(v_pageCount-1)*v_pageSize+index+1}}</td>
          <td v-for="head in theads">{{data[head]}}</td>
        </tr>
        <!-- <tr v-for="data in datas">
          <td>{{data.name}}</td>
          <td>{{data.maker}}</td>
        </tr> -->
      </tbody>
      <tfoot>
        <tr>
          <td>总记录数{{maxCount}}</td>
          <td>每页记录数{{v_pageSize}}</td>
          <td>当前页<input type="text" style="width:30px" v-model="v_pageCount">
            <button class="btn btn-primary" v-on:click="showPage(v_pageCount)">跳转</button>
          </td>
          <td>
            <button class="btn btn-primary" v-on:click="prev()">上一页</button>
            <button class="btn btn-primary" v-on:click="next()">下一页</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  name: 'hui-table',
  props: ['dataurl', 'page-size', 'page-count', 'show-line-number'],
  data () {
    return {
      maxCount: 0,
      title: '',
      v_pageSize: 0,
      v_pageCount: 0,
      v_maxPageSize: 0,
      v_showLineNumber: true,
      pageDatas: [],
      datas: [
        // { name: 'ps4', maker: 'sony', gg: 'ccc' },
        // { name: 'ps3', maker: 'sony' },
        // { name: 'wii', maker: 'nintendo' },
        // { name: 'wiiu', maker: 'nintendo' },
        // { name: 'xbox360', maker: 'microsoft' },
        // { name: 'xboxOne', maker: 'microsoft' }
      ]
    }
  },
  created: function () {
    // let url = 'https://raw.githubusercontent.com/alucardlockon/RESTfulTest/master/node-vue-test-play/static/json/tabledata.json'
    let url = this.dataurl
    this.v_pageSize = parseInt(this.pageSize)
    this.v_pageCount = parseInt(this.pageCount)
    this.$http.get(url, {}).then((response) => {
      // console.log(response.data)
      // let data = JSON.parse(response.data)
      let data = response.data
      this.datas = data.datas
      this.maxCount = data.datas.length
      this.title = data.title
      this.v_maxPageSize = parseInt(this.maxCount / this.v_pageSize)
      this.v_showLineNumber = (this.showLineNumber !== 'false')
      this.showPage(1)
    })
    // this.$http.get('https://raw.githubusercontent.com/alucardlockon/RESTfulTest/master/node-vue-test-play/static/json/tabledata.json')
  },
  computed: {
    // 仅读取，值只须为函数
    theads: function () {
      var arr = []
      for (let index in this.datas) {
        for (let da in this.datas[index]) {
          if (da === 'id') continue
          arr.push(da)
        }
        if (arr.length > 0) break
      }
      return arr
    }
  },
  methods: {
    prev: function () {
      if (this.v_pageCount > 1) {
        this.v_pageCount--
        this.showPage()
      }
    },
    next: function () {
      if (this.v_pageCount <= this.v_maxPageSize) {
        this.v_pageCount++
        this.showPage()
      }
    },
    showPage: function (page = this.v_pageCount) {
      this.pageDatas = []
      let count = 1
      this.v_pageCount = page
      for (let index in this.datas) {
        if (count > (this.v_pageCount - 1) * this.v_pageSize && count <= this.v_pageCount * this.v_pageSize) {
          this.pageDatas.push(this.datas[index])
        }
        count++
      }
    }
  }
}
</script>
<style>
.hui-list{
  width: 100%;
}
</style>