import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useToggle, useCounter } from '../src'

describe('headless hooks', () => {
  describe('useToggle', () => {
    it('should toggle value correctly', () => {
      const { result } = renderHook(() => useToggle(false))
      
      expect(result.current.value).toBe(false)
      
      act(() => {
        result.current.toggle()
      })
      
      expect(result.current.value).toBe(true)
    })
  })

  describe('useCounter', () => {
    it('should increment and decrement correctly', () => {
      const { result } = renderHook(() => useCounter(0))
      
      expect(result.current.count).toBe(0)
      
      act(() => {
        result.current.increment()
      })
      
      expect(result.current.count).toBe(1)
      
      act(() => {
        result.current.decrement()
      })
      
      expect(result.current.count).toBe(0)
    })
  })
})