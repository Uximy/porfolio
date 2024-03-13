document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();

    var birthDate = new Date(2000, 11 - 1, 18);
        
    var age = calculateAge(birthDate, currentDate);

    var years = document.getElementById("years");

    years.style = "font-style: normal";

    years.textContent = age + " " + getYearsWord(age);

    function calculateAge(birthDate, currentDate) {
        var age = currentDate.getFullYear() - birthDate.getFullYear();
        // Уточняем возраст, учитывая месяц и день рождения
        if (
            currentDate.getMonth() < birthDate.getMonth() ||
            (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    }

    function getYearsWord(age) {
        // Определяем правильное склонение слова "год" в зависимости от числа
        if (age % 10 === 1 && age % 100 !== 11) {
            return "год";
        } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
            return "года";
        } else {
            return "лет";
        }
    }




    fetch('../config/project.json')
        .then((response) => response.json())
        .then((json) => {
            const cards = document.querySelectorAll(".cards-works .info");

            function checkOneId(json, cardId) {
                for (const key in json) {
                    if (cardId == key) {
                        return 1;
                    }
                }
                return 0;
            }

            

            cards.forEach((card) => {
                if (checkOneId(json, card.id)) {
                    let data = json[card.id];

                    let count = data.view;
                    let title = card.getElementsByClassName("title")[0];
                    let description = card.getElementsByTagName("p")[0];
                    let view = card.querySelectorAll(".view b")[0];
                    let link = card.querySelectorAll(".right-column a")[0];
                    let date = card.querySelectorAll(".date b")[0];


                    link.addEventListener("click", (e) => {
                        data.view = count++;
                        // console.log(data.view);

                        // let request = indexedDB.open("views", 1);

                        // request.onupgradeneeded = function() {
                        //     let db = request.result;
                        //     if (!db.objectStoreNames.contains('views')) { // если хранилище "views" не существует
                        //         const views = db.createObjectStore('views', {keyPath: 'id'});
                        //         views.createIndex("viewsList", ["views_id", "count"], {unique: false});
                        //     }
                        // };

                        // request.onerror = function() {
                        //     console.error("Error", request.error);
                        // };

                        // request.onsuccess = function() {
                        //     let db = request.result;
                        //     const transaction = db.transaction('views', "readwrite");

                        //     const view = transaction.objectStore("views");

                        //     view.put({id: 1, views_id: card.id, count: data.view});

                        //     const ress = view.get(1)
                        // };

                    });

                    title.innerHTML =  data.title;
                    description.innerHTML = data.description;
                    view.innerHTML = data.view;
                    link.setAttribute("href", data.link);
                    link.setAttribute("target", "_blank");
                    date.innerHTML= data.date;

                    
                }
            })
        });

    document.getElementById("close_development")
    .addEventListener("click", (e) => {
        e.preventDefault();
        var block_dev = document.getElementById("development");
        block_dev.remove();
    });

});