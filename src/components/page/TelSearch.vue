<template>
  <div class="telSearch">
    <div style="margin: 20px 0px">
      <el-form :inline="true" :model="formInline">
        <el-row>
          <el-col :span="7">
            <el-form-item label="案件编号：">
              <el-input v-model="formInline.caseCd" size="medium"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="来电号码：">
              <el-input v-model="formInline.tel" size="medium"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="CASE记录类别：">
              <el-cascader size="medium"
                v-model="formInline.type"
                :options="typeOptions"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="3"></el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="创建时间：">
              <el-col style="width:50%;float:left">
                <el-date-picker size="medium"
                  type="date"
                  placeholder="选择日期"
                  v-model="formInline.date"
                ></el-date-picker>
              </el-col>
              <el-col style="width:50%;float:right">
                <el-time-picker size="medium"
                  placeholder="选择时间"
                  v-model="formInline.time"
                ></el-time-picker>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="QT号：">
              <el-input v-model="formInline.qt" size="medium"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="优先级：">
              <el-cascader size="medium"
                v-model="formInline.garde"
                :options="typeOptions"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="3"></el-col>
        </el-row>
      </el-form>
      <el-button type="primary">检 索</el-button>
      <el-button type="primary">重 置</el-button>
      <el-button type="primary">新 建</el-button>
    </div>
    <el-button type="primary" style="float:right;margin:20px 20px 10px 0px">一览导出</el-button>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%;"
      border
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="案件编号" align="center">
        <template slot-scope="scope">{{ scope.row.caseCd }}</template>
      </el-table-column>
      <el-table-column label="来电号码" align="center">
        <template slot-scope="scope">{{ scope.row.tel }}</template>
      </el-table-column>
      <el-table-column label="CASE记录类别" align="center">
        <template slot-scope="scope">{{ scope.row.type }}</template>
      </el-table-column>
      <el-table-column label="创建时间" align="center">
        <template slot-scope="scope">{{ scope.row.data }}</template>
      </el-table-column>
      <el-table-column label="QT号" align="center">
        <template slot-scope="scope">{{ scope.row.qt }}</template>
      </el-table-column>
      <el-table-column label="优先级" align="center">
        <template slot-scope="scope">{{ scope.row.garde }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        caseCd: "",
        tel: "",
        type: "",
        data: "",
        time: ""
      },
      typeOptions: [
        {
          value: "1",
          label: "询价相关",
          children: [
            {
              value: "1-1",
              label: "询价单是否收到"
            },
            {
              value: "1-2",
              label: "其他（询价相关）"
            }
          ]
        },
        {
          value: "2",
          label: "订货相关",
          children: [
            {
              value: "2-1",
              label: "取消申请"
            },
            {
              value: "2-2",
              label: "其他（订货相关）"
            }
          ]
        }
      ],
      tableData: [{
            caseCd: '111',
            tel: '18000000000',
            type: '类型',
            data: '2020/03/13',
            qt: '1111',
            garde: '紧急',
          },{
              caseCd: '111',
            tel: '18000000000',
            type: '类型',
            data: '2020/03/13',
            qt: '1111',
            garde: '紧急',
          }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style scoped>
.el-form-item {
  float: right;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: '120px'
}
</style>
