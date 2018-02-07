import Vue from 'vue'
import Kontakti from '@/components/Kontakti'
/* eslint-disable */

describe('Kontakti.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Kontakti)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.kontakti .title h1').textContent).to.equal('Kontakti')
  })
})
