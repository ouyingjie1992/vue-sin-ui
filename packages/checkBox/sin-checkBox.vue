<template>
    <div class="sin-selectItems">
        <div v-bind:class="'sin-selectItem ' + (item.isActive?'active':'')" v-for="item in list" @click="changeItem(item)">
            <span class="ckb">
            </span>
            <span class="ckb-name" v-html="item.name">
            </span>
        </div>
        <span class="ckb-functions" @click="allCheck">
            全选
        </span>
        <span class="ckb-functions" @click="toggleCheck">
            反选
        </span>
        <span class="ckb-functions" @click="removeCheck">
            清空
        </span>
    </div>
</template>

<script>
    export default {
        name: "sinCheckBox",
        model: {
            prop: 'dataList',
            event: 'changeCheckBox'
        },
        props: ['type', 'dataList', 'initData'],
        data() {
            return {
                name: this.type,
                list: [],
                isFirst:true,
                initDataTemp: this.initData
            }
        },
        watch:{
            dataList:{
                immediate:true,
                handler:function(val){
                    this.list = val;
                }
            },
        },
        filters:{
        },
        methods: {
            changeItem(data) {
                if(data.isActive) {
                    data.isActive = false;
                } else {
                    this.$set(data, 'isActive', true);
                }
                this.sendData();
            },
            allCheck() {
                for(let i=0; i<this.list.length; i++) {
                    this.$set(this.list[i], 'isActive', true);
                }
                this.sendData();
            },
            toggleCheck() {
                for(let i=0; i<this.list.length; i++) {
                    if(this.list[i].isActive) {
                        this.list[i].isActive = false;
                    } else {
                        this.$set(this.list[i], 'isActive', true);
                    }
                }
                this.sendData();
            },
            removeCheck() {
                for(let i=0; i<this.list.length; i++) {
                    this.$set(this.list[i], 'isActive', false);
                }
                this.sendData();
            },
            sendData() {
                let checkedData = {
                    name: this.name,
                    list: []
                };
                for(let i=0; i<this.list.length; i++) {
                    if(this.list[i].isActive) {
                        checkedData.list.push(this.list[i].value);
                    }
                }
                this.$emit('changeCheckBox', checkedData);
            },
            initDataFn() {
                if(this.initDataTemp != null) {
                    if(this.name == 'rating_advise_level') {
                        var ratingLevelArarry = [10,8,6,4,2,1,0];
                        var ratingLevelRealArarry = ['9,10','7,8','5,6','3,4','2','1','0'];
                        var ratingLevelTemp = [];
                        for(let i=0; i<this.initDataTemp.length; i++) {
                            var indexOfNumber = ratingLevelArarry.indexOf(this.initDataTemp[i]);
                            if(indexOfNumber != -1) {
                                ratingLevelTemp.push(ratingLevelRealArarry[indexOfNumber]);
                            }
                        }
                        this.initDataTemp = ratingLevelTemp;
                    }
                    for(let i=0; i<this.list.length; i++) {
                        for(let j=0; j<this.initDataTemp.length; j++) {
                            if(this.list[i].value == this.initDataTemp[j]) {
                                this.$set(this.list[i], 'isActive', true);
                            }
                        }
                    }
                    this.sendData();
                }
            }
        },
        computed: {
        },
        mounted() {
        },
        created() {
            this.initDataFn();
        },
        destroyed() {
            this.removeCheck();
        }
    }
</script>

<style scoped lang="less">
    // 复选筛选项
    .sin-selectItems {
      max-width: 600px;
      line-height: 2;
      padding: 0;
      .sin-selectItem {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        .ckb {
          line-height: 0;
          margin-right: 6px;
          width: 14px;
          height: 14px;
          display: inline-block;
          vertical-align: text-bottom;
          border: 0 none;
          cursor: pointer;
          outline: none;
          background-color: transparent;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-image: url(../../examples/assets/img/checkBox.png);
          background-position: -3px -6px;
          &:hover {
            background-position: -3px -20px;
          }
        }

        &.active {
          .ckb {
            background-position: -3px -34px;
          }
          .ckb:hover {
            background-position: -3px -48px;
          }
        }
      }
      .ckb-functions {
        background-color: #ffffff;
        border-radius: 2px;
        border: solid 1px #ff6000;
        color: #ff6000;
        font-size: 12px;
        margin-right: 14px;
        cursor: pointer;
        display: inline-block;
        line-height: 1;
        padding: 3px 7px;
        // vertical-align: bottom;
      }
    }
</style>





