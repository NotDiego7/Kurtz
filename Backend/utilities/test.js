class Animal {
    constructor(name, age, speed) {
        this.name = name
        this.age = age
        this.speed = speed
    }

    greet() {
        return `Name's ${this.name}.`
    }
}

class Hawk extends Animal{
    constructor(name, age, speed) {
        super(name, age, speed)
        this.name = name
        this.age = age
        this.speed = speed
        this.typeOfAnimal = "hawk"
    }

    hawkGreet() {
        return `${super.greet()} I'm a ${this.typeOfAnimal}.`
    }

    flying() {
        return `Flying at ${this.speed}km/h.`
    }
}

const buddy = new Hawk('Buddy', 3, 100)
console.log(`${buddy.hawkGreet()} - I'm also ${buddy.flying()}`)