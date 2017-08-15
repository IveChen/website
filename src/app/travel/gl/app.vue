<template>
    <div id="journeys">
        <journey :date="journey.date" v-for="journey in journeys" :key="journey.date">
            <div class="list-group">
                <todo v-for="todo in journey.list" :todo="todo" :key="todo.time"></todo>
            </div>
        </journey>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                journeys: [{
                    date: '2017-8-20',
                    list: [
                        {
                            time: '9:30',
                            location: '广州南',
                            description: '搭乘动车D2962次8车7c,7d前往桂林北',
                            duration: '2.5h'
                        },
                        {
                            time: '12:30',
                            location: '桂林北附近',
                            description: '吃午饭',
                            duration: '1h'
                        },
                        {
                            time: '14:00左右',
                            location: '精通大酒店',
                            description: '办理入住手续',
                            duration: '1h',
                            warn: '需买漓江票和两江四湖的票'
                        }, {
                            time: '16:30',
                            location: '精通大酒店附近',
                            description: '吃晚饭',
                            duration: '1h',
                        }, {
                            time: '18:40/19:30',
                            location: '两江四湖',
                            description: '游览两江四湖',
                            duration: '3h',
                            warn: '尚未买票'
                        }
                    ]
                }, {
                    date: '2017-8-21',
                    list: [{
                        time: '8:00',
                        location: '精通大酒店',
                        description: '吃酒店早餐',
                        duration: '1h'
                    }, {
                        time: '9:30',
                        location: '象山公园',
                        description: '去看大象山',
                        duration: '2.5h',
                        warn: '尚未买票'
                    }, {
                        time: '12:00',
                        location: '未知',
                        description: '吃午饭',
                        duration: '1h'
                    }, {
                        time: '14:00',
                        location: '靖江王府 + 独秀峰',
                        description: '游览靖江王府和爬独秀峰',
                        duration: '3h'
                    }, {
                        time: '17:00',
                        location: '正阳步行街',
                        description: '逛街+吃晚饭',
                        duration: '1h'
                    }, {
                        time: '18:30',
                        location: '日月双塔',
                        description: '沿湖走',
                        duration: '1.5h'
                    }]
                }, {
                    date: '2017-8-22',
                    list: [{
                        time: '06:00',
                        location: '精通大酒店',
                        description: '退房 + 漓江一日游',
                        duration: '11h',
                        warn: '需要买票'
                    }, {
                        time: '19:00',
                        location: '汉普顿度假酒店',
                        description: '办理入住手续'
                    },{
                        time:'20:00',
                        location:'西街',
                        description:'逛街+吃'
                    }]
                },{
                    date:'2017-8-23',
                    list:[{
                        time:'9:00',
                        location:'遇龙河',
                        description:'搭车前往金龙桥码头，参加金龙桥-旧县漂流',
                        warn:'已买票，飞猪订单编号45534044113030941,联系电话：18207735815',
                        duration:'3h'
                    },{
                        time:'12:00',
                        location:'旧县',
                        description:'吃饭'
                    },{
                        time:'13:30',
                        location:'十里画廊',
                        description:'旧县骑行经十里画廊回阳朔',
                        duration:'4h'
                    },{
                        time:'20:00',
                        location:'刘三姐印象',
                        description:'观看刘三姐演出',
                        duration:'1h',
                        warn:'未买票'
                    }]
                },{
                    date:'2017-8-24 - 2017-8-26 北海待定'
                }]
            }
        }
    }
</script>
<style>

</style>