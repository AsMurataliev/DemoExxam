// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

let order = {
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

let repo =[];


// определяем обработчик для маршрута "/"
app.get("/", function(request, response) {
     
    // отправляем ответ
    response.send(order);
});

app.post("/", function(request, response) {
    let update = request.body;
    repo.push(update);
    request.send(repo);
}
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);