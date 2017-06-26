<template>
    <div>
        <span v-if="edit" ref="editBox" class="edit-box"></span>
        <span v-if="!edit" class="content-box">{{currentValue}}<button @click="toggleEdit(true)">编辑</button></span>
    </div>
</template>
<script type="text/jsx">
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
            handleKeyUp(event){
                if(event.keyCode === 13){
                    this.submitEdit(event)
                }
            },
            handleInputChange(event){
                this.currentValue = event.target.value
            },
            toggleEdit(status){
                this.edit = status
            },
            submitEdit(event){
                this.currentValue = this.getValue(event.target.value);
                this.$emit('edit',{
                    value:this.currentValue,
                    key:this.name,
                    index:this.index
                });
                this.toggleEdit(false);
            },
            getValue(val){
                if(this.type === 'select'){
                    return this.map[val]
                }
                return val
            }
        },
        watch:{
            edit(val){
                if(val){
                    const self = this;
                    this.$nextTick(()=>{
                        this.editVm = new Vue({
                            render (h) {
                                let editVNode;
                                if(self.type==='input'){
                                    editVNode = (<input ref="input" value={self.currentValue} onChange={self.handleInputChange}  onKeyup={self.handleKeyUp}/>)
                                }else if(self.type==='select'){
                                    editVNode = (<select value={self.currentValue} onChange={self.submitEdit}>
                                        {Object.keys(self.map).map(key=>(<option value={key}>{self.map[key]}</option>))}
                                    </select>)
                                }
                                return editVNode
                            },
                            destroyed(){
                                this.$el.parentNode.removeChild(this.$el)
                            },
                            mounted(){
                                if(self.type == 'input'){
                                    this.$nextTick(()=>{
                                        const input = this.$refs.input;
                                        input.focus();
                                        input.selectionStart = input.selectionEnd = input.value.length
                                    })
                                }
                            }
                        });
                        console.log(this.$refs.editBox);
                        this.editVm.$mount();
                        this.$refs.editBox.appendChild(this.editVm.$el)
                    })
                }else {
                    if(this.editVm){
                        this.editVm.$destroy();
                        delete this.vm
                    }
                }
            }
        },
        destroyed(){
            if(this.editVm){
                this.editVm.$destroy();
                delete this.vm
            }
        }
    }
</script>

