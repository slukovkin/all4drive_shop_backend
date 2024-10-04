# All4Drive Shop Backend

## Описание
All4Drive — это бэкенд для онлайн-магазина, предлагающего запчасти и аксессуары для автомобилей. Он обеспечивает работу с базой данных, обработку запросов и взаимодействие с фронтендом.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/slukovkin/all4drive_shop_backend.git
   ```

2. Перейдите в каталог проекта:
   ```bash
   cd all4drive_shop_backend
   ```

3. Установите зависимости:
   ```bash
   npm install
   ```

## Запуск

Чтобы запустить проект, выполните команду:
```bash
npm run start
```

### Режимы запуска:
- **Разработка**: 
  ```bash
  npm run start:dev
  ```
- **Продакшн**: 
  ```bash
  npm run start:prod
  ```

### Использование Docker
1. Установите Docker на вашем сервере.
2. Отредактируйте файл `docker-compose.yml`, изменив параметры:
   ```yaml
   ports:
     - '5000:5000'
   MYSQL_DATABASE: 'your_database_name'
   MYSQL_USER: 'your_database_user'
   MYSQL_PASSWORD: 'your_database_password'
   MYSQL_ROOT_PASSWORD: 'your_root_password'
   ```
3. Соберите и запустите контейнеры:
   ```bash
   docker-compose build
   docker-compose up
   ```

## Вклад

Если вы хотите внести свой вклад, пожалуйста, создайте форк и отправьте пулл-реквест.

## Лицензия

Nest — это проект с лицензией MIT.
