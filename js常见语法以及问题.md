###js常见问题以及常用语法：

1.浮点的精度问题：

	在默认的情况下，es会将小数点后面带有6个0以上的浮点数值转换为以e表示的数值

	浮点数值的最高精度是17位小数，但在进行计算的时候其精度远远不如整数

    例如： 0.1+0.2的结果不是0.3 而是0.30000000000000004，所以不要做这样的判断。有些有有些没有。		

2.for-in

	该语句是一种精准的迭代语句，可以用来枚举对象的属性。

3.label语句和break/continue语句的使用

4.将代码的作用域设置到一个特定的对象中。（）严格模式不使用

#####函数

1.位于return语句之后的任何代码永远都不会执行 （若直接return 会返回undefined）

2.函数参数内部通过arguments对象来访问采参数（严格模式下为其赋值无效）

3.没有重载（因为其参数由包含零或多个值的数组表示，没有函数签名）若两个名字相同，则属于后者

基本数据类型： Undefined Null Boolean Number String    复杂数据类型： Object


#####变量、作用域和内存的问题

1.引用类型是按照引用来访问的

2.typeof 判断基本类型  instaceof判断什么类型的对象

3.执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。（变量对象）（环境栈）（执行流）

4.当代码在一个环境中执行的时候，会创建变量对象的一个作用域链。（保证对执行环境有权访问的所有变量和函数的有序访问）

5.没有块级作用域  (尤其是for循环，会导致声明的变量i可以在循环外部的执行环境得到访问)

6.垃圾收集： 1.标记清除(变量是否在环境中)  2.引用计数(引用类型的值赋给一个变量(问题是循环引用))

7.管理内存： 一旦数据不再有用，就将其设置为null来释放其引用（尤其是全局变量）


#####杂项小插曲

	jade语法中遍历某个下表用each i, item in dataList

	事件冒泡可以在较低级别的处理器中避免重复相同的代码

	css: overflow(当内容溢出元素框时发生的事情)

	defer之后会调用调用者同级的回调函数

	对于resolve、reject只是对应处理相应的方法。


#####引用类型

1.Object(1.new Object();构造函数   2.对象字面量)

2.Array类型： 1.构造函数   2.字面量

	Array下常用的方法：

	Array.isArray(Array);判断是否为Array   toString()方法     join()方法

	栈方法：（后进先出） push()方法   pop()方法

	队列方法：（先进先出） push()  shift()   unshift()从前端加项

	重排序方法： reverse()  会反转数组项的顺序  sort()  按升序排列数组项（其比较的是字符串，可以传一个函数从而进行比较）

	操作方法： concat()方法  将新的参数添加到数组中  slice() 基于当前数组中的一个或多个创建一个新数组 
    
                 splice()数组的最强大的方法 1.删除  传入2个参数 要删除的第一项的位置和要删除的项数
                    
                                                          				 2.插入  传入3个参数  可以向指定位置插入任意数				   量的项  splice(2,0,'red','green')

                                                          				 3.替换   传入3个参数  可以向指定位置插入任意数   				   量的项，且同时删除任意数量的项

                 （返回的是从从数组中删除的项）

	位置方法： indexOf()  lastIndexOf()  传递的参数 ： 要查找的项和查找起点位置的索引（使用的是 ===符号）

	迭代方法：（接受两个参数，在每一项运行的函数和运行该函数的作用域对象-影响this的值） 

	every filter some 放法多用于过滤 map多用于对每一项进行操作并返回数组   forEach 对于对每一项进行操作，而没有返回值

                   1.every()  对数组的每一项运行给定的函数，如果每一项都返回true，则返回true

                   2.filter()  对数组的每一项运行给定的函数，则返回函数会返回true组成的数组

                   3.forEach()  对数组中的每一项运行指定的函数，方法没有返回值

                   4.map()  对数组中的每一下个运行指定的函数，返回每次函数调用的结果组成的数组

                   5.some()  对数组中的每一项运行给定的函数，如果该函数对任一项返回true,则返回true

	归并方法： reduce()和reduceRight()
			
					传递四个参数 前一个值 当前值 项的索引 数组对象   第一次迭代发生在数组的第二项上，前一次的返回值作为参数传入到下一次中

