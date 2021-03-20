var vm = new Vue({
    el: '#app',
    data: {
        keyWord:"", //查询关键词
        dataList:[
            {"title":"独孤九剑","author":"独孤求败","img":""},
            {"title":"乾坤大挪移","author":"明教","img":""},
            {"title":"九阳神功","author":"菩提达摩","img":""},
            {"title":"九阴真经","author":"黄裳","img":""},
            {"title":"六脉神剑","author":"大理段氏","img":""},
            {"title":"葵花宝典","author":"前朝太监","img":""},
        ],//列表数据
    },
    methods: {
        search(){
            console.log('我操作了查询按钮');
            console.log('查询',this.keyWord);
            
        },
        additem(){
            console.log('打开新增弹框');
            
        },
        delItem(index){
            this.$confirm("确认删除此项吗？","提示",{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                console.log('aaa');
                
                this.dataList = this.dataList.filter((item,i)=>{
                    return i != index
                })
                this.$message({
                    type: 'success',
                    message: '删除成功'
                }); 
            }).catch(()=>{
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });    
                console.log(this.dataList);
            })
            
            
        },
        toVideo(index){
            console.log('跳去去直播',index);
            window.location.href="./liveSelect.html"
            
        }

    },
    mounted() {


    }
})