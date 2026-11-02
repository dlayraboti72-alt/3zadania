//-java script // 1
function calculateDiscount(price, discount) {
    if (discount < 0 || discount > 100) {
        return "Некорректная скидка!";
    }

    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;

    return finalPrice;
}

console.log(calculateDiscount(20000, 15));
console.log(calculateDiscount(50000, 20));

// 2
function getStudentLevel(score) {
    if (score < 0 || score > 100) {
        return "Некорректный балл";
    } else if (score >= 90) {
        return "Отличный уровень";
    } else if (score >= 70) {
        return "Хороший уровень";
    } else if (score >= 50) {
        return "Средний уровень";
    } else {
        return "Низкий уровень";
    }
}

console.log(getStudentLevel(95));
console.log(getStudentLevel(72));
console.log(getStudentLevel(38));

// 3
function generatePassword(length) {
    if (!Number.isInteger(length) || length < 1) {
        return "Некорректная длина пароля!";
    }

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    return password;
}

console.log(generatePassword(8));
console.log(generatePassword(12));

// 4
function countVowels(text) {
    let vowels = "аеёиоуыэюяaeiou";
    let consonants = "бвгджзйклмнпрстфхцчшщbcdfghjklmnpqrstvwxyz";
    let vowelCount = 0;
    let consonantCount = 0;

    text = text.toLowerCase();

    for (let char of text) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

console.log(countVowels("Программирование"));
console.log(countVowels("JavaScript"));

// 5

let products = [
    { name: "Ноутбук", price: 350000 },
    { name: "Телефон", price: 220000 },
    { name: "Планшет", price: 180000 },
    { name: "Компьютер", price: 500000 }
    
];

function findExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }

    let expensive = products[0];

    for (let product of products) {
        if (product.price > expensive.price) {
            expensive = product;
        }
    }

    return expensive;
}

function findCheapestProduct(products) {
    if (products.length === 0) {
        return null;
    }

    let cheapest = products[0];

    for (let product of products) {
        if (product.price < cheapest.price) {
            cheapest = product;
        }
    }

    return cheapest;
}

console.log("Самый дорогой товар:");
console.log(findExpensiveProduct(products));

console.log("Самый дешёвый товар:");
console.log(findCheapestProduct(products));

// 6
function calculateAttendance(total, attended) {
    if (
        !Number.isFinite(total) ||
        !Number.isFinite(attended) ||
        total <= 0 ||
        attended < 0 ||
        attended > total
    ) {
        return "Ошибка данных";
    }

    let percent = attended / total * 100;
    let status;

    if (percent >= 90) {
        status = "Высокая посещаемость";
    } else if (percent >= 70) {
        status = "Средняя посещаемость";
    } else {
        status = "Низкая посещаемость";
    }

    return {
        percent: percent.toFixed(1) + "%",
        status: status
    };
}

console.log(calculateAttendance(40, 38));
console.log(calculateAttendance(40, 30));
console.log(calculateAttendance(40, 20));

// 7

const students = [
    { name: "Рамазан", score: 92 },
    { name: "Никита", score: 65 },
    { name: "Виталий", score: 78 },
    { name: "Петя", score: 48 },
    { name: "Артем", score: 88 }
];

function getSuccessfulStudents(students) {
    return students
        .filter(student => student.score >= 70)
        .sort((a, b) => b.score - a.score);
}

console.log(getSuccessfulStudents(students));

// 8

let balance = 100000;
let secondBalance = 50000;

function deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
        return "Некорректная сумма";
    }

    balance += amount;
    return "Баланс пополнен на " + amount;
}

function withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
        return "Некорректная сумма";
    }

    if (amount > balance) {
        return "Недостаточно средств";
    }

    balance -= amount;
    return "Снято: " + amount;
}

function getBalance() {
    return balance;
}

function transfer(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
        return "Некорректная сумма";
    }

    if (amount > balance) {
        return "Недостаточно средств для перевода";
    }

    balance -= amount;
    secondBalance += amount;

    return "Переведено: " + amount;
}

console.log(deposit(50000));
console.log(withdraw(30000));
console.log(transfer(20000));

console.log("Первый счёт:", getBalance());
console.log("Второй счёт:", secondBalance);1

// 9 
function isPalindrome(text) {
    let original = text
        .toLowerCase()
        .replace(/[^a-zа-яё0-9]/gi, "");

    let reversed = original
        .split("")
        .reverse()
        .join("");

    return original === reversed;
}

console.log(isPalindrome("казак"));
console.log(isPalindrome("level"));
console.log(isPalindrome("javascript"));
console.log(isPalindrome("А роза упала на лапу Азора!"));

// 10
let students1 = [];

function addStudent(name, score) {
    if (!name.trim() || !Number.isFinite(score) || score < 0 || score > 100) {
        return "Некорректные данные";
    }

    students.push({ name, score });
    return "Студент добавлен";
}

function removeStudent(name) {
    let index = students.findIndex(
        student => student.name === name
    );

    if (index === -1) {
        return "Студент не найден";
    }

    students.splice(index, 1);
    return "Студент удалён";
}

function findStudent(name) {
    return students.find(
        student => student.name === name
    ) || null;
}

function showStudents() {
    console.table(students);
}

console.log(addStudent("Алия", 90));
console.log(addStudent("Руслан", 75));
console.log(addStudent("Дамир", 85));

console.log("Все студенты:");
showStudents();

