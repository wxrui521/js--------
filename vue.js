###Vue.js

	
   声明式渲染:    插入文本  DOM元素属性 指令（将dom元素的属性和vue实例的属性保持一致）  
          
   条件与循环： v-if   v-for
          
   处理用户的输入：v-on  v-model轻松实现表单输入和应用状态之间的双向绑定
         
   组件化应用构建：
		
	Vue.component('todo-item', { template: '<li>这是一个代办想</li>'})  <ol><todo-item></todo-item></ol>
         
   重复的组件： 
	
	<div id="app-7"><ol><todo-item v-for="item in groceryList" v-bind: todo="item"></todo-item></ol></div>

     Vue.component('todo-item', {
          props: ['todo'],
          template: '<li>{{  todo.text }}</li>'
      })
          
     var app7 = new Vue({
         el: '#app-7',
         data: {
           groceryList: {
                         { text: '蔬菜' }，
                         { text: '奶酪' }，
                         { text: '随便吃什么'}
                    } 
               }
            })
   与自定义元素的关系：特点： 跨组件数据流   自定义事件通信  构建工具集成

   Vue实例： 构造器，通过构造函数Vue创建一个Vue的根实例启动的：var vm = new Vue({ })

   可复用的组件构造器： 
					
						var myComponent = Vue.extend({})
                        var myComponentInstance = new MyComponent()

   vue.js:    双大括号会将数据解释为纯文本，而非html。为了输出真正的html,你需要使用v-html指令：
          
		   <div v-html="rawHtml"></div>
           被插入的内容会被当做html  数据绑定会被忽略 。注意你不能使用v-html来复合局部模板，因为Vue不是基于字符串的模板引擎。组件更适合担任UI的重用与复合的基本单元。
     
   属性： Mustache不能在HTML中使用，应使用v-bind指令 <div v-bind: id="dynamicId"></div>这对布尔值的属性也有效，如果条件被求值为false的话该属性会被移除。
          
   使用javascript表达式： {{ number+1}}  {{ ok? 'yes': 'no'}}  {{ message.split('').reverse().join('')}}  限制就是，每个绑定只能包含单个的表达式，模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如Math何Date.你不应该在模板表达式中视图访问用户定义的全局变量。
          
   指令： 是带有v-前缀的特殊属性。指令属性的值预期是单一的js 表达式。指令的职责就是当表达式的值改变时相应的将某些行为应用到Dom上。<p v-if="seen">Now you see me</p>
          
   参数： 一些指令能接受一个参数，在指令后以冒号指明：例如： ，v-bind 指令被用来相应更新HTML属性：
          
   <a v-bind: href="url"></a>在这里href是参数，告知v-bind指令将该元素的href属性与url的值绑定
          
   <a v-on: click="dosomething"></a>v-on指令用于监听Dom事件：
          
   修饰符： 修饰符是以半角句号.指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如.prevent修饰符告诉v-on指令对于触发event.preventDefault():  <form v-on: submit.prevent="onSubmit"></form>

   每个Vue实例都会代理其data对象里所有的属性

属性和方法：

         var data = { a:1 }
         var vm = new Vue({ data: data})
         
         vm,a === data.a;   true   并且进行修改会影响到值 
         注意只有这些被代理的属性是响应的。如果在实例创建之后添加新的属性到实例上，他它不会触发视图更新
         
          Vue实例暴露了一些有用的实例属性与方法，这些属性和方法都有前缀$,以便于代理的data属性区分

          vm.$watch('a', function(newVal, oldVal) {
               //这个回调将在‘vm.a’改变后调用
          })   其中回调不能使用箭头函数，因为箭头函数绑定的是父上下文，而不是Vue的实例

