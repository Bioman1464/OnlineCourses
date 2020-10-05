<template>
  <app-auth-login>
    <app-auth-card>
      <header class="auth-card-header">
        <h2 class="auth-h2">
          <app-auth-card-title>
            Войти
          </app-auth-card-title>
        </h2>
      </header>
      <main class="auth-card-content">
        <app-auth-card-content>
          <q-input class="auth-card-in-field"
                   v-model="email" label="Email" :dense="true"
                   color="#c3c6cb"/>
          <q-input class="auth-card-in-field auth-card-in-field-margin"
                   v-model="password" :type="password" label="Пароль" :dense="true"
                   color="gray"/>
          <q-btn class="auth-card-btn" unelevated color="primary" label="Войти" no-caps/>
        </app-auth-card-content>
      </main>
      <footer>
        <app-auth-card-footer class="auth-card-footer">
          <a class="sb-link" href="/auth/reset" routerLink="/auth/reset">Забыли пароль?</a>
        </app-auth-card-footer>
      </footer>
    </app-auth-card>
  </app-auth-login>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
  app-auth-card{
    min-height: 460px;
    padding: 52px 76px 36px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
  .auth-card-header{
    margin-bottom: 36px;
  }
  .auth-card-content{

  }
  .auth-card-in-field{
    /*--q-color-primary: #c3c6cb;*/
  }
  .auth-card-in-field-margin{
    margin-top: 30px;
  }
  .auth-card-btn{
    margin-top: 100px;
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    min-height: 40px;
  }
  .auth-card-btn:disabled{
    --q-color-primary: #c3c6cb;
  }
  .auth-card-footer{
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-top: 36px;
    color: #b4b9cb;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .auth-h2{
    font-size:20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-top: 0;
    margin-bottom: .5rem;
  }
</style>
