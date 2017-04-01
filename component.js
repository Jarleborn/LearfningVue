Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}} </li>'
})


const app7 = new Vue({
  el: '.app-7',
  data: {
    list:[

        {text: 'Numel'},
        {text: 'Gulpin'},
        {text: 'Tailow'},
        {text: 'Beware'},

    ]
  }
})

const vm = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})

const buts = new Vue({
  el: '#but',
  data: {
    someDynamicCondition: false,
  },

  methods: {
    func: function(){
      console.log('tjoflöjt')
      this.someDynamicCondition = true
    }
  }
})



const aS = new Vue({
  el: '.aTag',
  data: {
    url: 'http://jarleborn.com',
  },

})
