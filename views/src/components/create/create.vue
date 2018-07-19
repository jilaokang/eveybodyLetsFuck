<template>
    <div class="row">
        <div class="col-xs-12 col-md-5">
            <form>
                <div class="form-group">
                    <label>房间名</label>
                    <input name="roomname" class="form-control">
                </div>
                <div class="form-group">
                    <label>一句话介绍</label>
                    <textarea name="roomintroduce" class="form-control" rows="1"></textarea>
                </div>
                <div class="form-group">
                    <font class="form-text text-muted">* 房间将自动被创建，请至首页进入。</font>
                </div>
            </form>
            <button type="submit" class="btn btn-outline-secondary">返回</button>
            <button type="submit" class="btn btn-outline-secondary" style="margin-left:.6rem" v-on:click="roomadd">创建
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {
            roomadd() {

                let getCookie = function (name) {
                    let arr = document.cookie.split("="),
                        value;

                    arr.forEach(function (item, index) {
                        if (item.indexOf(name)) {
                            value = index;
                        }
                    });

                    return arr[value]
                }

                let roomname = document.getElementsByName("roomname")[0],
                    roomintroduce = document.getElementsByName("roomintroduce")[0];
                console.log(roomname.value);

                axios
                    .post("http://localhost:3000/home", {
                        data: {
                            data: {
                                roomname: roomname.value,
                                roomintroduce: roomintroduce.value
                            },
                            auth: getCookie("token")
                        },
                        headers: {
                            token: getCookie("token")
                        }
                    })
                    .then(res => {
                        console.log(res.data);

                        roomname.value = null;
                        roomintroduce = null;
                        alert(res.data.message);
                        if (res.data.message == "创建成功") {
                            location.href = "/#/home";
                        }
                    });
            }
        }
    };
</script>
