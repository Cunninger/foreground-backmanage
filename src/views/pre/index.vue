<template>
    <div class="container">
        <div class="left">
            <p class="text-orange">Write a thank-you note</p>
            <p class="subtext">to our babysitter for the last-minute help</p>
        </div>
        <div class="right">
            <div class="button-container" style="flex-direction: row">
                <el-button id="loginButton" class="button" @click="login">Log in</el-button>

                <el-button id="signupButton" class="button" @click="signup">Sign up</el-button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Login',
    methods: {
        login(){
            this.$router.push('/login')
        },
        signup(){
            this.$router.push('/register')
        }
    
    },
}
</script>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.container {
    display: flex;
    flex: 1;
}

.left {
    background-color: #FFF9E5;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 820px;
}

.right {
    background-color: #FFFFFF;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.text-orange {
    color: #F36924;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

.subtext {
    color: #F36924;
    font-size: 18px;
    margin: 0;
}

.button {
    background-color: #2A51CF;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
}

.button-container {
    display: flex;
    flex-direction: column;
}

.footer {
    position: absolute;
    bottom: 10px;
    font-size: 14px;
    color: #A9A9A9;
}

.footer a {
    color: #A9A9A9;
    text-decoration: none;
    margin: 0 5px;
}
</style>