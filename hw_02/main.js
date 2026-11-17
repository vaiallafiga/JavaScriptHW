// task - 1 
// Напишите функцию showShoppingList(items). С помощью forEach выведите каждый элемент массива в
// отдельной строке.
// Пример: ["Хлеб", "Молоко", "Яблоки"] → три строки с названиями покупок.
// function showShoppingList(items) {
//     items.forEach(function(item){
//         console.log(item);
//     })

// }
// showShoppingList(["Хлеб", "Молоко", "Яблоки"])




// ----------------------------------------------------------------------

// task 2
// Напишите функцию getEvenNumbers(numbers). С помощью filter верните новый массив только с чётными
// числами. Исходный массив не изменяйте.
// Пример: [3, 8, 11, 14, 5, 20] → [8, 14, 20]. Если чётных чисел нет, верните [].

// function getEvenNumbers(numbers) {
//     return numbers.filter(function(number){
//         return number % 2 === 0;
//     })
// }
// console.log(getEvenNumbers([3, 8, 11, 14, 5, 20]))
// console.log(getEvenNumbers([1, 3, 5]));

// ----------------------------------------------------------------------

// task 3
// Напишите функцию findGreaterThan(numbers, limit). С помощью find верните первое число, которое
// больше limit. Если такого числа нет, верните undefined.
// Пример: массив [4, 12, 7, 18], limit = 10 → 12. При limit = 20 → undefined.

// function findGreaterThan(numbers, limit) {
//     return numbers.find(function(number){
//         return number > limit;
//     })
// }

// console.log(findGreaterThan([4,12,7,18], 10))

// ----------------------------------------------------------------------

// task 4
// Напишите функцию calculateTotal(prices). С помощью reduce верните сумму всех цен. 
// Начальное значение суммы должно быть 0.
// Пример: [100, 250, 50] → 400. Для пустого массива [] результат должен быть 0

// function calculateTotal(prices) {
//     return prices.reduce(function(sum, price){
//         return sum += price;
//     },0)
// }
// console.log(calculateTotal([100, 250, 50]))



// ----------------------------------------------------------------------


// task 5
// Напишите функцию getMaxNumber(numbers). Найдите и верните самое большое число с помощью цикла
// for. Считайте, что массив непустой. Проверьте функцию также на отрицательных числах.
// Примеры: [6, 15, 2, 9] → 15; [-8, -3, -10] → -3.

// function getMaxNumber(numbers) {
//     let biggest_num = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > biggest_num){
//             biggest_num = numbers[i];
//         } 
//     } return biggest_num
// } console.log(getMaxNumber([6, 15, 2, 9]))
// console.log(getMaxNumber([-8, -3, -10]))