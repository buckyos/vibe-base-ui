import { describe, it, expect } from 'vitest'
import { clsx, cn } from '../src/classnames'

describe('classnames utilities', () => {
  it('should combine class names correctly', () => {
    expect(clsx('a', 'b')).toBe('a b')
    expect(clsx('a', null, 'b')).toBe('a b')
    expect(clsx('a', { b: true, c: false })).toBe('a b')
  })

  it('should work with cn alias', () => {
    expect(cn('a', 'b')).toBe('a b')
  })
})