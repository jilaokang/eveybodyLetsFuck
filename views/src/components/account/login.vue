<template>
  <div class="row">
    <div class="col">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">英文名</label>
          <input type="email" class="form-control" placeholder="英文名谁也不知道放心骂">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">密码</label>
          <input type="password" class="form-control" placeholder="请输入密码">
        </div>
        <div class="form-group">
        <small id="emailHelp" class="form-text text-muted">* 您的账户将自动被注册 <br/> * 请保管好您的账号</small>
        </div>
        <button type="submit" class="btn btn-primary">登陆</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.col{
margin-top: 16px
}
</style>