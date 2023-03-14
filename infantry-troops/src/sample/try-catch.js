const mon = async () => {
  let result
  try {
    result = await handler()
  } catch(err) {
    result = err
  }
  return result
}

const handler = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('successfully')
    reject('failed')
  }, 500)
})

export default () => {
  mon()
  .then(res => console.log(res))
  .catch(error => console.log(error))
}
