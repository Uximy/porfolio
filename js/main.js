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

// let text = "Специализируюсь на разработке веб-сайтов с использованием языков программирования, таких как PHP и C#. Мои навыки охватывают создание плагинов и разработку ботов для платформы Discord. Кроме того, у меня есть опыт в создании REST API и Server Manager. Мое стремление к росту и развитию подразумевает постоянное расширение знаний и навыков, не ограничиваясь текущими достижениями.";
// let elem = document.getElementById("result");
// let delay = 50;

// let print_text = function (text, elem, delay) {
//     if(text.length > 0) {
//         elem.innerHTML += text[0];
//         setTimeout(
//             function() {
//                 print_text(text.slice(1), elem, delay); 
//             }, delay
//         );
//     }
// }

// print_text(text, elem, delay);