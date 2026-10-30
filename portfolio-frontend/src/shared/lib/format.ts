const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const date = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' })

export function formatCurrency(value: number): string {
  return currency.format(value)
}

/** Recebe uma data ISO (ex.: "2026-03-15") e devolve "15/03/2026". */
export function formatDate(iso: string): string {
  return date.format(new Date(iso))
}
