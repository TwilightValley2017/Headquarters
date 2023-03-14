import observer from './observer'
import pubSubNoChannel from './pub-sub-no-channel'
import pubSubPattern from './pub-sub'
import pubSubUseCase from './pub-sub-use-case'

export default () => {
  observer.noPattern()
  observer.observerPattern()
  pubSubNoChannel()
  pubSubPattern()
  pubSubUseCase()
}
