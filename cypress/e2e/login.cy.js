describe('Домашняя работа, автотесты на автортзацию', function () {
    
    it('Верный логин и пароль', function () { // Напиши проверку на позитивный кейс авторизации:
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // а) Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // б) Ввести правильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click(); // г) Проверить нужный текст и наличие кнопки крестик
         
         })
    it('автотест на проверку логики восстановления пароля', function () { // Напиши проверку на позитивный кейс авторизации:
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); // а) Нажать «Забыли пароль»
        cy.get('#mailForgot').type('german@dolnikov.ru'); // б) Ввести любой имейл
        cy.get('#restoreEmailButton').click(); // кликнули кнопку отправить
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // в) Проверка, что получили нужный текст и есть кнопка крестика
        cy.get('#exitMessageButton > .exitIcon').click();
         })
    it('Верный логин и не верный пароль', function () { // Напиши проверку на позитивный кейс авторизации:
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // а) Ввести правильный логин
        cy.get('#pass').type('iLoveqa'); // б) Ввести неправильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверить нужный текст и наличие кнопки крестик
        cy.get('#exitMessageButton > .exitIcon').click();
         })
    it('Не верный логин и верный пароль/валидация', function () { // Напиши проверку на позитивный кейс авторизации:
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); // а) Ввести не правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // б) Ввести правильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click(); // г) Проверить нужный текст и наличие кнопки крестик
         })
    it('Не верный логин и верный пароль', function () { // Напиши проверку на позитивный кейс авторизации:
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german**@dolnikov.ru'); // а) Ввести не правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // б) Ввести правильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click(); // г) Проверить нужный текст и наличие кнопки крестик
         })
    it('Приведение к строчным буквам в логине', function () { // Напиши проверку на позитивный кейс авторизации:
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // а) Ввести логин содержащий прописные буквы
        cy.get('#pass').type('iLoveqastudio1'); // б) Ввести правильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click(); // г) Проверить нужный текст и наличие кнопки крестик
         })
})