console.log("Поиск студента:");
console.log(findStudent("Алия"));

console.log("Удаление студента:");
console.log(removeStudent("Руслан"));

console.log("Список после удаления:");
showStudents();
//Прктическое задание по java script функции №1
// 1
function welcome() {
  console.log("Добро пожаловать на урок JavaScript!");
}
welcome();
welcome();

// 2
function square(number) {
  return number * number;
}
console.log(square(4));
console.log(square(7));
console.log(square(10));

// 3
function sum(a, b) {
  return a + b;
}
console.log(sum(15, 25));

// 4
function rectangleArea(width, height) {
  return width * height;
}
console.log(rectangleArea(5, 8));

// 5
function checkEven(number) {
  if (number % 2 === 0) {
    return "Чётное";
  } else {
    return "Нечётное";
  }
}
console.log(checkEven(12));
console.log(checkEven(7));

// 6
function checkAge(age) {
  if (age >= 18) {
    return "Доступ разрешён";
  }
  return "Доступ запрещён";
}
console.log(checkAge(20));
console.log(checkAge(16));

// Задание 7
function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log(average(80, 90, 100));

// 8
function calculator(a, b, operation) {
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") {
    if (b === 0) return "Деление на ноль!";
    return a / b;
  }
  return "Неизвестная операция";
}
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 0, "/"));

// 9
function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Некорректный балл";
  }
  if (score >= 90) {
    return "Отлично";
  } else if (score >= 70) {
    return "Хорошо";
  } else if (score >= 50) {
    return "Удовлетворительно";
  } else {
    return "Неудовлетворительно";
  }
}
console.log(getGrade(95));
console.log(getGrade(78));
console.log(getGrade(45));

// 10
function calculatePrice(price) {
  if (price >= 20000) {
    return price * 0.9;
  }
  return price;
}
console.log(calculatePrice(15000));
console.log(calculatePrice(30000));

// 11
function findMax(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}
console.log(findMax(12, 45, 28));

// 12
function checkAccess(age, registered, permission) {
  if (age >= 16 && registered && permission) {
    return "Доступ в лабораторию разрешён";
  }
  return "Доступ запрещён";
}
console.log(checkAccess(17, true, true));
console.log(checkAccess(15, true, true));
console.log(checkAccess(18, true, false));
//Практическое задание java script фукции №2
// 1
function greet(name) {
  console.log("Привет, " + name + "!");
}
greet("Алия");
greet("Данияр");
greet("Иван");

// 2
function square(num) {
  return num * num;
}
console.log(square(6));
console.log(square(4));
console.log(square(10));

// 3
function sum(a, b) {
  return a + b;
}
console.log(sum(15, 25));
console.log(sum(7, 3));
console.log(sum(100, 200));

// 4
function minutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(minutesToSeconds(5));
console.log(minutesToSeconds(1));
console.log(minutesToSeconds(10));

// 5
function area(side) {
  return side * side;
}
console.log(area(7));
console.log(area(5));
console.log(area(12));

// 6
function checkNumber(num) {
  if (num % 2 === 0) {
    return "Чётное число";
  } else {
    return "Нечётное число";
  }
}
console.log(checkNumber(9));
console.log(checkNumber(4));
console.log(checkNumber(0));

// 7
function checkAge(age) {
  if (age >= 18) {
    return "Совершеннолетний";
  }
  return "Несовершеннолетний";
}
console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(25));

// 8
function findMax(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}
console.log(findMax(12, 45, 30));
console.log(findMax(100, 20, 50));
console.log(findMax(5, 5, 10));

// 9
function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log(average(80, 90, 100));
console.log(average(60, 70, 80));
console.log(average(100, 100, 100));

// 10
function discount(price) {
  if (price > 10000) {
    return price * 0.9;
  }
  return price;
}
console.log(discount(20000));
console.log(discount(8000));
console.log(discount(10000));

// 11
function calculator(a, b, operation) {
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") {
    if (b === 0) return "Деление на ноль!";
    return a / b;
  }
  return "Неизвестная операция";
}
console.log(calculator(20, 5, "/"));
console.log(calculator(10, 0, "/"));
console.log(calculator(7, 3, "*"));

// 12
function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Некорректный балл";
  }
  if (score >= 90) {
    return "Отлично";
  } else if (score >= 70) {
    return "Хорошо";
  } else if (score >= 50) {
    return "Удовлетворительно";
  } else {
    return "Неудовлетворительно";
  }
}
console.log(getGrade(85));
console.log(getGrade(95));
console.log(getGrade(40));

// 13
function checkPassword(password) {
  if (password.length >= 8) {
    return "Надёжная длина пароля";
  }
  return "Слишком короткий пароль";
}
console.log(checkPassword("JavaScript123"));
console.log(checkPassword("12345"));
console.log(checkPassword("qwertyui"));

// 14
function taxiPrice(km) {
  return (500 + km * 120) + " тенге";
}
console.log(taxiPrice(10));
console.log(taxiPrice(0));
console.log(taxiPrice(5));

// 15
function withdraw(balance, amount) {
  if (amount <= 0) {
    return "Сумма снятия должна быть больше 0";
  }
  if (amount > balance) {
    return "Недостаточно средств";
  }
  return balance - amount;
}
console.log(withdraw(50000, 20000));
console.log(withdraw(50000, 60000));
console.log(withdraw(50000, 0));