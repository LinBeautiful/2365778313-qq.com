<template>
  <div class="about">
    <!-- <h1>This is an about pageThis is an about page</h1> -->
    <ul class="lists">
      <li v-for="(item, index) in content" :key="index">
        <div id="moun">
          <img :src="item.img" alt="" />
          <div id="moun-right">
            <h2>
              <router-link :to="'/Abouts/'+item.id">{{ item.title }}</router-link>
            </h2>
            <div class="desc">{{ item.desc }}</div>
          </div>
          <span class="little">{{ item.comments }}</span>
        </div>
      </li>
    </ul>
    <div class="footer">
      <a href="">更多文章>></a>
    </div>
    <div id="footers">
      <p class="foots">
        © 煎蛋 - 地球上没有新鲜事
        <a href="">鄂ICP备11008023号-1  ·  鄂公网安备42018502002747号</a>
        <a href="">网信办违法和不良信息举报中心</a>
        <a href="">煎蛋举报中心</a>
        <a href="">举报电话 13125131232 · 举报邮箱 jubao@jandan.com </a>
      </p>
    </div>
      <router-view></router-view>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      content: [],
    };
  },
  mounted() {
    this.axios("http://localhost:8081/index")
      .then((res) => {
        this.content = res.data.data;
        console.log(111, this.content);
      })
      .catch((err) => {
        console.log(777, err);
      });
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 5px 10px;
}
li {
  height: 80px;
  border-bottom: 1px solid rgb(230, 230, 230);
  line-height: 110px;
}
#moun {
  display: flex;
  line-height: 90px;
}
#moun h2 {
  width: 100%;
  margin: 0;
  line-height: 0.5em;
  margin-bottom: 10px;
}
a {
  font-size: 15px;
  color: #d22;
  font-weight: bold;
}
.desc {
  font-size: 0.1rem;
  line-height: 12px;
}
.little {
  position: absolute;
  right: 5px;
  font-family: sans-serif;
  line-height: 1em;
  color: #aaa;
  font-size: 12px;
}

img {
  width: 50px;
  height: 50px;
}
.footer {
  padding: 10px 0;
}
.footer a {
  padding: 5px 8px;
  margin: 1px 5px 1px 0;
  border: solid 1px #ccc;
  display: inline-block;
  font-size: 0.5em;
}
#footers {
  width: 100%;
  padding: 10px;
  background: #222;
    box-sizing: border-box;
    width: 100%;

    font-size: 12px;
    /* line-height: 1.6em; */
    /* text-align: center; */
    padding: 10px;
}
.foots{
   text-align: center;

}
.foots a{
color: #AAA;
font-size: 10px;
  display: block;

}
</style>
