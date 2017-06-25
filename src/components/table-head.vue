<template>
    <thead>
    <tr>
        <th v-for="column in columns">
            <template v-if="column.renderHead"><cell :render="column.renderHead" :column="column"></cell></template>
            <span v-else>{{column.title}}</span>
        </th>
    </tr>
    </thead>
</template>
<script>
    import cell from './head-cell'
    export default {
        props: {
            columns: {
                type: Array,
                default: () => []
            }
        },
        components: {cell}
    }
</script>