实例的生命周期:
          
		 每个Vue实例在被创建都要初始化：实例需要配置数据观测、编译模板、挂载实例到DOM，然后在数据变化时更新Dom.在这个过程中，实例也会调用一些生命周期钩子，这就给我们提供了自定义的逻辑处理。例如：created这个钩子在实例创建之后被调用：
     
          var vm = new Vue({
               data: {
                   a: 1 
               },
               created: function() {
                   console.log('aaaa' + this.a) 
               }
          })
          也有其它的一些钩子，在实例生命周期的不同阶段用，如：mounted、updated、destroyed 钩子的this指向调用它的Vue实例。  create-> mount -> updated -> destroy
          模板语法： Vue.js
          文本： 使用 {{ }}  通过使用v-once指令一次性插入值，当数据改变时，插值处的内容不会被更新
          双大括号会将数据解释为纯文本，而非HTML.为了输出真正的HTML，你需要使用 v-html指令：
          <div v-html="rawHtml"></div>这样数据绑定会被忽略，你不能使用v-html来复合局部模板，因为Vue不是基于字符串的模板引擎。组件更适合担任ui重用和复合的基本单元  
          站点动态渲染的任意的html可能会非常危险，因为其很容易导致XSS攻击。请只对可信的内容使用html插值，不要对用户提供的内容插值

过滤器：vue.js允许你自定义过滤器，可被用作常见的文本格式化。过滤器应该被添加到javascript表达式，由管道符指示：
          {{ message | captialize }}  <div v-bind: id="rawId | formatId"></div>过滤器的设计目的就是用于文本转换。为了在其他指令中实现更复杂的数据变换。
          new Vue({
               filters: {
                    capitalize: function(value) {
                         if(!value) return '';
                         value = value.toString();
                         return value.chartAt(0).toUpperCase()+ value.slice(1)
                    }
               }
          })
缩写： v-前缀在模板中是作为一个标示Vue特殊属性的明显标示。
                    
	<a v-bind: href="url"></a>  缩写： <a :href="url"></a>
    <a v-on:click="dosomthing"></a>  缩写： <a @click="domething"></a>
                    
计算属性： 
     
    <div id="example">
    	<p>Original message: "{{ message }}"</p>
    	<p>Computed reversed message: "{{ reverdMessage }}"</p>
    </div>
         var vm = new Vue({
               el: '#example',
               data: {
                   message: 'Hello' 
                     },
               computed: {
                   reversedMessage: function() {
                   return this.message.split(' ').reverse().join(' ') 
                   } 
               },
               methods: {
                   reversedMessage: function() {
                   return this.message.split('').reverse().join('');
                   }
               }
               })
               <p>Computed reversed message: "{{ reverdMessage() }}"</p>

 method与计算属性的区别： 计算属性是基于他们的依赖进行缓存的。计算属性只有在它的依赖发生改变的时候才会重新求值。这就意味着message还没有发生改变时，多次访问reversedMessage计算属性会立即返回之前的计算结果，而不必再次执行函数。这也意味着下面的计算属性将不再更新： 因为Date.now()不是响应式依赖
               computed: {
                    now: function() {
                        	return Date.now()
                         } 
                    }
     
vue提供了一种更通用的方式来观察和响应Vue实例上的数据变动： watch属性  
当你有一些数据需要随着其他数据变动而变动时，你很容易滥用watch    通常更好的想法是使用computed属性而不是命令式的watch回调   

               <div id="demo">{{ fullName }}</div>
               var vm = new Vue({
                    el: '#demo',
                    data: {
                         firstName: 'Foo',
                         lastName: 'Bar',
                         fullName； ‘Foo Bar’
                     },
                    watch: {
                         firstName: function(val) {
                              this.fullName = val + ' ' + this.lastName 
                         },
                         lastName: function(val) {
                              this.fullName = this.firstName + ' ' + val
                         }
                     }
               })
               上面的代码和命令是重复的。将它与computed属性版本进行比较：

               var vm = new Vue({
                    el: '#demo',
                    data: {
                         firstName: 'Foo',
                         lastName: 'Bar' 
                    },
                    computed:  {
                        fullName:  function() {
                             return this.firstName + '' + this.lastName 
                         } 
                    }
               })
               计算属性默认只有getter,不过有时你需要提供一个setter: 
                    computed: {
                        fullName: {
                              get: function () {
                                  return this.firstName + ' ' + this.lastName
                              },
                              set: function(newValue) {
                                  var names = newValue.split(' ')
                                  this.firstName = names[0]
                                  this.lastName = names[name.length - 1] 
                              }
                         } 
                    }
                    此时设置vm.fullName = 'John Doe'  setter会被调用进行操作

