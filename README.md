# React Calculator App

Простое одностраничное веб-приложение-калькулятор на React + TypeScript.

## Функционал
- Базовые арифметические операции (сложение, вычитание, умножение, деление)
- Классический набор кнопок (цифры, операции, точка, C, равно)
- Отображение текущего выражения и результата
- Адаптивный дизайн для десктопа и мобильных устройств

## Сборка и запуск в Docker
1. Клонируйте репозиторий:
   ```sh
   git clone <repo-url>
   cd <repo-dir>
   ```
2. Соберите Docker-образ:
   ```sh
   docker build -t react-calculator .
   ```
3. Запустите контейнер:
   ```sh
   docker run -d -p 80:80 react-calculator
   ```
4. Приложение будет доступно на [http://localhost:80](http://localhost:80)

[Issue](https://api.github.com/repos/andrewmalov/n8n/issues/11)
