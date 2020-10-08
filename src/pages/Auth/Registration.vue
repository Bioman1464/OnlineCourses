<template>
  <div class="app-auth-registration">
    <div class="app-auth-card">
      <header class="auth-card-header">
        <h2 class="auth-h2">
          <div class="app-auth-card-title">
            Зарегистрируйтесь
          </div>
        </h2>
      </header>
      <main class="auth-card-content">
        <div class="app-auth-card-content">
          <q-input
            class="auth-card-in-field auth-card-in-field-margin"
            v-model="first_name"
            label="Имя" :dense="true"
            type="text"
            placeholder="Введите имя"
            stack-label
            :rules="[() => $v.first_name.required || 'Обязательное поле!']"
            @input="$v.first_name.$touch()"
          />
          <q-input
            class="auth-card-in-field auth-card-in-field-margin"
            v-model="last_name"
            label="Фамилия" :dense="true"
            type="text"
            placeholder="Введите фамилию"
            stack-label
            :rules="[() => $v.last_name.required || 'Обязательное поле!']"
            @input="$v.last_name.$touch()"
          />
          <q-input
            class="auth-card-in-field auth-card-in-field-margin"
            v-model="email"
            label="Email" :dense="true"
            type="email"
            placeholder="Введите e-mail"
            stack-label
            :rules="[
              () => $v.email.required || 'Обязательное поле!',
              () => $v.email.email || 'Некорректно введенный e-mail'
            ]"
            @input="$v.email.$touch()"
          />
          <q-input
            class="auth-card-in-field auth-card-in-field-margin"
            v-model="password"
            label="Пароль" :dense="true"
            type="password"
            placeholder="Введите пароль"
            stack-label
            :rules="[
              () => $v.password.required || 'Обязательное поле!',
              () => $v.password.minLength || 'Ьинимальная длина пароля - 8 символов!'
            ]"
            @input="$v.password.$touch()"
          />
          <!--<div class="auth-card-checkbox">
            <div class="q-gutter-sm">
              <q-checkbox class="auth-reg-checkbox-item" v-model="rules_of_perm" label="Я согласен с условиями обратоки персональных данных" />
            </div>
          </div>-->
          <q-btn
            class="auth-card-btn" unelevated color="primary"
            label="Зарегистрироваться" no-caps
            :disable="this.$v.$anyError"
            @click="handleSubmit"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  name: 'register',
  rules_of_perm: false,
  data: () => ({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    errors: []
  }),
  methods: {
    ...mapActions({
      signUp: 'Auth/signUp'
    }),
    handleSubmit () {
      this.signUp({ ...this.$data })
        .then(() => {
          this.$router.push({ name: 'Auth-login' })
        })
        .catch((errors) => {
          console.log(errors)
        })
    }
  },
  validations: {
    first_name: {
      required
    },
    last_name: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  }
}
</script>

<style scoped>
.auth-card-btn{
  margin-top: 20px;
}
.auth-card-checkbox{
  margin-top: 10px;
  align-items: baseline;
}
.q-gutter-sm{
  margin-left: -16px;
}
.auth-reg-checkbox-item{
  display: flex;
}
</style>