观察Watchers  虽然计算属性在大多素的情况下是合适的，但有时也需要自定义一个watcher，来响应数据的变化。当你想要执行数据变化响应时，执行异步操作或开销较大的操作，这是很有用的
               <div id="watch-example">
                    <p>
                         Ask a yes/no question:
                         <input v-model="question">
                    </p>
                    <p>{{  answer   }}</p>
               </div>
                 
                var watchExampleVM = new Vue({
                    el: '#watch-example',
                    data: {
                         question: '',
                          answer: 'i conot'       
                    },
                    watch: {
                         question: function(newQuestion) {
                              this.answer = 'Waiting for you to stop typing'
                              this.getAnswer() 
                         } 
                    }
                    methods: {
                         getAnswer: _.debounce(
                              function() {
                                   var vm = this
                                   if(this.question.indexof('?') === -1) {
                                       vm.answer = 'Questions usually contain a ' 
                                        return
                                   }
                                   vm.answer = 'thining...'
                                   axios.get('http://yesno.wtf/api'
                                                  ).then(function() {
                                                      vm.answer = _.capitalize															(response.data.answer) 
                                                  }).catch(function(error) {
                                                      vm.answer = 'error! could 														not reach ths api' 
                                                  })
                              },
                              500
                         )
                    }
               })  

               在这个示例中，使用watch选项允许我们执行异步操作（访问一个API）限制我们的操作频率，并在我们操作得到最终结果前，设置中间状态。这是计算属性无法做到的

Class与Style绑定：数据绑定一个常见的需求是操作元素的class列表和它的内联样式。因为它们都是属性，我们可以用v-bind处理它们：只需要计算出表达式最终的字符串。在v-bind用于class和style时，Vue.js专门进行了增强。表达式可以是对象和数组：

绑定html class 
对象语法:  我们可以传给v-bind: class一个对象，以便动态的切换class 
	<div v-bind: class="{ active: isActive}"></div>表示class active的更新将取决于数据属性isActive是否为真值。我们也可以在对象中传入更多的属性来动态的切换多个class. 同时v-bind:class指令可以与class属性共存
    
		<div class="static" v-bind:class="{ active: isActive, 'text-danger':hasError}"></div>
               data: {
                   isActive: true,
                   hasError: false 
                }
               最后渲染为： <div class="static active"></div>
               你也可以直接绑定数据里的一个对象：
               <div v-bind: class="classObject"></div>
                         data: {
                             classObject: {
                                  active: true,
                                   'text-danger': false 
                              } 
                         }
               渲染的结果和上面一样。我们也可以在这里绑定返回对象的计算属性。这是一个常用并且非常强大的模式：

               <div v-bind: class="classObject"></div>
               data: {
                   isActive: true,
                    error: null 
               },
               computed: {
                    classObject:  function () {
                         return {
                              active: this.isActive && !this.error,
                              'text-danger': this.error && this.error.type === 'fatal',
                         }
                    }     
               }

#####数组语法：
               我们可以把一个数组传给v-bind:class. 以应用一个class列表：
     
               <div v-bind: class="[activeClass, errorClass]"></div>
               data: {
                   activeClass: 'active',
                   errorClass: 'text-danger' 
               }
                <div class="active text-danger"></div>
                如果你想根据条件进行切换列表中的class，可以用三元表达式    
               <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
               该例始终添加errorClass，但是只有在isActive是true的时候添加isActive类       
                不过当有多个条件class时这样写有些繁琐。可以在数组语法中使用对象语法
               <div v-bind: class="[{ active: isActive }, errorClass]"></div>
               
                用在组件上：
               Vue.component('my-component', {
                   template: '<p class="foo bar">Hi</p>' 
               })
               然后使用时再添加一些class：
               <my-component class="baz boo"></my-component>
                HTML最终被渲染为： <p class="foo bar baz boo">Hi</p>

   绑定内联样式： 
                   
					v-bind: style 的语法
                    <div v-bind: style="{ color: activeColor,  fontSize: fontSize + 'px' }"><>
                    data: {
                        activeColor: 'red',
                         font-size: 30 
                    }     

                    直接绑定一个样式对象更好：
                         <div v-bind: style="styleObject"></div>
                          data: {
                               styleObject: {
                                     color: 'red',
                                     font-size:  '13px'
                                }
                          }
                    同样的，对象语法常常结合返回对象的计算属性使用
                   
                    数组语法： v-bind:style的数组语法，可以将多个样式对象应用到一个元素上
                    <div v-bind: style="[baseStyles, overidingStyles]"></div>
                     自动添加前缀： v-bind:style使用需要特定前缀的CSS属性时，如transform

