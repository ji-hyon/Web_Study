<template>
 <div class="container">
    <div class="head">
        <h1>보고싶은 영화</h1>
        <input type="text" v-model="content">
        <button @click="createMovie">Add</button>
    </div>
    <br><br>
    <WatchListItem v-for="item in items" :key="item.date" :item=item />
    
    <br><br>
    <button @click="deleteCompleted">체크된 영화 지우기</button>
 </div>
</template>

<script>
import WatchListItem from '@/components/WatchListItem.vue'

export default {
    components: {
        WatchListItem
    },
    data() {
        return {
            content: "",
            items: []
        }
    },
    methods: {
        createMovie() {
            if(this.content.trim()){
                const item = {
                    content : this.content,
                    isChecked: false,
                    date: new Date().getTime()
                }
                this.items.push(item)
            } else {
                alert('내용을 입력해주세요!')
            }
            this.content = ''
        },

        deleteCompleted() {
            this.items = this.items.filter(item => !item.isChecked);
        }
    }
}
</script>

<style>
.head {
    background-color: azure;
    padding: 50px;
    border-radius: 10px;
}
</style>