<template>
  <div class="row">
    <div class="col-xs-12 col-md-5">
      <form>
        <div class="form-group">
          <label>英文名</label>
          <input type="email" class="form-control">
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="password" class="form-control">
        </div>
        <div class="form-group">
          <font class="form-text text-muted">* 您的账户将自动注册，请您保管好密码</font>
        </div>
        <router-link to="home">
          <button type="submit" class="btn btn-outline-secondary">
                登陆
              </button>
        </router-link>
      </form>
    </div>
  </div>
</template>
