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
</style>
