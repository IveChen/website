<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            {{date}}
        </div>
        <div class="panel-body">
            <div class="list-group">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            date: {
                type: String,
                required: true
            }
        }
    }
</script>