import { useRef, useEffect, useState } from "react"

type Timeout = ReturnType<typeof setTimeout>

const useDebouncedValue = <T,>(value: T, delay: number) => {
  const timeout = useRef<Timeout>()

  const [state, setState] = useState<T>(value)

  useEffect(() => {
    // cancel delayed setState
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    // make a delayed setState
    timeout.current = setTimeout(() => {
      setState(value)
    }, delay)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [value, delay])

  return state
}

export default useDebouncedValue
