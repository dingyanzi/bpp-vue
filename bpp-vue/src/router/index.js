import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import home from '@/components/home'
import login from '@/components/login'
import pageA from '@/components/pageA/pageA'
import pageB from '@/components/pageB/pageB'
import pageC from '@/components/pageC/pageC'
import pageD from '@/components/pageD/pageD'
import pageADetail from '@/components/pageA/pageADetail'
import pageCDetail from '@/components/pageC/pageCDetail'
Vue.use(Router)



const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: 'pageADetail',
      name: 'pageADetail',
      component: pageADetail
    },
    {
      path: 'pageCDetail',
      name: 'pageCDetail',
      component: pageCDetail
    },
    {
      path: '/index',
      name: 'Container',
      redirect: '/index/home',
      component: Container,
      children:[
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'pageA',
          name: 'pageA',
          component: pageA,
        },
        {
          path: 'pageB',
          name: 'pageB',
          component: pageB
        },
        {
          path: 'pageC',
          name: 'pageC',
          component: pageC
        },
        {
          path: 'pageD',
          name: 'pageD',
          component: pageD
        },

      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const nextRoute = ['pageA', 'pageB', 'pageC', 'pageD','pageADetail','pageCDetail'];
  let isLogin = window.key ? sessionStorage.getItem("sdk"):true;  // 是否登录
  if(nextRoute.indexOf(to.name) != -1){
    if (!isLogin) {
      next("/login");
    }
  }
  next()
});

export default router
