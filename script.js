const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

const app4 = new Vue({
  el: '.app-4',
  data: {
    todos: [
      {text: 'Do this at 1 o clock'},
      {text: 'Do this at 2 o clock'},
      {text: 'Do this at 3 o clock'},
      {text: 'Do this at 4 o clock'},
    ]
  }
})

const app5 = new Vue({
  el: '.app-5',
  data: {
    message: 'hello vuuuuuuue'
  },

  methods: {
    reverseMessage: function () {
      this.message = this.message.split(' ').reverse().join(' ')
    }
  }
})

const app52 = new Vue({
  el: '.app-52',
  data: {
    message: 'hello vuuuuuuue'
  },
})

const app6 = new Vue({
  el: '.app-6',
  data: {
    message: 'tjena mors'
  }
})

const tP = new Vue({
  el: '#testP',
  data: {
    message: 'hej Hampus'
  },
  methods: {
    reverse: function (){
      return this.message.split('').reverse().join('')
    }
  }
})

var vm2 = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

const stText = new Vue({
  el: '.static',
  data: {
    isActive: true,
    activeClass: 'active',
    errorClass: 'text-danger',
  }
})

const bjs = new Vue({
  el: '.ifBajs',
  data: {
    nödig: false
  }
})

const listTest = new Vue({
  el: '#listTest',
  data:{
    items: [
    {message: 'Numel'},
    {message: 'Gulpin'},
    {message: 'Tailow'},
    {message: 'Beware'},
    {message: 'Munchlax'},
    {message: 'Snorlax'},
    {message: 'Onyx'},
    {message: 'Oranguru'},
    {message: 'Rowlet'},
  ]}
})

const listTest2 = new Vue({
  el: '#listTest2',
  data:{
    parentMessage: 'Pokemon Named:',
    items: [
    {message: 'Numel'},
    {message: 'Gulpin'},
    {message: 'Tailow'},
    {message: 'Beware'},
    {message: 'Munchlax'},
    {message: 'Snorlax'},
    {message: 'Onyx'},
    {message: 'Oranguru'},
    {message: 'Rowlet'},
  ]}
})


const cliker = new Vue({
  el: '.clicker',
  data:{
    counter: 0
  }
})
