<template>
    <div>
        <h1>未经授权的访问</h1>
        <p>抱歉，您没有权限访问此页面。</p>
    </div>
</template>

<script>
export default {
    name: 'Noauth',
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

h1 {
    color: #333;
    font-size: 24px;
}

p {
    color: #666;
    font-size: 16px;
}
</style>