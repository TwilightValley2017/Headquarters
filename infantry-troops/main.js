// import func from './src/sample/sample'
import ObserverPubSubPattern from "./src/design-pattern/observer-pub-sub-pattern"

import(/* webpackChunkName: "sample" */ "./src/sample/sample").then((sample) => {
  sample()
})

import(/* webpackChunkName: "nut" */ "./src/sample/nut").then((nut) => {
  nut()
})

window.addEventListener("load", () =>
  console.log("Infantry troops coming soon...")
)
window.addEventListener("load", ObserverPubSubPattern.noPattern)
window.addEventListener("load", ObserverPubSubPattern.observerPattern)
window.addEventListener("load", ObserverPubSubPattern.pubSubNoChannel)
window.addEventListener("load", ObserverPubSubPattern.pubSubPattern)
window.addEventListener("load", ObserverPubSubPattern.pubSubUseCase)
