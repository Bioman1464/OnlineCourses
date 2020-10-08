
const routes = [
  {
    path: '/',
    meta: {
      requiredAuth: true
    },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/auth/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: 'sign-in/',
        component: () => import('pages/Auth/SignIn.vue'),
        name: 'login',
        meta: {
          footer_link_title: 'Новый пользователь?',
          footer_link: {
            name: 'register'
          },
          footer_link_name: 'Зарегистрироваться'
        }
      },
      {
        path: 'registration/',
        component: () => import('pages/Auth/Registration.vue'),
        name: 'register',
        meta: {
          footer_link_title: 'У вас уже есть аккаунт?',
          footer_link: {
            name: 'login'
          },
          footer_link_name: 'Войти'
        }
      },
      { path: 'reset/', component: () => import('pages/Error404.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
