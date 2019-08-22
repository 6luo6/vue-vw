<template>
  <div class="cotainer">
    <div>
      <div class="content_div" v-for="i in numCount+1" :key="i" :style="{transform:getNumRotate(i)}">
         <div class="num-div" :style="{transform:getNumRotate1(i)}">{{(max-min)/numCount*(i-1)}}</div>
      </div>
    </div>
    <div class="dot_div middle-text">
          <div class="txt-1">活跃时间:2019.5</div>
          <div class="txt-2">普通达人</div>
          <div class="txt-3">距离升级忠粉达人</div>
    </div>
    <div class="dot_div" v-once v-for="i in count+1" :key="i" :style="{transform:getRotate(i) }">
        <div class="dot" :style="getDot(i)"></div>
    </div>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      numCount:2, //数字份数
       count:50,   //份数
       deg:200,    //圆弧度
       current:200,  //当前值
       min:0,   //最小值
       max:1000, //最大值
       isPass:false,
       dot:{
         width:"8px",
         height:"2px",
         backgroundColor:"grey"
       },
       selectDot:{
         width:"8px",
         height:"2px",
         backgroundColor:"white"
       },
       currentDot:{
         width:"14px",
         height:"3px",
         backgroundColor:"white"
       }
    }
  },
  methods:{
    getNumRotate(i){
      var c=this.count/this.numCount
       return "rotate("+((90-this.deg/2)+(this.deg/this.count)*(i-1)*c)+"deg)";
    },
     getNumRotate1(i){
      var c=this.count/this.numCount
       return "rotate("+(-((90-this.deg/2)+(this.deg/this.count)*(i-1)*c))+"deg)";
    },
    getRotate(i){
      return "rotate("+((90-this.deg/2)+(this.deg/this.count)*(i-1))+"deg)";
    },
    getDot(i){
      let c=(this.max-this.min)/this.count;
      if (c*i>this.current) {
          if(this.isPass){
             return this.dot;
          }
          else{
             this.isPass=true;
             return this.currentDot;
          }
      }
      return this.selectDot;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cotainer{
  padding: 20px 0;
   position: relative;
   background-color: rgb(115, 156, 226);
   height: 500px;
}
.content_div{
   position:absolute;
   height: 500px;
   width: 460px;
   padding: 0px 20px;
   left: 0;
   right: 0;
   margin: auto;
}
.dot_div{
   position:absolute;
   height: 500px;
   width: 500px;
   left: 0;
   right: 0;
   margin: auto;
}
.dot{
  background-color: rgb(39, 187, 150);
  top:0;
  bottom: 0;
  margin:auto;
  position: absolute;
  border-radius: 50%;
  transform: translateX(-50%);
}
.num-div{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 4px;
    color: white;
    padding-bottom: 10px;
}
.middle-text{
  padding-top: 100px;
  color: white
}
.txt-1{
  font-size: 30px;
}
.txt-2{
   font-size: 38px;
   padding: 20px 0;
}
.txt-3{
   font-size: 30px;
}
</style>
