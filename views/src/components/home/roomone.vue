<template>
    <div class="card text-center">
        <div class="card-header">
            <span class="icon-dongwu iconfont"></span>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{data.title}}</h5>
            <p class="card-text">{{data.content}}</p>
            <router-link to="room">
                <a href="" class="btn btn-primary">进入群聊</a>
            </router-link>
        </div>
        <div class="card-footer text-muted">
            {{data.people}}人
        </div>
    </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>