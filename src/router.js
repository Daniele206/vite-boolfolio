import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Technologies from './pages/Technologies.vue';
import Types from './pages/Types.vue';
import TypeProjects from './pages/TypeProjects.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },
    {
      path: '/tecnologie',
      name: 'technologies',
      component: Technologies
    },
    {
      path: '/tipologie',
      name: 'types',
      component: Types
    },
    {
      path: '/progetti-per-tipologie',
      name: 'type-projects',
      component: TypeProjects
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-404',
      component: Error404
    }
  ]
})

export { router }