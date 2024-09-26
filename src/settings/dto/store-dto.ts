export interface StoreDto {
  firmName: string, // название фирмы
  currencyId: number, // id валюты учета
  storeId: number, // id склада по умолчанию
  priceTypeOne: number | null,
  priceTypeTwo: number | null,
  priceTypeThree: number | null,
  markup: number | null,
  employeeId: number | null, // id сотрудника по умолчанию
  telegramBotName: string,
  telegramKey: string, // ключ телеграм-бота
}