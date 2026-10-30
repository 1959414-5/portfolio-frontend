import { describe, expect, it } from 'vitest'
import { formatCurrency, formatDate } from './format'

describe('formatCurrency', () => {
  it('formata valores em reais', () => {
    // Intl usa espaço não separável entre o símbolo e o número
    expect(formatCurrency(1234.5).replace(/\s/g, ' ')).toBe('R$ 1.234,50')
  })
})

describe('formatDate', () => {
  it('formata data ISO no padrão brasileiro', () => {
    expect(formatDate('2026-03-15')).toBe('15/03/2026')
  })
})
