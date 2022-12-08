/**
 * 发布-订阅模式
 */
function Publisher() {
  // 职位信息
  this.vacancyList = []
  // 更新职位信息
  this.setVacancy = function (value) {
    this.vacancyList.push(...value)
  }
  // 订阅中心，包含了所有求职者的订阅
  this.subscriptionCenter = []
  // 注册用户订阅到订阅中心
  this.register = function (subscription) {
    this.subscriptionCenter.push(subscription)
  }
  // 发布订阅
  this.publish = function () {
    this.subscriptionCenter.forEach((subscription) => {
      this.vacancyList.forEach((vacancy) => {
        subscription(vacancy)
      })
    })
  }
}

function Subscriber(name) {
  this.name = name
  // 订阅
  this.subscribe = function (notification) {
    console.log(`${this.name} 收到了订阅消息：${notification.title}`)
  }
}

const pubSubPattern = () => {
  var company = new Publisher()
  var tom = new Subscriber("Tom")
  var jerry = new Subscriber("Jerry")

  company.register(tom.subscribe.bind(tom))
  company.register(jerry.subscribe.bind(jerry))

  company.setVacancy([
    { title: "software engineer" },
    { title: "quality assurance" },
  ])
  company.publish()
}

export default pubSubPattern
