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
    master: "Миша"
};

let repo = []
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

app.put("/:number", jsoninterpr, (request, response) => {
    const number = request.params.number;
    let dto = request.body;
    for(let i=0; i < repo.length; i++){
        if(repo[i].number==number) 
        {
            let update = repo[i];
            update.status = dto.status;
            update.description = dto.description;
            update.master = dto.master;
            response.send(update);
            return;
        }
    }
    response.send("Нет таких данные")
});


// начинаем прослушивать подключения на 3000 порту
app.listen(3000);