3.Date类型

	new Date()   Date.now()   +new Date()




	null: "表示没有对象"，即该处不应该有值
          1.作为函数的参数，表示函数的参数不是对象
          2.作为对象原型链的终点
	undefined: 表示缺少值，就是此处应该有一个值，但是还没有定义
          1.变量被声明了，但没有赋值，就等于undefined
          2.调用函数时，应该提供的参数没有提供，该参数等于undefined
          3对象没有赋值的属性，该属性的值为undefined
          4.函数没有返回值时，默认返回undefined.

	通过对象将对象的键保存到一个数组中，获取对象的长度

	Object.keys(object);


4.继承方法：

	toLocalString()  toString()方法  
	valueof()  返回表示日期的毫秒  因此日期可以直接比较大小

	日期/时间组件方法
		getTime()  返回表示日期的毫秒数  
		setTime(毫秒)以毫秒设置日期，会改变整个日期
	 	getFullYear()  取得四位数的年份
		getMonth() 返回日期中的年份 
		getDate() 返回日期中的天数
		getDay()  返回日期中的星期的星期几/
		getHours() 返回日期中的小时数
		getMinutes()  日期中的分钟数
		getSeconds()  返回日期中的秒数

5.RegExp类型

	var expression = / pattern / flags ;
	g: 表示全局模式 即模式将被应用与所有的字符串，在非发现第一个匹配项时立即停止
	i: 表示不区分大小写  即在确定匹配模式时忽略与字符串的大小写
	m: 表示多行模式，在到达一行文本末尾时，还会继续查找下一行中是否存在与模式匹配的项。

	var pattrern1 = /at/g;  匹配字符串中所有'at'的实例

	var pattern2 = /[bc]at/i; 匹配第一个bat或者cat ，不区分大小写

	var pattern3 = /.at/gi; 匹配所有以'at'结尾的3个字符组合，不区分大小写 

	元字符必须转义： ([{\^$|}])?*+.

	var pattern = /\[bc\]at/i  匹配第一个"[bc]at", 不区分大小写

	var pattern = new RegExp("[bc]at", "i");

	使用正则表达式和使用RegExp构造函数创建的正则表达式不一样。字面量会共同一个RegExp的实例，而使用构造函数创建的每一个新RegExp实例都是一个新实例。 （实例的属性不会重置）

	实例方法：

		exec(): 专门为捕获组而设计的

		调用该方法： 在不设置g时，其只会捕获第一个匹配项  设置g 再次调用时，会继续查找新的匹配项；

		test(): 在模式与该参数匹配的情况下返回true  

	^ $ 匹配开始和结束的情况


6.Function 类型：（函数是对象，因此函数名实际上是指向函数对象的指针，不会与某个函数绑定）

	1.函数声明语法  2.定义变量  3.构造函数的方式

	2.没有重载  覆盖了前面的引用

	3.函数声明和函数表达式
		
		函数声明提升

			函数声明： 解析器率先读取，在执行任何代码之前可以用(可以访问)
			函数表达式: 解析器执行到所在的代码行时才会真正的执行
		
	4.作为值的函数（要访问函数的指针而不执行函数的话，必须去掉函数名后面的那对圆括号）

	5.函数内部的属性
	
		arguments: 一个类数组对象  包含着传入函数的所有参数 保存函数参数
		callee属性为指针，指向拥有这个arguments对象的函数（可以解决递归的紧密耦合的现象）

			function factorial(num) {
				if(num <= 1) {
					return 1;
				} else {
					return num * arguments.callee(num-1);
				}
			}

	事件冒泡可以在较低级别的处理器中避免重复相同的代码

	css: overflow(当内容溢出元素框时发生的事情)