多重值：绑定属性提供一个包含多个值的数组，常用于提供多个带前缀的值
                   
				 <div :sstyle="{ display: ['-webkit-box', '-ms-flexbox' , 'flex']}">

条件渲染：
                  
				v-if： <h1 v-if="ok">Yes</h1>使用这样的功能
                v-else:  <h1 v-if="ok">Yes</h1>   <h1 v-else>No</h1>
                     
                <template>中v-if条件组:   因为v-if是一个指令，需要将它添加到一个元素上面
          
                         <template v-if="ok">
                              <h1>Title</h1>
                              <p>Paragraph 1</p>
                              <p>paragraph 2</p>
                          </template>
                         还可以使用 v-else 指令来表示v-if的"else块"
                          <div v-if="Math.random() > 0.5">Now you see me</div>  
                           <div v-else>Now you don't</div>
                         v-else必须跟在v-if或者v-else-if元素后面，否则它将不会被识别
                         
用key管理可复用的元素：Vue会尽可能的高效的渲染元素，通常会复用已有元素而不是从头开始渲染。可以让Vue变得很快，除此之外允许用户在不同的登录方式之间切换。
                         
						<template v-if="loginType === 'username'">
                             <label>Username</label>
                              <input placeholder="Enter your username " key="username-input"> 
                         </template>
                         <template v-else>
                             <label>Email</label>
                              <input placeholder="Enter your address" key="email-input"> 
                         </template>
                         没有添加key的元素会被重复的使用，而添加了key的元素不会被复用
                         
                         v-show: 另一个用于根据条件展示元素的选项是 v-show 指令
                         <h1 v-show="ok">Hello!</h1>不同的是带有v-show的元素始终会被渲染并保留在Dom中，其只是简单的切换                                             css属性的display

                        
数据属性  
                 
	访问器属性  然后用getter和setter函数方法使用
    定义多个属性： Object.defineProperties()方法，可以一次性定义多个属性
    Object.getOwnPropertyDescriptor()方法，可以取得给定属性的描述符。

                            vue.js:
                              v-if: 是真正的条件渲染  v-show: 不管是否有条件其总会渲染
                              如果需要非常频繁的切换，则使用v-show较好。如果运行时间条件不太可能改变则使用v-if较好
                              v-if与v-for一起使用时，v-for具有比v-if更高的优先级

                              列表渲染：  v-for  我们用v-for指令根据一组数据的选项列表进行渲染。v-for指令需要以 item in item形式的特殊语法。items是数据源，并且item是数组元素迭代的别名
                              <ul id="example-1">
                                   <li v-for="item in items">{{ item.message }}</li>
                              </ul>
                              var example = new Vue({
                                  el: '#example-1'
                                  data: {
                                       items: [
                                            {message: 'Foo'},
                                            {message: 'Bar' } 
                                        ] 
                                   }  
                              })
                              在v-for块中，我们拥有对父作用域属性的完全访问权，v-for还支持一个可选的第二个参数为当前项的索引
                              
                              <ul id="example-2">
                                   <li v-for="(item, index) in items">
                                   {{ parentMessage }} -{{ index }} - {{ item.message }}</li>
                              </ul>
                              var example = new Vue({
                                  el: '#example-2'
                                  data: {
                                       parentMessage: 'Parent',
                                       items: [
                                            {message: 'Foo'},
                                            {message: 'Bar' } 
                                        ] 
                                   }  
                              })
                              也可以用of代替in作为分隔符<div v-for="item of items"></div>
                               也可以用v-for的<template>标签来渲染多个元素块
                              <ul>
                                   <template v-for="item in items">
                                        <li>{{ item.msg }}</li>
                                        <li class="divider"></li>
                                   </template>
                              </ul>


