// // task 1
// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне. 

// let sum = 0;
// for (let i = 0; i < 11; i++) {
//     sum+=i;
// } console.log(sum);

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


// task 4
// Определить количество цифр в введенном числе.
// let n = Number(prompt("Введите число, кол.цифр которого нужно посчитать"))
// let amount = 0;
// while((n / 10 > 0) && (n>0)){
//     n= Math.floor(n/10);
//     amount += 1; 
    
// } alert("Количество цифр в числе " + amount)






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




// task 6
// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, 
// хочет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.

let first_num;
let second_num;
let user_operator;
let result;
for (let i = 0; i < 2; i++) {
    userInput = Number(prompt(`Введите число ${i + 1} из 2:`));
    if (userInput(true)) {
        first_num += userInput
    }
    
}