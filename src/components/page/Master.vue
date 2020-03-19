<template>
  <div class="master">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="职能管理 ">
        <el-row style="margin-top: 10px">
          <el-col class="pos-list" id="data-list">
            <span style="float: left;margin: 10px 0px 0px 10px">
              职能管理-参数列表
            </span>
            <el-button
              type="primary"
              size="medium"
              style="float: right;margin: 0px 10px 10px 0px"
              @click="(dialogFormVisible = true), handleAdd()"
            >
              新建
            </el-button>
            <el-table :data="tableData" border>
              <el-table-column label="代码" align="center">
                <template slot-scope="scope">{{ scope.row.code }}</template>
              </el-table-column>
              <el-table-column label="内容" align="left">
                <template slot-scope="scope">{{ scope.row.text }}</template>
              </el-table-column>
              <el-table-column label="有效" align="center">
                <template slot-scope="scope">{{ scope.row.flag }}</template>
              </el-table-column>
              <el-table-column label="序号" align="center">
                <template slot-scope="scope">{{ scope.row.sort }}</template>
              </el-table-column>
              <el-table-column prop="operate" label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="
                      (dialogFormVisible = true),
                        handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >{{ scope.row.flag == "是" ? "删除" : "恢复" }}</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <el-dialog
              title="参数信息"
              :visible.sync="dialogFormVisible"
              width="25%"
            >
              <el-form :model="form">
                <el-form-item label="代码" :label-width="formLabelWidth">
                  <el-input v-model="form.code" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="内容" :label-width="formLabelWidth">
                  <el-input v-model="form.text" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="序号" :label-width="formLabelWidth">
                  <el-input v-model="form.sort" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item v-model="form.index" hidden></el-form-item>
              </el-form>
              <el-button
                type="primary"
                @click="(dialogFormVisible = false), handleSave(from)"
                >保 存</el-button
              >
              <el-button @click="dialogFormVisible = false">取 消</el-button>
            </el-dialog>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="Home提醒部门">
        <el-row style="margin-top: 10px">
          <el-col class="pos-list" id="data-list">
            <span style="float: left;margin: 10px 0px 0px 10px"
              >Home提醒部门-参数列表</span
            >
            <el-button
              type="primary"
              size="medium"
              style="float: right;margin: 0px 10px 10px 0px"
              >新建</el-button
            >
            <el-table :data="tableData" border>
              <el-table-column label="代码" align="center">
                <template slot-scope="scope">{{ scope.row.code }}</template>
              </el-table-column>
              <el-table-column label="内容" align="left">
                <template slot-scope="scope">{{ scope.row.text }}</template>
              </el-table-column>
              <el-table-column label="有效" align="center">
                <template slot-scope="scope">{{ scope.row.flag }}</template>
              </el-table-column>
              <el-table-column label="序号" align="center">
                <template slot-scope="scope">{{ scope.row.sort }}</template>
              </el-table-column>
              <el-table-column prop="operate" label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="浏览器弹出部门">
        <el-row style="margin-top: 10px">
          <el-col class="pos-list" id="data-list">
            <span style="float: left;margin: 10px 0px 0px 10px"
              >浏览器弹出部门-参数列表</span
            >
            <el-button
              type="primary"
              size="medium"
              style="float: right;margin: 0px 10px 10px 0px"
              >新建</el-button
            >
            <el-table :data="tableData" border>
              <el-table-column label="代码" align="center">
                <template slot-scope="scope">{{ scope.row.code }}</template>
              </el-table-column>
              <el-table-column label="内容" align="left">
                <template slot-scope="scope">{{ scope.row.text }}</template>
              </el-table-column>
              <el-table-column label="有效" align="center">
                <template slot-scope="scope">{{ scope.row.flag }}</template>
              </el-table-column>
              <el-table-column label="序号" align="center">
                <template slot-scope="scope">{{ scope.row.sort }}</template>
              </el-table-column>
              <el-table-column prop="operate" label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="s3信息管理">
        <el-row style="margin-top: 10px">
          <el-col class="pos-list" id="data-list">
            <span style="float: left;margin: 10px 0px 0px 10px"
              >s3信息管理-参数列表</span
            >
            <el-button
              type="primary"
              size="medium"
              style="float: right;margin: 0px 10px 10px 0px"
              >新建</el-button
            >
            <el-table :data="tableData" border>
              <el-table-column label="代码" align="center">
                <template slot-scope="scope">{{ scope.row.code }}</template>
              </el-table-column>
              <el-table-column label="内容" align="left">
                <template slot-scope="scope">{{ scope.row.text }}</template>
              </el-table-column>
              <el-table-column label="有效" align="center">
                <template slot-scope="scope">{{ scope.row.flag }}</template>
              </el-table-column>
              <el-table-column label="序号" align="center">
                <template slot-scope="scope">{{ scope.row.sort }}</template>
              </el-table-column>
              <el-table-column prop="operate" label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "master",
  data() {
    return {
      tabPosition: "left",
      tableData: [
        {
          code: "1",
          text: "开发",
          flag: "否",
          sort: "1"
        },
        {
          code: "2",
          text: "物流",
          flag: "是",
          sort: "2"
        },
        {
          code: "3",
          text: "QC",
          flag: "是",
          sort: "3"
        },
        {
          code: "4",
          text: "事务",
          flag: "是",
          sort: "4"
        },
        {
          code: "5",
          text: "配送",
          flag: "是",
          sort: "5"
        },
        {
          code: "6",
          text: "投送组",
          flag: "是",
          sort: "6"
        }
      ],
      dialogFormVisible: false,
      form: {
        code: "",
        text: "",
        sort: ""
      },
      formLabelWidth: "80px"
    };
  },
  methods: {
    handleAdd() {
      this.form.code = "";
      this.form.text = "";
      this.form.sort = "";
      this.form.index = "";
    },
    handleEdit(index, row) {
      this.form.code = row.code;
      this.form.text = row.text;
      this.form.sort = row.sort;
      this.form.index = index;
    },
    handleDelete(index, row) {
      if (row.flag === "是") {
        row.flag = "否";
      } else if (row.flag === "否") {
        row.flag = "是";
      }
    },
    handleSave(form) {
      var date = this.tableData[form.index];
      date.text = form.text;
      date.sort = form.sort;
    }
  }
};
</script>

<style scoped>
.pos-list {
  border-right: 1px solid #c0ccda;
  height: "250";
}
</style>
