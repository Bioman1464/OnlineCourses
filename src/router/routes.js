
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/auth',
        component: () => import('layouts/AuthLayout.vue'),
        children: [
          { path: 'sign-in', component: () => import('pages/SignIn.vue') },
          { path: 'registration', component: () => import('pages/Registration.vue') },
          { path: 'reset', component: () => import('pages/Error404.vue') },
          { path: '*', component: () => import('pages/Error404') }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
