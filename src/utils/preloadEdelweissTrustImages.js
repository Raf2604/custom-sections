import { TRUST_TAB_IMAGE_URLS } from '../data/edelweissTrustTabs.js'

let preloadPromise = null

function loadAndDecodeImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode().then(resolve).catch(resolve)
        return
      }
      resolve()
    }
    img.onerror = () => resolve()
    img.src = src
  })
}

export function preloadEdelweissTrustImages() {
  if (!preloadPromise) {
    preloadPromise = Promise.all(TRUST_TAB_IMAGE_URLS.map(loadAndDecodeImage))
  }
  return preloadPromise
}

/** Starts fetching/decoding trust tab images as soon as the Edelweiss page module loads. */
export const trustImagesPreload = preloadEdelweissTrustImages()
