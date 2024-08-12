document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM 完全加载和解析")

  // 开始监听
  // certCard1.observe(document.querySelector(".cert-card:nth-child(1)"))
  certCard2.observe(document.querySelector(".cert-card:nth-child(2)"))
  certCard3.observe(document.querySelector(".cert-card:nth-child(3)"))
})

const options = {
  root: document.querySelector(".cert-container"),
  rootMargin: "0px",
  threshold: [0, 0.25, 0.5, 0.75, 1],
}

// const certCard1 = new IntersectionObserver((entries) => {
//   // 如果 intersectionRatio 为 0，则目标在视野外，
//   // 我们不需要做任何事情。
//   if (entries[0].intersectionRatio <= 0) {
//     return
//   }

//   certCardTransformHandler1(entries[0])
// }, options)

const certCard2 = new IntersectionObserver((entries) => {
  // 如果 intersectionRatio 为 0，则目标在 viewport 外，我们不需要做任何事情。
  if (entries[0].intersectionRatio <= 0) {
    return
  }

  certCardIntersectionHandler2(entries[0])
}, options)

const certCard3 = new IntersectionObserver((entries) => {
  // 如果 intersectionRatio 为 0，则目标在 viewport 外，我们不需要做任何事情。
  if (entries[0].intersectionRatio <= 0) {
    return
  }

  certCardIntersectionHandler3(entries[0])
}, options)

// const certCardTransformHandler1 = (e) => {
//   if (e.intersectionRatio > 0.99) {
//     e.target.classList.add('####')
//     console.warn({ e, inter: e.intersectionRect, ratio: e.intersectionRatio })
//   }
// }

const certCardIntersectionHandler2 = (e) => {
  const div = document.querySelector(".cert-card:nth-child(1)")
  const h1 = document.querySelector(".cert-card:nth-child(1) h1")

  if (e.intersectionRatio >= 0.2 && e.intersectionRatio <= 0.3) {
    div.classList.add('scale-90')
  }

  if (e.intersectionRatio >= 0.7 && e.intersectionRatio <= 0.8) {
    div.classList.add('scale-80')
  }

  if (e.intersectionRatio >= 0.95) {
    h1.classList.add('scale-80')
  }

  console.warn({ ele: div, e, inter: e.intersectionRect, ratio: e.intersectionRatio })
}

const certCardIntersectionHandler3 = (e) => {
  const div = document.querySelector(".cert-card:nth-child(2)")
  const h1 = document.querySelector(".cert-card:nth-child(2) h1")

  if (e.intersectionRatio >= 0.2 && e.intersectionRatio <= 0.3) {
    div.classList.add('scale-90')
  }

  if (e.intersectionRatio >= 0.95) {
    h1.classList.add('scale-90')
  }

  console.warn({ ele: div, e, inter: e.intersectionRect, ratio: e.intersectionRatio })
}
