import ITEMS from './supplement'

window.addEventListener("load", () => {
    const singleItem = ITEMS.SHUTTLE_BOX
    switch (singleItem) {
      case ITEMS.OBSERVER_PUBSUB_PATTERN:
        import(/* webpackChunkName: "observer-pub-sub-pattern" */ "./src/design-pattern/observer-pub-sub-pattern")
        .then(({ default: { noPattern, observerPattern, pubSubNoChannel, pubSubPattern, pubSubUseCase } }) => {
          noPattern()
          observerPattern()
          pubSubNoChannel()
          pubSubPattern()
          pubSubUseCase()
        })
        break

      case ITEMS.NUT:
        import(/* webpackChunkName: "nut" */ "./src/sample/nut")
        .then(({ default: tuesday }) => {
          tuesday()
        })
        break

      case ITEMS.INPUT_TAG:
        import(/* webpackChunkName: "input-tag" */ "./src/dom/input-tag")
        .then(({ default: generateInput }) => {
          generateInput()
        })
        break

      case ITEMS.SHUTTLE_BOX:
        import(/* webpackChunkName: "shuttle-box" */ "./src/biz-scene/shuttle-box")
        .then(({ default: {
          initSourceData,
          expandTeam,
          addAllMembers,
          removeCandidateMember,
          displayExpandedTeams,
          displayCandidateMembers,
         } }) => {
          initSourceData(10000)

          addAllMembers('A0')
          removeCandidateMember()

          addAllMembers('Z25')
          expandTeam('A0')

          removeCandidateMember(false)
          expandTeam('Z25')

          displayExpandedTeams()
          displayCandidateMembers()
        })
        break

      default:
        import(/* webpackChunkName: "sample" */ "./src/sample/sample")
        .then(({ default: monday }) => {
          monday()
        })
        break
    }
  }
)

