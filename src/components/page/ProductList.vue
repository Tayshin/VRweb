<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>产品中心</el-breadcrumb-item>
                <el-breadcrumb-item>产品列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row>
                <div class="list-wrap">
                    <el-tabs v-model="activePane" @tab-click="tabClick">
                        <el-tab-pane label="一体机" name="ivr">
                            <el-row>
                                    <ul class="product-list clearfix">
                                        <li class="product-item" v-for="item in ivrList">
                                            <div class="product-img">
                                                <img :src="item.pic_location"/>
                                            </div>
                                            <h3>{{item.name}}</h3>   
                                                <el-button type="success" @click="compare(item)" :type="comparedState[item.id]?cancelType:shareType" > 
                                                 {{comparedState[item.id]?cancelMsg:shareMsg}}   
                                                </el-button> 
                                            <el-button type="primary" @click="ivrClick(item)"> 
                                                查看详细
                                            </el-button>                                  
                                        </li>
                                    </ul>
                                    </el-row>
                                <el-row>
                                    <div class="pagination">
                                        <el-pagination
                                      @current-change="handleIvrChange"
                                      :current-page.sync="ipageNum"
                                      layout="prev, next">
                                    </el-pagination>
                                    </div>
                            </el-row>   
                        </el-tab-pane>

                        <el-tab-pane label="PC头显" name="svr">
                               <el-row>
                                    <ul class="product-list clearfix">
                                        <li class="product-item" v-for="item in svrList">
                                            <div class="product-img">
                                                <img :src="item.pic_location"/>
                                            </div>
                                            <h3>{{item.name}}</h3>   
                                            <el-button type="success" @click="compare(item)" :type="comparedState[item.id]?cancelType:shareType" > 
                                                 {{comparedState[item.id]?cancelMsg:shareMsg}}   
                                                </el-button> 
                                            <el-button type="primary" @click="svrClick(item)"> 
                                                查看详细
                                            </el-button>                                  
                                        </li>
                                    </ul>
                                    </el-row>
                                <el-row>
                                    <div class="pagination">
                                        <el-pagination
                                      @current-change="handleSvrChange"
                                      :current-page.sync="spageNum"
                                      layout="prev, next">
                                    </el-pagination>
                                    </div>
                            </el-row>  
                        </el-tab-pane>
                        <el-tab-pane label="手机盒子" name="evr">
                               <el-row>
                                    <ul class="product-list clearfix">
                                        <li class="product-item" v-for="item in evrList">
                                            <div class="product-img">
                                                <img :src="item.pic_location"/>
                                            </div>
                                            <h3>{{item.name}}</h3>   
                                            <el-button type="success" @click="compare(item)" :type="comparedState[item.id]?cancelType:shareType" > 
                                                 {{comparedState[item.id]?cancelMsg:shareMsg}}   
                                                </el-button> 
                                            <el-button type="primary" @click="evrClick(item)"> 
                                                查看详细
                                            </el-button>                                  
                                        </li>
                                    </ul>
                                    </el-row>
                                <el-row>
                                    <div class="pagination">
                                        <el-pagination
                                      @current-change="handleEvrChange"
                                      :current-page.sync="epageNum"
                                      layout="prev, next">
                                    </el-pagination>
                                    </div>
                            </el-row>  
                        </el-tab-pane>
                    </el-tabs>
                </div>
        </el-row>

    </div>
</template>

