var vm = new Vue({
  el: "#app",
  data: {
    isLogin: true,
    dataList: [
      {
        id: 1,
        date: "11:00",
        name: "A028",
        reason: "陌生人闯入",
        pic: "./img/tem/aa5.jpg",
      },
      {
        id: 2,
        date: "05:06",
        name: "A621",
        reason: "陌生人闯入",
        pic: "./img/tem/aa6.jpg",
      },
      {
        id: 3,
        date: "09:07",
        name: "A220",
        reason: "陌生人闯入",
        pic: "./img/tem/aa7.jpg",
      },
      {
        id: 4,
        date: "11:50",
        name: "B018",
        reason: "长时间拔凉拔凉的",
        pic: "./img/tem/aa8.jpg",
      },
      {
        id: 5,
        date: "03:15",
        name: "C051",
        reason: "斤斤计较经济界解决",
        pic: "./img/tem/aa9.jpg",
      },
      {
        id: 6,
        date: "10:44",
        name: "D051",
        reason: "坎坎坷坷快看快看快快快",
        pic: "./img/tem/aa10.jpg",
      },
      {
        id: 7,
        date: "09:07",
        name: "A220",
        reason: "陌生人闯入",
        pic: "./img/tem/aa8.jpg",
      },
      {
        id: 8,
        date: "11:50",
        name: "B018",
        reason: "陌生人闯入",
        pic: "./img/tem/aa7.jpg",
      },
      {
        id: 8,
        date: "11:50",
        name: "B018",
        reason: "陌生人闯入",
        pic: "./img/tem/aa10.jpg",
      },
      {
        id: 8,
        date: "11:50",
        name: "B018",
        reason: "陌生人闯入",
        pic: "./img/tem/aa6.jpg",
      },
    ],
    lesson_atten: {
      isInner: true,
      cycle: "day",
    },
    teach_atten: {
      isInner: true,
      cycle: "day",
    },
    optionPie: {
      color: ["#094c9e", "#23a8ff"],
      left: "0",
      series: [
        {
          name: "校内宿舍签到",
          type: "pie",
          radius: ["50%", "90%"],
          avoidLabelOverlap: false,
          right: "0",
          label: {
            normal: {
              formatter: "({d}%)",
              textStyle: {
                fontWeight: "normal",
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
              },
              position: "center",
            },
          },
          emphasis: {
            label: {
              show: false,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          data: [
            { value: 9527, name: "已签到" },
            { value: 346, name: "未签到" },
          ],
        },
      ],
    },
    optionLine: {
      color: ["#ec1c24", "#094c9e"],
      legend: {
        data: ["已签到", "未签到"],
        textStyle: {
          fontSize: 18, //字体大小
          color: "#ffffff", //字体颜色
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
              fontSize: 12,
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
              fontSize: 14,
            },
          },
        },
      ],
      series: [
        {
          name: "已签到",
          type: "line",
          // stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310],
          label: {
            normal: {
              show: true,
              position: "top",
            },
          },
        },

        {
          name: "未签到",
          type: "line",
          // stack: '总量',
          areaStyle: {},
          data: [120, 80, 79, 126, 190, 215, 210],
          label: {
            normal: {
              show: true,
              position: "top",
            },
          },
        },
      ],
    },
    schoolActBtn: 1,
    outActBtn: 1,
  },
  methods: {
    //  左边饼图切换
    changeSchoolAct(index) {
      this.schoolActBtn = index;
      switch (index) {
        case 1:
          this.optionPie.series[0].data = [
            { value: 19852, name: "已签到" },
            { value: 3351, name: "未签到" },
          ];
          break;
        case 2:
          this.optionPie.series[0].data = [
            { value: 18151, name: "已签到" },
            { value: 1652, name: "未签到" },
          ];
          break;

        case 3:
          this.optionPie.series[0].data = [
            { value: 17459, name: "已签到" },
            { value: 2548, name: "未签到" },
          ];
          break;
      }
      this.optionPie.color = ["#094c9e", "#23a8ff"];
      mypia1.setOption(this.optionPie);
    },
    changeOutAct(index) {
      this.outActBtn = index;
      switch (index) {
        case 1:
          this.optionPie.series[0].data = [
            { value: 19852, name: "已签到" },
            { value: 3351, name: "未签到" },
          ];
          break;
        case 2:
          this.optionPie.series[0].data = [
            { value: 18151, name: "已签到" },
            { value: 1652, name: "未签到" },
          ];
          break;

        case 3:
          this.optionPie.series[0].data = [
            { value: 17459, name: "已签到" },
            { value: 2548, name: "未签到" },
          ];
          break;
      }
      this.optionPie.color = ["#094c9e", "#23a8ff"];
      mypia2.setOption(this.optionPie);
    },

    // 折线图切换校内外
    changePositionAtten(index, val) {
      if (index == 1) {
        if (val) {
          this.optionLine.series[0].data = [357, 398, 415, 546, 502, 487, 412];
          this.optionLine.series[1].data = [257, 300, 315, 480, 466, 402, 361];
        } else {
          this.optionLine.series[0].data = [220, 148, 177, 334, 360, 388, 412];
          this.optionLine.series[1].data = [145, 100, 109, 234, 290, 330, 350];
        }
        this.lesson_atten.isInner = val;
        line1.setOption(this.optionLine);
      } else {
        if (val) {
          this.optionLine.series[0].data = [357, 398, 415, 546, 502, 487, 412];
          this.optionLine.series[1].data = [257, 300, 315, 480, 466, 402, 361];
        } else {
          this.optionLine.series[0].data = [220, 148, 177, 334, 360, 388, 412];
          this.optionLine.series[1].data = [145, 100, 109, 234, 290, 330, 350];
        }
        this.teach_atten.isInner = val;
        line2.setOption(this.optionLine);
      }
    },
    // 折线图切换周期
    changeCycleAtten(index, val) {
      if (index == 1) {
        this.lesson_atten.cycle = val;
      } else {
        this.teach_atten.cycle = val;
      }
    },
  },
  mounted() {
    mypia1 = echarts.init(document.getElementById("pia1"));
    mypia2 = echarts.init(document.getElementById("pia2"));
    mypia3 = echarts.init(document.getElementById("pia3"));
    mypia4 = echarts.init(document.getElementById("pia4"));
    mypia5 = echarts.init(document.getElementById("pia5"));
    line1 = echarts.init(document.getElementById("line1"));
    line2 = echarts.init(document.getElementById("line2"));
    // console.dir(mypia1);

    mypia1.setOption(this.optionPie);
    (this.optionPie.series[0].data = [
      { value: 1902, name: "已签到" },
      { value: 98, name: "未签到" },
    ]),
      mypia2.setOption(this.optionPie);
    (this.optionPie.series[0].data = [
      { value: 13666, name: "已签到" },
      { value: 6333, name: "未签到" },
    ]),
      mypia3.setOption(this.optionPie);
    (this.optionPie.series[0].data = [
      { value: 4222, name: "已签到" },
      { value: 15777, name: "未签到" },
    ]),
      (this.optionPie.color = ["#9e7409", "#efb013"]),
      mypia4.setOption(this.optionPie);
    (this.optionPie.series[0].data = [
      { value: 2111, name: "已签到" },
      { value: 17888, name: "未签到" },
    ]),
      (this.optionPie.color = ["#79099e", "#c440ef"]),
      mypia5.setOption(this.optionPie);
    line1.setOption(this.optionLine);
    line2.setOption(this.optionLine);
  },
});
