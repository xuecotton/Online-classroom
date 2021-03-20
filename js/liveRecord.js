var vm = new Vue({
    el: '#app',
    data: {
        activeNames:"",
        lessionList:[
            "摄影摄像技术",
            "数字媒体技术基础",
            "PhotoShop图形图像处理",
            "PhotoShop图形图像处理",
            "PhotoShop图形图像处理",
            "摄影摄像技术",
            "数字媒体技术基础",
            "PhotoShop图形图像处理",
            "PhotoShop图形图像处理",
            "PhotoShop图形图像处理",
            "摄影摄像技术",
            "数字媒体技术基础",
            "数字媒体技术基础",
            "摄影摄像技术",
            "数字媒体技术基础",
            "PhotoShop图形图像处理",
            "PhotoShop图形图像处理",
            "PhotoShop图形图像处理",
            "摄影摄像技术",
            "数字媒体技术基础",
            "PhotoShop图形图像处理",
            "PhotoShop图形图像处理",
            "PhotoShop图形图像处理",
            "摄影摄像技术",
            "数字媒体技术基础",
            "数字媒体技术基础",
        ],
        tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        multipleSelection: [],
        currentPage4:1,
        
    },
    methods: {
        handleChange(val){
            console.log(val);

        },
        selectLession(item){

        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },

        



        // 分页
        handleCurrentChange(val){

        },
        handleSizeChange(val){

        },


    },
    mounted(){


    }
})