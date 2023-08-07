'use client'

import NProgress from 'nprogress'
import { memo, useEffect, useRef } from 'react'

const ProgressBar = ({ height = '4px', color = '#0A2FFF' }) => {
  const styles = (
    <style>
      {`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: ${color};
          position: fixed;
          z-index: 99999;
          top: 0;
          left: 0;
          width: 100%;
          height: ${height};
        }
        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
          opacity: 1.0;
          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }
    `}
    </style>
  )

  const lastClickedRouteRef = useRef(null)

  const changeLanguageInUrl = (url) => {
    const parts = url.split('/')

    if (parts.length >= 4) {
      parts.splice(3, 1)
      return parts.join('/')
    }

    return url
  }

  useEffect(() => {
    NProgress.configure({ showSpinner: false })

    // refesh page
    lastClickedRouteRef.current = changeLanguageInUrl(window.location.href)

    const handleAnchorClick = (event) => {
      const targetUrl = event.currentTarget.href
      if (targetUrl !== lastClickedRouteRef.current) {
        NProgress.start()
      }
      lastClickedRouteRef.current = targetUrl
    }

    const handleMutation = () => {
      const anchorElements = document.querySelectorAll('a[href]')
      anchorElements.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick))
    }

    const mutationObserver = new MutationObserver(handleMutation)
    mutationObserver.observe(document, { childList: true, subtree: true })

    // eslint-disable-next-line no-undef
    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray) => {
        NProgress.done()
        return target.apply(thisArg, argArray)
      },
    })
  })

  return styles
}

export default memo(ProgressBar)
