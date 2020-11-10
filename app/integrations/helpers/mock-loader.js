const mocks = require('../../src/api/mock').default;

let groupedMocks = null

function _initializeMocks () {
  groupedMocks = new Map()
  mocks.forEach(item => {
    const key = item.url
    const entry = groupedMocks.get[key] || {
      url: key,
      list: []
    }

    const values = item.param_values || {}
    item.param_values_str = JSON.stringify(
      values,
      Object.keys(values).sort()
    )
    entry.list.push(
      item
    )
    groupedMocks.set(key, entry)
  })
}

function _getMocks () {
  if (!groupedMocks) {
    _initializeMocks()
  }
  return groupedMocks
}

async function mockApi (context) {
  // load mock response
  const mocks = _getMocks()
  await context.route('**', async (route, request) => {
    // if it's a page view, continue routing
    if (request.isNavigationRequest()) {
      route.continue()
      return
    }
    const url = request.url()
    const headers = request.headers()
    const urlObj = new URL(headers['referer'])
    const origin = urlObj.origin

    // construct key with referer as baseurl
    // we remove the baseurl since our mock url has no baseurl
    const key = ~url.indexOf(origin) ? url.replace(origin, '') : url

    const entry = mocks.get(key)

    // if the key is not in the map, continue routing
    if (!entry) {
      route.continue()
      return
    }

    const method = request.method()
    const body = request.postData()

    const bodyObj = JSON.parse(body || '{}')
    const bodyStr = JSON.stringify(bodyObj, Object.keys(bodyObj).sort())

    // look for a match of an entry in the map
    const found = entry.list.find(i => {
      // if the method is not a match, skip
      if (i.method !== method) {
        return
      }

      // if method is GET, then no "body" to consider
      if (method === 'GET') {
        return true
      }

      // if the mock has no body and current request has no body, then a match
      if (!i.param_values && !body) {
        return true
      }

      // compare stringified value for request body
      return i.param_values_str === bodyStr
    })

    if (!found) {
      route.abort()
      return
    }

    route.fulfill({
      status: found.status || 200,
      contentType: 'application/json',
      body: JSON.stringify(found.response)
    })
  })
}

module.exports = {
  mockApi
}
