import { createWrapperAndAppendToBody } from "helpers/DOM"
import { useState, useLayoutEffect } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  children: React.ReactNode
  wrapperId: string
}

export const Portal = ({
  children,
  wrapperId = "react-portal-wrapper",
}: PortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let created = false
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      created = true
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)

    return () => {
      // delete the programatically created element
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}
