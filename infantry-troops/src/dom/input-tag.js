export default () => {
  // 创建元素
  const inputEl = document.createElement('input')
  inputEl.setAttribute('value', '')
  inputEl.setAttribute('id', 'monday')

  const event = new Event('input')
  inputEl.addEventListener(event.input, e => {
    console.log({ value: e.target.value })
  }, false)

  // 挂载
  document.querySelector('body').appendChild(inputEl)

  // 测试 value
  window.el = document.querySelector('#monday')

  setTimeout(() => {
    inputEl.dispatchEvent(event)
  }, 1000)
}