vue.js
                                   对象迭代v-for(可以用v-for通过一个对象的属性来迭代)
                                   <ul id="report-object" class="demo">
                                       <li v-for="value in object">
                                            {{ value }} 
                                        </li> 
                                   </ul>
                                   new Vue({
                                       el: '#report-object',
                                       data: {
                                            object: {
                                                 FirstName: 'Jhon',
                                                 LastName: 'Doe' ,
                                                 Age: 30 
                                             } 
                                        } 
                                   })
                                   提供第二或者三个个参数为键名：
                                    <div v-for="(value, key，index) in object">{{ index }}.{{ key }}:{{ value }}</div>
                                     在遍历对象的时候，是按Object.keys()的结果遍历，但是不能保证他的结果在不同的引擎下是一致的
                              整数迭代v-for：
                                        v-for也可以取整数。在这种情况下，它将重复多次模板
                                        <div>
                                            <span v-for="n in 10">{{ n }}</span> 
                                        </div>
                              #组件和v-for:  在自定义组件里，可以像任何普通元素一样用v-for
                              <my-component v-for="item in items"></my-component>
                              然而他不能自动传递数据到组件里，因为组件拥有自己独立的作用域。为了迭代数据到组件里，我们要用props：
                              <my-component v-for="(item, index) in items" v-bind: item="item" v-bind:index="index"></my-component>
                               不自动注入item到组件的原因是，因为这使得组件会紧密耦合到v-for如何运作，在一些情况下，明确数据录得来源可以使组件重用。下面是一个todo list完整的例子：
                                <div id="todo-list-example"><input v-model="newTodoText" v-on:keyuo.enter="addNewTodo" placholder="Add a  todo"><ul><li is="todo-item" v-for="(todo, index) in todos" v-bind: title="todo" v-on: remove="todos.splice(index, 1)"></li></ul></div>
                                 Vue.component('todo-item', {
                                       template:
                                             <li>
                                                  {{ title }}
                                                  <button v-on:click="$emit('remove')">X</button> 
                                             </li> ,
                                             props: [' title ']
                                  })
                                   new Vue({
                                         el: '#todo-list-example',
                                        data: {
                                             newTodoText: '',
                                              todos: [
                                                 'Do the dishes',
                                                 'Take out the trash',
                                                  'Mow the lawn'
                                               ]   
                                        },
                                        methods: {
                                            addNewTodo: function() {
                                                  this.todos.push(this.newTodoText)
                                                  this.newTodoText = ''
                                             } 
                                        }
                                   })
                    
                    v-for  v-if
                    当它们处于同一节点时， v-for的优先级比v-if更高。这意味着v-if将分别重复运行于每个 v-for循环中。当你想为仅有的一些项渲染节点的时候，这种优先机制会十分有用，如下： 
                    <li v-for="todo in todos" v-if="!todo.isComplete">{{ todo }}</li>  
                     如果你的目的是有条件的跳过循环的执行，那么将v-if置于包装元素上：
                     <ul v-if="shouldRenderTodos">
                             <li v-for="todo in todos"> {{ todo }} </li> 
                     </ul>
                     
                     Key  
                     当v-for正在更新已渲染过的元素列表时，默认用就地复用的策略。这个默认的模式是有效的，但是只适用于不依赖子组件状态或临时DOM状态的列表渲染输出。
                    为了给Vue一个提示，以便其能跟踪每个节点的身份，从而重用和重新排序现有元素 ，你需要为每项提供一个唯一key属性。理想的key值是每项都有唯一id。
                    <div v-for="item in items" :key="item.id"></div> 
                    建议尽可能使用v-for来提供key，除非迭代的DOM内容足够简单
                    因为其为Vue识别节点的一个通用机制， key并不特别与v-for关联
                  
                    数组更新检测
                    变异方法：Vue包含一组观察数组的变异方法，所以它们也会触发视图更新：
                    push()  pop()  shift() unshift()  splice() sort()  reverse()
                    非变异方法： 不会改变原数组，但是总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组
                    example.items = example.items.filter(function(item) {
                         return item.message.match(/foo/)
                    })
                    显示过滤排序结果： 有时我们想要显示一个数组的过滤或者排序副本，而不实际改变或重置原始数组。在这种情况下，可以创建返回过滤或排序数组计算属性：
                    <li v-for="n in evenNumbers">{{ n }}</li>
                     data: {
                            numbers: [1,2,3,4,5] 
                    },    
                    computed: {
                         evenNumbers: function() {
                              return this.numbers.filter(function(number) {
                                   return number % 2 === 0
                              })
                         }
                    }

                    在计算属性不适用的情况下：
          
                    <li v-for="n in even（Numbers）">{{ n }}</li>
                     data: {
                            numbers: [1,2,3,4,5] 
                    },    
                    methods: {
                         even: function(numbers) {
                              return this.numbers.filter(function(number) {
                                   return number % 2 === 0
                              })
                         }

#####事件处理器

	监听事件  v-on
	
		<div id="example-1">
			<buttn v-on: click="counter +=1"></button>
			<p>这个按钮被点击了{{ counter }}次</p>
		</div>

		var example1 = new Vue({
			el: '#example-1',
			data: {
				counter: 0
			}
		})

	方法事件处理器
		var example2 = new Vue({
			el: '#example-2',
			data: {
				name: 'Vue.js'
			},
			methods: {
				greet: function(event) {
					alert('Hello' + this.name + '!')
					if(event) {
						alert(event.target.tagName)
					}
				}
			}

		})

	内联处理器方法

		除了直接绑定到一个方法，也可以用内联Javascript语句

		<div id="example-3">
			<button v-on: click="say('hi')">Say hi</button>
		</div>
		
		new Vue({
			el: '#example-3',
			methods: {
				say: function(message) {
					alert(message)
				}
			}
		})

		有时也需要在内链处理器中访问原生DOm事件。可以用特殊的$event把它传入到方法中：

		<button v-on: click="warn('Form cannot be submitted yet', $event)">Submit</button>
	
		methods: {
			warn: function(message, event) {
				if(event) event.preventDefault()
				alert(message)
			}
		}
	
		事件修饰符
		在事件处理调用event.preventDefault()或者event.stopPropagation()是非常常见的需求
		methods只有纯粹的数据逻辑，而不是去处理DOM事件细节。所以Vue提供了事件修饰符，通过.表示的指令后缀来调用

		.stop  .prevent  .capture  .self  .once
		
		<a v-on: click.stop="doThis"></a>阻止事件冒泡
		<form v-on: submit.prevent="onSubmit"></form>提交事件不再重载页面
		<a v-on: click.stop.prevent="doThat"></a>修饰符串联
		<form v-on:submit.prevent></form>
		<div v-on: click.capture="doThis">...</div>监听使用capture
		<div v-on: click.self="doThat">...</div>只当事件在该元素本身而不是子元素触发时回调
		<a v-on: click.once="doThis"></a>

		按键修饰符：在监听键盘事件时，我们经常需要监测常见的键值。Vue允许为v-on在监听键盘事件时添加按键修饰符：

		<input v-on: keyup.13="submit"></input>
		
		<input v-on: keyup.enter="submit">
		<input @keyup.enter="submit">

		.enter  .tab  .delete  .esc .space  .up .down
		.left  .right

		Vue事件处理方法和表达式都严格绑定在当前视图ViewModel上，不会导致任何维护上的困难。好处：

		1.扫一眼HTML模板便能轻松定位在JavaScript代码里对应的方法
		2.因为你无须再JavaScript里手动绑定事件，你的viewModel代码可以是非常纯粹的逻辑和DOM完全解耦，更易于测试
		3.当一个ViewModel被销毁时，所有的事件处理器都会被自动删除，无须担心自己如何清理它们

#####表单控件绑定

		基础用法：

		可以用v-model指令在表单控件元素上创建双向数据绑定。
		v-model本质上不过是语法糖，负责监听用户的输入事件以更新数据，并特别处理一些极端的例子

		v-model 并不关心表单控件初始化所生成的值。因为它会选择Vue实例数据来作为具体的值

		<input v-model="message" placeholder="edit me"></input>
		<p> Message is :{{ message }}</p>

		多行文本：
	
		<span>Multiline message is:</span>
		<p style="white-space: pre">{{ message }}</p>
		<br>
		<textarea v-model="message" placeholder="add multiple lines"></textarea>
		
		在文本域插值（<textarea></textarea>并不会生效，应用v-model来代替）
		
		复选框：
	
		单个勾选框，逻辑值

		<input type="checkbox" id="checkbox" v-model="checked"></input>
		<label for="checkbox">{{ checked }}</label>

		还可以用于单选按钮
		
		单选列表 多选列表 动态选项可以用 v-for进行渲染

		绑定value  v-model绑定的value通常是静态字符串，对于勾选框是逻辑值
		
		但有时我们想绑定 value到Vue实例的一个动态属性上面，这时可以用v-bind实现，并且这个属性的值可以不是字符串

		复选框： <input type="checkbox" v-model="toggle" v-bind: true-value="a" v-bind: false-value="b"></input>

		修饰符： .lazy 在默认情况下，v-model在input事件中同步输入框的值与数据，同时你可以添加一个修饰符lazy从而转变在change事件中同步<input v-model.lazy="msg">

			.number  .trim

#####组件

	组件可以扩展HTML元素，封装可以重用的代码。在较高的层面上，组件是自定义元素，Vue.js的编译器为它添加了特殊功能。在有些情况下，组件也可以是原生html形式，以is特性扩展

	使用组件：
		
		注册：
			
			new Vue({
				el: '#some-element',
			})

		注册全局组件：
	
			Vue.component('my-component', {

			})
		
		<div id="example">
			<my-component></my-component>
		</div>
		
		注册： Vue.component('my-component', {
			template: '<div>A custom component</div>'
		})
	
		new Vue({
			el: '#example'
		})

		最终会渲染为：

			<div id="example"><div>A custom component</div></div>

		局部注册：

		var Child = {
			template: '<div>A custom component</div>'
		}
		new Vue({
			components: {
				'my-component': Child
			}
		})
		这种封装页适用于其他可注册的Vue功能，如指令
	

#DOM模板解析说明

	<ul><ol><table><select>限制了能被它包裹的元素，而像一些<option>这样的元素只能出现在某些其它元素内部

	例如：
		<table>
			<my-row>...</my-row>
		</table>
		
		自定义的组件<my-row>被认为是无效的内容，因此在渲染的时候导致错误，可以使用is属性：

		<table>
			<tr is="my-row">
		</table>

	 data必须是函数:

		通过
		Vue.component('my-componnet', {
			template: '<span>{{ message }}</span>',
			data: {
				message: 'hello'
			}	
		})
		
		那么Vue会停止，并在控制台发出警告，告诉你在组件里data必须是一个函数。

		<div id="example-2">
			<simple-counter></simple-counter>
			<simple-counter></simple-counter>
			<simple-counter></simple-counter>
		</div>

		var data = { counter: 0}

		Vue.component('simple-counter', {
			template: '<button v-on: click="counter += 1">{{ counter }}</button>'
			data: function() {
				return data
			}
		})

		new Vue({
			el: '#example-2'
		})
		这三个组件共享的是同一个data,因此增加一个counter会影响所有的组件，我们需通过为每个组件返回全新的对象来解决这个问题

		data: function() {
			return {
				counter: 0
			}
		}

		构成组件：（组价意味着协同工作，父子组件）
		在一个良好的定义的接口中尽可能的将父子组件进行解耦很重要。
		父子关系总结为 prop down events up
		父组件通过props向下传递给子组件，子组件通过events给父组件发送消息。

		Prop 使用Prop传递数据

			要让子组件使用父组件的数据，我们需要通过子组件的props选项
	
			Vue.component('child', {
				props: [' message '],
				template: '<span>{{ message }}</span>'
			})

			这样我们就可以向它传递一个普通字符串

			<child message="hello"></child>
			结果就为hello			
			
			HTML特性是不区分大小写的。所以，当使用的不是字符串模板，camelCased(驼峰式)命名的prop需要转换为相对应的bebab-case(短横线隔开式)

			Vue.component('child', {
				props: ['myMessage'],
				template: '<span>{{ myMessage }}</span>'
			})

			<child my-message="hello"></child>
			如果你使用的字符串模板，则没有这些限制
			
			动态Prop  在模板中，要动态的绑定父组件的数据到子模板的props，与绑定到任何普通的HTML  使用v-bind,每当父组件的数据变化时，该变化也会传到给子组件

			<div>
				<input v-model="parentMsg">
				<br>
				<child v-bind: my-message="parentMsg"></child>
			</div>
	
			v-bind:

			<child :my-message="parentMsg"></child>

			字面量语法和动态语法：

			<comp some-prop="1"></comp>
			因为它是一个子面prop,它的值是字符串"1"而不是number.
			如果想传递实际的number，需要使用v-bind,从而让它的值被正确的计算

			<comp v-bind: some-prop="1"></comp>

			单向数据流：

			prop是单向绑定的： 当父组件的属性变化时，将传到给子组件。
			为什么想修改prop中的数据：
			1.prop作为初始值传入后，子组件想把它当做局部数据使用
			2.prop作为初始值传入，由子组件处理成其他数据输出
		
			1.定义一个局部变量：并用prop的值初始化它：

			props: ['initialCounter'],
				data: function() {
					return { counter: this.initialCounter}
				}
			2.定义一个计算属性，处理prop的值并返回

				props: ['size'],
				computed: {
					normalizedSize: function() {
						return this.size.trim().toLowerCase()
					}
				}
	
			Prop验证：

			我们可以为组件的props指定验证规格，传入的数据不符合规格，Vue会发出警告。

			Vue.component('example', {
				props: {
					propA: Number,
					propB: [String, Number],
					propC: {
						type: String,
						required: true
					},
					propD: {
						type: Number,
						default: 100
					},
					propE: {
						type: Object,
						default: function() {
							return {message: 'hello'}
						}
					},
					propF: {
						validator: function(value) {
							return value > 10
						}
					}
				}
			})

			自定义事件：
			通过自定义事件，子组件可以把数据传递回去

			使用v-on绑定自定义的事件：

			使用$on(eventName)监听事件
			使用$emit(eventName)触发事件

			另外父组件可以在使用子组件的地方直接用v-on来监听子组件触发的事件
			
			不能用$on侦听子组件抛出的事件，而必须在模板里直接用v-on绑定，就像下面的例子

			<div id="counter-event-example">
				<p>{{ total }}</p>
				<button-counter v-on:increment="incrementTotal"></button-counter>
				<button-counter v-on:increment="incrementTotal"></button-counter>
			</div>

			Vue.componnet('button-counter', {
				template: '<button v-on: click="increment">{{ button }}</button>'
				data: function() {
					return {
						counter: 0
					}
				},
				methods: {
					increment: function() {
						this.counter += 1
						this.$emit('increment')
					}
				},
			})

			new Vue({
				el: '#counter-event-example',
				data: {
					total: 0
				},
				methods: {
					incrementTotal: function() {
						this.total +=1
					}
				}
			})

			给组件绑定原生事件：

			有时候，你可能想在某个组件的根元素监听一个原生事件，可以使用.native代替v-on

			<my-component v-on:click.native="doTheThing"></my-component>

			.sync修饰符（作为一个编译时的语法糖存在，会被扩展为一个自动更新到父组件的属性v-on侦听器）
		
			<comp :foo.sync="bar"></comp>
			会被扩展为：

			<comp :foo="bar" @update:foo="val => bar = val"></comp>
			
			this.$emit('update: foo', newValue)

			使用自定义的事件的表单输入组件
			自定义的事件可以用来创建自定义的表单输入组件，使用v-model来进行数据双向绑定。
			<input v-model="something">
			<input v-bind: value="something" v-on: input="something = $event.target.value">

			所以在组件中使用时，相当于下面的简写：

			<custom-input v-bind:value="something" v-on: input="something = argument[0]"></custom-input>

			所以要让组件的v-model生效，必须：
			1.接受一个value属性
			2.在有新的value时触发input事件

			非父子组件通信
				有时候两个组件也需要通信（非父子关系）
				在此简单的场景下，可以使用Vue实例做为中央事件总线

				var bus = new Vue()
			
				//触发组件a 中的事件
				bus.$emit('id-selected', 1)
				
				//在组件b创建的钩子中监听事件
				bus.$on('is-selected', function(id) {

				})
		
				//专门的状态管理模式
				使用Slot分发内容：	
				<app>
					<app-header></app-header>
					<app-footer></app-footer>
				</app>

				<app>组件不知道它的挂载点会有什么内容。挂载点的内容是由<app>的父组件决定的。
			
				<app>组件可能有它自己的模板
				为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个过程被称为内容分发
				

				编译作用域：

				假定模板： <child-component>{{ message }}</child-component>

				如果要绑定作用域内的指令到一个组件的根节点，：

				Vue.component('child-component', {
					template: '<div v-show="someChildProperty">Child</div>'
					data: fucntion() {
						return {
							someChildProperty: true
						}
					}
				})

				单个Slot