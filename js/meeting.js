var vm = new Vue({
  el: "#app",
  data: {
    isOnline: true, //是否正在直播
    activeIn: "", //校外教学点
    activeOut: "", //校内教学点
    dialogTableClassroom: false, //教室列表弹框
    dialogCreateMetting: false,
    dataList: [
      {
        id: "12",
        title: "智慧城市学院",
        activeNum: 3,
        children: [
          { uid: "121", major: "建筑智能化", className: "建筑智能化1班" },
          { uid: "122", major: "建筑智能化", className: "建筑智能化2班" },
          { uid: "123", major: "建筑智能化", className: "建筑智能化3班" },
          { uid: "124", major: "建筑智能化", className: "建筑智能化4班" },
          { uid: "125", major: "建筑智能化", className: "建筑智能化5班" },
          { uid: "126", major: "建筑智能化", className: "建筑智能化6班" },
        ],
      },
      {
        id: "13",
        title: "物联网学院",
        activeNum: 3,
        children: [
          { uid: "131", major: "物联网工程", className: "物联网工程1班" },
          { uid: "132", major: "物联网工程", className: "物联网工程2班" },
          { uid: "133", major: "物联网工程", className: "物联网工程3班" },
          { uid: "134", major: "物联网工程", className: "物联网工程4班" },
          { uid: "135", major: "物联网工程", className: "物联网工程5班" },
          { uid: "136", major: "物联网工程", className: "物联网工程6班" },
        ],
      },
      {
        id: "14",
        title: "物联网学院",
        activeNum: 3,
        children: [
          { uid: "131", major: "物联网工程", className: "物联网工程1班" },
          { uid: "132", major: "物联网工程", className: "物联网工程2班" },
          { uid: "133", major: "物联网工程", className: "物联网工程3班" },
          { uid: "134", major: "物联网工程", className: "物联网工程4班" },
          { uid: "135", major: "物联网工程", className: "物联网工程5班" },
          { uid: "136", major: "物联网工程", className: "物联网工程6班" },
        ],
      },
      {
        id: "15",
        title: "物联网学院",
        activeNum: 3,
        children: [
          { uid: "131", major: "物联网工程", className: "物联网工程1班" },
          { uid: "132", major: "物联网工程", className: "物联网工程2班" },
          { uid: "133", major: "物联网工程", className: "物联网工程3班" },
          { uid: "134", major: "物联网工程", className: "物联网工程4班" },
          { uid: "135", major: "物联网工程", className: "物联网工程5班" },
          { uid: "136", major: "物联网工程", className: "物联网工程6班" },
        ],
      },
      {
        id: "16",
        title: "物联网学院",
        activeNum: 3,
        children: [
          { uid: "131", major: "物联网工程", className: "物联网工程1班" },
          { uid: "132", major: "物联网工程", className: "物联网工程2班" },
          { uid: "133", major: "物联网工程", className: "物联网工程3班" },
          { uid: "134", major: "物联网工程", className: "物联网工程4班" },
          { uid: "135", major: "物联网工程", className: "物联网工程5班" },
          { uid: "136", major: "物联网工程", className: "物联网工程6班" },
        ],
      },
      {
        id: "17",
        title: "物联网学院",
        activeNum: 3,
        children: [
          { uid: "131", major: "物联网工程", className: "物联网工程1班" },
          { uid: "132", major: "物联网工程", className: "物联网工程2班" },
          { uid: "133", major: "物联网工程", className: "物联网工程3班" },
          { uid: "134", major: "物联网工程", className: "物联网工程4班" },
          { uid: "135", major: "物联网工程", className: "物联网工程5班" },
          { uid: "136", major: "物联网工程", className: "物联网工程6班" },
        ],
      },
      {
        id: "18",
        title: "物联网学院",
        activeNum: 3,
        children: [
          { uid: "131", major: "物联网工程", className: "物联网工程1班" },
          { uid: "132", major: "物联网工程", className: "物联网工程2班" },
          { uid: "133", major: "物联网工程", className: "物联网工程3班" },
          { uid: "134", major: "物联网工程", className: "物联网工程4班" },
          { uid: "135", major: "物联网工程", className: "物联网工程5班" },
          { uid: "136", major: "物联网工程", className: "物联网工程6班" },
        ],
      },
      {
        id: "19",
        title: "物联网学院",
        activeNum: 3,
        children: [
          { uid: "131", major: "物联网工程", className: "物联网工程1班" },
          { uid: "132", major: "物联网工程", className: "物联网工程2班" },
          { uid: "133", major: "物联网工程", className: "物联网工程3班" },
          { uid: "134", major: "物联网工程", className: "物联网工程4班" },
          { uid: "135", major: "物联网工程", className: "物联网工程5班" },
          { uid: "136", major: "物联网工程", className: "物联网工程6班" },
        ],
      },
      {
        id: "13",
        title: "物联网学院",
        activeNum: 3,
        children: [
          { uid: "131", major: "物联网工程", className: "物联网工程1班" },
          { uid: "132", major: "物联网工程", className: "物联网工程2班" },
          { uid: "133", major: "物联网工程", className: "物联网工程3班" },
          { uid: "134", major: "物联网工程", className: "物联网工程4班" },
          { uid: "135", major: "物联网工程", className: "物联网工程5班" },
          { uid: "136", major: "物联网工程", className: "物联网工程6班" },
        ],
      },
    ],
    props: { multiple: true },
    options: [
      {
        value: 1,
        label: "学院1",
        children: [
          {
            value: 2,
            label: "班级1",
            children: [
              { value: 3, label: "风清扬" },
              { value: 4, label: "周芷若" },
              { value: 5, label: "石破天" },
            ],
          },
          {
            value: 7,
            label: "班级2",
            children: [
              { value: 8, label: "叮当" },
              { value: 9, label: "物理" },
              { value: 10, label: "化学" },
            ],
          },
          {
            value: 12,
            label: "班级3",
            children: [
              { value: 13, label: "杭州" },
              { value: 14, label: "宁波" },
              { value: 15, label: "嘉兴" },
            ],
          },
        ],
      },
      {
        value: 17,
        label: "教学点1",
        children: [
          {
            value: 18,
            label: "班级",
            children: [
              { value: 19, label: "小红" },
              { value: 20, label: "王建刚" },
            ],
          },
          {
            value: 21,
            label: "新疆维吾尔族自治区",
            children: [
              { value: 22, label: "乌鲁木齐" },
              { value: 23, label: "克拉玛依" },
            ],
          },
        ],
      },
    ],
    gridData: [
      { id: 1, name: "汽车检测与维修技术-2021级汽车检测与维修技术一班" },
      { id: 2, name: "汽车检测与维修技术-2021级汽车检测与维修技术2班" },
      { id: 3, name: "汽车检测与维修技术-2021级汽车检测与维修技术3班" },
    ],
    selectKey: "",
  },
  methods: {
    create() {
      this.dialogCreateMetting = true;
    },
    collapseChange(val) {
      console.log(val);
    },
    delItem(row) {
      console.log(row);
    },
    showTable() {
      this.dialogTableClassroom = true;
    },
    selectClass(i) {
      this.selectKey = i;
      console.log("指向");
    },
  },
  mounted() {},
});
