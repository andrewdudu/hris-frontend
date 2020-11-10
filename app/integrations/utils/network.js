async function waitForNetworkIdle (page, timeout, maxInflightRequests = 0) {
  page.on('request', onRequestStarted)
  page.on('requestfinished', onRequestFinished)
  page.on('requestfailed', onRequestFinished)

  let inflight = 0
  let fulfill
  const promise = new Promise((resolve, reject) => {
    fulfill = resolve
  })
  let timeoutId = setTimeout(onTimeoutDone, timeout)
  return promise

  function onTimeoutDone () {
    page.removeListener('request', onRequestStarted)
    page.removeListener('requestfinished', onRequestFinished)
    page.removeListener('requestfailed', onRequestFinished)
    fulfill()
  }

  function onRequestStarted () {
    ++inflight
    if (inflight > maxInflightRequests) { clearTimeout(timeoutId) }
  }

  function onRequestFinished () {
    if (inflight === 0) { return }
    --inflight
    if (inflight === maxInflightRequests) { timeoutId = setTimeout(onTimeoutDone, timeout) }
  }
}

module.exports = {
  waitForNetworkIdle
}
