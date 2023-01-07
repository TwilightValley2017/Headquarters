温故知新

一个做技术的朋友找我询问一个前端问题，他正在写 Chrome 插件，用于自动填充第三方网页表单的内容。

核心代码如下
```html
<input id="accountName" type='text' class="el-input__inner"/>
```
```js
// chrome 插件代码
var el = document.getElementByID('accountName')
el.value = 'xxxx'
```
> 显然，这个三方系统使用 vuejs + element-ui。id 是追加的，非源码

他的问题是，页面上文本框已经显示了通过代码填充的内容，但是提交表单的时候，设置的值并没有出现在接口请求中。

这个问题把我问懵了，反应了好一阵才把原理和细节梳理明白，记录一下，温故知新

### v-model
input 元素进行双向绑定，一定是通过设置 v-model="data" 来实现
v-model 是语法糖，在 input 元素使用时等效于
```html
<input :value="data" @input="data=$event.target.value" />
```
用户在文本框输入内容，触发 input 事件，为 data 赋值；但是通过设置EventTarget.value，**并不能达到更新 data 的目的**。:confused:

> 这一篇是简介，比较通俗 [v-model 实现原理](https://zhuanlan.zhihu.com/p/572324052)
> 这个是正经的源码解读 [v-on 指令详解](https://www.cnblogs.com/greatdesert/p/11121952.html)

### Event 的触发机制
触发元素 Event 的方式，分为自动触发和手动触发。
- 自动触发是指通过浏览器的事件触发机制，调用元素绑定的 EventHandler
- 手动触发是指，通过 Web API，调用元素绑定的 EventHandler

在前端开发中，熟视无睹的现象已经被认为是理所当然了。比如 JavaScript 对 HTML 的操作，已经被认为是“内置”的关联关系了，其实不然。

JS 能够操作 HMTL，JS 能够响应一个用户动作或者一个网络请求，都是浏览器为开发人员提供的能力，这种能力就是 Web API。

比如：通过 addEventListener 为 button 元素绑定一个点击事件，是通过用户点击元素，浏览器产生一条指令，调用了绑定到元素上的**点击事件处理器**，相应的 JS 代码逻辑才得以执行，这就是自动触发。而手动触发，同样是通过 Web API，在没有用户交互行为下，由 JS 代码来触发**事件处理器**的执行。

**所以，设置 EventTarget.value，既没有用户交互，也没有通过 JS 代码触发事件处理器，自然无法达到目的。**

### 解决方式
通常，为元素绑定事件并手动触发只需要三行代码
```js
const event = new Event('input')
eventTarget.addEventListener(event.type, (e) => { e.target.value="xxxx" })
eventTarget.dispatchEvent(event)
```
一般场景下已经满足了，但是针对问题里面的场景，显然 eventTarget.addEventListener 是多余的，因为 input 元素已经通过 v-model 绑定了 input 事件处理器，仅仅需要触发就可以了。
```js
eventTarget.value = 'xxxx'
eventTarget.dispatchEvent(new Event('input'))
```

> 相关 web 标准里并不支持查询元素的绑定事件处理器，但是可以通过浏览器开发者工具进行查询，方式如下：
> 在 Elements 选项卡中点击元素对象，在右边窗口点击 Event Listeners 页签，可以看到已绑定事件

### 其他
- [深入理解浏览器的事件机制](https://juejin.cn/post/6914600144621027336)
- [你不知道的 DOM 输入事件](https://zhuanlan.zhihu.com/p/111416872)