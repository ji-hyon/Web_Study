// src/views/HelloView.vue
<template>
    <div>
        <h1>hello, {{ userName }}</h1>
    </div>
</template>

<script>
export default {
    name: 'HelloView',
    data() {
        return {
            userName: this.$route.params.userName
        }
    },
    // CODE HERE
    // 컴포넌트 가드 
    // beforeRouteUpdate() : 해당 컴포넌트를 렌더링하는 경로가 변경될 때 실행
    // Params 변화 감지하기 
    // userName을 이동할 params에 있는 userName으로 재할당
    beforeRouteUpdate(to, from, next) {
        this.userName = to.params.userName
        next()
    }

}
</script>
