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
                  <template>
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
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
                <li v-for="good in oftenGoods">
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
                        <img />
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
      ]
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
  mounted: function() {
    var orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  methods:{
    addOrderList(goods){
      //判断选中商品是否已经存在于订单列表中
      let isHave = false;

      //如果不存在，添加商品到列表中；若存在，改变

    }
  }
};
</script>

<style scoped>
.tabs{
  background-color: #f9fafc;
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
