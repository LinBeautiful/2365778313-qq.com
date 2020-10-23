
    <template>
<div class="post">
    <div class="ask">
<p><strong>发图方法</strong><br>
▪桌面端用网页传图可用<a target="_blank" rel="external" href="//jandan.net/t/4425191"><strong>浏览器传图扩展</strong></a>；微信小程序<strong>煎了个蛋</strong>已恢复传图功能；。<br>
▪严禁发布色情/暴恐/时政相关、带有网址/商标/二维码等水印，或涉嫌隐私或未经授权的私人图片。</p>
    <blockquote class="ent">
        <p>
        <strong>版权声明</strong><br />

    
煎蛋所有内容皆为煎蛋用户发布，仅授权在煎蛋网页、煎蛋APP和煎蛋小程序访问。<br />

    
如有涉嫌侵权图请联系admin@jandan.com，告知图片URL或图片所在楼层编号以及侵权证据。
        </p>
    </blockquote>
        <p>
            <router-link to="/" style="color: rgb(85, 26, 139)">
            <strong>煎蛋常见问题</strong>
            </router-link>
        </p>
    </div>
    <div class="entry">
  <van-list
  v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
<li v-for="(list, index) in lists" :key="index">
        <router-link class="list">
            <div class="list-left">
            <span class="one-l">{{ list.title}}</span>
            <span class="one-t">{{ list.time}}</span>
            </div>
            <div class="list-right">
            <router-link to="list.number" class="one-s">{{
                list.number1
            }}</router-link>
            </div>
        </router-link>

        <div class="bottom">
            <router-link to="list.img1">{{ list.look }}

                <img :src="list.img" alt="">
            </router-link>
        </div>
        <div class="all">
            <span class="all" @click="send">{{ list.say }}</span>
        </div>
        </li>
</van-list>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { List } from 'vant';
Vue.use(List);
export default {
data() {
    return {
    lists: [],
     loading: false,
      finished: false,
    };
},
mounted() {
   this.get()
},
methods: {
    send() {
    prompt("请输入举报理由");
    },
    get(){
        this.axios.get("http://localhost:8081/pic").then((res) => {
        console.log("ask", res.data.data);
        this.lists=res.data.data
        // this.lists =this.lists.concat(res.data.data);
        //  this.loading=false
        //   if(this.lists.length>=43){
        //     this.finished=true
        // }
    })
    .catch((err) => {
        console.log(err);
    });
    }
     
},
};
</script>

<style scoped>
.bottom img{
    width:100%;
}
ul {
list-style: none;
padding-left: 0;
}
li {
margin: 10px 0;
}
.post {
padding: 5px 10px;
}
.ent{
    margin: 10px 0;
    padding: 10px 10px 0;
    background-color: #f9f9f9;
    border-width: 1px 0;
    border-style: solid;
    border-color: #ececec; 
}
.ask{
    display: block;
color: #111;
font-size: 14px;
line-height: 2em;
}
.ask p{
    margin-bottom: 10px;
}
.one-l {
color: orangered;
font-size: 14px;
font-weight: bold;
margin-right: 2px;
}
.one-t,
.one-s {
color: #666;
font-size: 12px;
font-weight: lighter;
}
.list {
display: flex;
justify-content: space-between;
}
.bottom p {
line-height: 1.7em;
font-size: 14px;
}
.all {
color: #c8c7cc;
}
/* .bottom-l{
        position: absolute;
        bottom: 0;
    } */
</style>