// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//     div.innerText = `${simpson.name} ${simpson.surname} ${simpson.age}`;
//     document.body.appendChild(div);
// }
//
// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//     Для кожної властивості елементу створити окремий блок, та помістити його у div.member
// let simpsonsContainer = document.getElementsByClassName('member')[0];
// for (const item of simpsons) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('member')
//     let h2 = document.createElement('h2');
//     h2.innerText = `${item.name}`;
//     let h3 = document.createElement('h3');
//     h3.innerText = `${item.surname}`;
//     let div = document.createElement('div');
//     div.innerText = `${item.age}`;
//     let p = document.createElement('p');
//     p.innerText = `${item.info}`;
//     let img = document.createElement('img');
//     img.src = `${item.photo}`;
//     divElement.appendChild(h2);
//     divElement.appendChild(h3);
//     divElement.appendChild(div);
//     divElement.appendChild(p);
//     divElement.appendChild(img);
//     simpsonsContainer.appendChild(divElement);
// }
// или
// simpsons.forEach(item => {
//     let div = document.createElement('div');
//     div.classList.add('member');
//     for (let x in item) {
//         if (x !== 'photo') {
//             let divElement = document.createElement('div');
//             divElement.innerText = `${x}:${item[x]}`
//             div.appendChild(divElement);
//             } else {
//             let img = document.createElement('img');
//             img.src = item[x];
//             div.appendChild(img);
//             }
//         }
//     document.body.appendChild(div);
// })

// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// coursesArray.forEach(item => {
//     let itemDiv = document.createElement('div');
//     itemDiv.classList.add('item');
//     let titleDiv = document.createElement('div');
//     let durationDiv = document.createElement('div');
//     let monthDiv = document.createElement('div');
//     let hourDiv = document.createElement('div');
//     durationDiv.append(monthDiv,hourDiv)
//     durationDiv.style.display = 'flex';
//     monthDiv.style.width = '25%';
//     hourDiv.style.width = '75%';
//     let modulesDiv = document.createElement('div');
//
//     titleDiv.innerText = item.title;
//     monthDiv.innerText = item. monthDuration;
//     hourDiv.innerText = item.hourDuration;
//     item.modules.forEach(module => {
//         let moduleDiv = document.createElement('div');
//         moduleDiv.innerText = module;
//         modulesDiv.appendChild(moduleDiv);
//     })
//     itemDiv.append(titleDiv,durationDiv,modulesDiv);
//     document.body.appendChild(itemDiv);
//
// })


// или
for (const course of coursesArray) {
    let courseElement = document.createElement('course');
    let titleElement = document.createElement('div');
    let durationDiv = document.createElement('div');
    let monthDurationElement = document.createElement('div');
    let hourDurationElement = document.createElement('div');
    durationDiv.append(monthDurationElement,hourDurationElement);
    durationDiv.style.display = 'flex';
    monthDurationElement.style.width = '25%';
    hourDurationElement.style.width = '75%';

    titleElement.innerText = course.title;
    monthDurationElement.innerText = course.monthDuration;
    hourDurationElement.innerText = course.hourDuration;

    let modulesElement = document.createElement('ul');

    for (const moduleItem of course.modules) {
        let module = document.createElement('li');
        module.innerText = moduleItem;
        modulesElement.appendChild(module);
    }
    courseElement.appendChild(titleElement);
    courseElement.append(durationDiv);
    courseElement.appendChild(modulesElement);
    document.body.appendChild(courseElement);
    }