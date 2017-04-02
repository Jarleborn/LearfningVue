Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}} </li>'
})

Vue.component('my-component', {
  template: '<div> A custom county chooper <div>'
})
const Child = {
  template: '<div>A custom component!</div>'
}
new Vue({
  el: '#exampleCOmp',
  components:{
    'my-component': Child
  },
})
