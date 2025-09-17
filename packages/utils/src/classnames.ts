type ClassValue = string | number | boolean | undefined | null | ClassValue[] | { [key: string]: any }

export function clsx(...classes: ClassValue[]): string {
  const result: string[] = []
  
  for (const cls of classes) {
    if (!cls) continue
    
    if (typeof cls === 'string' || typeof cls === 'number') {
      result.push(String(cls))
    } else if (Array.isArray(cls)) {
      const nested = clsx(...cls)
      if (nested) result.push(nested)
    } else if (typeof cls === 'object') {
      for (const [key, value] of Object.entries(cls)) {
        if (value) result.push(key)
      }
    }
  }
  
  return result.join(' ')
}

// Alias for clsx
export const cn = clsx