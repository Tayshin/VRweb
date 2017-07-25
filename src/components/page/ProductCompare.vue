<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>产品中心</el-breadcrumb-item>
                <el-breadcrumb-item>产品对比</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="compare-box">
            <table class="compare-table">
                <tbody>
                    <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>产品外观</strong>
                        </td>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <img :src="data.pic_location">
                            </div>
                        </td>
                    </tr>
                    <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>产品配置</strong>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>产品型号</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.name}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>屏幕类型</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.screen_type}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>分辨率</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.resolution}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>重量</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.weight}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>CPU</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.cpu}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>内存</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.memory}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>电池容量</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.battery_capacity}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>安全性</strong>
                        </td>

                    </tr>
                    <tr class="param-list">
                        <th>温升/发热</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.heat}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>蓝光辐照度</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.irradiance}}</span>
                            </div>
                        </td>
                    </tr>
                     <tr class="param-list">
                        <th>声压</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.sound_pressure}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>边界警示</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.boundary_warning}}</span>
                            </div>
                        </td>
                    </tr>

                    <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>电磁兼容性</strong>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>边界警示</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.boundary_warning}}</span>
                            </div>
                        </td>
                    </tr>

                    <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>性能</strong>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>视场角</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.angle_of_field}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>刷新率</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.refresh_rate}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>系统延迟</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.system_latency}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>跟踪模式</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data. trace_mode}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>跟踪范围</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.trace_range}}</span>
                            </div>
                        </td>
                    </tr>
 
                    <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>20min视疲劳</strong>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>视力变化均值</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.avg_sight_change}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>SSQ均值</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.avg_ssq}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th>CVS均值</th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.avg_cvs}}</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
       
         
    </div>
</template>

