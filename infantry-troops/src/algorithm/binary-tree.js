/**
 * TODO: 二叉树遍历算法
 */

const cuiwei = {
  children: [
    { children: undefined },
    { children: undefined },
  ]
}

const xianning = {
  children: [
    { children: cuiwei.children },
    { children: undefined },
  ]
}

const branches = []

const traversal = function traversal(target, payload) {
  if (!target.children) {
    payload.push(Object.assign({}, {children: target.children}))
    return
  }

  target.children.forEach(child => {
    const temp = { children: []}
    payload.push(temp)
    traversal(child, temp.children)
  })
}

export default () => {
  console.log('tree branch')
  traversal(xianning, branches)
  window.branches = branches
}
