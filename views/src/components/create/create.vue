<template>
    <div class="row">
        <div class="col-xs-12 col-md-5">
            <form>
                <div class="form-group">
                    <label>房间名</label>
                    <input type="email" class="form-control">
                </div>
                <div class="form-group">
                    <label>一句话介绍</label>
                    <textarea class="form-control" rows="1"></textarea>
                </div>
                <div class="form-group">
                    <font class="form-text text-muted">* 房间将自动被创建，请至首页进入。</font>
                </div>
                <router-link to="home">
                    <button type="submit" class="btn btn-outline-secondary">创建</button>
                </router-link>
            </form>
        </div>
    </div>
</template>