<script>
    
    export default {
        data: function(){
            return {
                activeName2: 'first',
                allowSubmit:true,
                hostURL:"/VR",
                datas:[{
                    id:1,
                    name:"name1",
                    pic_location:"./static/img/img.jpg",
                    //产品配置
                    screen_type:"22222",//屏幕类型
                    resolution:"222222",//分辨率
                    weight:1,//重量
                    cpu:1,
                    memory:1,
                    battery_capacity:1,
                    //安全性
                    heat:1,//温升/发热
                    irradiance:1,//蓝光辐照度
                    sound_pressure:1,//声压
                    boundary_warning:"222222222",//边界警示
                    // 电磁兼容性
                    em_compability_path:"./static/img/img.jpg",
                    //性能
                    angle_of_field:1,//视场角
                    refresh_rate:1,//刷新率
                    system_latency:1,//系统延迟
                    trace_mode:1,//跟踪模式
                    trace_range:1,//跟踪范围
                    //20min视疲劳
                    avg_sight_change:1,//视力变化均值
                    avg_ssq:1,//SSQ均值
                    avg_cvs:1 //CVS均值
                },
                {
                    id:1,
                    name:"name1",
                    pic_location:"./static/img/img.jpg",
                    //产品配置
                    screen_type:"22222",//屏幕类型
                    resolution:"222222",//分辨率
                    weight:1,//重量
                    cpu:1,
                    memory:1,
                    battery_capacity:1,
                    //安全性
                    heat:1,//温升/发热
                    irradiance:1,//蓝光辐照度
                    sound_pressure:1,//声压
                    boundary_warning:"222222222",//边界警示
                    // 电磁兼容性
                    em_compability_path:"./static/img/img.jpg",
                    //性能
                    angle_of_field:1,//视场角
                    refresh_rate:1,//刷新率
                    system_latency:1,//系统延迟
                    trace_mode:1,//跟踪模式
                    trace_range:1,//跟踪范围
                    //20min视疲劳
                    avg_sight_change:1,//视力变化均值
                    avg_ssq:1,//SSQ均值
                    avg_cvs:1 //CVS均值
                },
                {
                    id:1,
                    name:"name1",
                    pic_location:"./static/img/img.jpg",
                    //产品配置
                    screen_type:"22222",//屏幕类型
                    resolution:"222222",//分辨率
                    weight:1,//重量
                    cpu:1,
                    memory:1,
                    battery_capacity:1,
                    //安全性
                    heat:1,//温升/发热
                    irradiance:1,//蓝光辐照度
                    sound_pressure:1,//声压
                    boundary_warning:"222222222",//边界警示
                    // 电磁兼容性
                    em_compability_path:"./static/img/img.jpg",
                    //性能
                    angle_of_field:1,//视场角
                    refresh_rate:1,//刷新率
                    system_latency:1,//系统延迟
                    trace_mode:1,//跟踪模式
                    trace_range:1,//跟踪范围
                    //20min视疲劳
                    avg_sight_change:1,//视力变化均值
                    avg_ssq:1,//SSQ均值
                    avg_cvs:1 //CVS均值
                }]

            }//return end
        },
        methods:{
            codeParsing(code) {
                var msg = (Title, Message) => {
                    this.$message({
                        title: Title,
                        message: Message,
                        type: 'error'
                    });
                };
                switch(code) {
                    case -1:
                        msg('系统错误', '未知错误，请上报管理员');
                        break;
                    case 201:
                        msg('输入域错误', '验证码错误');
                        break;
                    case 300:
                        msg('输入域错误', '邮箱或密码错误');
                        break;
                    case 301:
                        msg('权限问题', '用户已禁用，请联系管理员');
                        break;
                    case 302:
                        msg('权限问题', '用户未激活，请去邮箱激活用户');
                        break;
                    case 303:
                        msg('注册问题', '邮箱已占用，请更改邮箱');
                        break;
                    case 304:
                        msg('注册问题', '昵称已占用，请更改昵称');
                        break;
                    case 400:
                        msg('权限问题', '用户未登录，请重新登录');
                        break;
                    case 401:
                        msg('权限问题', '用户无权访问，请联系管理员');
                        break;
                    case 402:
                        msg('操作错误', '删除错误,请刷新重试');
                        break;
                    case 500:
                        msg('系统错误', '未知错误，请上报管理员');
                        break;
                    case 600:
                        msg('TIME_OUT', '访问超时，请检查网络连接');
                        break;
                    case 700:
                        msg('激活错误', '非法激活链接，请联系管理员');
                        break;
                    case 800:
                        msg('激活错误', '用户已被激活，请直接登录');
                        break;
                    default:
                        break;
                }
            },

            getData(){
                var self = this;
                var postId = {
                    idList:[]
                };
                var _url = "";
                var str = localStorage.getItem('store');
                var arr = str.split(',');
                for(let i = 0;i<arr.length;i++){
                    arr[i] = parseInt(arr[i]);
                }
                postId.idList = arr;
                var kind = localStorage.getItem('kind');
                if(kind=="ivr"){
                    _url = '/ivrCompare';
                }
                else if(kind=="svr"){
                    _url = '/svrCompare';
                }
                else{
                    _url = '/evrCompare';
                }
                self.datas = {};
                self.$axios({
                    url:_url,
                    // url:'./static/ivr.json',
                    method:'post',
                    data:postId,
                    baseURL: self.hostURL
                }).then((response)=>{
                    console.log(response.data);
                    self.datas= response.data.data.payload;
                }).catch((error)=>{
                    console.log(error);
                });
            }

        },
        
        mounted(){
            var self= this;
            self.getData();
        }
    }
</script>

<style scoped>
.crumbs{
    text-decoration: none;
}
.bread{
    font-size: 16px;
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
.compare-box{
    padding: 28px;
    width: 1000px;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
}
.compare-table{
    border-collapse: collapse;
    width: 100%;
}
.compare-table .cate-title{
    text-align: left;
    height: 20px;
    border: 1px solid #e6e6e6;
    padding-left: 10px;
    background: #fafafa;
}
.compare-table td{
    width: 218px;
    padding: 8px 0;
    zoom: 1;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
}
.cate-title strong{
    position: relative;
    display: block;
    padding-left: 17px;
    height: 20px;
    font: 16px/20px 'Microsoft YaHei',arial;
    background-position: -87px 2px;
    color: #333;
}
.compare-table th{
    padding: 8px 10px;
    width: 102px;
    border: 1px solid #e6e6e6;
    background: #fafafa;
    font-weight: normal;
    text-align: right;
    line-height: 18px;
    font-size: 14px
}
.param-content{
    width: 200px;
}
.param-content img{
    width:100%;
}
</style>