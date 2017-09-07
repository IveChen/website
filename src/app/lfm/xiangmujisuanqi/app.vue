<template>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                出纳总金额: <input type="text" v-model="sum">,保留多少位小数:<input v-model="decimal"/>
                <button @click="addProject" style="float:right">添加新项目</button>
            </div>
            <div class="panel-body">
                <div class="list-group">
                    <div class="list-group-item" v-for="(item,index) in projects">项目{{index + 1}}：金额 <input type="text" v-model.number="item.money"> ,预计分配金额 <input type="text"
                                                                                                                                  :value="caculate(item.money)"></div>
                </div>
            </div>
            <div class="panel-footer">
                项目总金额:{{total}}。
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                sum: 0,
                decimal: 2,
                projects: [{
                    money: 0
                }]
            };
        },
        methods: {
            addProject() {
                this.projects.push({
                    money: 0
                })
            },
            caculate(money) {
                if (this.total === 0) {
                    return 0;
                } else {
                    return (money * this.sum / this.total).toFixed(this.decimal);
                }
            }
        },
        computed: {
            total() {
                return this.projects.reduce(function (projectA, projectB) {
                    return {
                        money: projectA.money + projectB.money
                    }
                })['money'];
            }
        }
    }
</script>
<style>
    input {
        text-align: center;
    }
</style>