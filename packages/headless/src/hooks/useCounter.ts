import { useState, useCallback } from 'react'

export interface UseCounterReturn {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setCount: (value: number) => void
}

export interface UseCounterOptions {
  min?: number
  max?: number
  step?: number
}

export function useCounter(
  initialValue = 0,
  options: UseCounterOptions = {}
): UseCounterReturn {
  const { min, max, step = 1 } = options
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => {
    setCount(prev => {
      const next = prev + step
      return max !== undefined ? Math.min(next, max) : next
    })
  }, [step, max])

  const decrement = useCallback(() => {
    setCount(prev => {
      const next = prev - step
      return min !== undefined ? Math.max(next, min) : next
    })
  }, [step, min])

  const reset = useCallback(() => {
    setCount(initialValue)
  }, [initialValue])

  const setValue = useCallback((value: number) => {
    let clampedValue = value
    if (min !== undefined) clampedValue = Math.max(clampedValue, min)
    if (max !== undefined) clampedValue = Math.min(clampedValue, max)
    setCount(clampedValue)
  }, [min, max])

  return {
    count,
    increment,
    decrement,
    reset,
    setCount: setValue
  }
}