"use strict";

let age = confirm('Вам уже исполнилось 18 лет?');

if (age) {
    alert('Вы подтвердили, что вам есть 18 лет.');
} else {
    alert('Доступ к сайту запрещен');
}