
/**
 * 发布-订阅模式
 * 应用场景1
 */
function EventTarget() {
  // 事件【原来的职位信息】
  this.events = [{ type: "click" }, { type: "mouseover" }]
  // 事件监听【原来的订阅中心】
  this.eventListener = {}
  // 注册事件处理到对应的事件类型【原来的订阅注册，eventType是原来的频道】
  this.addEventListener = function (eventType, eventHandler) {
    if (!this.eventListener[eventType]) {
      this.eventListener[eventType] = []
    }
    this.eventListener[eventType].push(eventHandler)
  }
  // 触发事件【原来的发布订阅】
  this.dispatchEvent = function (eventType) {
    if (this.eventListener[eventType]) {
      this.eventListener[eventType].forEach((eventHandler) => {
        eventHandler.call(
          this,
          this.events.find((event) => event.type === eventType)
        )
      })
    }
  }
}

const pubSubPattern = () => {
  var div = new EventTarget()
  // 注册事件处理到对应的事件类型
  var eventHandler = function (event) {
    console.log(`触发了事件：${event.type}`, this)
  }
  div.addEventListener("click", eventHandler)
  div.addEventListener("mouseover", eventHandler)
  // 触发事件
  div.dispatchEvent("click")
  div.dispatchEvent("mouseover")
}

export default pubSubPattern
