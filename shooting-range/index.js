document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded")

  // 开始监听
  card2.observe(document.querySelector(".card:nth-child(2)"))
  card3.observe(document.querySelector(".card:nth-child(3)"))
  card4.observe(document.querySelector(".card:nth-child(4)"))
})

// const threshold = [0, 0.25, 0.35, 0.65, 0.75, 0.85, 0.95, 1]
const threshold = [0, 0.3, 0.55, 0.8, 1]
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

  insectionHandler2(entries[0])
}, options)

const card3 = new IntersectionObserver((entries) => {
  // 如果 intersectionRatio 为 0，则目标在 viewport 外，我们不需要做任何事情。
  if (entries[0].intersectionRatio <= 0) {
    return
  }

  insectionHandler3(entries[0])
}, options)

const card4 = new IntersectionObserver((entries) => {
  // 如果 intersectionRatio 为 0，则目标在 viewport 外，我们不需要做任何事情。
  if (entries[0].intersectionRatio <= 0) {
    return
  }

  insectionHandler4(entries[0])
}, options)

/**
 * const ratio = e.intersectionRatio
 * const { top, bottom } = e.boundingClientRect
 *
 * 动作1：从 viewport 底部滚入，out-in
 * 开始载入 viewport：if (ratio === 0) top > 0 && bottom > 0
 * 载入过程：if (ratio > 0 && ratio < 1) top > 0 && bottom > 0
 * 完成载入：if (ratio === 1) top > 0 && bottom > 0
 * 变形效果：缩放
 * 判断条件：ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio > ratio`
 *
 * 动作2：从 viewport 顶部滚出，in-out
 * 卸载过程：if (ratio > 0 && ratio < 1) top < 0 && bottom > 0
 * 完成卸载：if (ratio === 0) top < 0 && bottom < 0
 * 无变形！
 * 判断条件：top < 0 && bottom > 0
 *
 * 动作3：从 viewport 顶部滚入, out-in
 * 开始载入 viewport：if (ratio === 0) top < 0 && bottom > 0
 * 载入过程：if (ratio > 0 && ratio < 1) top < 0 && bottom > 0
 * 完成载入：if (ratio === 1) top > 0 && bottom > 0
 * 无变形！
 * 判断条件：top < 0 && bottom > 0
 *
 * 动作4：从 viewport 底部滚出，in-out
 * 卸载过程：if (ratio > 0 && ratio < 1) top > 0 && bottom > 0
 * 完成卸载：if (ratio === 0) top > 0 && bottom > 0
 * 恢复变形：ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio < ratio`
 * 清除样式：ratio === 0 && top > 0 && bottom > 0
 */

let tempRatio = -1
const scaleBasicStyle1 = ['scale-origin-center-top', 'scale-transition']
,scaleBasicStyle2 = ['scale-origin-center', 'scale-transition']
const scale90 = 'scale-90'
,scale80 = 'scale-80'
,scale70 = 'scale-70'

// const insectionHandler = (e) => {
//   // 获取操作元素
//   const div = document.querySelector('')
//   const title = document.querySelector('')

//   // 获取元素交叉监听数据
//   const ratio = e.intersectionRatio
//   const { top, bottom } = e.boundingClientRect

//   // 样式队列与样式栈
//   let styleQueue = ['', '', '']
//   let divStyleStack = []
//   ,titleSytleStack = []

//   /**
//    * 动作1：从 viewport 底部滚入，out-in
//    * 变换：上一卡片缩小
//    */
//   if (ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio > tempRatio) {
//     if (ratio > 0.2 && ratio <= 0.4) {
//       // scale 0.9
//     }

//     if (ratio > 0.4 && ratio <= 0.7) {
//       // scale 0.8
//     }

//     if (ratio > 0.7 && ratio <= 0.9) {
//       // scale 0.7
//     }
//   }

//   /**
//    * 动作4: 从 viewport 底部滚出，in-out
//    * 变换：上一卡片恢复
//    */
//   if (ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio < tempRatio) {
//     if (ratio > 0.7 && ratio <= 0.9) {
//       // 移除 scale 0.7
//     }

//     if (ratio > 0.4 && ratio <= 0.7) {
//       // 移除 scale 0.8
//     }

//     if (ratio > 0.2 && ratio <= 0.4) {
//       // 移除 scale 0.9
//     }
//   }

//   /**
//    * 动作4: 从 viewport 底部滚出，in-out
//    * 变换：清除样式
//    */
//   if (ratio === 0 && top > 0 && bottom > 0) {
//     div.classList.remove(divStyleStack)
//     title.classList.remove(titleSytleStack)
//   }

//   // 存储
//   tempRatio = ratio

// }

