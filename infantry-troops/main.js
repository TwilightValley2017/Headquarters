import ITEMS from './supplement'

window.addEventListener("load", () => {
    const singleItem = ITEMS.INPUT_TAG
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


      default:
        import(/* webpackChunkName: "sample" */ "./src/sample/sample")
        .then(({ default: monday }) => {
          monday()
        })
        break
    }
  }
)

