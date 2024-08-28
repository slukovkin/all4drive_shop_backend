export interface StoreDto {
  id: number,
  firmName: string, // название фирмы
  currencyId: number, // id валюты учета
  storeId: number, // id склада по умолчанию
  employeeId: number, // id сотрудника по умолчанию
  telegramKey: string, // ключ телеграм-бота
}