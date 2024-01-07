import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventList.vue'
import EventDetailsView from '../views/event/DetailsView.vue'
import EventRegisterView from '../views/event/RegisterView.vue'
import EventEditView from '../views/event/EditView.vue'
import EventLayoutView from '../views/event/Layout.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundVue from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ pageNumber: parseInt(route.query.page) || 1 })
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: EventLayoutView,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetailsView
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterView
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView
        }
      ]
    },
    //REDIRECT NESTED PAGES
    // {
    //   path: '/event/:afterEvent(.*)',
    //   redirect: (to) => ({ to: '/events/' + to.params.afterEvent })
    // },
    // {
    //   path: '/event/:id',
    //   redirect: (to) => ({ name: 'event-details', params: { id: to.params.id } }),
    //   children: [
    //     { path: 'register', redirect: () => ({ name: 'event-register' }) },
    //     { path: 'edit', redirect: () => ({ name: 'event-edit' }) }
    //   ]
    // },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:catchAll(.*)',
      name: 'page-not-found',
      component: NotFoundVue
    },
    {
      path: '/404/:resource',
      name: 'resource-not-found',
      component: NotFoundVue,
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError,
      props: true
    }
  ]
})

export default router