#####大数据插曲：

		pv  uv
		pv:页面的浏览量或者说是点击量（一个访问者打开了你的几个页面，不重复计算同一个页面的点击）
		uv:指访问某个站点或点击某条新闻的不同ip地址的人数。
		
		jade语法中遍历某个下表用each i, item in dataList

#####继续js

	defer之后会调用调用者同级的回调函数

	对于resolve、reject只是对应处理相应的方法。

1.内存、垃圾回收、内存管理

		
	没有块级作用域  (尤其是for循环，会导致声明的变量i可以在循环外部的执行环境得到访问)
	
	垃圾收集： 1.标记清除(变量是否在环境中)  2.引用计数(引用类型的值赋给一个变量(问题是循环引用))
	
	管理内存： 一旦数据不再有用，就将其设置为null来释放其引用（尤其是全局变量

2.Array:
		
	Object(1.new Object();构造函数   2.对象字面量)

	Array类型： 1.构造函数   2.字面量

	Array下常用的方法：

	Array.isArray(Array);判断是否为Array   toString()方法     join()方法

	栈方法：（后进先出） push()方法   pop()方法

	队列方法：（先进先出） push()  shift()   unshift()从前端加项

	重排序方法： reverse()  会反转数组项的顺序  sort()  按升序排列数组项（其比较的是字符串，可以传一个函数从而进行比较）

	操作方法： concat()方法  将新的参数添加到数组中  slice() 基于当前数组中的一个或多个创建一个新数组 
    
        	  splice()数组的最强大的方法 1.删除  传入2个参数 要删除的第一项的位置和要删除的项数
                    
                                       2.插入  传入3个参数  可以向指定位置插入任意数量的项  splice(2,0,'red','green')

                                       3.替换   传入3个参数  可以向指定位置插入任意数量的项，且同时删除任意数量的项

              （返回的是从从数组中删除的项）

	位置方法： indexOf()  lastIndexOf()  传递的参数 ： 要查找的项和查找起点位置的索引（使用的是 ===符号）

	迭代方法：（接受两个参数，在每一项运行的函数和运行该函数的作用域对象-影响this的值） 

                   1.every()  对数组的每一项运行给定的函数，如果每一项都返回true，则返回true

                   2.filter()  对数组的每一项运行给定的函数，则返回函数会返回true组成的数组

                   3.forEach()  对数组中的每一项运行指定的函数，方法没有返回值

                   4.map()  对数组中的每一下个运行指定的函数，返回每次函数调用的结果组成的数组

                   5.some()  对数组中的每一项运行给定的函数，如果该函数对任一项返回true,则返回true

#####关于null和undefined的小解释

	null: "表示没有对象"，即该处不应该有值
          1.作为函数的参数，表示函数的参数不是对象
          2.作为对象原型链的终点
	
	undefined: 表示缺少值，就是此处应该有一个值，但是还没有定义
          1.变量被声明了，但没有赋值，就等于undefined
          2.调用函数时，应该提供的参数没有提供，该参数等于undefined
          3对象没有赋值的属性，该属性的值为undefined
          4.函数没有返回值时，默认返回undefined.

#####js

	通过对象将对象的键保存到一个数组中，获取对象的长度

	函数的内部属性：
    
     函数内部的this引用的是函数执行的环境对象
     caller 保存着调用当前函数的函数引用，如果在全局作用域进行调用返回null

函数的属性和方法：

     属性：length(表示函数希望接受的参数的个数) prototype(保存着实例的方法  在自定义引用类型和实现继承的时候尤为重要)不可枚举
     函数： apply() call() 在特定的作用域中调用函数 实际上等于设置函数体内this对象的值 (二者真正的作用在于扩充函数赖以运行的作用                                  域)  bind()方法创建函数的实例，其this值会被绑定到传给bind()函数的值

基本的包装类型：

       Boolean Number String 
		
		
       我们知道基本类型值不是对象，因而从逻辑上来讲，其不应该有方法。其实后台进行了一系列的操作：
          1.创建String的一个实例
          2.在实例上调用指定的方法
          3.销毁这个实例

      引用类型和基本包装类型主要的区别就是对象的生存期。
      Object的构造函数也会像工厂方法一样，根据传入的类型返回基本的包装类型的实例。
       使用new调用基本包装类型的构造函数和直接调用同名的转型函数是不同的。转型函数保存的是基本类型的值，而构造函数保存的是Number的实例


       

