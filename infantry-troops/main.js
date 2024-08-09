import ITEMS from './supplement'

window.addEventListener("load", () => {
    console.log("infantry troops ready!")

    const path = ITEMS.TRY_CATCH

    import(/* webpackChunkName: "chunk" */ `./src/${path}`)
    .then(({ default: run }) => run())
  }
)

