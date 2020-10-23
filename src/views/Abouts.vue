<template>
<div>
    <div class="postinfo">
        <h1>qqqqqqqq2121212</h1>
        <strong></strong>
        <strong></strong>
        <div class="entry">

        </div>
    </div>
</div>
</template>

<script>
export default {
data(){
    return{

    }
},
mounted(){
// this.get()
    this.axios('http://localhost:8081/index').then(res=>{
        console.log(111,res);
    }).catch(err=>{
        console.log(err);
    })
},
methods:{
    get(){
    
    }
   
}
}
</script>

<style>

</style>