val() 用于返回或设置被选元素的值

async异步解决的方案（Generator函数的语法糖）

         var fs = require('fs');
         var readFile = function (fileName) {
               return new Promise(function (resolve, reject) {
                    fs.readFile(fileName,function(err, data) {
                         if(err) reject(error);
                         resolve(data);
                    });
               });
          };

          var gen = function* () {
               var f1 = yield readFile('/etc/fstab');
               var f1 = yield readFile('/etc/shells');
               console.log(f1.toString());
               console.log(f2.toString());
          };

          写成async的异步函数，是如下的情形：
          var asyncReadFile = async function() {
               var f1 = await readFile('/etc/fstab');
               var f2 = await readFile('/etc/shells');
               console.log(f1.toString());
               console.log(f2.toString());
           }
          
          优势： 1.内置的执行器： Generator函数的执行必须依靠执行器，所以才有了co函数，而async函数自带执行器，也就是说其与普通函数一模一样，只要一行。
                     2.更好的语义
                     3.更广的适用性 co函数库规定yield后面跟的是Thunk函数或者Promise对象，而async后面的await命令后面，可以跟Promise对象和原始的数据类型（但是这时候和同步操作无异）

          example:指定多少秒之后输出一个值

          function timeout (ms) {
               return new Promise((resolve) => {
                    setTime(resolve, ms);
               });
           }

          async function asyncPrint(value, ms) {
               await timeout(ms);
               console.log(value);
          }
     
          asyncPrint('hello world', 50);

          注意点： 由于await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中

          async function myFunction() {
               await somethingThatReturnsAPromise().catch(function (err){
                    console.log(err);
               })
          }

          使用foreach对异步函数进行操作的时候，可能会得不到正确的结果，因为这个时候是三个异步请求并发执行，所以使用for循环进行遍历

          async function dbFuc(db) {
                  let  docs = [{},{},{}];
                  for (let doc of docs) {
                    await db.post(doc);
                  }
           }
          如果确实希望多个请求并发执行，可以使用Promise.all方法
          async function dbFuc(db) {
               let docs = [{},{},{}];
               let paomises = docs.map((doc) => db.post(doc));
               let results = await Promise.all(promises);
               console.log(results);
          }

          => 和generator可以解决this的作用域的问题
               

#####node.js

	
		  node.js 的基本模块

          Node.js内置的fs模块就是文件系统模块，负责读写文件
     
          读文件：fs.readFile
          var fs = require('fs');
          fs.readFile('sample.txt', 'utf-8', function (err, data) {
               if(err) {
                    console.log(err);
               } else {
                    console.log(data);
               }
          } );

          写文件：fs.writeFile()
          var  fs = require('fs');
          var data = 'hello, node.js';
          fs.writeFile('output.txt', data, function (err) {
               if(err) {
                    console.log(err);
               } else {
                    console.log('ok');
               }
           });

          获取文件的信息： fs.stat(), 其返回一个stat对象，告诉我们目录的详细信息

等号不规范的问题，造成加载不到数据库中，在数据库中查询不出来。

