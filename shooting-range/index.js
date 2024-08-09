document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM 完全加载和解析")

  // 开始监听
  certCard1.observe(document.querySelector(".cert-card:nth-child(1)"))
})

const options = {
  root: document.querySelector(".cert-container"),
  rootMargin: "0px",
  threshold: [0, 0.25, 0.5, 0.75, 1],
}

const certCard1 = new IntersectionObserver((entries) => {
  // 如果 intersectionRatio 为 0，则目标在视野外，
  // 我们不需要做任何事情。
  if (entries[0].intersectionRatio <= 0) return

  doTransform(10)
  console.log("Loaded new items")
}, options)

const doTransform = (e) => {
  console.log(e)
}