const insectionHandler2 = (e) => {
  // 获取操作元素
  const div = document.querySelector('.card:nth-child(1)')
  const title = document.querySelector('.card:nth-child(1) h1')

  // 获取元素交叉监听数据
  const ratio = e.intersectionRatio
  const { top, bottom } = e.boundingClientRect

  /**
   * 动作1：从 viewport 底部滚入，out-in
   * 变换：上一卡片缩小
   */
  if (ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio > tempRatio) {
    if (!div.classList.contains(scaleBasicStyle1)) {
      div.classList.add(scaleBasicStyle1)
    }

    if (!title.classList.contains(scaleBasicStyle2)) {
      title.classList.add(scaleBasicStyle2)
    }

    if (ratio > 0.2 && ratio <= 0.4) {
      // scale 0.9
      div.classList.add(scale90)
    }

    if (ratio > 0.4 && ratio <= 0.7) {
      // scale 0.8
      div.classList.add(scale80)
    }

    if (ratio > 0.7 && ratio <= 0.9) {
      // scale 0.7
      div.classList.add(scale70)
      title.classList.add(scale70)
    }
  }

  /**
   * 动作4: 从 viewport 底部滚出，in-out
   * 变换：上一卡片恢复
   */
  if (ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio < tempRatio) {
    if (ratio > 0.7 && ratio <= 0.9) {
      // 移除 scale 0.7
      div.classList.remove(scale70)
      title.classList.remove(scale70)
    }

    if (ratio > 0.4 && ratio <= 0.7) {
      // 移除 scale 0.8
      div.classList.remove(scale80)
    }

    if (ratio > 0.2 && ratio <= 0.4) {
      // 移除 scale 0.9
      div.classList.remove(scale90)
    }
  }

  /**
   * 动作4: 从 viewport 底部滚出，in-out
   * 变换：清除样式
   */
  if (ratio === 0 && top > 0 && bottom > 0) {
    div.classList.remove(scale70, scale80, scale90, scaleBasicStyle1)
    title.classList.remove(scale70, scaleBasicStyle2)
  }

  // 存储
  tempRatio = ratio
}

const insectionHandler3 = (e) => {
  // 获取操作元素
  const div = document.querySelector('.card:nth-child(2)')
  const title = document.querySelector('.card:nth-child(2) h1')

  // 获取元素交叉监听数据
  const ratio = e.intersectionRatio
  const { top, bottom } = e.boundingClientRect

  /**
   * 动作1：从 viewport 底部滚入，out-in
   * 变换：上一卡片缩小
   */
  if (ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio > tempRatio) {
    if (!div.classList.contains(scaleBasicStyle1)) {
      div.classList.add(scaleBasicStyle1)
    }

    if (!title.classList.contains(scaleBasicStyle2)) {
      title.classList.add(scaleBasicStyle2)
    }

    if (ratio > 0.2 && ratio <= 0.4) {
      // scale 0.9
      div.classList.add(scale90)
    }

    if (ratio > 0.4 && ratio <= 0.7) {
      // scale 0.8
      div.classList.add(scale80)
      title.classList.add(scale80)
    }
  }

  /**
   * 动作4: 从 viewport 底部滚出，in-out
   * 变换：上一卡片恢复
   */
  if (ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio < tempRatio) {
    if (ratio > 0.4 && ratio <= 0.7) {
      // 移除 scale 0.8
      div.classList.remove(scale80)
      title.classList.remove(scale80)
    }

    if (ratio > 0.2 && ratio <= 0.4) {
      // 移除 scale 0.9
      div.classList.remove(scale90)
    }
  }

  /**
   * 动作4: 从 viewport 底部滚出，in-out
   * 变换：清除样式
   */
  if (ratio === 0 && top > 0 && bottom > 0) {
    div.classList.remove(scale80, scale90, scaleBasicStyle1)
    title.classList.remove(scale80, scaleBasicStyle2)
  }

  // 存储
  tempRatio = ratio
}

const insectionHandler4 = (e) => {
  // 获取操作元素
  const div = document.querySelector('.card:nth-child(3)')
  const title = document.querySelector('.card:nth-child(3) h1')

  // 获取元素交叉监听数据
  const ratio = e.intersectionRatio
  const { top, bottom } = e.boundingClientRect

  /**
   * 动作1：从 viewport 底部滚入，out-in
   * 变换：上一卡片缩小
   */
  if (ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio > tempRatio) {
    if (!div.classList.contains(scaleBasicStyle1)) {
      div.classList.add(scaleBasicStyle1)
    }

    if (!title.classList.contains(scaleBasicStyle2)) {
      title.classList.add(scaleBasicStyle2)
    }

    if (ratio > 0.2 && ratio <= 0.7) {
      // scale 0.9
      div.classList.add(scale90)
      title.classList.add(scale90)
    }
  }

  /**
   * 动作4: 从 viewport 底部滚出，in-out
   * 变换：上一卡片恢复
   */
  if (ratio > 0 && ratio < 1 && top > 0 && bottom > 0 && ratio < tempRatio) {
    if (ratio > 0.2 && ratio <= 0.7) {
      // 移除 scale 0.9
      div.classList.remove(scale90)
      title.classList.remove(scale90)
    }
  }

  /**
   * 动作4: 从 viewport 底部滚出，in-out
   * 变换：清除样式
   */
  if (ratio === 0 && top > 0 && bottom > 0) {
    div.classList.remove(scale90, scaleBasicStyle1)
    title.classList.remove(scale90, scaleBasicStyle2)
  }

  // 存储
  tempRatio = ratio
}