<script>
    
    export default {
        data: function(){
            return {
                hostURL:'/VR',
                ivrURL:'/products/ivr',
                svrURL:'/products/svr',
                evrURL:'/products/evr',
                activePane: 'ivr',
                shareMsg:"加入对比",
                cancelMsg:"取消对比",
                shareType:"success",
                cancelType:"warning",
                comparedState:[],
                selected:1, //1== yitiji  2==PCtou xian  3==shou ji he zi
                comparedNum:0,//number of compared products
                ajaxData:{
                    list:[
                        {
                            id:1,
                            name:'name1',
                            pic_location:'111dd',
                            compared:false   
                        }
                    ]
                },
                ivrList:[
                    {
                        id:1,
                        name:'name1',
                        pic_location:'111dd',
                        compared:false
                    }
                ],//ji cheng
                svrList:[],//wai ke 
                evrList:[],//wai jie
                ipageNum:1,
                ipageTotal:20,
                ipageSize:1,
                epageNum:1,
                epageTotal:20,
                epageSize:1,
                spageNum:1,
                spageTotal:20,
                spageSize:1
            }
        },
        methods:{
            tabClick(val){
                var self= this;
                self.comparedNum = 0;
                switch(val.index){
                    case "0":
                    self.getivrList();
                    break;
                    case "1":
                    self.getsvrList();
                    break;
                    case "2":
                    self.getevrList();
                    break;
                    default:
                    break;
                }
            },
            handleIvrChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.ipageNum);
                self.getivrList();


            },
            handleSvrChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.spageNum);
                self.getsvrList();
            
            },
            handleEvrChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.epageNum);
                self.getevrList();
            },
            getivrList(){
                var self=this;
                self.comparedState = [];
                var _url = self.ivrURL+'/'+self.ipageNum;
                self.$axios({
                    url:_url,
                    // url:'./static/ivr.json',
                    methods:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.ivrList = [];
                    self.ajaxData = response.data.data;
                    for(let i=0;i<self.ajaxData.payload.length;i++){
                        self.ivrList[i] = self.ajaxData.payload[i];
                        self.ivrList[i].compared = false;
                        self.comparedState[self.ivrList[i].id] = false;
                    }
                }).catch((error)=>{
                    this.$message({
                        type:'info',
                        message:'connection fail,press F12 to see the error in console'
                    });
                    console.log("ERROR:");
                    console.log(error);
                });
            },
            getsvrList(){
                var self=this;
                self.compareState = [];
                var _url = self.svrURL+'/'+self.spageNum;
                self.$axios({
                    url:_url,
                    // url:'./static/ivr.json',
                    methods:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.svrList = [];
                    self.ajaxData = response.data.data;
                    for(let i=0;i<self.ajaxData.payload.length;i++){
                        self.svrList[i] = self.ajaxData.payload[i];
                        self.svrList[i].compared = false;
                        self.comparedState[self.svrList[i].id] = false;
                    }
                }).catch((error)=>{
                    this.$message({
                        type:'info',
                        message:'connection fail,press F12 to see the error in console'
                    });
                    console.log("ERROR:");
                    console.log(error);
                });
            },
            getevrList(){
                var self=this;
                self.comparedState = [];
                var _url = self.evrURL+'/'+self.epageNum;
                self.$axios({
                    url:_url,
                    // url:'./static/ivr.json',
                    methods:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.evrList = [];
                    self.ajaxData = response.data.data;
                    for(let i=0;i<self.ajaxData.payload.length;i++){
                        self.evrList[i] = self.ajaxData.payload[i];
                        self.evrList[i].compared = false;
                        self.comparedState[self.evrList[i].id] = false;
                    }
                }).catch((error)=>{
                    this.$message({
                        type:'info',
                        message:'connection fail,press F12 to see the error in console'
                    });
                    console.log("ERROR:");
                    console.log(error);
                });
            },
            ivrClick(item){
                var self=this;
                self.selected = 1;
                self.$router.push('/user/ivr?'+item.id);
            },
            svrClick(item){
                var self=this;
                 self.selected = 2;
                self.$router.push('/user/svr?'+item.id);
            },
            evrClick(item){
                var self=this;
                 self.selected = 3;
                self.$router.push('/user/evr?'+item.id);
            },
            compare(item){
                var self=this;
                console.log(item);
                var target = self.comparedState[item.id];
                if(target){
                    self.comparedNum--;
                    item.compared = !item.compared;
                    target = !target;
                    self.comparedState.splice(item.id,1,target);
                }
                else{
                    if(self.comparedNum<4){
                        self.comparedNum++;
                        item.compared = !item.compared;
                        target = !target;
                        self.comparedState.splice(item.id,1,target);
                    }
                    else{
                        this.$message({
                            type:'info',
                            message:'最多只能比较4个同类产品！'
                        });
                    }
                }
                if(self.activePane == "ivr"){
                    self.setStorage(self.ivrList);
                    localStorage.setItem('kind',"ivr");
                }
                else if(self.activePane == "svr"){
                    self.setStorage(self.svrList);
                    localStorage.setItem('kind',"svr");
                }
                else if(self.activePane == "evr"){
                    self.setStorage(self.evrList);
                    localStorage.setItem('kind',"evr");
                }
                // jump to compare page due to select pane
            },
            setStorage(_list){
                var store = [];
                for(let i=0;i<_list.length;i++){
                    if(_list[i].compared ===true){
                        store.push(_list[i].id);
                    }
                }
                var str = store.join();
                localStorage.setItem('store',str);
                console.log(localStorage.getItem('store'));
                store = [];
            }

        },
        mounted(){
            var self = this;
            self.getivrList();
            localStorage.clear();
        }
    }
</script>

<style scoped>
.crumbs{
    text-decoration: none;
}
.form-box{
    width:300px;
    margin-top:50px;
    margin-left:0px;
    box-shadow:0 0 8px 0
        rgba(232,237,250,.9),0 2px 4px 0
        rgba(232,237,250,.9);
    padding:50px 50px 50px 10px;  
}
.submit-btn{
    width:220px;
    margin-left:80px;
}
.submit-btn button{
    width:100%; 
}

/*=======================================*/
ul {
    list-style: none;
    display: block;

}
li {
    list-style-type:none;
    width:100%;
    border:1px solid #ccc;
}
a {
    text-decoration: none;
}
a:hover, a:visited {
    text-decoration: none;
}
.product-list{
    width:1000px;
}
.product-item{
    float:left;
    width:240px;
    height:280px;
    padding: 30px 20px 20px 20px;
    text-align: center;

}
.product-img{
    width:200px;
    height:200px;
    margin:0 auto;
}
.product-img img{
    width:100%;
}
.product-item h3{
    margin-top:12px;
    margin-bottom:12px;
    font-size: 20px;
    font-weight: lighter;

}

.pagination{
    margin-left:50px;
}

</style>