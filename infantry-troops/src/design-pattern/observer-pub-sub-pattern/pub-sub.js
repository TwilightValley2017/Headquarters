/**
 * 发布-订阅模式
 * 增加频道
 */
function Publisher() {
  // 职位信息
  this.vacancyList = []
  // 更新职位信息
  this.setVacancy = function (value) {
    this.vacancyList.push(...value)
  }
  // 订阅中心，包含了所有求职者的订阅【改造】
  this.subscriptionCenter = {}
  // 注册用户订阅到订阅中心，增加频道【改造】
  this.register = function (channel, subscription) {
    if (!this.subscriptionCenter[channel]) {
      this.subscriptionCenter[channel] = []
    }
    this.subscriptionCenter[channel].push(subscription)
  }
  // 发布订阅，根据订阅频道进行发布【改造】
  this.publish = function () {
    this.vacancyList.forEach((vacancy) => {
      if (this.subscriptionCenter[vacancy.title]) {
        this.subscriptionCenter[vacancy.title].forEach((subscription) => {
          subscription(vacancy)
        })
      }
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

  // 订阅时传入频道【改造】
  company.register("software engineer", tom.subscribe.bind(tom))
  company.register("quality assurance", jerry.subscribe.bind(jerry))
  company.register("software engineer", jerry.subscribe.bind(jerry))

  company.setVacancy([
    { title: "software engineer" },
    { title: "quality assurance" },
  ])
  company.publish()
}

export default pubSubPattern
