<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span="7">
          <el-tabs class="tabs">
            <el-tab-pane label="点餐">
              <el-table :data="tableDate" border style="width:100%">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" width="50px"></el-table-column>
                <el-table-column prop="price" label="金额" width="70px"></el-table-column>
                <el-table-column label="操作" width="100px" fixed="right">
                  <template  slot-scope="scope">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="total">
                <span>数量：{{totalCount}}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>总价：{{totalMoney}}元</span>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">挂单</el-tab-pane>
            <el-tab-pane label="外卖">外卖</el-tab-pane>
          </el-tabs>
          <div class="div-btn">
            <el-button type="warning">挂单</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="success">结账</el-button>
          </div>
        </el-col>
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="good in oftenGoods" @click="addOrderList(good)">
                  <span>{{good.goodsName}}</span>
                  <span class="o-price">￥{{good.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                  <ul class="cookList">
                    <li>
                      <span class="foodImg">
                        <img src="http://image.baidu.com/search/detaiel?ct=503316480&z=0&ipn=d&word=kfc%E9%A6%99%E8%BE%A3%E9%B8%A1%E8%85%BF%E5%A0%A1%E5%9B%BE%E7%89%87&step_word=&hs=2&pn=4&spn=0&di=40490&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3726851245%2C3384242883&os=302120181%2C594439949&simid=3513121494%2C357944683&adpicid=0&lpn=0&ln=1517&fr=&fmq=1584512094569_R&fm=result&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=15&oriquery=&objurl=http%3A%2F%2Fg-search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi1%2F3781647481%2FTB2WLWVXPTpK1RjSZKPXXa3UpXa_!!3781647481.jpg_300x300.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B8mbb_z%26e3Bv54AzdH3Fi75AzdH3Fk-BFCFBcCdBBFlDnCcBBDDCbAFBABAB8A9_z%26e3Bip4s&gsm=5&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"/>
                      </span>
                      <span class="foodName">香辣鸡腿堡</span>
                      <span class="foodPrice">￥20.00元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食"></el-tab-pane>
              <el-tab-pane label="饮料"></el-tab-pane>
              <el-tab-pane label="套餐"></el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Pos",
  data() {
    return {
      tableDate: [],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17
        }
      ],
      totalMoney: 0,
      totalCount: 0
    };
  },
  created: function() {
    axios
      .get("")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        alert("网络错误");
      });
  },
  // mounted: function() {
  //   var orderHeight = document.body.clientHeight;
  //   document.getElementById("order-list").style.height = orderHeight + "px";
  // },
  methods: {
    addOrderList(good) {
      this.totalMoney = 0;
      this.totalCount = 0;

      //判断选中商品是否已经存在于订单列表中,默认不存在
      let isHave = false;
      for (let i = 0; i < this.tableDate.length; i++) {
        if (this.tableDate[i].goodsId === good.goodsId) {
          isHave = true;
        }
      }
      //如果不存在，添加商品到列表中；若存在，改变列表中商品的数量
      if (!isHave) {
        let newGood = {
          goodsId: good.goodsId,
          goodsName: good.goodsName,
          price: good.price,
          count: 1
        };
        this.tableDate.push(newGood);
      } else {
        let arr = this.tableDate.filter(o => o.goodsId == good.goodsId);
        arr[0].count++;
      }

      for (let i = 0; i < this.tableDate.length; i++) {
        let element = this.tableDate[i];
        this.totalCount += element.count;
        this.totalMoney += element.count * element.price;
      }
    }
  }
};
</script>

<style scoped>
.tabs {
  background-color: #f9fafc;
  padding: 10px;
}
.total {
  padding-top: 10px;
  padding-left: 150px;
}
.div-btn {
  margin-top: 10px;
  margin-left: 150px;
}
.title {
  height: 20px;
  /* border-bottom: 1px solid #d3dce6; */
  background-color: #f9fafc;
  padding: 10px;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
