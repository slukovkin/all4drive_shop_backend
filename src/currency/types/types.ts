export interface ICurrency {
  id: number
  code: string
  name: string
  rate: number
}

export interface ICurrencyCreationAttributes {
  id?: number
  code: CurrencyCode
  name: string
  rate: number
}

export enum CurrencyCode {
  EUR = 'EUR',
  USD = 'USD',
  UAH = 'UAH'
}