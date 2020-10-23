<template>
<div class="post">
    <div class="ask">
        <img src="http://ww1.sinaimg.cn/mw1024/00745YaMgy1gj6aibi4ftj31e02em4gh.jpg" alt="">
        <div class="ph">
            <p>
            公告：<strong>煎蛋商店启用专属客服微信号</strong><br>
            
周边计划、新款发布、预售生产进度等会以更新朋友圈方式来推送周边相关消息，以及售前售后的咨询和联系。<br>

扫下面二维码或者直接添加微信号 JandanShop
<img src="https://wx4.sinaimg.cn/mw600/66b3de17gy1g9lr8wz3e6j20pt0ux0xe.jpg" alt="">
            </p>
        </div>
    </div>
    <div class="hr">
            <hr>
        <p class="font">本页面用于煎蛋/超载鸡品牌周边产品公告发布和买家晒单。</p>
        <hr>
        <router-link to=""><strong>关于超载鸡版权的相关说明</strong></router-link> 
    </div>

    <div class="entry">
    <ul>
        <li v-for="(list, index) in lists" :key="index">
        <div class="list">
            <div class="list-left">
            <span class="one-l">{{ list.name}}</span>
            <span class="one-t">{{ list.time}}</span>
            </div>
            <div class="list-right">
            <router-link to="list.number" class="one-s">{{
                list.number1
            }}</router-link>
            </div>
        </div>

        <div class="bottom">
            <p>{{list.say2}}</p>
            <router-link to="list.img">{{ list.look }}

                <img :src="list.img" alt="">
            </router-link>
        </div>
        <div class="all">
            <span class="all" @click="send">{{ list.say3 }}</span>
        </div>
        </li>
    </ul>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    lists: [],
    };
},
mounted() {
    this.axios
    .get("http://localhost:8081/zhoubian")//http://localhost:8081/top
    .then((res) => {
        console.log(11234, res.data.data);
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
hr{
    color: rgb(211, 211, 211);
    border: 1px;
}
.hr .font{
    font-size: 14px;
    color:#111
}
.ask{
    display: block;
color: #111;
font-size: 14px;
line-height: 2em;
}
.ask img{
    width: 100%;
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