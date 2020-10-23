    <template>
<div class="post">
    <div class="ask">
    <p>大家手机相册里应该有不少有趣的图片，欢迎发到这里，分享你的经典一刻。</p>
    <p>
        <strong>发图方法</strong><br />

        
▪桌面端用网页传图可用
        <router-link to="//jandan.net/t/4425191">浏览器传图扩展</router-link>；微信小程序
        <strong>煎了个蛋</strong>

    已恢复传图功能；。
    </p>
    
▪请勿发布AV截图/裸体/露点图/偷拍、带有网址/商标/二维码等水印、涉嫌隐私或转载他人的未授权图片。
    <blockquote class="ent">
        <p>
        <strong>版权声明</strong><br />

    
煎蛋所有内容皆为煎蛋用户发布，仅授权在煎蛋网页、煎蛋APP和煎蛋小程序访问。<br />

    
如有涉嫌侵权图请联系admin@jandan.com，告知图片URL或图片所在楼层编号以及侵权证据。
        </p>
    </blockquote>
    </div>
    <div class="entry">
    <ul>
        <li v-for="(list, index) in lists" :key="index">
        <div class="list">
            <div class="list-left">
            <span class="one-l">{{ list.title}}</span>
            <span class="one-t">{{ list.time}}</span>
            </div>
            <div class="list-right">
            <router-link to="list.number" class="one-s">{{
                list.number1
            }}</router-link>
            </div>
        </div>

        <div class="bottom">
            <router-link to="list.img1">{{ list.look }}

                <img :src="list.img_url" alt="" v-lazy="list.img_url">
            </router-link>
        </div>
        <div class="all">
            <span class="all" @click="send">{{ list.say }}</span>
        </div>
        </li>
    </ul>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Lazyload, {
  lazyComponent: true,
});
export default {
data() {
    return {
    lists: [],
    };
},
mounted() {
    this.axios
    .get("http://localhost:8081/ox")
    .then((res) => {
        console.log("ask", res.data.data);
        this.lists = res.data.data;
    })
    .catch((err) => {
        console.log(err);
    });
},
methods: {
    send() {
    prompt("请输入举报理由");
    },
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