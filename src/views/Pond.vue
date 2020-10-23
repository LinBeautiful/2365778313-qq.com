<template>
<div class="post">
    <div class="ask">
        <div class="ph">
            <p>如题，这里是给摸鱼爱好者们展示才艺的地方。</p>
        </div>
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
            <router-link to="list.img1">{{ list.look }}

                <img :src="list.img" alt="" />
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
export default {
data() {
    return {
    lists: [],
    };
},
mounted() {
    this.axios
    .get("http://localhost:8081/pond")
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
.ask .ph{
    margin-bottom:50px;
}

.one-l {
color: #333;
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