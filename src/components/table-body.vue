<template>
    <tbody>
    <tr v-for="(row,rowIndex) in rows">
        <td v-for="(column,index) in columns">
            <template v-if="column.render">
                <cell :render="column.render" :index="rowIndex" :row="row" :column="column"></cell>
            </template>
            <span v-else>{{row[column.key]}}</span>
        </td>
    </tr>
    </tbody>
</template>
<script>
    import cell from './body-cell'
    export default {
        props: {
            columns: {
                type: Array,
                default: () => []
            },
            rows:{
                type: Array,
                default: () => []
            }
        },
        components: {cell}
    }
</script>