#####移动端适配的解决方案

		Rem:
		
		移动端使用rem进行页面的适配(为了让我们的页面在设备上都有良好的展示，就需要为设备作统一的处理，这个过程就称为移动端适配)
		
		物理像素：显示手机上最小的物理显示单元，可以理解为我们平时说的分辨率
		
		设备独立像素： 计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素（比如：css像素），然后由相关的系统转换为物理像素（所以物理像素和设备独立像素之间存在着一定的对应关系，设备像素比）
		
		设备像素比：=物理像素/设备独立像素//在某一方向上   （是设备生产的时候设置好的）
		
		视口（viewport）
		
		Rem 是css3的一个长度单位，相对文档根元素html，比如设置html font-size=100px;那么1rem = 100px;之后所有的元素都可以用这个基准值来设置大小
		
		常用方案： 固定高度，宽度自适应（百分比 em）
                  使用rem 布局

               网易做法：1.将布局适口设置为视觉视口，不进行缩放，即理想视口
                                <meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1">
                                2.以设计稿分辨率为基准，取100px为font-size的参照，如果设计稿的宽是640，那么body元素的宽度就可以设置为width: 6.4rem,当我们将布局适口设置为320时，于是html的font-size=deviceWidth/6.4

                                3.通过document.documentElement.clientWidth获取deviceWidth

                                4.当页面的dom ready后设置html font-size

                                   document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4 + 'px'

                                 5.通过mediaQuery设置字体的大小，字体大小不使用rem 原因误差太大

                                   var deviceWidth = document.documentElement.clientWidth;
                                   if(deviceWidth > 640) deviceWidth = 640;因为当deviceWidth大于640的物理分辨率已经大于1280(取决于dpr，应该去访问pc的网站)

               淘宝的做法：1.通过dpr设置缩放比，实现布局视口大小
               
                                     var scale = 1 / devicePixelRatio; 
                   document.querySelector('meta[name="viewport"]').setAttribute('content','initial-                                                       scale='+ scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

                   2.动态计算html的font-size
                   document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + ‘px’；     

                    这里的意思是，clientWidth/10得到是布局视口下的rem的基准值(以iphone6为例 1rem=75px),那么设计稿正好也是750,所以对应关系clientWidth/10==设计稿的尺寸/x,那么x=设计稿的尺寸/rem的基准值。

         具体的逻辑：1.判断head中是否设置了viewport,如果有设置，按照已有的viewport设置缩放比

                    2.如果没有设置meta viewport,判断是否设置dpr，如果有通过dpr,计算缩放比scale

                     3.如果dpr和scale都没有设置，那么就通过设备的dpr设置起缩放scale   

                     4.得到scale之后，如果meta的view不存在，那么就创建meta[name="viewport"],将scale配置进去

                     5.动态改写html的font-size
		总结：
          
		  使用rem布局，实质是通过动态改写html的font-size基准值，来实现不同设备下的良好统一适配；
          网易和淘宝不同的地方是，网易将布局视口设置成了视觉视口，淘宝将布局视口设置成了物理像素大小，通过scale缩放嵌入到了视觉视口中
          容器元素的字体大小都不使用rem，需要额外的media查询

#####HTTp状态码：

		HTTP状态码详解：（web服务器用来告诉客户端，发生了什么事情）
          
          1xx 信息提示  2xx成功  3xx重定向  4xx客户端错误  5xx服务器错误

          常见的状态码： 200 服务器成功处理了请求  301/302 请求的url已经移走。Response中应该包含location URL说明资源现在所处的位置。 304 Not Modified（未修改）客户的缓存资源是最新的，要客户端使用缓存 404 Not Found未找到资源
		  501 Internal Server Error服务器遇到一个错误，使其无法对请求提供服务 
          204 没有内容  206部分内容  301永久移除  400 坏请求  403 禁止 405 不允许使用的方法  413 请求的实体太大  414请求的uri太长  

#####js
	
	引用类型不建议使用：
     
	 Boolean 因为引用类型的操作时，其为对象，所以，布尔表达式中的(所有对象都会被转换为true即使其被赋值为false)
     Number类型： 其重写的toString(2)还可以返回参数的进制的表示  toFIxed(2)将数值格式化为字符串，两位小数  toExponential()  也接受一个参数，该参数同样也是指定输出结果中的小数位数  toPrecision()随机返回指数或者小数的表示
     String 是字符串的包装类型 length属性  访问特定的字符的方法是： chartAt()获得位置的字符  chartCodeAt()获得位置字符的编码 这两个方法都接受一个参数，基于0的字符位置  使用concat() 将一个字符串或者多个拼接起来了，返回新的字符串
	 
	slice()  substring() 都接受一、两个参数 其中前两个函数参数表示字符的开始位置和到哪个位置结束。substr()第二个参数指定返回的字符个数，如果没有传递参数则将字符串的末尾作为结束位置。在传入负值的情况下，slice()会将传入的负值与字符串的长度相加 substr()会将第一个负的参数和加上字符串的长度而第二个负的参数置为0.substring会将所有的负值参数都转换为0.

#####xss攻击

	XSS攻击： 三种（1.基于反射的XSS攻击 2.基于存储的XSS攻击 3.基于DOM和本地的XSS攻击）
          1.基于反射的xss攻击  主要依靠站点服务端返回的脚本，在客户端处触发执行从而发起web攻击
          安全措施： 前端在显示服务端数据的时候，不仅是标签内容需要过滤，转义就连属性也都可能需要
                            后端在接受请求的时候，验证请求是否为攻击请求，攻击则屏蔽掉
          2.基于存储的XSS攻击，是通过发表带有恶意的帖子，将恶意脚本储存在服务器，每个访问该帖子的人就会触发
          措施：后端尽可能的对提交的数据做过滤，在场景需求热不过滤的情况下，前端做措施
                    服务端进行过滤，因为前端的校验可以被绕过
                    当服务端不校验的时候，前端就要进行各种方式过滤里面可能的恶意脚本

          3.基于DOM和本地的XSS攻击
               一般通过免费的wifi通过网关直接将钓鱼页面返回，从而植入恶意脚本。这种直接存在于页面而不经过服务器的返回的就是本地的XSS攻击   
               这种攻击其实跟网站本身没有关系，只是数据被中间人获取了，由于HTTP是明文传输，所以极有可能被窃取
               安全措施：使用https 

		 string:
         字符串中查找子字符串： indexof() 从前面开始搜索和 lastIndexOf()从后面开始搜索  循环遍历查找某个字符串
         trim()方法   这个方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回 
          
         字符串中大小写转换方法：  toLowerCase()、toLocalLowerCase()、toUpperCase()、toLocalUpperCase()

         字符串的模式匹配： match()只接受一个参数，要么是个正则表达式，要么是个对象和RegExp的exec()方法相同
 
              search()用于查找模式的方法，参数同上  从头向后查找
                                       
              replace()   替换  两个参数，第一个参数可以为字符串或者RegExp对象，如果第一个参数是字符串那么只会替换第一个字符串，如果想要替换所有的子字符串，那么就要提供一个正则表达式。指定G
                              
              var text = "cat bat";
              var result = text.replace(/at/g,'ond');
                                        
         单体内置方法： 
         Global对象：
             URI编码： encodeURI（主要用于整个URI的编码，且不会对本身属于URI的特殊的字符进行编码）和encodeURIComponent()（主要用于一段URI进行编码，任何的非标准的字符进行编码）方法可以对URI进行编码，以便发送给浏览器
             对应的解码： decodeURI和decodeURIComponent
                    
             eval():方法
             只接受一个参数，即要执行的js代码：其执行的环境具有与该执行环境具有相同的作用域链
                    
                    
             window对象
                    

             Math对象：

             Math.PI  min()  max()   查找数组中的最大值  var max = Math.max.apply(Math, values);
             舍入： Math.ceil()  向上舍入最接近的整数  Math.floor()  向下舍入最接近的整数  Math.round() 将总是将数值四舍五入为最近接的整数
             Math.random()返回一个大于等于0小于1的一个随机数var num = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)  Math.abs()  
          
