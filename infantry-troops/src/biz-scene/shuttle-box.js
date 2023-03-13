const source = []
const candidateList = []
// 当前团队列表，渲染绑定
const expandedTeams = []
const STATUS = Object.freeze({
  UNSELECTED: '未选择',
  PARTIAL_SELECTED: '部分选择',
  SELECTED: '已选择',
})

// 通过单选添加的
const singleCheckedCandidateList = []
// 从候选区移除的
const removedCandidateList = []

let page = 1

/**
 * 1.候选区拉取全量成员
 * - 存在交互性能，loading + 前端分页
 * - 存在接口查询性能（待确认）
 * - 候选区拉取全量成员，全选可使用 checkbox，加入三态
 *
 * 2.成员存在于多个团队中时
 * - 如何定义
 * - 如何显示
 *
 * 3.源数据区，成员勾选状态更新
 * - 触发时机
 * --- 展开成员渲染时/点击加载更多时
 * --- 移除候选成员时
 *
 * 4.列表的渲染是固定遍历次数的，移除区作用是处理成员的勾选状态
 * - 候选区的成员，小于全部成员的 1/2，使用候选区作为参照，如 候选区.find()
 * - 移除区的成员，小于全部成员的 1/2，使用移除区作为参照，如 移除区.find()
 *
 * - 可加入前置判断，进行策略选择
 * --- 当前全部成员数量 === 候选区数量，遍历次数为 limit，状态勾选
 * --- 候选区数量 === 0，遍历次数为 limit，状态未勾选
 * --- 当前全部成员数量 > 候选区数量，遍历次数为 limit，根据候选区是否匹配来勾选
 * --- 总结，遍历当前 limit 数量的次数，与候选区匹配
 *
 * vuejs 列表数据，某一条记录内容更新。是否会引起列表的重新渲染？
 */

// 缓存数组，用于遍历比对状态，展开团队时更新缓存
// 候选区.filter(member => member.teamID === teamID)




/**
 * 初始化团队，模拟数据库表
 * @param {团队成员容量} teamCapacity
 */
const initSourceData = (teamCapacity) => {
  console.time('initSourceData')
  capitalLetters.forEach((prefix, index) =>{
    source.push({
      teamID: `${prefix}${index}`,
      members: initMembers(`${prefix}${index}`, teamCapacity)
    })
  })

  console.timeEnd('initSourceData')
  console.log({source})
}

/**
 * 生成 26 个英文字母，大写形式
 */
const capitalLetters = (() => {
  let str = []
  for(var i=65;i<91;i++){
   str.push(String.fromCharCode(i))
  }
  return str
})()

/**
 * 初始化团队成员，模拟数据库表
 * @param {前缀：团队ID} prefix
 * @param {成员数量} loop
 * @returns
 */
const initMembers = (prefix, loop) => {
  let arr = []
  for(let i=1; i<= loop; i++) {
    arr.push({
      identify: `${prefix}${i}`,
      checked: STATUS.UNSELECTED,
    })
  }

  return arr
}

/**
 * 处理当前团队数据，成员分页加载
 * @param {团队ID} teamID
 * @returns
 */
const expandTeam = (teamID) => {
  // let team = expandedTeams.find(team => team.teamID === teamID)
  // if (!team) {
  //   team = Object.assign({ status: STATUS.UNSELECTED }, findTeam(teamID))
  //   expandedTeams.push(team)
  // } else {
  //   refreshExpandedTeam(team)
  // }

  let team  = findTeam({ teamID, start: page })

  // TODO: 根据单选列表或者多选列表处理成员勾选状态

  return team
}

/**
 * 模拟接口返回某个团队，支持分页
 * @param {团队ID} teamID
 * @returns
 */
const findTeam = ({ teamID, limit = 10, start = 1 }) => {
  let team = source.find(team => team.teamID === teamID)
  if (team) {
    return team.members.slice(start - 1, start - 1 + limit)
  }

  return []
}

/**
 * 模拟全选添加团队成员
 * 需要去重
 * @param {团队ID} teamID
 */
const addAllMembers = (teamID) => {
  console.time(`addAllMembers-${teamID}`)
  const expandedTeam = expandTeam(teamID)
  if (!expandedTeam) {
    throw new Error(`expandedTeam is ${expandedTeam}`)
  }

  expandedTeam.status = STATUS.SELECTED
  const members = expandedTeam.members.map(member => {
    member.checked = STATUS.SELECTED
    return {
      identify: member.identify,
      teamID: expandedTeam.teamID,
    }
  })

  candidateList.push(...members)
  console.timeEnd(`addAllMembers-${teamID}`)
}

/**
 * 模拟移除候选成员
 * @param {是否删除第一个} isFromTop
 */
const removeCandidateMember = (isFromTop = true) => {
  if (isFromTop) {
    candidateList.shift()
  } else {
    candidateList.pop()
  }
}

/**
 * 进入团队列表时，根据候选成员刷新成员勾选状态
 * @param {当前展开团队} expandedTeam
 * @returns
 */
const refreshExpandedTeam = (expandedTeam) => {
  console.time(`refreshExpandedTeam-${expandedTeam.teamID}`)
  let partialCandidateMembers = candidateList.filter(member => member.teamID === expandedTeam.teamID)
  /**
   * 判断候选成员数量，
   * 如果 候选数量 === 当前团队成员数量，不做处理
   * 如果 候选数量 === 0， 置为 未选择
   * 如果 候选数量 < 当前团队成员数量，置为 部分选择
   *
   * 遍历当前团队成员，不在候选成员范围的，置为 未选择
   */

  if (partialCandidateMembers.length === expandedTeam.members.length) {
    return
  }

  if (partialCandidateMembers.length === 0) {
    expandedTeam.status = STATUS.UNSELECTED
  } else {
    expandedTeam.status = STATUS.PARTIAL_SELECTED
  }

  expandedTeam.members.forEach(member => {
    let candidateMember = partialCandidateMembers.find(candidateMember => candidateMember.identify === member.identify)
    if (!candidateMember) {
      member.checked = STATUS.UNSELECTED
    }
  })

  console.timeEnd(`refreshExpandedTeam-${expandedTeam.teamID}`)
}

const displayExpandedTeams = () => console.log({ expandedTeams })

const displayCandidateMembers = () => console.log({ candidateMembers: candidateList })

export default {
  initSourceData,
  expandTeam,
  addAllMembers,
  removeCandidateMember,
  displayExpandedTeams,
  displayCandidateMembers,
}

/**
 * 展开后的团队，如何缓存
 * - 避免重新请求数据
 * - 需要进行遍历对勾选状态更新，这里是性能损耗的点，有分页的情况，性能可控
 * --- 展开时
 * --- 分页加载时
 *
 * 团队全部成员查询接口，性能损耗点
 *
 * 候选成员列表渲染时性能损耗重点
 * - 虚拟列表
 *
 *
 */
