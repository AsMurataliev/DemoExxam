// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

const jsoninterpr = express.json();

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

let repo =[]
repo.push(order);

// определяем обработчик для маршрута "/"
app.get("/", (request, response) =>{
     
    // отправляем ответ
    response.send(repo);
});

app.post("/", jsoninterpr, (request, response) => {

    let update = request.body;
    repo.push(update);
    response.send(update);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);