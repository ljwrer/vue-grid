<template>
    <span v-if="edit" ref="editBox">
        <input type="text" v-if="type === 'input'" v-model="currentValue" @keyup.enter="submitEdit"/>
        <select v-if="type === 'select'" :value="currentValue" @change="submitEdit">
            <option v-for="(value, key) in map" :value="key">{{value}}</option>
        </select>
    </span>
    <span v-else>{{currentValue}}<button type="button" class="button tiny" @click="toggleEdit">编辑</button></span>
</template>
<script>
    import Vue from 'vue'
    export default {
        name:'tableInput',
        data(){
            return {
                edit:false,
                currentValue:this.getValue(this.value)
            }
        },
        props:['value','type','map','name','index'],
        methods:{
            toggleEdit(){
//                if(!this.edit){
//                    this.editVm = new Vue({
//
//                    })
//                }
                this.edit = !this.edit
            },
            submitEdit(event){
                this.toggleEdit();
                this.currentValue = this.getValue(event.target.value);
                this.$emit('edit',{
                    value:this.currentValue,
                    key:this.name,
                    index:this.index
                })
            },
            getValue(val){
                if(this.type === 'select'){
                    return this.map[val]
                }
                return val
            }
        }
    }
</script>
