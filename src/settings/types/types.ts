export interface ISettingCreationAttributes {
  id: number,
  firmName: string, // название фирмы
  currencyId: number, // id валюты учета
  storeId: number, // id склада по умолчанию
  employeeId?: number, // id сотрудника по умолчанию
  telegramKey?: string, // ключ телеграм-бота
}

export interface ISettings {
  id: number,
  firmName: string,
  currencyId: number,
  storeId: number,
  employeeId?: number,
  telegramKey?: string,
}
