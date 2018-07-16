<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="speakCenter">
                    <div class="speakContent">
                        <p>user
                            <span class="time">10:30</span>
                        </p>
                        <p>聊天天</p>
                    </div>
                    <div class="speakContent">
                        <p>fucker
                            <span class="time">10:30</span>
                        </p>
                        <p>开开心心</p>
                    </div>
    
                    <div class="speakToHome">
                        <router-link to="home">
                            <span class="icon-iconindexnor iconfont"></span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-9">
                <textarea class="form-control" rows="1"></textarea>
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-warning" style="width:100%">发送</button>
            </div>
        </div>
        <!-- <h1>{{this.count}}</h1> -->
    </div>
</template>

<script>
export default{}
    // vuex使用示范
    
    // export default {
    //     created() {
    //         this.$store.commit("increment");
    //     },
    //     computed: {
    //         count() {
    //             return this.$store.state.count;
    //         }
    //     }
    // };
</script>

<style scoped>
    .speakCenter {
        padding: 1em;
        color: #495057;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        height: 60vh;
        overflow-x: hidden;
    }
    
    .speakContent .time {
        font-size: 0.4em;
    }
    
    .btn-warning {
        color: white;
        font-weight: 800;
    }
    
    .speakToHome {
        position: absolute;
        top: .8rem;
        right: 2rem;
    }
    
    .iconfont {
        font-size: 2rem;
    }
    
    a {
        color: #495057!important;
    }
</style>