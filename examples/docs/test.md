<style>
.dome-alert .w-alert:not(:first-child){
  margin-top: 10px;
}
</style>
<script>
 export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
# Alert 警告
----
用于页面中展示重要的提示信息。

### 基本用法
基本用法说明。
<div class="dome-alert demo-block">
    <sin-checkBox :dataList="[{'name': '选项1','value': '1','selected': true},{'name': '选项2','value': '2','selected': false}]"></sin-checkBox>
</div>

::: demo
```html

<div>
    <sin-checkBox :dataList="[{'name': '选项1','value': '1','selected': true},{'name': '选项2','value': '2','selected': false}]"></sin-checkBox>
</div>

```
:::


### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type       |	构建传参名，必选参数。              |	string   |	—           |	—       |
|dataList   |	数据项列表，必选参数。              |	string   |	—           |	—       |
|initData   |	默认选中项                         |   string   |	—           |	—       |
### Event
| 事件名称      | 说明              | 回调参数   |
|------------- |------------------ |---------  |
|changeCheckBox|更改选中项后触发事件 | —  |
