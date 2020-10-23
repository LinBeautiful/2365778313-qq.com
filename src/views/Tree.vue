    <template>
    <div class="post">
        <div class="ask">
        <p>
            每个人都需要一个树洞，存放那些不可轻易示人的秘密、引而不发的情绪、难以启齿的柔弱<br />
        </p>
        <blockquote>
            <p>
                # sein：如果发现自己的树洞没有过审，一般情况是被自动拦截，可以用相同ID再发一条树洞提示审核手动恢复。
            </p>
        </blockquote>
        <p>
        # 蛋友 汪汪酱 提醒，遭遇心理危机时请联系以下途径：
        </p>
        <blockquote>
            <p>
            <strong>北京市心理援助热线</strong>
            ： 010-82951332 <br>
            
    全国各地心理危机干预热线：http://anseeing.com/hotlines/
            </p>
        </blockquote>
    
        </div>
        <div class="entry">
        <ul>
            <li v-for="(list, index) in lists" :key="index">
            <div class="list">
                <div class="list-left">
                    <span class="one-l">{{ list.name }}</span>
                    <span class="one-t">{{ list.time }}</span>
                </div>
                <div class="list-right">
                <router-link to="list.number" class="one-s">{{list.number1}}</router-link>
                </div>
            
            </div>
        

            <div class="bottom">
                <p>{{ list.title }}</p>
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
        .get("http://localhost:8081/tree")
        .then((res) => {
        console.log("ask", res.data.data);
        this.lists = res.data.data;
        })
        .catch((err) => {
        console.log(err);
        });
    },
    methods:{
        send(){
    prompt('请输入举报理由')
        }
    }
}
</script>

<style scoped>
    blockquote{
margin: 0;
    }
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
</style>