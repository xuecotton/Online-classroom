Vue.use(MavonEditor);
var vm = new Vue({
  el: "#app",
  data: {
    Content: "",
    fileList: [],
    showUpload: false,
    percentage: 35,
    customColor: "#409eff",
    lesson: {
      title: "",
      subject: {
        sysSub: false,
        onSub: false,
        afterSub: false,
      },
    },
    // 判断题
    boxJud: {
      title: "",
      answer: "",
    },
    // 单选题
    boxSingle: {
      title: "",
      options: [],
      answer: "",
    },
    // 多选题
    boxMult: {
      title: "",
      options: [],
      answer: [],
    },
    editSubDialog: true,
    radio: "",
    radio1: "",
    tableData: [
      {
        type: "判断题",
        name:
          "王2此操作将删除该条记录以及该纪录下的所有数据此操作将删除该条记录以及该纪录下的所有数据016小虎",
        address:
          "上海市普陀区金沙江路 1518 弄2此操作将删除该条记录以及该纪录下的所有数据此操作将删除该条记录以及该纪录下的所有数据016",
      },
      {
        type: "判断题",
        name:
          "王2此操作将删除该条记录以及该纪录下的所有数据此操作将删除该条记录以及该纪录下的所有数据016小虎",
        address:
          "上海市普陀区金沙江路 1518 弄2此操作将删除该条记录以及该纪录下的所有数据此操作将删除该条记录以及该纪录下的所有数据016",
      },
      {
        type: "选择题-单选",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        type: "选择题-多选",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
      },
    ],
    search: "",
  },
  methods: {
    show() {
      console.log(this.Content);
    },
    // 上传钩子
    handleChange(a, b) {
      // console.log(a);
      // console.log(b);
      // console.log(this.fileList);
      this.showUpload = false;
    },
    handleRemove() {
      console.log("删除");
    },
    handleScc(res, file, fileList) {
      console.log("成功");
    },
    handleErr(err, file, fileList) {
      console.log("err");
      console.log(err, file, fileList);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    // 删除
    delAll() {
      this.$confirm(
        "此操作将删除该条记录以及该纪录下的所有数据, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    addNewSub(isOn) {
      console.log(isOn);
      this.editSubDialog = true;
    },
    // 操作题库列表
    upIndex(index, row) {
      console.log("上升");
    },
    downIndex(index, row) {
      console.log("下降");
    },
    editItem(index, row) {
      console.log("编辑");
    },
    delItem(index, row) {
      console.log("删除");
    },
  },
  mounted() {},
});
