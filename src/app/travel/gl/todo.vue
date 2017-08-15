<template>
    <div class="item">
        <div class="panel panel-success">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        时间:{{todo.time}}
                    </div>
                    <div class="col-xs-3">
                        地点:{{todo.location}}
                    </div>
                    <div class="col-xs-3" v-if="todo.duration">
                        预花费时间:{{todo.duration}}
                    </div>
                </div>
            </div>
            <div class="panel-body">
                {{todo.description}}
            </div>
            <div class="panel-footer text-danger" v-if="todo.warn">
                {{todo.warn}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            todo: {
                type: Object,
            }
        }
    }
</script>
