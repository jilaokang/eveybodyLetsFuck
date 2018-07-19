<template>
    <div class="row">
        <div class="col-xs-12 col-md-5">
            <form>
                <div class="form-group">
                    <label>英文名</label>
                    <input name="username" class="form-control">
                </div>
                <div class="form-group">
                    <label>密码</label>
                    <input name="password" type="password" class="form-control">
                </div>
                <div class="form-group">
                    <font class="form-text text-muted">* 您的账户将自动注册，请您保管好密码</font>
                </div>
            </form>
            <button class="btn btn-outline-secondary" v-on:click="Login">
                登陆
            </button>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        data() {
            return {};
        },
        methods: {
            Login() {
                const username = document.getElementsByName("username")[0],
                    password = document.getElementsByName("password")[0];

                console.log("login");
                axios
                    .post("http://localhost:3000/", {
                        username: username.value.toString(),
                        password: password.value.toString()
                    })
                    .then(res => {
                        console.log(res.data);
                        alert(res.data.message);
                        if (
                            res.data.message == "登陆成功" ||
                            res.data.message == "注册成功"
                        ) {
                            document.cookie = `token=${res.data.token};max-age=${30 * 24 * 60 * 60 * 1000}`
                            location.href = "#/home";
                        }

                        password.value = null;
                        username.value = null;
                    });
            }
        }
    };
</script>