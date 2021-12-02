// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phome = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(9,'sergey', 'ivanov', 'ivanov@gmail.com', "+380506532487"),
    new User(4,'maks', 'ibragimov', 'ibragimov@gmail.com', "+380506532451"),
    new User(7,'kostya', 'pupkin', 'pupkin@gmail.com', "+380506532189"),
    new User(2,'olga', 'simonova', 'simonova@gmail.com', "+380506532235"),
    new User(5,'marina', 'korg', 'korg@gmail.com', "+380506532487"),
    new User(6,'aleksander', 'kosenko', 'kosenko@gmail.com', "+380506532897"),
    new User(3,'vadim', 'sivov', 'sivov@gmail.com', "+380506532259"),
    new User(8,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355"),
    new User(1,'anna', 'sidorova', 'sidorova@gmail.com', "+380508972233"),
    new User(10,'oleg', 'aynykovich', 'aynykovich@gmail.com', "+380508563236")
    ]
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let userFilter = users.filter(value => value.id % 2 ===0);
console.log(userFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let userSort = users.sort((c, d) => c.id - d.id);
console.log(userSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor (id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phome = phone;
        this.order = order;

    }
}
let client = new Client (1, 'maks', 'ibragimov', 'ibragimov@gmail.com', "+380506532451", ['chair', 'cupboard', 'table'])
console.log(client);

// створити пустий масив, наповнити його 10 об'єктами Client
class Сlient {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(2,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['chair', 'cupboard', 'table']),
    new Client(1,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['chair', 'table']),
    new Client(3,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['cupboard']),
    new Client(5,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['chair', 'bed', 'table']),
    new Client(4,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['chair', 'table']),
    new Client(6,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['chair', 'cupboard', 'table', 'bed']),
    new Client(9,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['chair', 'bed', 'table', 'curbstone']),
    new Client(7,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['chair']),
    new Client(8,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['chair', 'cupboard', 'table', 'bed', 'curbstone']),
    new Client(10,'david', 'ivanovich', 'ivanovich@gmail.com', "+3805012312355", ['bed'])
]
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSort = clients.sort((a,b) => a.order.length-b.order.length);
console.log(clientSort);
