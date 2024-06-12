class Shape{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    getArea(){
        return this.width * this.height
    }
}

let rec1 = new Shape(3, 4)
console.log(rec1.getArea());

class Rectangle extends Shape{
    constructor(width, height){
        super(width, height)
    }

    getArea(){
        return this.width * this.height
    }

    getDiagonal() {
        return Math.sqrt(this.width * this.width + this.height * this.height);
    }

}

class Triangle {
    constructor(base, height){
        this.base = base
        this.height = height
    }

    getArea(){
        return 0.5 * this.base * this.height
    }

}


class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height)
        this.radius = radius
    }

    getArea(){
        const PI = Math.PI
        return PI * this.radius * this.radius
    }

}

let ractangle = new Rectangle(3,4)
console.log(ractangle.getDiagonal());

let triangle = new Triangle(5,10)
console.log(triangle.getArea());

let circle = new Circle(5, 5, 5)
console.log(circle.getArea());