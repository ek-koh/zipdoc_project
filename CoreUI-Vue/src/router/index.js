import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')


// Views
const Outline = () => import('@/views/Outline')

const Region = () => import('@/views/insight/Region')
const Consumer = () => import('@/views/insight/Consumer')

const Supply = () => import('@/views/details/Supply')
const Demand = () => import('@/views/details/Demand')
const EstContract = () => import('@/views/details/EstContract')
const Difference = () => import('@/views/details/Difference')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/outline',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'outline',
          name: '개요',
          component: Outline
        },
        {
          path: 'insight',
          redirect: '/insight/region',
          name: '인사이트',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'region',
              name: '지역',
              component: Region
            },
            {
              path: 'consumer',
              name: '소비자',
              component: Consumer
            }
          ]
        },
        {
          path: 'details',
          redirect: '/details/supply',
          name: '상세 분석결과',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'supply',
              name: '시장공급규모',
              component: Supply
            },
            {
              path: 'demand',
              name: '시장수요규모',
              component: Demand
            },
            {
              path: 'estcontract',
              name: '견적 및 계약분석',
              component: EstContract
            },
            {
              path: 'difference',
              name: '수요공급분석',
              component: Difference
            }
          ]
        }
      ]
    }
  ]
}

