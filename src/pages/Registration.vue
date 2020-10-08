<template>
  <div class="app-auth-registration">
    <div class="app-auth-card">
      <header class="auth-card-header">
        <h2 class="auth-h2">
          <div class="app-auth-card-title">
            Зарегистрируйтесь в M&M's
          </div>
        </h2>
      </header>
      <main class="auth-card-content">
        <div class="app-auth-card-content">
          <q-input class="auth-card-in-field auth-card-in-field-margin"
                   v-model="text" label="Имя" :dense="true"/>
          <q-input class="auth-card-in-field auth-card-in-field-margin"
                   v-model="text" label="Фамилия" :dense="true"/>
          <q-input class="auth-card-in-field auth-card-in-field-margin"
                   v-model="email" label="Email" :dense="true"/>
          <div class="auth-card-checkbox">
            <div class="q-gutter-sm">
              <q-checkbox class="auth-reg-checkbox-item" v-model="lol" label="Я согласен с условиями обратоки персональных данных" />
            </div>
          </div>
          <q-btn class="auth-card-btn" unelevated color="primary"
                 label="Зарегистрироваться" no-caps/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      lol: false
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
