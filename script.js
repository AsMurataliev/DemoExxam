// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

let Order = {
    number: 1,
    day: 11,
    month: 9,
    year: 2024,
    device: "iPhone",
    problem_type: "проблема с экраном",
    description: "Не работает экран",
    client: "Андрей",
    status: "в работе",
};

// определяем обработчик для маршрута "/"
app.get("/", function(request, response) {
     
    // отправляем ответ
    response.send("Order");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);