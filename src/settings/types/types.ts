export interface ISettingCreationAttributes {
  id: number,
  firmName: string, // название фирмы
  currencyId: number, // id валюты учета
  storeId: number, // id склада по умолчанию
  priceTypeOne?: number | null,
  priceTypeTwo?: number | null,
  priceTypeThree?: number | null,
  markup?: number | null,
  employeeId?: number | null, // id сотрудника по умолчанию
  telegramBotId?: string
  telegramKey?: string, // ключ телеграм-бота
}

export interface ISettings {
  id: number,
  firmName: string,
  currencyId: number,
  storeId: number,
  priceTypeOne: number | null,
  priceTypeTwo: number | null,
  priceTypeThree: number | null,
  markup: number | null,
  employeeId?: number | null,
  telegramBotId?: string | null,
  telegramKey?: string | null,
  store: {
    id: 1,
    title: 'Основной',
    description: 'Главный склад'
  },
  currency: {
    id: 2,
    code: 'EUR',
    name: 'Евро',
    rate: 46.05
  }
}