面向对象的程序设计：
          
             对象字面量成为创建对象的首选的方法：
                    var person = {
                              name: "Nicholas",
                                     age: 29,
                                     sayName: function() { alert(this.name);
                                  }}

			创建对象：（Object()的构造函数和对象字面量都会创建单个对象，但是方式缺点就是会产生大量重复的代码）
                          1.工厂模式
                                   发明了一种函数，封装用特定的接口创建对象的细节(不能解决对象的识别问题，怎样知道对象的类型)
                                   function createPerson(name ,age , job) {
                                        var o = new Object();
                                        o.name = name;
                                        o.age = age;
                                        o.job = job;
                                        o.sayName = function() {
                                            alert(this.name); 
                                        },
                                        return o;
                                   }
                                   var person1 = createPerson('Greg', 27, 'Doctor')
                         
                              2.构造函数模式：
                                   构造函数可以用来创建特定类型的对象(与工厂模式的不同之处：1.没有显式的创建对象 2.直接将属性和方法赋给了this对象 3.没有return对象)                              构造函数多用大写字母开头，非构造函数多以小写字母开头
                                   function Person(name, age, job) {
                                        this.name = name;
                                        this.age = age;
                                        this.job = job;
                                        this.sayName = function() {
                                            alert(this.name); 
                                        }
                                   }
                                   var person1 = new Person('Nicholas', 29, "software");
                                   new操作符做的事情： 1.创建一个新对象
                                                                    2.将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
                                                                    3.执行构造函数的代码
                                                                     4.返回新对象
                                    对象的constructor用来标示对象类型  instaceof 用来标示对象（最大的优点是可以将它的实例标示为一种特定的类型）
                                   
                                   任何函数只要通过new操作符来调用，那它就可以作为构造函数。而任何函数如果不是new操作符来调用，那么它和普通函数也差不多
                                   构造函数的主要问题：就是每个方法都要在每个实例上边重新创建一遍
                                    解决办法： 把执行相同任务的函数提取出来
                                   function Person(name, age, job) {
                                        this.name = name;
                                        this.age = age;
                                        this.job = job;
                                        this.sayName = sayName;
                                   }
                                   function sayName() {
                                       alert(this.name); 
                                   }     
                                   var person1 = new Person('greg', 29, 'Doctor');(1.新的问题全局作用域的函数只能被某个对象调用 2.定义多个全局函数没有封装性可言)

