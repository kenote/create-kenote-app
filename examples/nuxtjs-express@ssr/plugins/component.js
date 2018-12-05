import Vue from 'vue'
import Page from '~/components/page.vue'
import Header from '~/components/header.vue'

const createComponent = () => {
  Vue.component('page', Page)
  Vue.component('Header', Header)
}

export default createComponent