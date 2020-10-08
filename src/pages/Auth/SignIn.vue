<template>
  <div class="app-auth-logi">
    <div class="app-auth-card">
      <header class="auth-card-header">
        <h2 class="auth-h2">
          <div class="app-auth-card-title">
            Войти
          </div>
        </h2>
      </header>
      <main class="auth-card-content">
        <div class="app-auth-card-content">
          <q-input
            class="auth-card-in-field"
            v-model="email"
            label="Email" :dense="true"
            color="#c3c6cb"/>
          <q-input
            class="auth-card-in-field auth-card-in-field-margin"
            v-model="password"
            type="password"
            label="Пароль" :dense="true"
            color="gray"
            :rules="[
              () => $v.password.required
            ]"
            @input="$v.password.$touch()"
          />
          <q-btn
            class="auth-card-btn"
            unelevated color="primary"
            label="Войти" no-caps
            :disable="this.$v.$anyError"
            @click="handleSubmit"
          />
        </div>
      </main>
      <footer>
        <div class="auth-card-footer app-auth-card-footer">
          <a class="sb-link" href="/auth/reset" routerLink="/auth/reset">Забыли пароль?</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { email, required } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    ...mapActions({
      signUp: 'Auth/signUp'
    }),
    handleSubmit () {
      this.signIn({ ...this.$data })
        .then(() => {
          this.$router.push({ name: 'Auth-login' })
        })
        .catch((errors) => {
          console.log(errors)
        })
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  }
}
</script>

<style scoped>
</style>
