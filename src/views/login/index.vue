<template>
    <el-container>
        <el-aside width="20%"></el-aside>
        <el-main style="margin-top: 90px;">
            <div class="form-container">
                <div class="logo">
                    <img src="@/assets/imgs/openai.png" alt="OpenAI">
                </div>
                <div class="title">Welcome back</div>
                <el-input v-model="form.username" class="input-field" placeholder="username"></el-input>
                <el-input v-model="form.password" type="password" class="input-field" placeholder="password"></el-input>
                <el-button type="primary" class="button" @click="onSubmit">Continue</el-button>
                <div class="signup">
                    Don't have an account? <router-link to="/register">Sign Up</router-link>
                </div>
                <div class="or">OR</div>
                <div class="alt-login" @click="loginWith('Google')">
                    <img src="@/assets/imgs/google.png" alt="Google">
                    Continue with Google
                </div>
                <div class="alt-login" @click="loginWith('Microsoft')">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft">
                    Continue with Microsoft Account
                </div>
                <div class="alt-login" @click="loginWith('Apple')">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple">
                    Continue with Apple
                </div>
            </div>
        </el-main>
        <el-aside width="20%"></el-aside>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
        };
    },
    methods: {
        onSubmit() {
            this.$axios.post('/api/login', {
                username: this.form.username,
                password: this.form.password
            })
                .then((res) => {
                    if (res.data.code === 200) {
                        const userInfo = {
                            username: this.form.username,
                            password: this.form.password
                        };
                        // 使用 Vuex 存储用户信息
                        this.$store.dispatch('loginUser', userInfo);

                        this.$message({
                            type: 'success',
                            message: '登录成功'
                        });
                        this.$router.push('/layout');
                    } else {
                        this.$message({
                            type: 'error',
                            message: '登录失败'
                        });
                    }
                })
                .catch((error) => {
                    this.$message({
                        type: 'error',
                        message: '请求失败'
                    });
                    console.error(error);
                });
        },
        loginWith(provider) {
            // Implement login with external provider
        }
    }
}
</script>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #FFFFFF;
}

.form-container {
    text-align: center;
    max-width: 300px;
    margin: auto;
}

.logo {
    margin-bottom: 20px;
}

.logo img {
    width: 50px;
}

.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.input-field {
    width: 100%;
    margin-bottom: 20px;
}

.button {
    width: 100%;
    margin-bottom: 20px;
}

.signup {
    font-size: 14px;
    margin-bottom: 20px;
}

.signup a {
    color: #00B67A;
    text-decoration: none;
}

.or {
    font-size: 14px;
    color: #888888;
    margin: 10px 0;
}

.alt-login {
    width: 100%;
    padding: 10px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background-color: white;
}

.alt-login img {
    width: 20px;
    margin-right: 10px;
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
