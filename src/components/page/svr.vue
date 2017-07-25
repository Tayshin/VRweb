<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>产品中心</el-breadcrumb-item>
                <el-breadcrumb-item>产品列表</el-breadcrumb-item>
                <el-breadcrumb-item>PC头显</el-breadcrumb-item>
                <el-breadcrumb-item>详细参数</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="product-box">
            <div class="box-param">
                <div class="param-title">
                    <h3>{{data.name}}</h3>
                </div>
                <div class="param-tab">
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>产品外观</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <div class="img-container">
                                                <img :src="data.pic_location">
                                            </div>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>产品配置</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <li>
                                                <span class="para-name">屏幕类型</span>
                                                <span class="para-val">{{data.screen_type}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">分辨率</span>
                                                <span class="para-val">{{data.resolution}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">重量</span>
                                                <span class="para-val">{{data.weight}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>安全性</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <li>
                                                <span class="para-name">温升/发热</span>
                                                <span class="para-val">{{data.heat}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">蓝光辐照度</span>
                                                <span class="para-val">{{data.irradiance}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">声压</span>
                                                <span class="para-val">{{data.sound_pressure}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">边界警示</span>
                                                <span class="para-val">{{data.boundary_warning}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>电磁兼容性</th>
                                <td>
                                    <div class="tab-content">
                                        <div class="img-container">
                                            <img :src="data.em_compability_path">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                 <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>性能</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <li>
                                                <span class="para-name">视场角</span>
                                                <span class="para-val">{{data.angle_of_field}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">刷新率</span>
                                                <span class="para-val">{{data.refresh_rate}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">系统延迟</span>
                                                <span class="para-val">{{data.system_latency}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">跟踪模式</span>
                                                <span class="para-val">{{data.trace_mode}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">跟踪范围</span>
                                                <span class="para-val">{{data.trace_range}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
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
                data:{
                    id:1,
                    name:"name1",
                    pic_location:"./static/img/img.jpg",
                    //产品配置
                    screen_type:"22222",//屏幕类型
                    resolution:"222222",//分辨率
                    weight:1,//重量
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
                }
            }
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
             getData(id){
                var self = this;
                self.data = {};
                self.$axios({
                    url:'/svr/'+id,
                    // url:'./static/data.json',
                    method:'get',
                    baseURL: self.hostURL
                }).then((response)=>{
                    console.log(response.data);
                    self.data= response.data.payload;
                }).catch((error)=>{
                    console.log(error);
                });
            }

        },
        
        mounted(){
            var self= this;
            console.log("2222");
            var arr = location.href.split('?');
            var id = arr[1];
            console.log(id);
            self.getData(id);  


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
.product-box{
    padding: 28px;
    width: 800px;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
}
.box-param{
    width:100%;
    margin-top:5px;
}
.param-title{
    height: 40px; 
    border-top:none;
    border-bottom: 1px solid #e6e6e6;
    text-align: center;
}
.param-title h3{]
    padding:0 20px;
    font: normal 16px/40px 'Microsoft YaHei',arial;
}
.param-tab table{
    table-layout: fixed; 
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e6e6e6;
    border-bottom: 0 none;
}
.param-tab th{
    width: 118px;
    padding: 15px 0 0 20px;
    background: #fafafa;
    border-right: 1px solid #e6e6e6;
    text-align: left;
    font: bold 16px/26px "Microsoft YaHei",arial;
    vertical-align: top;
}
.param-tab td{
    width: 605px;
    padding: 8px 0 6px;
    vertical-align: top;
}
.tab-content{
    padding: 6px 20px 8px 20px;
}
ul{
    list-style: none;    
}
.category li{
    position: relative;
    padding: 2px 0 2px 138px;
    line-height: 26px;
    _zoom: 1;
    word-wrap: break-word;
    font: 14px/26px 'Microsoft YaHei',arial;
    color: #666;
}
.para-name{
    position: absolute;
    top: 2px;
    left:0;
    font-weight: bold;
}
.para-val{
    position: relative;
    color: #666;
    border-bottom: 1px dashed #0a50a1;
}
.img-container{
    max-width: 50%;
}
.img-container img{
    width: 100%;
}
</style>