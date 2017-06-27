<template>
    <div class="m-grid">
        <table>
            <table-head :columns="columns"></table-head>
            <table-body :rows="data" :columns="columns"></table-body>
        </table>
    </div>
</template>

<script>
    import tableBody from './table-body.vue'
    import tableHead from './table-head.vue'
    export default {
        name: 'grid',
        props: {
            columns: {
                type: Array,
                default:()=>[]
            },
            data:{
                type:Array,
                default:()=>[]
            }
        },
        components:{
            tableBody,
            tableHead
        }
//        computed:{
//            rowData(){
//                return this.data.map(row=>this.columns.map(col=>row[col.key]))
//            }
//        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.m-grid{
    width: 1200px;
    height: 800px;
    overflow: scroll;
}
table{
    table-layout: fixed;
}
</style>
