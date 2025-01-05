import React from 'react'

// from https://stackoverflow.com/questions/75556418/how-to-use-debounce-hooks-in-react#answer-78529642
export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const callbackRef = React.useRef(callback)

  React.useLayoutEffect(() => {
    callbackRef.current = callback
  })

  let timer: NodeJS.Timeout

  const naiveDebounce = (
    func: (...args: any[]) => void,
    delayMs: number,
    ...args: any[]
  ) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, delayMs)
  }

  return React.useMemo(
    () =>
      (...args: any) =>
        naiveDebounce(callbackRef.current, delay, ...args),
    [delay]
  )
}
