import { reactive } from "vue";

export const store = reactive({
  apiUrlProjects: 'http://127.0.0.1:8000/api/projects',
  apiUrlTechnologies: 'http://127.0.0.1:8000/api/technologies',
  apiUrlTypes: 'http://127.0.0.1:8000/api/types',
  apiUrlContacts: 'http://127.0.0.1:8000/api/send-email',
  apiUrlProjectShow: 'http://127.0.0.1:8000/api/project/',
  paramsProjects: {
    page: '1'
  }
})