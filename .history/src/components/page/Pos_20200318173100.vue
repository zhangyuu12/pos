<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span="7">
          <el-tabs class="tabs">
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border style="width:100%">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" width="50px"></el-table-column>
                <el-table-column prop="price" label="金额" width="70px"></el-table-column>
                <el-table-column label="操作" width="100px" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="deleteOneGood(scope.row)">删除</el-button>
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
            <el-button type="danger" @click="deleteAllGoods()">删除</el-button>
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
              <el-tab-pane label="主食">
                <div>
                  <ul class="cookList">
                    <li v-for="food in stapleFoodList" @click="addOrderList(food)">
                      <span class="foodImg">
                        <img :src="food.img" width="100px" height="80px" />
                      </span>
                      <span class="foodName">{{food.goodsName}}</span>
                      <span class="foodPrice">￥{{food.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <div>
                  <ul class="cookList">
                    <li v-for="food in snackList" @click="addOrderList(food)">
                      <span class="foodImg">
                        <img :src="food.img" width="100px" height="80px" />
                      </span>
                      <span class="foodName">{{food.goodsName}}</span>
                      <span class="foodPrice">￥{{food.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <div>
                  <ul class="cookList">
                    <li v-for="food in drinkList" @click="addOrderList(food)">
                      <span class="foodImg">
                        <img :src="food.img" width="100px" height="80px" />
                      </span>
                      <span class="foodName">{{food.goodsName}}</span>
                      <span class="foodPrice">￥{{food.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <div>
                  <ul class="cookList">
                    <li v-for="food in setMealList" @click="addOrderList(food)">
                      <span class="foodImg">
                        <img :src="food.img" width="100px" height="80px" />
                      </span>
                      <span class="foodName">{{food.goodsName}}</span>
                      <span class="foodPrice">￥{{food.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
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
      tableData: [],
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
          goodsName: "墨西哥鸡肉卷",
          price: 15
        },
        {
          goodsId: 4,
          goodsName: "豪华全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsName: "香辣鸡翅",
          price: 10
        },
        {
          goodsId: 6,
          goodsName: "黄金鸡块",
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
          goodsName: "招牌薯条",
          price: 15
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17
        }
      ],
      stapleFoodList: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18,
          img: "../static/images/ZingerBurger.jpg"
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15,
          img: "../static/images/MiniBurger.jpg"
        },
        {
          goodsId: 3,
          goodsName: "墨西哥鸡肉卷",
          price: 15,
          img: "../static/images/ChickenRolls.jpg"
        }
      ],
      snackList: [
        {
          goodsId: 5,
          goodsName: "香辣鸡翅",
          price: 10,
          img: "/static/images/ZingerBurger.jpg"
        },
        {
          goodsId: 6,
          goodsName: "黄金鸡块",
          price: 20,
          img: "/static/images/MiniBurger.jpg"
        },
        {
          goodsId: 9,
          goodsName: "招牌薯条",
          price: 15,
          img: "/static/images/ChickenRolls.jpg"
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17,
          img: "/static/images/ChickenRolls.jpg"
        }
      ],
      drinkList: [
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10,
          img: "/static/images/ZingerBurger.jpg"
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18,
          img: "/static/images/ZingerBurger.jpg"
        }
      ],
      setMealList: [
        {
          goodsId: 4,
          goodsName: "豪华全家桶",
          price: 80,
          img: "/static/images/ZingerBurger.jpg"
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
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId === good.goodsId) {
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
        this.tableData.push(newGood);
      } else {
        let arr = this.tableData.filter(o => o.goodsId == good.goodsId);
        arr[0].count++;
      }

      for (let i = 0; i < this.tableData.length; i++) {
        let element = this.tableData[i];
        this.totalCount += element.count;
        this.totalMoney += element.count * element.price;
      }
    },
    // 删除一件(数量减一)
    deleteOneGood(good) {
      let arr = this.tableData.filter(o => o.goodsId == good.goodsId);
      arr[0].count--;
      if (arr[0].count <= 0) {
        this.tableData = this.tableData.filter(o => o.goodsId != good.goodsId);
      }
      this.totalCount--;
      this.totalMoney -= good.price;
    },
    // 删除所有商品
    deleteAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
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
  padding: 10px;
}
.cookList li {
  list-style: none;
  width: 20%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 5px;
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
  font-size: 18px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
