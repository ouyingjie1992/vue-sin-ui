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
  <div>Hello,world~</div>
</div>

::: demo
```html

<div>
  <div>Hello,world~</div>
</div>

```
:::


### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |	标题，必选参数。也可通过默认 slot 传入 |	string   |	—           |	—       |
### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|close         |关闭alert时触发的事件| —  |
