document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded")

  // 开始监听
  card2.observe(document.querySelector(".card:nth-child(2)"))
  card3.observe(document.querySelector(".card:nth-child(3)"))
})

const threshold = [0, 0.25, 0.35, 0.65, 0.75, 0.85, 0.95, 1]
// const threshold = [0, 0.5, 1]
const options = {
  root: document.querySelector(".card-container"),
  rootMargin: "0px",
  threshold: threshold,
}

const card2 = new IntersectionObserver((entries) => {
  // 如果 intersectionRatio 为 0，则目标在 viewport 外，我们不需要做任何事情。
  if (entries[0].intersectionRatio < 0) {
    return
  }

  cardIntersectionHandler2(entries[0])
}, options)

const card3 = new IntersectionObserver((entries) => {
  // 如果 intersectionRatio 为 0，则目标在 viewport 外，我们不需要做任何事情。
  if (entries[0].intersectionRatio <= 0) {
    return
  }

  cardIntersectionHandler3(entries[0])
}, options)

const cardIntersectionHandler2 = (e) => {
  const div = document.querySelector(".card:nth-child(1)")
  ,h1 = document.querySelector(".card:nth-child(1) h1")
  ,scale90 = ['scale-90', 'scale-center-top', 'scale-transition']
  ,scale80 = ['scale-80', 'scale-center-top', 'scale-transition']
  ,scale80h1 = ['scale-80', 'scale-center', 'scale-transition']

  // out-in
  if (e.intersectionRatio >= 0.3 && e.intersectionRatio < 0.4) {
    div.classList.add(...scale90)
  }

  if (e.intersectionRatio >= 0.7 && e.intersectionRatio < 0.8) {
    div.classList.add(...scale80)
  }

  if (e.intersectionRatio > 0.9 && e.intersectionRatio < 1) {
    h1.classList.add(...scale80h1)
  }

  // in-out
  if (e.intersectionRatio >= 0.2 && e.intersectionRatio < 0.3) {
    if (div.classList.contains('scale-90')) {
      div.classList.remove(...scale90)
    }
  }

  if (e.intersectionRatio >= 0.6 && e.intersectionRatio < 0.7) {
    if (div.classList.contains('scale-80')) {
      div.classList.remove(...scale80)
    }
  }

  if (e.intersectionRatio >= 0.8 && e.intersectionRatio < 0.9) {
    if (h1.classList.contains('scale-80')) {
      h1.classList.remove(...scale80h1)
    }
  }

  if (e.intersectionRatio <= 0.1) {
    if (e.boundingClientRect.bottom > 0) {
      h1.classList.remove(...scale80h1)
      div.classList.remove(...scale80)
      div.classList.remove(...scale90)
    }
  }

  console.warn({ e, inter: e.intersectionRect, ratio: e.intersectionRatio })
}

const cardIntersectionHandler3 = (e) => {
  const div = document.querySelector(".card:nth-child(2)")
  ,h1 = document.querySelector(".card:nth-child(2) h1")
  ,scale90 = ['scale-90', 'scale-center-top', 'scale-transition']
  // ,scale80 = ['scale-80', 'scale-center-top', 'scale-transition']
  ,scale90h1 = ['scale-90', 'scale-center', 'scale-transition']

  // out-in
  if (e.intersectionRatio >= 0.3 && e.intersectionRatio < 0.4) {
    div.classList.add(...scale90)
  }

  if (e.intersectionRatio > 0.9 && e.intersectionRatio < 1) {
    h1.classList.add(...scale90h1)
  }

  // in-out
  if (e.intersectionRatio >= 0.2 && e.intersectionRatio < 0.3) {
    if (div.classList.contains('scale-90')) {
      div.classList.remove(...scale90)
    }
  }

  if (e.intersectionRatio >= 0.8 && e.intersectionRatio < 0.9) {
    if (h1.classList.contains('scale-90')) {
      h1.classList.remove(...scale90h1)
    }
  }

  if (e.intersectionRatio <= 0.1) {
    if (e.boundingClientRect.bottom > 0) {
      div.classList.remove(...scale90)
      h1.classList.remove(...scale90h1)
    }
  }
}
