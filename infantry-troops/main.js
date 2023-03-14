import ITEMS from './supplement'

window.addEventListener("load", () => {
    const path = ITEMS.TRY_CATCH

    import(/* webpackChunkName: "chunk" */ `./src/${path}`)
    .then(({ default: run }) => run())
  }
)