2.原型模式
	
	1.创建的每个函数都有prototype属性，是一个指针，指向一个对象，而这个对象的用途是包含有特定类型所有实例共享的属性和方法。
	使用原型的好处就是；可以让所有对象实例共享它所包含的属性和方法。
		
	function Person() {
	}
	Person.prototype.name = "greg";
	Person.prototype.age = 29;
	Person.prototype.sayName = function() {
		alert(this.name);
	}
	var person1 = new Person();
	person1.sayName();
		
	2.只要创建了函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向函数的原型对象（同时原型对象有一个constructor的属性指向该函数）
	通过isPrototypeOf()方法用来判断原型是哪个对象
	而Object.getPrototypeOf()方法用来获取原型对象
	
	3.我们不能通过对象实例来重写原型的值
	如果我们在实例中创建了和实例原型中名称一致的属性，那么该属性就会屏蔽掉原型中的那个属性  可以用delete进行删除
	使用hasOwnProperty()方法检测一个属性是存在于实例中还是存在于原型 in 操作  可以访问到的属性就为true

	4.for in 循环是，返回的是能够通过对象访问的、可枚举的属性，其中既包括存在于实例中的属性也包括存在于原型中属性。

	5.取得对象上所有可枚举的实例属性，可以使用Object.keys()方法。返回可枚举属性的字符串数组。 Object.getOwnProperty-Names()得到所有的实例属性，不论是否可枚举

	6.还可以用对象字面量的方式来重写原型  相当于重写 constructor指向object的构造函数

	7.原型的动态性  实例只会指向最初的原型

	8.原型对象的问题：

		对于共享引用类型值的属性（造成一改全改，不具有自己特殊的属性）
	#####组合使用构造函数和原型模式(目前使用最为广泛的，认同度最高的创建自定义类型的一种方式)
		
		function Person(name, age, job) {
			this.name = name;
			this.age = age;
			this.job = job;
			this.friends = ['Shelby', 'Court'];
		}

		Person.prototype = {
			constructor: Person,
			sayName: function() {
				alert(this.name);
			}
		}
	
		var person1 = new Person('','','')



     

		
					
		