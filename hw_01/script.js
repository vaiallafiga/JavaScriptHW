// // task 1
// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне. 

// let sum = 0;
// for (let i = 0; i < 11; i++) {
//     sum+=i;
// } console.log(sum);


// --------------------------------------------------

// // task 2
// Запросить 2 числа и найти только наибольший общий
// делитель.

// let a = parseInt(prompt("Введите первое число: "));
// let b = parseInt(prompt("Введите второе число: "));
// let nod = 1;

// let min = a < b ? a:b;

// for (let i = min; i >= 1; i--){
//     if (a % i === 0 && b % i === 0){

    
//         nod = i;
//         break;
// }
// }
// alert("Наибольшим делителем является: " + nod);
// console.log(nod)


// --------------------------------------------------

// task 3
// Запросить у пользователя число и вывести все делители
// этого числа.

// let all_divs = []
// let n = Number(prompt("Введите число, делителей которого необходимо найти"))

// for (let i = 1 ; i <= n ; i++){
//     if (n % i === 0){
//         all_divs.push(i);
        
//     }
// }
// console.log(all_divs)


// --------------------------------------------------

// task 4
// Определить количество цифр в введенном числе.
// let n = Number(prompt("Введите число, кол.цифр которого нужно посчитать"))
// let amount = 0;
// while((n / 10 > 0) && (n>0)){
//     n= Math.floor(n/10);
//     amount += 1; 
    
// } alert("Количество цифр в числе " + amount)



// --------------------------------------------------


// task 5
// Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// let evenCount = 0;
// let oddCount = 0;

// let userInput; 


// for (let i = 0; i < 10; i++) {

//     userInput = Number(prompt(`Введите число ${i + 1} из 10:`));


//     if (isNaN(userInput)) {
//         alert("Пожалуйста, введите корректное число.");
//         i--; 
//         continue;
//     }


//     if (userInput > 0) {
//         positiveCount++;
//     } else if (userInput < 0) {
//         negativeCount++;
//     } else {
//         zeroCount++;
//     }


//     if (userInput % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }


// alert(`Статистика введенных чисел:
// Положительные: ${positiveCount}
// Отрицательные: ${negativeCount}
// Нули: ${zeroCount}
// Четные: ${evenCount}
// Нечетные: ${oddCount}`);


// --------------------------------------------------

// task 6
// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, 
// хочет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.

// let continueCalculation = true;

// do {
//     let num1 = Number(prompt("Введите первое число:"));
    
//     let operator = prompt("Введите знак операции (+, -, *, /):");
    
//     let num2 = Number(prompt("Введите второе число:"));

//     let result;
//     let hasError = false;

//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             if (num2 === 0) {
//                 alert("Ошибка: деление на ноль невозможно!");
//                 hasError = true;
//             } else {
//                 result = num1 / num2;
//             }
//             break;
//         default:
//             alert("Ошибка: неверный знак операции!");
//             hasError = true;
//     }

//     if (!hasError) {
//         alert(`Результат: ${num1} ${operator} ${num2} = ${result}`);
//     }

//     continueCalculation = confirm("Хотите решить еще один пример?");

// } while (continueCalculation);

// alert("Спасибо за использование калькулятора! До свидания.");


// --------------------------------------------------

// task 7
// Запросить у пользователя число и на сколько цифр его
// сдвинуть. Сдвинуть цифры числа и вывести результат (если
// число 123456 сдвинуть на 2 цифры, то получится 345612).
// let strNum = prompt("Введите число:");
// let shift = Number(prompt("На сколько цифр сдвинуть число?"));

// if (strNum && !isNaN(shift)) {
//     let len = strNum.length;

//     shift = shift % len;

//     if (shift < 0) {
//         shift = (shift % len + len) % len;
//     }

//     let shiftedStr = strNum.slice(shift) + strNum.slice(0, shift);

//     alert(`Исходное число: ${strNum}\nРезультат сдвига на ${shift} цифр(ы): ${shiftedStr}`);
// } else {
//     alert("Ошибка: введены некорректные данные!");
// }




// --------------------------------------------------



// task 8 
// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK. 


// const days = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье"
// ];

// let index = 0;
// let keepGoing = true;

// while (keepGoing) {
//     keepGoing = confirm(`${days[index]}. Хотите увидеть следующий день?`);
    
//     if (keepGoing) {
//         index = (index + 1) % days.length;
//     }
// }

// alert("Программа завершена!");



// --------------------------------------------------




// task 9 
// Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.
// let fullTable = "";

// for (let i = 2; i <= 9; i++) {
//     let currentTable = `--- Таблица умножения на ${i} ---\n`;

//     for (let j = 1; j <= 10; j++) {
//         currentTable += `${i} * ${j} = ${i * j}\n`;
//     }

//     fullTable += currentTable + "\n";
// }

// console.log(fullTable);

// alert(fullTable);

// --------------------------------------------------

// task 10
// Игра «Угадай число» методом бинарного поиска

// alert("Загадайте число от 0 до 100, а я попробую его отгадать!");

// let min = 0;
// let max = 100;
// let attempts = 0; 

// while (min <= max) {
//     let n = Math.floor((min + max) / 2);
//     attempts++;
//     let answer = prompt(`Попытка ${attempts}: Ваше число > ${n}, < ${n} или == ${n}?\n(Введите `>`, `<` или `=`)`);
//     if (answer === null) {
//         alert("Игра прервана пользователем.");
//         break;
//     }
//     answer = answer.trim();
//     if (answer === ">") {
//         min = n + 1;
//     } else if (answer === "<") {
//         max = n - 1;
//     } else if (answer === "=" || answer === "==") {
//         alert(`Ура! Я угадал ваше число ${n} за ${attempts} попыток(и)!`);
//         break;
//     } else {
//         alert("Пожалуйста, введите корректный знак: `>`, `<` или `=`");
//         attempts--; 
//     }
//     if (min > max) {
//         alert("Хм... Кажется, в ответах закралась ошибка, диапазон исчерпан!");
//         break;
//     }
// }