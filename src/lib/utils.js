const defaultScriptUrl = '/builderjs/dist/builder.js'
const defaultStyleUrl = '/builderjs/dist/builder.css'
const callbacks = []
let loaded = false

const isScriptInjected = (scriptUrl) => {
  const scripts = document.querySelectorAll('script')
  let injected = false

  scripts.forEach((script) => {
    if (script.src.includes(scriptUrl)) {
      injected = true
    }
  })

  return injected
}

const isStyleInjected = (styleUrl) => {
  const styles = document.querySelectorAll('link')
  let injected = false

  styles.forEach((style) => {
    if (style.href.includes(styleUrl)) {
      injected = true
    }
  })

  return injected
}

const addCallback = (callback) => {
  callbacks.push(callback)
}

const runCallbacks = () => {
  if (loaded) {
    let callback

    while ((callback = callbacks.shift())) {
      callback()
    }
  }
}

const capitalizeFirstLetter = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return str
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}

const loadScript = (callback, scriptUrl = defaultScriptUrl) => {
  addCallback(callback)

  if (!isScriptInjected(scriptUrl)) {
    const embedScript = document.createElement('script')
    embedScript.setAttribute('src', scriptUrl)
    embedScript.onload = () => {
      loaded = true
      runCallbacks()
    }
    document.head.appendChild(embedScript)
  } else {
    runCallbacks()
  }
}

const loadStyle = (styleUrl = defaultStyleUrl) => {
  if (!isStyleInjected(styleUrl)) {
    const embedStyle = document.createElement('link')
    embedStyle.setAttribute('rel', 'stylesheet')
    embedStyle.setAttribute('href', styleUrl)
    document.head.appendChild(embedStyle)
  }
}

export { capitalizeFirstLetter, loadScript, loadStyle }
