//4. Интернет-магазин занимается продажей различных сувениров и безделушек.
// Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, з
// апрашивающую у пользователя количество тех и других покупок,
// после чего выведите на экран общий вес посылки.

let souvenir = prompt('Введите количество сувениров')
let bauble = prompt('Введите количество безделушек')
let a = 75
let b = 112

let result = souvenir * a + bauble * b
alert(`Общий вес: ${result}г.`)