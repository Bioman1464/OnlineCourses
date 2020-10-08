<template>
  <q-layout>
    <div class="app-auth">
      <header class="auth-header">
        <!--<img
          class="auth-header-logo"
          src="~assets/skillbox.svg"
          alt="Company Logo">-->
        Плтаформа онлайн-образования
      </header>
      <q-page-container>
        <main class="auth-content">
          <router-view/>
        </main>
      </q-page-container>
      <div class="auth-footer">
        {{$route.meta.footer_link_title}}&nbsp;
        <router-link class="link" :to="$route.meta.footer_link">
          {{$route.meta.footer_link_name}}
        </router-link>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style>
  q-layout{
    display: flex;
    box-sizing: border-box;
  }
  .app-auth{
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: scroll;
    position: relative;
    background-color: #e7e4e3;
  }
  .auth-header{
    display: flex;
    width: 100%;
    padding: 0 20px 0 20px;
    justify-content: center;
    margin-top: 64px;
    margin-bottom: 72px;
  }
  .auth-header-logo{
    width: 81px;
    height: 18px;
  }
  .auth-content{
    width: 496px;
    display: block;
  }
  .app-auth-registration{
    background-color: #e7e4e3;
  }
  .auth-footer{
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: auto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .sb-link, .sb-link:active, .sb-link:hover{
    color: inherit;
    text-decoration: none;
  }
  .sb-link{
    transition: all 0.3s;
  }
  .app-auth-card{
    min-height: 460px;
    padding: 52px 76px 36px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
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
    --q-color-primary: #C3C6CB;
  }
</style>
