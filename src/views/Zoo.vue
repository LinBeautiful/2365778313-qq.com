    <template>
<div class="post">
    <div class="ask">
    <p>本分区专吸各种萌物</p>
    <p>
        <strong>发图方法</strong><br />

        ▪目前仅支持桌面端用网页发微博方式传图，推荐使用
        <router-link to="//jandan.net/t/4425191">浏览器传图扩展</router-link>
        <strong>浏览器传图扩展</strong><br />

        ▪请勿发布带有网址/商标/二维码等水印、涉嫌隐私或转载他人的未授权图片。
    </p>
    <blockquote class="ent">
        <p>
        <strong>版权声明</strong><br />

        煎蛋所有内容皆为煎蛋用户发布，仅授权在煎蛋网页、煎蛋APP和煎蛋小程序访问。<br />

        如有涉嫌侵权图请联系admin@jandan.com，告知图片URL或图片所在楼层编号以及侵权证据。
        </p>
    </blockquote>
    </div>
    <div class="entry">
 <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>

 <li v-for="(list, index) in lists" :key="index">
<router-link :to="'/Zoos/'+list.id">
        <div class="list">
            <div class="list-left">
            <span class="one-l">{{ list.title}}</span>
            <span class="one-t">{{ list.time}}</span>
            </div>
            <div class="list-right">
            <div  class="one-s">{{
                list.say1
            }}</div>
            </div>
            
        </div>

        <div class="bottom">
            <div >{{ list.name }}
                <img :src="list.img_url">
            </div>
        </div>
        </router-link>
        <div class="all">
            <span class="all" @click="send">{{ list.say }}</span>
        </div>
        </li>
</van-list>
    </div>
</div>


</template>

<script>
import Vue from 'vue'
import { List } from 'vant'
Vue.use(List)
export default {
data() {
    return {
    lists: [],
    limit:0,
      loading: false,
      finished: false,
    }
},
mounted() {
this.get()
},
methods: {
    send() {
    prompt("请输入举报理由");
    },
    
    get(){
        console.log(this.limit);
    this.axios.get("http://localhost:8081/zoo?limit="+this.limit)
    .then((res) => {
        console.log("ask", res.data.data);
        this.lists =this.lists.concat(res.data.data);
        this.loading=false
        if(this.lists.length>=27){
            this.finished=true
        }
    })
    .catch((err) => {
        console.log(err);
    });
    this.limit=this.limit+5
    },
    onLoad() {
    this.get()
    }
}
}

</script>

<style scoped>
.bottom img{
    width:100%;
}

li {
margin: 10px 0;
list-style: none;
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