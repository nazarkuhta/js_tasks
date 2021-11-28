//  - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//  -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//  -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//  -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//  -- changeYear (newValue) - змінює рік випуску на значення newValue
//  -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// let Car=(model,producer,year,maxSpeed,volume)=>{
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.volume = volume
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function (){
//         for (let key in this) {
//             if (typeof this[key] !==`function`) console.log(`${key}-${this[key]}`)
//         }
//     }
//     this.newMaxSpeed = function (newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//     this.newYear = function (newValue){
//         this.year = newValue
//     }
//     this.addDriver = function (driver){
//         this.driver = driver
//     }
// }
// let addCar = new Car('Porshe', `Italy`,2020,240,5.0)
// console.log(addCar)
// addCar.drive()
// addCar.info()
// addCar.newMaxSpeed(100)
// addCar.newYear(2005)
// addCar.addDriver(`vasya`)
// console.log(addCar)


//  - (Те саме, тільки через клас)
//  Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//  -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//  -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//  -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//  -- changeYear (newValue) - змінює рік випуску на значення newValue
//  -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model,producer,year,maxSpeed,volume) {
//         this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.volume = volume
//     }
//     drive=()=>{
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
//     info=()=>{
//         for (let key in this) {
//             if (typeof this[key] !==`function`) console.log(`${key}-${this[key]}`)
//         }
//     }
//     newMaxSpeed=(newSpeed)=>{
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//     newYear=(newValue)=>{
//         this.year = newValue
//     }
//     addDriver=(driver)=>{
//         this.driver = driver
//     }
// }
// let addCar = new Car('Porshe', `Italy`,2020,240,5.0)
// console.log(addCar)
// addCar.drive()
// addCar.info()
// addCar.newMaxSpeed(100)
// addCar.newYear(2005)
// addCar.addDriver(`vasya`)
// console.log(addCar)

//  -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//  Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//          За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let Popelushka=(name,age,size)=>{
    this.name = name
    this.age=age
    this.size=size
}
let popelushkaArr =[
    new Popelushka(`olya`,23,35),
    new Popelushka(`olya`,23,30),
    new Popelushka(`olya`,23,39),
    new Popelushka(`olya`,23,47),
    new Popelushka(`olya`,23,36),
    new Popelushka(`olya`,23,42),
    new Popelushka(`olya`,23,40),
    new Popelushka(`olya`,23,37),
    new Popelushka(`olya`,23,33),
]
class Prince{
    constructor(name,age,tufelka) {
        this.name = name
        this.age = age
        this.tufelka = tufelka
    }
}
let prince = new prince('vasya',30,37)

let para=(popelushkaArr,prince)=>{
    for (let item of popelushkaArr) {
        if (item.size===prince.tufelka){
            return `this is your popelushka ${item.name}`
        }
    }
}
console.log(para(popelushkaArr,prince))

//          Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let princess = popelushkaArr.find((item)=> item.size === prince.tufelka )









