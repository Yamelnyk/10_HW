'use strict'

/*Задача 1 - ‘FizzBuzz’ через ітератор та генератор
 Є така класична задача:

'Напишіть програму, яка виводить на екран числа від 1 до 100. При цьому замість чисел, 
кратних трьом, програма повинна виводити слово Fizz, а замість чисел, кратних п'яти – слово Buzz. 
Якщо число кратно п'ятнадцяти, то програма має виводити слово FizzBuzz'

	Вирішіть цю задачу:  

	1) за допомогою ітератора

	2) за допомогою генератора */
    
const range = {
    from: 1,
    to: 100
}

range[Symbol.iterator] = function() {
    let current = this.from;
    let last = this.to;

    return {
        next () {
            if (current % 15 === 0) {
                let result = {
                    value: 'FizzBuzz',
                    done: false
                }
                current++;
                return result
            }
            if (current % 3 === 0) {
                let result = {
                    value: 'Fizz',
                    done: false
                }
                current++;
                return result
            }
            if (current % 5 === 0) {
                let result = {
                    value: 'Buzz',
                    done: false
                }
                current++;
                return result
            }
            
            if (current <= last) {
                return {
                    value: current++,
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}
//  for (let s of range) {
//     console.log(s)
//  }

//  2) за допомогою генератора

 function* generatorNum() {
    let current = 1;
    let last = 100;

    while (current <= last) {
        if (current % 15 === 0) {
            yield 'FizzBuzz';
            current++
        } else if (current % 3 === 0) {
            yield 'Fizz';
            current++
        } else if (current % 5 === 0) {
            yield 'Buzz';
            current++
        } else {
            yield current++;
        }
    }
}

for (let num of generatorNum()) {
    console.log(num);
}

/*Напишіть функцію-генератор, яка генерує випадкові числа. 

Функція приймає параметрами максимальне значення рандомного числа та кількість рандомних чисел які функція повертає:

function* generateRandomNumbers(max, quantity) {
	// тут ваш код
}

// тут виклик та ітерування в циклі
*/

function* generateRandomNumbers(max, quantity) {
	let count = 0;
    if (quantity <= 0) {
        console.log('Incorrecr quantity')
    }
    while (count < quantity) {
        yield Math.round(Math.random() * max);
        count++;
    }
}

let gen = generateRandomNumbers(42, 3);

for (let num of gen) {
	console.log(num);
}