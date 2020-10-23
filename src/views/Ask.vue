<template>
<div class="post">
    <div class="ask">
    <p>
        <strong>在这里你可以向所有人提问</strong><br />
        反正所有的问题总会有答案/p>
    </p>
    <p>
        PS: <br />
        1.回复限吐槽框，误开新帖。<br />
        2.问答区使用来提问的，请发表有意义的主贴。<br />
        3.可以提网站的建议和意见，反馈问题最好描述相关数据，如在浏览器/客户端/所在地区等等
    </p>
    <p>
        <router-link to="/" style="color: rgb(85, 26, 139)">
        <strong>煎蛋常见问题</strong>
        </router-link>
    </p>
    </div>
    <div class="entry">
    <van-list
v-model="loading"
:finished="finished"
finished-text="没有更多了"
@load="onLoad"
>

<li v-for="(list, index) in lists" :key="index">
        <router-link>
        <div  class="list">
<div class="list-left">
                <span class="one-l">{{ list.name }}</span>
                <span class="one-t">{{ list.time }}</span>
            </div>
            <div class="list-right">
            <div  class="one-s">{{list.number1}}</div>
            </div>
        </div>
        <div class="bottom">
            <p>{{ list.title }}</p>
            </div>
            <div class="all">
            <span class="all" @click="send">{{ list.say }}</span>
        </div>
            </router-link>
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
        loading: false,
    finished: false,
    };
    },
    mounted() {
this.get()
    },
    methods:{
        send(){
        prompt('请输入举报理由')
        },
        get(){
this.axios.get("http://localhost:8081/ask?limit="+this.limit)
        .then((res) => {
        console.log("ask", res.data.data);
        this.lists =this.lists.concat(res.data.data);
        this.loading=false
    if(this.lists.length>=323){
            this.finished=true
        }
        })
        .catch((err) => {
        console.log(err);
        });
        }
    }
};
</script>

<style scoped>
ul {
list-style: none;
padding-left: 0;
}
li{
    margin: 10px 0;
}
.post {
padding: 5px 10px;
}
.ask {
font-size: 14px;
line-height: 2em;
color: #111;
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
.bottom p{
    line-height:1.7em;
    font-size: 14px;
}
.all{
color: #c8c7cc;
}
/* .bottom-l{
    position: absolute;
    bottom: 0;
} */
</style>